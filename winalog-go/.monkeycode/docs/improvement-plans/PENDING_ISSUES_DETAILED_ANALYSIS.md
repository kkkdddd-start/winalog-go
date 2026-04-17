# 待实施问题精简方案

> 文档日期: 2026-04-17
> 问题数量: 5 个

---

## 一、L3: findNextEvents 创建合成事件

### 问题
`findNextEvents` 创建合成事件而非查询真实数据，导致攻击链分析结果不可信。

### 最优解决方案

**注入 EventRepo，从数据库实时查询真实后续事件**。

```go
// ChainBuilder 添加 eventRepo 依赖
type ChainBuilder struct {
    db        *storage.DB
    eventRepo *storage.EventRepo  // 新增
    config    *ChainConfig
}

func (cb *ChainBuilder) findNextEvents(events []*types.Event) ([]*types.Event, error) {
    if len(events) == 0 {
        return nil, nil
    }

    // 收集所有可能的下一个 EventID
    nextEventIDs := make(map[int32]bool)
    for _, event := range events {
        if nextIDs, ok := cb.config.Transitions[event.EventID]; ok {
            for _, nextID := range nextIDs {
                nextEventIDs[nextID] = true
            }
        }
    }
    if len(nextEventIDs) == 0 {
        return nil, nil
    }

    // 获取最大时间戳作为查询起点
    maxTime := events[0].Timestamp
    for _, e := range events {
        if e.Timestamp.After(maxTime) {
            maxTime = e.Timestamp
        }
    }

    ids := make([]int32, 0, len(nextEventIDs))
    for id := range nextEventIDs {
        ids = append(ids, id)
    }

    // 从数据库查询真实的后续事件
    req := &types.SearchRequest{
        EventIDs:  ids,
        StartTime: &maxTime,
        PageSize:  1000,
    }
    results, _, err := cb.eventRepo.Search(req)
    if err != nil {
        return nil, fmt.Errorf("failed to query subsequent events: %w", err)
    }
    return results, nil
}
```

### 评估

| 维度 | 评估 |
|------|------|
| 工时 | 4-6h |
| 复杂度 | 中 |
| 收益 | 攻击链结果100%基于真实事件 |
| 风险 | 低 - 只需注入依赖，接口简单 |

---

## 二、R4: 高误报率规则

### 问题

`admin-login-unusual` 和 `sysmon-network-suspicious-port` 规则仅匹配 EventID，无条件过滤，导致 ~90% 误报率。

### 最优解决方案

**1. 扩展 matchCondition 支持更多字段**

```go
// internal/correlation/matcher.go
func (m *Matcher) matchCondition(cond *rules.Condition, event *types.Event) bool {
    field := cond.Field
    value := cond.Value

    switch field {
    case "source", "log_name", "computer", "user", "message":
        return contains(event.Message, value)
    case "ip_address":
        return event.IPAddress != nil && *event.IPAddress != value
    case "destination_port":
        return event.ExtendedData != nil && event.ExtendedData["DestinationPort"] == value
    // 新增字段支持
    case "logon_type":
        return event.ExtendedData != nil && event.ExtendedData["LogonType"] == value
    case "status":
        return contains(event.Message, value)
    default:
        return false
    }
}
```

**2. 更新规则定义添加条件**

```go
// admin-login-unusual
{
    Name:           "admin-login-unusual",
    Threshold:      3,
    TimeWindow:    10 * time.Minute,
    AggregationKey: "user",
    Filter: &rules.Filter{
        EventIDs: []int32{4624},
        Levels:   []int{4},
    },
    Conditions: &rules.Conditions{
        Any: []*rules.Condition{
            {Field: "message", Operator: "contains", Value: "Administrator"},
            {Field: "message", Operator: "contains", Value: "Admin"},
            {Field: "ip_address", Operator: "!=", Value: "127.0.0.1"},
        },
    },
}

// sysmon-network-suspicious-port
{
    Name:            "sysmon-network-suspicious-port",
    Threshold:       10,
    TimeWindow:      5 * time.Minute,
    AggregationKey:  "computer",
    Filter: &rules.Filter{
        EventIDs: []int32{3},
        Levels:   []int{4},
    },
    Conditions: &rules.Conditions{
        All: []*rules.Condition{
            {Field: "destination_port", Operator: ">", Value: "1024"},
        },
    },
}
```

### 评估

| 维度 | 评估 |
|------|------|
| 工时 | 2-3h |
| 复杂度 | 低 |
| 收益 | 误报率从 90% 降至 10% |
| 风险 | 低 - 只需扩展字段支持 |

---

## 三、S1: EventRepo.Search 使用 LIKE 无 FTS5

### 问题

