//go:build windows
// +build windows

package collectors

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
	"golang.org/x/sys/windows/registry"
)

func (c *AmcacheCollector) collectAmcache() ([]*types.AmcacheEntry, error) {
	entries := make([]*types.AmcacheEntry, 0)

	amcacheEntries, err := GetAmcache()
	if err != nil {
		return entries, err
	}

	for _, entry := range amcacheEntries {
		entries = append(entries, &types.AmcacheEntry{
			Path:           entry.Path,
			SHA1:           entry.SHA1,
			BinaryType:     entry.BinaryType,
			ProductName:    entry.ProductName,
			ProductVersion: entry.ProductVersion,
			CompanyName:    entry.CompanyName,
			BinarySize:     entry.BinarySize,
			CreatedTime:    entry.CreatedTime,
			ModifiedTime:   entry.ModifiedTime,
			CollectedAt:    time.Now(),
		})
	}

	return entries, nil
}

func GetAmcache() ([]AmcacheEntry, error) {
	entries := make([]AmcacheEntry, 0)

	amcachePaths := []string{
		`C:\Windows\appcompat\Programs\Amcache.hve`,
	}

	for _, amcachePath := range amcachePaths {
		if _, err := os.Stat(amcachePath); os.IsNotExist(err) {
			continue
		}

		parsedEntries, err := ParseAmcache(amcachePath)
		if err != nil {
			continue
		}

		for _, entry := range parsedEntries {
			entries = append(entries, AmcacheEntry{
				Path:           entry.Path,
				SHA1:           entry.SHA1,
				BinaryType:     entry.BinaryType,
				ProductName:    entry.ProductName,
				ProductVersion: entry.ProductVersion,
				CompanyName:    entry.CompanyName,
				BinarySize:     entry.BinarySize,
				CreatedTime:    entry.CreatedTime,
				ModifiedTime:   entry.ModifiedTime,
			})
		}
	}

	return entries, nil
}

func ParseAmcache(amcachePath string) ([]*types.AmcacheEntry, error) {
	entries := make([]*types.AmcacheEntry, 0)

	key, err := registry.LoadRegistryLoadAppcompat(amcachePath)
	if err != nil {
		return parseAmcacheViaPowerShell(amcachePath)
	}
	defer registry.UnLoadRegistryAppcompat(key)

	subkeyNames, err := key.ReadSubkeyNames()
	if err != nil {
		return entries, nil
	}

	for _, subkeyName := range subkeyNames {
		if !strings.HasPrefix(subkeyName, "{") {
			continue
		}

		subkey, err := key.OpenSubkey(subkeyName)
		if err != nil {
			continue
		}
		defer subkey.Close()

		entry := parseAmcacheSubkey(subkey, subkeyName)
		if entry != nil && entry.Path != "" {
			entries = append(entries, entry)
		}
	}

	return entries, nil
}

func parseAmcacheSubkey(subkey registry.Key, subkeyName string) *types.AmcacheEntry {
	entry := &types.AmcacheEntry{}

	if path, _, err := subkey.GetStringValue("Path"); err == nil && path != "" {
		entry.Path = path
	}

	if sha1, _, err := subkey.GetStringValue("SHA1"); err == nil && sha1 != "" {
		entry.SHA1 = sha1
	}

	if binaryType, _, err := subkey.GetStringValue("BinaryType"); err == nil && binaryType != "" {
		entry.BinaryType = binaryType
	}

	if productName, _, err := subkey.GetStringValue("ProductName"); err == nil && productName != "" {
		entry.ProductName = productName
	}

	if productVersion, _, err := subkey.GetStringValue("ProductVersion"); err == nil && productVersion != "" {
		entry.ProductVersion = productVersion
	}

	if companyName, _, err := subkey.GetStringValue("CompanyName"); err == nil && companyName != "" {
		entry.CompanyName = companyName
	}

	if binarySize, _, err := subkey.GetIntegerValue("BinarySize"); err == nil {
		entry.BinarySize = int64(binarySize)
	}

	if createdTime, _, err := subkey.GetIntegerValue("Created"); err == nil && createdTime > 0 {
		entry.CreatedTime = parseWindowsTime(uint64(createdTime))
	}

	if modifiedTime, _, err := subkey.GetIntegerValue("Modified"); err == nil && modifiedTime > 0 {
		entry.ModifiedTime = parseWindowsTime(uint64(modifiedTime))
	}

	return entry
}

