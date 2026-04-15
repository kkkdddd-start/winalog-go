# 模块功能实现审计报告

## 审计时间
2026-04-15

## 问题汇总

### P0 - 必须修复（核心功能）

| 模块 | 问题 | 严重程度 | 状态 |
|------|------|----------|------|
| Collect | Web UI handleCollect/handleImport 只有 setTimeout 模拟 | Critical | 已修复 |
| Reports | Web UI 报告列表使用 Math.random() mock | Critical | 已修复 |
| Reports | Web API Generate 返回模拟 ID | Critical | 已修复 |
| Analyze | Web UI handleRun 只有 setTimeout 模拟 | Critical | 已修复 |
| Live | Web API StreamEvents 空实现 | Critical | 已修复 |

### P1 - 应该修复（重要功能）

| 模块 | 问题 | 严重程度 | 状态 |
|------|------|----------|------|
| Dashboard | collectionStats 全是 "N/A" 硬编码 | High | 已修复 |
| Alerts | GetAlertTrend 返回空数据 | High | 已修复 |
| Live | GetLiveStats 返回全 0 假数据 | High | 已修复 |
| Settings | Web UI handleSave 无 API 调用 | High | 已修复 |
| Forensics | handleVerify 失败时用 Math.random() | High | 已修复 |

### P2 - 可以修复（次要功能）

| 模块 | 问题 | 严重程度 | 状态 |
|------|------|----------|------|
| CLI | runCollect 只有 return nil | Medium | 已修复 |
| CLI | runMultiAnalyze 只有打印消息 | Medium | 已修复 |
| Persistence | TUI 只有提示用 CLI | Medium | 已修复 |
| Timeline | TUI 无实现 | Medium | 已修复 |

---

## 详细问题分析

### 1. Collect 模块 - Web UI 空实现

**问题位置**: `internal/gui/src/pages/Collect.tsx`

**问题代码**:
```typescript
const handleCollect = async () => {
  setLoading(true)
  setStatus(t('collect.starting'))
  // ... 处理日志源 ...
  await new Promise(resolve => setTimeout(resolve, 2000))  // ❌ 模拟
  setStatus(`${t('collect.collecting')}...`)
  await new Promise(resolve => setTimeout(resolve, 1000))  // ❌ 模拟
  // ...
}

const handleImport = async () => {
  setLoading(true)
  setStatus(t('collect.importing'))
  await new Promise(resolve => setTimeout(resolve, 2000))  // ❌ 模拟
  // ...
}
```

**修复方案**:
1. 使用 `collectAPI.collect()` 调用后端 API
2. 使用 `collectAPI.import()` 调用导入 API
3. 实现进度更新逻辑

**API 端点**:
- `POST /api/collect` - 触发收集
- `POST /api/collect/import` - 导入日志文件

---

### 2. Reports 模块 - 多处 Mock

**问题位置**: 
- `internal/gui/src/pages/Reports.tsx` - 前端 Mock
- `internal/api/handlers_reports.go` - 后端返回模拟 ID

**问题代码 (前端)**:
```typescript
const [reports, setReports] = useState<Report[]>([
  {
    id: Math.random().toString(36).substr(2, 9),  // ❌ Mock ID
    name: `Report-${Date.now()}`,  // ❌ Mock 名称
    type: ['summary', 'detailed', 'timeline'][Math.floor(Math.random() * 3)] as ReportType,  // ❌ Mock 类型
    // ...
  }
])
```

**问题代码 (后端)**:
```go
func (h *ReportsHandler) GenerateReport(c *gin.Context) {
  // ...
  c.JSON(200, ReportResponse{
    ID:      "mock-report-" + strconv.FormatInt(time.Now().Unix(), 10),  // ❌ 模拟 ID
    Status:  "completed",  // ❌ 直接完成，没有真实生成
    // ...
  })
}
```

**修复方案**:
1. 前端：使用 `reportsAPI.list()` 获取真实报告列表
2. 后端：实现真实的报告生成逻辑

---

### 3. Live 模块 - SSE 空实现

**问题位置**: `internal/api/handlers_live.go`

**问题代码**:
```go
func (h *LiveHandler) StreamEventsSSE(c *gin.Context) {
  // ...
  for {
    select {
    case <-ticker.C:
      c.SSEvent("ping", "")  // ❌ 只发送 ping，没有真实事件
      c.Writer.Flush()
    case <-clientGone:
      return
    }
  }
}
```

**修复方案**:
1. 连接到真实的事件源
2. 发送真实的事件数据

---

### 4. CLI runMultiAnalyze - 空实现

**问题位置**: `cmd/winalog/commands/analyze.go`

**问题代码**:
```go
func runMultiAnalyze(cmd *cobra.Command, args []string) error {
  fmt.Println("Multi-analyze is not yet implemented.")
  return nil
}
```

**修复方案**:
实现多维度关联分析功能

---

## 修复进度

### 已完成 ✅

| 日期 | 修复项 |
|------|--------|
| 260415 | Analyze 页面 - 真实 API 调用 |
| 260415 | Collect 页面 - 真实 API |
| 260415 | Settings 页面 - 真实 API |
| 260415 | Reports 页面 - 移除 Math.random() |
| 260415 | Forensics 页面 - 移除 Math.random() fallback |
| 260415 | CLI runCollect - 实现真实收集 |
| 260415 | Dashboard collectionStats - 真实 API |
| 260415 | AlertHandler.GetAlertTrend - 真实数据 |
| 260415 | LiveHandler.GetLiveStats - 真实数据 |
| 260416 | LiveHandler.StreamEventsSSE - 真实事件推送 |
| 260416 | CLI runMultiAnalyze - 跨机器关联分析 |
| 260416 | CLI runMultiLateral - 横向移动检测 |
| 260416 | Persistence TUI - 自动加载检测结果 |
| 260416 | Timeline TUI - 显示事件时间线 |
| 260416 | Forensics handleCollect - 使用真实 API |
| 260416 | ChainOfCustody API - 实现数据库查询 |

---

## API 端点检查清单

| 端点 | 方法 | 前端调用 | 后端实现 | 状态 |
|------|------|----------|----------|------|
| `/api/collect` | POST | Collect.tsx | handlers_collect.go | ✅ 已实现 |
| `/api/collect/import` | POST | Collect.tsx | handlers_collect.go | ✅ 已实现 |
| `/api/reports` | GET | Reports.tsx | handlers_reports.go | ✅ 已实现 |
| `/api/reports` | POST | Reports.tsx | handlers_reports.go | ✅ 已实现 |
| `/api/analyze/:type` | POST | Analyze.tsx | handlers_analyze.go | ✅ 已实现 |
| `/api/live/events` | GET | - | handlers_live.go | ✅ 已实现 |
| `/api/live/stats` | GET | - | handlers_live.go | ✅ 已实现 |
