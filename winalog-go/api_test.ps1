# WinLogAnalyzer-Go Web API Test Script
# Tests all API endpoints
# Usage: powershell -ExecutionPolicy Bypass -File api_test.ps1

param(
    [string]$BaseUrl = "http://localhost:8080/api",
    [string]$OutputDir = ".\api_test_results",
    [switch]$SkipLiveTests,
    [switch]$SkipImportTests
)

$ErrorActionPreference = "Continue"
$Script:TestResults = New-Object System.Collections.ArrayList
$Script:TestStartTime = Get-Date
$Script:BaseUrl = $BaseUrl

function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss.fff"
    $logEntry = "[$timestamp] [$Level] $Message"
    Write-Host $logEntry -ForegroundColor $(switch ($Level) {
        "ERROR" { "Red" }
        "WARN" { "Yellow" }
        "SUCCESS" { "Green" }
        "INFO" { "White" }
        default { "White" }
    })
    Add-Content -Path "$OutputDir\test_log.txt" -Value $logEntry
}

function Test-ApiRequest {
    param(
        [string]$Name,
        [string]$Method,
        [string]$Endpoint,
        [string]$Body = "",
        [string]$Description = "",
        [int]$ExpectedStatus = 200,
        [switch]$AllowRedirect
    )
    
    $result = @{
        Name = $Name
        Method = $Method
        Endpoint = $Endpoint
        Description = $Description
        StatusCode = 0
        Response = ""
        Duration = 0
        Status = "NOT_RUN"
        Timestamp = Get-Date
    }
    
    $outputFile = "$OutputDir\$($Name -replace '[^\w]', '_').json"
    
    Write-Log "Testing: $Name" "INFO"
    Write-Log "Method: $Method $Endpoint" "INFO"
    if ($Description) { Write-Log "Desc: $Description" "INFO" }
    
    $startTime = Get-Date
    
    try {
        $headers = @{"Content-Type" = "application/json"}
        
        $params = @{
            Uri = "$Script:BaseUrl$Endpoint"
            Method = $Method
            Headers = $headers
            TimeoutSec = 30
        }
        
        if ($Body) {
            $params.Body = $Body
        }
        
        if ($AllowRedirect) {
            $params.AllowRedirect = $true
        }
        
        $response = Invoke-WebRequest @params -ErrorAction SilentlyContinue
        
        $result.StatusCode = $response.StatusCode
        $result.Duration = (Get-Date) - $startTime
        
        $content = $response.Content
        $result.Response = $content
        
        $content | Out-File -FilePath $outputFile -Encoding UTF8
        
        if ($result.StatusCode -eq $ExpectedStatus -or ($ExpectedStatus -eq 0 -and $result.StatusCode -gt 0)) {
            $result.Status = "PASS"
            Write-Log "Status: PASS (HTTP $($result.StatusCode), Duration: $($result.Duration.TotalSeconds)s)" "SUCCESS"
        } else {
            $result.Status = "FAIL"
            Write-Log "Status: FAIL (HTTP $($result.StatusCode), Expected: $ExpectedStatus)" "ERROR"
        }
    }
    catch {
        $result.Status = "ERROR"
        $result.Response = $_.Exception.Message
        $result.Duration = (Get-Date) - $startTime
        Write-Log "Error: $($_.Exception.Message)" "ERROR"
    }
    
    $script:TestResults.Add($result) | Out-Null
    Write-Log "---" "INFO"
    
    return $result
}

function Test-ApiJsonPost {
    param(
        [string]$Name,
        [string]$Endpoint,
        [hashtable]$JsonBody,
        [string]$Description = "",
        [int]$ExpectedStatus = 200
    )
    
    $body = $JsonBody | ConvertTo-Json -Compress
    return Test-ApiRequest -Name $Name -Method "POST" -Endpoint $Endpoint -Body $body -Description $Description -ExpectedStatus $ExpectedStatus
}

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

