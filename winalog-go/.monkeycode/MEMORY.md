# 用户指令记忆

本文件记录了用户的指令、偏好和教导，用于在未来的交互中提供参考。

## 格式

### 用户指令条目
用户指令条目应遵循以下格式：

[用户指令摘要]
- Date: [YYYY-MM-DD]
- Context: [提及的场景或时间]
- Instructions:
  - [用户教导或指示的内容，逐行描述]

### 项目知识条目
Agent 在任务执行过程中发现的条目应遵循以下格式：

[项目知识摘要]
- Date: [YYYY-MM-DD]
- Context: Agent 在执行 [具体任务描述] 时发现
- Category: [代码结构|代码模式|代码生成|构建方法|测试方法|依赖关系|环境配置]
- Instructions:
  - [具体的知识点，逐行描述]

## 去重策略
- 添加新条目前，检查是否存在相似或相同的指令
- 若发现重复，跳过新条目或与已有条目合并
- 合并时，更新上下文或日期信息
- 这有助于避免冗余条目，保持记忆文件整洁

## 条目

### WinLogAnalyzer-Go 项目实施进度

[实施进度]
- Date: 2026-04-15
- Context: 用户要求继续完成剩余任务
- Category: 项目进度
- Instructions:
  - 第一阶段已完成：Filter扩展、evaluator更新、趋势分析BUG修复
  - 第二阶段已完成：
    - ✅ 新增5个检测规则 (logon-type-mismatch, admin-account-remote-login, rar-compression-detection, living-off-land-detected, service-account-ad-replication)
    - ✅ ETW持久化检测 (T1546.006)
    - ✅ 关联规则增强 (MinCount, MaxCount, Ordered, Negate)
    - ✅ 分析器扩展 (LateralMovementAnalyzer, DataExfiltrationAnalyzer)
    - ✅ 事件字段扩展 (ExtractedFields, GetLogonType等辅助方法)

### Go项目约束

[Go项目约束]
- Date: 2026-04-15
- Context: 日常Go开发任务
- Category: 环境配置
- Instructions:
  - SQLite必须使用 `modernc.org/sqlite` (纯Go，无CGO)
  - Go版本要求：1.25.6
  - Windows平台代码使用 `//go:build windows` 构建约束

### 分支命名规范

[分支命名规范]
- Date: 2026-04-14
- Context: Git分支创建
- Category: 构建方法
- Instructions:
  - 分支命名格式：`YYMMDD-(feat|fix|chore|refactor)-xxxxx-xxxx-xxxx`
  - 示例：`260414-feat-add-implementation-plans`

### Git Submodule 检查

[Git Submodule 检查]
- Date: 2026-04-14
- Context: 项目初始化时
- Category: 构建方法
- Instructions:
  - 首次对话时必须检查 `.gitmodules` 是否存在
  - 若存在，执行 `git submodule update --init --recursive --depth 1`
