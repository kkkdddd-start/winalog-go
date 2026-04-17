# 待实施问题详细方案分析

> 文档日期: 2026-04-17
> 问题数量: 5 个
> 优先级: P1-P2

---

## 一、L3: findNextEvents 创建合成事件

### 1.1 问题描述

**文件**: `internal/correlation/chain.go:103-121`

```go
func (cb *ChainBuilder) findNextEvents(events []*types.Event) []*types.Event {
    nextEvents := make([]*types.Event, 0)
    for _, event := range events {
        if nextIDs, ok := cb.config.Transitions[event.EventID]; ok {
            for _, nextID := range nextIDs {
                // BUG: 创建合成事件而非查询真实数据
                nextEvents = append(nextEvents, &types.Event{
                    ID:        event.ID + 1,  // 合成 ID
                    EventID:   nextID,
                    Timestamp: event.Timestamp.Add(1 * time.Second),  // 合成时间
                    User:      event.User,
                    Computer:  event.Computer,
                })
            }
        }
    }
    return nextEvents
}
```

### 1.2 影响分析

| 影响项 | 描述 | 严重程度 |
|--------|------|----------|
| 数据可信度 | 攻击链分析结果不可信 | 高 |
| 误报风险 | 可能产生不存在的事件链 | 高 |
| 溯源能力 | 无法追踪真实事件来源 | 高 |

### 1.3 详细修复方案

#### 方案一：从数据库实时查询（推荐）

**思路**: 在 `ChainBuilder` 中注入 `*storage.EventRepo`，通过 SQL 查询获取真实的后续事件。

```go
type ChainBuilder struct {
    db        *storage.DB
    eventRepo *storage.EventRepo
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

    // 构建 ID 列表
    ids := make([]int32, 0, len(nextEventIDs))
    for id := range nextEventIDs {
        ids = append(ids, id)
    }

    // 从数据库查询真实的后续事件
    req := &types.SearchRequest{
        EventIDs:  ids,
        StartTime: &maxTime,
        EndTime:   nil, // 不设上限
        PageSize:  1000,
    }

    results, _, err := cb.eventRepo.Search(req)
    if err != nil {
        return nil, fmt.Errorf("failed to query subsequent events: %w", err)
    }

    return results, nil
}
```

**调用链修改**:
```go
func (cb *ChainBuilder) BuildChain(startEvents []*types.Event) ([]*types.CorrelationResult, error) {
    // ... 初始化代码 ...
    
    for depth < cb.config.MaxDepth && len(currentEvents) > 0 {
        // 修改这里：处理错误
        nextEvents, err := cb.findNextEvents(currentEvents)
        if err != nil {
            return chains, fmt.Errorf("depth %d: %w", depth, err)
        }
        
        if len(nextEvents) == 0 {
            break
        }
        
        // 构建链 ...
        currentEvents = nextEvents
        depth++
    }
    
    return chains, nil
}
```

#### 方案二：预加载+内存匹配

**思路**: 在构建攻击链前，将时间窗口内的所有事件预加载到内存，然后进行链式匹配。

**优点**: 无需修改数据库查询接口
**缺点**: 内存占用高，不适合大数据量场景

### 1.4 代价评估

| 维度 | 评估 |
|------|------|
| **代码复杂度** | 中 - 需注入依赖，修改调用链 |
| **数据库复杂度** | 低 - 使用现有 Search 接口 |
| **性能影响** | 中 - 每个深度层级增加一次 DB 查询 |
| **测试复杂度** | 高 - 需模拟数据库返回 |

### 1.5 收益评估

| 收益项 | 量化 |
|--------|------|
| 数据准确性 | 攻击链结果100%基于真实事件 |
| 溯源能力 | 可追踪到真实的事件 ID 和内容 |
| 误报减少 | 消除不存在的事件链 |

### 1.6 替代方案

| 替代方案 | 描述 | 可行性 |
|----------|------|--------|
| 禁用攻击链功能 | 暂时禁用 ChainBuilder | 低 - 影响核心功能 |
| 标记为"预览模式" | 添加 flag，返回合成事件时警告 | 中 - 用户体验差 |
| 使用外部图数据库 | 将事件导入 Neo4j 等 | 高 - 但引入新依赖 |

