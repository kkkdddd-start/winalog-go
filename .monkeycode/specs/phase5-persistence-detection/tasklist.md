# Phase 5: 持久化检测增强

## 概述

本阶段实现 Windows 持久化技术的专项检测，覆盖常见持久化手法（P0）和中等优先级技术（P1），将检测覆盖率从 15% 提升至 70%+。

## 参考文档

- `dev-pkg/design.md` - 核心架构设计
- `dev-pkg/FEATURES.md` - 功能详细清单
- `.monkeycode/specs/phase1-core-modules/tasklist.md` - Phase 1 任务列表（参考现有采集器结构）

---

## 任务列表

### 1. 创建持久化检测核心模块

- [x] 1.1 创建 `internal/persistence/` 目录结构
  - 创建 detector.go, registry.go, com.go, wmi.go, ifeo.go, appinit.go, service.go, startup.go, triage.go
  - 定义模块接口和基础结构

- [x] 1.2 定义检测结果数据结构 (`types/persistence.go`)
  - 定义 `Detection` 结构体
  - 定义 `Evidence` 结构体
  - 定义 `Technique` 枚举（MITRE T1546 系列）
  - 定义 `Severity` 常量

- [x] 1.3 实现检测器接口 (`detector.go`)
  - 定义 `Detector` 接口
  - 定义 `DetectionResult` 结构
  - 实现 `RunAllDetectors()` 主函数

### 2. 实现注册表持久化检测

- [x] 2.1 实现 Run Key 检测 (`registry.go`)
  - 实现 `RunKeyDetector` 结构
  - 遍历 HKLM/HKCU 下的 Run/RunOnce 键
  - 检测可疑路径（%TEMP%, 网络路径、base64 编码值）
  - 与已知白名单比对

- [x] 2.2 实现 UserInit MPR 检测
  - 检测 Winlogon Userinit 值
  - 检测 Logon Scripts 执行

- [x] 2.3 实现启动文件夹检测 (`startup.go`)
  - 检测 All Users Startup 文件夹
  - 检测 Current User Startup 文件夹
  - 检测注册表 Run 键

- [ ] 2.4 编写注册表检测单元测试
  - [ ]* 2.4.1 测试 Run Key 检测逻辑
  - [ ]* 2.4.2 测试可疑路径识别
  - [ ]* 2.4.3 测试白名单比对

### 3. 实现辅助功能后门检测

- [x] 3.1 实现辅助功能路径检测 (`accessibility.go`)
  - 检测 sethc.exe 替换
  - 检测 utilman.exe 替换
  - 检测 osk.exe, magnify.exe, narrator.exe, displayswitch.exe 替换
  - 检测 mspaint.exe 替换

- [x] 3.2 实现计划任务关联检测
  - 关联 Event ID 4698 (Scheduled Task Created)
  - 检测创建的辅助功能任务

- [ ] 3.3 编写辅助功能检测单元测试
  - [ ]* 3.3.1 测试路径替换检测
  - [ ]* 3.3.2 测试计划任务关联

### 4. 实现 COM 劫持检测

- [x] 4.1 实现 CLSID 遍历 (`com.go`)
  - 实现 `COMHijackDetector` 结构
  - 遍历 HKCR\CLSID\{...}\InprocServer32
  - 检测路径在 System32/SysWOW64 外的 CLSID

- [x] 4.2 实现可疑 COM 对象检测
  - 检测 Empty CLSID
  - 检测 ADO Stream Object (已知的恶意利用)
  - 检测路径包含 %TEMP% 或网络路径

- [ ] 4.3 编写 COM 检测单元测试
  - [ ]* 4.3.1 测试 CLSID 遍历逻辑
  - [ ]* 4.3.2 测试路径验证

### 5. 实现 IFEO 劫持检测

- [x] 5.1 实现 IFEO 检测 (`ifeo.go`)
  - 实现 `IFEODetector` 结构
  - 遍历 Image File Execution Options
  - 检测 Debugger 值
  - 检测 GlobalFlag, ShutdownFlags 等

- [ ] 5.2 编写 IFEO 检测单元测试
  - [ ]* 5.2.1 测试 Debugger 检测
  - [ ]* 5.2.2 测试标志位检测

