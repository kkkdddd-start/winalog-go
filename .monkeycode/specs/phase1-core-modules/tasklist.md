# Phase 1: 核心模块 (MVP)

## 概述

本阶段实现核心基础设施：类型定义、配置、解析器、存储、采集器和 CLI。

**参考文档**：
- `dev-pkg/design.md` 第 1-4 章
- `dev-pkg/FEATURES.md` 第一至四章
- `dev-pkg/requirements.md` 第 2-4 章

---

## 任务列表

### 1. 项目初始化

- [x] 1.1 初始化 Go 模块结构
  - 创建 `winalog-go/` 目录结构
  - 初始化 `go.mod`：cobra, viper, gin, modernc.org/sqlite, zap, bubbletea
  - 配置 `go.sum` 和依赖版本锁定

- [x] 1.2 配置 Makefile 和构建脚本
  - 添加 `make build`, `make test`, `make lint`
  - 添加跨平台编译支持

### 2. 类型定义 (`internal/types/`)

- [x] 2.1 实现事件类型 (`event.go`)
  - 定义 `Event`, `EventLevel` 常量
  - 实现 `ToMap()` 方法用于数据库存储
  - 参考：`dev-pkg/design.md` 4.2 节

- [x] 2.2 实现告警类型 (`alert.go`)
  - 定义 `Alert`, `AlertStats`, `AlertUpgradeRule`, `SuppressRule`
  - 定义 `Severity` 枚举和常量
  - 参考：`dev-pkg/design.md` 4.3 节

- [x] 2.3 实现规则类型 (`rule.go`)
  - 定义 `BaseRule`, `AlertRule`, `CorrelationRule`
  - 定义 `Filter`, `Condition`, `LogicalOp`
  - 参考：`dev-pkg/design.md` 4.1 节

- [x] 2.4 实现系统类型 (`system.go`)
  - 定义 `SystemInfo`, `ProcessInfo`, `NetworkConnection` 等
  - 参考：`dev-pkg/FEATURES.md` 4.1 节

- [x] 2.5 实现错误类型 (`errors.go`)
  - 定义统一错误码常量
  - 实现错误类型层次结构
  - 参考：`dev-pkg/ISSUES_FIX.md` 问题7

- [x] 2.6 实现结果类型 (`result.go`)
  - 定义 `ImportResult`, `SearchResult`, `CollectResult`

### 3. 配置系统 (`internal/config/`)

- [x] 3.1 实现配置结构 (`config.go`)
  - 定义 `Config` 主结构
  - 定义 `DatabaseConfig`, `ImportConfig`, `SearchConfig`, `AlertsConfig` 等子结构
  - 参考：`dev-pkg/ISSUES_FIX.md` 问题8

- [x] 3.2 实现配置加载器 (`loader.go`)
  - 实现 YAML 配置文件解析
  - 实现环境变量覆盖
  - 实现默认值设置

### 4. 解析器系统 (`internal/parsers/`)

- [ ] 4.1 实现解析器接口 (`parser.go`)
  - 定义 `Parser` 接口：`CanParse`, `Parse`, `ParseBatch`, `GetType`
  - 实现 `ParserRegistry` 注册表
  - 参考：`dev-pkg/FEATURES.md` 3.1 节

- [ ] 4.2 实现 EVTX 解析器 (`evtx/`)
  - 实现 `EvtxParser` 结构
  - 实现 `CanParse` 和 `Parse` 方法
  - 实现 XML 事件提取
  - 实现 wevtutil 备用解析
  - 参考：`dev-pkg/FEATURES.md` 3.2 节

- [ ] 4.3 实现 ETL 解析器 (`etl/`)
  - 实现 `EtlParser` 结构
  - 实现 ETW 跟踪文件解析

- [ ] 4.4 实现 CSV/LOG 解析器 (`csv/`)
  - 实现 `CsvParser` 结构
  - 支持自定义分隔符和表头

- [ ] 4.5 实现 IIS 解析器 (`iis/`)
  - 实现 `IISParser` 结构
  - 支持 W3C/NCSA 格式

- [ ] 4.6 实现 Sysmon 解析器 (`sysmon/`)
  - 实现 `SysmonParser` 结构
  - 支持事件 ID 1-22

- [ ] 4.7 创建 pkg/evtx 独立库 (`pkg/evtx/`)
  - 实现 `Reader`, `Record`, `XML` 解析
  - 提供独立可复用的 EVTX 解析包

### 5. 存储系统 (`internal/storage/`)

- [ ] 5.1 实现数据库封装 (`db.go`)
  - 使用 `modernc.org/sqlite` 驱动
  - 启用 WAL 模式
  - 实现连接池管理
  - 参考：`dev-pkg/design.md` 9.1 节

- [ ] 5.2 实现 Schema 定义 (`schema.go`)
  - 定义 9 张表：events, alerts, import_log, machine_context, multi_machine_analysis, global_timeline, sessions, evidence_chain, evidence_file
  - 实现表创建和迁移逻辑
  - 参考：`dev-pkg/FEATURES.md` 9.2 节

- [ ] 5.3 实现 Repository 模式 (`repository.go`)
  - 实现 `EventRepository` 接口
  - 实现 `AlertRepository` 接口
  - 实现 CRUD 操作
  - 参考：`dev-pkg/FEATURES.md` 9.3 节

- [ ] 5.4 实现事件存储 (`events.go`)
  - 实现事件批量插入
  - 实现事件去重
  - 实现增量导入支持

- [ ] 5.5 实现告警存储 (`alerts.go`)
  - 实现告警 CRUD
  - 实现告警统计查询

