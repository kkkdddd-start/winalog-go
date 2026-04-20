# WinLogAnalyzer-Go CLI 测试脚本
# 用于测试所有 CLI 命令的功能并记录原始数据
# 使用方式: powershell -ExecutionPolicy Bypass -File winalog_cli_test.ps1

param(
    [string]$WinalogPath = ".\winalog.exe",
    [string]$OutputDir = ".\cli_test_results",
    [string]$TestEvtxFile = "",
    [switch]$SkipImport = $false,
    [switch]$SkipLive = $false,
    [switch]$SkipTUI = $false
)

$ErrorActionPreference = "Continue"
$Script:TestResults = @()
$Script:TestStartTime = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

function Write-TestLog {
    param([string]$Message, [string]$Level = "INFO")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logMessage = "[$timestamp] [$Level] $Message"
    Write-Host $logMessage
    Add-Content -Path "$OutputDir\test_log.txt" -Value $logMessage
}

function Test-Command {
    param(
        [string]$Name,
        [string]$Command,
        [string]$Description,
        [int]$ExpectedExitCode = 0
    )
    
    Write-TestLog "测试: $Name"
    Write-TestLog "命令: $Command"
    Write-TestLog "描述: $Description"
    
    $outputFile = "$OutputDir\$($Name -replace '[^\w]', '_').txt"
    $errorFile = "$OutputDir\$($Name -replace '[^\w]', '_')_error.txt"
    
    $startTime = Get-Date
    
    try {
        if ($Command -match '\|') {
            $scriptBlock = [scriptblock]::Create($Command)
            $result = & $scriptBlock 2>&1
            $exitCode = $LASTEXITCODE
            $output = $result | Out-String
        } else {
            $output = & $WinalogPath $Command 2>&1
            $exitCode = $LASTEXITCODE
        }
        
        $duration = (Get-Date) - $startTime
        
        $output | Out-File -FilePath $outputFile -Encoding UTF8
        if ($exitCode -ne 0) {
            $output | Out-File -FilePath $errorFile -Encoding UTF8
        }
        
        $status = if ($exitCode -eq $ExpectedExitCode) { "PASS" } else { "FAIL" }
        
        $testResult = @{
            Name = $Name
            Command = "$WinalogPath $Command"
            Description = $Description
            ExitCode = $exitCode
            ExpectedExitCode = $ExpectedExitCode
            Duration = $duration.TotalSeconds
            Status = $status
            OutputFile = $outputFile
            ErrorFile = $errorFile
            Timestamp = $startTime
        }
        
        Write-TestLog "状态: $status (退出码: $exitCode, 耗时: $($duration.TotalSeconds)s)"
        Write-TestLog "输出文件: $outputFile"
        
        if ($status -eq "FAIL") {
            Write-TestLog "错误输出: $errorFile" "WARN"
        }
        
        $Script:TestResults += $testResult
        
        return $status -eq "PASS"
    }
    catch {
        $duration = (Get-Date) - $startTime
        Write-TestLog "执行异常: $($_.Exception.Message)" "ERROR"
        
        $testResult = @{
            Name = $Name
            Command = "$WinalogPath $Command"
            Description = $Description
            ExitCode = -1
            ExpectedExitCode = $ExpectedExitCode
            Duration = $duration.TotalSeconds
            Status = "ERROR"
            Error = $_.Exception.Message
            Timestamp = $startTime
        }
        $Script:TestResults += $testResult
        
        return $false
    }
    finally {
        Write-TestLog "---"
    }
}

function Get-TestEvtxFile {
    if ($TestEvtxFile -and (Test-Path $TestEvtxFile)) {
        return $TestEvtxFile
    }
    
    $commonPaths = @(
        ".\Security.evtx",
        ".\System.evtx",
        ".\Application.evtx",
        ".\test.evtx",
        ".\samples\Security.evtx",
        ".\test_samples\Security.evtx",
        "$env:TEMP\Security.evtx"
    )
    
    foreach ($path in $commonPaths) {
        if (Test-Path $path) {
            return $path
        }
    }
    
    return $null
}

