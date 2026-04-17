# 模块改进实施方案

**版本**: v1.0  
**日期**: 2026-04-17  
**状态**: 初始分析

---

## 一、概述

本文档针对 WinLogAnalyzer-Go 项目中尚未深入分析的四个模块进行深度分析，包括：
- `internal/config/` - 配置管理模块
- `internal/collectors/live/` - 实时采集模块
- `internal/reports/` - 报告生成模块
- `internal/reports/template/` - 报告模板模块

通过对每个模块的架构设计、实现功能、CLI/Web 模式差异的分析，识别出现有问题和改进建议，制定可实施的优化方案。

---

## 二、Config 模块分析

### 2.1 模块结构

```
internal/config/
├── config.go      # 主配置结构和子配置结构定义
└── loader.go      # 配置加载器（YAML/环境变量/默认值）
```

### 2.2 配置结构总览

| 配置类型 | 字段数 | 功能 |
|----------|--------|------|
| DatabaseConfig | 4 | 数据库路径、WAL模式、连接池 |
| ImportConfig | 6 | 导入workers、批次大小、增量导入 |
| ParserConfig | 2 | 解析器workers、内存限制 |
| SearchConfig | 7 | 搜索结果限制、分页参数 |
| AlertsConfig | 5 | 告警开关、去重窗口、规则 |
| CorrelationConfig | 3 | 关联分析开关、时间窗口 |
| ReportConfig | 3 | 报告输出目录、模板目录 |
| ForensicsConfig | 2 | 哈希算法、签名验证 |
| APIConfig | 4 | API服务器配置、CORS |
| AuthConfig | 2 | 认证开关、JWT密钥 |
| AuditConfig | 6 | 审计日志配置 |
| LogConfig | 7 | 日志级别、格式、文件轮转 |
| TUIConfig | 3 | TUI主题、键位模式 |

### 2.3 加载机制

**优先级（从高到低）**：
1. 环境变量（通过 `WINALOG_xxx` 格式）
2. 命令行指定的配置文件（`--config` 标志）
3. 默认搜索路径（`.`, `$HOME/.winalog`, `/etc/winalog`）
4. 硬编码默认值

**已绑定的环境变量（仅9个）**：
- `WINALOG_DATABASE_PATH`
- `WINALOG_DATABASE_WAL_MODE`
- `WINALOG_IMPORT_WORKERS`
- `WINALOG_IMPORT_BATCH_SIZE`
- `WINALOG_ALERTS_ENABLED`
- `WINALOG_ALERTS_DEDUP_WINDOW`
- `WINALOG_API_HOST`
- `WINALOG_API_PORT`
- `WINALOG_LOG_LEVEL`

### 2.4 CLI 与 Web 配置传递差异

| 特性 | CLI 模式 | Web/API 模式 |
|------|----------|--------------|
| 配置加载 | 全局单例 `globalConfigLoader` | 通过 `NewServer(db, cfg)` 传入 |
| 配置修改 | `getConfigWithPath()` 重新加载 | `SettingsHandler.SaveSettings()` 修改内存 |
| 配置持久化 | 需手动调用 `loader.Save()` | API 自动持久化 |
| 配置热更新 | 不支持 | 支持 `Loader.Watch()` |

### 2.5 发现的问题

#### 问题 C1: Config.Validate() 定义后从未被调用

**严重程度**: 高  
**位置**: `internal/config/loader.go:127-144`

**问题描述**：
```go
func (c *Config) Validate() error {
    // 实现了验证逻辑：检查必填字段、自动修正超出范围的数值
    // 但没有任何调用方
}
```

**影响**：无效配置（如负数的workers、越界的端口）会导致运行时错误而非启动时错误。

**修复方案**：
```go
// 在 Load() 成功后调用 Validate()
func (l *Loader) Load(configPath string) (*Config, error) {
    // ... 现有代码 ...
    cfg := DefaultConfig()
    // ... 反序列化 ...
    
    // 新增：验证配置
    if err := cfg.Validate(); err != nil {
        return nil, fmt.Errorf("config validation failed: %w", err)
    }
    return cfg, nil
}
```

#### 问题 C2: Load() 错误被忽略