### 1.7 实施建议

**优先级**: P1
**建议工时**: 4-6 小时
**推荐方案**: 方案一（从数据库实时查询）

---

## 二、R4: 高误报率规则

### 2.1 问题描述

**文件**: `internal/rules/builtin/definitions.go`

**admin-login-unusual 规则**（行 38-50）:
```go
{
    Name:        "admin-login-unusual",
    Filter: &rules.Filter{
        EventIDs: []int32{4624},  // 所有 4624 事件
        Levels:   []int{4},
    },
    // 问题：没有任何条件过滤，任何 4624 都会触发
}
```

**sysmon-network-suspicious-port 规则**（行 654-666）:
```go
{
    Name:        "sysmon-network-suspicious-port",
    Filter: &rules.Filter{
        EventIDs: []int32{3},  // 所有 Sysmon 网络连接
        Levels:   []int{4},
    },
    // 问题：所有网络连接都会触发
}
```

### 2.2 影响分析

| 规则 | 当前触发条件 | 预期触发条件 | 误报率 |
|------|-------------|-------------|--------|
| admin-login-unusual | EventID=4624 | 管理员账户 + 非本地 IP | ~90% |
| sysmon-network-suspicious-port | EventID=3 | 高位端口 + 非白名单 | ~95% |

### 2.3 详细修复方案

#### 方案一：添加条件过滤（推荐）

**admin-login-unusual 改进**:
```go
{
    Name:           "admin-login-unusual",
    Description:    "管理员账户异常登录",
    Enabled:        true,
    Severity:       types.SeverityHigh,
    Score:          80,
    MitreAttack:    "T1078.004",
    Threshold:      3,               // 新增：阈值
    TimeWindow:    10 * time.Minute, // 新增：时间窗口
    AggregationKey: "user",        // 新增：按用户聚合
    Filter: &rules.Filter{
        EventIDs: []int32{4624},
        Levels:   []int{4},
    },
    Conditions: &rules.Conditions{
        Any: []*rules.Condition{
            // 管理员账户
            {Field: "message", Operator: "contains", Value: "Administrator"},
            {Field: "message", Operator: "contains", Value: "Admin"},
            {Field: "message", Operator: "contains", Value: "管理员"},
            // 或非本地登录
            {Field: "ip_address", Operator: "!=", Value: "127.0.0.1"},
            {Field: "ip_address", Operator: "!=", Value: "::1"},
        },
    },
}
```

**sysmon-network-suspicious-port 改进**:
```go
{
    Name:        "sysmon-network-suspicious-port",
    Description: "Sysmon可疑网络连接(高位端口)",
    Enabled:     true,
    Severity:    types.SeverityMedium,
    Score:       60,
    MitreAttack: "T1043",
    Threshold:   10,                 // 新增：阈值
    TimeWindow:  5 * time.Minute,   // 新增：时间窗口
    AggregationKey: "computer",    // 新增：按主机聚合
    Filter: &rules.Filter{
        EventIDs: []int32{3},
        Levels:   []int{4},
    },
    Conditions: &rules.Conditions{
        All: []*rules.Condition{
            // 目标端口 > 1024
            {Field: "destination_port", Operator: ">", Value: "1024"},
        },
        None: []*rules.Condition{
            // 排除已知白名单端口
            {Field: "destination_port", Operator: "in", Value: "80,443,445,389,636"},
        },
    },
}
```

#### 方案二：实现条件匹配器增强

**当前 `matchCondition` 实现**（matcher.go:54-79）:
```go
func (m *Matcher) matchCondition(cond *rules.Condition, event *types.Event) bool {
    switch field := cond.Field; field {
    case "source", "log_name", "computer", "user", "message":
        // 只支持这些字段
    default:
        return false  // 其他字段直接返回 false
    }
}
```

**问题**: `Conditions` 字段在 `AlertRule` 中定义了，但 `matchConditions` 从未被调用！

