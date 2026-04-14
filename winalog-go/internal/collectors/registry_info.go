package collectors

import (
	"context"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type RegistryInfoCollector struct {
	BaseCollector
}

func NewRegistryInfoCollector() *RegistryInfoCollector {
	return &RegistryInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "registry_info",
				Description:   "Collect registry persistence locations",
				RequiresAdmin: true,
				Version:       "1.0.0",
			},
		},
	}
}

func (c *RegistryInfoCollector) Collect(ctx context.Context) ([]interface{}, error) {
	entries, err := c.collectRegistryInfo()
	if err != nil {
		return nil, err
	}

	interfaces := make([]interface{}, len(entries))
	for i, e := range entries {
		interfaces[i] = e
	}
	return interfaces, nil
}

func (c *RegistryInfoCollector) collectRegistryInfo() ([]*types.RegistryPersistence, error) {
	entries := make([]*types.RegistryPersistence, 0)

	runKeys := []*types.RegistryInfo{
		{Path: `HKLM\Software\Microsoft\Windows\CurrentVersion\Run`, Source: "Run"},
		{Path: `HKLM\Software\Microsoft\Windows\CurrentVersion\RunOnce`, Source: "RunOnce"},
		{Path: `HKCU\Software\Microsoft\Windows\CurrentVersion\Run`, Source: "Run"},
		{Path: `HKCU\Software\Microsoft\Windows\CurrentVersion\RunOnce`, Source: "RunOnce"},
	}

	userInit := []*types.RegistryInfo{
		{Path: `HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\Userinit`, Source: "Userinit"},
		{Path: `HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\Shell`, Source: "Shell"},
		{Path: `HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify`, Source: "Notify"},
	}

	entry := &types.RegistryPersistence{
		RunKeys:       runKeys,
		UserInit:      userInit,
		TaskScheduler: []*types.RegistryInfo{},
	}
	entries = append(entries, entry)

	return entries, nil
}

type RegistryKey struct {
	Path  string
	Name  string
	Type  string
	Value string
}

func ListRegistryKeys(path string) ([]RegistryKey, error) {
	return []RegistryKey{}, nil
}

func GetRegistryValue(keyPath, valueName string) (string, error) {
	return "", nil
}

func RegistryKeyExists(path string) bool {
	return false
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