**严重程度**: 中  
**位置**: `cmd/winalog/commands/system.go:833`

**问题描述**：
```go
cfg, _ = globalConfigLoader.Load(serveFlags.configPath)  // 错误被丢弃
```

**修复方案**：
```go
cfg, err := globalConfigLoader.Load(serveFlags.configPath)
if err != nil {
    return fmt.Errorf("failed to load config: %w", err)
}
```

#### 问题 C3: 环境变量绑定不完整

**严重程度**: 中  
**位置**: `internal/config/loader.go:52-60`

**问题描述**：仅9个环境变量被显式绑定，其余配置项依赖 viper 的 `AutomaticEnv()`，可能导致类型转换问题。

**修复方案**：
```go
// 扩展 bindEnv 列表，或使用 viper 的完整绑定
func (l *Loader) bindAllEnvs() {
    envBindings := map[string]string{
        "database.path": "WINALOG_DATABASE_PATH",
        "database.wal_mode": "WINALOG_DATABASE_WAL_MODE",
        "import.workers": "WINALOG_IMPORT_WORKERS",
        "import.batch_size": "WINALOG_IMPORT_BATCH_SIZE",
        "import.skip_patterns": "WINALOG_IMPORT_SKIP_PATTERNS",
        "import.incremental": "WINALOG_IMPORT_INCREMENTAL",
        "parser.workers": "WINALOG_PARSER_WORKERS",
        "parser.memory_limit": "WINALOG_PARSER_MEMORY_LIMIT",
        "search.max_results": "WINALOG_SEARCH_MAX_RESULTS",
        "search.default_page_size": "WINALOG_SEARCH_DEFAULT_PAGE_SIZE",
        "alerts.enabled": "WINALOG_ALERTS_ENABLED",
        "alerts.dedup_window": "WINALOG_ALERTS_DEDUP_WINDOW",
        "correlation.enabled": "WINALOG_CORRELATION_ENABLED",
        "correlation.time_window": "WINALOG_CORRELATION_TIME_WINDOW",
        "report.output_dir": "WINALOG_REPORT_OUTPUT_DIR",
        "api.host": "WINALOG_API_HOST",
        "api.port": "WINALOG_API_PORT",
        "log.level": "WINALOG_LOG_LEVEL",
        "log.format": "WINALOG_LOG_FORMAT",
    }
    
    for key, env := range envBindings {
        l.bindEnv(key, env)
    }
}
```

#### 问题 C4: Settings API 无法修改所有配置项

**严重程度**: 低  
**位置**: `internal/api/handlers_settings.go:15-30`

**问题描述**：`Settings` 结构体仅包含部分配置项（DatabasePath, APIPort, LogLevel 等），无法修改 Alerts、Correlation、Forensics 等高级配置。

**修复方案**：
```go
// 扩展 Settings 结构体
type Settings struct {
    // 现有字段
    DatabasePath   string `json:"database_path"`
    APIPort        int    `json:"api_port"`
    LogLevel       string `json:"log_level"`
    EnableAlerting  bool   `json:"enable_alerting"`
    
    // 新增字段
    AlertsEnabled      bool          `json:"alerts_enabled"`
    DedupWindow        time.Duration `json:"dedup_window"`
    CorrelationEnabled  bool          `json:"correlation_enabled"`
    CorrelationWindow   time.Duration `json:"correlation_time_window"`
    ReportOutputDir    string        `json:"report_output_dir"`
    AuthEnabled        bool          `json:"auth_enabled"`
    AuditEnabled       bool          `json:"audit_enabled"`
}
```

#### 问题 C5: AlertHandler 等 Handler 无法访问配置

**严重程度**: 低  
**位置**: `internal/api/handlers.go:23-26`

**问题描述**：
```go
type AlertHandler struct {
    db          *storage.DB
    alertEngine *alerts.Engine
    // 缺少 cfg *config.Config
}
```

**修复方案**：
```go
type AlertHandler struct {
    db          *storage.DB
    alertEngine *alerts.Engine
    cfg         *config.Config  // 新增
}
```

---

## 三、Collectors/Live 模块分析

### 3.1 模块结构

