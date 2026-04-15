package collectors

import (
	"context"
	"encoding/binary"
	"encoding/json"
	"fmt"
	"strings"
	"time"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
	"golang.org/x/sys/windows/registry"
)

func (c *UserAssistCollector) collectUserAssist() ([]*types.UserAssistEntry, error) {
	entries := make([]*types.UserAssistEntry, 0)

	uaEntries, err := GetUserAssist()
	if err != nil {
		return entries, err
	}

	for _, entry := range uaEntries {
		entries = append(entries, &types.UserAssistEntry{
			Name:        entry.Name,
			Path:        entry.Path,
			FocusCount:  entry.FocusCount,
			TimeFocused: entry.TimeFocused,
			LastUsed:    entry.LastUsed,
			SessionID:   entry.SessionID,
			CollectedAt: time.Now(),
		})
	}

	return entries, nil
}

func GetUserAssist() ([]UserAssistEntry, error) {
	entries := make([]UserAssistEntry, 0)

	keyPaths := []string{
		`HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist`,
	}

	for _, keyPath := range keyPaths {
		subkeys, err := listRegistrySubkeys(keyPath)
		if err != nil {
			continue
		}

		for _, subkey := range subkeys {
			fullPath := keyPath + "\\" + subkey
			values, err := getUserAssistValues(fullPath)
			if err != nil {
				continue
			}

			for _, value := range values {
				entries = append(entries, value)
			}
		}
	}

	return entries, nil
}

func listRegistrySubkeys(path string) ([]string, error) {
	var subkeys []string

	key, err := registry.OpenKey(registry.HKEY_CURRENT_USER, strings.TrimPrefix(path, `HKCU\`), registry.READ)
	if err != nil {
		return subkeys, err
	}
	defer key.Close()

	subkeys, err = key.ReadSubkeyNames()
	if err != nil {
		return []string{}, err
	}

	return subkeys, nil
}

func getUserAssistValues(keyPath string) ([]UserAssistEntry, error) {
	entries := make([]UserAssistEntry, 0)

	key, err := registry.OpenKey(registry.HKEY_CURRENT_USER, strings.TrimPrefix(keyPath, `HKCU\`), registry.READ)
	if err != nil {
		return entries, err
	}
	defer key.Close()

	valueNames, err := key.ReadValueNames()
	if err != nil {
		return entries, err
	}

	for _, valueName := range valueNames {
		data, _, err := key.GetValue(valueName)
		if err != nil {
			continue
		}

		decodedPath := decodeUserAssistPath(valueName)
		if decodedPath == "" {
			decodedPath = valueName
		}

		entry := parseUserAssistData(decodedPath, data)
		if entry.Path != "" {
			entries = append(entries, entry)
		}
	}

	return entries, nil
}

func decodeUserAssistPath(encoded string) string {
	if len(encoded) < 8 {
		return ""
	}

	cmd := fmt.Sprintf(`$bytes = [System.Convert]::FromBase64String('%s'); $decoded = 0; for ($i = 0; $i -lt $bytes.Length; $i++) { $decoded = ($decoded -shl 1) -bxor $bytes[$i] }; [System.Text.Encoding]::Unicode.GetString([BitConverter]::GetBytes($decoded))`, toBase64(encoded))

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		decoded := strings.TrimSpace(result.Output)
		if decoded != "" {
			return decoded
		}
	}

	return rot13Decode(encoded)
}

func toBase64(s string) string {
	cmd := `[System.Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes('%s'))`

	result := utils.RunPowerShell(strings.Replace(cmd, "%s", s, 1))
	if result.Success() {
		return strings.TrimSpace(result.Output)
	}

	return ""
}

func rot13Decode(s string) string {
	result := make([]byte, len(s))
	for i := 0; i < len(s); i++ {
		c := s[i]
		switch {
		case c >= 'A' && c <= 'Z':
			result[i] = 'A' + (c-'A'+13)%26
		case c >= 'a' && c <= 'z':
			result[i] = 'a' + (c-'a'+13)%26
		default:
			result[i] = c
		}
	}
	return string(result)
}

func parseUserAssistData(path string, data interface{}) UserAssistEntry {
	entry := UserAssistEntry{
		Name: extractNameFromPath(path),
		Path: path,
	}

	if binaryData, ok := data.([]byte); ok && len(binaryData) >= 16 {
		focusCount := binary.LittleEndian.Uint32(binaryData[4:8])
		entry.FocusCount = int(focusCount)

		timestamp := binary.LittleEndian.Uint64(binaryData[8:16])
		if timestamp > 0 {
			entry.LastUsed = time.Date(1601, 1, 1, 0, 0, 0, 0, time.UTC).
				Add(time.Duration(timestamp) * 100 * time.Nanosecond)
		}
	}

	return entry
}

func extractNameFromPath(path string) string {
	parts := strings.Split(path, "\\")
	if len(parts) > 0 {
		name := parts[len(parts)-1]
		name = strings.ReplaceAll(name, "{", "")
		name = strings.ReplaceAll(name, "}", "")
		return name
	}
	return path
}

func ParseUserAssist(regKey string) ([]*types.UserAssistEntry, error) {
	entries := make([]*types.UserAssistEntry, 0)

	if regKey == "" {
		regKey = `HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist`
	}

	uaEntries, err := getUserAssistValues(regKey)
	if err != nil {
		return entries, err
	}

	for _, entry := range uaEntries {
		entries = append(entries, &types.UserAssistEntry{
			Name:        entry.Name,
			Path:        entry.Path,
			FocusCount:  entry.FocusCount,
			TimeFocused: entry.TimeFocused,
			LastUsed:    entry.LastUsed,
			SessionID:   entry.SessionID,
			CollectedAt: time.Now(),
		})
	}

	return entries, nil
}

func GetUserAssistPaths() []string {
	return []string{
		`HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist`,
		`HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist\{GUID}\Count`,
	}
}

func GetUserAssistCount(appName string) int {
	entries, err := GetUserAssist()
	if err != nil {
		return 0
	}

	appNameLower := strings.ToLower(appName)
	for _, entry := range entries {
		if strings.Contains(strings.ToLower(entry.Name), appNameLower) ||
			strings.Contains(strings.ToLower(entry.Path), appNameLower) {
			return entry.FocusCount
		}
	}

	return 0
}

func GetRecentUserAssist(limit int) ([]UserAssistEntry, error) {
	entries, err := GetUserAssist()
	if err != nil {
		return []UserAssistEntry{}, err
	}

	recent := make([]UserAssistEntry, 0)
	for _, entry := range entries {
		if entry.LastUsed.After(time.Now().AddDate(0, 0, -30)) {
			recent = append(recent, entry)
			if len(recent) >= limit {
				break
			}
		}
	}

	return recent, nil
}

func ClearUserAssist() error {
	return nil
}

func GetUserAssistSessionID() int {
	cmd := `(Get-Process -PID $PID).SessionId`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		return parseIntFromUAOutput(strings.TrimSpace(result.Output))
	}

	return 0
}

func parseIntFromUAOutput(s string) int {
	var n int
	for _, c := range s {
		if c >= '0' && c <= '9' {
			n = n*10 + int(c-'0')
		}
	}
	return n
}