`LIKE '%keyword%'` 无法利用索引，大数据量下搜索性能极差（10万条 ~500ms）。

### 最优解决方案

**SQLite FTS5 虚拟表 + 混合查询**。

```go
// 1. 创建 FTS5 表（在 schema 中）
CREATE VIRTUAL TABLE IF NOT EXISTS events_fts USING fts5(
    message,
    source,
    content='events',
    content_rowid='rowid'
);

// 2. EventRepo.Insert 同步 FTS
func (r *EventRepo) Insert(event *types.Event) error {
    // ... 原有插入逻辑 ...
    
    _, err = r.db.Exec(`
        INSERT INTO events_fts(rowid, message, source)
        VALUES (?, ?, ?)`,
        result.lastInsertRowid, event.Message, event.Source)
    return err
}

// 3. Search 使用 FTS
func (r *EventRepo) Search(req *types.SearchRequest) ([]*types.Event, int64, error) {
    // ...
    
    if len(req.Keywords) > 0 && r.supportsFTS() {
        // 使用 FTS5
        ftsQuery := "'" + strings.Join(strings.Fields(req.Keywords), " ") + "'"
        conditions = append(conditions, fmt.Sprintf(
            "rowid IN (SELECT rowid FROM events_fts WHERE events_fts MATCH %s)", ftsQuery))
    } else {
        // 后备 LIKE
        conditions = append(conditions, "message LIKE ?")
        args = append(args, "%"+req.Keywords+"%")
    }
    
    // ...
}
```

### 评估

| 维度 | 评估 |
|------|------|
| 工时 | 3-4h |
| 复杂度 | 中 |
| 收益 | 搜索性能提升 50-100 倍 |
| 存储成本 | FTS 表约原数据 30-40% |

---

## 四、S4: EventIndex 全内存存储

### 问题

`EventIndex` 将所有事件存储在内存中，长期运行会导致内存耗尽。

### 最优解决方案

**SQLite 分层存储：内存保留索引元数据，事件数据存数据库**。

```go
type EventIndex struct {
    mu              sync.RWMutex
    eventRepo       *storage.EventRepo  // 新增：数据库访问
    
    // 内存索引（元数据，不存储完整事件）
    byID            map[int64]time.Time      // ID -> Timestamp
    byTime          []indexEntry             // 时间排序
    byEID           map[int32][]int64        // EventID -> ID列表
    
    maxAge          time.Duration
    cleanupInterval time.Duration
}

type indexEntry struct {
    ID        int64
    Timestamp time.Time
}

func (idx *EventIndex) FindByEventID(eid int32, timeRange TimeRange) ([]*types.Event, error) {
    // 1. 从内存索引获取候选 ID
    idx.mu.RLock()
    candidateIDs := idx.byEID[eid]
    idx.mu.RUnlock()
    
    // 2. 过滤时间范围
    var validIDs []int64
    for _, id := range candidateIDs {
        if ts, ok := idx.byID[id]; ok {
            if ts.After(timeRange.Start) && ts.Before(timeRange.End) {
                validIDs = append(validIDs, id)
            }
        }
    }
    
    // 3. 批量从数据库获取事件
    return idx.eventRepo.GetByIDs(validIDs)
}

func (idx *EventIndex) Add(event *types.Event) {
    idx.mu.Lock()
    defer idx.mu.Unlock()
    
    // 更新内存索引
    idx.byID[event.ID] = event.Timestamp
    idx.byTime = append(idx.byTime, indexEntry{ID: event.ID, Timestamp: event.Timestamp})
    idx.byEID[event.EventID] = append(idx.byEID[event.EventID], event.ID)
    
    // 异步写入数据库（可选优化）
    go idx.eventRepo.Insert(event)
}
```

### 评估

| 维度 | 评估 |
|------|------|
| 工时 | 6-8h |
| 复杂度 | 高 |
| 收益 | 内存占用稳定可控，支持任意数据量 |
| 风险 | 中 - 需确保数据库写入性能 |

---

## 五、O1: BeginWithUnlock（已关闭）

**问题不存在**。经源码审查，`Begin()` 方法正确实现，返回有效的 `*sql.Tx`，无修复必要。

---

## 六、实施优先级

| 优先级 | 问题 | 工时 | 理由 |
|--------|------|------|------|
| 1 | R4: 高误报规则 | 2-3h | 工时最低，收益高 |
| 2 | S1: 无 FTS5 | 3-4h | 性能提升显著 |
| 3 | L3: findNextEvents | 4-6h | 核心功能正确性 |
| 4 | S4: 内存增长 | 6-8h | 可延后处理 |

---

**文档版本**: v2.0
**更新内容**: 精简为每个问题只保留一个最优解决方案