```
internal/collectors/live/
├── collector.go    # LiveCollector 主结构
├── bookmark.go     # 书签支持（断点续传）
├── filtered.go     # 事件过滤器链
└── stats.go        # 采集统计
```

### 3.2 核心接口

```go
// 采集器接口
type Collector interface {
    Name() string
    Collect(ctx context.Context) ([]interface{}, error)
}

// 过滤器接口
type EventFilter interface {
    Accept(event *types.Event) bool
    Name() string
}
```

### 3.3 已实现的过滤器

| 过滤器 | 功能 | 实现状态 |
|--------|------|----------|
| LevelFilter | 按 Critical/Error/Warning/Info/Verbose 过滤 | ✅ 完整 |
| EventIDFilter | 按事件 ID 列表过滤 | ✅ 完整 |
| SourceFilter | 按事件源名称过滤 | ✅ 完整 |
| LogNameFilter | 按日志名称过滤 | ✅ 完整 |
| TimeRangeFilter | 按时间范围过滤 | ✅ 完整 |
| KeywordFilter | 按消息内容关键词过滤 | ✅ 完整 |
| CompositeFilter | 组合多个过滤器 | ✅ 完整 |

### 3.4 采集流程

```
Start(interval) → run() goroutine
    ↓
collect() 遍历所有 registered collectors
    ↓
collector.Collect(ctx) → []interface{}
    ↓
shouldProcess(event) → 检查过滤器和书签
    ↓
processEvent(event) → 更新书签
```

### 3.5 发现的问题

#### 问题 L1: LiveCollector 是空框架，缺少实际实现

**严重程度**: 高  
**位置**: `internal/collectors/live/` 整体

**问题描述**：`LiveCollector` 提供了接口和框架，但没有实现任何真正的 Windows 事件日志实时监控。目前只有 `Collector` 接口定义，没有实际连接到 Windows Event Log API 的实现。

**修复方案**：

步骤1：创建 `windows_collector.go` 实现 Windows 事件日志采集：
```go
// internal/collectors/live/windows_collector.go
package live

import (
    "github.com/chaitin/winalog-go/internal/types"
    "github.com/chaitin/winalog-go/pkg/evtx"
)

type WindowsEventLogCollector struct {
    logName  string
    bookmark *Bookmark
    filters  []EventFilter
}

func NewWindowsEventLogCollector(logName string) *WindowsEventLogCollector {
    return &WindowsEventLogCollector{
        logName: logName,
    }
}

func (c *WindowsEventLogCollector) Name() string {
    return "windows_event_log:" + c.logName
}

func (c *WindowsEventLogCollector) Collect(ctx context.Context) ([]interface{}, error) {
    // 使用 Windows Event Log API 或 wevtutil 采集
    events, err := c.collectEvents(ctx)
    if err != nil {
        return nil, err
    }
    
    results := make([]interface{}, 0, len(events))
    for _, e := range events {
        results = append(results, e)
    }
    return results, nil
}

func (c *WindowsEventLogCollector) collectEvents(ctx context.Context) ([]*types.Event, error) {
    // 实现使用 evt 或者 PowerShell wevtutil 的采集逻辑
    // ...
}
```

步骤2：创建 ` evt/subscription.go` 实现事件订阅：
```go
// internal/collectors/live/subscription.go
package live

import (
    "golang.org/x/sys/windows"
)

type EventSubscription struct {
    session   windows.Handle
    bookmark  *Bookmark
    buffer    []byte
}

func NewEventSubscription(logName string) (*EventSubscription, error) {
    // 创建事件会话
    // 绑定书签位置
    // 设置订阅
}
```

#### 问题 L2: CLI live collect 命令无实际功能

**严重程度**: 高  
**位置**: `cmd/winalog/commands/live.go`

**问题描述**：
```go
func runLiveCollect(cmd *cobra.Command, args []string) error {
    fmt.Println("Live collect is not yet implemented.")
    return nil
}
```

