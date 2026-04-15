# 架构与功能问题追踪

## 活跃问题

### P1 - 高优先级

| ID | 问题 | 位置 | 状态 | 修复方案 |
|----|------|------|------|----------|
| P1-1 | runtime.GOOS 硬编码 | system_info.go:56 | 待修复 | 改用 Windows 版本信息获取 API |
| P1-2 | Settings 无持久化 | handlers_settings.go:69-72 | 待修复 | 添加 viper.WriteConfig() |

### P2 - 中优先级

| ID | 问题 | 位置 | 状态 | 修复方案 |
|----|------|------|------|----------|
| P2-1 | CLI 运维命令空实现 | commands/system.go | 待修复 | 补充实现或标记 TODO |
| P2-2 | AlertTrend 计算逻辑错误 | alerts/trend.go:124 | ✅ 已修复 | 直接使用 dateStr 查找 |

---

## 已完成修复

| 日期 | ID | 问题 | 说明 |
|------|----|------|------|
| 260415 | P0-1 | Collect.tsx handleCollect | 使用真实 API |
| 260415 | P0-2 | Reports.tsx useEffect | 添加 useEffect 加载列表 |
| 260415 | P0-3 | ReportsHandler.GenerateReport | 实现真实报告生成 |
| 260415 | P1-1 | Dashboard collectionStats | 真实 API |
| 260415 | P1-2 | GetAlertTrend | 真实数据 |
| 260415 | P1-3 | GetLiveStats | 真实数据 |
| 260415 | P1-4 | Settings handleSave | 真实 API |
| 260415 | P1-5 | Forensics handleVerify | 移除 Math.random() fallback |
| 260416 | P0-4 | StreamEventsSSE | 实现真实事件推送 |
| 260416 | P2-3 | CLI runMultiAnalyze | 跨机器关联分析 |
| 260416 | P2-4 | CLI runMultiLateral | 横向移动检测 |
| 260416 | P2-5 | Persistence TUI | 自动加载检测结果 |
| 260416 | P2-6 | Timeline TUI | 显示事件时间线 |
| 260416 | P2-7 | Forensics handleCollect | 使用真实 API |
| 260416 | P2-8 | ChainOfCustody API | 数据库查询 |
| 260416 | P2-2 | AlertTrend 计算错误 | 已修复 |

---

## 待处理问题详情

### P1-1: system_info.go runtime.GOOS 硬编码

**位置**: `internal/collectors/system_info.go:56`

**问题代码**:
```go
func (c *SystemInfoCollector) collectSystemInfo() *types.SystemInfo {
    info := &types.SystemInfo{
        Hostname:     c.getHostname(),
        OSName:       runtime.GOOS,  // 问题在这里
        Architecture: runtime.GOARCH,
    }
}
```

**影响**: 返回 "windows" 而不是具体的 Windows 版本（如 Windows 10 21H2 Build 19044）

**修复方案**: 使用 `golang.org/x/sys/windows` 获取详细版本信息

---

### P1-2: Settings 无持久化

**位置**: `internal/api/handlers_settings.go:50-72`

**问题代码**:
```go
func (h *SettingsHandler) SaveSettings(c *gin.Context) {
    // ... 更新配置到内存 ...
    c.JSON(http.StatusOK, gin.H{
        "status":  "saved",
        "message": "Settings updated in memory. Restart required for full effect.",
    })
}
```

**影响**: Web UI 修改设置后重启会丢失

**修复方案**: 调用 `viper.WriteConfig()` 保存到文件

---

### P2-1: CLI 运维命令空实现

**位置**: `cmd/winalog/commands/system.go`

**空实现的命令**:

| 命令 | 行号 | 问题 |
|------|------|------|
| `runStatus` | 26 | return nil |
| `runVerify` | 221 | return nil |
| `runRulesList` | 257 | return nil |
| `runRulesValidate` | 261 | return nil |
| `runRulesEnable` | 264 | return nil |
| `runRulesDisable` | 269 | return nil |
| `runDBStatus` | 297 | return nil |
| `runDBVacuum` | 301 | return nil |
| `runDBClean` | 305 | return nil |
| `runConfigGet` | 329 | return nil |
| `runConfigSet` | 333 | return nil |
| `runMetrics` | 344 | return nil |
| `runQuery` | 356 | return nil |
| `runForensicsCollect` | 432 | return nil |
| `runForensicsHash` | 436 | return nil |
| `runForensicsVerify` | 440 | return nil |

**影响**: CLI 运维功能完全不可用

**修复方案**: 补充实现或使用 Cobra 的 `MarkPersistentFlag` 标记 TODO

---

## 架构问题（需长期改进）

### 1. Engine 违反依赖倒置原则

**位置**: `engine/engine.go`

**问题**: Engine 直接依赖 `*storage.DB` 和具体 Repo 类型

**建议**: 引入接口隔离

---

### 2. Storage 层错误无上下文

**位置**: `storage/*.go`

**问题**: 所有方法直接返回底层错误，无包装

**建议**: 统一错误包装规范

---

### 3. Parser 静默失败

**位置**: `parsers/evtx/parser.go`

**问题**: goroutine 中解析失败静默丢弃

**建议**: 添加错误回调或集中错误处理

---

### 4. Alerts Engine 吞掉评估错误

**位置**: `alerts/engine.go`

**问题**: `Evaluate` 错误被 `continue` 忽略

**建议**: 添加错误日志记录

---

### 5. TUI 视图大量空实现

**位置**: `internal/tui/view.go`

**问题**: ViewAnalyze/ViewReports 只有提示

**已修复**: ViewTimeline, ViewPersistence 已实现

---

### 6. 配置热重载未集成

**位置**: `config/loader.go`

**问题**: Watch 有回调但调用方未实现

**建议**: TUI/CLI/API 启动时正确连接热重载回调
