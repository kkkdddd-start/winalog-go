# WinLogAnalyzer-Go 架构文档

## 系统概述

WinLogAnalyzer-Go 是一个高性能的 Windows 安全取证与日志分析工具，使用 Go 语言重写自 Python 版本。设计目标：

| 指标 | 目标 |
|------|------|
| EVTX 解析速度 | ≥150万条/分钟 |
| 内存占用 (1GB EVTX) | ≤200MB |
| 启动时间 | ≤100ms |

## 核心架构

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLI (Cobra)                             │
│  import, search, collect, alert, analyze, report, export...     │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                        TUI (Bubble Tea)                         │
│              Dashboard, Events, Alerts, Timeline                │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                     API Server (Gin)                            │
│                  REST API + WebSocket                           │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Engine (Core)                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │ Import   │  │ Search   │  │ Analyze │  │ Export  │       │
│  │ Pipeline │  │ Engine   │  │ Engine  │  │ Engine  │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
└─────────────────────────────────────────────────────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   Parsers        │  │   Storage       │  │   Alerts         │
│  ┌─────────────┐ │  │  ┌─────────────┐│  │  ┌─────────────┐│
│  │ EVTX       │ │  │  │ SQLite      ││  │  │ Engine      ││
│  │ ETL        │ │  │  │ (modernc)  ││  │  │ Evaluator   ││
│  │ CSV        │ │  │  └─────────────┘│  │  │ Dedup       ││
│  │ IIS        │ │  └──────────────────┘  │  │ Stats       ││
│  │ Sysmon     │ │                         └─────────────┘│
│  └─────────────┘ │                                                │
└──────────────────┘                                                │
                                  │                                 │
                                  ▼                                 │
                    ┌──────────────────────────────┐               │
                    │      Rules & Correlation      │◄──────────────┘
                    │  ┌────────┐ ┌────────────┐  │
                    │  │Alert   │ │Correlation  │  │
                    │  │Rules   │ │Rules        │  │
                    │  └────────┘ └────────────┘  │
                    └──────────────────────────────┘
```

## 核心模块

### 1. Engine (`internal/engine/`)

核心引擎，负责日志导入和搜索。

**关键组件**:
- `Engine` - 主引擎，协调各组件
- `ImportConfig` - 导入配置 (Worker数, BatchSize等)
- `ImportProgress` - 导入进度回调
- `ImportRequest/Result` - 导入请求/结果

**导入流程**:
```
1. collectFiles() - 收集待导入文件
2. 创建 Worker Pool (大小由 Workers 配置)
3. 并发导入文件:
   - 获取对应 Parser
   - Parse() 返回事件 Channel
   - Batch Insert 到数据库
4. 记录 ImportLog
```

**代码示例**:
```go
engine := NewEngine(db)
result, err := engine.Import(ctx, &ImportRequest{
    Paths:   []string{"security.evtx"},
    Workers: 4,
    BatchSize: 10000,
}, progressFn)
```

### 2. Parsers (`internal/parsers/`)

解析器注册表，支持多种日志格式。

**Parser 接口**:
```go
type Parser interface {
    CanParse(path string) bool
    Parse(path string) <-chan *types.Event
    ParseBatch(path string) ([]*types.Event, error)
    GetType() string
}
```

**支持的格式**:
| 格式 | Parser | 文件扩展名 |
|------|--------|-----------|
| Windows Event Log | `EvtxParser` | .evtx |
| Event Trace Log | `EtlParser` | .etl |
| CSV/LOG | `CsvParser` | .csv, .log, .txt |
| IIS W3C Extended | `IISParser` | .log |
| Sysmon | `SysmonParser` | .evtx |

### 3. Storage (`internal/storage/`)

SQLite 存储层，使用 `modernc.org/sqlite` (Pure Go)。

**数据库 Schema**:
```sql
-- 事件表
CREATE TABLE events (
    id, timestamp, event_id, level, source, log_name,
    computer, user, user_sid, message, raw_xml, session_id,
    ip_address, import_time, import_id
)
-- 索引: timestamp, event_id, level, log_name, import_id