**修复方案**：
```go
func runLiveCollect(cmd *cobra.Command, args []string) error {
    // 1. 解析 flags
    interval := liveFlags.interval
    logNames := liveFlags.logNames
    filterLevel := liveFlags.level
    
    // 2. 创建 LiveCollector
    lc := live.NewLiveCollector()
    
    // 3. 添加 Windows 事件日志采集器
    for _, logName := range strings.Split(logNames, ",") {
        collector := live.NewWindowsEventLogCollector(strings.TrimSpace(logName))
        lc.AddCollector(collector)
    }
    
    // 4. 添加过滤器
    if filterLevel != "" {
        lc.AddFilter(live.NewLevelFilter(parseLevels(filterLevel)...))
    }
    
    // 5. 启动采集
    if err := lc.Start(interval); err != nil {
        return fmt.Errorf("failed to start live collector: %w", err)
    }
    
    // 6. 设置信号处理优雅退出
    sigCh := make(chan os.Signal, 1)
    signal.Notify(sigCh, os.Interrupt, syscall.SIGTERM)
    <-sigCh
    
    return lc.Stop()
}
```

#### 问题 L3: Web API StreamEvents SSE 为空实现

**严重程度**: 高  
**位置**: `internal/api/handlers_live.go`

**问题描述**：
```go
func (h *LiveHandler) StreamEventsSSE(c *gin.Context) {
    // 只有 setTimeout 模拟，没有真实事件推送
}
```

**修复方案**：参见 phase2-analysis 改进计划，已实现。

#### 问题 L4: 缺少日志源自动发现

**严重程度**: 中  
**位置**: `internal/collectors/live/collector.go`

**问题描述**：没有实现 `DiscoverLogSources()` 功能来自动发现可用的 Windows 事件日志。

**修复方案**：
```go
// 在 collector.go 中添加
func DiscoverLogSources() ([]string, error) {
    // 使用 wevtutil enum-log 命令获取可用日志源
    cmd := exec.Command("wevtutil", "enum-log")
    output, err := cmd.Output()
    if err != nil {
        return nil, err
    }
    
    var logNames []string
    scanner := bufio.NewScanner(bytes.NewReader(output))
    for scanner.Scan() {
        line := strings.TrimSpace(scanner.Text())
        if line != "" {
            logNames = append(logNames, line)
        }
    }
    return logNames, nil
}
```

---

## 四、Reports 模块分析

### 4.1 模块结构

```
internal/reports/
├── generator.go       # 核心报告生成器 (884行)
├── html.go            # HTML 报告导出 (68行)
├── json.go            # JSON 报告导出 (209行)
├── security_stats.go  # 安全统计数据结构 (160行)
└── template/
    ├── template.go    # 内嵌模板加载 (42行)
    ├── manager.go     # 模板管理器 (232行)
    └── report.html    # HTML 报告模板 (318行)
```

### 4.2 报告生成流程

```
Generator.Generate(req)
    │
    ├── calculateSecurityStats()    → 统计事件/告警分布
    ├── calculateSummary()          → 计算摘要
    ├── extractIOCs()               → 提取 IOC (可选)
    ├── calculateMITREDistribution() → MITRE ATT&CK 分布 (可选)
    ├── getTopAlerts()              → Top 50 告警
    ├── getTopEvents()              → 原始事件 (可选)
    ├── generateExecutiveSummary()  → 执行摘要
    ├── generateTimelineAnalysis()  → 时间线分析
    ├── generateThreatLandscape()   → 威胁态势
    ├── generateRecommendations()    → 安全建议
    ├── generateAttackPatterns()     → 攻击模式
    └── generateComplianceStatus()   → 合规状态
```

### 4.3 CLI 与 Web API 差异

| 特性 | CLI | Web API |
|------|-----|---------|
| 处理模式 | 同步阻塞 | 异步非阻塞 (goroutine) |
| 输出格式 | HTML, JSON | HTML, JSON, **PDF** |
| 模板管理 | 无 | 完整 CRUD API |
| 报告持久化 | 仅文件输出 | 数据库 + 文件 |
| 时间范围 | Duration 格式 | RFC3339 时间戳 |
| 报告类型 | 仅通用报告 | 5 种类型 |

### 4.4 发现的问题

#### 问题 R1: SQL 注入风险

**严重程度**: 高  
**位置**: `internal/reports/handlers_reports.go:661-670`