Write-TestLog "========================================"
Write-TestLog "WinLogAnalyzer-Go CLI 测试开始"
Write-TestLog "========================================"
Write-TestLog "测试时间: $Script:TestStartTime"
Write-TestLog "Winalog 路径: $WinalogPath"
Write-TestLog "输出目录: $OutputDir"
Write-TestLog "========================================"

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

if (-not (Test-Path $WinalogPath)) {
    Write-TestLog "错误: 找不到 winalog.exe at $WinalogPath" "ERROR"
    exit 1
}

$winalogVersion = & $WinalogPath --version 2>&1
Write-TestLog "WinLogAnalyzer 版本: $winalogVersion"

$testEvtx = Get-TestEvtxFile
if ($testEvtx) {
    Write-TestLog "找到测试 EVTX 文件: $testEvtx"
} else {
    Write-TestLog "未找到测试 EVTX 文件，部分导入测试将被跳过" "WARN"
}

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第1部分: 帮助和版本信息"
Write-TestLog "========================================"

Test-Command -Name "help" -Command "--help" -Description "显示帮助信息"
Test-Command -Name "version" -Command "--version" -Description "显示版本信息"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第2部分: 状态和信息命令"
Write-TestLog "========================================"

Test-Command -Name "status" -Command "status" -Description "显示系统状态"
Test-Command -Name "info" -Command "info" -Description "显示系统信息"
Test-Command -Name "info_process" -Command "info --process" -Description "显示进程信息"
Test-Command -Name "info_network" -Command "info --network" -Description "显示网络连接"
Test-Command -Name "info_users" -Command "info --users" -Description "显示用户列表"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第3部分: 数据库命令"
Write-TestLog "========================================"

Test-Command -Name "db_status" -Command "db status" -Description "显示数据库状态"
Test-Command -Name "metrics" -Command "metrics" -Description "显示 Prometheus 指标"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第4部分: 规则命令"
Write-TestLog "========================================"

Test-Command -Name "rules_list" -Command "rules list" -Description "列出所有规则"
Test-Command -Name "rules_status" -Command "rules status" -Description "显示规则状态"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第5部分: 告警命令"
Write-TestLog "========================================"

Test-Command -Name "alert_list" -Command "alert list" -Description "列出告警"
Test-Command -Name "alert_stats" -Command "alert stats" -Description "显示告警统计"
Test-Command -Name "alert_list_json" -Command "alert list --format json" -Description "以JSON格式列出告警"
Test-Command -Name "alert_list_limit" -Command "alert list --limit 10" -Description "限制告警数量"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第6部分: 搜索命令"
Write-TestLog "========================================"

Test-Command -Name "search_empty" -Command "search" -Description "空搜索(应返回所有事件)"
Test-Command -Name "search_level" -Command "search --level 4" -Description "按级别过滤搜索"
Test-Command -Name "search_page" -Command "search --page 1 --page-size 10" -Description "分页搜索"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第7部分: 导入命令"
Write-TestLog "========================================"

