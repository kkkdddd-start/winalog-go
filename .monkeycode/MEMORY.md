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

[项目结构知识（WinLogAnalyzer-Go）]
- Date: 2026-04-22
- Context: Agent 在执行初始化检查并阅读仓库指引时发现
- Category: 代码结构
- Instructions:
  - 设计文档位于仓库根目录及 `winalog-go/dev-pkg/`。
  - 实际 Go 项目代码位于 `winalog-go/winalog-go/` 子目录。
  - CLI 入口在 `winalog-go/winalog-go/cmd/winalog/`，核心模块在 `winalog-go/winalog-go/internal/`。

[构建与测试命令约定]
- Date: 2026-04-22
- Context: Agent 在执行初始化检查并阅读仓库指引时发现
- Category: 构建方法
- Instructions:
  - 在 `winalog-go/winalog-go/` 目录执行 `make build` 进行构建。
  - 在 `winalog-go/winalog-go/` 目录执行 `make test` 运行测试。
  - 在 `winalog-go/winalog-go/` 目录执行 `make lint` 执行静态检查。

[任务执行方式偏好：先排查后修改]
- Date: 2026-04-22
- Context: 用户在排查“实时监控/系统监控/持久化检测/日志采集模块”问题时明确要求
- Instructions:
  - 先完成前后端问题检查和定位，再进行代码修改。

[问题修复范围偏好：聚焦 Windows 模式]
- Date: 2026-04-22
- Context: 用户确认实时监控/系统监控/持久化检测/日志采集模块仅需修复 Windows 模式问题
- Instructions:
  - 优先修复 Windows 模式相关问题，可暂不处理 Linux/非 Windows 模式兼容问题。