**问题描述**：
```go
func buildTimeFilter(startTime, endTime *time.Time) string {
    filter := ""
    if startTime != nil {
        filter += fmt.Sprintf(" AND timestamp >= '%s'", startTime.Format(time.RFC3339))
        // SQL 注入风险：直接拼接字符串
    }
    return filter
}
```

**修复方案**：
```go
func buildTimeFilter(startTime, endTime *time.Time) (string, []interface{}) {
    var conditions []string
    var args []interface{}
    
    if startTime != nil {
        conditions = append(conditions, "timestamp >= ?")
        args = append(args, startTime)
    }
    if endTime != nil {
        conditions = append(conditions, "timestamp <= ?")
        args = append(args, endTime)
    }
    
    if len(conditions) == 0 {
        return "", nil
    }
    return " AND " + strings.Join(conditions, " AND "), args
}

// 调用方式
query := "SELECT * FROM events WHERE 1=1"
filter, args := buildTimeFilter(startTime, endTime)
query += filter
rows, err := db.Query(query, args...)
```

#### 问题 R2: MITRE Tactic 提取逻辑错误

**严重程度**: 中  
**位置**: `internal/reports/generator.go:466-471`

**问题描述**：
```go
func extractTactic(mitreID string) string {
    if len(mitreID) < 4 {
        return "Unknown"
    }
    return mitreID[:4]  // 错误：简单截取前4个字符
}
```

**问题**：MITRE ID 格式为 `T1234`（技术）或 `TA1234`（战术），截取前4个字符会得到 `T123` 而非正确分类。

**修复方案**：
```go
// 使用 MITRE ATT&CK 映射表
var tacticMapping = map[string]string{
    "TA0001": "Initial Access",
    "TA0002": "Execution",
    "TA0003": "Persistence",
    "TA0004": "Privilege Escalation",
    "TA0005": "Defense Evasion",
    "TA0006": "Credential Access",
    "TA0007": "Discovery",
    "TA0008": "Lateral Movement",
    "TA0009": "Collection",
    "TA0010": "Exfiltration",
    "TA0011": "Command and Control",
    "TA0040": "Impact",
}

func extractTactic(mitreID string) string {
    // MITRE ID 可能为 T1234 或 TA1234
    if strings.HasPrefix(mitreID, "TA") {
        if tactic, ok := tacticMapping[mitreID]; ok {
            return tactic
        }
    }
    // 对于技术ID，需要映射到战术
    if tactic, ok := techniqueToTactic[mitreID]; ok {
        return tactic
    }
    return "Other"
}
```

#### 问题 R3: 硬编码版本号

**严重程度**: 低  
**位置**: `internal/reports/html.go:37`, `json.go:151`

**问题描述**：
```go
Version: "2.4.0",  // 多处硬编码
```

**修复方案**：
```go
// 在 config.go 或统一版本文件中定义
var (
    Version = "2.4.0"
    BuildDate = "2026-04-17"
)

// reports/html.go
Version: config.Version,
```

#### 问题 R4: 报告生成错误被静默忽略

**严重程度**: 中  
**位置**: `internal/reports/generator.go:234-256`

**问题描述**：
```go
if execSummary, err := g.generateExecutiveSummary(req); err == nil {
    report.ExecutiveSummary = execSummary
}
// 错误被忽略，用户不知道生成失败
```

**修复方案**：
```go
// 收集所有错误
var errs []error

if execSummary, err := g.generateExecutiveSummary(req); err != nil {
    errs = append(errs, fmt.Errorf("executive summary: %w", err))
} else {
    report.ExecutiveSummary = execSummary
}
// ... 其他字段 ...

if len(errs) > 0 {
    return nil, &ReportGenerationError{Errors: errs}
}
return report, nil
```

#### 问题 R5: CLI 和 Web API 报告格式不一致

**严重程度**: 中  
**位置**: CLI (`report.go`) vs Web (`handlers_reports.go`)

**问题描述**：
- CLI 不支持 PDF 格式
- CLI 不支持报告类型区分
- Web 支持的模板管理 CLI 完全不支持

**修复方案**：参见 R7 统一报告接口。

#### 问题 R6: PDF 生成依赖第三方库

**严重程度**: 低  
**位置**: `internal/reports/handlers_reports.go`