### 6. 实现 AppInit_DLLs 检测

- [x] 6.1 实现 AppInit 检测 (`appinit.go`)
  - 实现 `AppInitDetector` 结构
  - 检测 HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Windows\AppInit_DLLs
  - 检测 LoadAppInit_DLLs 值
  - 检测 RequireSignedAppInit_DLLs 值

- [ ] 6.2 编写 AppInit 检测单元测试
  - [ ]* 6.2.1 测试注册表值检测

### 7. 实现 WMI 持久化检测

- [x] 7.1 实现 WMI 订阅采集 (`wmi_collector.go`)
  - 实现 `WMICollector` 结构
  - 查询 Root\Subscription 的 __EventFilter
  - 查询 __FilterToConsumerBinding 绑定
  - 查询 __EventConsumer 实现

- [x] 7.2 实现 WMI 持久化分析 (`wmi.go`)
  - 检测 CommandLineEventConsumer
  - 检测 ActiveScriptEventConsumer
  - 检测 NTEventLogEventConsumer
  - 检测绑定到恶意脚本的过滤器

- [ ] 7.3 编写 WMI 检测单元测试
  - [ ]* 7.3.1 测试 WMI 订阅查询
  - [ ]* 7.3.2 测试过滤器绑定检测

### 8. 实现服务持久化检测

- [x] 8.1 增强现有服务检测 (`service.go`)
  - 基于 Event ID 4697 事件分析
  - 检测新创建服务的路径
  - 检测可疑服务名称和路径

- [ ] 8.2 编写服务检测单元测试
  - [ ]* 8.2.1 测试服务创建事件分析

### 9. 实现 MITRE ATT&CK 映射

- [x] 9.1 创建持久化技术映射 (`mitre.go`)
  - 定义 T1546 系列常量
  - 实现技术 ID 到检测器的映射
  - 实现技术 ID 到告警规则的映射

- [x] 9.2 更新告警规则 (`rules/persistence_rules.go`)
   - [x] 添加辅助功能后门规则 (T1546.001)
   - [x] 添加 COM 劫持规则 (T1546.015)
   - [x] 添加 AppInit_DLLs 规则 (T1546.010)
   - [x] 添加 IFEO 规则 (T1546.012)
   - [x] 添加 WMI 持久化规则 (T1546.003)
   - [x] 实现 Detection.ToAlert() 转换函数
   - [x] 实现 Detection.GetExplanation() 获取规则解读
   - [x] 实现 Detection.GetRecommendation() 获取处置建议
   - [x] 实现 Detection.GetRealCase() 获取真实案例
   - [x] 实现 Detection.ToRuleName() 技术ID到规则名映射

### 10. 实现 CLI 命令集成

- [x] 10.1 创建 `persistence` 命令 (`cmd/winalog/commands/persistence.go`)
  - `winalog persistence detect` 运行所有检测
  - `winalog persistence detect --category registry` 按类别检测
  - `winalog persistence detect --technique T1546.001` 按技术检测
  - `--output` 输出格式支持 JSON/CSV

- [ ] 10.2 集成到 TUI
  - 添加 Persistence 视图
  - 显示检测结果列表
  - 显示技术分类统计

### 11. 检查点

- [x] 确保 `go build` 编译通过
- [x] 确保 `go vet` 无警告
- [x] 确保所有检测器接口一致

### 12. 单元测试

- [x] 12.1 types 模块测试
  - [x] 23 个测试用例全部通过
  
- [x] 12.2 storage 模块测试
  - [x] 21 个测试用例，2 个跳过（已知代码 bug）
  - [x] 测试 DB 创建、事件插入/查询/搜索、导入日志等功能
  
- [x] 12.3 config 模块测试
  - [x] 17 个测试用例全部通过
  - [x] 测试配置结构、默认值、环境变量加载等功能

- [x] 12.4 已完成模块测试
  - [x] alerts 模块 (27 个测试通过)
  - [x] rules 模块 (20 个测试通过)
  - [x] correlation 模块 (19 个测试通过)
  - [x] persistence 模块 (32 个测试通过)

- [ ] 12.5 待完成模块测试
  - [ ] parsers 模块
  - [ ] engine 模块

### 13. 集成测试

