# winalog-go 应急工具深度分析报告

**分析对象**: https://github.com/kkkdddd-start/winalog-go
**分析日期**: 2026-04-16
**代码规模**: 179 个 Go 源文件，约 46,507 行代码
**架构**: CLI (Cobra) + Web API (Gin) + TUI (Bubble Tea) 三模式

---

## 目录

1. [功能重复（冗余代码）](#一功能重复冗余代码)
2. [实用性差的功能](#二实用性差的功能)
3. [需要增强的功能](#三需要增强的功能)
4. [CLI 与 Web 前后端不统一](#四cli-与-web-前后端不统一)
5. [架构层面的深层问题](#五架构层面的深层问题)
6. [改进建议与优先级](#六改进建议与优先级)

---

## 一、功能重复（冗余代码）

### 1.1 `escapeCSV` 函数完全重复 ⚠️ 高优先级

**位置**:
- `cmd/winalog/commands/persistence.go:194` — `func escapeCSV(s string) string`
- `internal/api/handlers_persistence.go:109` — `func escapeCSV(s string) string`

**现象**: 两个文件包含字节级相同的实现：
```go
func escapeCSV(s string) string {
    s = strings.ReplaceAll(s, "\"", "\"\"")
    s = strings.ReplaceAll(s, "\n", " ")
    s = strings.ReplaceAll(s, "\r", "")
    return s
}
```

**根因**: CLI 和 API handler 是分开开发的，没有抽取公共工具函数。

**改进方案**: 提取到 `internal/utils/csv.go`，两处统一引用。

---

### 1.2 持久化检测 CSV 导出逻辑重复 ⚠️ 高优先级

**位置**:
- CLI: `cmd/winalog/commands/persistence.go` — `func exportToCSV(detections []*persistence.Detection) ([]byte, error)`
- API: `internal/api/handlers_persistence.go` — `func exportDetectionsToCSV(detections []*persistence.Detection) string`

**现象**: 两个函数做的事情几乎一样（遍历 detections，输出 CSV 格式），只是返回类型不同（`[]byte` vs `string`）。字段顺序和格式完全一致。

**根因**: 同上，CLI 和 API 缺乏共享层。

**改进方案**: 在 `internal/persistence/` 包中提供 `ExportCSV(detections) string` 方法，CLI 和 API 都调用它。

---

### 1.3 事件查询 SQL 字符串重复 ⚠️ 高优先级

**重复出现的 SQL**:
```sql
SELECT id, timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id FROM events
```

**出现位置** (至少 5 处):
| 文件 | 行号 | 上下文 |
|------|------|--------|
| `cmd/winalog/commands/analyze.go` | ~85 | `getEventsForAnalysis()` |
| `cmd/winalog/commands/analyze.go` | ~55 | `runCorrelate()` |
| `internal/api/handlers_correlation.go` | ~57 | `CorrelationHandler.Analyze()` |
| `internal/storage/db.go` | 296 | `ListEvents` 底层 |
| `internal/storage/events.go` | — | `EventRepo` 封装 |

**根因**: `storage` 层已经提供了 `ListEvents(filter)` 方法，但 CLI 的 `analyze.go` 和 API 的 `correlation.go` 都绕过它直接写 SQL。这导致：
1. 字段变更时需要改多处
2. 新开发者不知道应该用哪个入口
3. CLI 和 API 的查询逻辑可能出现行为差异

**改进方案**: 强制所有事件查询走 `storage.ListEvents()` 或 `EventRepo`，删除散落的裸 SQL。

---

### 1.4 数据库初始化代码重复 ⚠️ 高优先级

每个 CLI 命令都有相同的模式：
```go
cfg := getConfig()
db, err := storage.NewDB(cfg.Database.Path)
if err != nil {
    return fmt.Errorf("failed to open database: %w", err)
}
defer db.Close()
```

**出现次数**: 至少 15+ 处，涉及文件：
- `alert.go`(1处)、`ueba.go`(3处)、`whitelist.go`(3处)、`system.go`(5+处)、`dashboard.go`(1处)、`search.go`(1处)、`report.go`(3处)、`analyze.go`(2处)、`import.go`(1处)

**根因**: 没有统一的数据库连接管理。每次调用都创建新连接，没有连接池。

**改进方案**:
```go
// cmd/winalog/commands/db_util.go
func openDB() (*storage.DB, func(), error) {
    cfg := getConfig()
    db, err := storage.NewDB(cfg.Database.Path)
    if err != nil {
        return nil, nil, fmt.Errorf("failed to open database: %w", err)
    }
    return db, func() { db.Close() }, nil
}
```

---

### 1.5 UEBA 引擎初始化参数重复

**CLI (`cmd/winalog/commands/ueba.go`)**:
```go
engine := ueba.NewEngine(ueba.EngineConfig{
    LearningWindow:       7 * 24 * time.Hour,
    AlertThreshold:       70,
    MinEventsForBaseline: 10,
})
```

**API (`internal/api/handlers_ueba.go`)**:
```go
engine := ueba.NewEngine(ueba.EngineConfig{
    LearningWindow:       7 * 24 * time.Hour,
    AlertThreshold:       70,
    MinEventsForBaseline: 10,
})
```

两处初始化参数完全一致，且 CLI 每次命令执行都重新初始化（丢失学习到的 baseline）。

**改进方案**: UEBA engine 应该由 Server 统一管理，CLI 通过 API 调用或共享同一实例。

---

### 1.6 `verify` 和 `forensics hash` 做同一件事

**CLI 命令重叠**:
- `winalog verify <file>` — 计算 SHA256/SHA1/MD5
- `winalog forensics hash <file>` — 计算 SHA256/SHA1/MD5

两者实现几乎相同，只是输出格式略有差异。`verify` 多输出了文件大小。

**改进方案**: 保留 `forensics hash`，将 `verify` 改为专门做"哈希比对验证"（输入文件 + 预期哈希值）。

---

### 1.7 告警 CSV 导出与事件 CSV 导出逻辑分散

- CLI `alert.go` 有 `exportAlertsToCSV()` — 手动拼接 CSV
- API `handlers.go` 有 `exportEventsToCSV()` — 不同格式
- CLI `persistence.go` 有 `exportToCSV()` — 又一种格式
- CLI `report.go` 中还有 timeline 导出

四种 CSV 导出逻辑分散在不同文件，字段定义、转义方式、表头格式都不统一。

**改进方案**: 统一使用 `encoding/csv` 标准库，提供 `internal/exporters/csv_writer.go` 公共模块。

---

## 二、实用性差的功能

### 2.1 `forensics collect` — 纯空壳 ⚠️

**CLI 实现**:
```go
func runForensicsCollect(cmd *cobra.Command, args []string) error {
    fmt.Println("Starting forensics evidence collection...")
    fmt.Println("Collecting: Registry, Prefetch, ShimCache, UserAssist, Scheduled Tasks")
    fmt.Printf("Evidence collection complete.\n")
    return nil
}
```

**API 实现**:
```go
func (h *ForensicsHandler) CollectEvidence(c *gin.Context) {
    c.JSON(http.StatusOK, CollectResponse{
        Status:  "completed",
        Message: "Evidence collection requires Windows environment",
    })
}
```

**问题**: CLI 和 Web 端的取证采集都是假的。对应急工具来说这是核心功能，空实现会误导用户以为采集成功。

**根因**: 可能是因为开发环境是 Linux，Windows 特有的取证逻辑没有实现。

**改进方案**:
1. 在非 Windows 系统上明确返回 `unsupported` 错误，而不是假装成功
2. 对已有 `collectors/` 包中的采集能力（prefetch、shimcache 等）做整合
3. 至少实现一个最小可用版本

---

### 2.2 `rules enable/disable` — 只打印不执行

```go
func runRulesEnable(cmd *cobra.Command, args []string) error {
    ruleName := args[0]
    fmt.Printf("Enabling rule: %s\n", ruleName)
    fmt.Println("Note: Built-in rules cannot be disabled. Custom rules can be enabled via config file.")
    return nil
}
```

**问题**: 命令执行后打印"已启用"，但实际什么都没改。用户以为规则已生效，实际上没有任何变化。

**改进方案**: 要么实现真正的启用/禁用（写入配置或数据库），要么移除这个子命令，避免误导。

---

### 2.3 `live collect` — 直接 sleep

```go
func runLiveCollect(cmd *cobra.Command, args []string) error {
    fmt.Println("Starting live event collection...")
    fmt.Println("Press Ctrl+C to stop.")
    time.Sleep(time.Hour)
    return nil
}
```

**问题**: Web 端有完整的 SSE 实时事件流，但 CLI 的 live 功能就是打印一行字然后 sleep 一小时。

**改进方案**: 对接 `collectors/live/collector.go` 中已有的实时采集逻辑。

---

### 2.4 `info --users/--registry/--tasks` — flag 存在但无处理

CLI 注册了这些 flag：
```go
infoCmd.Flags().BoolVar(&infoFlags.users, "users", false, "Show user accounts")
infoCmd.Flags().BoolVar(&infoFlags.registry, "registry", false, "Show registry persistence")
infoCmd.Flags().BoolVar(&infoFlags.tasks, "tasks", false, "Show scheduled tasks")
```

但在 `runInfo()` 中，只有 `process` 和 `network` 有处理逻辑。`users`、`registry`、`tasks` 三个 flag 完全被忽略。`showAll` 也只展示 process 和 network。

**根因**: 可能是先注册了 flag，后续没实现对应的采集逻辑。

**改进方案**: 要么实现采集逻辑，要么暂时隐藏这些 flag。

---

### 2.5 Web 端取证相关 API 返回假数据

以下 API 端点返回空数据或假响应：

| 端点 | 返回 |
|------|------|
| `GET /api/forensics/evidence` | `{"evidence": [], "total": 0}` |
| `GET /api/forensics/evidence/:id` | `{"status": "not_found"}` |
| `POST /api/forensics/collect` | `{"status": "completed", "message": "requires Windows"}` |
| `GET /api/forensics/memory-dump` | `{"status": "error", "message": "requires Windows"}` |

**问题**: Web 前端如果调用这些接口，会看到"成功"但没有数据，用户无法判断是功能缺失还是真的没有发现。

**改进方案**: 在非 Windows 环境返回 HTTP 501 (Not Implemented) 而不是 200 + 空数据。

---

### 2.6 `multi analyze` 分析结果 `events_count` 写 0

CLI `multi analyze` 最后的 INSERT：
```go
db.Exec(`INSERT INTO multi_machine_analysis ... VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    analysisID, "cross_machine_correlation", ..., 0, ...)
//                                                              ^ events_count 固定为 0
```

实际分析检测到的事件数量没有被记录到数据库。

---

## 三、需要增强的功能

### 3.1 CLI analyze 缺少 4 个分析器 ⚠️ 高优先级

**已注册的分析器** (Web 端 `server.go`):
| 分析器 | CLI | Web |
|--------|-----|-----|
| brute-force | ✅ | ✅ |
| login | ✅ | ✅ |
| kerberos | ✅ | ✅ |
| powershell | ✅ | ✅ |
| **data-exfiltration** | ❌ | ✅ |
| **lateral-movement** | ❌ | ✅ |
| **persistence** | ❌ (独立命令) | ✅ |
| **privilege-escalation** | ❌ | ✅ |

**根因**: CLI 的 analyze 采用硬编码子命令模式，每增加一个分析器都要手动添加 cobra.Command。而 Web 端用 `AnalyzerManager` 动态注册，天然支持扩展。

**改进方案**: 将 CLI 改为 `winalog analyze <type>` 统一入口：
```go
var analyzeCmd = &cobra.Command{
    Use:   "analyze <type>",
    Short: "Run threat analyzer",
    Args:  cobra.ExactArgs(1),
    RunE:  runAnalyzeDynamic,
}

func runAnalyzeDynamic(cmd *cobra.Command, args []string) error {
    manager := createAnalyzerManager() // 复用 server.go 中的注册逻辑
    analyzer, ok := manager.Get(args[0])
    if !ok {
        // 列出可用分析器
        fmt.Println("Available analyzers:")
        for _, name := range manager.List() {
            fmt.Printf("  - %s\n", name)
        }
        return nil
    }
    // ...
}
```

---

### 3.2 搜索 keyword-mode 参数丢失 ⚠️ 高优先级

CLI `search.go` 定义了 `--keyword-mode` flag，构建 `SearchRequest` 时却没有传递：

```go
req := &types.SearchRequest{
    Keywords:  searchFlags.keywords,
    Regex:     searchFlags.regex,
    // ... 注意：没有 KeywordMode: searchFlags.keywordMode
}
```

虽然 `SearchRequest` 结构体有 `KeywordMode` 字段，但 `engine.Search()` 和 `storage` 层都没有使用这个字段。所以即使修复了传递问题，AND/OR 模式实际也不生效。

**改进方案**: 需要在 `storage/events.go` 的搜索查询中实现 keyword mode 逻辑。

---

### 3.3 采集参数 CLI 比 Web 丰富但不对等

**CLI collect 有但 Web 没有的参数**:
- `--include-shimcache`
- `--include-amcache`
- `--include-userassist`
- `--compress-level`
- `--password` (ZIP 加密)
- `--exclude` (排除模式)

**Web `LogCollectOptions` 只有**:
- `include_prefetch`
- `include_registry`
- `include_system_info`
- `compress`
- `calculate_hash`
- `output_path`

**改进方案**: 统一 `CollectOptions` 结构体，CLI 和 Web 共用。

---

### 3.4 告警操作能力不统一

| 操作 | CLI | Web |
|------|-----|-----|
| list | ✅ | ✅ |
| show/get | ✅ | ✅ |
| resolve | ✅ | ✅ |
| delete | ✅ | ✅ |
| export | ✅ | ❌ (用 events/export 替代) |
| stats | ✅ | ✅ |
| **trend** | ❌ | ✅ |
| **run-analysis** | ❌ | ✅ |
| **mark false-positive** | ❌ | ✅ |
| **batch action** | ❌ | ✅ |

CLI 缺少趋势分析、手动触发分析、误报标记、批量操作。

---

### 3.5 UEBA CLI `profiles` 返回信息不足

CLI `ueba profiles` 只显示 login_count 和 risk score，而 Web 端 `GET /api/ueba/profiles` 返回的 `last_updated`、`avg_events_per_day` 等字段 CLI 没有展示。

---

## 四、CLI 与 Web 前后端不统一

### 4.1 分析器架构模式不统一

**CLI**: 硬编码子命令模式
```
winalog analyze brute-force
winalog analyze login
winalog analyze kerberos
winalog analyze powershell
```

**Web**: 动态路由模式
```
POST /api/analyze/:type   (type 可以是任意已注册的分析器名)
GET  /api/analyzers       (列出所有可用分析器)
```

**问题**: CLI 每新增一个分析器需要改代码加子命令，Web 端自动支持。两者的分析器列表来源不同，容易出现不同步。

**改进方案**: CLI 改为动态模式，复用 `AnalyzerManager`。

---

### 4.2 持久化检测的 CLI/Web 路径不统一

**CLI**: `winalog persistence detect --category registry`
**Web**: `GET /api/persistence/detect?category=registry`

看起来一致，但：
- CLI 的 `persistenceCmd` 和 `analyze persistence` 是**两个不同的入口**
- Web 端 `persistence` 是 `/api/persistence/` 独立路由，和 `/api/analyze/persistence` 是**两套代码**
- `internal/persistence/` 包中的检测逻辑和 `internal/analyzers/persistence.go` 中的分析器可能有功能重叠

**根因**: persistence 既有独立的检测器（直接检查注册表），也有基于日志的分析器。两者职责不同但 CLI 没有清晰区分。

---

### 4.3 时间窗口参数风格不统一

| 位置 | 参数格式 | 示例 |
|------|---------|------|
| CLI analyze | `--hours` (int) | `--hours 24` |
| CLI correlate | `--time-window` (duration) | `--time-window 24h` |
| CLI report | `--time-range` (duration) | `--time-range 24h` |
| CLI ueba | `-H/--hours` (int) | `-H 48` |
| Web analyze | `hours` (int) 或 `start_time`/`end_time` (RFC3339) | `{"hours": 24}` |
| Web correlate | `time_window` (duration string) | `{"time_window": "24h"}` |
| Web ueba | `hours` (int) 或 `start_time`/`end_time` | `{"hours": 24}` |

同一种功能，CLI 内部就不统一（有的用 int 小时，有的用 duration 字符串）。

**改进方案**: 统一用 Go 的 `time.Duration` 格式（`24h`、`30m`、`7d`），CLI 和 Web 共用解析函数。

---

### 4.4 报告生成接口不统一

**CLI**: `winalog report generate <type> --format html --time-range 24h`
- `type` 是位置参数（必填）
- 格式和时间范围是 flag

**Web**: `POST /api/reports/generate`
- JSON body，字段包括 `title`、`format`、`start_time`、`end_time`
- 没有 `type` 字段 —— CLI 的 `type` 在 Web 端找不到对应

CLI 的 `<type>` 参数在 `runReportGenerate` 中作为 `req.Title` 使用，但 Web 端的 `GenerateReport` 用不同的参数结构。两者生成的报告内容可能不一致。

---

### 4.5 系统信息返回结构不统一

**CLI `info` 命令返回**:
- 使用 `collectors.ProcessInfo`（包含 `PID`, `Name`, `PPID`, `Path`, `CommandLine`, `User`, `CPUPercent`, `MemoryMB` 等）

**Web `SystemHandler` 定义了自己的**:
```go
type ProcessInfo struct {
    PID    int    `json:"pid"`
    PPID   int    `json:"ppid"`
    Name   string `json:"name"`
    Exe    string `json:"exe"`
    Args   string `json:"args"`
    User   string `json:"user"`
    Status string `json:"status"`
}
```

Web 端的 `ProcessInfo` 字段和 `collectors.ProcessInfo` 不同（Web 有 `Exe`/`Args`/`Status`，collectors 有 `Path`/`CommandLine`/`CPUPercent`/`MemoryMB`）。两者信息量不同。

**改进方案**: Web handler 应该直接用 `collectors` 包的类型，或做明确的 DTO 转换并保证字段完整。

---

### 4.6 关联分析 CLI 和 Web 实现路径不同

**CLI `correlate`**: 直接 `builtin.GetCorrelationRules()` → `engine.Analyze()`
**Web `handlers_correlation.go`**: 也是 `builtin.GetCorrelationRules()` → `engine.Analyze()`

两者代码逻辑几乎相同但各写了一遍。Web 端没有复用 CLI 的逻辑，CLI 也没有走 API 路径。

**改进方案**: 抽取 `internal/correlation/service.go` 作为共享业务层，CLI 和 Web 都调用它。

---

### 4.7 Dashboard 数据粒度不同

**CLI `dashboard`** 返回：
- DatabasePath、TotalEvents、StorageSize、ImportCount
- LevelStats（按级别分布）
- LogNameStats（按日志名 top 15）
- SourceStats（按来源 top 15）
- TopEventIDs（top 10）
- ComputerList（前 50 台机器名）
- LoginStats（成功/失败/总计/成功率）

**Web `GET /api/dashboard/collection-stats`**:
从 `DashboardHandler.GetCollectionStats` 的实现来看，返回的数据结构和 CLI 不同，且可能缺少 LoginStats 等字段。

---

### 4.8 告警导出方式不统一

- **CLI**: `winalog alert export` → 直接调用 `engine.GetAlerts()` → 手动序列化 JSON/CSV → 写文件
- **Web**: `POST /api/events/export` → 使用完全不同的 handler

CLI 的 alert export 和 Web 的 events export 是两个独立实现，字段和格式不保证一致。

---

## 五、架构层面的深层问题

### 5.1 缺乏共享服务层

当前架构：
```
CLI Commands → 直接调用 storage/engine/persistence/ueba...
Web Handlers → 直接调用 storage/engine/persistence/ueba...
```

应该的架构：
```
CLI Commands  ─┐
               ├→ Service Layer → storage/engine/...
Web Handlers  ─┘
```

CLI 和 Web 是两条平行的调用路径，没有共享的"服务层"。这意味着每个功能都要写两遍，且容易出现行为不一致。

### 5.2 数据库连接管理粗糙

每个命令都 `NewDB()` + `defer Close()`，没有连接池、没有连接复用。对于 SQLite 来说频繁开关连接可能影响性能，特别是在 Web 模式下多个 handler 并发访问时。

### 5.3 Windows 特有功能的降级策略不清晰

大量功能（forensics、collect、persistence detect）依赖 Windows API，在 Linux 上运行时：
- 有的返回空数组（forensics evidence）
- 有的假装成功（forensics collect）
- 有的直接返回 `runtime.GOOS != "windows"` 判断
- 有的完全不检查（CLI 的 persistence detect 直接调用 Windows API 可能 panic）

没有统一的平台降级策略。

### 5.4 错误处理不一致

- CLI 有的命令 `return fmt.Errorf(...)` 给 cobra 处理
- 有的命令 `fmt.Printf("Error: %v\n", err); return nil` 自己处理后返回成功
- Web handler 有的返回 `ErrorResponse` 结构体，有的返回 `gin.H{"error": err.Error()}`
- `forensics collect` API 用 HTTP 200 表示失败

---

## 六、改进建议与优先级

### 🔴 P0 — 立即修复（影响正确性）

| # | 问题 | 改进方案 |
|---|------|---------|
| 1 | CLI analyze 缺少 4 个分析器 | 改为动态入口 `winalog analyze <type>` |
| 2 | search keyword-mode 不生效 | 传递参数 + 在 storage 层实现 AND/OR 逻辑 |
| 3 | forensics collect 假成功 | 非 Windows 返回明确的 unsupported 错误 |
| 4 | live collect 直接 sleep | 对接 `collectors/live/` 或移除 |
| 5 | rules enable/disable 空操作 | 实现或移除 |

### 🟡 P1 — 近期优化（影响可维护性）

| # | 问题 | 改进方案 |
|---|------|---------|
| 6 | escapeCSV/exportToCSV 重复 | 提取到 `internal/utils/csv.go` |
| 7 | 事件查询 SQL 散落 | 强制走 `storage.ListEvents()` |
| 8 | DB 初始化代码重复 | 提取 `openDB()` 公共函数 |
| 9 | UEBA 引擎初始化重复 | Server 统一管理 |
| 10 | verify 和 forensics hash 重复 | 合并或明确区分职责 |
| 11 | 时间窗口参数不统一 | 统一用 duration 格式 |
| 12 | 采集参数 CLI/Web 不对齐 | 统一 `CollectOptions` |

### 🟢 P2 — 中期改进（影响功能完整性）

| # | 问题 | 改进方案 |
|---|------|---------|
| 13 | 缺乏共享服务层 | 抽取 Service Layer |
| 14 | CLI/Web 关联分析重复代码 | 抽取 `correlation/service.go` |
| 15 | CLI 缺少 trend/false-positive/batch | 补全告警操作 |
| 16 | 报告 type 参数无对应 | 统一报告接口 |
| 17 | 系统信息 struct 不统一 | 统一 DTO |
| 18 | 平台降级策略不清晰 | 定义 `PlatformCapability` 接口 |
| 19 | 错误处理不一致 | 统一错误响应格式 |
| 20 | info --users/--registry/--tasks 空实现 | 实现或隐藏 flag |

---

## 附录：重复代码统计

| 重复项 | 涉及文件数 | 估计重复行数 |
|--------|-----------|-------------|
| DB 初始化 `getConfig()+NewDB()` | 15+ 处 | ~105 行 |
| 事件查询长 SQL | 5 处 | ~25 行 |
| escapeCSV 函数 | 2 处 | 6 行 |
| CSV 导出逻辑 | 4 处 | ~120 行 |
| UEBA 引擎初始化 | 5 处 | ~25 行 |
| 分析器注册/调用 | 2 处 | ~40 行 |
| **总计** | **~33 处** | **~321 行** |
