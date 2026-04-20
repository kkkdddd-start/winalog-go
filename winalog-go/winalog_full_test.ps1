# WinLogAnalyzer-Go CLI 完整功能测试脚本
# 需要在 Windows 环境下以管理员权限运行
# 使用方式: powershell -ExecutionPolicy Bypass -File winalog_full_test.ps1

param(
    [string]$WinalogPath = ".\winalog.exe",
    [string]$OutputDir = ".\winalog_cli_test_$(Get-Date -Format 'yyyyMMdd_HHmmss')",
    [string]$TestEvtxFile = "",
    [int]$MaxSearchResults = 100,
    [switch]$FullTest,
    [switch]$TestImport,
    [switch]$TestLive,
    [switch]$TestTUI,
    [switch]$SkipEvtxConversion
)

$ErrorActionPreference = "Continue"
$Script:TestResults = New-Object System.Collections.ArrayList
$Script:TestStartTime = Get-Date

function Initialize-TestEnvironment {
    param([string]$OutputDir)
    
    if (-not (Test-Path $OutputDir)) {
        New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
    }
    
    New-Item -ItemType Directory -Path "$OutputDir\command_outputs" -Force | Out-Null
    New-Item -ItemType Directory -Path "$OutputDir\screenshots" -Force | Out-Null
    New-Item -ItemType Directory -Path "$OutputDir\exports" -Force | Out-Null
    New-Item -ItemType Directory -Path "$OutputDir\logs" -Force | Out-Null
    
    $env:WINLOG_TEST_OUTPUT = $OutputDir
    
    return $OutputDir
}

function Write-Log {
    param(
        [string]$Message,
        [string]$Level = "INFO",
        [string]$LogFile = "$OutputDir\test_execution.log"
    )
    
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss.fff"
    $logEntry = "[$timestamp] [$Level] $Message"
    
    Write-Host $logEntry -ForegroundColor $(switch ($Level) {
        "ERROR" { "Red" }
        "WARN" { "Yellow" }
        "SUCCESS" { "Green" }
        "INFO" { "White" }
        default { "White" }
    })
    
    Add-Content -Path $LogFile -Value $logEntry
}

function Get-WinalogVersion {
    try {
        $output = & $WinalogPath --version 2>&1
        return $output | Out-String
    } catch {
        return "Unknown"
    }
}

function Test-WinalogCommand {
    param(
        [string]$CommandName,
        [string]$Arguments,
        [string]$Description,
        [hashtable]$Options = @{},
        [int]$ExpectedExitCode = 0,
        [switch]$AllowNonZero,
        [switch]$CaptureOutput
    )
    
    $result = @{
        CommandName = $CommandName
        Arguments = $Arguments
        Description = $Description
        ExitCode = -1
        Output = ""
        OutputFile = ""
        ErrorOutput = ""
        Duration = 0
        Status = "NOT_RUN"
        Timestamp = Get-Date
        Options = $Options
    }
    
    $outputFileName = "$($CommandName -replace '[^\w]', '_')_$([guid]::NewGuid().ToString('N').Substring(0,8)).txt"
    $outputFile = "$OutputDir\command_outputs\$outputFileName"
    
    Write-Log "执行命令: $CommandName" "INFO"
    Write-Log "参数: $Arguments" "INFO"
    Write-Log "描述: $Description" "INFO"
    
    $startTime = Get-Date
    
    try {
        $fullArgs = if ($Arguments) { "$Arguments" -split ' ' } else { @() }
        
        $processInfo = Start-Process -FilePath $WinalogPath -ArgumentList $fullArgs -NoNewWindow -PassThru -RedirectStandardOutput $outputFile -RedirectStandardError "$outputFile.err" -Wait
        
        $result.ExitCode = $processInfo.ExitCode
        $result.Duration = (Get-Date) - $startTime
        
        if (Test-Path $outputFile) {
            $result.Output = Get-Content $outputFile -Raw -ErrorAction SilentlyContinue
            $result.OutputFile = $outputFile
        }
        
        if (Test-Path "$outputFile.err") {
            $errContent = Get-Content "$outputFile.err" -Raw -ErrorAction SilentlyContinue
            if ($errContent) {
                $result.ErrorOutput = $errContent
                $result.Output += "`n[STDERR]`n$errContent"
            }
        }
        
        if ($AllowNonZero) {
            $result.Status = if ($result.ExitCode -eq 0 -or $result.ExitCode -eq -1) { "PASS" } else { "FAIL" }
        } else {
            $result.Status = if ($result.ExitCode -eq $ExpectedExitCode) { "PASS" } else { "FAIL" }
        }
        
        if ($result.Status -eq "PASS") {
            Write-Log "状态: PASS (退出码: $($result.ExitCode), 耗时: $($result.Duration.TotalSeconds)s)" "SUCCESS"
        } else {
            Write-Log "状态: FAIL (退出码: $($result.ExitCode), 期望: $ExpectedExitCode)" "ERROR"
        }
    }
    catch {
        $result.Status = "ERROR"
        $result.Output = "Exception: $($_.Exception.Message)"
        $result.Duration = (Get-Date) - $startTime
        Write-Log "执行异常: $($_.Exception.Message)" "ERROR"
    }
    
    $script:TestResults.Add($result) | Out-Null
    
    Write-Log "---" "INFO"
    
    return $result
}

