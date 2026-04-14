# WinLogAnalyzer-Go

**版本**: v2.4.0  
**日期**: 2026-04-13

Windows 安全取证与日志分析工具，使用 Go 语言重写。

## 特性

| 特性 | 说明 |
|------|------|
| 高性能 | Go 并发模型处理大文件日志 |
| 单二进制 | 编译为单个可执行文件，无依赖 |
| 内存安全 | Go 天然内存安全 |
| 取证合规 | 内置证据完整性校验 |

## 性能目标

| 指标 | 目标 |
|------|------|
| EVTX 解析速度 | ≥150万条/分钟 |
| 内存占用 (1GB EVTX) | ≤200MB |
| 启动时间 | ≤100ms |

## 支持的格式

- EVTX (Windows Event Log)
- ETL (Event Trace Log)
- CSV/LOG (自定义格式)
- IIS (W3C Extended Log)
- Sysmon (Event ID 1-22)

## 快速开始

### 安装

```bash
go install github.com/kkkdddd-start/winalog-go@latest
```

或者从源码编译：

```bash
git clone https://github.com/kkkdddd-start/winalog-go.git
cd winalog-go
make build
```

### 使用

```bash
# 导入日志文件
winalog import security.evtx

# 搜索事件
winalog search --event-id 4624

# 一键采集
winalog collect --output evidence.zip

# 启动 TUI
winalog tui

# 启动 API 服务器
winalog serve --port 8080
```

## CLI 命令

| 命令 | 说明 |
|------|------|
| `import` | 批量导入日志文件 |
| `search` | 全文搜索事件 |
| `collect` | 一键采集所有日志源 |
| `alert` | 告警管理 |
| `correlate` | 关联分析 |
| `analyze` | 专用分析器 |
| `report` | 报告生成 |
| `export` | 数据导出 |
| `timeline` | 时间线分析 |
| `multi` | 多机分析 |
| `live` | 实时监控 |
| `forensics` | 取证功能 |
| `status` | 系统状态 |
| `info` | 系统信息 |
| `verify` | 完整性验证 |
| `rules` | 规则管理 |
| `db` | 数据库管理 |
| `config` | 配置管理 |
| `metrics` | Prometheus 指标 |
| `query` | SQL 查询 |
| `tui` | 终端界面 |
| `serve` | HTTP API 服务器 |

## 开发

### 环境要求

- Go 1.22+
- Windows (用于实际运行)

### 构建

```bash
# 构建当前平台
make build

# 构建所有平台
make build-all

# 运行测试
make test

# 运行 lint
make lint
```

### 项目结构

```
winalog-go/
├── cmd/winalog/           # CLI 命令
│   └── commands/         # 子命令
├── internal/              # 内部包
│   ├── engine/           # 核心引擎
│   ├── parsers/          # 日志解析器
│   ├── storage/           # 数据存储
│   ├── alerts/            # 告警引擎
│   ├── correlation/       # 关联引擎
│   ├── rules/             # 规则系统
│   ├── analyzers/         # 分析器
│   ├── collectors/        # 采集器
│   ├── forensics/         # 取证
│   ├── reports/           # 报告
│   ├── exporters/         # 导出器
│   ├── api/               # HTTP API
│   ├── tui/               # 终端界面
│   ├── types/             # 类型定义
│   ├── config/            # 配置
│   └── utils/             # 工具函数
└── pkg/                   # 公共包
    ├── evtx/              # EVTX 解析库
    └── mitre/             # MITRE ATT&CK
```

## 依赖

| 依赖 | 版本 | 说明 |
|------|------|------|
| cobra | v1.7+ | CLI 框架 |
| viper | v1.18+ | 配置管理 |
| gin | v1.9+ | HTTP 框架 |
| modernc.org/sqlite | v1.23+ | SQLite 驱动 (Pure Go) |
| zap | v1.26+ | 日志 |
| bubbletea | v1.12+ | TUI 框架 |

## 文档

详细设计文档位于 `dev-pkg/` 目录：

- `design.md` - 核心架构设计
- `FEATURES.md` - 功能详细清单 (~450+)
- `MODULES_COMPARISON.md` - Python→Go 模块对比
- `requirements.md` - 需求文档
- `ISSUES_FIX.md` - 问题修复清单

## License

MIT
