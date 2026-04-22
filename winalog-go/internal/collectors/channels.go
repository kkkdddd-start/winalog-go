package collectors

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/url"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type LogChannelInfo struct {
	Name    string `json:"name"`
	LogPath string `json:"log_path"`
	IsEVTX  bool   `json:"is_evtx"`
}

// GetRegisteredChannels 获取系统注册的日志通道
func GetRegisteredChannels() ([]string, error) {
	cmd := `Get-WinEvent -ListLog * -ErrorAction SilentlyContinue | Where-Object { $_.RecordCount -gt 0 } | Select-Object -First 200 -ExpandProperty LogName`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return nil, fmt.Errorf("failed to get channels: %v", result.Error)
	}

	lines := strings.Split(strings.TrimSpace(result.Output), "\n")
	var channels []string
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line != "" {
			channels = append(channels, line)
		}
	}

	return channels, nil
}

// GetChannelFilePaths 获取日志通道及其对应的文件路径
func GetChannelFilePaths() ([]LogChannelInfo, error) {
	cmd := exec.Command("powershell", "-NoProfile", "-NonInteractive", "-Command", `
		[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
		$channels = @()
		
		Get-WinEvent -ListLog * -ErrorAction SilentlyContinue | Select-Object -First 200 | ForEach-Object {
			$logName = $_.LogName
			$logPath = $_.FileName
			$isEVTX = $false
			
			if ($logPath -and $logPath.EndsWith(".evtx", [StringComparison]::OrdinalIgnoreCase)) {
				$isEVTX = $true
			} elseif (-not $logPath -or $logPath -eq "") {
				$logPath = Join-Path $env:SystemRoot "System32\winevt\Logs\$logName.evtx"
			}
			
			$channels += [PSCustomObject]@{
				Name = $logName
				LogPath = $logPath
				IsEVTX = $isEVTX
			}
		}
		
		$channels | ConvertTo-Json -Compress
	`)

	var out bytes.Buffer
	cmd.Stdout = &out
	cmd.Stderr = nil

	if err := cmd.Run(); err != nil {
		return GetChannelFilePathsFallback()
	}

	return parseChannelFilePaths(out.String())
}

func GetChannelFilePathsFallback() ([]LogChannelInfo, error) {
	logDir := filepath.Join(os.Getenv("SystemRoot"), "System32", "winevt", "Logs")

	entries, err := os.ReadDir(logDir)
	if err != nil {
		return nil, fmt.Errorf("failed to read log directory: %w", err)
	}

	var channels []LogChannelInfo
	for _, entry := range entries {
		if entry.IsDir() {
			continue
		}

		name := entry.Name()
		if !strings.HasSuffix(strings.ToLower(name), ".evtx") {
			continue
		}

		channelName := strings.TrimSuffix(name, ".evtx")
		channelName = strings.ReplaceAll(channelName, "%2F", "/")
		channelName, _ = url.QueryUnescape(channelName)

		channels = append(channels, LogChannelInfo{
			Name:    channelName,
			LogPath: filepath.Join(logDir, name),
			IsEVTX:  true,
		})
	}

	return channels, nil
}

func parseChannelFilePaths(output string) ([]LogChannelInfo, error) {
	var channels []LogChannelInfo

	output = strings.TrimSpace(output)
	if output == "" || output == "null" {
		return GetChannelFilePathsFallback()
	}

	var jsonData []map[string]interface{}
	if strings.HasPrefix(output, "[") {
		if err := json.Unmarshal([]byte(output), &jsonData); err != nil {
			return GetChannelFilePathsFallback()
		}
	} else if strings.HasPrefix(output, "{") {
		var item map[string]interface{}
		if err := json.Unmarshal([]byte(output), &item); err != nil {
			return GetChannelFilePathsFallback()
		}
		jsonData = append(jsonData, item)
	} else {
		return GetChannelFilePathsFallback()
	}

	for _, item := range jsonData {
		name, _ := item["Name"].(string)
		logPath, _ := item["LogPath"].(string)
		isEVTX, _ := item["IsEVTX"].(bool)

		if name != "" && logPath != "" {
			decodedName, _ := url.QueryUnescape(name)
			channels = append(channels, LogChannelInfo{
				Name:    decodedName,
				LogPath: logPath,
				IsEVTX:  isEVTX,
			})
		}
	}

	if len(channels) == 0 {
		return GetChannelFilePathsFallback()
	}

	return channels, nil
}

// CategorizeChannel 分类日志通道
func CategorizeChannel(name string) string {
	switch {
	case matchRegex(`^(?i)Security$`, name):
		return "Windows Event Logs"
	case matchRegex(`^(?i)System$`, name):
		return "Windows Event Logs"
	case matchRegex(`^(?i)Application$`, name):
		return "Windows Event Logs"
	case matchRegex(`^(?i)Setup$`, name):
		return "Windows Event Logs"
	case matchRegex(`(?i)Sysmon`, name):
		return "Sysmon"
	case matchRegex(`(?i)PowerShell`, name):
		return "PowerShell"
	case matchRegex(`(?i)WMI-Activity`, name):
		return "WMI"
	case matchRegex(`(?i)TaskScheduler`, name):
		return "Task Scheduler"
	case matchRegex(`(?i)^Microsoft-Windows-`, name):
		return "Microsoft Windows"
	default:
		return "Other"
	}
}

// matchRegex 简单的正则匹配
func matchRegex(pattern, s string) bool {
	pattern = strings.Trim(pattern, "^$")
	if strings.HasPrefix(pattern, "(?i)") {
		pattern = strings.TrimPrefix(pattern, "(?i)")
		return strings.Contains(strings.ToLower(s), strings.ToLower(pattern))
	}
	return strings.Contains(s, pattern)
}

// isFormatEnabled 检查格式是否启用
func isFormatEnabled(formats []string, format string) bool {
	for _, f := range formats {
		if f == format {
			return true
		}
	}
	return false
}

// shouldExcludeChannel 检查是否应该排除通道
func shouldExcludeChannel(channel string, excludePatterns []string) bool {
	for _, pattern := range excludePatterns {
		if strings.Contains(pattern, "*") {
			prefix := strings.TrimSuffix(pattern, "*")
			if strings.HasPrefix(channel, prefix) {
				return true
			}
		} else if channel == pattern {
			return true
		}
	}
	return false
}
