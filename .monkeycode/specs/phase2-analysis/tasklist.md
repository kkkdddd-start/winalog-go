# Phase 2: 分析功能

## 概述

本阶段实现告警引擎、关联引擎、规则系统和管理器。

**参考文档**：
- `dev-pkg/design.md` 第 5-7 章
- `dev-pkg/FEATURES.md` 第五至八章
- `dev-pkg/MODULES_COMPARISON.md` 第七至十章

---

## 任务列表

### 1. 告警引擎 (`internal/alerts/`)

- [x] 1.1 实现告警引擎核心 (`engine.go`)
  - 定义 `Engine` 结构，整合规则、去重、抑制、升级
  - 实现 `Evaluate` 单事件评估
  - 实现 `EvaluateBatch` 批量评估 (goroutine 并发)
  - 实现线程安全去重缓存
  - 参考：`dev-pkg/design.md` 5.2 节，`dev-pkg/FEATURES.md` 5.1 节

- [x] 1.2 实现去重机制 (`dedup.go`)
  - 实现 `DedupCache` 线程安全去重
  - 实现基于时间窗口的 TTL 管理
  - 实现自动过期清理
  - 参考：`dev-pkg/FEATURES.md` 5.3 节

- [x] 1.3 实现规则评估 (`evaluator.go`)
  - 实现规则条件匹配 (`matches`)
  - 实现过滤器匹配 (`matchFilter`)
  - 实现阈值检测 (`checkThreshold`)
  - 实现聚合 key 生成 (`getAggregationKey`)
  - 参考：`dev-pkg/design.md` 5.2.1 节

- [x] 1.4 实现告警统计 (`stats.go`)
  - 实现 `AlertStats` 统计结构
  - 实现 `CalculateStats` 统计计算
  - 实现 `GetTopRules` Top Rules 查询
  - 实现按严重级别、状态、规则统计
  - 参考：`dev-pkg/design.md` 5.2.2 节，`dev-pkg/FEATURES.md` 5.4 节

- [x] 1.5 实现告警趋势 (`trend.go`)
  - 实现 `AlertTrend` 趋势结构
  - 实现 `CalculateTrend` 趋势计算
  - 实现日/周/月趋势分析
  - 实现每小时/每周分布
  - 参考：`dev-pkg/design.md` 5.2.3 节，`dev-pkg/FEATURES.md` 5.5 节

- [x] 1.6 实现告警升级 (`upgrade.go`)
  - 实现 `AlertUpgradeRule` 升级规则
  - 实现 `CheckUpgrade` 升级检查
  - 实现基于时间/计数阈值的升级
  - 实现升级规则 CRUD
  - 参考：`dev-pkg/design.md` 5.2.4 节，`dev-pkg/FEATURES.md` 5.6 节

- [x] 1.7 实现告警抑制 (`suppress.go`)
  - 实现 `SuppressRule` 抑制规则
  - 实现 `IsSuppressed` 抑制检查
  - 实现基于条件/范围/时长的抑制
  - 实现抑制规则 CRUD
  - 参考：`dev-pkg/design.md` 5.2.5 节，`dev-pkg/FEATURES.md` 5.7 节

### 2. 关联引擎 (`internal/correlation/`)

- [x] 2.1 实现关联引擎核心 (`engine.go`)
  - 定义 `Engine` 结构
  - 实现事件索引 (event_id/time)
  - 实现 `Analyze` 关联分析
  - 参考：`dev-pkg/design.md` 5.3 节，`dev-pkg/FEATURES.md` 6.1 节

- [x] 2.2 实现模式匹配 (`matcher.go`)
  - 实现关联条件匹配
  - 实现 Join 字段匹配
  - 实现事件过滤
  - 参考：`dev-pkg/FEATURES.md` 6.2 节