Write-Log "========================================" "INFO"
Write-Log "WinLogAnalyzer-Go API Test Suite" "INFO"
Write-Log "========================================" "INFO"
Write-Log "Base URL: $BaseUrl" "INFO"
Write-Log "Start Time: $Script:TestStartTime" "INFO"

Write-Log "========================================" "INFO"
Write-Log "Part 1: Health Check" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "health_check" -Method "GET" -Endpoint "/health" -Description "Health check endpoint"

Write-Log "========================================" "INFO"
Write-Log "Part 2: Events API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "events_list" -Method "GET" -Endpoint "/events?page=1&page_size=10" -Description "List events with pagination"
Test-ApiRequest -Name "events_list_page2" -Method "GET" -Endpoint "/events?page=2&page_size=10" -Description "List events page 2"
Test-ApiRequest -Name "events_search" -Method "POST" -Endpoint "/events/search" -Body '{"keywords":"system","page_size":10}' -Description "Search events"
Test-ApiRequest -Name "events_search_levels" -Method "POST" -Endpoint "/events/search" -Body '{"levels":[4],"page_size":10}' -Description "Search by level"
Test-ApiRequest -Name "events_search_regex" -Method "POST" -Endpoint "/events/search" -Body '{"keywords":"4624|4625","regex":true,"page_size":10}' -Description "Regex search"
Test-ApiRequest -Name "events_search_time" -Method "POST" -Endpoint "/events/search" -Body '{"start_time":"2024-01-01T00:00:00Z","end_time":"2024-12-31T23:59:59Z","page_size":10}' -Description "Time range search"
Test-ApiRequest -Name "events_export_csv" -Method "POST" -Endpoint "/events/export" -Body '{"format":"csv","filters":{"limit":100}}' -Description "Export events as CSV"
Test-ApiRequest -Name "events_export_json" -Method "POST" -Endpoint "/events/export" -Body '{"format":"json","filters":{"limit":100}}' -Description "Export events as JSON"

Write-Log "========================================" "INFO"
Write-Log "Part 3: Alerts API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "alerts_list" -Method "GET" -Endpoint "/alerts?page=1&page_size=10" -Description "List alerts"
Test-ApiRequest -Name "alerts_list_high" -Method "GET" -Endpoint "/alerts?severity=high&page_size=10" -Description "List high severity alerts"
Test-ApiRequest -Name "alerts_list_unresolved" -Method "GET" -Endpoint "/alerts?resolved=false&page_size=10" -Description "List unresolved alerts"
Test-ApiRequest -Name "alerts_stats" -Method "GET" -Endpoint "/alerts/stats" -Description "Get alert statistics"
Test-ApiRequest -Name "alerts_trend" -Method "GET" -Endpoint "/alerts/trend?days=7" -Description "Get alert trend"
Test-ApiRequest -Name "alerts_run_analysis" -Method "POST" -Endpoint "/alerts/run-analysis" -Description "Run alert analysis"
Test-ApiRequest -Name "alerts_batch" -Method "POST" -Endpoint "/alerts/batch" -Body '{"ids":[1,2,3],"action":"resolve","notes":"Batch test"}' -Description "Batch operation"

Write-Log "========================================" "INFO"
Write-Log "Part 4: Timeline API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "timeline_list" -Method "GET" -Endpoint "/timeline?limit=50" -Description "Get timeline"
Test-ApiRequest -Name "timeline_stats" -Method "GET" -Endpoint "/timeline/stats" -Description "Get timeline stats"
Test-ApiRequest -Name "timeline_chains" -Method "GET" -Endpoint "/timeline/chains" -Description "Get attack chains"
Test-ApiRequest -Name "timeline_export_json" -Method "GET" -Endpoint "/timeline/export?format=json" -Description "Export timeline as JSON"
Test-ApiRequest -Name "timeline_export_csv" -Method "GET" -Endpoint "/timeline/export?format=csv" -Description "Export timeline as CSV"

