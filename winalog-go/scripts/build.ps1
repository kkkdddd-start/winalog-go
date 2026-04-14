# Windows Build Script for WinLogAnalyzer-Go
#
# 使用方法:
#   .\build.ps1
#   .\build.ps1 -Target 386
#   .\build.ps1 -Clean

param(
    [string]$Target = "amd64",
    [string]$Output = "dist",
    [switch]$Clean
)

$ErrorActionPreference = "Stop"

$PROJECT_ROOT = Split-Path -Parent $PSScriptRoot
if (-not $PROJECT_ROOT) {
    $PROJECT_ROOT = Get-Location
}

Write-Host "=== WinLogAnalyzer Windows Build ===" -ForegroundColor Cyan
Write-Host "Project: $PROJECT_ROOT"
Write-Host "Target:  $Target"
Write-Host "Output:  $Output"
Write-Host ""

if ($Clean) {
    Write-Host "[CLEAN] Removing previous build artifacts..." -ForegroundColor Yellow
    if (Test-Path "$PROJECT_ROOT\$Output") {
        Remove-Item -Recurse -Force "$PROJECT_ROOT\$Output"
    }
    if (Test-Path "$PROJECT_ROOT\winalog.exe") {
        Remove-Item -Force "$PROJECT_ROOT\winalog.exe"
    }
    Write-Host "[CLEAN] Done" -ForegroundColor Green
    Write-Host ""
}

if (-not (Test-Path "$PROJECT_ROOT\$Output")) {
    New-Item -ItemType Directory -Path "$PROJECT_ROOT\$Output" | Out-Null
}

switch ($Target) {
    "amd64" { $GOOS = "windows"; $GOARCH = "amd64" }
    "386"   { $GOOS = "windows"; $GOARCH = "386" }
    "arm64" { $GOOS = "windows"; $GOARCH = "arm64" }
    default {
        Write-Host "[ERROR] Unknown target: $Target" -ForegroundColor Red
        exit 1
    }
}

$OUTPUT_NAME = "winalog-$Target.exe"
$OUTPUT_PATH = "$PROJECT_ROOT\$Output\$OUTPUT_NAME"

Write-Host "[BUILD] Compiling for $GOOS/$GOARCH..." -ForegroundColor Yellow

$env:GOOS = $GOOS
$env:GOARCH = $GOARCH

try {
    Push-Location $PROJECT_ROOT
    go build -ldflags="-s -w" -o $OUTPUT_PATH ./cmd/winalog
    if ($LASTEXITCODE -ne 0) {
        throw "Build failed with exit code $LASTEXITCODE"
    }
    Pop-Location
    
    $fileSize = (Get-Item $OUTPUT_PATH).Length
    $fileSizeMB = [math]::Round($fileSize / 1MB, 2)
    
    Write-Host ""
    Write-Host "[BUILD] Success!" -ForegroundColor Green
    Write-Host "  Output: $OUTPUT_PATH"
    Write-Host "  Size:   $fileSizeMB MB"
    Write-Host ""
    
    if (Test-Path $OUTPUT_PATH) {
        Write-Host "[VERIFY] File exists: OK" -ForegroundColor Green
        $bytes = [System.IO.File]::ReadAllBytes($OUTPUT_PATH)[0..1]
        if ($bytes[0] -eq 0x4D -and $bytes[1] -eq 0x5A) {
            Write-Host "[VERIFY] PE header: OK (MZ)" -ForegroundColor Green
        }
    }
    
} catch {
    Write-Host ""
    Write-Host "[ERROR] Build failed: $_" -ForegroundColor Red
    Pop-Location
    exit 1
}

Write-Host "=== Build Complete ===" -ForegroundColor Cyan
