# WinLogAnalyzer-Go 测试手册

本文档为 WinLogAnalyzer-Go 提供完整的测试指南，涵盖 CLI 模式、Web UI 模式、API 端点和 TUI 模式的全部功能测试。

---

## 目录

1. [环境准备](#1-环境准备)
2. [CLI 模式测试](#2-cli-模式测试)
3. [Web UI 模式测试](#3-web-ui-模式测试)
4. [API 端点测试](#4-api-端点测试)
5. [TUI 模式测试](#5-tui-模式测试)
6. [测试数据准备](#6-测试数据准备)
7. [快速验证测试集](#7-快速验证测试集)

---

## 1. 环境准备

### 1.1 构建项目

```bash
cd /workspace/winalog-go/winalog-go
make build
```

构建产物位于 `./winalog`

### 1.2 初始化数据库

```bash
# 首次运行会自动初始化 SQLite 数据库
./winalog status
```

### 1.3 启动服务

```bash
# 启动 Web UI + API 服务
./winalog serve --port 8080

# 或仅启动 API 服务（无 Web UI）
./winalog serve --api-only
```

### 1.4 验证服务运行

```bash
# 检查健康状态
curl http://localhost:8080/api/health

# 预期响应：{"status":"ok","timestamp":"..."}
```

---

## 2. CLI 模式测试

### 2.1 数据导入与收集

#### 测试 2.1.1：导入 EVTX 文件

```bash
# 基本导入
./winalog import security.evtx

# 验证导入结果
./winalog query "SELECT COUNT(*) as total FROM events"

# 预期：返回导入的事件数量
```

#### 测试 2.1.2：导入 CSV 文件

```bash
./winalog import logs.csv

# 验证 CSV 解析
./winalog query "SELECT COUNT(*) FROM events WHERE source = 'CSV'"
```

#### 测试 2.1.3：递归导入目录

```bash
./winalog import ./test_logs/

# 预期：递归扫描并导入所有支持的格式（.evtx, .etl, .log, .csv）
```

#### 测试 2.1.4：指定日志类型导入

```bash
./winalog import --type security security.evtx
./winalog import --type system system.evtx
./winalog import --type application application.evtx
```

#### 测试 2.1.5：收集 Windows 事件日志

```bash
# 收集安全日志
./winalog collect --logs security

# 收集多种日志
./winalog collect --logs security,system,application

# 查看收集状态
./winalog status
```

#### 测试 2.1.6：收集取证数据

```bash
# 收集所有取证数据
./winalog collect --forensics

# 收集特定类型
./winalog collect --forensics --type prefetch
./winalog collect --forensics --type registry
./winalog collect --forensics --type schedule
```

#### 测试 2.1.7：实时日志监控

```bash
# 启动实时监控（Ctrl+C 停止）
./winalog live collect

# 预期：SSE 流输出实时事件
```

---

### 2.2 搜索与查询

#### 测试 2.2.1：关键词搜索

```bash
# 单关键词
./winalog search "failed login"

# 多关键词（AND）
./winalog search "failed" "login"

# 验证结果
./winalog query "SELECT COUNT(*) FROM events WHERE message LIKE '%failed login%'"
```

#### 测试 2.2.2：正则表达式搜索

```bash
./winalog search --regex "error.*failed|warning.*timeout"
./winalog search --regex "event_id.*46[0-9]{2}"
```

#### 测试 2.2.3：按事件 ID 过滤

```bash
# 单个事件 ID
./winalog search --event-id 4625

# 多个事件 ID
./winalog search --event-id 4625,4624,4672

# 验证
./winalog query "SELECT event_id, COUNT(*) FROM events GROUP BY event_id"
```

#### 测试 2.2.4：按事件级别过滤

```bash
# 支持的级别：critical, error, warning, info, debug
./winalog search --level error
./winalog search --level error,warning
```

#### 测试 2.2.5：按时间范围过滤

```bash
# 日期范围
./winalog search --start "2024-01-01" --end "2024-01-31"

# 日期时间范围
./winalog search --start "2024-01-01 00:00:00" --end "2024-01-31 23:59:59"

# 相对时间
./winalog search --hours 24      # 最近 24 小时
./winalog search --days 7        # 最近 7 天
```

#### 测试 2.2.6：按计算机名过滤

```bash
./winalog search --computer DC01
./winalog search --computer DC01,DC02,WEB01
```

#### 测试 2.2.7：按用户过滤

```bash
./winalog search --user administrator
./winalog search --user "DOMAIN\\admin"
```

#### 测试 2.2.8：按日志名称过滤

```bash
./winalog search --log-name Security
./winalog search --log-name Security,System
```

#### 测试 2.2.9：组合条件搜索

```bash
./winalog search \
  --keywords "failed login" \
  --event-id 4625 \
  --level error \
  --computer DC01 \
  --user administrator \
  --start "2024-01-01" \
  --end "2024-01-31"
```

#### 测试 2.2.10：分页查询

```bash
# 指定页码和每页数量
./winalog search --keywords "logon" --page 1 --page-size 100
./winalog search --keywords "logon" --page 2 --page-size 100

# 或使用 offset/limit
./winalog search --keywords "logon" --offset 100 --limit 50
```

#### 测试 2.2.11：SQL 查询

```bash
# 基本查询
./winalog query "SELECT COUNT(*) FROM events"

# 条件查询
./winalog query "SELECT * FROM events WHERE event_id = 4625 LIMIT 10"

# 聚合查询
./winalog query "SELECT event_id, COUNT(*) as cnt FROM events GROUP BY event_id ORDER BY cnt DESC"

# JOIN 查询（events 和 alerts）
./winalog query "SELECT e.computer, e.user, a.severity FROM events e LEFT JOIN alerts a ON e.id = a.event_id LIMIT 10"
```

---

### 2.3 分析与检测

#### 测试 2.3.1：暴力破解检测

```bash
# 执行暴力破解分析
./winalog analyze brute-force

# 指定时间窗口
./winalog analyze brute-force --hours 24

# 验证结果
./winalog query "SELECT * FROM alerts WHERE rule_name LIKE '%brute%'"
```

#### 测试 2.3.2：登录活动分析

```bash
./winalog analyze login

# 输出包括：
# - 成功登录统计
# - 失败登录统计
# - 异常登录时间
# - 异地登录检测
```

#### 测试 2.3.3：Kerberos 分析

```bash
./winalog analyze kerberos

# 检测内容：
# - TGT 请求异常
# - 银色票据特征
# - 金色票据特征
# - Kerberoasting 攻击
```

#### 测试 2.3.4：PowerShell 分析

```bash
./winalog analyze powershell

# 检测内容：
# - 编码命令执行
# - 远程下载
# - Mimikatz 相关命令
# - 恶意脚本执行
```

#### 测试 2.3.5：关联分析

```bash
./winalog correlate

# 指定时间窗口
./winalog correlate --window "1h"
./winalog correlate --window "24h"

# 输出攻击链
# - 攻击阶段识别
# - IOC 提取
# - MITRE ATT&CK 映射
```

#### 测试 2.3.6：UEBA 用户行为分析

```bash
# 执行分析
./winalog ueba analyze

# 指定分析时间范围
./winalog ueba analyze --hours 168

# 查看用户画像
./winalog ueba profiles

# 查看特定用户画像
./winalog ueba profiles --user administrator
```

#### 测试 2.3.7：持久化检测

```bash
./winalog persistence detect

# 按类别检测
./winalog persistence detect --category registry
./winalog persistence detect --category service
./winalog persistence detect --category scheduled

# 按 MITRE 技术检测
./winalog persistence detect --technique T1547.001
```

---

### 2.4 多机器分析

#### 测试 2.4.1：跨机器关联分析

```bash
./winalog multi analyze

# 指定时间窗口
./winalog multi analyze --window "24h"

# 输出：
# - 机器列表及角色
# - 跨机器活动
# - 可疑连接
```

#### 测试 2.4.2：横向移动检测

```bash
./winalog multi lateral

# 输出：
# - Pass-the-Hash 检测
# - RDP 跳跃检测
# - 管理员远程登录
# - WMI/PsExec 横向移动
```

---

### 2.5 告警管理

#### 测试 2.5.1：列出告警

```bash
# 基本列表
./winalog alert list

# 按严重程度过滤
./winalog alert list --severity critical
./winalog alert list --severity high,medium

# 按规则名称过滤
./winalog alert list --rule "brute-force"

# 按状态过滤
./winalog alert list --resolved
./winalog alert list  # 默认显示未 resolved

# 分页
./winalog alert list --page 1 --limit 50
```

#### 测试 2.5.2：显示告警详情

```bash
./winalog alert show <alert_id>

# 示例
./winalog alert show 1

# 输出包括：
# - 告警基本信息
# - 触发规则
# - 关联事件
# - MITRE ATT&CK 映射
# - 处理历史
```

#### 测试 2.5.3：解决告警

```bash
# 基本解决
./winalog alert resolve 1

# 带备注解决
./winalog alert resolve 1 --notes "确认是正常业务操作"

# 批量解决
./winalog alert resolve --ids 1,2,3 --notes "已知误报"
```

#### 测试 2.5.4：标记误报

```bash
./winalog alert false-positive 1 --reason "测试账户"

# 误报原因选项：
# - test_account: 测试账户
# - known_benign: 已知良性活动
# - policy_violation: 策略冲突
# - other: 其他
```

#### 测试 2.5.5：删除告警

```bash
# 删除单个
./winalog alert delete 1

# 批量删除
./winalog alert delete --ids 1,2,3

# 强制删除（跳过确认）
./winalog alert delete 1 --force
```

#### 测试 2.5.6：导出告警

```bash
# JSON 格式
./winalog alert export --format json --output alerts.json

# CSV 格式
./winalog alert export --format csv --output alerts.csv

# 指定过滤条件导出
./winalog alert export --format json --severity critical --output critical_alerts.json
```

#### 测试 2.5.7：告警统计

```bash
./winalog alert stats

# 输出包括：
# - 总告警数
# - 按严重程度分布
# - 按规则分布
# - 时间趋势
```

---

### 2.6 抑制规则（白名单）

#### 测试 2.6.1：列出抑制规则

```bash
./winalog whitelist list

# 查看详情
./winalog whitelist list --verbose
```

#### 测试 2.6.2：添加抑制规则

```bash
# 基本规则
./winalog whitelist add --name "Test Server Whitelist" --duration 60

# 详细规则（指定条件）
./winalog whitelist add \
  --name "Dev Server" \
  --computer dev-server-* \
  --user "DOMAIN\\testuser" \
  --duration 1440

# 永久规则
./winalog whitelist add --name "Permanent Whitelist" --duration 0
```

#### 测试 2.6.3：移除抑制规则

```bash
./winalog whitelist remove <rule_id>

# 批量移除
./winalog whitelist remove --ids 1,2,3
```

---

### 2.7 报告与导出

#### 测试 2.7.1：生成安全报告

```bash
# HTML 报告
./winalog report generate --type security --format html --output report.html

# JSON 报告
./winalog report generate --type security --format json --output report.json

# 指定时间范围
./winalog report generate --type security --start "2024-01-01" --end "2024-01-31"
```

#### 测试 2.7.2：导出事件数据

```bash
# JSON 格式
./winalog export json --output events.json

# CSV 格式
./winalog export csv --output events.csv

# 指定过滤条件
./winalog export json --event-ids 4625,4624 --output logins.json

# 限制导出数量
./winalog export json --limit 1000 --output events.json
```

#### 测试 2.7.3：时间线操作

```bash
# 构建时间线
./winalog timeline build

# 查询时间线
./winalog timeline query --start "2024-01-01" --end "2024-01-31"

# 导出时间线
./winalog timeline export --format csv --output timeline.csv
```

---

### 2.8 取证功能

#### 测试 2.8.1：计算文件哈希

```bash
# 基本用法（仅 Windows）
./winalog forensics hash --path C:\\Windows\\notepad.exe

# 计算多个文件
./winalog forensics hash --path C:\\Windows\\notepad.exe --path C:\\Windows\\System32\\cmd.exe

# 输出格式
./winalog forensics hash --path C:\\Windows\\notepad.exe --format json
```

#### 测试 2.8.2：验证文件签名

```bash
./winalog forensics verify --path C:\\Windows\\notepad.exe

# 检查是否签名
./winalog forensics is-signed --path C:\\Windows\\notepad.exe

# 输出签名者信息
./winalog forensics signature --path C:\\Windows\\notepad.exe
```

#### 测试 2.8.3：收集取证数据

```bash
# 收集注册表
./winalog forensics collect --type registry

# 收集 Prefetch
./winalog forensics collect --type prefetch

# 收集 ShimCache
./winalog forensics collect --type shimcache

# 收集 UserAssist
./winalog forensics collect --type userassist

# 收集计划任务
./winalog forensics collect --type scheduledtasks

# 收集所有
./winalog forensics collect --type all

# 指定输出路径
./winalog forensics collect --type registry --output ./evidence/
```

---

### 2.9 系统与管理

#### 测试 2.9.1：显示仪表板

```bash
./winalog dashboard

# 输出包括：
# - 总事件数
# - 登录统计
# - 事件级别分布
# - Top 计算机
# - Top 用户
```

#### 测试 2.9.2：显示系统状态

```bash
./winalog status

# 输出包括：
# - 数据库路径
# - 数据库大小
# - 事件总数
# - 最后导入时间
```

#### 测试 2.9.3：显示系统信息

```bash
# 基本信息
./winalog info

# 仅进程
./winalog info --type processes

# 仅网络
./winalog info --type network

# 仅用户
./winalog info --type users

# 保存快照
./winalog info --save
```

#### 测试 2.9.4：Prometheus 指标

```bash
./winalog metrics

# 或启动指标服务器
./winalog metrics --port 9090
```

#### 测试 2.9.5：文件完整性验证

```bash
./winalog verify --path C:\\Windows\\notepad.exe

# 计算并比较哈希
./winalog verify --path C:\\Windows\\notepad.exe --expected <sha256-hash>
```

#### 测试 2.9.6：数据库操作

```bash
# 查看状态
./winalog db status

# 优化数据库
./winalog db vacuum

# 清理旧数据
./winalog db clean --before "2024-01-01"

# 清理孤立事件
./winalog db clean --orphans
```

#### 测试 2.9.7：配置管理

```bash
# 查看所有配置
./winalog config get

# 查看特定配置
./winalog config get --key log_level

# 修改配置
./winalog config set --key log_level --value debug

# 重置为默认值
./winalog config reset
```

#### 测试 2.9.8：规则管理

```bash
# 列出所有规则
./winalog rules list

# 查看规则详情
./winalog rules list --verbose

# 启用规则
./winalog rules enable brute-force-suspect

# 禁用规则
./winalog rules disable brute-force-suspect

# 验证规则语法
./winalog rules validate --name custom-rule

# 导入规则
./winalog rules import rules.json

# 导出规则
./winalog rules export --format json --output rules.json
```

---

## 3. Web UI 模式测试

### 3.1 准备工作

```bash
# 启动 Web 服务
./winalog serve --port 8080

# 访问 http://localhost:8080
```

### 3.2 认证与导航

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-001 | 访问登录页 | 浏览器访问 `http://localhost:8080` | 显示登录页面或直接进入 Dashboard |
| WEB-002 | 导航菜单 | 点击顶部导航栏各菜单项 | 正确跳转到对应页面 |
| WEB-003 | 面包屑导航 | 进入子页面后点击面包屑 | 返回上级页面 |
| WEB-004 | 响应式布局 | 缩放浏览器窗口 | 布局自适应调整 |

---

### 3.3 Dashboard（仪表板）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-010 | 统计卡片 | 首页查看统计卡片 | 显示总事件数、登录统计、计算机数等 |
| WEB-011 | 事件分布图 | 查看事件级别分布图表 | 饼图/柱状图正确显示 |
| WEB-012 | 登录趋势图 | 查看登录活动趋势 | 时间序列图正确显示 |
| WEB-013 | 计算机列表 | 滚动查看计算机列表 | 显示所有计算机及事件数 |
| WEB-014 | 刷新按钮 | 点击刷新按钮 | 数据重新加载 |
| WEB-015 | 时间范围选择 | 选择不同时间范围 | 数据按所选范围更新 |

---

### 3.4 Events（事件列表）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-020 | 事件列表加载 | 访问 /events | 显示分页事件列表 |
| WEB-021 | 排序 | 点击列表表头排序 | 列表按指定列排序 |
| WEB-022 | 分页 | 点击分页数字 | 正确跳转页面 |
| WEB-023 | 每页数量 | 选择每页显示数量 | 正确更新每页显示数量 |
| WEB-030 | 关键词搜索 | 输入关键词点击搜索 | 返回匹配的事件 |
| WEB-031 | 事件 ID 过滤 | 输入事件 ID 过滤 | 显示指定事件 ID |
| WEB-032 | 级别过滤 | 勾选事件级别 | 显示符合条件的事件 |
| WEB-033 | 时间范围 | 选择日期时间范围 | 显示范围内事件 |
| WEB-034 | 计算机过滤 | 输入计算机名过滤 | 显示指定计算机事件 |
| WEB-035 | 用户过滤 | 输入用户名过滤 | 显示指定用户事件 |
| WEB-036 | 组合过滤 | 使用多个过滤条件 | 显示符合所有条件的事件 |
| WEB-037 | 清除过滤 | 点击清除按钮 | 所有过滤条件重置 |
| WEB-040 | 事件详情 | 点击事件行查看详情 | 侧边栏/弹窗显示详情 |
| WEB-041 | JSON 视图 | 查看事件详情 JSON | 正确格式化显示 |
| WEB-042 | 复制事件 | 点击复制按钮 | 事件 JSON 复制到剪贴板 |
| WEB-043 | 事件导出 | 选择事件点击导出 | 导出选中事件 |
| WEB-044 | 全选导出 | 点击全选再点击导出 | 导出当前页所有事件 |

---

### 3.5 Alerts（告警管理）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-050 | 告警列表 | 访问 /alerts | 显示告警分页列表 |
| WEB-051 | 严重程度过滤 | 选择严重程度下拉框 | 显示符合条件告警 |
| WEB-052 | 状态过滤 | 选择状态（open/resolved） | 显示符合条件告警 |
| WEB-053 | 规则名称过滤 | 输入规则名称搜索 | 显示符合条件告警 |
| WEB-054 | 批量选择 | 勾选多个告警 | 已选告警高亮 |
| WEB-055 | 批量解决 | 选择告警后点击批量解决 | 选中告警标记为已解决 |
| WEB-056 | 批量删除 | 选择告警后点击批量删除 | 选中告警被删除 |
| WEB-060 | 告警详情 | 点击告警查看详情 | 显示告警详情面板 |
| WEB-061 | 关联事件 | 查看告警关联的事件 | 显示关联事件列表 |
| WEB-062 | MITRE 映射 | 查看 MITRE ATT&CK 映射 | 显示技术映射信息 |
| WEB-063 | 处理历史 | 查看告警处理历史 | 显示处理记录 |
| WEB-064 | 添加备注 | 在详情页添加处理备注 | 备注保存成功 |
| WEB-065 | 解决告警 | 点击解决按钮 | 告警状态更新 |
| WEB-066 | 标记误报 | 点击误报按钮并选择原因 | 告警标记为误报 |
| WEB-070 | 告警统计 | 查看告警统计页面 | 显示统计图表 |
| WEB-071 | 告警趋势 | 查看告警时间趋势 | 显示趋势图 |
| WEB-072 | 告警导出 | 点击导出按钮 | 导出告警到文件 |

---

### 3.6 Analyze（威胁分析）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-080 | 分析器列表 | 访问 /analyze | 显示可用分析器列表 |
| WEB-081 | 选择分析器 | 点击分析器卡片 | 分析器被选中 |
| WEB-082 | 设置参数 | 设置分析参数（时间范围等） | 参数正确设置 |
| WEB-083 | 执行分析 | 点击运行按钮 | 显示分析进度 |
| WEB-084 | 分析结果 | 分析完成后查看结果 | 显示分析结果详情 |
| WEB-085 | 暴力破解分析 | 选择 brute-force 分析 | 检测暴力破解攻击 |
| WEB-086 | 登录分析 | 选择 login 分析 | 显示登录活动统计 |
| WEB-087 | Kerberos 分析 | 选择 kerberos 分析 | 显示 Kerberos 异常 |
| WEB-088 | PowerShell 分析 | 选择 powershell 分析 | 显示可疑 PowerShell |
| WEB-089 | 结果导出 | 导出分析报告 | 报告导出成功 |

---

### 3.7 Correlation（关联分析）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-100 | 关联分析 | 设置时间窗口并点击分析 | 执行关联分析 |
| WEB-101 | 攻击链可视化 | 查看攻击链图形 | 显示攻击链图 |
| WEB-102 | 统计概览 | 查看统计卡片 | 显示统计信息 |
| WEB-103 | 展开详情 | 点击展开详情 | 显示详细攻击链信息 |
| WEB-104 | 关联规则列表 | 查看触发的规则 | 显示关联规则列表 |
| WEB-105 | 时间线视图 | 查看关联事件时间线 | 显示时间线 |
| WEB-106 | 导出报告 | 导出关联分析报告 | 报告导出成功 |

---

### 3.8 Collect（日志收集）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-110 | 选择日志源 | 勾选要收集的日志源 | 选中项高亮 |
| WEB-111 | 全选 | 点击全选按钮 | 所有日志源被选中 |
| WEB-112 | 开始收集 | 点击开始收集 | 显示收集进度条 |
| WEB-113 | 收集日志 | 选择事件日志类型 | 收集 Windows 事件日志 |
| WEB-114 | 收集取证 | 选择取证数据类型 | 收集取证数据 |
| WEB-115 | 收集结果 | 完成后查看结果 | 显示收集统计 |
| WEB-116 | 取消收集 | 收集过程中点击取消 | 收集被取消 |

---

### 3.9 Forensics（取证）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-120 | 文件哈希计算 | 输入文件路径点击计算 | 显示 SHA256/SHA1/MD5 |
| WEB-121 | 批量哈希 | 输入多个文件路径 | 批量计算哈希 |
| WEB-122 | 签名验证 | 输入文件路径点击验证 | 显示签名信息 |
| WEB-123 | 签名状态检查 | 检查文件是否签名 | 显示签名状态 |
| WEB-124 | 证据收集 | 选择类型点击收集 | 收集证据文件 |
| WEB-125 | 证据列表 | 查看收集的证据 | 显示证据列表 |
| WEB-126 | 证据详情 | 点击证据查看详情 | 显示证据详情 |
| WEB-127 | Chain of Custody | 查看监管链 | 显示证据监管记录 |
| WEB-128 | 证据导出 | 导出证据文件 | 证据导出成功 |

---

### 3.10 Live（实时监控）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-130 | 启动监控 | 点击开始监控 | SSE 连接建立 |
| WEB-131 | 实时事件 | 查看实时事件流 | 事件实时更新 |
| WEB-132 | 事件过滤 | 设置过滤条件 | 仅显示符合条件事件 |
| WEB-133 | 暂停监控 | 点击暂停按钮 | 监控暂停 |
| WEB-134 | 恢复监控 | 点击恢复按钮 | 监控继续 |
| WEB-135 | 停止监控 | 点击停止按钮 | SSE 连接关闭 |
| WEB-136 | 统计面板 | 查看实时统计 | 显示统计信息 |

---

### 3.11 Metrics（系统指标）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-140 | 指标展示 | 访问 /metrics | 显示 Prometheus 指标 |
| WEB-141 | 刷新数据 | 点击刷新按钮 | 指标数据更新 |
| WEB-142 | 指标过滤 | 输入指标名称过滤 | 显示匹配的指标 |

---

### 3.12 Multi（多机器分析）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-150 | 执行分析 | 设置参数点击分析 | 执行多机器分析 |
| WEB-151 | 机器关系图 | 查看机器关系图 | 显示机器拓扑图 |
| WEB-152 | 横向移动 | 查看横向移动结果 | 显示检测结果 |
| WEB-153 | 用户活动 | 查看跨机器用户活动 | 显示用户活动 |
| WEB-154 | 详情展开 | 展开查看详情 | 显示详细信息 |
| WEB-155 | 导出报告 | 导出分析报告 | 报告导出成功 |

---

### 3.13 Persistence（持久化检测）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-160 | 执行检测 | 点击检测按钮 | 执行持久化检测 |
| WEB-161 | 按类别查看 | 选择持久化类别 | 显示该类别检测结果 |
| WEB-162 | MITRE 技术 | 查看 MITRE 技术映射 | 显示 ATT&CK 技术 |
| WEB-163 | 检测结果详情 | 查看结果详情 | 显示详细检测信息 |
| WEB-164 | 导出结果 | 导出检测报告 | 报告导出成功 |

---

### 3.14 Query（SQL 查询）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-170 | SQL 输入 | 输入 SQL 语句 | 语法高亮显示 |
| WEB-171 | 执行查询 | 点击执行按钮 | 返回查询结果 |
| WEB-172 | 查询历史 | 查看历史查询列表 | 显示历史记录 |
| WEB-173 | 加载历史 | 点击历史查询 | SQL 自动填充 |
| WEB-174 | 导出结果 | 导出查询结果 | 结果导出成功 |
| WEB-175 | 清空结果 | 点击清空按钮 | 结果区域清空 |
| WEB-176 | SQL 格式化 | 格式化 SQL 语句 | SQL 格式化显示 |
| WEB-180 | 结果分页 | 查看大量结果 | 分页显示结果 |
| WEB-181 | 结果排序 | 点击列排序 | 结果排序更新 |
| WEB-182 | 结果统计 | 查看统计信息 | 显示行数、耗时等 |

---

### 3.15 Reports（报告）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-190 | 报告列表 | 访问 /reports | 显示已有报告列表 |
| WEB-191 | 生成报告 | 选择类型点击生成 | 生成报告 |
| WEB-192 | 报告预览 | 点击报告预览 | 显示报告内容 |
| WEB-193 | 导出报告 | 导出报告文件 | 报告导出成功 |
| WEB-194 | 删除报告 | 删除不需要的报告 | 报告删除 |

---

### 3.16 Rules（规则管理）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-200 | 规则列表 | 访问 /rules | 显示规则列表 |
| WEB-201 | 规则详情 | 点击规则查看详情 | 显示规则信息 |
| WEB-202 | 启用规则 | 点击启用开关 | 规则状态变为启用 |
| WEB-203 | 禁用规则 | 点击禁用开关 | 规则状态变为禁用 |
| WEB-204 | 搜索规则 | 输入规则名称搜索 | 显示匹配规则 |
| WEB-205 | 按类型过滤 | 选择规则类型过滤 | 显示匹配类型规则 |
| WEB-206 | 验证规则 | 点击验证按钮 | 显示验证结果 |

---

### 3.17 Settings（设置）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-210 | 查看设置 | 访问 /settings | 显示当前配置 |
| WEB-211 | 修改设置 | 修改配置项并保存 | 配置保存成功 |
| WEB-212 | 重置设置 | 点击重置按钮 | 配置重置为默认 |
| WEB-213 | 配置验证 | 保存前验证配置 | 显示验证结果 |

---

### 3.18 Suppress（告警抑制）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-220 | 规则列表 | 访问 /suppress | 显示抑制规则列表 |
| WEB-221 | 创建规则 | 填写表单创建规则 | 规则创建成功 |
| WEB-222 | 编辑规则 | 修改现有规则 | 规则更新成功 |
| WEB-223 | 删除规则 | 点击删除按钮 | 规则删除 |
| WEB-224 | 启用规则 | 点击启用开关 | 规则启用 |
| WEB-225 | 禁用规则 | 点击禁用开关 | 规则禁用 |
| WEB-226 | 规则详情 | 查看规则详情 | 显示详细信息 |

---

### 3.19 SystemInfo（系统信息）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-230 | 系统信息 | 访问 /system-info | 显示系统概览 |
| WEB-231 | 进程列表 | 查看进程标签页 | 显示进程列表 |
| WEB-232 | 网络连接 | 查看网络标签页 | 显示网络连接 |
| WEB-233 | 用户列表 | 查看用户标签页 | 显示用户列表 |
| WEB-234 | 环境变量 | 查看环境变量标签页 | 显示环境变量 |
| WEB-235 | DLL 列表 | 查看 DLL 标签页 | 显示加载的 DLL |
| WEB-236 | 驱动列表 | 查看驱动标签页 | 显示驱动列表 |
| WEB-237 | 刷新数据 | 点击刷新按钮 | 数据更新 |

---

### 3.20 Timeline（事件时间线）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-240 | 时间线视图 | 访问 /timeline | 显示全局时间线 |
| WEB-241 | 时间范围 | 设置时间范围 | 显示范围内事件 |
| WEB-242 | 事件类型过滤 | 选择事件类型 | 显示类型匹配事件 |
| WEB-243 | 事件详情 | 点击事件 | 显示事件详情 |
| WEB-244 | 缩放时间线 | 鼠标滚轮缩放 | 时间线缩放 |
| WEB-245 | 拖拽时间线 | 拖拽时间线 | 时间线平移 |
| WEB-246 | 导出时间线 | 导出时间线数据 | 导出成功 |

---

### 3.21 UEBA（用户行为分析）

| 测试 ID | 测试项 | 操作步骤 | 预期结果 |
|---------|--------|----------|----------|
| WEB-250 | 执行分析 | 设置时间范围点击分析 | 执行 UEBA 分析 |
| WEB-251 | 风险仪表盘 | 查看风险分布图 | 显示风险分布 |
| WEB-252 | 异常时间线 | 查看异常事件时间线 | 显示异常时间线 |
| WEB-253 | 用户画像 | 点击加载画像 | 显示用户行为画像 |
| WEB-254 | 异常详情 | 查看异常详情 | 显示异常详细信息 |
| WEB-255 | 基线管理 | 管理行为基线 | 基线保存成功 |
| WEB-256 | 导出报告 | 导出 UEBA 报告 | 报告导出成功 |

---

## 4. API 端点测试

### 4.1 健康检查

```bash
# 测试健康检查端点
curl http://localhost:8080/api/health

# 预期响应
{"status":"ok","timestamp":"2024-01-01T00:00:00Z"}
```

### 4.2 事件 API

```bash
# 获取事件列表
curl http://localhost:8080/api/events

# 分页参数
curl "http://localhost:8080/api/events?page=1&page_size=50"

# 获取单个事件
curl http://localhost:8080/api/events/1

# 搜索事件
curl -X POST http://localhost:8080/api/events/search \
  -H "Content-Type: application/json" \
  -d '{"keywords":"failed","event_ids":[4625]}'

# 搜索事件（带时间范围）
curl -X POST http://localhost:8080/api/events/search \
  -H "Content-Type: application/json" \
  -d '{"start_time":"2024-01-01","end_time":"2024-01-31"}'

# 导出事件
curl -X POST http://localhost:8080/api/events/export \
  -H "Content-Type: application/json" \
  -d '{"format":"json","filters":{"event_ids":[4625,4624]}}' \
  -o events.json
```

### 4.3 告警 API

```bash
# 获取告警列表
curl http://localhost:8080/api/alerts

# 分页和过滤
curl "http://localhost:8080/api/alerts?page=1&page_size=20&severity=high"

# 获取告警统计
curl http://localhost:8080/api/alerts/stats

# 获取告警趋势
curl "http://localhost:8080/api/alerts/trend?days=7"

# 获取单个告警
curl http://localhost:8080/api/alerts/1

# 解决告警
curl -X POST http://localhost:8080/api/alerts/1/resolve \
  -H "Content-Type: application/json" \
  -d '{"notes":"已确认处理"}'

# 标记误报
curl -X POST http://localhost:8080/api/alerts/1/false-positive \
  -H "Content-Type: application/json" \
  -d '{"reason":"test_account"}'

# 删除告警
curl -X DELETE http://localhost:8080/api/alerts/1

# 批量操作
curl -X POST http://localhost:8080/api/alerts/batch \
  -H "Content-Type: application/json" \
  -d '{"ids":[1,2,3],"action":"resolve","notes":"批量处理"}'
```

### 4.4 分析 API

```bash
# 获取可用分析器列表
curl http://localhost:8080/api/analyzers

# 获取分析器信息
curl http://localhost:8080/api/analyzers/brute-force

# 运行分析
curl -X POST http://localhost:8080/api/analyze/brute-force \
  -H "Content-Type: application/json" \
  -d '{"hours":24}'

curl -X POST http://localhost:8080/api/analyze/login
curl -X POST http://localhost:8080/api/analyze/kerberos
curl -X POST http://localhost:8080/api/analyze/powershell
```

### 4.5 关联分析 API

```bash
# 执行关联分析
curl -X POST http://localhost:8080/api/correlation/analyze \
  -H "Content-Type: application/json" \
  -d '{"time_window":"1h"}'
```

### 4.6 多机器分析 API

```bash
# 执行多机器分析
curl -X POST http://localhost:8080/api/multi/analyze \
  -H "Content-Type: application/json" \
  -d '{"time_window":"24h"}'

# 获取横向移动检测
curl http://localhost:8080/api/multi/lateral
```

### 4.7 UEBA API

```bash
# 执行 UEBA 分析
curl -X POST http://localhost:8080/api/ueba/analyze \
  -H "Content-Type: application/json" \
  -d '{"hours":168}'

# 获取用户画像
curl http://localhost:8080/api/ueba/profiles

# 获取特定异常类型
curl http://localhost:8080/api/ueba/anomaly/unusual_login_time
```

### 4.8 SQL 查询 API

```bash
# 执行 SQL 查询
curl -X POST http://localhost:8080/api/query/execute \
  -H "Content-Type: application/json" \
  -d '{"sql":"SELECT COUNT(*) as total FROM events","limit":100}'

# 复杂查询
curl -X POST http://localhost:8080/api/query/execute \
  -H "Content-Type: application/json" \
  -d '{"sql":"SELECT event_id, COUNT(*) as cnt FROM events GROUP BY event_id ORDER BY cnt DESC LIMIT 10"}'
```

### 4.9 持久化检测 API

```bash
# 执行持久化检测
curl http://localhost:8080/api/persistence/detect

# 获取持久化类别
curl http://localhost:8080/api/persistence/categories

# 获取 MITRE 技术列表
curl http://localhost:8080/api/persistence/techniques
```

### 4.10 取证 API

```bash
# 计算文件哈希
curl -X POST http://localhost:8080/api/forensics/hash \
  -H "Content-Type: application/json" \
  -d '{"path":"C:\\\\Windows\\\\notepad.exe"}'

# 验证文件签名
curl "http://localhost:8080/api/forensics/signature?path=C:\\\\Windows\\\\notepad.exe"

# 检查签名状态
curl "http://localhost:8080/api/forensics/is-signed?path=C:\\\\Windows\\\\notepad.exe"

# 收集证据
curl -X POST http://localhost:8080/api/forensics/collect \
  -H "Content-Type: application/json" \
  -d '{"type":"registry"}'

# 获取证据列表
curl http://localhost:8080/api/forensics/evidence

# 获取监管链
curl http://localhost:8080/api/forensics/chain-of-custody
```

### 4.11 抑制规则 API

```bash
# 获取抑制规则列表
curl http://localhost:8080/api/suppress

# 创建抑制规则
curl -X POST http://localhost:8080/api/suppress \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Rule","duration":60,"scope":"global","enabled":true}'

# 更新抑制规则
curl -X PUT http://localhost:8080/api/suppress/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Rule","duration":120}'

# 删除抑制规则
curl -X DELETE http://localhost:8080/api/suppress/1

# 切换启用状态
curl -X POST http://localhost:8080/api/suppress/1/toggle \
  -H "Content-Type: application/json" \
  -d '{"enabled":false}'
```

### 4.12 仪表板 API

```bash
# 获取收集统计
curl http://localhost:8080/api/dashboard/collection-stats
```

### 4.13 系统 API

```bash
# 获取系统信息
curl http://localhost:8080/api/system/info

# 获取系统指标
curl http://localhost:8080/api/system/metrics

# 获取进程列表
curl "http://localhost:8080/api/system/processes?limit=100"

# 获取网络连接
curl "http://localhost:8080/api/system/network?limit=100"

# 获取环境变量
curl http://localhost:8080/api/system/env

# 获取加载的 DLL
curl "http://localhost:8080/api/system/dlls?limit=100"

# 获取驱动列表
curl http://localhost:8080/api/system/drivers
```

### 4.14 规则 API

```bash
# 获取规则列表
curl http://localhost:8080/api/rules

# 获取规则详情
curl http://localhost:8080/api/rules/brute-force-suspect

# 切换规则启用状态
curl -X POST "http://localhost:8080/api/rules/brute-force-suspect/toggle?enabled=false"
```

### 4.15 报告 API

```bash
# 获取报告列表
curl http://localhost:8080/api/reports

# 生成报告
curl -X POST http://localhost:8080/api/reports/generate \
  -H "Content-Type: application/json" \
  -d '{"type":"security","format":"html","start_time":"2024-01-01","end_time":"2024-01-31"}'

# 获取报告详情
curl http://localhost:8080/api/reports/report-123
```

### 4.16 时间线 API

```bash
# 获取时间线数据
curl "http://localhost:8080/api/timeline?limit=200"

# 带时间范围
curl "http://localhost:8080/api/timeline?start_time=2024-01-01&end_time=2024-01-31"

# 获取时间线统计
curl http://localhost:8080/api/timeline/stats

# 获取攻击链信息
curl http://localhost:8080/api/timeline/chains
```

### 4.17 实时监控 API

```bash
# 获取实时统计
curl http://localhost:8080/api/live/stats

# SSE 事件流（在浏览器中测试）
# 访问 http://localhost:8080/api/live/events
```

### 4.18 导入 API

```bash
# 获取导入状态
curl http://localhost:8080/api/import/status
```

### 4.19 设置 API

```bash
# 获取设置
curl http://localhost:8080/api/settings

# 保存设置
curl -X POST http://localhost:8080/api/settings \
  -H "Content-Type: application/json" \
  -d '{"log_level":"debug","max_events":10000}'

# 重置设置
curl -X POST http://localhost:8080/api/settings/reset
```

---

## 5. TUI 模式测试

### 5.1 启动 TUI

```bash
./winalog tui
```

### 5.2 导航测试

| 测试 ID | 测试项 | 操作 | 预期结果 |
|---------|--------|------|----------|
| TUI-001 | 基本导航 | 方向键上下 | 光标移动 |
| TUI-002 | 选择 | Enter | 进入选中项 |
| TUI-003 | 返回 | ESC 或 Backspace | 返回上级菜单 |
| TUI-004 | 退出 | q | 退出 TUI |

### 5.3 功能模块测试

| 测试 ID | 测试项 | 操作 | 预期结果 |
|---------|--------|------|----------|
| TUI-010 | 查看事件 | 选择 Events 菜单 | 显示事件列表 |
| TUI-011 | 搜索事件 | 在事件列表输入关键词 | 过滤显示 |
| TUI-012 | 查看告警 | 选择 Alerts 菜单 | 显示告警列表 |
| TUI-013 | 解决告警 | 选择告警按解决键 | 告警标记已解决 |
| TUI-014 | 实时监控 | 选择 Live 菜单 | 显示实时事件 |
| TUI-015 | 搜索功能 | 选择 Search 菜单 | 显示搜索界面 |
| TUI-016 | 执行搜索 | 输入条件执行 | 显示搜索结果 |
| TUI-017 | 查看仪表板 | 选择 Dashboard | 显示统计信息 |
| TUI-018 | 系统状态 | 选择 Status | 显示系统状态 |
| TUI-019 | 帮助信息 | 按 ? 或 h | 显示帮助 |
| TUI-020 | 快捷键 | 查看各页面快捷键 | 显示可用快捷键 |

---

## 6. 测试数据准备

### 6.1 获取测试数据

#### Windows 安全日志事件

| 事件 ID | 描述 | 用途 |
|---------|------|------|
| 4624 | 账户成功登录 | 登录分析测试 |
| 4625 | 账户登录失败 | 暴力破解检测测试 |
| 4672 | 特殊权限分配 | 权限提升检测测试 |
| 4720 | 创建账户 | 账户创建检测测试 |
| 4726 | 删除账户 | 账户删除检测测试 |
| 4732 | 添加安全组成员 | 组成员变更测试 |

### 6.2 导出 Windows 事件日志

```powershell
# 导出安全日志
wevtutil epl Security security.evtx

# 导出系统日志
wevtutil epl System system.evtx

# 导出应用日志
wevtutil epl Application application.evtx

# 指定时间范围导出
wevtutil qe Security "/q:*[System[TimeCreated[@SystemTime>='2024-01-01T00:00:00Z']]" /f:evtx /sq:true security-filtered.evtx
```

### 6.3 创建测试用 CSV 日志

```csv
timestamp,event_id,level,computer,user,message
2024-01-01T10:00:00Z,4624,info,DC01,DOMAIN\\admin,An account was successfully logged on.
2024-01-01T10:01:00Z,4625,warning,DC01,DOMAIN\\hacker,An account failed to log on.
2024-01-01T10:02:00Z,4672,info,DC01,DOMAIN\\admin,Special privileges assigned to new logon.
```

### 6.4 快速准备测试数据脚本

```bash
#!/bin/bash
# test_data_prep.sh

# 创建测试目录
mkdir -p test_data

# 导入安全日志
./winalog import test_data/security.evtx --type security

# 导入系统日志
./winalog import test_data/system.evtx --type system

# 导入 CSV
./winalog import test_data/logs.csv --type csv

# 验证导入
./winalog query "SELECT source, COUNT(*) FROM events GROUP BY source"

# 运行基本分析
./winalog analyze brute-force
./winalog analyze login

echo "测试数据准备完成!"
```

---

## 7. 快速验证测试集

### 7.1 基础功能验证

```bash
#!/bin/bash
# quick_verify.sh

echo "=== WinLogAnalyzer-Go 快速验证测试 ==="

BASE_URL="http://localhost:8080/api"

# 1. 健康检查
echo "[1/10] 测试健康检查..."
curl -s "$BASE_URL/health" | grep -q "ok" && echo "  PASS" || echo "  FAIL"

# 2. 事件搜索
echo "[2/10] 测试事件搜索..."
curl -s -X POST "$BASE_URL/events/search" -H "Content-Type: application/json" -d '{"limit":10}' > /dev/null && echo "  PASS" || echo "  FAIL"

# 3. 告警列表
echo "[3/10] 测试告警列表..."
curl -s "$BASE_URL/alerts" > /dev/null && echo "  PASS" || echo "  FAIL"

# 4. 告警统计
echo "[4/10] 测试告警统计..."
curl -s "$BASE_URL/alerts/stats" > /dev/null && echo "  PASS" || echo "  FAIL"

# 5. 分析器列表
echo "[5/10] 测试分析器列表..."
curl -s "$BASE_URL/analyzers" > /dev/null && echo "  PASS" || echo "  FAIL"

# 6. SQL 查询
echo "[6/10] 测试 SQL 查询..."
curl -s -X POST "$BASE_URL/query/execute" -H "Content-Type: application/json" -d '{"sql":"SELECT 1 as test"}' > /dev/null && echo "  PASS" || echo "  FAIL"

# 7. 仪表板统计
echo "[7/10] 测试仪表板统计..."
curl -s "$BASE_URL/dashboard/collection-stats" > /dev/null && echo "  PASS" || echo "  FAIL"

# 8. 系统信息
echo "[8/10] 测试系统信息..."
curl -s "$BASE_URL/system/info" > /dev/null && echo "  PASS" || echo "  FAIL"

# 9. 持久化检测
echo "[9/10] 测试持久化检测..."
curl -s "$BASE_URL/persistence/detect" > /dev/null && echo "  PASS" || echo "  FAIL"

# 10. 规则列表
echo "[10/10] 测试规则列表..."
curl -s "$BASE_URL/rules" > /dev/null && echo "  PASS" || echo "  FAIL"

echo ""
echo "=== 验证完成 ==="
```

### 7.2 完整回归测试

```bash
#!/bin/bash
# regression_test.sh

echo "=== WinLogAnalyzer-Go 完整回归测试 ==="
echo ""

# CLI 测试
echo "--- CLI 模式测试 ---"
./winalog status
./winalog query "SELECT COUNT(*) FROM events"
./winalog dashboard
./winalog alert list --page 1 --page-size 10
./winalog rules list
./winalog analyze brute-force
./winalog correlate
./winalog ueba analyze

# API 测试
echo ""
echo "--- API 模式测试 ---"
BASE_URL="http://localhost:8080/api"

echo "测试所有 GET 端点..."
endpoints=(
  "/health"
  "/events"
  "/alerts"
  "/alerts/stats"
  "/analyzers"
  "/dashboard/collection-stats"
  "/system/info"
  "/system/metrics"
  "/persistence/detect"
  "/rules"
  "/reports"
  "/timeline"
  "/suppress"
  "/ueba/profiles"
  "/collect/status"
  "/import/status"
  "/settings"
)

for endpoint in "${endpoints[@]}"; do
  echo -n "  $endpoint ... "
  curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$endpoint"
  echo ""
done

echo ""
echo "=== 回归测试完成 ==="
```

---

## 附录 A：错误代码参考

| HTTP 状态码 | 含义 |
|-------------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | 未认证 |
| 403 | 禁止访问 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |

## 附录 B：常用查询 SQL

```sql
-- 查看事件总数
SELECT COUNT(*) FROM events;

-- 按事件 ID 统计
SELECT event_id, COUNT(*) as cnt FROM events GROUP BY event_id ORDER BY cnt DESC;

-- 按计算机统计
SELECT computer, COUNT(*) as cnt FROM events GROUP BY computer ORDER BY cnt DESC;

-- 按用户统计
SELECT user, COUNT(*) as cnt FROM events WHERE user IS NOT NULL GROUP BY user ORDER BY cnt DESC;

-- 按级别统计
SELECT level, COUNT(*) as cnt FROM events GROUP BY level;

-- 查找失败登录
SELECT * FROM events WHERE event_id = 4625 ORDER BY timestamp DESC LIMIT 100;

-- 查找成功登录
SELECT * FROM events WHERE event_id = 4624 ORDER BY timestamp DESC LIMIT 100;

-- 按时间范围统计
SELECT DATE(timestamp) as date, COUNT(*) as cnt 
FROM events 
WHERE timestamp BETWEEN '2024-01-01' AND '2024-01-31'
GROUP BY DATE(timestamp)
ORDER BY date;

-- 关联查询（事件+告警）
SELECT e.id, e.event_id, e.computer, e.user, a.severity, a.rule_name
FROM events e
LEFT JOIN alerts a ON e.id = a.event_id
WHERE a.id IS NOT NULL;

-- 查看最近 24 小时事件
SELECT * FROM events 
WHERE timestamp > datetime('now', '-1 day')
ORDER BY timestamp DESC;

-- 查看高严重程度告警
SELECT * FROM alerts WHERE severity IN ('critical', 'high') ORDER BY created_at DESC;
```

---

## 附录 C：日志级别映射

| 级别 | 值 | 说明 |
|------|-----|------|
| critical | 1 | 严重级别 |
| error | 2 | 错误级别 |
| warning | 3 | 警告级别 |
| info | 4 | 信息级别 |
| debug | 5 | 调试级别 |

---

*文档版本：1.0*
*最后更新：2026-04-16*