Write-Log "========================================" "INFO"
Write-Log "Part 5: Dashboard API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "dashboard_stats" -Method "GET" -Endpoint "/dashboard/collection-stats" -Description "Get collection statistics"

Write-Log "========================================" "INFO"
Write-Log "Part 6: Rules API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "rules_list" -Method "GET" -Endpoint "/rules?page=1&page_size=20" -Description "List all rules"
Test-ApiRequest -Name "rules_list_enabled" -Method "GET" -Endpoint "/rules?enabled=true&page_size=20" -Description "List enabled rules"
Test-ApiRequest -Name "rules_templates" -Method "GET" -Endpoint "/rules/templates" -Description "List rule templates"
Test-ApiRequest -Name "rules_validate" -Method "POST" -Endpoint "/rules/validate" -Body '{"name":"TestRule","event_type":"single","conditions":[]}' -Description "Validate rule"
Test-ApiRequest -Name "rules_export" -Method "GET" -Endpoint "/rules/export?format=json" -Description "Export rules"

Write-Log "========================================" "INFO"
Write-Log "Part 7: System API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "system_info" -Method "GET" -Endpoint "/system/info" -Description "Get system info"
Test-ApiRequest -Name "system_metrics" -Method "GET" -Endpoint "/system/metrics" -Description "Get system metrics"
Test-ApiRequest -Name "system_processes" -Method "GET" -Endpoint "/system/processes?page=1&page_size=10" -Description "List processes"
Test-ApiRequest -Name "system_network" -Method "GET" -Endpoint "/system/network" -Description "Get network connections"
Test-ApiRequest -Name "system_users" -Method "GET" -Endpoint "/system/users" -Description "Get local users"
Test-ApiRequest -Name "system_tasks" -Method "GET" -Endpoint "/system/tasks" -Description "Get scheduled tasks"
Test-ApiRequest -Name "system_dlls" -Method "GET" -Endpoint "/system/dlls?page_size=10" -Description "Get loaded DLLs"
Test-ApiRequest -Name "system_drivers" -Method "GET" -Endpoint "/system/drivers" -Description "Get kernel drivers"
Test-ApiRequest -Name "system_env" -Method "GET" -Endpoint "/system/env" -Description "Get environment variables"
Test-ApiRequest -Name "system_registry" -Method "GET" -Endpoint "/system/registry" -Description "Get registry stats"

Write-Log "========================================" "INFO"
Write-Log "Part 8: Reports API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "reports_list" -Method "GET" -Endpoint "/reports" -Description "List reports"
Test-ApiJsonPost -Name "reports_generate_summary" -Endpoint "/reports" -JsonBody @{type="security_summary";format="json";title="Test Report"} -Description "Generate summary report"
Test-ApiJsonPost -Name "reports_generate_alert" -Endpoint "/reports" -JsonBody @{type="alert_report";format="json"} -Description "Generate alert report"
Test-ApiJsonPost -Name "reports_generate_event" -Endpoint "/reports" -JsonBody @{type="event_report";format="json"} -Description "Generate event report"
Test-ApiRequest -Name "report_templates" -Method "GET" -Endpoint "/report-templates" -Description "List report templates"
Test-ApiRequest -Name "reports_export" -Method "GET" -Endpoint "/reports/export?format=json" -Description "Export reports"

Write-Log "========================================" "INFO"
Write-Log "Part 9: UEBA API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiJsonPost -Name "ueba_analyze" -Endpoint "/ueba/analyze" -JsonBody @{start_time="2024-01-01T00:00:00Z";end_time="2024-12-31T23:59:59Z"} -Description "Analyze user behavior"
Test-ApiRequest -Name "ueba_profiles" -Method "GET" -Endpoint "/ueba/profiles?page=1&page_size=10" -Description "Get user profiles"
Test-ApiRequest -Name "ueba_anomaly_time" -Method "GET" -Endpoint "/ueba/anomaly/unusual_time" -Description "Get unusual time anomalies"
Test-ApiRequest -Name "ueba_anomaly_location" -Method "GET" -Endpoint "/ueba/anomaly/unusual_location" -Description "Get unusual location anomalies"