**问题描述**：Web API 使用 `github.com/jung-kurt/gofpdf` 生成 PDF，增加了依赖。

**修复方案**：
- 保持现状（gofpdf 是稳定库）
- 或考虑使用内置的 `golang.org/x/net/html` + CSS 进行 HTML 到 PDF 的转换

#### 问题 R7: 缺少统一的报告服务层

**严重程度**: 高  
**位置**: 全局

**问题描述**：CLI 和 Web API 各自实现报告生成逻辑，导致代码重复和功能不一致。

**修复方案**：
```go
// internal/reports/service.go
package reports

type Service struct {
    db        *storage.DB
    generator *Generator
    manager   *template.Manager
}

func NewService(db *storage.DB) *Service {
    return &Service{
        db:        db,
        generator: NewGenerator(db),
        manager:   template.GetManager(),
    }
}

func (s *Service) GenerateReport(ctx context.Context, req *ReportRequest) (*Report, error) {
    // 统一的报告生成逻辑
    return s.generator.Generate(req)
}

func (s *Service) ListReports(limit, offset int) ([]*Report, error) {
    // 统一的报告列表查询
}

func (s *Service) GetReport(id string) (*Report, error) {
    // 统一的报告获取
}

// CLI 使用
// cmd/winalog/commands/report.go
func runReportGenerate(cmd *cobra.Command, args []string) error {
    db, cleanup, err := openDB()
    defer cleanup()
    
    svc := reports.NewService(db)
    report, err := svc.GenerateReport(ctx, req)
    // ...
}

// Web 使用
// internal/api/handlers_reports.go
type ReportsHandler struct {
    svc *reports.Service  // 共享服务
}
```

---

## 五、Reports/Template 模块分析

### 5.1 模块结构

```
internal/reports/template/
├── template.go    # 内嵌模板访问 (embed.FS)
├── manager.go     # 模板管理器 (单例)
└── report.html    # HTML 报告模板 (318行)
```

### 5.2 模板函数

| 函数 | 签名 | 功能 |
|------|------|------|
| `div` | `func(a, b float64) float64` | 除法，防止除零 |
| `printf` | `func(format string, args ...interface{}) string` | 格式化字符串 |

### 5.3 HTML 模板页面结构

| 区域 | 行号 | 功能 |
|------|------|------|
| 头部导航 | 30-37 | 标题、生成时间 |
| 摘要卡片 | 42-76 | 4个统计卡片 |
| 分析周期 | 78-89 | 时间范围信息 |
| 事件分布图表 | 91-142 | Level/LogName 分布 |
| Top Event IDs | 112-141 | 前20事件ID统计 |
| 登录统计 | 144-160 | 成功/失败登录 |
| Top Alerts | 162-199 | 前50告警详情 |
| IOCs | 201-235 | IP/用户/计算机列表 |
| MITRE ATT&CK | 237-271 | 战术和技术分布 |
| 页脚 | 273-276 | 版本信息 |
| Chart.js | 279-315 | 甜甜圈图和柱状图 |

### 5.4 发现的问题

#### 问题 T1: 模板函数过少

**严重程度**: 中  
**位置**: `internal/reports/template/manager.go`, `template.go`

**问题描述**：仅支持 `div` 和 `printf` 两个函数，复杂模板逻辑无法实现。

