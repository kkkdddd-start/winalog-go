# Phase 4: 增强功能

## 概述

本阶段实现取证、报告、导出、时间线、多机分析和可观测性。

**参考文档**：
- `dev-pkg/design.md` 第 8-12 章
- `dev-pkg/FEATURES.md` 第九至十五章
- `dev-pkg/MODULES_COMPARISON.md` 第十二至十七章

---

## 任务列表

### 1. 取证模块 (`internal/forensics/`)

- [x] 1.1 实现哈希计算 (`hash.go`)
  - 实现 `HashResult` 结构
  - 实现 `CalculateFileHash` 计算 SHA256/MD5
  - 支持多哈希算法
  - 参考：`dev-pkg/FEATURES.md` 14.1 节

- [x] 1.2 实现数字签名验证 (`signature.go`)
  - 实现 `SignatureResult` 结构
  - 实现 `VerifySignature` Authenticode 验证
  - 验证 PE 文件签名状态
  - 参考：`dev-pkg/FEATURES.md` 14.2 节

- [x] 1.3 实现证据链 (`chain.go`)
  - 实现 `EvidenceChain` 区块链式结构
  - 实现 `EvidenceManifest` 证据清单
  - 实现证据追溯
  - 参考：`dev-pkg/FEATURES.md` 14.3 节

- [x] 1.4 实现内存采集 (`memory.go`)
  - 实现进程内存转储接口
  - 实现内存采集功能

- [x] 1.5 实现时间戳服务 (`timestamp.go`)
  - 实现 RFC 3161 时间戳签名
  - 实现证据时间认证

### 2. 报告生成 (`internal/reports/`)

- [x] 2.1 实现报告生成器 (`generator.go`)
  - 定义 `Generator` 结构
  - 实现 `ReportRequest` 请求结构
  - 实现 `Generate` 生成方法
  - 支持 HTML/JSON 格式
  - 参考：`dev-pkg/FEATURES.md` 10.1 节

- [x] 2.2 实现 HTML 报告 (`html.go`)
  - 实现 Bootstrap 响应式报告
  - 实现 Chart.js 可视化
  - 实现统计图表

- [x] 2.3 实现 JSON 报告 (`json.go`)
  - 实现结构化 JSON 报告
  - 实现所有字段导出

- [x] 2.4 实现安全统计 (`security_stats.go`)
  - 实现 `SecurityStats` 安全统计结构
  - 实现事件分布统计
  - 实现级别分布统计
  - 实现 Top Event ID 统计
  - 实现登录统计
  - 实现 IOC 汇总
  - 实现 MITRE 分布统计
  - 参考：`dev-pkg/FEATURES.md` 10.2 节

- [x] 2.5 实现报告模板 (`template/`)
  - 创建 HTML 模板文件
  - 实现模板渲染
  - 使用 embed.FS 打包模板
  - 添加 template.FuncMap 支持

### 3. 导出器 (`internal/exporters/`)

- [x] 3.1 实现导出器接口 (`exporter.go`)
  - 定义 `Exporter` 接口
  - 定义导出选项

- [x] 3.2 实现 JSON 导出 (`json.go`)
  - 实现 `JsonExporter`
  - 支持 pretty print
  - 实现事件导出

- [x] 3.3 实现 CSV 导出 (`csv.go`)
  - 实现 `CsvExporter`
  - 支持自定义分隔符
  - 实现表头和字段映射

- [x] 3.4 实现时间线导出 (`timeline.go`)
  - 实现 `TimelineExporter`
  - 支持时间线格式导出

### 4. 时间线 (`internal/timeline/`)

- [x] 4.1 实现时间线构建器 (`builder.go`)
  - 实现 `TimelineBuilder` 结构
  - 实现 `Build` 构建方法
  - 实现按时间排序
  - 实现按机器分组
  - 实现事件分类
  - 实现攻击链关联
  - 参考：`dev-pkg/FEATURES.md` 12.1 节

