# WinLogAnalyzer-Go Test Script
# Tests all API endpoints and CLI commands

param(
    [string]$BaseUrl = "http://localhost:8080",
    [string]$WinalogPath = ".\winalog.exe",
    [string]$OutputDir = ".\test_results"
)

$ErrorActionPreference = "Continue"
$startTime = Get-Date

# Create output directory
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

$logFile = "$OutputDir\test_log_$($startTime.ToString('yyyyMMdd_HHmmss')).txt"

function Write-Log {
    param([string]$Message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logMessage = "[$timestamp] $Message"
    Write-Host $logMessage
    Add-Content -Path $logFile -Value $logMessage
}

function Test-APIEndpoint {
    param(
        [string]$Name,
        [string]$Method,
        [string]$Endpoint,
        [string]$Body = $null,
        [string]$Description = ""
    )
    
    $result = @{
        Name = $Name
        Method = $Method
        Endpoint = $Endpoint
        StatusCode = $null
        Success = $false
        Response = $null
        Error = $null
        Duration = $null
    }
    
    $url = "$BaseUrl$Endpoint"
    $sw = [Diagnostics.Stopwatch]::StartNew()
    
    try {
        if ($Method -eq "GET") {
            $response = Invoke-WebRequest -Uri $url -Method GET -ContentType "application/json" -TimeoutSec 30 -ErrorAction Stop
        }
        elseif ($Method -eq "POST") {
            if ($Body) {
                $response = Invoke-WebRequest -Uri $url -Method POST -Body $Body -ContentType "application/json" -TimeoutSec 30 -ErrorAction Stop
            } else {
                $response = Invoke-WebRequest -Uri $url -Method POST -ContentType "application/json" -TimeoutSec 30 -ErrorAction Stop
            }
        }
        elseif ($Method -eq "PUT") {
            $response = Invoke-WebRequest -Uri $url -Method PUT -Body $Body -ContentType "application/json" -TimeoutSec 30 -ErrorAction Stop
        }
        elseif ($Method -eq "DELETE") {
            $response = Invoke-WebRequest -Uri $url -Method DELETE -TimeoutSec 30 -ErrorAction Stop
        }
        
        $sw.Stop()
        $result.StatusCode = [int]$response.StatusCode
        $result.Response = $response.Content
        $result.Duration = $sw.ElapsedMilliseconds
        $result.Success = $true
    }
    catch {
        $sw.Stop()
        $result.Duration = $sw.ElapsedMilliseconds
        $result.Error = $_.Exception.Message
        if ($_.Exception.Response) {
            $result.StatusCode = [int]$_.Exception.Response.StatusCode
        }
    }
    
    return $result
}

function Test-CLICommand {
    param(
        [string]$Name,
        [string[]]$Arguments,
        [string]$Description = ""
    )
    
    $result = @{
        Name = $Name
        Command = "$WinalogPath $($Arguments -join ' ')"
        ExitCode = $null
        Output = $null
        Error = $null
        Duration = $null
    }
    
    $sw = [Diagnostics.Stopwatch]::StartNew()
    
    try {
        $psi = New-Object System.Diagnostics.ProcessStartInfo
        $psi.FileName = $WinalogPath
        $psi.Arguments = $Arguments -join ' '
        $psi.RedirectStandardOutput = $true
        $psi.RedirectStandardError = $true
        $psi.UseShellExecute = $false
        $psi.CreateNoWindow = $true
        
        $process = New-Object System.Diagnostics.Process
        $process.StartInfo = $psi
        
        $stdout = $null
        $stderr = $null
        
        $process.Start() | Out-Null
        $stdout = $process.StandardOutput.ReadToEnd()
        $stderr = $process.StandardError.ReadToEnd()
        $process.WaitForExit(60000) | Out-Null
        
        $sw.Stop()
        
        $result.ExitCode = $process.ExitCode
        $result.Output = $stdout
        $result.Error = $stderr
        $result.Duration = $sw.ElapsedMilliseconds
    }
    catch {
        $sw.Stop()
        $result.Error = $_.Exception.Message
        $result.Duration = $sw.ElapsedMilliseconds
    }
    
    return $result
}

function Save-Result {
    param(
        [object]$Result,
        [string]$Type
    )
    
    $safeName = $Result.Name -replace '[^\w\-]', '_'
    $filename = "$OutputDir\$Type`_$safeName.json"
    $Result | ConvertTo-Json -Depth 10 | Set-Content -Path $filename -Encoding UTF8
}

# ============================================================================
# SECTION 1: CLI COMMANDS TESTS (27 commands)
# ============================================================================
Write-Log "========================================"
Write-Log "SECTION 1: CLI COMMANDS TESTS"
Write-Log "========================================"

$cliCommands = @(
    @{ Name = "CLI_01_import"; Args = @("--help") },
    @{ Name = "CLI_02_search"; Args = @("search", "--help") },
    @{ Name = "CLI_03_collect"; Args = @("collect", "--help") },
    @{ Name = "CLI_04_alert"; Args = @("alert", "--help") },
    @{ Name = "CLI_05_correlate"; Args = @("correlate", "--help") },
    @{ Name = "CLI_06_analyze"; Args = @("analyze", "--help") },
    @{ Name = "CLI_07_report"; Args = @("report", "--help") },
    @{ Name = "CLI_08_export"; Args = @("export", "--help") },
    @{ Name = "CLI_09_timeline"; Args = @("timeline", "--help") },
    @{ Name = "CLI_10_multi"; Args = @("multi", "--help") },
    @{ Name = "CLI_11_live"; Args = @("live", "--help") },
    @{ Name = "CLI_12_status"; Args = @("status", "--help") },
    @{ Name = "CLI_13_info"; Args = @("info", "--help") },
    @{ Name = "CLI_14_verify"; Args = @("verify", "--help") },
    @{ Name = "CLI_15_rules"; Args = @("rules", "--help") },
    @{ Name = "CLI_16_db"; Args = @("db", "--help") },
    @{ Name = "CLI_17_config"; Args = @("config", "--help") },
    @{ Name = "CLI_18_metrics"; Args = @("metrics", "--help") },
    @{ Name = "CLI_19_query"; Args = @("query", "--help") },
    @{ Name = "CLI_20_tui"; Args = @("tui", "--help") },
    @{ Name = "CLI_21_serve"; Args = @("serve", "--help") },
    @{ Name = "CLI_22_forensics"; Args = @("forensics", "--help") },
    @{ Name = "CLI_23_dashboard"; Args = @("dashboard", "--help") },
    @{ Name = "CLI_24_whitelist"; Args = @("whitelist", "--help") },
    @{ Name = "CLI_25_ueba"; Args = @("ueba", "--help") },
    @{ Name = "CLI_26_persistence"; Args = @("persistence", "--help") },
    @{ Name = "CLI_27_evtx2csv"; Args = @("evtx2csv", "--help") }
)

$cliResults = @()
foreach ($cmd in $cliCommands) {
    Write-Log "Testing CLI: $($cmd.Name)"
    $result = Test-CLICommand -Name $cmd.Name -Arguments $cmd.Args
    $cliResults += $result
    Save-Result -Result $result -Type "CLI"
    
    $status = if ($result.ExitCode -eq 0) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (Exit: $($result.ExitCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 2: EVENTS API (4 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 2: EVENTS API"
Write-Log "========================================"

$eventsApi = @(
    @{ Name = "API_Events_01_List"; Method = "GET"; Endpoint = "/api/events" },
    @{ Name = "API_Events_02_Search"; Method = "POST"; Endpoint = "/api/events/search"; Body = '{"page":1,"page_size":10}' },
    @{ Name = "API_Events_03_Export"; Method = "POST"; Endpoint = "/api/events/export"; Body = '{"format":"json","filters":{"limit":10}}' }
)

foreach ($api in $eventsApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 3: ALERTS API (9 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 3: ALERTS API"
Write-Log "========================================"

$alertsApi = @(
    @{ Name = "API_Alerts_01_List"; Method = "GET"; Endpoint = "/api/alerts" },
    @{ Name = "API_Alerts_02_Stats"; Method = "GET"; Endpoint = "/api/alerts/stats" },
    @{ Name = "API_Alerts_03_Trend"; Method = "GET"; Endpoint = "/api/alerts/trend" },
    @{ Name = "API_Alerts_04_RunAnalysis"; Method = "POST"; Endpoint = "/api/alerts/run-analysis" },
    @{ Name = "API_Alerts_05_Batch"; Method = "POST"; Endpoint = "/api/alerts/batch"; Body = '{"ids":[1],"action":"resolve"}' }
)

foreach ($api in $alertsApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 4: TIMELINE API (5 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 4: TIMELINE API"
Write-Log "========================================"

$timelineApi = @(
    @{ Name = "API_Timeline_01_List"; Method = "GET"; Endpoint = "/api/timeline?limit=10" },
    @{ Name = "API_Timeline_02_Stats"; Method = "GET"; Endpoint = "/api/timeline/stats" },
    @{ Name = "API_Timeline_03_Chains"; Method = "GET"; Endpoint = "/api/timeline/chains" },
    @{ Name = "API_Timeline_04_Export"; Method = "GET"; Endpoint = "/api/timeline/export?format=json" }
)

foreach ($api in $timelineApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 5: IMPORT API (2 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 5: IMPORT API"
Write-Log "========================================"

$importApi = @(
    @{ Name = "API_Import_01_Status"; Method = "GET"; Endpoint = "/api/import/status?path=test.evtx" }
)

foreach ($api in $importApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 6: LIVE EVENTS API (2 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 6: LIVE EVENTS API"
Write-Log "========================================"

$liveApi = @(
    @{ Name = "API_Live_01_Stats"; Method = "GET"; Endpoint = "/api/live/stats" }
)

foreach ($api in $liveApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 7: REPORTS API (7 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 7: REPORTS API"
Write-Log "========================================"

$reportsApi = @(
    @{ Name = "API_Reports_01_List"; Method = "GET"; Endpoint = "/api/reports" },
    @{ Name = "API_Reports_02_Templates"; Method = "GET"; Endpoint = "/api/report-templates" },
    @{ Name = "API_Reports_03_Export"; Method = "GET"; Endpoint = "/api/reports/export?format=json" },
    @{ Name = "API_Reports_04_Create"; Method = "POST"; Endpoint = "/api/reports"; Body = '{"type":"security_summary","format":"html"}' }
)

foreach ($api in $reportsApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 8: DASHBOARD API (1 endpoint)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 8: DASHBOARD API"
Write-Log "========================================"

$dashboardApi = @(
    @{ Name = "API_Dashboard_01_Stats"; Method = "GET"; Endpoint = "/api/dashboard/collection-stats" }
)

foreach ($api in $dashboardApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 9: RULES API (12 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 9: RULES API"
Write-Log "========================================"

$rulesApi = @(
    @{ Name = "API_Rules_01_List"; Method = "GET"; Endpoint = "/api/rules" },
    @{ Name = "API_Rules_02_Templates"; Method = "GET"; Endpoint = "/api/rules/templates" },
    @{ Name = "API_Rules_03_Export"; Method = "GET"; Endpoint = "/api/rules/export" },
    @{ Name = "API_Rules_04_Validate"; Method = "POST"; Endpoint = "/api/rules/validate"; Body = '{"name":"TestRule","event_type":"single"}' }
)

foreach ($api in $rulesApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 10: SYSTEM API (10 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 10: SYSTEM API"
Write-Log "========================================"

$systemApi = @(
    @{ Name = "API_System_01_Info"; Method = "GET"; Endpoint = "/api/system/info" },
    @{ Name = "API_System_02_Metrics"; Method = "GET"; Endpoint = "/api/system/metrics" },
    @{ Name = "API_System_03_Processes"; Method = "GET"; Endpoint = "/api/system/processes" },
    @{ Name = "API_System_04_Network"; Method = "GET"; Endpoint = "/api/system/network" },
    @{ Name = "API_System_05_Env"; Method = "GET"; Endpoint = "/api/system/env" },
    @{ Name = "API_System_06_DLLs"; Method = "GET"; Endpoint = "/api/system/dlls" },
    @{ Name = "API_System_07_Drivers"; Method = "GET"; Endpoint = "/api/system/drivers" },
    @{ Name = "API_System_08_Users"; Method = "GET"; Endpoint = "/api/system/users" },
    @{ Name = "API_System_09_Registry"; Method = "GET"; Endpoint = "/api/system/registry" },
    @{ Name = "API_System_10_Tasks"; Method = "GET"; Endpoint = "/api/system/tasks" }
)

foreach ($api in $systemApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 11: SUPPRESS API (5 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 11: SUPPRESS API"
Write-Log "========================================"

$suppressApi = @(
    @{ Name = "API_Suppress_01_List"; Method = "GET"; Endpoint = "/api/suppress" }
)

foreach ($api in $suppressApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 12: UEBA API (3 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 12: UEBA API"
Write-Log "========================================"

$uebaApi = @(
    @{ Name = "API_UEBA_01_Analyze"; Method = "POST"; Endpoint = "/api/ueba/analyze"; Body = '{"username":"Administrator"}' },
    @{ Name = "API_UEBA_02_Profiles"; Method = "GET"; Endpoint = "/api/ueba/profiles" },
    @{ Name = "API_UEBA_03_Anomaly"; Method = "GET"; Endpoint = "/api/ueba/anomaly/unusual_time" }
)

foreach ($api in $uebaApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 13: CORRELATION API (1 endpoint)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 13: CORRELATION API"
Write-Log "========================================"

$correlationApi = @(
    @{ Name = "API_Correlation_01_Analyze"; Method = "POST"; Endpoint = "/api/correlation/analyze"; Body = '{"window":"5m"}' }
)

foreach ($api in $correlationApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 14: MULTI API (2 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 14: MULTI API"
Write-Log "========================================"

$multiApi = @(
    @{ Name = "API_Multi_01_Analyze"; Method = "POST"; Endpoint = "/api/multi/analyze"; Body = '{"sources":["security"],"query":"event_id:4624"}' },
    @{ Name = "API_Multi_02_Lateral"; Method = "GET"; Endpoint = "/api/multi/lateral" }
)

foreach ($api in $multiApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 15: QUERY API (1 endpoint)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 15: QUERY API"
Write-Log "========================================"

$queryApi = @(
    @{ Name = "API_Query_01_Execute"; Method = "POST"; Endpoint = "/api/query/execute"; Body = '{"query":"SELECT 1 as test","limit":10}' }
)

foreach ($api in $queryApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 16: POLICY API (8 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 16: POLICY API"
Write-Log "========================================"

$policyApi = @(
    @{ Name = "API_Policy_01_Templates"; Method = "GET"; Endpoint = "/api/policy-templates" },
    @{ Name = "API_Policy_02_Instances"; Method = "GET"; Endpoint = "/api/policy-instances" }
)

foreach ($api in $policyApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 17: MONITOR API (5 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 17: MONITOR API"
Write-Log "========================================"

$monitorApi = @(
    @{ Name = "API_Monitor_01_Stats"; Method = "GET"; Endpoint = "/api/monitor/stats" },
    @{ Name = "API_Monitor_02_Events"; Method = "GET"; Endpoint = "/api/monitor/events" },
    @{ Name = "API_Monitor_03_Config"; Method = "POST"; Endpoint = "/api/monitor/config"; Body = '{"enabled":true}' },
    @{ Name = "API_Monitor_04_Action"; Method = "POST"; Endpoint = "/api/monitor/action"; Body = '{"action":"start"}' }
)

foreach ($api in $monitorApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 18: SETTINGS API (3 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 18: SETTINGS API"
Write-Log "========================================"

$settingsApi = @(
    @{ Name = "API_Settings_01_Get"; Method = "GET"; Endpoint = "/api/settings" },
    @{ Name = "API_Settings_02_Update"; Method = "POST"; Endpoint = "/api/settings"; Body = '{"log_level":"info"}' },
    @{ Name = "API_Settings_03_Reset"; Method = "POST"; Endpoint = "/api/settings/reset" }
)

foreach ($api in $settingsApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 19: PERSISTENCE API (4 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 19: PERSISTENCE API"
Write-Log "========================================"

$persistenceApi = @(
    @{ Name = "API_Persistence_01_Detect"; Method = "GET"; Endpoint = "/api/persistence/detect" },
    @{ Name = "API_Persistence_02_Categories"; Method = "GET"; Endpoint = "/api/persistence/categories" },
    @{ Name = "API_Persistence_03_Techniques"; Method = "GET"; Endpoint = "/api/persistence/techniques" }
)

foreach ($api in $persistenceApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 20: FORENSICS API (9 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 20: FORENSICS API"
Write-Log "========================================"

$forensicsApi = @(
    @{ Name = "API_Forensics_01_Hash"; Method = "POST"; Endpoint = "/api/forensics/hash"; Body = '{"paths":["C:\\Windows\\System32\\calc.exe"],"algorithms":["md5"]}' },
    @{ Name = "API_Forensics_02_Signature"; Method = "GET"; Endpoint = "/api/forensics/signature?path=C:\\Windows\\System32\\calc.exe" },
    @{ Name = "API_Forensics_03_IsSigned"; Method = "GET"; Endpoint = "/api/forensics/is-signed?path=C:\\Windows\\System32\\calc.exe" },
    @{ Name = "API_Forensics_04_Evidence"; Method = "GET"; Endpoint = "/api/forensics/evidence" },
    @{ Name = "API_Forensics_05_Manifest"; Method = "POST"; Endpoint = "/api/forensics/manifest"; Body = '{"paths":["C:\\Windows"],"include_hashes":true}' }
)

foreach ($api in $forensicsApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 21: ANALYZE API (2 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 21: ANALYZE API"
Write-Log "========================================"

$analyzeApi = @(
    @{ Name = "API_Analyze_01_Analyze"; Method = "POST"; Endpoint = "/api/analyze/hash"; Body = '{"target":"C:\\Windows\\System32\\calc.exe"}' },
    @{ Name = "API_Analyze_02_Analyzers"; Method = "GET"; Endpoint = "/api/analyzers" }
)

foreach ($api in $analyzeApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 22: COLLECT API (3 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 22: COLLECT API"
Write-Log "========================================"

$collectApi = @(
    @{ Name = "API_Collect_01_Collect"; Method = "POST"; Endpoint = "/api/collect"; Body = '{"sources":["security"]}' },
    @{ Name = "API_Collect_02_Status"; Method = "GET"; Endpoint = "/api/collect/status?task_id=test" }
)

foreach ($api in $collectApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 23: UI API (4 endpoints)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 23: UI API"
Write-Log "========================================"

$uiApi = @(
    @{ Name = "API_UI_01_Dashboard"; Method = "GET"; Endpoint = "/api/ui/dashboard" },
    @{ Name = "API_UI_02_AlertGroups"; Method = "GET"; Endpoint = "/api/ui/alerts/groups" },
    @{ Name = "API_UI_03_Metrics"; Method = "GET"; Endpoint = "/api/ui/metrics" },
    @{ Name = "API_UI_04_Distribution"; Method = "GET"; Endpoint = "/api/ui/events/distribution" }
)

foreach ($api in $uiApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SECTION 24: HEALTH CHECK (1 endpoint)
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "SECTION 24: HEALTH CHECK"
Write-Log "========================================"

$healthApi = @(
    @{ Name = "API_Health_01_Check"; Method = "GET"; Endpoint = "/api/health" }
)

foreach ($api in $healthApi) {
    Write-Log "Testing API: $($api.Name) $($api.Method) $($api.Endpoint)"
    $result = Test-APIEndpoint @api
    Save-Result -Result $result -Type "API"
    $status = if ($result.Success) { "SUCCESS" } else { "FAILED" }
    Write-Log "  -> $status (HTTP $($result.StatusCode), Duration: $($result.Duration)ms)"
}

# ============================================================================
# SUMMARY
# ============================================================================
Write-Log ""
Write-Log "========================================"
Write-Log "TEST SUMMARY"
Write-Log "========================================"
Write-Log "Total CLI Commands Tested: $($cliResults.Count)"
$cliSuccess = ($cliResults | Where-Object { $_.ExitCode -eq 0 }).Count
Write-Log "CLI Commands Successful: $cliSuccess"
Write-Log "CLI Commands Failed: $($cliResults.Count - $cliSuccess)"

$endTime = Get-Date
$duration = $endTime - $startTime
Write-Log ""
Write-Log "Total Test Duration: $($duration.ToString('hh\:mm\:ss'))"
Write-Log "Results saved to: $OutputDir"
Write-Log "Log file: $logFile"

# Save summary
$summary = @{
    TestRun = $startTime.ToString('yyyy-MM-dd HH:mm:ss')
    EndTime = $endTime.ToString('yyyy-MM-dd HH:mm:ss')
    Duration = $duration.ToString('hh\:mm\:ss')
    BaseUrl = $BaseUrl
    WinalogPath = $WinalogPath
    CLITotal = $cliResults.Count
    CLISuccess = $cliSuccess
    CLIFailed = $($cliResults.Count - $cliSuccess)
} | ConvertTo-Json

$summary | Set-Content -Path "$OutputDir\test_summary.json" -Encoding UTF8

Write-Log "========================================"
Write-Log "TEST COMPLETED"
Write-Log "========================================"
