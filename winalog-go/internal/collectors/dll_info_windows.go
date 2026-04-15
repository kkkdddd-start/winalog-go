//go:build windows
// +build windows

package collectors

import (
	"encoding/json"
	"strings"
	"time"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"golang.org/x/sys/windows"
)

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
			Version:     dll.Version,
			LoadAddr:    dll.LoadAddr,
			LoadTime:    dll.LoadTime,
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
				mod.ProcessID = pid
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

	moduleHandles := make([]windows.Handle, moduleCount/unsafe.Sizeof/windows.Handle(0))
	err = windows.EnumProcessModules(hProcess, &moduleHandles[0], uint32(len(moduleHandles)*int(unsafe.Sizeof(windows.Handle(0)))), &moduleCount)
	if err != nil {
		return modules, nil
	}

	for _, hModule := range moduleHandles {
		var modName [windows.MAX_PATH]uint16
		windows.GetModuleBaseName(hProcess, hModule, &modName[0], uint32(len(modName)))

		var modInfo windows.ModuleInfo
		windows.GetModuleInformation(hProcess, hModule, &modInfo, uint32(unsafe.Sizeof(modInfo)))

		pathBuffer := make([]uint16, windows.MAX_PATH)
		windows.GetModuleFileNameEx(hProcess, hModule, &pathBuffer[0], uint32(len(pathBuffer)))

		dll := DLLModuleInfo{
			Name:     windows.UTF16ToString(modName[:]),
			Path:     windows.UTF16ToString(pathBuffer[:]),
			Size:     int(modInfo.SizeOfImage),
			LoadAddr: modInfo.BaseAddress,
			LoadTime: time.Now(),
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
	size := windows.GetFileVersionInfoSize(dllPath, nil)
	if size == 0 {
		return ""
	}

	data := make([]byte, size)
	if windows.GetFileVersionInfo(dllPath, 0, size, &data[0]) == 0 {
		return ""
	}

	var fixedInfo *windows.VS_FIXEDFILEINFO
	fixedInfoSize := uint32(unsafe.Sizeof(fixedInfo))
	if windows.VerQueryValue(&data[0], "\\", unsafe.Pointer(&fixedInfo), &fixedInfoSize) == 0 {
		return ""
	}

	major := uint16(fixedInfo.FileVersionMS >> 16)
	minor := uint16(fixedInfo.FileVersionMS & 0xFFFF)
	patch := uint16(fixedInfo.FileVersionLS >> 16)
	build := uint16(fixedInfo.FileVersionLS & 0xFFFF)

	return strings.TrimSpace(string(rune('0'+major/100)) + "." +
		string(rune('0'+(major/10)%10)) + "." +
		string(rune('0'+major%10)) + "." +
		string(rune('0'+minor/100)) + "." +
		string(rune('0'+(minor/10)%10)) + "." +
		string(rune('0'+minor%10)))
}

func IsDLLLoaded(dllName string) bool {
	dlls, err := ListLoadedDLLs()
	if err != nil {
		return false
	}

	dllNameLower := windows.UTF16ToString([]uint16(strings.ToLower(dllName)))
	for _, dll := range dlls {
		if strings.Contains(strings.ToLower(dll.Name), dllNameLower) {
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