**修复方案**：
```go
// 扩展模板函数
funcMap := template.FuncMap{
    // 现有函数
    "div": func(a, b float64) float64 {
        if b == 0 { return 0 }
        return a / b
    },
    "printf": func(format string, args ...interface{}) string {
        return fmt.Sprintf(format, args...)
    },
    
    // 新增函数
    "add": func(a, b int) int { return a + b },
    "sub": func(a, b int) int { return a - b },
    "mul": func(a, b int) int { return a * b },
    "gt":  func(a, b int) bool { return a > b },
    "lt":  func(a, b int) bool { return a < b },
    "eq":  func(a, b interface{}) bool { return a == b },
    "ne":  func(a, b interface{}) bool { return a != b },
    "and": func(cond ...bool) bool {
        for _, c := range cond { if !c { return false } }
        return true
    },
    "or": func(cond ...bool) bool {
        for _, c := range cond { if c { return true } }
        return false
    },
    "not": func(b bool) bool { return !b },
    "default": func(v, def interface{}) interface{} {
        if v == nil || v == "" { return def }
        return v
    },
    "truncate": func(s string, length int) string {
        if len(s) <= length { return s }
        return s[:length] + "..."
    },
    "formatTime": func(t time.Time, layout string) string {
        if layout == "" { layout = "2006-01-02 15:04:05" }
        return t.Format(layout)
    },
    "formatBytes": func(bytes int64) string {
        const unit = 1024
        if bytes < unit { return fmt.Sprintf("%d B", bytes) }
        div, exp := int64(unit), 0
        for n := bytes / unit; n >= unit; n /= unit {
            div *= unit
            exp++
        }
        return fmt.Sprintf("%.1f %cB", float64(bytes)/float64(div), "KMGTPE"[exp])
    },
    "percentage": func(part, total int64) float64 {
        if total == 0 { return 0 }
        return float64(part) / float64(total) * 100
    },
    "severityColor": func(severity string) string {
        colors := map[string]string{
            "critical": "#dc3545",
            "high":     "#fd7e14",
            "medium":   "#ffc107",
            "low":      "#17a2b8",
            "info":     "#6c757d",
        }
        if color, ok := colors[strings.ToLower(severity)]; ok {
            return color
        }
        return "#6c757d"
    },
}
```

#### 问题 T2: HTML 模板中部分 Report 字段未使用

**严重程度**: 低  
**位置**: `internal/reports/template/report.html`

**问题描述**：`Report` 结构体中定义了多个字段，但 HTML 模板未使用：
- `ExecutiveSummary`
- `TimelineAnalysis`
- `ThreatLandscape`
- `Recommendations`
- `AttackPatterns`
- `ComplianceStatus`

**修复方案**：扩展 HTML 模板使用这些字段，或在模板中添加注释说明这些字段是为未来功能预留。

#### 问题 T3: Manager 单例模式影响测试

**严重程度**: 低  
**位置**: `internal/reports/template/manager.go`

**问题描述**：
```go
var defaultManager *Manager
var once sync.Once

func GetManager() *Manager {
    once.Do(func() {
        defaultManager = &Manager{...}
    })
    return defaultManager
}
```

单例模式在测试环境中可能导致状态残留。

**修复方案**：
```go
// 提供 ResetForTesting 函数
func ResetForTesting() {
    once = sync.Once{}
    defaultManager = nil
}

// 或提供 NewManager 构造函数用于测试
func NewManager() *Manager {
    return &Manager{
        templates:       make(map[string]*template.Template),
        customTemplates: make(map[string]string),
    }
}
```

#### 问题 T4: 模板缓存无失效机制

**严重程度**: 低  
**位置**: `internal/reports/template/manager.go`

**问题描述**：模板被缓存后无法热更新，除非重启服务。

**修复方案**：
```go
type Manager struct {
    mu             sync.RWMutex
    templates      map[string]*template.Template
    customTemplates map[string]string
    cacheTime      time.Time
    cacheTTL       time.Duration  // 缓存 TTL
}

func (m *Manager) GetTemplate(name string) (*template.Template, bool) {
    m.mu.RLock()
    defer m.mu.RUnlock()
    
    // 检查缓存是否过期
    if time.Since(m.cacheTime) > m.cacheTTL {
        return nil, false
    }
    
    tmpl, ok := m.templates[name]
    return tmpl, ok
}
```

---

## 六、改进方案汇总

### 6.1 问题优先级分类