if ($testEvtx -and -not $SkipImport) {
    $importCmd = "import `"$testEvtx`" --log-name TestLog"
    Test-Command -Name "import_evtx" -Command $importCmd -Description "导入 EVTX 文件"
    
    Test-Command -Name "search_after_import" -Command "search --log-name TestLog" -Description "搜索导入的事件"
} else {
    Write-TestLog "跳过导入测试 (无测试文件或 --SkipImport 标志)" "WARN"
}

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第8部分: 导出命令"
Write-TestLog "========================================"

Test-Command -Name "export_json" -Command "export json" -Description "导出为 JSON"
Test-Command -Name "export_csv" -Command "export csv" -Description "导出为 CSV"
Test-Command -Name "export_limit" -Command "export csv --limit 100" -Description "限制导出数量"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第9部分: 报告命令"
Write-TestLog "========================================"

Test-Command -Name "report_list" -Command "report" -Description "列出报告"
Test-Command -Name "report_generate" -Command "report generate --format json --time-range 24h" -Description "生成 JSON 报告"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第10部分: 时间线命令"
Write-TestLog "========================================"

Test-Command -Name "timeline_query" -Command "timeline query" -Description "查询时间线"
Test-Command -Name "timeline_build" -Command "timeline build" -Description "构建时间线"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第11部分: 分析命令"
Write-TestLog "========================================"

Test-Command -Name "analyze_list" -Command "analyze list" -Description "列出分析器"
Test-Command -Name "analyze_bruteforce" -Command "analyze brute_force --hours 24" -Description "运行暴力破解分析"
Test-Command -Name "analyze_login" -Command "analyze login --hours 24" -Description "运行登录分析"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第12部分: 关联分析命令"
Write-TestLog "========================================"

Test-Command -Name "correlate" -Command "correlate" -Description "运行关联分析"
Test-Command -Name "correlate_json" -Command "correlate --format json" -Description "以JSON格式运行关联分析"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第13部分: 多机器分析命令"
Write-TestLog "========================================"

Test-Command -Name "multi_analyze" -Command "multi analyze" -Description "多机器关联分析"
Test-Command -Name "multi_lateral" -Command "multi lateral" -Description "横向移动检测"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第14部分: UEBA 命令"
Write-TestLog "========================================"

Test-Command -Name "ueba_profiles" -Command "ueba profiles" -Description "显示用户行为画像"
Test-Command -Name "ueba_analyze" -Command "ueba analyze" -Description "运行 UEBA 分析"
Test-Command -Name "ueba_baseline" -Command "ueba baseline" -Description "显示用户基线"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第15部分: 实时监控命令"
Write-TestLog "========================================"

if (-not $SkipLive) {
    $liveJob = Start-Job -ScriptBlock {
        param($exe, $outDir)
        Start-Sleep -Seconds 3
        & $exe live collect 2>&1 | Select-Object -First 20
    } -ArgumentList $WinalogPath, $OutputDir
    
    Test-Command -Name "live_collect" -Command "live collect" -Description "实时监控" -ExpectedExitCode -1
    
    if ($liveJob.State -eq "Running") {
        Stop-Job $liveJob
        Remove-Job $liveJob
    }
} else {
    Write-TestLog "跳过实时监控测试 (--SkipLive 标志)" "WARN"
}

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第16部分: 取证命令"
Write-TestLog "========================================"

Test-Command -Name "forensics_hash" -Command "forensics hash `"$env:SystemRoot\system32\notepad.exe`"" -Description "计算文件哈希"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第17部分: 持久化检测命令"
Write-TestLog "========================================"

Test-Command -Name "persistence_detect" -Command "persistence detect" -Description "检测持久化机制"
Test-Command -Name "persistence_detect_json" -Command "persistence detect --format json" -Description "以JSON格式检测"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第18部分: 白名单命令"
Write-TestLog "========================================"

Test-Command -Name "whitelist_list" -Command "whitelist list" -Description "列出白名单"
Test-Command -Name "whitelist_add" -Command "whitelist add TestRule --event-id 4624 --reason `"Test`" --scope global --duration 60" -Description "添加白名单规则"
Test-Command -Name "whitelist_list_after_add" -Command "whitelist list" -Description "添加后列出白名单"
Test-Command -Name "whitelist_remove" -Command "whitelist remove TestRule" -Description "移除白名单规则"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第19部分: 配置命令"
Write-TestLog "========================================"

Test-Command -Name "config_get" -Command "config get" -Description "获取配置"
Test-Command -Name "config_get_specific" -Command "config get alert.retention_days" -Description "获取特定配置"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第20部分: SQL 查询命令"
Write-TestLog "========================================"

Test-Command -Name "query_count" -Command 'query "SELECT COUNT(*) FROM events"' -Description "SQL COUNT 查询"
Test-Command -Name "query_events" -Command 'query "SELECT * FROM events LIMIT 5"' -Description "SQL 查询事件"
Test-Command -Name "query_rules" -Command 'query "SELECT * FROM rules LIMIT 5"' -Description "SQL 查询规则"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第21部分: 仪表板命令"
Write-TestLog "========================================"

Test-Command -Name "dashboard" -Command "dashboard" -Description "显示仪表板"
Test-Command -Name "dashboard_json" -Command "dashboard --format json" -Description "以JSON格式显示仪表板"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第22部分: EVTX 转换命令"
Write-TestLog "========================================"

if ($testEvtx) {
    $evtx2csvCmd = "evtx2csv `"$testEvtx`" `"$OutputDir\test_output.csv`" --limit 100"
    Test-Command -Name "evtx2csv" -Command $evtx2csvCmd -Description "EVTX 转 CSV"
    
    if (Test-Path "$OutputDir\test_output.csv") {
        $csvContent = Get-Content "$OutputDir\test_output.csv" -TotalCount 5
        Write-TestLog "CSV 输出预览: $csvContent"
    }
} else {
    Write-TestLog "跳过 EVTX 转 CSV 测试 (无测试文件)" "WARN"
}

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第23部分: 数据库维护命令"
Write-TestLog "========================================"

