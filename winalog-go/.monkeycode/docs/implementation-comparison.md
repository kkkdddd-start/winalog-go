# WinLogAnalyzer-Go 功能对比报告

**生成日期**: 2026-04-15  
**项目**: WinLogAnalyzer-Go v2.4.0

---

## 一、页面实现状态总览

| 页面 | FEATURES.md 定义 | 实际实现 | 状态 |
|------|-----------------|---------|------|
| Dashboard | `/` | Dashboard.tsx | ✅ 已实现 |
| Events | `/events` | Events.tsx | ✅ 已实现 |
| Event Detail | `/events/:id` | EventDetail.tsx | ✅ 已实现 |
| Alerts | `/alerts` | Alerts.tsx | ✅ 已实现 |
| Alert Detail | `/alerts/:id` | AlertDetail.tsx | ✅ 已实现 |
| Timeline | `/timeline` | Timeline.tsx | ✅ 已实现 |
| Reports | `/reports` | Reports.tsx | ✅ 已实现 |
| Forensics | `/forensics` | Forensics.tsx | ✅ 已实现 |
| SystemInfo | `/system-info` | SystemInfo.tsx | ✅ 已实现 |
| Rules | `/rules` | Rules.tsx | ✅ 已实现 |
| Settings | `/settings` | Settings.tsx | ✅ 已实现 |
| Metrics | `/metrics` | Metrics.tsx | ✅ 已实现 |
| Live | (新增) | Live.tsx | ✅ 已实现 |
| Persistence | (新增) | Persistence.tsx | ✅ 已实现 |
| Analyze | (新增) | Analyze.tsx | ✅ 已实现 |
| Collect | (新增) | Collect.tsx | ✅ 已实现 |

**结论**: 所有 FEATURES.md 中定义的 12 个页面都已实现，并额外新增了 4 个页面。

---

## 二、缺失功能详细清单

### 高优先级

#### 1. Rules 页面 - 规则验证功能
- **API 端点**: `POST /api/rules/validate`
- **功能描述**: 验证规则 YAML/JSON 语法是否正确
- **实现状态**: ❌ 后端缺失

#### 2. Rules 页面 - 规则导入功能
- **API 端点**: `POST /api/rules/import`
- **功能描述**: 从 YAML/JSON 文件导入自定义规则
- **实现状态**: ❌ 后端缺失

#### 3. Rules 页面 - 规则导出功能
- **API 端点**: `GET /api/rules/export`
- **功能描述**: 导出所有规则为 YAML/JSON 文件
- **实现状态**: ❌ 后端缺失

### 中优先级

#### 4. Rules 页面 - 规则详情弹窗
- **功能描述**: 点击规则卡片显示完整规则内容 (EventIDs, Filters, MITRE ATT&CK 等)
- **实现状态**: ❌ 前端缺失

#### 5. Reports - PDF 导出支持
- **API 端点**: `POST /api/reports` (format=pdf)
- **功能描述**: 生成 PDF 格式的报告文件
- **实现状态**: ⚠️ 后端支持有限 (缺少 PDF 生成器)

### 低优先级

#### 6. Settings - Advanced 标签页
- **功能描述**: Parser Workers 和 Memory Limit 设置的保存/加载
- **实现状态**: ⚠️ UI 存在但未与后端连接

#### 7. EventDetail - 复制功能
- **功能描述**: 复制事件内容到剪贴板
- **实现状态**: ❌ 前端缺失

#### 8. AlertDetail - 复制功能
- **功能描述**: 复制告警内容到剪贴板
- **实现状态**: ❌ 前端缺失

---

## 三、后端 API 对比

### 已实现的 API

| API 端点 | 方法 | 功能 |
|---------|------|------|
| `/api/rules` | GET | 获取规则列表 |
| `/api/rules/:name` | GET | 获取单个规则详情 |
| `/api/rules/:name/toggle` | POST | 启用/禁用规则 |
| `/api/rules/save` | POST | 保存规则 |
| `/api/reports` | GET | 获取报告列表 |
| `/api/reports` | POST | 生成报告 |
| `/api/reports/:id` | GET | 获取报告详情 |
| `/api/reports/export` | GET | 导出数据 |

### 缺失的 API

| API 端点 | 方法 | 功能 | 优先级 |
|---------|------|------|--------|
| `/api/rules/validate` | POST | 验证规则语法 | 高 |
| `/api/rules/import` | POST | 导入规则 | 高 |
| `/api/rules/export` | GET | 导出规则 | 高 |

---

## 四、前端组件对比

### 已实现组件

| 组件 | 功能 | 状态 |
|------|------|------|
| Table | 虚拟滚动、分页、可选择列 | ✅ |
| Badge | 级别/状态标签 | ✅ |
| Chart | Chart.js 图表 | ✅ |
| Modal | 弹窗对话框 | ✅ |
| Pagination | 分页导航 | ✅ |
| LevelBadge | 事件级别着色 | ✅ |
| SeverityBadge | 告警严重级别着色 | ✅ |
| StatusBadge | 告警状态着色 | ✅ |
| SearchBar | 搜索输入框 | ✅ |
| DateRangePicker | 日期范围选择 | ✅ |
| FilterPanel | 过滤器面板 | ✅ |
| EventDetail | 事件详情面板 | ✅ |
| AlertDetail | 告警详情面板 | ✅ |
| Timeline | 时间线组件 | ✅ |

---

## 五、实现计划

### Phase 1: Rules API 增强 (高优先级)
1. 添加 `POST /api/rules/validate` 端点
2. 添加 `POST /api/rules/import` 端点
3. 添加 `GET /api/rules/export` 端点

### Phase 2: Rules 前端增强 (高优先级)
1. 添加 Validate 按钮和验证逻辑
2. 添加 Import/Export 功能
3. 添加 Rule Details 详情弹窗

### Phase 3: Reports PDF 支持 (中优先级)
1. 添加 PDF 生成器 (后端)
2. 前端支持 PDF 下载选项

### Phase 4: 其他增强 (低优先级)
1. Settings Advanced 标签页完善
2. EventDetail/AlertDetail 复制功能

---

## 六、已完成的增强功能

以下功能是本次开发周期中新增的，不在原始 FEATURES.md 中：

1. **Live 实时监控页面** - SSE 流式接收事件
2. **SystemInfo Env/DLLs/Drivers 标签页** - 显示环境变量、加载的 DLL、驱动程序
3. **Persistence 持久化检测页面** - 完整的持久化技术检测 UI
4. **Analyze 分析器页面** - 8 种专用分析器
5. **Collect 采集页面** - 完整的一键采集功能
6. **Alerts 批量操作** - 批量解决/删除/误标
7. **Forensics 证据链** - Chain of Custody 时间线视图

---

*文档版本: v1.0 | 更新日期: 2026-04-15*
