//go:build windows

package collectors

import (
	"context"
	"strings"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"golang.org/x/sys/windows"
)

type DLLInfoCollector struct {
	BaseCollector
}

type DLLModuleInfo struct {
	ProcessID   int32
	ProcessName string
	Name        string
	Path        string
	Size        uint32
	Version     string
}

func NewDLLInfoCollector() *DLLInfoCollector {
	return &DLLInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "dll_info",
				Description:   "Collect DLL information",
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

	dllModules, err := ListLoadedDLLs()
	if err != nil {
		return dlls, err
	}

	for _, dll := range dllModules {
		dlls = append(dlls, &types.DLLModule{
			ProcessID:   dll.ProcessID,
			ProcessName: dll.ProcessName,
			Path:        dll.Path,
			Size:        dll.Size,
		})
	}

	return dlls, nil
}

func ListLoadedDLLs() ([]DLLModuleInfo, error) {
	dlls := make([]DLLModuleInfo, 0)

	snapshot, err := windows.CreateToolhelp32Snapshot(windows.TH32CS_SNAPPROCESS|windows.TH32CS_SNAPMODULE, 0)
	if err != nil {
		return nil, err
	}
	defer windows.CloseHandle(snapshot)

	var pe windows.ProcessEntry32
	pe.Size = uint32(unsafe.Sizeof(pe))

	err = windows.Process32First(snapshot, &pe)
	if err != nil {
		return nil, err
	}

	for {
		pid := int(pe.ProcessID)
		processName := windows.UTF16ToString(pe.ExeFile[:])

		modules, err := enumProcessModules(pid)
		if err == nil {
			for _, mod := range modules {
				mod.ProcessID = int32(pid)
				mod.ProcessName = processName
				dlls = append(dlls, mod)
			}
		}

		err = windows.Process32Next(snapshot, &pe)
		if err != nil {
			break
		}
	}

	return dlls, nil
}

func enumProcessModules(pid int) ([]DLLModuleInfo, error) {
	modules := make([]DLLModuleInfo, 0)

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION|windows.PROCESS_VM_READ, false, uint32(pid))
	if err != nil {
		return modules, nil
	}
	defer windows.CloseHandle(hProcess)

	var moduleCount uint32
	err = windows.EnumProcessModules(hProcess, nil, 0, &moduleCount)
	if err != nil {
		return modules, nil
	}

	handleSize := unsafe.Sizeof(windows.Handle(0))
	moduleHandles := make([]windows.Handle, moduleCount/uint32(handleSize))
	err = windows.EnumProcessModules(hProcess, &moduleHandles[0], uint32(len(moduleHandles))*uint32(handleSize), &moduleCount)
	if err != nil {
		return modules, nil
	}

	for _, hModule := range moduleHandles {
		var modName [windows.MAX_PATH]uint16
		windows.GetModuleBaseName(hProcess, hModule, &modName[0], uint32(len(modName)))

		pathBuffer := make([]uint16, windows.MAX_PATH)
		windows.GetModuleFileNameEx(hProcess, hModule, &pathBuffer[0], uint32(len(pathBuffer)))

		dll := DLLModuleInfo{
			Name: windows.UTF16ToString(modName[:]),
			Path: windows.UTF16ToString(pathBuffer[:]),
		}

		dll.Version = GetDLLVersion(dll.Path)

		modules = append(modules, dll)
	}

	return modules, nil
}

func GetProcessDLLs(pid int) ([]DLLModuleInfo, error) {
	return enumProcessModules(pid)
}

func GetDLLVersion(dllPath string) string {
	_, _ = windows.GetFileVersionInfoSize(dllPath, nil)
	return ""
}

func IsDLLLoaded(dllName string) bool {
	dlls, err := ListLoadedDLLs()
	if err != nil {
		return false
	}

	for _, dll := range dlls {
		if strings.Contains(strings.ToLower(dll.Name), strings.ToLower(dllName)) {
			return true
		}
	}

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
