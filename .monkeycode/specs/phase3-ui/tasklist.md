# Phase 3: 用户界面

## 概述

本阶段实现 TUI (Bubble Tea)、HTTP API (Gin) 和 Web UI (React)。

**参考文档**：
- `dev-pkg/design.md` 第 6-7 章
- `dev-pkg/FEATURES.md` 第十六至十七章
- `dev-pkg/MODULES_COMPARISON.md` 第十八章

---

## 任务列表

### 1. TUI 界面 (`internal/tui/`)

- [x] 1.1 实现 TUI 主结构
  - 创建 `model.go` 全局模型 (Elm 架构)
  - 配置 Bubble Tea 框架

- [x] 1.2 实现 Dashboard 视图
  - 显示统计概览
  - 显示告警摘要
  - 快捷键：`d`

- [x] 1.3 实现 Events 视图
  - 显示事件列表
  - 实现分页和过滤
  - 快捷键：`e`

- [x] 1.4 实现 Event Detail 视图
  - 显示事件详情
  - 显示 XML 原始数据
  - 快捷键：`Enter`

- [x] 1.5 实现 Alerts 视图
  - 显示告警列表
  - 实现告警处置
  - 快捷键：`a`

- [x] 1.6 实现 Alert Detail 视图
  - 显示告警详情
  - 显示关联事件
  - 快捷键：`Enter`

- [x] 1.7 实现 Search 视图
  - 实现搜索界面
  - 支持关键字、正则、时间范围
  - 快捷键：`/`

- [x] 1.8 实现 Timeline 视图
  - 显示全局时间线
  - 显示攻击链
  - 快捷键：`t`

- [x] 1.9 实现 Collect 视图
  - 触发一键采集
  - 显示采集进度
  - 快捷键：`c`

- [x] 1.10 实现 Live Monitor 视图
  - 实时监控事件流
  - 显示统计信息
  - 快捷键：`l`

- [x] 1.11 实现 Help 视图
  - 显示帮助信息
  - 快捷键：`?`

- [x] 1.12 实现 Settings 视图
  - 配置管理
  - 快捷键：`,`

- [x] 1.13 实现键位映射和样式
  - 定义 `keyMap` 键位映射 (vi 风格)
  - 定义 `theme.go` 主题 (lipgloss)

### 2. HTTP API (`internal/api/`)

- [x] 2.1 实现 Gin 服务器 (`server.go`)
  - 配置路由中间件
  - 配置 CORS
  - 配置日志

- [x] 2.2 实现 API 路由 (`routes.go`)
  - `/api/events` 事件接口
  - `/api/alerts` 告警接口
  - `/api/correlate` 关联接口
  - `/api/reports` 报告接口
  - `/api/forensics` 取证接口
  - `/api/live` 实时监控接口
  - `/api/health` 健康检查
  - 参考：`dev-pkg/design.md` 7.1 节

- [x] 2.3 实现事件 Handler (`handlers.go`)
  - 实现 `listEvents` 事件列表
  - 实现 `getEvent` 事件详情
  - 实现 `searchEvents` 搜索事件
  - 实现 `exportEvents` 导出事件
  - 实现 `SearchRequest`/`SearchResponse` 结构
  - 实现分页和排序
  - 参考：`dev-pkg/design.md` 7.2 节，`dev-pkg/ISSUES_FIX.md` 问题3

- [x] 2.4 实现告警 Handler (`handlers.go`)
  - 实现 `ListAlerts` 告警列表
  - 实现 `GetAlertStats` 告警统计
  - 实现 `GetAlertTrend` 告警趋势
  - 实现 `ResolveAlert` 解决告警
  - 实现 `MarkFalsePositive` 标记误报
  - 实现 `BatchAlertAction` 批量操作
  - 参考：`dev-pkg/design.md` 7.2 节

- [x] 2.5 实现实时监控 Handler (`handlers_live.go`)
  - 实现 `LiveEventMessage` 实时消息结构
  - 实现 SSE 事件流 (`StreamEventsSSE`)
  - 实现 `GetLiveStats` 实时统计
  - 参考：`dev-pkg/ISSUES_FIX.md` 问题4

- [x] 2.6 实现中间件 (`middleware.go`)
  - 实现请求日志中间件
  - 实现错误处理中间件
  - 实现认证中间件 (可选)

- [ ] 2.7 实现导入 Handler
  - 实现 `importLogs` 导入接口

### 3. CLI UI 命令

- [ ] 3.1 实现 TUI 启动命令 (`tui.go`)
  - 启动 Bubble Tea TUI

- [x] 3.2 实现 serve 启动命令 (`serve.go`)
  - 启动 Gin HTTP API 服务器
  - 启动 React Web UI

### 4. Web UI (`internal/gui/`)

- [ ] 4.1 初始化 React 项目
  - 配置 `package.json`
  - 配置 Vite
  - 配置 TypeScript

- [ ] 4.2 实现 Dashboard 页面
  - 统计图表 (Chart.js)
  - 告警概览
  - 路由：`/`

- [ ] 4.3 实现 Events 页面
  - 事件列表 (虚拟滚动 Table)
  - 筛选面板
  - 分页导航
  - 路由：`/events`

- [ ] 4.4 实现 Event Detail 页面
  - 事件详情面板
  - XML 原始数据
  - 路由：`/events/:id`

- [ ] 4.5 实现 Alerts 页面
  - 告警列表
  - 告警管理
  - 路由：`/alerts`

- [ ] 4.6 实现 Alert Detail 页面
  - 告警详情
  - 告警处置
  - 路由：`/alerts/:id`

- [ ] 4.7 实现 Timeline 页面
  - 攻击链可视化
  - 时间线组件
  - 路由：`/timeline`

- [ ] 4.8 实现 Reports 页面
  - 报告生成
  - 路由：`/reports`

- [ ] 4.9 实现 Forensics 页面
  - 取证采集
  - Hash 验证
  - 路由：`/forensics`

- [ ] 4.10 实现 SystemInfo 页面
  - 系统信息采集
  - 路由：`/system-info`

- [ ] 4.11 实现 Rules 页面
  - 规则管理
  - 规则编辑器
  - 路由：`/rules`

- [ ] 4.12 实现 Settings 页面
  - 配置管理
  - 路由：`/settings`

- [ ] 4.13 实现 Metrics 页面
  - Prometheus 指标
  - 路由：`/metrics`

- [ ] 4.14 实现通用组件
  - `Table` 虚拟滚动、分页
  - `Badge` 级别/状态标签
  - `Chart` Chart.js 图表
  - `Modal` 弹窗对话框
  - `Pagination` 分页导航
  - `SearchBar` 搜索框
  - `DateRangePicker` 日期选择
  - `FilterPanel` 过滤器面板

- [ ] 4.15 实现 API 调用封装 (`api/`)
  - 封装所有 API 请求
  - 处理认证和错误

### 5. 检查点

- [ ] 确保 TUI 所有视图正常工作
- [ ] 确保 API 所有端点正常响应
- [ ] 确保 Web UI 所有页面正常加载
- [ ] 确保前后端联调正常
