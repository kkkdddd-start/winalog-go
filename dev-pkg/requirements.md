# WinLogAnalyzer-Go 需求文档

**项目名称**: WinLogAnalyzer-Go  
**版本**: v2.0.0  
**日期**: 2026-04-13  

---

## 1. 简介

### 1.1 项目背景

WinLogAnalyzer Python 版本已实现完整功能，但在架构上存在以下问题需要通过 Go 语言重写来解决：

| Python 版本问题 | Go 版本解决方案 |
|----------------|----------------|
| main_window.py 7862 行过于庞大 | Web UI 分离，Go 只负责后端 |
| 4 个规则类类型不统一 | 统一 Rule 接口 |
| GIL 限制并发性能 | Go goroutine 天生并发 |
| 内存占用高 (GC) | Go 精确内存管理 |
| 依赖 Python 环境 | 单二进制静态编译 |

### 1.2 目标

使用 Go 语言重写 WinLogAnalyzer，实现：
- 保持 Python 版本全部功能
- 性能提升 3-5 倍
- 单文件分发，零依赖
- 更强的取证能力

---

## 2. 功能需求

### 2.1 日志采集

| 功能 | 描述 | 优先级 |
|------|------|--------|
| EVTX 解析 | 支持 python-evtx 和 wevtutil 双解析 | P0 |
| ETL 解析 | Windows ETW 跟踪文件解析 | P1 |
| IIS 日志 | IIS W3C 扩展日志格式 | P1 |
| CSV/文本 | 自定义格式日志解析 | P2 |
| Sysmon 日志 | Sysmon 事件解析 | P1 |
| 实时采集 | Windows Event Log API 订阅 | P1 |
| 一键采集 | 自动发现并打包所有日志源 | P0 |

### 2.2 数据存储

| 功能 | 描述 | 优先级 |
|------|------|--------|
| SQLite 存储 | WAL 模式，支持高并发读 | P0 |
| 批量导入 | 10000 条/批事务优化 | P0 |
| 增量导入 | 基于文件 hash + 时间戳 | P0 |
| 事件去重 | 基于 event_id + timestamp | P1 |

### 2.3 分析引擎

| 功能 | 描述 | 优先级 |
|------|------|--------|
| 告警检测 | 阈值 + 时间窗口 + 分组 | P0 |
| 关联分析 | 多事件链模式匹配 | P0 |
| 暴力破解检测 | 同一 IP 失败登录超阈值 | P0 |
| 横向移动检测 | 异常 RDP/SMB 登录 | P0 |
| PowerShell 分析 | 编码命令检测 | P0 |
| Kerberos 分析 | 黄金票据/白银票据 | P1 |

### 2.4 规则系统

| 功能 | 描述 | 优先级 |
|------|------|--------|
| 统一规则接口 | AlertRule + CorrelationRule 实现同一接口 | P0 |
| YAML 规则加载 | 自定义规则文件 | P0 |
| 内置规则 | 40+ 告警规则 + 8+ 关联规则 | P0 |
| MITRE ATT&CK 映射 | 规则关联 MITRE ID | P1 |
| 规则评分 | 规则质量评分机制 | P2 |

### 2.5 报告生成

| 功能 | 描述 | 优先级 |
|------|------|--------|
| HTML 报告 | Bootstrap 响应式报告 | P0 |
| JSON 导出 | 结构化数据导出 | P1 |
| CSV 导出 | 事件数据批量导出 | P1 |
| 综合报告 | 告警 + 事件 + 系统信息 + IOC | P0 |

### 2.6 取证功能 (新增)

| 功能 | 描述 | 优先级 |
|------|------|--------|
| 文件哈希 | SHA256/MD5 计算 | P0 |
| 证据清单 | JSON 格式证据清单 | P0 |
| 证据链 | 区块链式证据追溯 | P1 |
| 数字签名 | 报告防篡改签名 | P1 |

### 2.7 用户界面

| 功能 | 描述 | 优先级 |
|------|------|--------|
| CLI | Cobra 命令行 | P0 |
| Web UI | React + Vite | P1 |
| HTTP API | Gin REST API | P1 |

---

## 3. 非功能需求

### 3.1 性能

| 指标 | 目标 |
|------|------|
| EVTX 解析速度 | ≥ 150 万条/分钟 |
| 内存占用 (1GB EVTX) | ≤ 200MB |
| 启动时间 | ≤ 100ms |
| 批量插入速度 | ≥ 10 万条/秒 |