- [x] 4.2 实现时间线可视化 (`visualizer.go`)
  - 实现 `TimelineVisualizer` 结构
  - 实现缩放控制
  - 实现平移和框选
  - 实现 MITRE 标签
  - 实现缩略图导航
  - 参考：`dev-pkg/FEATURES.md` 12.2 节

### 5. 多机分析 (`internal/multi/`)

- [x] 5.1 实现多机分析器 (`analyzer.go`)
  - 实现 `MultiMachineAnalyzer` 结构
  - 实现 `MachineContext` 机器上下文
  - 实现 `LateralMovement` 横向移动检测
  - 实现跨机器关联
  - 实现角色检测 (DC/Server/Workstation)
  - 参考：`dev-pkg/FEATURES.md` 13.1 节

### 6. 可观测性 (`internal/observability/`)

- [x] 6.1 实现 Metrics 收集器 (`metrics.go`)
  - 实现 `MetricsCollector` 结构
  - 实现 Prometheus Counter/Gauge/Histogram
  - 实现事件计数、导入耗时、告警触发统计
  - 实现 `GET /metrics` 端点
  - 参考：`dev-pkg/FEATURES.md` 15.1 节

- [x] 6.2 实现日志配置 (`logging.go`)
  - 实现 `LoggerConfig` 配置结构
  - 实现日志级别/格式配置
  - 实现 Zap Logger 集成
  - 参考：`dev-pkg/FEATURES.md` 15.2 节

- [x] 6.3 实现系统监控 (`system.go`)
  - 实现 CPU/内存/Goroutine 统计
  - 实现运行时监控

### 7. CLI 增强命令

- [x] 7.1 实现报告命令 (`report.go`)
  - `report generate` 生成报告
  - 支持 HTML/JSON 格式
  - 支持综合报告

- [x] 7.2 实现导出命令 (`export.go`)
  - `export json` JSON 导出
  - `export csv` CSV 导出
  - `export timeline` 时间线导出

- [x] 7.3 实现时间线命令 (`timeline.go`)
  - `timeline build` 构建全局时间线
  - `timeline query` 查询时间线

- [x] 7.4 实现多机命令 (`multi.go`)
  - `multi analyze` 跨机器关联分析
  - `multi lateral` 横向移动检测

- [x] 7.5 实现取证命令 (`forensics.go`)
  - `forensics collect` 取证采集
  - `forensics hash` 文件哈希
  - `forensics verify` 签名验证

- [x] 7.6 实现实时监控命令 (`live.go`)
  - `live collect` 启动实时监控
  - 显示事件流和状态

- [x] 7.7 实现可观测性命令 (`observability.go`)
  - `metrics` Prometheus 指标端点

- [x] 7.8 实现 SQL 查询命令 (`query.go`)
  - 直接 SQL 查询接口

### 8. pkg/mitre 公共包

- [x] 8.1 实现 MITRE ATT&CK 映射库 (`pkg/mitre/`)
  - 实现 MITRE ATT&CK 技术定义 (80+ techniques)
  - 实现战术和技术映射 (12 tactics)
  - 实现描述和建议

### 9. 检查点

- [x] 确保取证模块正确计算哈希和验证签名
- [x] 确保报告生成包含所有统计数据
- [x] 确保导出器正确导出各类格式
- [x] 确保时间线正确构建攻击链
- [x] 确保多机分析正确检测横向移动
- [x] 确保 Prometheus metrics 正常暴露

**验证结果 (2026-04-14):**
- All 12 verification tests passed
- Forensics: Hash calculation, Signature verification, Evidence chain
- Reports: Generator, Security stats
- Exporters: JSON, CSV, Timeline
- Timeline: Builder with attack chain detection
- Multi-machine: Analyzer with lateral movement detection
- Prometheus metrics: Custom registry implementation