- [x] 2.3 实现事件链 (`chain.go`)
  - 实现 `findChains` 回溯查找
  - 实现攻击链构建
  - 实现 `chainToResult` 结果转换
  - 参考：`dev-pkg/design.md` 5.3 节，`dev-pkg/FEATURES.md` 6.3 节

### 3. 规则系统 (`internal/rules/`)

- [x] 3.1 实现统一规则接口 (`rule.go`)
  - 定义 `Severity` 枚举
  - 定义 `BaseRule`, `AlertRule`, `CorrelationRule` 结构
  - 定义 `Filter`, `Condition`, `LogicalOp`
  - 参考：`dev-pkg/design.md` 4.1 节，`dev-pkg/FEATURES.md` 7.1 节

- [x] 3.2 实现规则加载器 (`loader.go`)
  - 实现 `Loader` 结构
  - 实现 YAML 规则文件扫描和解析
  - 实现规则语法验证
  - 实现规则验证 (`ValidateRule`)
  - 参考：`dev-pkg/FEATURES.md` 7.2 节

- [x] 3.3 实现规则校验 (`validator.go`)
  - 检查必填字段
  - 检查事件 ID 格式
  - 检查 MITRE ID 格式
  - 检查阈值范围

- [x] 3.4 实现内置规则 (`builtin/`)
  - 实现规则注册表 (`registry.go`)
  - 实现 60+ 规则定义 (`definitions.go`)
  - 实现规则解释和建议 (`explanations.go`)
  - 实现 MITRE ATT&CK 映射 (`mitre.go`)
  - 参考：`dev-pkg/FEATURES.md` 7.3-7.4 节

### 4. 分析器 (`internal/analyzers/`)

- [x] 4.1 实现分析器接口 (`analyzer.go`)
  - 定义 `Analyzer` 接口
  - 定义 `Result` 结构

- [x] 4.2 实现暴力破解检测 (`brute_force.go`)
  - 实现 `BruteForceResult` 结构
  - 实现 `Analyze` 检测逻辑
  - 实现 IP 聚合和账户聚合
  - 实现时间密度分析
  - 参考：`dev-pkg/FEATURES.md` 8.1 节

- [x] 4.3 实现登录分析 (`login.go`)
  - 实现 `LoginAnalysis` 结构
  - 实现成功/失败登录统计
  - 实现 `SuspiciousLogin` 可疑登录检测
  - 实现登录类型分类
  - 参考：`dev-pkg/FEATURES.md` 8.2 节

- [x] 4.4 实现 Kerberos 分析 (`kerberos.go`)
  - 实现 `KerberosAnalysis` 结构
  - 实现 `GoldenTicket` 黄金票据检测
  - 实现 `SilverTicket` 白银票据检测
  - 实现票据警告检测
  - 参考：`dev-pkg/FEATURES.md` 8.3 节

- [x] 4.5 实现 PowerShell 分析 (`powershell.go`)
  - 实现 `PowerShellAnalysis` 结构
  - 实现编码命令检测
  - 实现可疑脚本分析
  - 实现风险评分
  - 参考：`dev-pkg/FEATURES.md` 8.4 节

### 5. CLI 告警和关联命令

- [ ] 5.1 实现告警命令 (`alert.go`)
  - `alert list` 列出告警
  - `alert show` 显示详情
  - `alert resolve` 解决告警
  - `alert delete` 删除告警
  - `alert export` 导出告警

- [ ] 5.2 实现关联命令 (`correlate.go`)
  - `correlate analyze` 执行关联分析
  - 返回攻击链结果

- [ ] 5.3 实现分析命令 (`analyze.go`)
  - `analyze brute-force` 暴力破解检测
  - `analyze login` 登录分析
  - `analyze kerberos` Kerberos 分析
  - `analyze powershell` PowerShell 分析

### 6. 检查点

- [x] 确保所有告警引擎模块编译通过
- [x] 确保关联引擎正确识别攻击链
- [x] 确保规则系统正确加载 60+ 内置规则
- [x] 确保分析器正确检测各类攻击模式