-- 告警表
CREATE TABLE alerts (
    id, rule_name, severity, message, event_ids, first_seen,
    last_seen, count, mitre_attack, resolved, resolved_time,
    notes, false_positive, log_name, rule_score
)
-- 索引: severity, resolved, rule_name, first_seen

-- 导入日志表
CREATE TABLE import_log (...)
-- 机器上下文表
CREATE TABLE machine_context (...)
-- 多机分析结果表
CREATE TABLE multi_machine_analysis (...)
-- 全局时间线表
CREATE TABLE global_timeline (...)
-- 会话表
CREATE TABLE sessions (...)
-- 证据链表
CREATE TABLE evidence_chain (...)
-- 证据文件表
CREATE TABLE evidence_file (...)
```

**关键特性**:
- WAL 模式 (`_journal_mode=WAL`)
- 超时 30 秒 (`_busy_timeout=30000`)
- 同步模式 NORMAL
- 单连接写入 (`SetMaxOpenConns(1)`)

### 4. Alerts (`internal/alerts/`)

告警引擎，负责规则评估和告警生成。

**组件**:
- `Engine` - 告警引擎主类
- `DedupCache` - 去重缓存 (基于时间窗口)
- `Evaluator` - 规则评估器
- `AlertStats` - 告警统计
- `AlertTrend` - 告警趋势
- `AlertUpgradeCache` - 告警升级缓存
- `SuppressCache` - 告警抑制缓存

**评估流程**:
```go
func (e *Engine) Evaluate(ctx context.Context, event *types.Event) ([]*types.Alert, error) {
    for _, rule := range e.rules {
        // 1. 检查是否被抑制
        if e.suppressCache.IsSuppressed(rule, event) {
            continue
        }
        // 2. 评估规则条件
        if matched, err := e.evaluator.Evaluate(rule, event); err != nil || !matched {
            continue
        }
        // 3. 检查去重
        if e.dedup.IsDuplicate(rule.Name, event) {
            continue
        }
        // 4. 创建告警
        alert := e.createAlert(rule, event)
        // 5. 记录去重
        e.dedup.Mark(rule.Name, event)
    }
}
```

### 5. Rules (`internal/rules/`)

规则系统，支持 AlertRule 和 CorrelationRule。

**AlertRule 结构**:
```go
type AlertRule struct {
    Name           string
    Description    string
    Enabled        bool
    Severity       Severity  // critical/high/medium/low/info
    Score          float64
    MitreAttack    string    // e.g., "T1003"
    Filter         *Filter   // 简单过滤
    Conditions     *Conditions // 复杂条件
    Threshold      int       // 触发阈值
    TimeWindow     time.Duration
    AggregationKey string
    Message        string    // 告警消息模板
    Tags           []string
}
```

**Filter 结构**:
```go
type Filter struct {
    EventIDs    []int32
    Levels      []int
    LogNames    []string
    Sources     []string
    Computers   []string
    Keywords    string
    KeywordMode LogicalOp  // AND/OR
    TimeRange   *types.TimeRange
}
```

**CorrelationRule 结构**:
```go
type CorrelationRule struct {
    Name        string
    Patterns    []*Pattern  // 至少2个模式
    TimeWindow  time.Duration
    Join        string
    MitreAttack string
}
```

### 6. Collectors (`internal/collectors/`)

采集器接口与实现。

**Collector 接口**:
```go
type Collector interface {
    Name() string
    Collect(ctx context.Context) ([]interface{}, error)
    RequiresAdmin() bool
}
```

**Live 采集** (`collectors/live/`):
- `EvtLiveCollector` - Windows Event Log 实时采集，使用 `EvtSubscribe` API 实现推送式订阅
- `LiveCollector` - 多采集器管理框架，支持过滤器链和书签
- `Bookmark` - 事件书签，支持断点续传持久化
- `EventFilter` - 7 种事件过滤器（Level/EventID/Source/LogName/TimeRange/Keyword/Composite）
- `CollectStats` - 采集统计，支持 `AdaptivePoller` 自适应轮询

**Persistence 采集** (`collectors/persistence/`):
- `UserAssistCollector` - 用户辅助数据
- `AmcacheCollector` - AMCache 预读取
- `PrefetchCollector` - Prefetch 预读取
- `ShimcacheCollector` - ShimCache 兼容性
- `USNJournalCollector` - USN 日志

### 7. Reports (`internal/reports/`)

报告生成模块，已重构为统一服务层。

**ReportService** (`service.go`):
```go
type ReportService struct {
    db        *storage.DB
    generator *Generator
}

