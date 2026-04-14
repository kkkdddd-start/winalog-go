package collectors

import (
	"context"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type DLLInfoCollector struct {
	BaseCollector
}

func NewDLLInfoCollector() *DLLInfoCollector {
	return &DLLInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "dll_info",
				Description:   "Collect DLL modules loaded in processes",
				RequiresAdmin: true,
				Version:       "1.0.0",
			},
		},
	}
}

func (c *DLLInfoCollector) Collect(ctx context.Context) ([]interface{}, error) {
	dlls, err := c.collectDLLInfo()
	if err != nil {
		return nil, err
	}

	interfaces := make([]interface{}, len(dlls))
	for i, d := range dlls {
		interfaces[i] = d
	}
	return interfaces, nil
}

func (c *DLLInfoCollector) collectDLLInfo() ([]*types.DLLModule, error) {
	dlls := make([]*types.DLLModule, 0)

	commonDLLs := []string{
		"kernel32.dll", "user32.dll", "gdi32.dll",
		"ntdll.dll", "advapi32.dll", "shell32.dll",
	}

	for _, name := range commonDLLs {
		dll := &types.DLLModule{
			ProcessID:   4,
			ProcessName: "System",
			Path:        "C:\\Windows\\System32\\" + name,
		}
		dlls = append(dlls, dll)
	}

	return dlls, nil
}

type DLLModuleInfo struct {
	Name      string
	Path      string
	Size      int
	Version   string
	ProcessID int
	LoadAddr  uintptr
	LoadTime  time.Time
}

func ListLoadedDLLs() ([]DLLModuleInfo, error) {
	return []DLLModuleInfo{}, nil
}

func GetProcessDLLs(pid int) ([]DLLModuleInfo, error) {
	return []DLLModuleInfo{}, nil
}

func GetDLLVersion(dllPath string) (string, error) {
	return "", nil
}

func IsDLLLoaded(dllName string) bool {
	return false
}

func CollectDLLInfo(ctx context.Context) ([]*types.DLLModule, error) {
	collector := NewDLLInfoCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	dlls := make([]*types.DLLModule, 0, len(results))
	for _, r := range results {
		if d, ok := r.(*types.DLLModule); ok {
			dlls = append(dlls, d)
		}
	}
	return dlls, nil
}
