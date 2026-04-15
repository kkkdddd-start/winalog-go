# Web UI 功能修复任务列表

## 概述

修复 WinLogAnalyzer-Go 项目中 Web UI 和后端 API 的空实现问题。

## 问题清单

### P0 - 核心功能（必须修复）

- [x] **1.1** Analyze 页面 - `handleRun` 使用 setTimeout + 硬编码 mock 结果
- [x] **1.2** Collect 页面 - `handleCollect/handleImport` 使用 setTimeout 模拟
- [x] **1.3** Settings 页面 - `handleSave` 只显示 "Saved"，无 API 调用
- [x] **1.4** Reports 页面 - 报告列表使用 Math.random() mock

### P1 - 重要功能（应该修复）

- [x] **2.1** Dashboard - collectionStats 全是 "N/A" 硬编码
- [x] **2.2** Forensics 页面 - `handleVerify` 失败时用 Math.random()
- [x] **2.3** 后端 AlertHandler.GetAlertTrend - 返回空数据
- [x] **2.4** 后端 LiveHandler.GetLiveStats - 返回全 0 假数据

### P2 - 次要功能（可以修复）

- [ ] **3.1** Forensics CollectEvidence - Windows 环境判断
- [ ] **3.2** Forensics ChainOfCustody - 返回空数据
- [x] **3.3** CLI runCollect - 只有 return nil
- [ ] **3.4** CLI runMultiAnalyze - 只打印消息

---

## 详细问题描述

### 1.1 Analyze 页面空实现

**文件**: `internal/gui/src/pages/Analyze.tsx`
**行号**: 71-91
**问题**: 
```typescript
const handleRun = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const mockResult: AnalyzeResult = { /* 硬编码数据 */ }
  setResult(mockResult)
}
```
**修复**: 调用 `/api/analyze/:type` 后端 API

### 1.2 Collect 页面空实现

**文件**: `internal/gui/src/pages/Collect.tsx`
**行号**: 93-114
**问题**: 使用 setTimeout 模拟收集进度
**修复**: 调用 `/api/collect` 后端 API

### 1.3 Settings 页面空实现

**文件**: `internal/gui/src/pages/Settings.tsx`
**行号**: 22-25
**问题**:
```typescript
const handleSave = () => {
  setSaved(true)
  setTimeout(() => setSaved(false), 3000)
}
```
**修复**: 调用 `POST /api/settings` 保存配置

### 1.4 Reports 页面 Mock 数据

**文件**: `internal/gui/src/pages/Reports.tsx`
**行号**: 46-53
**问题**: 使用 `Math.random()` 生成假报告
**修复**: 调用 `GET /api/reports` 获取真实报告

---

## API 端点需求

| 端点 | 方法 | 前端调用 | 后端状态 |
|------|------|----------|----------|
| `/api/analyze/:type` | POST | Analyze.handleRun | ✅ 已实现 |
| `/api/collect` | POST | Collect.handleCollect | ✅ 已实现 |
| `/api/collect/import` | POST | Collect.handleImport | ✅ 已实现 |
| `/api/settings` | GET/POST | Settings | ✅ 已实现 |
| `/api/reports` | GET | Reports | ✅ 已实现 |
| `/api/dashboard/collection-stats` | GET | Dashboard | ✅ 已实现 |

---

## 修复进度

| 日期 | 修复项 | 状态 |
|------|--------|------|
| 260415 | 创建任务列表 | ✅ 完成 |
| 260415 | Analyze/Collect/Settings/Reports 页面修复 | ✅ 完成 |
| 260415 | Forensics 页面 Math.random() 修复 | ✅ 完成 |
| 260415 | CLI runCollect 实现 | ✅ 完成 |
| 260415 | Dashboard collectionStats API | ✅ 完成 |
| 260415 | AlertHandler.GetAlertTrend 真实数据 | ✅ 完成 |
| 260415 | LiveHandler.GetLiveStats 真实数据 | ✅ 完成 |