function Get-SystemInfo {
    $info = @{
        Hostname = $env:COMPUTERNAME
        User = $env:USERNAME
        OS = (Get-CimInstance Win32_OperatingSystem).Caption
        OSVersion = (Get-CimInstance Win32_OperatingSystem).Version
        Architecture = $env:PROCESSOR_ARCHITECTURE
        PowerShellVersion = $PSVersionTable.PSVersion.ToString()
        TestStartTime = $Script:TestStartTime
        WinalogVersion = Get-WinalogVersion
    }
    return $info
}

Initialize-TestEnvironment $OutputDir

Write-Log "========================================" "INFO"
Write-Log "WinLogAnalyzer-Go CLI 完整功能测试" "INFO"
Write-Log "========================================" "INFO"

$systemInfo = Get-SystemInfo
Write-Log "主机名: $($systemInfo.Hostname)" "INFO"
Write-Log "用户: $($systemInfo.User)" "INFO"
Write-Log "操作系统: $($systemInfo.OS)" "INFO"
Write-Log "WinLogAnalyzer 版本: $($systemInfo.WinalogVersion)" "INFO"
Write-Log "测试开始时间: $($systemInfo.TestStartTime)" "INFO"

$systemInfo | ConvertTo-Json -Depth 5 | Out-File "$OutputDir\system_info.json" -Encoding UTF8

if (-not (Test-Path $WinalogPath)) {
    Write-Log "错误: 找不到 winalog.exe at $WinalogPath" "ERROR"
    exit 1
}

Write-Log "========================================" "INFO"
Write-Log "第1部分: 帮助和版本" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "help" -Arguments "--help" -Description "显示完整帮助信息"
Test-WinalogCommand -CommandName "version" -Arguments "--version" -Description "显示版本信息"

Write-Log "========================================" "INFO"
Write-Log "第2部分: 状态和系统信息" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "status" -Arguments "status" -Description "显示系统状态"
Test-WinalogCommand -CommandName "info" -Arguments "info" -Description "显示系统信息"
Test-WinalogCommand -CommandName "info_process" -Arguments "info --process" -Description "显示进程信息"
Test-WinalogCommand -CommandName "info_network" -Arguments "info --network" -Description "显示网络连接"
Test-WinalogCommand -CommandName "info_users" -Arguments "info --users" -Description "显示本地用户"
Test-WinalogCommand -CommandName "info_registry" -Arguments "info --registry" -Description "显示注册表持久化点"
Test-WinalogCommand -CommandName "info_tasks" -Arguments "info --tasks" -Description "显示计划任务"
Test-WinalogCommand -CommandName "info_save" -Arguments "info --save" -Description "保存系统信息到数据库"
Test-WinalogCommand -CommandName "info_all" -Arguments "info --process --network --users --registry --tasks" -Description "显示所有系统信息"

Write-Log "========================================" "INFO"
Write-Log "第3部分: 数据库操作" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "db_status" -Arguments "db status" -Description "显示数据库状态"
Test-WinalogCommand -CommandName "db_clean" -Arguments "db clean" -Description "清理旧数据(默认90天)"
Test-WinalogCommand -CommandName "db_clean_30" -Arguments "db clean --days 30" -Description "清理30天前数据"
Test-WinalogCommand -CommandName "metrics" -Arguments "metrics" -Description "显示Prometheus指标"

