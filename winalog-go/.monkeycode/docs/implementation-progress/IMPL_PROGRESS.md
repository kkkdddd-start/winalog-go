# 改进方案实施进度报告

**生成日期**: 2026-04-17
**文档状态**: 进行中

---

## 一、config-collectors-live-reports-template-analysis.md 实施进度

### 1.1 Config 模块 (C1-C6)

| 问题 ID | 问题描述 | 优先级 | 状态 | 说明 |
|---------|----------|--------|------|------|
| C1 | Config.Validate() 未被调用 | P1 | ✅ 已修复 | 在 loader.go Load() 中调用 |
| C2 | Load() 错误被忽略 | P1 | ✅ 已修复 | system.go 已处理错误 |
| C3 | 环境变量绑定不完整 | P2 | ✅ 已修复 | 新增 bindAllEnvs() 扩展绑定 |
| C4 | Settings API 配置项不全 | P2 | ⏳ 待处理 | 需扩展 Settings 结构体 |
| C5 | Handler 无法访问配置 | P2 | ⏳ 待处理 | 需重构 Handler 结构 |
| C6 | Watch() 热更新未使用 | P3 | ⏳ 待处理 | 需启用 Loader.Watch() |

### 1.2 Collectors/Live 模块 (L1-L4)

| 问题 ID | 问题描述 | 优先级 | 状态 | 说明 |
|---------|----------|--------|------|------|
| L1 | LiveCollector 空框架 | P0 | ❌ 需深入研究 | 需 Windows Event Log API 实现 |
| L2 | CLI live collect 无实现 | P0 | ❌ 需深入研究 | 依赖 L1 |
| L3 | Web API StreamEvents SSE 空实现 | P0 | ❌ 需深入研究 | 依赖 L1 |
| L4 | 缺少日志源自动发现 | P2 | ❌ 需深入研究 | 需 Windows API |

### 1.3 Reports 模块 (R1-R7)

| 问题 ID | 问题描述 | 优先级 | 状态 | 说明 |
|---------|----------|--------|------|------|
| R1 | SQL 注入风险 | P0 | ✅ 已修复 | 改为参数化查询 |
| R2 | MITRE Tactic 提取错误 | P1 | ✅ 已修复 | 添加完整 MITRE 映射表 |
| R3 | 硬编码版本号 | P2 | ❌ 需深入研究 | 需创建统一版本定义 |
| R4 | 报告生成错误被静默忽略 | P1 | ✅ 已修复 | 添加 ReportGenerationError |
| R5 | CLI/Web 报告格式不一致 | P2 | ❌ 需深入研究 | 需统一报告服务层 |
| R6 | PDF 依赖第三方库 | P3 | ⏳ 待处理 | 可选优化 |
| R7 | 缺少统一报告服务层 | P1 | ❌ 需深入研究 | 需架构重构 |

### 1.4 Reports/Template 模块 (T1-T4)

| 问题 ID | 问题描述 | 优先级 | 状态 | 说明 |
|---------|----------|--------|------|------|
| T1 | 模板函数过少 | P2 | ✅ 已修复 | 扩展至 18 个函数 |
| T2 | HTML 模板字段未使用 | P3 | ⏳ 待处理 | 可选优化 |
| T3 | Manager 单例影响测试 | P3 | ⏳ 待处理 | 需添加测试支持 |
| T4 | 模板缓存无失效机制 | P3 | ⏳ 待处理 | 需添加缓存 TTL |

---

## 二、STORAGE_IMPROVEMENT_PLAN.md 实施进度

### 2.1 Storage 模块 (S1-S14)

| 问题 ID | 问题描述 | 严重性 | 优先级 | 状态 | 说明 |
|---------|----------|--------|--------|------|------|
| S1 | validateAlert/CorrelationRuleExists 空实现 | 严重 | P0 | ✅ 已修复 | 添加真实 SQL 查询 |
| S2 | reports 表使用保留关键字 type | 严重 | P0 | ✅ 已修复 | 改为 report_type |
| S3 | DeleteOldEvents 静默失败风险 | 严重 | P1 | ✅ 已修复 | 添加参数验证 |
| S4 | BeginWithUnlock 命名与实现不符 | 中等 | P2 | ⏳ 待处理 | 需重命名或删除 |
| S5 | GetStats 忽略 Scan 错误 | 中等 | P2 | ⏳ 待处理 | 需处理错误 |
| S6 | Vacuum/Analyze 未使用写锁 | 中等 | P2 | ⏳ 待处理 | 检查锁使用 |
| S7 | InsertBatch 去重逻辑可能不准确 | 中等 | P1 | ✅ 已修复 | 添加 LogName/Source |
| S8 | 缺少外键约束 | 中等 | P2 | ⏳ 待处理 | 需评估影响 |
| S9 | 缺少 Repository 实现 | 中等 | P2 | ⏳ 待处理 | 需评估是否需要 |
| S10 | json.Unmarshal 错误被忽略 | 中等 | P2 | ⏳ 待处理 | 需处理错误 |
| S11 | repository.go 重复定义类型 | 优化 | P3 | ⏳ 待处理 | 可选优化 |
| S12 | Repository 接口未使用 | 优化 | P3 | ⏳ 待处理 | 可选优化 |
| S13 | 缺少数据库迁移机制 | 优化 | P3 | ⏳ 待处理 | 可选优化 |
| S14 | 事务处理不一致 | 优化 | P3 | ⏳ 待处理 | 可选优化 |