Test-Command -Name "db_clean" -Command "db clean --days 365" -Description "清理旧数据"
Test-Command -Name "db_vacuum" -Command "db vacuum" -Description "优化数据库"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第24部分: 文件验证命令"
Write-TestLog "========================================"

Test-Command -Name "verify_file" -Command "verify `"$env:SystemRoot\system32\notepad.exe`"" -Description "验证文件完整性"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "第25部分: 仪表板命令"
Write-TestLog "========================================"

Test-Command -Name "tui_check" -Command "tui --help" -Description "TUI 命令存在性检查"

Write-TestLog ""
Write-TestLog "========================================"
Write-TestLog "测试完成"
Write-TestLog "========================================"

$passCount = ($Script:TestResults | Where-Object { $_.Status -eq "PASS" }).Count
$failCount = ($Script:TestResults | Where-Object { $_.Status -eq "FAIL" -or $_.Status -eq "ERROR" }).Count
$totalCount = $Script:TestResults.Count

Write-TestLog "========================================"
Write-TestLog "测试结果汇总"
Write-TestLog "========================================"
Write-TestLog "总测试数: $totalCount"
Write-TestLog "通过: $passCount"
Write-TestLog "失败: $failCount"
Write-TestLog "成功率: $([math]::Round($passCount/$totalCount*100, 2))%"
Write-TestLog "========================================"

$summaryFile = "$OutputDir\test_summary.json"
$summary = @{
    TestStartTime = $Script:TestStartTime
    TestEndTime = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    TotalTests = $totalCount
    PassedTests = $passCount
    FailedTests = $failCount
    SuccessRate = [math]::Round($passCount/$totalCount*100, 2)
    WinalogPath = $WinalogPath
    TestEvtxFile = $testEvtx
    Results = $Script:TestResults
} | ConvertTo-Json -Depth 10

$summary | Out-File -FilePath $summaryFile -Encoding UTF8
Write-TestLog "测试摘要已保存: $summaryFile"

$csvFile = "$OutputDir\test_results.csv"
$csvContent = "Name,Command,Description,ExitCode,ExpectedExitCode,Duration,Status`n"
foreach ($result in $Script:TestResults) {
    $csvContent += "`"$($result.Name)`",`"$($result.Command -replace '"', '""')`",`"$($result.Description -replace '"', '""')`",$($result.ExitCode),$($result.ExpectedExitCode),$([math]::Round($result.Duration, 3)),$($result.Status)`n"
}
$csvContent | Out-File -FilePath $csvFile -Encoding UTF8
Write-TestLog "测试结果CSV已保存: $csvFile"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "测试完成!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "结果目录: $OutputDir" -ForegroundColor Yellow
Write-Host "通过: $passCount / $totalCount" -ForegroundColor $(if ($failCount -eq 0) { "Green" } else { "Yellow" })
Write-Host "失败: $failCount / $totalCount" -ForegroundColor $(if ($failCount -gt 0) { "Red" } else { "Green" })

exit $(if ($failCount -gt 0) { 1 } else { 0 })