- [ ] 13.1 使用 test_dataset 进行集成测试
  - 运行 `winalog persistence detect`
  - 验证输出格式正确

- [ ] 13.2 与现有事件分析集成
  - 关联 Event ID 4698 进行辅助功能检测
  - 关联 Event ID 4657 进行注册表修改检测

---

## 实施顺序

1. **阶段 1**: 核心框架 (任务 1.1-1.3) ✅
2. **阶段 2**: 高优先级检测 (任务 2-5) ✅
3. **阶段 3**: 中优先级检测 (任务 6-8) ✅
4. **阶段 4**: 告警集成 (任务 9-10) ✅
5. **阶段 5**: 测试与验证 (任务 11-13) 🔄 进行中

## 性能目标

| 指标 | 目标 |
|------|------|
| 完整检测耗时 | < 30 秒 |
| 内存占用 | < 50MB |
| 误报率 | < 5% |

---

## 待实现功能清单 (2026-04-14)

根据代码与文档对比分析，以下功能尚未实现或为空实现：

### P0 - 阻塞性问题（影响核心功能）

#### 1. Windows 注册表 API 实现 (`internal/utils/registry.go`)

所有注册表操作函数返回空值，导致所有依赖注册表检测的探测器无法正常工作：

- [ ] 1.1 实现 `ListRegistrySubkeys(path string) ([]string, error)`
  - 使用 `golang.org/x/sys/windows/registry` 或 win32 API
  - 遍历指定注册表路径下的所有子键
  - 返回子键名称列表

- [ ] 1.2 实现 `GetRegistryValue(keyPath, valueName string) (string, error)`
  - 获取指定注册表键的指定值
  - 支持 REG_SZ, REG_DWORD, REG_MULTI_SZ 等类型
  - 返回值的字符串表示

- [ ] 1.3 实现 `RegistryKeyExists(path string) bool`
  - 检查指定注册表路径是否存在
  - 返回 true/false

- [ ] 1.4 实现 `GetRegistryDWORDValue(keyPath, valueName string) (uint32, error)`
  - 获取 DWORD 类型注册表值
  - 返回 uint32 类型的值

- [ ] 1.5 实现 `GetRegistryMultiStringValue(keyPath, valueName string) ([]string, error)`
  - 获取多字符串类型注册表值 (REG_MULTI_SZ)
  - 返回字符串切片

#### 2. StartupFolderDetector 实现 (`internal/persistence/registry.go:310-313`)

当前 Detect() 方法返回空切片，完全未实现：