func (s *ReportService) Generate(req *ReportRequest) (*Report, error)
func (s *ReportService) ExportHTML(req *ReportRequest, w io.Writer) error
func (s *ReportService) ExportHTMLFromReport(report *Report, w io.Writer) error
func (s *ReportService) ExportJSON(req *ReportRequest) ([]byte, error)
func (s *ReportService) ExportPDF(req *ReportRequest, w io.Writer) error
func (s *ReportService) GenerateAsync(req *ReportRequest, callback func(*Report, error))
func (s *ReportService) GenerateFromAPIRequest(apiReq *APIReportRequest) (*Report, error)
```

**Report 结构**:
```go
type Report struct {
    GeneratedAt time.Time
    Title       string
    Type        ReportType
    TimeRange   TimeRange
    Summary     ReportSummary
    Stats       *SecurityStats
    TopAlerts   []*types.Alert
    TopEvents   []*types.Event
    EventDist   *EventDist
    LoginStats  *LoginStats
    IOCs        *IOCSummary
    MITREDist   *MITREDist
    RawEvents   []*types.Event
}
```

**报告类型** (`ReportType`):
| 类型 | 说明 |
|------|------|
| `ReportTypeSummary` | 安全摘要 |
| `ReportTypeTimeline` | 时间线 |
| `ReportTypeAlerts` | 告警详情 |
| `ReportTypeEvents` | 原始事件 |
| `ReportTypeLogin` | 登录分析 |
| `ReportTypeFile` | 文件操作 |
| `ReportTypeNetwork` | 网络活动 |
| `ReportTypeThreat` | 威胁检测 |

### 8. Timeline (`internal/timeline/`)

时间线构建与攻击链检测。

**TimelineBuilder**:
```go
type TimelineBuilder struct {
    events       []*types.Event
    filter       *TimelineFilter
    attackChains []*AttackChain
}
```

**AttackChain 检测**:
- `detectBruteForce` - 暴力破解 (T1110)
- `detectLateralMovement` - 横向移动 (T1021)
- `detectPersistence` - 持久化 (T1053)

### 9. Exporters (`internal/exporters/`)

数据导出接口与实现。

**Exporter 接口**:
```go
type Exporter interface {
    Export(events []*types.Event, writer io.Writer) error
    ContentType() string
    FileExtension() string
}
```

**支持格式**:
| 格式 | Exporter | 文件扩展名 |
|------|----------|-----------|
| JSON | `JsonExporter` | .json |
| CSV | `CsvExporter` | .csv |
| Excel | `ExcelExporter` | .xlsx |
| Timeline CSV | `TimelineExporter` | .csv |
| Timeline JSON | `TimelineJSONExporter` | .json |
| Timeline HTML | `TimelineHTMLExporter` | .html |

### 10. Forensics (`internal/forensics/`)

取证功能模块。

**组件**:
- `HashResult` - 文件哈希 (SHA256/MD5/SHA1)
- `SignatureResult` - Authenticode 签名验证
- `EvidenceChain` - 证据链 (区块链式)
- `EvidenceManifest` - 证据清单
- `MemoryDumpResult` - 内存转储结果

**证据链结构**:
```go
type EvidenceChain struct {
    ID           string
    Timestamp    time.Time
    Operator     string
    Action       string
    InputHash    string
    OutputHash   string    // 计算: SHA256(ID|Operator|Action|InputHash|Timestamp)
    PreviousHash string    // 前一个证据的 OutputHash
}
```

### 11. Multi (`internal/multi/`)

多机关联分析。

**LateralMovement 检测**:
- 跨机器用户登录追踪
- 同一用户多机登录模式
- 异常登录时间检测

### 12. MITRE ATT&CK (`pkg/mitre/`)

内置 MITRE ATT&CK 技术映射。

**80+ 技术定义**, 覆盖:
- TA0001 Initial Access
- TA0002 Execution
- TA0003 Persistence
- TA0004 Privilege Escalation
- TA0005 Defense Evasion
- TA0006 Credential Access
- TA0007 Discovery
- TA0008 Lateral Movement
- TA0009 Collection
- TA0011 Command and Control
- TA0010 Exfiltration
- TA0040 Impact

### 13. Observability (`internal/observability/`)

可观测性模块。

**MetricsCollector**:
- `winalog_events_total` - 事件总数
- `winalog_events_imported_total` - 导入事件数
- `winalog_alerts_total` - 告警总数
- `winalog_import_duration_seconds` - 导入耗时
- `winalog_events_per_second` - 事件处理速率
- `winalog_rules_matched_total` - 规则匹配次数

### 14. API (`internal/api/`)

Gin HTTP API 服务器。

**路由**:
```
/api/v1/
  ├── /events          # 事件查询
  ├── /alerts          # 告警管理
  ├── /import          # 导入接口
  ├── /stats            # 统计信息
  ├── /search          # 搜索
  └── /timeline        # 时间线