func parseAmcacheViaPowerShell(amcachePath string) ([]*types.AmcacheEntry, error) {
	entries := make([]*types.AmcacheEntry, 0)

	cmd := `Get-Item '%s' -ErrorAction SilentlyContinue | Select-Object -ExpandProperty VersionInfo | ConvertTo-Json -Compress`

	result := utils.RunPowerShell(strings.Replace(cmd, "%s", amcachePath, 1))
	if !result.Success() {
		return entries, nil
	}

	var versionInfo struct {
		FileName       string `json:"FileName"`
		FileVersion    string `json:"FileVersion"`
		ProductName    string `json:"ProductName"`
		ProductVersion string `json:"ProductVersion"`
		CompanyName    string `json:"CompanyName"`
	}

	if err := json.Unmarshal([]byte(result.Output), &versionInfo); err == nil {
		entries = append(entries, &types.AmcacheEntry{
			Path:           versionInfo.FileName,
			ProductName:    versionInfo.ProductName,
			ProductVersion: versionInfo.ProductVersion,
			CompanyName:    versionInfo.CompanyName,
		})
	}

	return entries, nil
}

func parseWindowsTime(timestamp uint64) time.Time {
	if timestamp == 0 {
		return time.Time{}
	}

	return time.Date(1601, 1, 1, 0, 0, 0, 0, time.UTC).
		Add(time.Duration(timestamp) * 100 * time.Nanosecond)
}

func GetAmcacheLocation() string {
	return `C:\Windows\appcompat\Programs\Amcache.hve`
}

func IsAmcacheAvailable() bool {
	_, err := os.Stat(GetAmcacheLocation())
	return err == nil
}

func GetRecentAmcacheEntries(limit int) ([]*types.AmcacheEntry, error) {
	entries, err := GetAmcache()
	if err != nil {
		return []*types.AmcacheEntry{}, err
	}

	recent := make([]*types.AmcacheEntry, 0)
	for _, entry := range entries {
		if entry.CreatedTime.After(time.Now().AddDate(0, 0, -30)) {
			recent = append(recent, entry)
			if len(recent) >= limit {
				break
			}
		}
	}

	return recent, nil
}

func GetAmcacheFileHashes() (map[string]string, error) {
	hashes := make(map[string]string)

	entries, err := GetAmcache()
	if err != nil {
		return hashes, err
	}

	for _, entry := range entries {
		if entry.Path != "" {
			result, err := forensics.CalculateFileHash(entry.Path)
			if err == nil {
				hashes[entry.Path] = result.SHA256
			}
		}
	}

	return hashes, nil
}

func SearchAmcacheByHash(sha1Hash string) ([]*types.AmcacheEntry, error) {
	entries, err := GetAmcache()
	if err != nil {
		return []*types.AmcacheEntry{}, err
	}

	matches := make([]*types.AmcacheEntry, 0)
	for _, entry := range entries {
		if strings.EqualFold(entry.SHA1, sha1Hash) {
			matches = append(matches, entry)
		}
	}

	return matches, nil
}

func SearchAmcacheByPath(pathPattern string) ([]*types.AmcacheEntry, error) {
	entries, err := GetAmcache()
	if err != nil {
		return []*types.AmcacheEntry{}, err
	}

	matches := make([]*types.AmcacheEntry, 0)
	for _, entry := range entries {
		if strings.Contains(strings.ToLower(entry.Path), strings.ToLower(pathPattern)) {
			matches = append(matches, entry)
		}
	}

	return matches, nil
}

func GetAmcacheVolumes() ([]string, error) {
	volumes := make([]string, 0)

	key, err := registry.OpenKey(registry.LOCAL_MACHINE, `SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Amd64`, registry.READ)
	if err != nil {
		return volumes, err
	}
	defer key.Close()

	subkeys, err := key.ReadSubkeyNames()
	if err != nil {
		return volumes, err
	}

	for _, subkey := range subkeys {
		volumes = append(volumes, subkey)
	}

	return volumes, nil
}

func GetVolumeGuidFromPath(path string) string {
	cmd := `(Get-Volume -Path '%s' -ErrorAction SilentlyContinue).Guid`

	result := utils.RunPowerShell(strings.Replace(cmd, "%s", filepath.VolumeNameToFunction(path), 1))
	if result.Success() {
		return strings.TrimSpace(result.Output)
	}

	return ""
}

func getVolumeName(path string) string {
	return filepath.VolumeName(path)
}