Write-Log "========================================" "INFO"
Write-Log "第3.5部分: 取证收集" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "collect_basic" -Arguments "collect" -Description "基本取证收集"
Test-WinalogCommand -CommandName "collect_output" -Arguments "collect -o $OutputDir\forensic_collect.zip" -Description "取证收集(指定输出)"
Test-WinalogCommand -CommandName "collect_compress" -Arguments "collect --compress-level 9" -Description "高压缩比收集"
Test-WinalogCommand -CommandName "collect_workers" -Arguments "collect --workers 8" -Description "多线程收集"
Test-WinalogCommand -CommandName "collect_sysinfo" -Arguments "collect --include-system-info" -Description "收集系统信息"
Test-WinalogCommand -CommandName "collect_registry" -Arguments "collect --include-registry" -Description "收集注册表持久化点"
Test-WinalogCommand -CommandName "collect_tasks" -Arguments "collect --include-tasks" -Description "收集计划任务"
Test-WinalogCommand -CommandName "collect_prefetch" -Arguments "collect --include-prefetch" -Description "收集Prefetch文件"

Write-Log "========================================" "INFO"
Write-Log "第4部分: 规则管理" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "rules_list" -Arguments "rules list" -Description "列出所有规则"
Test-WinalogCommand -CommandName "rules_list_enabled" -Arguments "rules list --enabled" -Description "列出已启用规则"
Test-WinalogCommand -CommandName "rules_status" -Arguments "rules status" -Description "显示规则状态"
Test-WinalogCommand -CommandName "rules_status_detail" -Arguments "rules status BruteForce" -Description "显示特定规则状态"
Test-WinalogCommand -CommandName "rules_validate" -Arguments "rules validate" -Description "验证规则文件"
Test-WinalogCommand -CommandName "rules_disable" -Arguments "rules disable BruteForce" -Description "禁用规则"
Test-WinalogCommand -CommandName "rules_enable" -Arguments "rules enable BruteForce" -Description "启用规则"

Write-Log "========================================" "INFO"
Write-Log "第5部分: 告警管理" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "alert_list" -Arguments "alert list" -Description "列出告警"
Test-WinalogCommand -CommandName "alert_list_json" -Arguments 'alert list --format json --limit 20' -Description "以JSON格式列出告警"
Test-WinalogCommand -CommandName "alert_stats" -Arguments "alert stats" -Description "显示告警统计"
Test-WinalogCommand -CommandName "alert_list_high" -Arguments "alert list --severity high --limit 10" -Description "列出高严重级别告警"
Test-WinalogCommand -CommandName "alert_list_medium" -Arguments "alert list --severity medium --limit 10" -Description "列出中等严重级别告警"
Test-WinalogCommand -CommandName "alert_list_resolved" -Arguments "alert list --resolved --limit 10" -Description "列出已解决告警"
Test-WinalogCommand -CommandName "alert_run" -Arguments "alert run" -Description "运行告警分析"
Test-WinalogCommand -CommandName "alert_run_batch" -Arguments "alert run --batch-size 1000" -Description "运行告警分析(指定批次)"
Test-WinalogCommand -CommandName "alert_export" -Arguments "alert export $OutputDir\alerts_export.json --format json" -Description "导出告警"

Write-Log "========================================" "INFO"
Write-Log "第6部分: 搜索功能" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "search_basic" -Arguments "search" -Description "基本搜索(所有事件)"
Test-WinalogCommand -CommandName "search_level4" -Arguments "search --level 4 --limit $MaxSearchResults" -Description "搜索信息级别事件"
Test-WinalogCommand -CommandName "search_page" -Arguments "search --page 1 --page-size 50" -Description "分页搜索"
Test-WinalogCommand -CommandName "search_sort" -Arguments "search --sort-by timestamp --sort-order desc --limit 20" -Description "排序搜索"
Test-WinalogCommand -CommandName "search_keywords" -Arguments 'search --keywords "system" --limit 20' -Description "关键词搜索"
Test-WinalogCommand -CommandName "search_event_id" -Arguments "search --event-id 4624,4625 --limit 20" -Description "按事件ID搜索"
Test-WinalogCommand -CommandName "search_regex" -Arguments 'search --regex --keywords "4624|4625" --limit 20' -Description "正则表达式搜索"
Test-WinalogCommand -CommandName "search_time_range" -Arguments 'search --start-time "2024-01-01T00:00:00Z" --end-time "2024-12-31T23:59:59Z" --limit 20' -Description "时间范围搜索"
Test-WinalogCommand -CommandName "search_computer" -Arguments 'search --computer localhost --limit 20' -Description "按计算机名搜索"
Test-WinalogCommand -CommandName "search_user" -Arguments 'search --user Administrator --limit 20' -Description "按用户名搜索"
Test-WinalogCommand -CommandName "search_log_name" -Arguments "search --log-name Security --limit 20" -Description "按日志名称搜索"

