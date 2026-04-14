//go:build !windows
// +build !windows

package utils

import (
	"fmt"
	"strings"
)

func ListRegistrySubkeys(path string) ([]string, error) {
	return nil, fmt.Errorf("registry operations are only supported on Windows")
}

func GetRegistryValue(keyPath, valueName string) (string, error) {
	return "", fmt.Errorf("registry operations are only supported on Windows")
}

func RegistryKeyExists(path string) bool {
	return false
}

func GetRegistryStringValue(keyPath, valueName string) (string, error) {
	return "", fmt.Errorf("registry operations are only supported on Windows")
}

func GetRegistryDWORDValue(keyPath, valueName string) (uint32, error) {
	return 0, fmt.Errorf("registry operations are only supported on Windows")
}

func GetRegistryMultiStringValue(keyPath, valueName string) ([]string, error) {
	return nil, fmt.Errorf("registry operations are only supported on Windows")
}

func ParseRegistryPath(path string) (hive, subkey, value string) {
	path = strings.TrimPrefix(path, `\\`)

	parts := strings.SplitN(path, `\`, 2)
	if len(parts) < 2 {
		return "", "", ""
	}

	hive = strings.ToUpper(parts[0])

	remaining := parts[1]
	if idx := strings.LastIndex(remaining, `\`); idx >= 0 {
		subkey = remaining[:idx]
		value = remaining[idx+1:]
	} else {
		subkey = ""
		value = remaining
	}

	return hive, subkey, value
}

func NormalizeRegistryPath(path string) string {
	path = strings.TrimSpace(path)
	path = strings.ReplaceAll(path, "/", "\\")
	path = strings.ReplaceAll(path, "\\\\", "\\")

	return strings.ToUpper(path)
}