Write-Log "========================================" "INFO"
Write-Log "Part 10: Correlation API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiJsonPost -Name "correlation_analyze" -Endpoint "/correlation/analyze" -JsonBody @{window="5m"} -Description "Run correlation analysis"
Test-ApiJsonPost -Name "correlation_analyze_rules" -Endpoint "/correlation/analyze" -JsonBody @{rules=@("BruteForceDetection");"window"="5m"} -Description "Correlation with specific rules"

Write-Log "========================================" "INFO"
Write-Log "Part 11: Query API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiJsonPost -Name "query_execute_count" -Endpoint "/query/execute" -JsonBody @{sql="SELECT COUNT(*) FROM events";limit=10} -Description "Execute COUNT query"
Test-ApiJsonPost -Name "query_execute_select" -Endpoint "/query/execute" -JsonBody @{sql="SELECT * FROM events LIMIT 5";limit=10} -Description "Execute SELECT query"
Test-ApiJsonPost -Name "query_execute_pragma" -Endpoint "/query/execute" -JsonBody @{sql="PRAGMA table_info(events)"} -Description "Execute PRAGMA query"

Write-Log "========================================" "INFO"
Write-Log "Part 12: Monitor API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "monitor_stats" -Method "GET" -Endpoint "/monitor/stats" -Description "Get monitor statistics"
Test-ApiRequest -Name "monitor_events" -Method "GET" -Endpoint "/monitor/events?limit=20" -Description "List monitor events"
Test-ApiRequest -Name "monitor_events_process" -Method "GET" -Endpoint "/monitor/events?type=process&limit=10" -Description "List process events"
Test-ApiRequest -Name "monitor_events_network" -Method "GET" -Endpoint "/monitor/events?type=network&limit=10" -Description "List network events"
Test-ApiJsonPost -Name "monitor_config" -Endpoint "/monitor/config" -JsonBody @{process_monitoring=@{enabled=$true;interval_ms=5000}} -Description "Update monitor config"
Test-ApiJsonPost -Name "monitor_action_start" -Endpoint "/monitor/action" -JsonBody @{action="start"} -Description "Start monitor"
Test-ApiJsonPost -Name "monitor_action_stop" -Endpoint "/monitor/action" -JsonBody @{action="stop"} -Description "Stop monitor"

Write-Log "========================================" "INFO"
Write-Log "Part 13: Persistence API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "persistence_detect" -Method "GET" -Endpoint "/persistence/detect" -Description "Detect persistence mechanisms"
Test-ApiRequest -Name "persistence_categories" -Method "GET" -Endpoint "/persistence/categories" -Description "Get persistence categories"
Test-ApiRequest -Name "persistence_techniques" -Method "GET" -Endpoint "/persistence/techniques" -Description "Get MITRE techniques"
Test-ApiRequest -Name "persistence_detect_category" -Method "GET" -Endpoint "/persistence/detect?category=runkey" -Description "Detect runkey persistence"

Write-Log "========================================" "INFO"
Write-Log "Part 14: Forensics API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiJsonPost -Name "forensics_hash" -Endpoint "/forensics/hash" -JsonBody @{paths=@("$env:SystemRoot\System32\notepad.exe");algorithms=@("md5","sha256")} -Description "Calculate file hashes"
Test-ApiRequest -Name "forensics_signature" -Method "GET" -Endpoint "/forensics/signature?path=C:\Windows\System32\notepad.exe" -Description "Get file signature"
Test-ApiRequest -Name "forensics_is_signed" -Method "GET" -Endpoint "/forensics/is-signed?path=C:\Windows\System32\notepad.exe" -Description "Check if file is signed"
Test-ApiRequest -Name "forensics_evidence" -Method "GET" -Endpoint "/forensics/evidence?page=1&page_size=10" -Description "List evidence"
Test-ApiJsonPost -Name "forensics_collect" -Endpoint "/forensics/collect" -JsonBody @{targets=@("processes","network")} -Description "Collect forensic data"
Test-ApiJsonPost -Name "forensics_manifest" -Endpoint "/forensics/manifest" -JsonBody @{paths=@("$env:SystemRoot\System32")} -Description "Generate forensic manifest"
Test-ApiRequest -Name "forensics_chain_custody" -Method "GET" -Endpoint "/forensics/chain-of-custody" -Description "Get chain of custody"
Test-ApiRequest -Name "forensics_memory_dump" -Method "GET" -Endpoint "/forensics/memory-dump" -Description "Get memory dump info"