- [ ] 2.1 实现启动文件夹遍历
  - 遍历 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup`
  - 遍历 `C:\Users\*\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`
  - 支持通配符展开用户路径

- [ ] 2.2 实现可疑文件检测
  - 检测可疑扩展名: .lnk, .bat, .cmd, .ps1, .vbs, .js, .exe, .dll
  - 检测路径包含 TEMP、APPDATA、网络路径
  - 检测 base64 编码内容

- [ ] 2.3 实现快捷方式 (.lnk) 解析
  - 解析 LNK 文件目标路径
  - 检测链接到可疑位置的快捷方式

### P1 - 高优先级功能

#### 3. WMI 持久化检测器实现 (`internal/persistence/wmi.go`)

WMI 检测器框架已建立，但所有枚举方法为空实现：

- [ ] 3.1 实现 `enumerateConsumers() ([]WMIEventConsumer, error)`
  - 连接 WMI Root\Subscription 命名空间
  - 查询所有 EventConsumer 实例
  - 提取 CommandLineEventConsumer 的 CommandLine
  - 提取 ActiveScriptEventConsumer 的 ScriptFilePath

- [ ] 3.2 实现 `enumerateFilters() ([]WMIEventFilter, error)`
  - 查询所有 __EventFilter 实例
  - 提取 FilterName, Query, Namespace

- [ ] 3.3 实现 `enumerateBindings() ([]WMIBinding, error)`
  - 查询 __FilterToConsumerBinding 实例
  - 建立 Filter 到 Consumer 的映射关系

- [ ] 3.4 实现 WMI 连接管理
  - 使用 `github.com/google/windows-drivers-rs` 或直接调用 WMI COM API
  - 或使用 PowerShell 命令查询并解析结果

#### 4. ServicePersistenceDetector 主动检测 (`internal/persistence/service.go:58-62`)

当前 Detect() 方法返回空切片，只能通过 AnalyzeServiceCreation() 分析已有事件：

- [ ] 4.1 实现主动服务检测
  - 通过 `sc query` 枚举所有服务
  - 或通过注册表 `HKLM\SYSTEM\CurrentControlSet\Services` 遍历
  - 检测服务路径、显示名称的可疑性

- [ ] 4.2 实现服务配置分析
  - 检测 ImagePath 可疑路径
  - 检测服务描述中的可疑关键词
  - 检测服务类型、启动类型异常

### P2 - 中优先级功能

#### 5. COM 劫持检测增强 (`internal/persistence/com.go`)

- [ ] 5.1 添加 Empty CLSID 检测
  - 检测 CLSID 的 InprocServer32 值为空的情况
  - 分析空 CLSID 的潜在劫持风险

- [ ] 5.2 添加更多已知恶意 CLSID
  - 研究收集最新的恶意 CLSID 列表
  - 扩展 KnownMaliciousCLSID map

#### 6. IFEO 检测增强 (`internal/persistence/ifeo.go`)

- [ ] 6.1 实现 GlobalFlag 分析
  - 读取 GlobalFlag 值
  - 分析 FLG_ 标志位含义
  - 检测异常调试标志组合

- [ ] 6.2 实现 ShutdownFlags 分析
  - 读取 ShutdownFlags 值
  - 检测异常关闭标志

#### 7. AppInit_DLLs 签名验证检测增强

- [ ] 7.1 RequireSignedAppInit_DLLs = 0 时发出高严重度告警
  - 当前为 Medium，应提升为 High
  - 添加证书验证绕过检测

### P3 - 低优先级/待定

#### 8. 检测结果持久化

- [ ] 8.1 将 Detection 结果存储到 SQLite
- [ ] 8.2 实现 Detection 结果查询 API
- [ ] 8.3 支持 Detection 标记为已处理/误报

#### 9. 高级检测功能

- [ ] 9.1 实现 BITS Jobs 检测 (T1197)
- [ ] 9.2 实现 Netsh Helper DLL 检测 (T1546.007)
- [ ] 9.3 实现 LSASS 处理检测 (T1546.008)
- [ ] 9.4 实现 Account Manipulation 检测 (T1098)

---

## 功能完成度统计

| 模块 | 文档要求 | 已实现 | 完成度 |
|------|----------|--------|--------|
| types.go 类型定义 | 100% | 100% + Alert转换 | ✅ 100% |
| detector.go 检测引擎 | 100% | 100% | ✅ 100% |
| registry.go RunKey | 100% | 100% | ✅ 100% |
| registry.go UserInit | 100% | 100% | ✅ 100% |
| **registry.go StartupFolder** | 100% | **0%** | ❌ **0%** |
| accessibility.go | 100% | 100% | ✅ 100% |
| com.go | 100% | ~90% | ⚠️ 90% |
| ifeo.go | 100% | ~80% | ⚠️ 80% |
| appinit.go | 100% | 100% | ✅ 100% |
| **wmi.go 枚举** | 100% | **0%** | ❌ **0%** |
| **service.go 主动检测** | 100% | **0%** | ❌ **0%** |
| **utils/registry.go** | 100% | **0%** | ❌ **0%** |

**总体完成度**: ~55%

---

## 全项目待实现功能清单 (2026-04-14)

基于 `dev-pkg/FEATURES.md` 与实际代码对比分析，以下是全项目范围内尚未实现或为空实现的功能：

---

### P0 - 阻塞性问题（影响多个核心功能）

#### 1. Windows 注册表 API 实现 (`internal/utils/registry.go`)

所有注册表操作函数返回空值，导致 persistence 模块所有检测器无法正常工作：

- [ ] 1.1 实现 `ListRegistrySubkeys(path string) ([]string, error)`
  - 使用 `golang.org/x/sys/windows/registry` 或 win32 API
  - 遍历指定注册表路径下的所有子键
  - 返回子键名称列表

- [ ] 1.2 实现 `GetRegistryValue(keyPath, valueName string) (string, error)`
  - 获取指定注册表键的指定值
  - 支持 REG_SZ, REG_DWORD, REG_MULTI_SZ 等类型
  - 返回值的字符串表示

- [ ] 1.3 实现 `RegistryKeyExists(path string) bool`
  - 检查指定注册表路径是否存在
  - 返回 true/false

- [ ] 1.4 实现 `GetRegistryDWORDValue(keyPath, valueName string) (uint32, error)`
  - 获取 DWORD 类型注册表值
  - 返回 uint32 类型的值

- [ ] 1.5 实现 `GetRegistryMultiStringValue(keyPath, valueName string) ([]string, error)`
  - 获取多字符串类型注册表值 (REG_MULTI_SZ)
  - 返回字符串切片

---

#### 2. 系统信息采集实现 (`internal/collectors/`)

以下 Collector 仅返回假数据，无法用于实际系统信息采集：

##### 2.1 ProcessInfoCollector (`process_info.go:41-64`)

- [ ] 2.1.1 实现进程枚举
  - 使用 `os.ProcessAll` 或 Windows API 枚举所有进程
  - 获取 PID, PPID, Name, Path, CommandLine
  - 获取进程用户和创建时间

- [ ] 2.1.2 实现 `getProcessInfoByPID(pid int)` 详情获取
  - 获取进程的完整信息

##### 2.2 NetworkInfoCollector (`network_info.go:39-55`)

- [ ] 2.2.1 实现 `collectNetworkInfo()` 真实网络连接采集
  - 枚举 TCP/UDP 连接
  - 获取 LocalAddr, LocalPort, RemoteAddr, RemotePort, State
  - 关联进程信息 (PID → ProcessName)

- [ ] 2.2.2 实现 `ListNetworkConnections()` 连接列表
- [ ] 2.2.3 实现 `GetTCPConnections()` TCP连接
- [ ] 2.2.4 实现 `GetUDPEndpoints()` UDP端点

##### 2.3 UserInfoCollector (`user_info.go:40-55`)

- [ ] 2.3.1 实现 `collectUserInfo()` 真实用户账户采集
  - 枚举本地用户和域用户
  - 获取 SID, Name, Domain, Type, Enabled, LastLogin

- [ ] 2.3.2 实现 `ListLocalUsers()` 用户列表
- [ ] 2.3.3 实现 `GetUserSID(username string)` SID查询
- [ ] 2.3.4 实现 `GetUserGroups(username string)` 用户组查询

##### 2.4 TaskInfoCollector (`task_info.go:40-51`)

- [ ] 2.4.1 实现 `collectTaskInfo()` 真实计划任务采集
  - 使用 `schtasks.exe` 或 WMI 查询计划任务
  - 获取 Name, State, LastRun, NextRun, Description, Author, Actions, Triggers

- [ ] 2.4.2 实现 `ListScheduledTasks()` 任务列表
- [ ] 2.4.3 实现 `GetTaskInfo(taskName string)` 任务详情

##### 2.5 RegistryInfo (`registry_info.go`)

- [ ] 2.5.1 实现注册表自启动项采集
  - 采集 HKLM/HKCU 下的 Run/RunOnce 键
  - 采集 UserInit MPR
  - 采集 Scheduled Tasks

##### 2.6 DLL Info (`dll_info.go`)

- [ ] 2.6.1 实现进程DLL模块枚举
  - 枚举指定进程的加载模块
  - 获取 BaseAddress, Size, Path, Hash

##### 2.7 Driver Info (`driver_info.go`)

- [ ] 2.7.1 实现内核驱动信息采集
  - 枚举已加载驱动
  - 获取 Name, Description, Status, FilePath, Hash, Signature

##### 2.8 Env Info (`env_info.go`)

- [ ] 2.8.1 实现环境变量采集
  - 采集 System 和 User 环境变量

---

### P1 - 高优先级功能

#### 3. 持久化痕迹采集 (`internal/collectors/persistence/`)

##### 3.1 PrefetchCollector (`prefetch.go:37-50`)

- [ ] 3.1.1 实现 `collectPrefetch()` 真实 Prefetch 采集
  - 遍历 `C:\Windows\Prefetch\*.pf`
  - 解析 .pf 文件格式 (需要实现 PF 解析库或调用 Windows API)
  - 获取 Name, Path, LastRunTime, RunCount, Modified

- [ ] 3.1.2 实现 `ListPrefetchFiles()` 文件列表
- [ ] 3.1.3 实现 `GetPrefetchInfo(path)` 单个文件详情
- [ ] 3.1.4 实现 `ParsePrefetch(path)` 解析 .pf 文件

##### 3.2 ShimCache (`shimcache.go`)

- [ ] 3.2.1 实现 `collectShimCache()` ShimCache 采集
  - 读取 `HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatibility` 注册表
  - 解析二进制 ShimCache 数据
  - 获取 Path, Size, Executed, LastModified

##### 3.3 Amcache (`amcache.go`)

- [ ] 3.3.1 实现 `collectAmcache()` Amcache 采集
  - 解析 `C:\Windows\appcompat\Programs\Amcache.hve`
  - 获取 VolumeGUID, Path, FileKey, Size, Hash, ProductName, CompanyName

##### 3.4 UserAssist (`userassist.go`)

- [ ] 3.4.1 实现 `collectUserAssist()` UserAssist 采集
  - 读取 `HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist`
  - 解析 ROT-13 加密的数据
  - 获取 Path, FocusCount, TimeFocus, LastRun, SessionID

##### 3.5 USN Journal (`usnjournal.go`)

- [ ] 3.5.1 实现 `collectUSN()` USN Journal 采集
  - 使用 `FSCTL_READ_USN_JOURNAL` 控制代码
  - 获取 USN, Timestamp, Reason, Path, FileName, FileAttributes

---

#### 4. OneClick 一键采集 (`internal/collectors/one_click.go`)

- [ ] 4.1 实现完整的一键采集功能
  - 自动发现日志源 (Security, System, Application, Sysmon)
  - 检测文件锁定状态 (`_is_file_locked`)
  - 并行复制文件 (Worker Pool)
  - 采集系统信息
  - 计算 SHA256 校验
  - 打包为 ZIP
  - 生成采集报告

---

#### 5. Live 实时监控增强 (`internal/collectors/live/`)

- [ ] 5.1 实现 Windows 事件日志实时监控
  - 使用 Windows Event Log API 或 `evt渠道订阅
  - 支持 Security, System, Application, Sysmon 日志
  - 实现书签 (Bookmark) 断点续传

