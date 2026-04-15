package collectors

import (
	"context"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

func (c *ShimCacheCollector) collectShimCache() ([]*types.ShimCacheEntry, error) {
	entries := make([]*types.ShimCacheEntry, 0)

	shimEntries, err := GetShimCache()
	if err != nil {
		return entries, err
	}

	for _, entry := range shimEntries {
		entries = append(entries, &types.ShimCacheEntry{
			Path:           entry.Path,
			LastModified:   entry.LastModified,
			LastUpdateTime: entry.LastUpdateTime,
			ExecutionTime:  entry.ExecutionTime,
			Size:           entry.Size,
			Flag:           entry.Flag,
			CollectedAt:    time.Now(),
		})
	}

	return entries, nil
}

func GetShimCache() ([]ShimCacheEntry, error) {
	entries := make([]ShimCacheEntry, 0)

	cmd := `Get-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatibility' -Name 'AppCompatCache' -ErrorAction SilentlyContinue | Select-Object -ExpandProperty AppCompatCache`

	result := utils.RunPowerShell(cmd)
	if !result.Success() || result.Output == "" {
		return entries, nil
	}

	return parseShimCacheBinary(result.Output), nil
}

func parseShimCacheBinary(data string) []ShimCacheEntry {
	entries := make([]ShimCacheEntry, 0)

	cmd := `[System.BitConverter]::ToString([System.Convert]::FromBase64String('%s')) | ForEach-Object { $_ -replace '-', '' }`

	base64Data := toBase64String(data)
	if base64Data == "" {
		return entries
	}

	cmd = strings.Replace(cmd, "%s", base64Data, 1)
	result := utils.RunPowerShell(cmd)

	if !result.Success() {
		return entries
	}

	return parseShimCacheHex(result.Output)
}

func parseShimCacheHex(hexString string) []ShimCacheEntry {
	entries := make([]ShimCacheEntry, 0)

	hexStrings := strings.Fields(hexString)
	if len(hexStrings) < 64 {
		return entries
	}

	return entries
}

func toBase64String(data string) string {
	cmd := `[System.Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes('%s'))`

	result := utils.RunPowerShell(strings.Replace(cmd, "%s", data, 1))
	if result.Success() {
		return strings.TrimSpace(result.Output)
	}

	return ""
}

func ParseShimCache(regKey string) ([]*types.ShimCacheEntry, error) {
	entries := make([]*types.ShimCacheEntry, 0)

	if regKey == "" {
		regKey = `HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatibility`
	}

	cmd := `Get-ItemProperty -Path '%s' -Name 'AppCompatCache' -ErrorAction SilentlyContinue | Select-Object -ExpandProperty AppCompatCache`

	result := utils.RunPowerShell(strings.Replace(cmd, "%s", regKey, 1))
	if !result.Success() {
		return entries, nil
	}

	shimEntries := parseShimCacheBinary(result.Output)
	for _, entry := range shimEntries {
		entries = append(entries, &types.ShimCacheEntry{
			Path:           entry.Path,
			LastModified:   entry.LastModified,
			LastUpdateTime: entry.LastUpdateTime,
			ExecutionTime:  entry.ExecutionTime,
			Size:           entry.Size,
			Flag:           entry.Flag,
			CollectedAt:    time.Now(),
		})
	}

	return entries, nil
}

func GetShimCachePaths() []string {
	return []string{
		`HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatibility`,
		`HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\AppCertDlls`,
		`HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers`,
		`HKCU:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers`,
	}
}

func IsShimCacheEnabled() bool {
	cmd := `Test-Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatibility'`

	result := utils.RunPowerShell(cmd)
	return result.Success() && strings.Contains(strings.ToLower(result.Output), "true")
}

func GetShimCacheSize() int {
	cmd := `(Get-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatibility' -ErrorAction SilentlyContinue).AppCompatCache.Length`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		return parseIntFromString(strings.TrimSpace(result.Output))
	}

	return 0
}

func parseIntFromString(s string) int {
	var n int
	for _, c := range s {
		if c < '0' || c > '9' {
			continue
		}
		n = n*10 + int(c-'0')
	}
	return n
}

func ClearShimCache() error {
	return nil
}

func GetRecentExecutables(limit int) ([]string, error) {
	executables := make([]string, 0)

	entries, err := GetShimCache()
	if err != nil {
		return executables, err
	}

	for _, entry := range entries {
		if entry.ExecutionTime.After(time.Now().AddDate(0, 0, -30)) {
			executables = append(executables, entry.Path)
			if len(executables) >= limit {
				break
			}
		}
	}

	return executables, nil
}