Write-Log "========================================" "INFO"
Write-Log "Part 15: Analyze API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "analyzers_list" -Method "GET" -Endpoint "/analyzers" -Description "List analyzers"
Test-ApiJsonPost -Name "analyze_hash" -Endpoint "/analyze/hash" -JsonBody @{target="$env:SystemRoot\System32\notepad.exe"} -Description "Analyze file hash"

Write-Log "========================================" "INFO"
Write-Log "Part 16: Settings API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "settings_get" -Method "GET" -Endpoint "/settings" -Description "Get settings"
Test-ApiJsonPost -Name "settings_update" -Endpoint "/settings" -JsonBody @{alert_retention_days=60} -Description "Update settings"
Test-ApiRequest -Name "settings_reset" -Method "POST" -Endpoint "/settings/reset" -Description "Reset settings"

Write-Log "========================================" "INFO"
Write-Log "Part 17: Suppress API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "suppress_list" -Method "GET" -Endpoint "/suppress?page=1&page_size=10" -Description "List suppression rules"
Test-ApiJsonPost -Name "suppress_create" -Endpoint "/suppress" -JsonBody @{name="TestSuppress";description="Test";enabled=$true;filter=@{event_ids=@(4624)}} -Description "Create suppression rule"

Write-Log "========================================" "INFO"
Write-Log "Part 18: Multi API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiJsonPost -Name "multi_analyze" -Endpoint "/multi/analyze" -JsonBody @{sources=@("security","system")} -Description "Multi-source analysis"
Test-ApiRequest -Name "multi_lateral" -Method "GET" -Endpoint "/multi/lateral" -Description "Detect lateral movement"

Write-Log "========================================" "INFO"
Write-Log "Part 19: Collect API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiJsonPost -Name "collect_start" -Endpoint "/collect" -JsonBody @{sources=@("security")} -Description "Start collection"
Test-ApiRequest -Name "collect_status" -Method "GET" -Endpoint "/collect/status?task_id=test" -Description "Get collection status" -ExpectedStatus 0

if (-not $SkipImportTests) {
    Write-Log "========================================" "INFO"
    Write-Log "Part 20: Import API" "INFO"
    Write-Log "========================================" "INFO"
    
    Test-ApiJsonPost -Name "import_logs" -Endpoint "/import/logs" -JsonBody @{files=@();alert_on_import=$false} -Description "Import logs (test empty)"
    Test-ApiRequest -Name "import_status" -Method "GET" -Endpoint "/import/status?path=test.evtx" -Description "Get import status"
}

if (-not $SkipLiveTests) {
    Write-Log "========================================" "INFO"
    Write-Log "Part 21: Live Events API" "INFO"
    Write-Log "========================================" "INFO"
    
    Test-ApiRequest -Name "live_stats" -Method "GET" -Endpoint "/live/stats" -Description "Get live stats"
}

Write-Log "========================================" "INFO"
Write-Log "Part 22: Policy API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "policy_templates" -Method "GET" -Endpoint "/policy-templates" -Description "List policy templates"
Test-ApiRequest -Name "policy_instances" -Method "GET" -Endpoint "/policy-instances" -Description "List policy instances"
Test-ApiJsonPost -Name "policy_create" -Endpoint "/policies" -JsonBody @{name="TestPolicy";rules=@()} -Description "Create policy"

