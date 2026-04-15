package collectors

import (
	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

func (c *RegistryInfoCollector) collectRegistryInfo() ([]*types.RegistryPersistence, error) {
	entries := make([]*types.RegistryPersistence, 0)

	runKeys := c.collectRunKeys()
	userInit := c.collectUserInitKeys()
	scheduledTasks := c.collectScheduledTaskKeys()

	entry := &types.RegistryPersistence{
		RunKeys:       runKeys,
		UserInit:      userInit,
		TaskScheduler: scheduledTasks,
	}
	entries = append(entries, entry)

	return entries, nil
}

func (c *RegistryInfoCollector) collectRunKeys() []*types.RegistryInfo {
	runKeyPaths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`,
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce`,
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnceEx`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnceEx`,
		`HKLM\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Run`,
		`HKLM\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\RunOnce`,
		`HKCU\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Run`,
	}

	runKeys := make([]*types.RegistryInfo, 0)

	for _, keyPath := range runKeyPaths {
		subkeys, err := utils.ListRegistrySubkeys(keyPath)
		if err != nil {
			continue
		}

		for _, subkey := range subkeys {
			value, err := utils.GetRegistryValue(keyPath, subkey)
			if err != nil || value == "" {
				continue
			}

			runKeys = append(runKeys, &types.RegistryInfo{
				Path:  keyPath + "\\" + subkey,
				Name:  subkey,
				Type:  "REG_SZ",
				Value: value,
			})
		}
	}

	return runKeys
}

func (c *RegistryInfoCollector) collectUserInitKeys() []*types.RegistryInfo {
	userInitKeys := make([]*types.RegistryInfo, 0)

	paths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Userinit`,
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Shell`,
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify`,
	}

	for _, keyPath := range paths {
		if !utils.RegistryKeyExists(keyPath) {
			continue
		}

		value, err := utils.GetRegistryValue(keyPath, "")
		if err != nil || value == "" {
			continue
		}

		userInitKeys = append(userInitKeys, &types.RegistryInfo{
			Path:  keyPath,
			Type:  "REG_SZ",
			Value: value,
		})
	}

	return userInitKeys
}

func (c *RegistryInfoCollector) collectScheduledTaskKeys() []*types.RegistryInfo {
	scheduledTaskKeys := make([]*types.RegistryInfo, 0)

	paths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tasks`,
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tree`,
	}

	for _, keyPath := range paths {
		subkeys, err := utils.ListRegistrySubkeys(keyPath)
		if err != nil {
			continue
		}

		for _, subkey := range subkeys {
			fullPath := keyPath + "\\" + subkey
			value, err := utils.GetRegistryValue(fullPath, "")
			if err != nil && value == "" {
				scheduledTaskKeys = append(scheduledTaskKeys, &types.RegistryInfo{
					Path: fullPath,
					Name: subkey,
				})
			} else if value != "" {
				scheduledTaskKeys = append(scheduledTaskKeys, &types.RegistryInfo{
					Path:  fullPath,
					Name:  subkey,
					Value: value,
				})
			}
		}
	}

	return scheduledTaskKeys
}

func ListRegistryKeys(path string) ([]RegistryKey, error) {
	keys := make([]RegistryKey, 0)

	subkeys, err := utils.ListRegistrySubkeys(path)
	if err != nil {
		return keys, err
	}

	for _, subkey := range subkeys {
		value, err := utils.GetRegistryValue(path, subkey)
		if err != nil {
			continue
		}

		keys = append(keys, RegistryKey{
			Path:  path + "\\" + subkey,
			Name:  subkey,
			Type:  "REG_SZ",
			Value: value,
		})
	}

	return keys, nil
}

func GetRegistryValue(keyPath, valueName string) (string, error) {
	return utils.GetRegistryValue(keyPath, valueName)
}

func RegistryKeyExists(path string) bool {
	return utils.RegistryKeyExists(path)
}

func CollectRegistryPersistence(ctx context.Context) ([]*types.RegistryPersistence, error) {
	collector := NewRegistryInfoCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	entries := make([]*types.RegistryPersistence, 0, len(results))
	for _, r := range results {
		if e, ok := r.(*types.RegistryPersistence); ok {
			entries = append(entries, e)
		}
	}
	return entries, nil
}
