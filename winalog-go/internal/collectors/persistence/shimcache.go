//go:build windows

package collectors

import (
	"context"
	"encoding/binary"
	"encoding/hex"
	"fmt"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type ShimCacheCollector struct {
	BaseCollector
}

type ShimCacheEntry struct {
	Path           string
	LastModified   string
	LastUpdateTime string
	ExecutionTime  string
	Size           uint32
	Flag           uint32
}

func NewShimCacheCollector() *ShimCacheCollector {
	return &ShimCacheCollector{}
}

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

	hexData := strings.ReplaceAll(hexString, " ", "")
	if len(hexData) < 64 {
		return entries
	}

	data, err := hex.DecodeString(hexData)
	if err != nil {
		return entries
	}

	offset := 0
	if len(data) < 24 {
		return entries
	}

	for offset < len(data)-24 {
		pathLen := int(binary.LittleEndian.Uint32(data[offset : offset+4]))
		offset += 4

		if offset+pathLen > len(data) {
			break
		}

		path := string(data[offset : offset+pathLen])
		offset += pathLen

		if (pathLen % 8) != 0 {
			offset += 8 - (pathLen % 8)
		}

		if offset+12 > len(data) {
			break
		}

		timestamp := binary.LittleEndian.Uint64(data[offset : offset+8])
		offset += 8

		flag := binary.LittleEndian.Uint32(data[offset : offset+4])
		offset += 4

		entries = append(entries, ShimCacheEntry{
			Path:           path,
			LastUpdateTime: parseWindowsTime(timestamp),
			Flag:           flag,
		})
	}

	return entries
}

func parseWindowsTime(timestamp uint64) string {
	if timestamp == 0 {
		return ""
	}
	sec := timestamp / 10000000
	min := sec / 60
	hour := min / 60
	day := hour / 24

	startTime := time.Date(1601, 1, 1, 0, 0, 0, 0, time.UTC)
	t := startTime.Add(time.Duration(day) * 24 * time.Hour).Add(time.Duration(hour%24) * time.Hour).Add(time.Duration(min%60) * time.Minute).Add(time.Duration(sec%60) * time.Second)

	return t.Format("2006-01-02 15:04:05")
}

func toBase64String(data string) string {
	cmd := fmt.Sprintf(`[System.Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes('%s'))`, data)

	result := utils.RunPowerShell(cmd)
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

	cmd := fmt.Sprintf(`Get-ItemProperty -Path '%s' -Name 'AppCompatCache' -ErrorAction SilentlyContinue | Select-Object -ExpandProperty AppCompatCache`, regKey)

	result := utils.RunPowerShell(cmd)
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
	return fmt.Errorf("clearing ShimCache is not supported via this API for security reasons")
}

func GetRecentExecutables(limit int) ([]string, error) {
	executables := make([]string, 0)

	entries, err := GetShimCache()
	if err != nil {
		return executables, err
	}

	for _, entry := range entries {
		execTime, err := time.Parse("2006-01-02 15:04:05", entry.ExecutionTime)
		if err == nil {
			if execTime.After(time.Now().AddDate(0, 0, -30)) {
				executables = append(executables, entry.Path)
				if len(executables) >= limit {
					break
				}
			}
		}
	}

	return executables, nil
}