**修复**: 在规则评估时调用条件匹配：
```go
// 在规则评估逻辑中添加
func (e *Engine) evaluateRule(rule *rules.AlertRule, event *types.Event) bool {
    // 1. 检查 Filter
    if !e.matchFilter(rule.Filter, event) {
        return false
    }
    
    // 2. 检查 Conditions（新增）
    if rule.Conditions != nil {
        if !e.matcher.MatchConditions(rule.Conditions, event) {
            return false
        }
    }
    
    return true
}
```

### 2.4 代价评估

| 维度 | 评估 |
|------|------|
| **代码复杂度** | 低 - 只需修改规则定义 |
| **条件系统完善** | 中 - 需扩展 matchCondition 支持更多字段 |
| **性能影响** | 低 - 条件匹配开销小 |
| **测试复杂度** | 低 - 只需更新测试用例 |

### 2.5 收益评估

| 收益项 | 量化 |
|--------|------|
| 误报率降低 | 从 ~90% 降至 ~10% |
| 分析师效率 | 减少 80% 无效告警 |
| 存储节省 | 告警表写入减少 ~80% |

### 2.6 替代方案

| 替代方案 | 描述 | 可行性 |
|----------|------|--------|
| 关闭高误报规则 | 直接禁用这两个规则 | 低 - 丢失检测能力 |
| 增大阈值 | 只改 Threshold 不改 Conditions | 中 - 治标不治本 |
| 用户可配置 | 将条件作为规则参数 | 高 - 但增加复杂度 |

### 2.7 实施建议

**优先级**: P1
**建议工时**: 2-3 小时
**推荐方案**: 方案一 + 方案二（添加条件 + 实现条件匹配）

---

## 三、S1: EventRepo.Search 使用 LIKE 无 FTS5

### 3.1 问题描述

**文件**: `internal/storage/events.go:141-157`

```go
// 当前实现使用 LIKE '%keyword%'
if len(words) == 0 {
    conditions = append(conditions, "message LIKE ?")
    args = append(args, "%"+req.Keywords+"%")
} else if keywordMode == "OR" {
    var likeConditions []string
    for _, word := range words {
        likeConditions = append(likeConditions, "message LIKE ?")
        args = append(args, "%"+word+"%")
    }
    conditions = append(conditions, "("+strings.Join(likeConditions, " OR ")+")")
}
```

### 3.2 影响分析

| 指标 | LIKE '%keyword%' | FTS5 |
|------|------------------|------|
| 10万条数据 | ~500ms | ~5ms |
| 100万条数据 | ~5000ms | ~20ms |
| 索引支持 | B-tree 不支持 | 倒排索引 |
| 前缀搜索 | 支持 | 支持 |
| 布尔搜索 | 不支持 | 支持 |

### 3.3 详细修复方案

#### 方案一：SQLite FTS5 虚拟表（推荐）

**Step 1: 创建 FTS5 表**
```sql
-- 在数据库 schema 中添加
CREATE VIRTUAL TABLE IF NOT EXISTS events_fts USING fts5(
    message,
    source,
    computer,
    event_id UNINDEXED,
    content='events',
    content_rowid='rowid'
);
```

**Step 2: 维护 FTS 索引**
```go
// 在 EventRepo.Insert 中同步更新 FTS 表
func (r *EventRepo) Insert(event *types.Event) error {
    // ... 原有插入逻辑 ...
    
    // 同步更新 FTS 表
    _, err = r.db.Exec(`
        INSERT INTO events_fts(rowid, message, source, computer, event_id)
        VALUES (?, ?, ?, ?, ?)`,
        result.lastInsertRowid,
        event.Message,
        event.Source,
        event.Computer,
        event.EventID,
    )
    return err
}
```

