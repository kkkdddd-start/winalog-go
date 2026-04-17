# R7: 统一报告服务层

## 问题描述

当前报告生成逻辑分散在多个地方，存在代码重复：

1. **CLI** (`cmd/winalog/commands/report.go`)
   - 使用 `reports.NewGenerator()`, `reports.NewHTMLExporter()`, `reports.NewJSONExporter()`
   - 直接调用 Exporter.Export()

2. **Web API** (`internal/api/handlers_reports.go`)
   - 定义了重复的类型：`ReportRequest`, `ReportSummary`, `ReportAlert` 等
   - 没有使用 `reports` 包的统一接口

3. **reports 包** (`internal/reports/`)
   - 定义了 `reports.ReportRequest`, `reports.ReportSummary` 等
   - 提供 `Generator`, `HTMLExporter`, `JSONExporter`

## 重复类型

| 类型 | reports 包 | api 包 |
|------|------------|--------|
| ReportRequest | ✅ | ✅ (重复) |
| ReportSummary | ✅ | ✅ (重复) |
| TimeRange | ✅ | ✅ (重复) |
| ReportAlert | ❌ | ✅ |
| ReportEvent | ❌ | ✅ |

## 设计方案

### 1. 统一报告服务 (ReportService)

```go
type ReportService struct {
    db       *storage.DB
    generator *reports.Generator
}

func NewReportService(db *storage.DB) *ReportService

// 统一接口
func (s *ReportService) GenerateReport(req *reports.ReportRequest) (*reports.Report, error)
func (s *ReportService) ExportHTML(req *reports.ReportRequest, w io.Writer) error
func (s *ReportService) ExportJSON(req *reports.ReportRequest) ([]byte, error)
func (s *ReportService) ExportPDF(req *reports.ReportRequest, w io.Writer) error
```

### 2. 统一数据模型

保留 `reports.ReportRequest` 和 `reports.Report`，删除 `api` 包中的重复定义。

`handlers_reports.go` 应该：
- 使用 `reports.ReportRequest`
- 使用 `reports.Report` 
- 使用 `ReportService` 代替直接创建 Generator/Exporter

### 3. 迁移步骤

#### Phase 1: 创建 ReportService
1. 在 `internal/reports/` 创建 `service.go`
2. 实现 `ReportService` 结构体
3. 实现统一的生成和导出接口

#### Phase 2: 更新 Web API
1. 修改 `handlers_reports.go` 使用 `ReportService`
2. 删除重复的类型定义
3. 删除重复的报告生成逻辑

#### Phase 3: 清理 CLI
1. CLI 可以继续使用直接调用方式（可选重构）

### 4. 代码位置

```
internal/reports/
├── generator.go      # 保持不变
├── html.go           # 保持 HTMLExporter
├── json.go           # 保持 JSONExporter  
├── service.go        # 新增: ReportService
└── template/         # 保持不变
```

## 影响分析

| 模块 | 影响 |
|------|------|
| CLI report 命令 | 无破坏性变化，可选重构 |
| Web API | 重构 handlers_reports.go |
| reports 包 | 新增 service.go |

## 优先级

P1 - 需要架构设计

## 状态

待实施