Write-Log "========================================" "INFO"
Write-Log "Part 23: UI API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiRequest -Name "ui_dashboard" -Method "GET" -Endpoint "/ui/dashboard" -Description "Get UI dashboard"
Test-ApiRequest -Name "ui_alerts_groups" -Method "GET" -Endpoint "/ui/alerts/groups?group_by=rule&page_size=10" -Description "Get grouped alerts"
Test-ApiRequest -Name "ui_metrics" -Method "GET" -Endpoint "/ui/metrics?period=24h" -Description "Get UI metrics"
Test-ApiRequest -Name "ui_events_distribution" -Method "GET" -Endpoint "/ui/events/distribution?field=level&limit=10" -Description "Get event distribution"

Write-Log "========================================" "INFO"
Write-Log "Part 24: Collect Import API" "INFO"
Write-Log "========================================" "INFO"

Test-ApiJsonPost -Name "collect_import" -Endpoint "/collect/import" -JsonBody @{file_path="test.evtx";source_type="evtx"} -Description "Import collected data"

Write-Log "========================================" "INFO"
Write-Log "Test Complete - Generating Report" "INFO"
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
    BaseUrl = $Script:BaseUrl
    TestResults = $Script:TestResults
} | ConvertTo-Json -Depth 10

$summary | Out-File "$OutputDir\test_summary.json" -Encoding UTF8

$resultsCsv = $Script:TestResults | ForEach-Object {
    [PSCustomObject]@{
        Name = $_.Name
        Method = $_.Method
        Endpoint = $_.Endpoint
        Description = $_.Description
        StatusCode = $_.StatusCode
        DurationSeconds = [math]::Round($_.Duration.TotalSeconds, 3)
        Status = $_.Status
        Timestamp = $_.Timestamp.ToString("yyyy-MM-dd HH:mm:ss")
    }
}
$resultsCsv | Export-Csv -Path "$OutputDir\test_results.csv" -NoTypeInformation -Encoding UTF8

Write-Log "========================================" "INFO"
Write-Log "Test Results Summary" "INFO"
Write-Log "========================================" "INFO"
Write-Log "Total Tests: $totalCount" "INFO"
Write-Log "Passed: $passCount ($([math]::Round($passCount/$totalCount*100, 1))%)" $(if ($failCount -eq 0 -and $errorCount -eq 0) { "SUCCESS" } else { "WARN" })
Write-Log "Failed: $failCount" $(if ($failCount -gt 0) { "ERROR" } else { "SUCCESS" })
Write-Log "Errors: $errorCount" $(if ($errorCount -gt 0) { "ERROR" } else { "SUCCESS" })
Write-Log "========================================" "INFO"
Write-Log "Output Directory: $OutputDir" "INFO"
Write-Log "========================================" "INFO"

$failedTests = $Script:TestResults | Where-Object { $_.Status -ne "PASS" }
if ($failedTests) {
    Write-Log "Failed Tests:" "ERROR"
    foreach ($test in $failedTests) {
        Write-Log "  - $($test.Name): $($test.Method) $($test.Endpoint)" "ERROR"
        if ($test.Response -and $test.Response.Length -gt 0) {
            Write-Log "    Response: $($test.Response.Substring(0, [math]::Min(200, $test.Response.Length)))" "ERROR"
        }
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "API Test Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Output Dir: $OutputDir" -ForegroundColor Yellow
Write-Host "Summary: $OutputDir\test_summary.json" -ForegroundColor Yellow
Write-Host "CSV: $OutputDir\test_results.csv" -ForegroundColor Yellow
Write-Host ""
Write-Host "Result: $passCount/$totalCount passed" -ForegroundColor $(if ($failCount -eq 0) { "Green" } else { "Yellow" })

exit $(if ($failCount -gt 0 -or $errorCount -gt 0) { 1 } else { 0 })