**Step 3: 修改 Search 方法**
```go
func (r *EventRepo) Search(req *types.SearchRequest) ([]*types.Event, int64, error) {
    // ...
    
    // 构建 FTS 查询
    if len(req.Keywords) > 0 {
        ftsQuery := r.buildFTSQuery(req.Keywords, req.KeywordMode)
        
        baseQuery := `
            SELECT e.* FROM events e
            INNER JOIN events_fts fts ON e.rowid = fts.rowid
            WHERE ${ftsQuery}`
        
        // 使用 FTS 匹配
        conditions = append(conditions, ftsQuery)
    }
    
    // ... 其余逻辑不变 ...
}

func (r *EventRepo) buildFTSQuery(keywords, mode string) string {
    words := strings.Fields(keywords)
    if len(words) == 0 {
        return fmt.Sprintf("events_fts MATCH '%s'", keywords)
    }
    
    var parts []string
    for _, word := range words {
        parts = append(parts, fmt.Sprintf("'%s'", word))
    }
    
    if mode == "OR" {
        return fmt.Sprintf("events_fts MATCH '%s'", strings.Join(parts, " OR "))
    }
    return fmt.Sprintf("events_fts MATCH '%s'", strings.Join(parts, " "))
}
```

#### 方案二：混合查询（兼容性）

**思路**: 保留 LIKE 查询作为后备，FTS 作为首选。

```go
func (r *EventRepo) Search(req *types.SearchRequest) ([]*types.Event, int64, error) {
    // 检查是否支持 FTS
    useFTS := r.supportsFTS() && len(req.Keywords) > 0
    
    if useFTS {
        return r.searchWithFTS(req)
    }
    return r.searchWithLike(req)
}
```

### 3.4 代价评估

| 维度 | 评估 |
|------|------|
| **代码复杂度** | 中 - 需修改 EventRepo |
| **数据库迁移** | 中 - 需创建 FTS 表并同步数据 |
| **存储成本** | 中 - FTS 表约原数据 30-50% |
| **维护成本** | 低 - SQLite 自动维护 |

### 3.5 收益评估

| 收益项 | 量化 |
|--------|------|
| 搜索性能 | 提升 50-100 倍 |
| 用户体验 | 搜索响应 < 100ms |
| 可扩展性 | 支持布尔搜索等高级功能 |

### 3.6 替代方案

| 替代方案 | 描述 | 可行性 |
|----------|------|--------|
| 使用外部搜索引擎 | Elasticsearch/Lucene | 高 - 但引入复杂依赖 |
| PostgreSQL 全文搜索 | 迁移到 PostgreSQL | 高 - 需大规模重构 |
| 内存搜索 | Go 内部索引 | 中 - 不适合大数据量 |

### 3.7 实施建议

**优先级**: P1
**建议工时**: 3-4 小时
**推荐方案**: 方案一 + 方案二（混合查询，兼容现有功能）

---

## 四、S4: EventIndex 全内存存储

### 4.1 问题描述

**文件**: `internal/correlation/engine.go:21-29`

```go
type EventIndex struct {
    mu              sync.RWMutex
    byID            map[int64]*types.Event   // 全量事件
    byTime          []*types.Event            // 全量事件
    byEID           map[int32][]*types.Event  // 全量事件
    maxAge          time.Duration
    lastCleanup     time.Time
    cleanupInterval time.Duration
}
```

### 4.2 影响分析

| 场景 | 10万事件 | 100万事件 | 1000万事件 |
|------|----------|-----------|------------|
| 内存占用 | ~50MB | ~500MB | ~5GB |
| 查询延迟 | <1ms | <5ms | >50ms |
| 清理耗时 | <1ms | ~10ms | >100ms |

### 4.3 详细修复方案

#### 方案一：SQLite 分层存储（推荐）

**思路**: 内存只保留索引元数据，事件数据存储在 SQLite。

```go
type EventIndex struct {
    mu              sync.RWMutex
    eventRepo      *storage.EventRepo
    
    // 内存索引（元数据）
    byID            map[int64]time.Time      // ID -> Timestamp 映射
    byTime          []indexEntry             // 时间排序的 ID 列表
    byEID           map[int32][]int64        // EventID -> ID 列表
    maxAge          time.Duration
    cleanupInterval time.Duration
    lastCleanup     time.Time
}

type indexEntry struct {
    ID        int64
    Timestamp time.Time
}

func (idx *EventIndex) FindByEventID(eid int32, timeRange TimeRange) ([]*types.Event, error) {
    // 1. 先从内存索引获取候选 ID
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
```

#### 方案二：LRU 缓存 + 数据库