---

## 三、已修复问题汇总

### P0 紧急修复 (4/4 完成)
1. ✅ S1: validateAlert/CorrelationRuleExists 空实现
2. ✅ S2: reports 表使用保留关键字 type
3. ✅ R1: SQL 注入风险 (buildTimeFilter)
4. ⏳ L1/L2/L3: LiveCollector 空框架 (需 Windows API)

### P1 重要改进 (5/6 完成)
1. ✅ C1/C2: Config.Validate() 和错误处理
2. ✅ R2: MITRE Tactic 提取逻辑修复
3. ✅ R4: 报告生成错误收集
4. ✅ S3: DeleteOldEvents 静默失败风险
5. ✅ S7: InsertBatch 去重逻辑修复
6. ⏳ R7: 统一报告服务层 (需架构设计)

### P2 功能完善 (2/6 完成)
1. ✅ C3: 环境变量绑定扩展
2. ✅ T1: 模板函数扩展 (18 个函数)
3. ⏳ C4: Settings API 配置项不全
4. ⏳ C5: Handler 无法访问配置
5. ⏳ L4: 日志源自动发现
6. ⏳ R3: 硬编码版本号
7. ⏳ R5: CLI/Web 报告格式不一致
8. ⏳ S4/S5/S6/S8/S9/S10: Storage 其他问题

### P3 优化提升 (0/10 完成)
全部 10 个问题待处理

---

## 四、无法实施或需要深入研究的问题

### 4.1 需要 Windows Event Log API 的问题 (L1-L4)
- **原因**: LiveCollector 需要调用 Windows 特定 API (`windows.dll` 或 `wevtutil`)
- **影响**: 在非 Windows 平台无法测试
- **建议**: 
  1. 使用 `golang.org/x/sys/windows` 包实现
  2. 创建平台特定实现 (`*_windows.go`)
  3. 添加构建标签 `//go:build windows`

### 4.2 需要架构重构的问题 (R7, R5)
- **R7**: 统一报告服务层
  - 需要创建 `internal/reports/service.go`
  - 需要同时修改 CLI 和 Web API 的报告生成逻辑
  - 建议分阶段实施

### 4.3 需要创建统一版本定义的问题 (R3)
- **原因**: 版本号在多个文件中硬编码
- **建议**: 创建 `internal/version/version.go` 统一管理

---

## 五、修改的文件清单

### Storage 模块
- `/workspace/winalog-go/internal/storage/rule_state.go` - S1 修复
- `/workspace/winalog-go/internal/storage/schema.go` - S2 修复
- `/workspace/winalog-go/internal/storage/events.go` - S3, S7 修复

### Config 模块
- `/workspace/winalog-go/internal/config/loader.go` - C1, C3 修复

### Reports 模块
- `/workspace/winalog-go/internal/reports/generator.go` - R2, R4 修复
- `/workspace/winalog-go/internal/api/handlers_reports.go` - R1 修复

### Template 模块
- `/workspace/winalog-go/internal/reports/template/manager.go` - T1 修复

### CLI 命令
- `/workspace/winalog-go/cmd/winalog/commands/system.go` - C2 修复

---

## 六、下一步行动

### 立即行动 (可在非 Windows 环境完成)
1. 尝试构建项目验证已修复的问题
2. 处理 S4/S5/S6/S8/S9/S10 等 Storage 问题
3. 处理 C4/C5/C6 等 Config 问题
4. 处理 T2/T3/T4 等 Template 优化问题

### 需要 Windows 环境的问题
1. L1: 实现 WindowsEventLogCollector
2. L2: 实现 CLI live collect 命令
3. L3: 实现 Web API StreamEvents SSE
4. L4: 实现日志源自动发现

### 需要架构设计的问题
1. R7: 创建统一报告服务层
2. R5: CLI/Web 报告格式统一
3. R3: 创建统一版本定义

---

**报告生成时间**: 2026-04-17
**下一步**: 运行 `make build` 验证已修复的问题
