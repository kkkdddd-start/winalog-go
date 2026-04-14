# WinLogAnalyzer-Go 实施计划索引

本目录包含 WinLogAnalyzer-Go 项目的详细实施计划，按开发阶段组织。

## 目录结构

```
.monkeycode/specs/
├── README.md                    # 本索引文件
├── phase1-core-modules/         # Phase 1: 核心模块 (MVP)
│   └── tasklist.md             # 详细任务列表
├── phase2-analysis/             # Phase 2: 分析功能
│   └── tasklist.md             # 详细任务列表
├── phase3-ui/                   # Phase 3: 用户界面
│   └── tasklist.md             # 详细任务列表
└── phase4-enhancement/          # Phase 4: 增强功能
    └── tasklist.md             # 详细任务列表
```

## 开发阶段概述

### Phase 1: 核心模块 (MVP)
**优先级**: P0  
**目标**: 实现基础框架、解析器、存储、采集器、CLI

主要模块：
- 类型定义 (`internal/types/`)
- 配置系统 (`internal/config/`)
- 解析器 (`internal/parsers/`) - EVTX/ETL/CSV/IIS/Sysmon
- 存储 (`internal/storage/`) - SQLite WAL
- 采集器 (`internal/collectors/`) - 系统信息、持久化、一键采集、实时
- 核心引擎 (`internal/engine/`)
- CLI 命令 (`cmd/winalog/commands/`)
- 工具函数 (`internal/utils/`)

### Phase 2: 分析功能
**优先级**: P0  
**目标**: 实现告警、关联、规则、分析器

主要模块：
- 告警引擎 (`internal/alerts/`) - 7个模块：engine, dedup, evaluator, stats, trend, upgrade, suppress
- 关联引擎 (`internal/correlation/`) - engine, matcher, chain
- 规则系统 (`internal/rules/`) - 60+ 内置规则
- 分析器 (`internal/analyzers/`) - brute_force, login, kerberos, powershell

### Phase 3: 用户界面
**优先级**: P0 (TUI), P1 (Web UI)  
**目标**: 实现 TUI、HTTP API、Web UI

主要模块：
- TUI (`internal/tui/`) - Bubble Tea，11个视图
- HTTP API (`internal/api/`) - Gin 框架
- Web UI (`internal/gui/`) - React + Vite，12个页面

### Phase 4: 增强功能
**优先级**: P1  
**目标**: 实现取证、报告、导出、时间线、多机、可观测性

主要模块：
- 取证 (`internal/forensics/`) - hash, signature, chain, memory, timestamp
- 报告 (`internal/reports/`) - generator, html, json, security_stats
- 导出器 (`internal/exporters/`) - json, csv, timeline
- 时间线 (`internal/timeline/`) - builder, visualizer
- 多机分析 (`internal/multi/`) - analyzer
- 可观测性 (`internal/observability/`) - metrics, logging, system

## 参考文档

所有实施计划参考以下设计文档：
- `dev-pkg/design.md` - 核心设计文档 (~90KB)
- `dev-pkg/FEATURES.md` - 功能详细清单 (~43KB)
- `dev-pkg/requirements.md` - 需求文档 (~7KB)
- `dev-pkg/MODULES_COMPARISON.md` - Python→Go 模块对比 (~33KB)
- `dev-pkg/ISSUES_FIX.md` - 问题修复清单 (~25KB)

## 任务列表格式

每个 Phase 的 tasklist.md 包含：
- [ ] 顶层任务 (epic)
  - [ ] 子任务 (sub-task)
  - [ ] 子任务 (sub-task)
  - [ ]* 可选子任务，如测试 (marked with *)
- [ ] 检查点任务

## 关键设计决策

1. **SQLite 驱动**: 必须使用 `modernc.org/sqlite` (Pure Go, 无 CGO)
2. **前端策略**: TUI (Bubble Tea) = P0, Web UI (React) = P1
3. **并发模型**: goroutine + channel 事件管道
4. **类型系统**: 统一在 `internal/types/`

## 性能目标

| 指标 | 目标 |
|------|------|
| EVTX 解析速度 | ≥150万条/分钟 |
| 内存占用 (1GB EVTX) | ≤200MB |
| 启动时间 | ≤100ms |
| 批量插入速度 | ≥10万条/秒 |

## 版本信息

- 项目: WinLogAnalyzer-Go
- 设计版本: v2.4.0
- 更新日期: 2026-04-13
