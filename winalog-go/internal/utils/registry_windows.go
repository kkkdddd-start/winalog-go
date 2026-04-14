//go:build windows
// +build windows

package utils

import (
	"strings"

	"golang.org/x/sys/windows/registry"
)

var registryHiveMap = map[string]registry.Key{
	"HKLM": registry.LOCAL_MACHINE,
	"HKCU": registry.CURRENT_USER,
	"HKCR": registry.CLASSES_ROOT,
	"HKU":  registry.USERS,
	"HKDD": registry.DYN_DATA,
}

func ListRegistrySubkeys(path string) ([]string, error) {
	hive, subkey, _ := ParseRegistryPath(path)
	if hive == "" || subkey == "" {
		return []string{}, nil
	}

	key, ok := registryHiveMap[hive]
	if !ok {
		key = registry.LOCAL_MACHINE
	}

	regKey, err := registry.OpenKey(key, subkey, registry.READ)
	if err != nil {
		return []string{}, nil
	}
	defer regKey.Close()

	subkeys, err := regKey.ReadSubkeyNames()
	if err != nil {
		return []string{}, err
	}

	return subkeys, nil
}

func GetRegistryValue(keyPath, valueName string) (string, error) {
	hive, subkey, valName := ParseRegistryPath(keyPath)
	if hive == "" || subkey == "" {
		return "", nil
	}

	key, ok := registryHiveMap[hive]
	if !ok {
		key = registry.LOCAL_MACHINE
	}

	if valName == "" {
		valName = valueName
	}

	regKey, err := registry.OpenKey(key, subkey, registry.READ)
	if err != nil {
		return "", err
	}
	defer regKey.Close()

	val, _, err := regKey.GetStringValue(valName)
	if err != nil {
		return "", err
	}

	return val, nil
}

func RegistryKeyExists(path string) bool {
	hive, subkey, _ := ParseRegistryPath(path)
	if hive == "" || subkey == "" {
		return false
	}

	key, ok := registryHiveMap[hive]
	if !ok {
		key = registry.LOCAL_MACHINE
	}

	regKey, err := registry.OpenKey(key, subkey, registry.READ)
	if err != nil {
		return false
	}
	regKey.Close()

	return true
}

func GetRegistryStringValue(keyPath, valueName string) (string, error) {
	return GetRegistryValue(keyPath, valueName)
}

func GetRegistryDWORDValue(keyPath, valueName string) (uint32, error) {
	hive, subkey, valName := ParseRegistryPath(keyPath)
	if hive == "" || subkey == "" {
		return 0, nil
	}

	key, ok := registryHiveMap[hive]
	if !ok {
		key = registry.LOCAL_MACHINE
	}

	regKey, err := registry.OpenKey(key, subkey, registry.READ)
	if err != nil {
		return 0, err
	}
	defer regKey.Close()

	val, _, err := regKey.GetIntegerValue(valName)
	if err != nil {
		return 0, err
	}

	return uint32(val), nil
}

func GetRegistryMultiStringValue(keyPath, valueName string) ([]string, error) {
	hive, subkey, valName := ParseRegistryPath(keyPath)
	if hive == "" || subkey == "" {
		return []string{}, nil
	}

	key, ok := registryHiveMap[hive]
	if !ok {
		key = registry.LOCAL_MACHINE
	}

	regKey, err := registry.OpenKey(key, subkey, registry.READ)
	if err != nil {
		return []string{}, err
	}
	defer regKey.Close()

	val, _, err := regKey.GetStringValue(valName)
	if err != nil {
		return []string{}, err
	}

	return []string{val}, nil
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