| 优先级 | 问题 ID | 模块 | 问题描述 | 预估复杂度 |
|--------|---------|------|----------|------------|
| P0 | L1 | collectors/live | LiveCollector 空框架 | 高 |
| P0 | L2 | collectors/live | CLI live collect 无实现 | 中 |
| P0 | L3 | collectors/live | Web API StreamEvents 空实现 | 中 |
| P0 | R1 | reports | SQL 注入风险 | 低 |
| P1 | C1 | config | Validate() 未被调用 | 低 |
| P1 | C2 | config | Load() 错误被忽略 | 低 |
| P1 | R2 | reports | MITRE Tactic 提取错误 | 中 |
| P1 | R4 | reports | 报告生成错误被静默忽略 | 中 |
| P1 | R7 | reports | 缺少统一报告服务层 | 高 |
| P2 | C3 | config | 环境变量绑定不完整 | 中 |
| P2 | C4 | config | Settings API 配置项不全 | 中 |
| P2 | C5 | config | Handler 无法访问配置 | 低 |
| P2 | L4 | collectors/live | 缺少日志源自动发现 | 中 |
| P2 | R3 | reports | 硬编码版本号 | 低 |
| P2 | R5 | reports | CLI/Web 报告格式不一致 | 高 |
| P2 | T1 | template | 模板函数过少 | 中 |
| P3 | C6 | config | Watch() 热更新未使用 | 低 |
| P3 | R6 | reports | PDF 依赖第三方库 | 低 |
| P3 | T2 | template | HTML 模板字段未使用 | 低 |
| P3 | T3 | template | Manager 单例影响测试 | 低 |
| P3 | T4 | template | 模板缓存无失效机制 | 低 |

### 6.2 实施计划

#### Phase 1: 紧急修复 (P0)

**目标**：修复影响正确性和安全性的问题

| 任务 | 负责模块 | 实施内容 |
|------|----------|----------|
| P0-R1 | reports | 修复 SQL 注入 (参数化查询) |
| P0-L1 | collectors/live | 实现 Windows 事件日志采集器框架 |
| P0-L2 | collectors/live | 实现 CLI live collect 命令 |
| P0-L3 | collectors/live | Web API StreamEvents SSE 实现 |

#### Phase 2: 重要改进 (P1)

**目标**：修复影响功能完整性和可维护性的问题

| 任务 | 负责模块 | 实施内容 |
|------|----------|----------|
| P1-C1 | config | 调用 Config.Validate() |
| P1-C2 | config | 修复 Load() 错误处理 |
| P1-R2 | reports | 修复 MITRE Tactic 映射 |
| P1-R4 | reports | 报告生成错误收集与返回 |
| P1-R7 | reports | 创建统一报告服务层 |

#### Phase 3: 功能完善 (P2)

**目标**：完善功能和改善用户体验

| 任务 | 负责模块 | 实施内容 |
|------|----------|----------|
| P2-C3 | config | 扩展环境变量绑定 |
| P2-C4 | config | 扩展 Settings API |
| P2-L4 | collectors/live | 实现日志源自动发现 |
| P2-R3 | reports | 统一版本号管理 |
| P2-R5 | reports | CLI 报告功能增强 (PDF、模板) |
| P2-T1 | template | 扩展模板函数库 |

#### Phase 4: 优化提升 (P3)

**目标**：改进代码质量和可维护性

| 任务 | 负责模块 | 实施内容 |
|------|----------|----------|
| P3-C5 | config | Handler 持有配置指针 |
| P3-C6 | config | 启用配置热更新 |
| P3-R6 | reports | PDF 库选型评估 |
| P3-T2 | template | 补充模板字段文档 |
| P3-T3 | template | Manager 测试支持 |
| P3-T4 | template | 缓存失效机制 |

---

## 七、预期收益

完成全部改进后，预期收益：

1. **安全性提升**：消除 SQL 注入风险
2. **功能完整**：LiveCollector 从空框架到完整实现
3. **代码质量**：统一报告服务层，消除重复代码
4. **可维护性**：配置验证、热更新、模板缓存优化
5. **用户体验**：CLI 和 Web 报告功能一致性

---

## 八、验证方法

| 改进项 | 验证方法 |
|--------|----------|
| SQL 注入修复 | 使用 SQL 注入测试用例验证 |
| LiveCollector | 使用真实 Windows 事件日志测试采集 |
| CLI live collect | 执行 `winalog live collect --log-name Security` |
| Config.Validate() | 使用无效配置启动服务，验证报错 |
| 报告服务层 | 对比 CLI 和 Web API 生成的报告内容一致性 |

---

**文档版本**: v1.0  
**创建日期**: 2026-04-17  
**分析范围**: config, collectors/live, reports, reports/template 模块
