package collectors

import (
	"fmt"
	"strings"

	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

// GetRegisteredChannels 获取系统注册的日志通道
func GetRegisteredChannels() ([]string, error) {
	cmd := `Get-WinEvent -ListLog * -ErrorAction SilentlyContinue | Where-Object { $_.RecordCount -gt 0 } | Select-Object -First 100 -ExpandProperty LogName`

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
