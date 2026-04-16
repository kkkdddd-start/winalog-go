# 代码质量修复与功能完善计划

## 概述

根据 `winalog-go-analysis.md` 分析报告，制定本实施计划解决以下问题：
- P0: 5 个影响正确性的问题
- P1: 7 个影响可维护性的问题
- P2: 7 个影响功能完整性的问题

**参考文档**: `http://38.147.171.87:9000/winalog-go-analysis.md`

---

## 任务列表

### P0 — 立即修复（影响正确性）

- [x] 1. CLI analyze 缺少 4 个分析器
  - 将 `cmd/winalog/commands/analyze.go` 改为动态入口 `winalog analyze <type>`
  - 复用 `internal/analyzers/` 中的 AnalyzerManager 模式
  - 支持分析器: brute-force, login, kerberos, powershell, data-exfiltration, lateral-movement, persistence, privilege-escalation
  - 实现 `runAnalyzeDynamic` 函数，调用 `analyzerManager.Get(name)`
  - 参考: `internal/api/server.go` 中的分析器注册逻辑
  - 关联分析报告: 1.3

- [x] 2. search keyword-mode 参数丢失
  - 在 `cmd/winalog/commands/search.go` 中传递 `KeywordMode` 参数
  - 在 `internal/storage/events.go` 的搜索查询中实现 AND/OR 逻辑
  - 确保 `SearchRequest.KeywordMode` 被正确使用
  - 关联分析报告: 3.2

- [x] 3. forensics collect 假成功问题
  - 修改 `cmd/winalog/commands/forensics.go` 中 `runForensicsCollect`
  - 在非 Windows 环境返回明确的 unsupported 错误
  - 对接 `internal/collectors/` 中已有的采集能力
  - 修改 `internal/api/handlers_forensics.go` 返回 HTTP 501
  - 关联分析报告: 2.1

- [x] 4. live collect 直接 sleep 问题
  - 修改 `cmd/winalog/commands/live.go` 中 `runLiveCollect`
  - 对接 `internal/collectors/live/collector.go` 中的实时采集逻辑
  - 实现 Ctrl+C 优雅退出
  - 关联分析报告: 2.3

- [x] 5. rules enable/disable 空操作问题（重新实现：写入数据库）
  - 实现真正的规则启用/禁用功能（写入配置或数据库）
  - 或移除这些子命令避免误导用户
  - 关联分析报告: 2.2

### P1 — 近期优化（影响可维护性）

- [x] 6. 提取 escapeCSV/exportToCSV 公共函数
  - 创建 `internal/utils/csv.go`
  - 实现 `EscapeCSV(s string) string` 函数
  - 实现 `ExportToCSV(headers []string, rows [][]string) ([]byte, error)` 函数
  - 更新 `cmd/winalog/commands/persistence.go` 使用公共函数
  - 更新 `internal/api/handlers_persistence.go` 使用公共函数
  - 关联分析报告: 1.1, 1.2

- [x] 7. 统一事件查询入口
  - 审查所有散落的 SQL 查询（`analyze.go`, `handlers_correlation.go` 等）
  - 强制所有事件查询走 `storage.ListEvents()` 或 `EventRepo`
  - 删除裸 SQL 字符串
  - 关联分析报告: 1.3

- [ ] 8. 提取 DB 初始化公共函数
  - 创建 `cmd/winalog/commands/db_util.go` (基础文件已创建)
  - 实现 `openDB() (*storage.DB, func(), error)` 函数
  - 需要更新所有 CLI 命令使用 `openDB()` 替换现有调用 (33处)
  - 涉及文件: alert.go, ueba.go, whitelist.go, system.go, dashboard.go, search.go, report.go, analyze.go, import.go
  - 关联分析报告: 1.4

- [ ] 9. UEBA 引擎统一管理
  - 将 UEBA engine 改为由 Server 统一管理
  - CLI 通过 API 调用或共享同一实例
  - 更新 `internal/api/handlers_ueba.go` 使用单例模式
  - 关联分析报告: 1.5