Write-Log "========================================" "INFO"
Write-Log "第7部分: 导入功能" "INFO"
Write-Log "========================================" "INFO"

if ($TestImport -and $TestEvtxFile -and (Test-Path $TestEvtxFile)) {
    Write-Log "使用测试文件: $TestEvtxFile" "INFO"
    Test-WinalogCommand -CommandName "import" -Arguments "import `"$TestEvtxFile`" --log-name TestImport --workers 4" -Description "导入EVTX文件"
    Test-WinalogCommand -CommandName "search_after_import" -Arguments 'search --log-name TestImport --limit 50' -Description "搜索导入的事件"
} else {
    Write-Log "跳过导入测试 (需要 -TestImport 标志和有效的EVTX文件)" "WARN"
}

Write-Log "========================================" "INFO"
Write-Log "第8部分: 导出功能" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "export_json" -Arguments "export json $OutputDir\exports\events.json --limit 100" -Description "导出为JSON"
Test-WinalogCommand -CommandName "export_csv" -Arguments "export csv $OutputDir\exports\events.csv --limit 100" -Description "导出为CSV"

Write-Log "========================================" "INFO"
Write-Log "第9部分: 报告生成" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "report_list" -Arguments "report" -Description "列出报告"
Test-WinalogCommand -CommandName "report_generate_summary" -Arguments 'report generate summary --format json --output $OutputDir\reports\summary.json' -Description "生成摘要报告"
Test-WinalogCommand -CommandName "report_generate_security" -Arguments 'report generate security --format json --output $OutputDir\reports\security.json --time-range 24h' -Description "生成安全报告"
Test-WinalogCommand -CommandName "report_generate_threat" -Arguments 'report generate threat --format json --output $OutputDir\reports\threat.json --time-range 24h' -Description "生成威胁报告"
Test-WinalogCommand -CommandName "report_generate_compliance" -Arguments 'report generate compliance --format json --output $OutputDir\reports\compliance.json --time-range 24h' -Description "生成合规报告"
Test-WinalogCommand -CommandName "report_generate_html" -Arguments 'report generate security --format html --output $OutputDir\reports\security.html' -Description "生成HTML报告"

Write-Log "========================================" "INFO"
Write-Log "第10部分: 时间线分析" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "timeline_query" -Arguments "timeline query --limit 50" -Description "查询时间线"
Test-WinalogCommand -CommandName "timeline_query_time" -Arguments 'timeline query --start "2024-01-01T00:00:00Z" --end "2024-12-31T23:59:59Z" --limit 50' -Description "时间范围查询"
Test-WinalogCommand -CommandName "timeline_query_category" -Arguments "timeline query --category Security --limit 50" -Description "按类别查询"
Test-WinalogCommand -CommandName "timeline_query_computer" -Arguments "timeline query --computer localhost --limit 50" -Description "按计算机查询"
Test-WinalogCommand -CommandName "timeline_build" -Arguments "timeline build" -Description "构建时间线索引"

Write-Log "========================================" "INFO"
Write-Log "第11部分: 威胁分析" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "analyze_list" -Arguments "analyze list" -Description "列出分析器"
Test-WinalogCommand -CommandName "analyze_bruteforce" -Arguments "analyze brute_force --hours 24" -Description "暴力破解分析"
Test-WinalogCommand -CommandName "analyze_login" -Arguments "analyze login --hours 24" -Description "登录行为分析"
Test-WinalogCommand -CommandName "analyze_kerberos" -Arguments "analyze kerberos --hours 24" -Description "Kerberos分析"
Test-WinalogCommand -CommandName "analyze_powershell" -Arguments "analyze powershell --hours 24" -Description "PowerShell分析"
Test-WinalogCommand -CommandName "analyze_data_exfiltration" -Arguments "analyze data_exfiltration --hours 24" -Description "数据外泄分析"
Test-WinalogCommand -CommandName "analyze_lateral_movement" -Arguments "analyze lateral_movement --hours 24" -Description "横向移动分析"
Test-WinalogCommand -CommandName "analyze_privilege_escalation" -Arguments "analyze privilege_escalation --hours 24" -Description "权限提升分析"
Test-WinalogCommand -CommandName "analyze_persistence" -Arguments "analyze persistence --hours 24" -Description "持久化分析"
Test-WinalogCommand -CommandName "analyze_time_window" -Arguments "analyze --time-window 72h --format json" -Description "指定时间窗口分析"
Test-WinalogCommand -CommandName "analyze_output" -Arguments 'analyze --output $OutputDir\analysis.json --format json' -Description "分析结果输出到文件"

Write-Log "========================================" "INFO"
Write-Log "第12部分: 关联分析" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "correlate" -Arguments "correlate --time-window 24h" -Description "关联分析"
Test-WinalogCommand -CommandName "correlate_json" -Arguments 'correlate --format json --output $OutputDir\correlation.json' -Description "关联分析(JSON)"
Test-WinalogCommand -CommandName "correlate_48h" -Arguments "correlate --time-window 48h" -Description "关联分析(48h窗口)"
Test-WinalogCommand -CommandName "correlate_rules" -Arguments 'correlate --rules "LateralMovement,BruteForce" --time-window 24h' -Description "指定规则关联分析"

Write-Log "========================================" "INFO"
Write-Log "第13部分: 多机器分析" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "multi_analyze" -Arguments "multi analyze" -Description "多机器关联分析"
Test-WinalogCommand -CommandName "multi_analyze_48h" -Arguments "multi analyze --time-window 48h" -Description "多机器分析(48h窗口)"
Test-WinalogCommand -CommandName "multi_lateral" -Arguments "multi lateral" -Description "横向移动检测"

Write-Log "========================================" "INFO"
Write-Log "第14部分: UEBA用户行为分析" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "ueba_profiles" -Arguments "ueba profiles" -Description "显示用户画像"
Test-WinalogCommand -CommandName "ueba_profiles_user" -Arguments "ueba profiles --user Administrator" -Description "显示特定用户画像"
Test-WinalogCommand -CommandName "ueba_analyze" -Arguments "ueba analyze --hours 24" -Description "UEBA分析"
Test-WinalogCommand -CommandName "ueba_analyze_save" -Arguments "ueba analyze --hours 24 --save-alerts" -Description "UEBA分析并保存告警"
Test-WinalogCommand -CommandName "ueba_analyze_7d" -Arguments "ueba analyze -H 168" -Description "UEBA分析(7天)"
Test-WinalogCommand -CommandName "ueba_baseline" -Arguments "ueba baseline" -Description "显示用户基线"
Test-WinalogCommand -CommandName "ueba_baseline_learn" -Arguments "ueba baseline --action learn --hours 168" -Description "学习用户基线"
Test-WinalogCommand -CommandName "ueba_baseline_clear" -Arguments "ueba baseline --action clear" -Description "清除用户基线"

Write-Log "========================================" "INFO"
Write-Log "第15部分: 实时监控" "INFO"
Write-Log "========================================" "INFO"

if ($TestLive) {
    Write-Log "启动实时监控测试 (5秒)" "INFO"
    $liveJob = Start-Job -ScriptBlock {
        param($exe, $sec)
        $proc = Start-Process -FilePath $exe -ArgumentList "live","collect" -PassThru
        Start-Sleep -Seconds $sec
        Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
    } -ArgumentList $WinalogPath, 5
    
    Test-WinalogCommand -CommandName "live_collect" -Arguments "live collect" -Description "实时事件收集" -AllowNonZero
    
    if ($liveJob.State -eq "Running") {
        Stop-Job $liveJob -ErrorAction SilentlyContinue
        Remove-Job $liveJob -Force -ErrorAction SilentlyContinue
    }
} else {
    Write-Log "跳过实时监控测试 (需要 -TestLive 标志)" "WARN"
}

Write-Log "========================================" "INFO"
Write-Log "第16部分: 取证功能" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "forensics_hash_notepad" -Arguments "forensics hash `"$env:SystemRoot\system32\notepad.exe`"" -Description "计算notepad.exe哈希"
Test-WinalogCommand -CommandName "forensics_verify_notepad" -Arguments "forensics verify `"$env:SystemRoot\system32\notepad.exe`"" -Description "验证notepad.exe签名"
Test-WinalogCommand -CommandName "forensics_collect" -Arguments "forensics collect" -Description "收集取证数据"

Write-Log "========================================" "INFO"
Write-Log "第17部分: 持久化检测" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "persistence_detect" -Arguments "persistence detect" -Description "检测所有持久化机制"
Test-WinalogCommand -CommandName "persistence_detect_json" -Arguments 'persistence detect --format json --output $OutputDir\persistence.json' -Description "检测持久化(JSON)"
Test-WinalogCommand -CommandName "persistence_categories" -Arguments "persistence detect --category registry" -Description "检测注册表持久化"
Test-WinalogCommand -CommandName "persistence_category_wmi" -Arguments "persistence detect --category WMI" -Description "检测WMI持久化"
Test-WinalogCommand -CommandName "persistence_category_service" -Arguments "persistence detect --category Service" -Description "检测服务持久化"
Test-WinalogCommand -CommandName "persistence_category_scheduled" -Arguments "persistence detect --category ScheduledTask" -Description "检测计划任务持久化"
Test-WinalogCommand -CommandName "persistence_technique" -Arguments "persistence detect --technique T1546.003" -Description "检测特定MITRE技术"
Test-WinalogCommand -CommandName "persistence_technique2" -Arguments "persistence detect --technique T1547.001" -Description "检测T1547.001技术"
Test-WinalogCommand -CommandName "persistence_text" -Arguments "persistence detect --format text" -Description "文本格式输出"
Test-WinalogCommand -CommandName "persistence_progress" -Arguments "persistence detect --progress" -Description "显示检测进度"

Write-Log "========================================" "INFO"
Write-Log "第18部分: 白名单管理" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "whitelist_list" -Arguments "whitelist list" -Description "列出白名单"
Test-WinalogCommand -CommandName "whitelist_add" -Arguments 'whitelist add TestRule001 --event-id 4624 --reason "Test whitelist rule" --scope global --duration 1440 --enabled' -Description "添加白名单规则"
Test-WinalogCommand -CommandName "whitelist_add_user" -Arguments 'whitelist add TestRule002 --event-id 4625 --reason "Test user scope" --scope user --duration 60 --enabled' -Description "添加用户范围白名单"
Test-WinalogCommand -CommandName "whitelist_add_computer" -Arguments 'whitelist add TestRule003 --event-id 4672 --reason "Test computer scope" --scope computer --duration 0 --enabled' -Description "添加计算机范围白名单"
Test-WinalogCommand -CommandName "whitelist_list_after" -Arguments "whitelist list" -Description "列出白名单(添加后)"
Test-WinalogCommand -CommandName "whitelist_remove" -Arguments "whitelist remove TestRule001" -Description "移除白名单规则"
Test-WinalogCommand -CommandName "whitelist_remove2" -Arguments "whitelist remove TestRule002" -Description "移除第二个白名单"
Test-WinalogCommand -CommandName "whitelist_remove3" -Arguments "whitelist remove TestRule003" -Description "移除第三个白名单"

Write-Log "========================================" "INFO"
Write-Log "第19部分: 配置管理" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "config_get_all" -Arguments "config get" -Description "获取所有配置"
Test-WinalogCommand -CommandName "config_get_retention" -Arguments "config get alert.retention_days" -Description "获取保留期配置"
Test-WinalogCommand -CommandName "config_set_retention" -Arguments "config set alert.retention_days 180" -Description "设置保留期"
Test-WinalogCommand -CommandName "config_get_retention_after" -Arguments "config get alert.retention_days" -Description "验证保留期设置"
Test-WinalogCommand -CommandName "config_set_restore" -Arguments "config set alert.retention_days 90" -Description "恢复保留期默认值"

Write-Log "========================================" "INFO"
Write-Log "第20部分: SQL查询" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "query_count" -Arguments 'query "SELECT COUNT(*) FROM events"' -Description "统计事件总数"
Test-WinalogCommand -CommandName "query_events" -Arguments 'query "SELECT * FROM events LIMIT 10"' -Description "查询事件"
Test-WinalogCommand -CommandName "query_rules" -Arguments 'query "SELECT name, enabled FROM rules LIMIT 10"' -Description "查询规则"
Test-WinalogCommand -CommandName "query_alerts" -Arguments 'query "SELECT * FROM alerts LIMIT 10"' -Description "查询告警"
Test-WinalogCommand -CommandName "query_pragma" -Arguments 'query "PRAGMA table_info(events)"' -Description "查看表结构"

Write-Log "========================================" "INFO"
Write-Log "第21部分: 仪表板" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "dashboard" -Arguments "dashboard" -Description "显示仪表板"
Test-WinalogCommand -CommandName "dashboard_json" -Arguments "dashboard --format json" -Description "仪表板(JSON)"

Write-Log "========================================" "INFO"
Write-Log "第22部分: 数据库维护" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "db_vacuum" -Arguments "db vacuum" -Description "数据库VACUUM"
Test-WinalogCommand -CommandName "db_status_after" -Arguments "db status" -Description "数据库状态(维护后)"

Write-Log "========================================" "INFO"
Write-Log "第23部分: 文件验证" "INFO"
Write-Log "========================================" "INFO"

Test-WinalogCommand -CommandName "verify_calc" -Arguments "verify `"$env:SystemRoot\system32\calc.exe`"" -Description "验证calc.exe"
Test-WinalogCommand -CommandName "verify_cmd" -Arguments "verify `"$env:SystemRoot\system32\cmd.exe`"" -Description "验证cmd.exe"
Test-WinalogCommand -CommandName "verify_powershell" -Arguments "verify `"$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe`"" -Description "验证PowerShell"
Test-WinalogCommand -CommandName "verify_batch" -Arguments "verify `"$env:SystemRoot\system32\calc.exe`" `"$env:SystemRoot\system32\cmd.exe`"" -Description "批量验证文件"

Write-Log "========================================" "INFO"
Write-Log "第24部分: EVTX转换" "INFO"
Write-Log "========================================" "INFO"

if (-not $SkipEvtxConversion -and $TestEvtxFile -and (Test-Path $TestEvtxFile)) {
    Write-Log "测试EVTX转CSV: $TestEvtxFile" "INFO"
    Test-WinalogCommand -CommandName "evtx2csv" -Arguments "evtx2csv `"$TestEvtxFile`" `"$OutputDir\exports\converted.csv`" --limit 500" -Description "EVTX转CSV"
    
    if (Test-Path "$OutputDir\exports\converted.csv") {
        $csvInfo = Get-Content "$OutputDir\exports\converted.csv" -TotalCount 10
        Write-Log "CSV预览: $csvInfo" "INFO"
    }
} else {
    Write-Log "跳过EVTX转换测试" "WARN"
}

Write-Log "========================================" "INFO"
Write-Log "第25部分: TUI终端界面" "INFO"
Write-Log "========================================" "INFO"

Write-Log "TUI测试: 使用超时方式测试启动" "INFO"
$startTime = Get-Date
try {
    $tuiProc = Start-Process -FilePath $WinalogPath -ArgumentList "tui" -PassThru
    Start-Sleep -Seconds 3
    if (-not $tuiProc.HasExited) {
        Stop-Process -Id $tuiProc.Id -Force -ErrorAction SilentlyContinue
        Write-Log "状态: PASS (TUI启动成功)" "SUCCESS"
        $script:TestResults.Add(@{
            CommandName = "tui_start"
            Arguments = "tui"
            Description = "TUI终端界面启动"
            ExitCode = 0
            Duration = (Get-Date) - $startTime
            Status = "PASS"
            Timestamp = Get-Date
        }) | Out-Null
    } else {
        Write-Log "状态: FAIL (TUI启动后立即退出)" "ERROR"
        $script:TestResults.Add(@{
            CommandName = "tui_start"
            Arguments = "tui"
            Description = "TUI终端界面启动"
            ExitCode = $tuiProc.ExitCode
            Duration = (Get-Date) - $startTime
            Status = "FAIL"
            Timestamp = Get-Date
        }) | Out-Null
    }
} catch {
    Write-Log "TUI测试异常: $($_.Exception.Message)" "ERROR"
}

Write-Log "========================================" "INFO"
Write-Log "第26部分: API服务" "INFO"
Write-Log "========================================" "INFO"

Write-Log "启动API服务测试 (后台运行5秒)" "INFO"
$servePort = 18080
$serveOutputFile = "$OutputDir\command_outputs\serve_test.log"
$serveErrFile = "$OutputDir\command_outputs\serve_test.err"
try {
    $serveProc = Start-Process -FilePath $WinalogPath -ArgumentList "serve", "--port", "$servePort" -PassThru -RedirectStandardOutput $serveOutputFile -RedirectStandardError $serveErrFile
    Start-Sleep -Seconds 5
    
    if (-not $serveProc.HasExited) {
        Write-Log "API服务启动成功 (PID: $($serveProc.Id))" "SUCCESS"
        
        Test-WinalogCommand -CommandName "api_health" -Arguments "query health" -Description "API健康检查"
        
        Test-WinalogCommand -CommandName "api_stats" -Arguments "stats" -Description "API统计端点"
        
        Stop-Process -Id $serveProc.Id -Force -ErrorAction SilentlyContinue
        Write-Log "API服务已停止" "INFO"
        
        $script:TestResults.Add(@{
            CommandName = "serve_start"
            Arguments = "serve --port $servePort"
            Description = "API服务启动"
            ExitCode = 0
            Duration = (Get-Date) - $startTime
            Status = "PASS"
            Timestamp = Get-Date
        }) | Out-Null
    } else {
        Write-Log "API服务启动失败，退出码: $($serveProc.ExitCode)" "ERROR"
        if (Test-Path $serveErrFile) {
            $errContent = Get-Content $serveErrFile -Raw -ErrorAction SilentlyContinue
            Write-Log "错误输出: $errContent" "ERROR"
        }
        $script:TestResults.Add(@{
            CommandName = "serve_start"
            Arguments = "serve --port $servePort"
            Description = "API服务启动"
            ExitCode = $serveProc.ExitCode
            Duration = (Get-Date) - $startTime
            Status = "FAIL"
            Timestamp = Get-Date
        }) | Out-Null
    }
} catch {
    Write-Log "API服务测试异常: $($_.Exception.Message)" "ERROR"
}

Write-Log "========================================" "INFO"
Write-Log "测试完成 - 生成报告" "INFO"
Write-Log "========================================" "INFO"

$passCount = ($Script:TestResults | Where-Object { $_.Status -eq "PASS" }).Count
$failCount = ($Script:TestResults | Where-Object { $_.Status -eq "FAIL" }).Count
$errorCount = ($Script:TestResults | Where-Object { $_.Status -eq "ERROR" }).Count
$totalCount = $Script:TestResults.Count

$summary = @{
    TestStartTime = $Script:TestStartTime.ToString("yyyy-MM-dd HH:mm:ss")
    TestEndTime = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    TotalTests = $totalCount
    Passed = $passCount
    Failed = $failCount
    Errors = $errorCount
    SuccessRate = if ($totalCount -gt 0) { [math]::Round($passCount/$totalCount*100, 2) } else { 0 }
    SystemInfo = $systemInfo
    TestResults = $Script:TestResults
} | ConvertTo-Json -Depth 10

$summary | Out-File "$OutputDir\test_summary.json" -Encoding UTF8

$resultsCsv = $Script:TestResults | ForEach-Object {
    [PSCustomObject]@{
        CommandName = $_.CommandName
        Arguments = $_.Arguments
        Description = $_.Description
        ExitCode = $_.ExitCode
        DurationSeconds = [math]::Round($_.Duration.TotalSeconds, 3)
        Status = $_.Status
        Timestamp = $_.Timestamp.ToString("yyyy-MM-dd HH:mm:ss")
        OutputFile = $_.OutputFile
    }
}
$resultsCsv | Export-Csv -Path "$OutputDir\test_results.csv" -NoTypeInformation -Encoding UTF8

Write-Log "========================================" "INFO"
Write-Log "测试结果汇总" "INFO"
Write-Log "========================================" "INFO"
Write-Log "总测试数: $totalCount" "INFO"
Write-Log "通过: $passCount ($([math]::Round($passCount/$totalCount*100, 1))%)" $(if ($failCount -eq 0 -and $errorCount -eq 0) { "SUCCESS" } else { "WARN" })
Write-Log "失败: $failCount" $(if ($failCount -gt 0) { "ERROR" } else { "SUCCESS" })
Write-Log "错误: $errorCount" $(if ($errorCount -gt 0) { "ERROR" } else { "SUCCESS" })
Write-Log "========================================" "INFO"
Write-Log "结果输出目录: $OutputDir" "INFO"
Write-Log "========================================" "INFO"

$failedTests = $Script:TestResults | Where-Object { $_.Status -ne "PASS" }
if ($failedTests) {
    Write-Log "失败的测试:" "ERROR"
    foreach ($test in $failedTests) {
        Write-Log "  - $($test.CommandName): $($test.Description)" "ERROR"
        if ($test.Output) {
            Write-Log "    输出: $($test.Output.Substring(0, [math]::Min(200, $test.Output.Length)))" "ERROR"
        }
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "CLI 测试完成!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "结果目录: $OutputDir" -ForegroundColor Yellow
Write-Host "详细报告: $OutputDir\test_summary.json" -ForegroundColor Yellow
Write-Host "CSV报告: $OutputDir\test_results.csv" -ForegroundColor Yellow
Write-Host ""
Write-Host "测试结果: $passCount/$totalCount 通过" -ForegroundColor $(if ($failCount -eq 0) { "Green" } else { "Yellow" })

exit $(if ($failCount -gt 0 -or $errorCount -gt 0) { 1 } else { 0 })