```

### 15. TUI (`internal/tui/`)

Bubble Tea 终端界面。

**视图**:
- `ViewDashboard` - 仪表盘
- `ViewEvents` - 事件列表
- `ViewEventDetail` - 事件详情
- `ViewAlerts` - 告警列表
- `ViewAlertDetail` - 告警详情
- `ViewSearch` - 搜索
- `ViewTimeline` - 时间线
- `ViewCollect` - 采集
- `ViewHelp` - 帮助
- `ViewSettings` - 设置

## 并发模型

### Worker Pool 模式

```go
workerPool := make(chan struct{}, e.importCfg.Workers)  // 信号量控制并发
var wg sync.WaitGroup

for i, file := range files {
    workerPool <- struct{}{}  // 获取令牌
    wg.Add(1)
    go func(idx int, path string) {
        defer wg.Done()
        defer func() { <-workerPool }()  // 释放令牌
        // 处理文件...
    }(i, file)
}
wg.Wait()
```

### 事件通道 Pipeline

```go
// Parser 返回事件 Channel
events := parser.Parse(path)
for event := range events {
    select {
    case <-ctx.Done():
        return ctx.Err()
    default:
        batch = append(batch, event)
        if len(batch) >= e.importCfg.BatchSize {
            e.eventRepo.InsertBatch(batch)
            batch = batch[:0]
        }
    }
}
```

## 依赖关系

```
CLI/Commands
    │
    ├── Engine ─────────────► Storage (SQLite)
    │       │
    │       └──► Parsers ────┤
    │                        │
    ├── Alerts ◄─────────────┘
    │       │
    │       └──► Rules
    │
    ├── TUI ◄───────────────► Engine
    │
    ├── API ◄───────────────► Engine
    │       │
    │       └──► Storage
    │
    ├── Reports ◄────────────► Storage
    │       │
    │       └──► Timeline
    │
    ├── Exporters ◄──────────► Storage
    │
    ├── Collectors ──────────► Storage
    │
    ├── Multi ───────────────► Storage
    │
    └── Forensics ───────────► Storage
```

## 设计决策

### 1. Pure Go SQLite

使用 `modernc.org/sqlite` 而非 `github.com/mattn/go-sqlite3`:
- 无 CGO 依赖
- 编译为单个可执行文件
- 跨平台编译更简单

### 2. Worker Pool for Import

并发导入多个文件，提高 IO 利用率:
- 默认 4 个 Worker
- 可配置 `Workers` 参数
- 使用 WaitGroup 等待完成

### 3. Channel-based Streaming

Parser 使用 Channel 返回事件:
- 内存占用低
- 支持取消
- 边解析边写入

### 4. Interface Segregation

各模块通过接口交互:
- `Parser` 接口
- `Collector` 接口
- `Exporter` 接口
- `Rule` 接口

便于测试和替换实现。