- [ ] 10. verify 和 forensics hash 职责统一
  - 保留 `forensics hash` 作为哈希计算
  - 将 `verify` 改为专门的"哈希比对验证"功能
  - 输入文件 + 预期哈希值，判断是否匹配
  - 关联分析报告: 1.6

- [ ] 11. 统一时间窗口参数格式
  - 所有 CLI 和 Web 接口统一使用 Go 的 `time.Duration` 格式
  - 创建 `internal/utils/time.go` 统一解析函数
  - 涉及命令: analyze, correlate, report, ueba
  - 关联分析报告: 4.3

- [ ] 12. 统一采集参数结构
  - 定义统一的 `CollectOptions` 结构体
  - CLI 和 Web 共用同一结构体
  - 确保 CLI 丰富参数（--include-shimcache, --include-amcache 等）能在 Web 使用
  - 关联分析报告: 3.3

### P2 — 中期改进（影响功能完整性）

- [ ] 13. 抽取共享服务层
  - 创建 `internal/service/` 目录
  - 定义 Service Layer 作为 CLI 和 Web 的共享调用入口
  - 实现 `EventService`, `AlertService`, `PersistenceService` 等
  - 关联分析报告: 5.1

- [ ] 14. 抽取关联分析服务
  - 创建 `internal/correlation/service.go`
  - CLI 和 Web 都调用此服务
  - 消除 `analyze.go` 和 `handlers_correlation.go` 的重复代码
  - 关联分析报告: 4.6

- [ ] 15. 补全 CLI 告警操作
  - 实现 `winalog alert trend` 命令
  - 实现 `winalog alert mark-false-positive` 命令
  - 实现 `winalog alert batch` 批量操作命令
  - 关联分析报告: 3.4

- [ ] 16. 统一报告生成接口
  - 确保 CLI 和 Web 的报告参数结构一致
  - CLI 的 `<type>` 参数对应 Web 的报告类型
  - 统一 `report generate` 的接口定义
  - 关联分析报告: 4.4

- [ ] 17. 统一系统信息 DTO
  - Web Handler 直接使用 `collectors/` 包的类型
  - 或定义统一的 DTO 并保证字段完整（PID, Name, PPID, Path, CommandLine, User, CPUPercent, MemoryMB, Exe, Args, Status）
  - 关联分析报告: 4.5

- [ ] 18. 实现平台降级策略
  - 定义 `PlatformCapability` 接口
  - 在非 Windows 环境返回明确的 unsupported 错误
  - 统一 forensics, collect, persistence detect 的降级行为
  - 关联分析报告: 5.3

- [ ] 19. 统一错误处理
  - 定义统一的 `ErrorResponse` 结构体
  - 所有 Web Handler 使用一致的错误响应格式
  - 移除 `forensics collect` 用 HTTP 200 表示失败的问题
  - 关联分析报告: 5.4

- [ ] 20. info 命令 flag 实现
  - 实现 `--users`, `--registry`, `--tasks` flag 的采集逻辑
  - 或暂时隐藏这些未实现的 flag
  - 确保 `showAll` 正确展示所有信息
  - 关联分析报告: 2.4, 2.5

### 检查点

- [ ] 确保所有 P0 问题已修复并通过基本测试
- [ ] 确保代码无新增 lint 错误
- [ ] 确保 `make build` 和 `make test` 通过

---

## 实施顺序建议

1. **第一阶段**: P0 问题 1-5（直接影响正确性）
2. **第二阶段**: P1 问题 6-12（改善代码重复和可维护性）
3. **第三阶段**: P2 问题 13-20（完善功能和架构）

## 预期收益

- 消除约 321 行重复代码
- 统一 CLI 和 Web 的功能表现
- 修复多个空实现/假成功问题
- 建立清晰的共享服务层架构