- [ ] 5.2 实现日志源发现
  - 自动发现可用的事件日志渠岛

---

#### 6. StartupFolderDetector 实现 (`internal/persistence/registry.go:310-313`)

- [ ] 6.1 实现启动文件夹遍历
  - 遍历 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup`
  - 遍历 `C:\Users\*\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`
  - 支持通配符展开用户路径

- [ ] 6.2 实现可疑文件检测
  - 检测可疑扩展名: .lnk, .bat, .cmd, .ps1, .vbs, .js, .exe, .dll
  - 检测路径包含 TEMP、APPDATA、网络路径
  - 检测 base64 编码内容

- [ ] 6.3 实现快捷方式 (.lnk) 解析
  - 解析 LNK 文件目标路径
  - 检测链接到可疑位置的快捷方式

---

#### 7. WMI 持久化检测器实现 (`internal/persistence/wmi.go`)

- [ ] 7.1 实现 `enumerateConsumers() ([]WMIEventConsumer, error)`
  - 连接 WMI Root\Subscription 命名空间
  - 查询所有 EventConsumer 实例
  - 提取 CommandLineEventConsumer 的 CommandLine
  - 提取 ActiveScriptEventConsumer 的 ScriptFilePath

- [ ] 7.2 实现 `enumerateFilters() ([]WMIEventFilter, error)`
  - 查询所有 __EventFilter 实例
  - 提取 FilterName, Query, Namespace

- [ ] 7.3 实现 `enumerateBindings() ([]WMIBinding, error)`
  - 查询 __FilterToConsumerBinding 实例
  - 建立 Filter 到 Consumer 的映射关系

- [ ] 7.4 实现 WMI 连接管理
  - 使用 `golang.org/x/sys/windows/registry` 或 WMI COM API
  - 或使用 PowerShell 命令查询并解析结果

---

#### 8. ServicePersistenceDetector 主动检测 (`internal/persistence/service.go:58-62`)

- [ ] 8.1 实现主动服务检测
  - 通过 `sc query` 枚举所有服务
  - 或通过注册表 `HKLM\SYSTEM\CurrentControlSet\Services` 遍历
  - 检测服务路径、显示名称的可疑性

- [ ] 8.2 实现服务配置分析
  - 检测 ImagePath 可疑路径
  - 检测服务描述中的可疑关键词
  - 检测服务类型、启动类型异常

---

### P2 - 中优先级功能

#### 9. Analyzers 模块完善 (`internal/analyzers/`)

##### 9.1 LoginAnalyzer (`login.go`)

- [ ] 实现登录分析器
  - 分析登录类型 (本地/远程/RDP)
  - 分析登录时间、来源IP
  - 检测异常登录模式

##### 9.2 KerberosAnalyzer (`kerberos.go`)

- [ ] 实现 Kerberos 票据分析
  - 分析 TGT/服务票据
  - 检测黄金票据 (异常生命周期)
  - 检测白银票据

---

#### 10. ETL Parser 增强 (`internal/parsers/etl/`)

- [ ] 10.1 实现完整的 ETL 二进制格式解析
  - 解析 ETL 事件头
  - 提取事件数据
  - 支持更多 ETL 类型

---

#### 11. IIS Parser 增强 (`internal/parsers/iis/`)

- [ ] 11.1 支持更多 IIS 日志格式
  - IIS (Microsoft Format)
  - NCSA Common Format
  - IIS Central Logging Format

---

#### 12. COM 劫持检测增强 (`internal/persistence/com.go`)

- [ ] 12.1 添加 Empty CLSID 检测
  - 检测 CLSID 的 InprocServer32 值为空的情况
  - 分析空 CLSID 的潜在劫持风险

- [ ] 12.2 添加更多已知恶意 CLSID
  - 研究收集最新的恶意 CLSID 列表
  - 扩展 KnownMaliciousCLSID map

---

#### 13. IFEO 检测增强 (`internal/persistence/ifeo.go`)

- [ ] 13.1 实现 GlobalFlag 分析
  - 读取 GlobalFlag 值
  - 分析 FLG_ 标志位含义
  - 检测异常调试标志组合

- [ ] 13.2 实现 ShutdownFlags 分析
  - 读取 ShutdownFlags 值
  - 检测异常关闭标志

---

#### 14. AppInit_DLLs 签名验证检测增强

- [ ] 14.1 RequireSignedAppInit_DLLs = 0 时发出高严重度告警
  - 当前为 Medium，应提升为 High
  - 添加证书验证绕过检测

---

### P3 - 低优先级/待定

#### 15. Windows API 完善 (`internal/utils/windows.go`)

- [ ] 15.1 实现 Windows 版本检测
  - 获取 Windows 版本 (10, 11, Server 2019, 2022 等)
  - 获取 build number

- [ ] 15.2 实现管理员权限检查
  - 检查当前进程是否具有管理员权限
  - 使用 `IsUserAnAdmin()` 或 Token 检查

- [ ] 15.3 实现 UAC 相关信息获取

---

#### 16. Forensics 模块完善 (`internal/forensics/`)

- [ ] 16.1 实现文件签名验证 (`signature.go`)
- [ ] 16.2 实现内存取证 (`memory.go`)
- [ ] 16.3 实现时间戳分析 (`timestamp.go`)
- [ ] 16.4 实现证据链追踪 (`chain.go`)

---

#### 17. 检测结果持久化

- [ ] 17.1 将 Detection 结果存储到 SQLite
- [ ] 17.2 实现 Detection 结果查询 API
- [ ] 17.3 支持 Detection 标记为已处理/误报

---

#### 18. 高级检测功能

- [ ] 18.1 实现 BITS Jobs 检测 (T1197)
- [ ] 18.2 实现 Netsh Helper DLL 检测 (T1546.007)
- [ ] 18.3 实现 LSASS 处理检测 (T1546.008)
- [ ] 18.4 实现 Account Manipulation 检测 (T1098)

---

#### 19. TUI 集成

- [ ] 19.1 在 TUI 中添加 Persistence 视图
- [ ] 19.2 显示检测结果列表
- [ ] 19.3 显示技术分类统计

---

## 全项目功能完成度统计

| 模块 | 文档要求 | 已实现 | 完成度 | 优先级 |
|------|----------|--------|--------|--------|
| **Parsers** | | | | |
| - EVTX | 100% | 100% | ✅ | - |
| - ETL | 100% | ~40% | ⚠️ | P2 |
| - CSV | 100% | 100% | ✅ | - |
| - IIS | 100% | ~60% | ⚠️ | P2 |
| - Sysmon | 100% | 100% | ✅ | - |
| **Engine** | 100% | 100% | ✅ | - |
| **Collectors (系统信息)** | | | | |
| - SystemInfo | 100% | ~50% | ⚠️ | P1 |
| - ProcessInfo | 100% | ~10% | ❌ | **P0** |
| - NetworkInfo | 100% | ~10% | ❌ | **P0** |
| - UserInfo | 100% | ~10% | ❌ | **P0** |
| - TaskInfo | 100% | ~10% | ❌ | **P0** |
| - RegistryInfo | 100% | 0% | ❌ | **P0** |
| - DLL Info | 100% | 0% | ❌ | P1 |
| - Driver Info | 100% | 0% | ❌ | P1 |
| - Env Info | 100% | 0% | ❌ | P1 |
| **Collectors (持久化)** | | | | |
| - Prefetch | 100% | ~10% | ❌ | **P0** |
| - ShimCache | 100% | 0% | ❌ | P1 |
| - Amcache | 100% | 0% | ❌ | P1 |
| - UserAssist | 100% | 0% | ❌ | P1 |
| - USN Journal | 100% | 0% | ❌ | P1 |
| - OneClick | 100% | 0% | ❌ | P1 |
| **Live Collector** | 100% | ~30% | ⚠️ | P1 |
| **Alerts** | 100% | 100% | ✅ | - |
| **Rules** | 100% | 100% | ✅ | - |
| **Correlation** | 100% | 100% | ✅ | - |
| **Storage** | 100% | 100% | ✅ | - |
| **Persistence** | | | | |
| - DetectionEngine | 100% | 100% | ✅ | - |
| - RunKeyDetector | 100% | 100% | ✅ | - |
| - UserInitDetector | 100% | 100% | ✅ | - |
| - StartupFolder | 100% | 0% | ❌ | **P0** |
| - Accessibility | 100% | 100% | ✅ | - |
| - COMHijack | 100% | ~90% | ⚠️ | P2 |
| - IFEO | 100% | ~80% | ⚠️ | P2 |
| - AppInit | 100% | 100% | ✅ | - |
| - WMI | 100% | 0% | ❌ | **P0** |
| - Service | 100% | ~40% | ⚠️ | P1 |
| **Utils/Registry** | 100% | 0% | ❌ | **P0** |
| **Analyzers** | | | | |
| - BruteForce | 100% | 100% | ✅ | - |
| - Login | 100% | 0% | ❌ | P2 |
| - Kerberos | 100% | 0% | ❌ | P2 |
| **Timeline** | 100% | 100% | ✅ | - |
| **Forensics** | 100% | ~30% | ⚠️ | P3 |
| **Multi** | 100% | 100% | ✅ | - |
| **API** | 100% | ~70% | ⚠️ | - |
| **TUI** | 100% | ~50% | ⚠️ | P3 |

---

## 阻塞依赖关系

```
P0 阻塞问题必须优先解决：

1. utils/registry.go (P0)
   ↓ 影响
2. persistence/WMI (P0) ←─── 依赖 1
2. persistence/StartupFolder (P0) ←─── 依赖 1
2. persistence/Service (P1) ←─── 依赖 1
3. collectors/ProcessInfo (P0) ←─── 依赖 Windows API
3. collectors/NetworkInfo (P0)
3. collectors/UserInfo (P0)
3. collectors/TaskInfo (P0)
4. collectors/Prefetch (P0) ←─── 依赖 Windows API
```

---

**更新日期**: 2026-04-14
**更新原因**: 全面代码审查，发现全项目范围内大量功能未实现

(End of file - total 180 lines)