### 6. 核心引擎 (`internal/engine/`)

- [ ] 6.1 实现分析引擎 (`engine.go`)
  - 定义 `Engine` 结构，整合 parser、storage、alerts
  - 实现 `Import` 方法处理批量导入
  - 实现进度回调
  - 参考：`dev-pkg/FEATURES.md` 2.1 节

- [ ] 6.2 实现事件管道 (`pipeline.go`)
  - 实现 Worker Pool 并行处理
  - 实现流式解析和批量插入
  - 支持 context 取消
  - 参考：`dev-pkg/design.md` 5.1 节

- [ ] 6.3 实现导入器 (`importer.go`)
  - 实现文件类型识别
  - 实现增量导入逻辑

### 7. 采集器系统 (`internal/collectors/`)

- [ ] 7.1 实现采集器接口 (`collector.go`)
  - 定义 `Collector` 接口
  - 定义 `RequiresAdmin` 方法

- [ ] 7.2 实现系统信息采集 (`system_info.go`)
  - 实现 `SystemInfo` 采集
  - 采集主机名、OS、架构、时区等

- [ ] 7.3 实现进程信息采集 (`process_info.go`)
  - 实现 `ProcessInfo` 采集
  - 采集 PID、PPID、路径、签名等

- [ ] 7.4 实现网络连接采集 (`network_info.go`)
  - 实现 `NetworkConnection` 采集
  - 采集 TCP/UDP 连接状态

- [ ] 7.5 实现用户账户采集 (`user_info.go`)
  - 实现 `UserAccount` 采集
  - 采集 SID、最后登录、账户状态等

- [ ] 7.6 实现注册表采集 (`registry_info.go`)
  - 实现 `RegistryPersistence` 采集
  - 采集 Run 键、UserInit MPR 等持久化位置

- [ ] 7.7 实现计划任务采集 (`task_info.go`)
  - 实现 `ScheduledTask` 采集
  - 采集任务名称、触发器、动作等

- [ ] 7.8 实现驱动信息采集 (`driver_info.go`)
  - 实现 `DriverInfo` 采集
  - 采集驱动名称、签名状态等

- [ ] 7.9 实现环境变量采集 (`env_info.go`)
  - 实现 `EnvInfo` 采集
  - 采集系统/用户环境变量

- [ ] 7.10 实现 DLL 模块采集 (`dll_info.go`)
  - 实现 `DLLModule` 采集
  - 采集进程加载的 DLL

- [ ] 7.11 实现持久化检测 (`persistence/`)
  - 实现 Prefetch 采集 (`prefetch.go`)
  - 实现 ShimCache 采集 (`shimcache.go`)
  - 实现 Amcache 采集 (`amcache.go`)
  - 实现 UserAssist 采集 (`userassist.go`)
  - 实现 USN Journal 采集 (`usnjournal.go`)

- [ ] 7.12 实现一键采集 (`one_click.go`)
  - 实现日志源自动发现
  - 实现文件锁定检测
  - 实现并行采集
  - 实现 ZIP 打包和 SHA256 校验
  - 参考：`dev-pkg/FEATURES.md` 4.3 节

- [ ] 7.13 实现实时采集 (`live/`)
  - 实现 `LiveCollector` (`collector.go`)
  - 实现书签支持 (`bookmark.go`)
  - 实现过滤采集 (`filtered.go`)
  - 实现采集统计 (`stats.go`)
  - 实现自适应轮询

### 8. CLI 命令 (`cmd/winalog/commands/`)

- [ ] 8.1 实现导入命令 (`import.go`)
  - 支持并行 workers、批量插入
  - 支持增量导入和进度回调

- [ ] 8.2 实现搜索命令 (`search.go`)
  - 支持关键字/正则/事件ID过滤
  - 支持时间范围和级别过滤

- [ ] 8.3 实现采集命令 (`collect.go`)
  - 触发一键采集
  - 支持选项配置

- [ ] 8.4 实现数据库管理命令 (`db.go`)
  - `db status` 查看状态
  - `db vacuum` 清理数据库

- [ ] 8.5 实现规则管理命令 (`rules_cmd.go`)
  - `rules list` 列出规则
  - `rules validate` 验证规则

- [ ] 8.6 实现状态命令 (`status.go`)
  - 显示统计信息

- [ ] 8.7 实现系统信息命令 (`info.go`)
  - 显示系统信息

- [ ] 8.8 实现完整性验证命令 (`verify.go`)
  - 文件哈希校验

- [ ] 8.9 实现配置管理命令 (`config.go`)
  - `config get`/`set` 配置

### 9. 工具函数 (`internal/utils/`)

- [ ] 9.1 实现 Windows API 封装 (`windows.go`)
  - 实现 `GetComputerName`, `IsAdmin` 等

- [ ] 9.2 实现 PowerShell 封装 (`powershell.go`)
  - 实现命令执行、Base64 解码

- [ ] 9.3 实现 GeoIP 封装 (`geoip.go`)
  - 实现 IP 地理位置查询

- [ ] 9.4 实现日志封装 (`logger.go`)
  - 配置 Zap + Lumberjack

### 10. 检查点

- [ ] 确保所有核心模块编译通过
- [ ] 确保 `go mod tidy` 无错误
- [ ] 确保代码符合 Go 编码规范

---

## 性能目标

| 模块 | 目标 |
|------|------|
| EVTX 解析速度 | ≥150万条/分钟 |
| 内存占用 (1GB EVTX) | ≤200MB |
| 启动时间 | ≤100ms |