### 3.2 可用性

- 编译为单个可执行文件
- Windows x64 原生支持
- 配置文件 YAML 格式
- 详细的错误提示

### 3.3 可维护性

- 模块化架构 (internal/ 包划分)
- 统一错误处理
- 结构化日志 (Zap)
- 完整单元测试覆盖率

---

## 4. 数据模型

### 4.1 事件

```go
type Event struct {
    ID         int64
    Timestamp  time.Time
    EventID    int32
    Level      EventLevel
    Source     string
    LogName    string
    Computer   string
    User       *string
    UserSID    *string
    Message    string
    RawXML     *string
    SessionID  *string
    IPAddress  *string
    ImportTime time.Time
}
```

### 4.2 告警

```go
type Alert struct {
    ID           int64
    RuleName     string
    Severity     Severity
    Message      string
    EventIDs     []int32
    FirstSeen    time.Time
    LastSeen     time.Time
    Count        int
    MITREAttack  []string
    Resolved     bool
    ResolvedTime *time.Time
    Notes        string
    LogName      string
    RuleScore    float64
}
```

### 4.3 统一规则

```go
type AlertRule struct {
    BaseRule
    EventIDs     []int32
    Filters      []Filter
    ConditionOp  LogicalOp
    GroupBy     string
    Threshold   int
    TimeWindow  time.Duration
    RuleScore   float64
}

type CorrelationRule struct {
    BaseRule
    TimeWindow time.Duration
    Conditions []Condition
    JoinField string
}
```

---

## 5. 验收标准

### 5.1 功能验收

- [ ] 能够导入 Security.evtx、System.evtx 等标准 Windows 日志
- [ ] 搜索命令能够按事件 ID、时间范围、关键词筛选
- [ ] 告警规则能够检测暴力破解、异常登录等行为
- [ ] 关联分析能够发现攻击链模式
- [ ] 报告能够生成包含统计和详情的 HTML 文件
- [ ] 一键采集能够打包所有日志到 ZIP 文件

### 5.2 性能验收

- [ ] 导入 100 万条事件的 EVTX 文件不超过 10 分钟
- [ ] 内存峰值不超过 500MB
- [ ] 启动到显示帮助信息不超过 200ms

### 5.3 质量验收

- [ ] 所有模块有单元测试
- [ ] 代码通过 golangci-lint 检查
- [ ] 无运行时 panic
- [ ] 错误消息清晰可读

---

## 6. 依赖关系

### 6.1 Go 模块

> **注意**: 为确保单二进制部署，使用 Pure Go SQLite 驱动，无需 CGO 编译。

```
github.com/spf13/cobra      - CLI 框架
github.com/spf13/viper      - 配置管理
github.com/gin-gonic/gin    - HTTP 框架
modernc.org/sqlite         - SQLite 驱动 (Pure Go，无需 CGO)
github.com/natefinch/lumberjack - 日志轮转
go.uber.org/zap            - 高性能日志
golang.org/x/crypto         - 加密
github.com/google/uuid      - UUID 生成
github.com/charmbracelet/bubbletea - TUI 框架
```

---

## 7. 附录

### 7.1 事件 ID 参考

| 事件 ID | 名称 | 说明 |
|---------|------|------|
| 4624 | 登录成功 | 登录成功 |
| 4625 | 登录失败 | 登录失败 |
| 4672 | 特殊权限 | 管理员权限分配 |
| 4688 | 进程创建 | 新进程创建 |
| 4697 | 服务创建 | Windows 服务创建 |
| 4698 | 计划任务 | 计划任务创建 |
| 4720 | 账户创建 | 新用户账户 |
| 4722 | 账户启用 | 账户启用 |
| 4732 | 添加组成员 | 用户加入组 |
| 4768 | TGT 请求 | Kerberos TGT |
| 4769 | TGS 请求 | Kerberos TGS |

### 7.2 MITRE ATT&CK 战术

| 战术 | 战术 ID |
|------|---------|
| 初始访问 | TA0001 |
| 执行 | TA0002 |
| 持久化 | TA0003 |
| 权限提升 | TA0004 |
| 防御规避 | TA0005 |
| 凭据访问 | TA0006 |
| 发现 | TA0007 |
| 横向移动 | TA0008 |
| 收集 | TA0009 |
| 命令与控制 | TA0011 |
| 外泄 | TA0010 |

---

*本需求文档遵循 EARS 规范，验收标准可测试可验证。*
