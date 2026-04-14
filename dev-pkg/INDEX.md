# WinLogAnalyzer-Go 设计文档索引

## 文档概览

| 文档 | 说明 | 状态 |
|------|------|------|
| `design.md` | 核心架构设计方案 | 完整 |
| `design-supplement.md` | **补充设计** - 所有缺失模块详细设计 | 完整 |
| `MODULES_COMPARISON.md` | **模块对比** - Python/Go 每个模块功能对比 | 完整 |
| `GUI_COMPARISON.md` | **GUI对比** - Python GUI vs Go 前端功能对比 | 完整 |
| `requirements.md` | 需求文档 | 完整 |

---

## 覆盖状态总览

| Python 模块 | Go 实现 | 状态 |
|-------------|---------|------|
| **CLI (19个命令)** | | |
| cli/* | cmd/winalog/commands/ | **100% 覆盖** |
| **Core 模块** | | |
| core/* | internal/core/ | **100% 覆盖** |
| **Parsers (6个)** | | |
| parsers/* | internal/parsers/ | **100% 覆盖** |
| **Collectors (13个)** | | |
| collectors/* | internal/collectors/ | **100% 覆盖** |
| **其他核心模块** | | |
| alerts, correlation, rules | internal/alerts, internal/correlation, internal/rules | **100% 覆盖** |
| reports, exporters | internal/reports, internal/exporters | **100% 覆盖** |
| gui | internal/gui + web/ | **100% 覆盖** |
| multi_machine | internal/multi/ | **100% 覆盖** |
| timeline | internal/timeline/ | **100% 覆盖** |
| analyzers | internal/analyzers/ | **100% 覆盖** |
| observability | internal/observability/ | **100% 覆盖** |
| utils | internal/utils/ | **100% 覆盖** |

---

## 补充文档内容 (design-supplement.md)

### 已补充的模块

| 模块 | 文件 | 内容 |
|------|------|------|
| 实时采集 | `collectors/live/` | 自适应轮询、书签、过滤、背压控制 |
| 持久化采集 | `collectors/persistence/` | Prefetch/ShimCache/Amcache/UserAssist/USN |
| 专用分析器 | `analyzers/` | BruteForceDetector |
| 内置规则 | `rules/builtin/` | 60+ 规则完整迁移 |
| CLI 命令 | `commands/` | status, verify, db, rules |
| 报告增强 | `reports/` | 安全统计、IOC |
| Pure Go SQLite | go.mod | modernc.org/sqlite |
| **Core 补充** | `core/` | constants, logger, search |
| **Collectors 补充** | `collectors/` | user_info, wmi_subscription, driver_info, env_info |
| **Utils 补充** | `utils/` | geoip, powershell, windows |
| **Observability** | `observability/` | logging, metrics, system |

---

## 移植对照表 (Python → Go)

| Python 模块 | Go 包 | 状态 |
|------------|-------|------|
| `cli/__init__.py` | `cmd/winalog/commands/` | ✅ 完整 |
| `core/analyzer.py` | `internal/engine/` | ✅ 完整 |
| `core/config.py` | `internal/config/` | ✅ 完整 |
| `core/constants.py` | `internal/core/constants.go` | ✅ 完整 |
| `core/exceptions.py` | `internal/types/errors.go` | ✅ 完整 |
| `core/logger.py` | `internal/core/logger.go` | ✅ 完整 |
| `core/search.py` | `internal/core/search.go` | ✅ 完整 |
| `core/types.py` | `internal/types/` | ✅ 完整 |
| `parsers/*.py` | `internal/parsers/` | ✅ 完整 |
| `storage/database.py` | `internal/storage/` | ✅ 完整 |
| `collectors/*.py` | `internal/collectors/` | ✅ 完整 |
| `alerts/engine.py` | `internal/alerts/` | ✅ 完整 |
| `correlation/engine.py` | `internal/correlation/` | ✅ 完整 |
| `rules/*.py` | `internal/rules/` | ✅ 完整 |
| `reports/*.py` | `internal/reports/` | ✅ 完整 |
| `exporters/exporter.py` | `internal/exporters/` | ✅ 完整 |
| `gui/*.py` | `internal/gui/ + web/` | ✅ 完整 |
| `multi_machine/analyzer.py` | `internal/multi/` | ✅ 完整 |
| `global_timeline.py` | `internal/timeline/` | ✅ 完整 |
| `analyzers/*.py` | `internal/analyzers/` | ✅ 完整 |
| `observability/*.py` | `internal/observability/` | ✅ 完整 |
| `utils/*.py` | `internal/utils/` | ✅ 完整 |
| - | `internal/forensics/` | ✅ 新增 |

---

## 设计文档版本历史

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| v2.0.0 | 2026-04-13 | 初始设计方案 |
| v2.1.0 | 2026-04-13 | 补充缺失模块 (live, persistence, analyzers) |
| v2.2.0 | 2026-04-13 | **完整覆盖** 所有 Python 模块 |
| v2.3.0 | 2026-04-13 | **TUI + Web UI** 双前端策略 |
| v2.4.0 | 2026-04-13 | **缺失功能补充** - 系统信息/多机/规则编辑器/Metrics 等 |
| v2.5.0 | 2026-04-13 | **全面增强** - 虚拟滚动/日志分析/进程签名/DLL模块/审计日志 |
| v2.6.0 | 2026-04-13 | **采纳 Python 优秀设计** - Worker架构/多关键字搜索/审计日志 |
| v2.7.0 | 2026-04-13 | **可选功能** - GeoIP/DNS/IOC/进程深度分析/日志模块 |

---

## 下一步

1. 根据设计方案开始实现核心模块
2. **Phase 1**: TUI + 核心解析 + 告警 + 关联 (**P0**)
3. 第二阶段: CLI + 报告生成
4. **Phase 2**: HTTP API + Web UI (**P1**)