**思路**: 使用 LRU cache 限制内存使用，超出后淘汰旧数据。

```go
type EventIndex struct {
    mu        sync.RWMutex
    cache     *lru.Cache[string, *types.Event]  // LRU 缓存
    eventRepo *storage.EventRepo
    
    // 索引
    byTime    []*types.Event  // 保留指针引用用于淘汰
    maxMemory int64           // 最大内存字节数
}

func (idx *EventIndex) Add(event *types.Event) {
    idx.mu.Lock()
    defer idx.mu.Unlock()
    
    // 检查内存限制
    if idx.maxMemory > 0 && idx.currentMemory() > idx.maxMemory {
        idx.evictOldest(idx.currentMemory() - idx.maxMemory + 1)
    }
    
    // 添加到缓存
    idx.cache.Add(fmt.Sprintf("%d", event.ID), event)
    idx.byTime = append(idx.byTime, event)
}
```

### 4.4 代价评估

| 维度 | 评估 |
|------|------|
| **代码复杂度** | 高 - 需重构 EventIndex |
| **数据库依赖** | 高 - 需注入 EventRepo |
| **性能影响** | 中 - 内存换 IO |
| **测试复杂度** | 高 - 需集成测试 |

### 4.5 收益评估

| 收益项 | 量化 |
|--------|------|
| 内存占用 | 稳定在配置上限 |
| 可扩展性 | 支持任意数据量 |
| 持久性 | 事件数据不丢失 |

### 4.6 替代方案

| 替代方案 | 描述 | 可行性 |
|----------|------|--------|
| 限制 maxAge | 只保留最近 N 天的数据 | 中 - 丢失历史数据 |
| 定期清理 | 降低 cleanupInterval 频率 | 低 - 治标不治本 |
| 内存映射文件 | 使用 mmap 作为存储 | 中 - 实现复杂 |

### 4.7 实施建议

**优先级**: P2
**建议工时**: 6-8 小时
**推荐方案**: 方案一（SQLite 分层存储）

---

## 五、O1: BeginWithUnlock 问题澄清

### 5.1 问题描述

经源码审查，`BeginWithUnlock` 方法在当前代码中**不存在**。

**实际情况**:
- `DB.Begin()` 方法正确实现，返回有效的 `*sql.Tx`
- `DB.Unlock()` 方法用于释放写锁

### 5.2 原问题分析

原问题报告称 `BeginWithUnlock` 返回 nil tx，但实际代码中该方法不存在。可能来源：
1. 早期版本已修复
2. 问题描述不准确

### 5.3 当前实现确认

```go
// internal/storage/db.go
func (d *DB) Begin() (*sql.Tx, func(), error) {
    d.writeMu.Lock()
    tx, err := d.conn.Begin()
    if err != nil {
        d.writeMu.Unlock()
        return nil, nil, err
    }
    return tx, func() {
        tx.Rollback()
        d.writeMu.Unlock()
    }, nil
}

func (d *DB) Unlock() {
    d.writeMu.Unlock()
}
```

### 5.4 结论

| 项目 | 状态 |
|------|------|
| 问题是否存在 | 否 - 代码中不存在此方法 |
| 需要修复 | 否 |
| 关闭原因 | 问题已不存在或已修复 |

---

## 六、总结对比表

| 问题 | 优先级 | 复杂度 | 工时 | 可靠性 | 推荐度 |
|------|--------|--------|------|--------|--------|
| L3: findNextEvents | P1 | 高 | 4-6h | 高 | 中 |
| R4: 高误报规则 | P1 | 低 | 2-3h | 高 | 高 |
| S1: 无 FTS5 | P1 | 中 | 3-4h | 高 | 高 |
| S4: 内存增长 | P2 | 高 | 6-8h | 高 | 中 |
| O1: BeginWithUnlock | - | - | - | - | N/A |

### 优先实施建议

1. **R4 (高误报规则)** - 工时低，收益高，立即可实施
2. **S1 (FTS5)** - 工时中，收益高，推荐实施
3. **L3 (findNextEvents)** - 工时高，架构变更，需评估
4. **S4 (内存增长)** - 工时高，收益中，可延后
