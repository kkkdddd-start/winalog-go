//go:build windows

package collectors

type PrefetchCollector struct {
	BaseCollector
}

type PrefetchInfo struct {
	Name             string
	Path             string
	LastRunTime      string
	RunCount         int
	LastModifiedTime string
}

func NewPrefetchCollector() *PrefetchCollector {
	return &PrefetchCollector{}
}

import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/forensics"
	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

func (c *PrefetchCollector) collectPrefetch() ([]*types.PrefetchEntry, error) {
	entries := make([]*types.PrefetchEntry, 0)

	prefetchFiles, err := ListPrefetchFiles()
	if err != nil {
		return entries, err
	}

	for _, pf := range prefetchFiles {
		entries = append(entries, &types.PrefetchEntry{
			Name:             pf.Name,
			Path:             pf.Path,
			LastRunTime:      pf.LastRunTime,
			RunCount:         pf.RunCount,
			LastModifiedTime: pf.LastModifiedTime,
			CollectedAt:      time.Now(),
		})
	}

	return entries, nil
}

func ListPrefetchFiles() ([]PrefetchInfo, error) {
	prefetchFiles := make([]PrefetchInfo, 0)

	prefetchDir := `C:\Windows\Prefetch`

	entries, err := os.ReadDir(prefetchDir)
	if err != nil {
		return prefetchFiles, err
	}

	for _, entry := range entries {
		if entry.IsDir() {
			continue
		}

		name := entry.Name()
		if !strings.HasSuffix(strings.ToLower(name), ".pf") {
			continue
		}

		filePath := filepath.Join(prefetchDir, name)

		info, err := entry.Info()
		if err != nil {
			continue
		}

		pf := PrefetchInfo{
			Name:             extractPrefetchName(name),
			Path:             filePath,
			LastModifiedTime: info.ModTime(),
			RunCount:         getPrefetchRunCount(filePath),
			LastRunTime:      getPrefetchLastRunTime(filePath),
		}

		prefetchFiles = append(prefetchFiles, pf)
	}

	return prefetchFiles, nil
}

func extractPrefetchName(fileName string) string {
	name := strings.TrimSuffix(fileName, filepath.Ext(fileName))
	parts := strings.Split(name, "-")
	if len(parts) > 0 {
		return parts[0]
	}
	return name
}

func getPrefetchRunCount(filePath string) int {
	cmd := `(Get-Item '%s').VersionInfo.FileVersion`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return 0
	}

	return 0
}

func getPrefetchLastRunTime(filePath string) time.Time {
	cmd := `(Get-Item '%s').LastWriteTime`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		if t, err := time.Parse("2006-01-02 15:04:05", strings.TrimSpace(result.Output)); err == nil {
			return t
		}
		if t, err := time.Parse(time.RFC3339, strings.TrimSpace(result.Output)); err == nil {
			return t
		}
	}

	info, err := os.Stat(filePath)
	if err == nil {
		return info.ModTime()
	}

	return time.Time{}
}

func GetPrefetchInfo(prefetchPath string) (*PrefetchInfo, error) {
	info, err := os.Stat(prefetchPath)
	if err != nil {
		return nil, err
	}

	name := filepath.Base(prefetchPath)
	entry := PrefetchInfo{
		Name:             extractPrefetchName(name),
		Path:             prefetchPath,
		LastModifiedTime: info.ModTime(),
		RunCount:         getPrefetchRunCount(prefetchPath),
		LastRunTime:      getPrefetchLastRunTime(prefetchPath),
	}

	return &entry, nil
}

func ParsePrefetch(prefetchPath string) (*types.PrefetchEntry, error) {
	info, err := GetPrefetchInfo(prefetchPath)
	if err != nil {
		return nil, err
	}

	cmd := `(Get-Item '%s').VersionInfo | ConvertTo-Json -Compress`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		var versionInfo struct {
			FileName    string `json:"FileName"`
			FileVersion string `json:"FileVersion"`
			ProductName string `json:"ProductName"`
		}

		if err := json.Unmarshal([]byte(result.Output), &versionInfo); err == nil {
			return &types.PrefetchEntry{
				Name:             info.Name,
				Path:             info.Path,
				LastRunTime:      info.LastRunTime,
				RunCount:         info.RunCount,
				LastModifiedTime: info.LastModifiedTime,
				Hash:             calculatePrefetchHash(prefetchPath),
				ProductName:      versionInfo.ProductName,
				CompanyName:      versionInfo.FileName,
				CollectedAt:      time.Now(),
			}, nil
		}
	}

	return &types.PrefetchEntry{
		Name:             info.Name,
		Path:             info.Path,
		LastRunTime:      info.LastRunTime,
		RunCount:         info.RunCount,
		LastModifiedTime: info.LastModifiedTime,
		Hash:             calculatePrefetchHash(prefetchPath),
		CollectedAt:      time.Now(),
	}, nil
}

func calculatePrefetchHash(filePath string) string {
	result, err := forensics.CalculateFileHash(filePath)
	if err != nil {
		return ""
	}
	return result.SHA256
}

func GetPrefetchExecutionHistory(exeName string) ([]PrefetchInfo, error) {
	history := make([]PrefetchInfo, 0)

	prefetchFiles, err := ListPrefetchFiles()
	if err != nil {
		return history, err
	}

	exeNameLower := strings.ToLower(exeName)
	for _, pf := range prefetchFiles {
		if strings.Contains(strings.ToLower(pf.Name), exeNameLower) {
			history = append(history, pf)
		}
	}

	return history, nil
}

func GetPrefetchCount(exeName string) int {
	count := 0

	prefetchFiles, err := ListPrefetchFiles()
	if err != nil {
		return 0
	}

	exeNameLower := strings.ToLower(exeName)
	for _, pf := range prefetchFiles {
		if strings.Contains(strings.ToLower(pf.Name), exeNameLower) {
			count++
		}
	}

	return count
}

func IsPrefetchEnabled() bool {
	cmd := `(Get-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management' -Name 'DisablePagingExecutive' -ErrorAction SilentlyContinue).DisablePagingExecutive`

	result := utils.RunPowerShell(cmd)
	return result.Success()
}

func GetPrefetchLocation() string {
	cmd := `(Get-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management' -Name 'PrefetchParameters' -ErrorAction SilentlyContinue).PrefetchParameters`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		return strings.TrimSpace(result.Output)
	}

	return `C:\Windows\Prefetch`
}

func ClearPrefetch() error {
	cmd := `Remove-Item '%s\*.pf' -Force -ErrorAction SilentlyContinue`

	prefetchDir := GetPrefetchLocation()
	result := utils.RunPowerShell(strings.Replace(cmd, "%s", prefetchDir, 1))

	if result.Success() {
		return nil
	}

	return result.Error
}
