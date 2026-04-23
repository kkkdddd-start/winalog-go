//go:build windows

package collectors

import (
	"context"
	"fmt"
	"log"
	"runtime"
	"strings"
	"sync"
	"time"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
	"golang.org/x/sys/windows"
)

var (
	dllVersionCache = make(map[string]string)
	dllCacheMu      sync.RWMutex
	dllFetchSem     = make(chan struct{}, 10)
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
		log.Printf("[DEBUG] [DLL] CreateToolhelp32Snapshot failed: %v", err)
		return nil, err
	}
	defer windows.CloseHandle(snapshot)

	var pe windows.ProcessEntry32
	pe.Size = uint32(unsafe.Sizeof(pe))

	err = windows.Process32First(snapshot, &pe)
	if err != nil {
		log.Printf("[DEBUG] [DLL] Process32First failed: %v", err)
		return nil, err
	}

	processCount := 0
	moduleCount := 0
	skipCount := 0
	errorCount := 0

	for {
		pid := int(pe.ProcessID)
		processName := windows.UTF16ToString(pe.ExeFile[:])
		processCount++

		modules, err := enumProcessModules(pid, processName)
		if err != nil {
			errorCount++
			if errorCount <= 3 {
				log.Printf("[DEBUG] [DLL] enumProcessModules(pid=%d, name=%s) error: %v", pid, processName, err)
			}
		} else if len(modules) > 0 {
			for _, mod := range modules {
				mod.ProcessID = int32(pid)
				mod.ProcessName = processName
				dlls = append(dlls, mod)
				moduleCount++
			}
		} else {
			skipCount++
		}

		err = windows.Process32Next(snapshot, &pe)
		if err != nil {
			break
		}
	}

	log.Printf("[INFO] [DLL] ListLoadedDLLs: processes=%d, modules=%d, skipped=%d, errors=%d",
		processCount, moduleCount, skipCount, errorCount)

	if moduleCount == 0 && processCount > 0 {
		log.Printf("[WARN] [DLL] No modules collected - possible permission or architecture issue (32-bit vs 64-bit)")
	}

	if processCount == 0 {
		log.Printf("[WARN] [DLL] No processes found at all - CreateToolhelp32Snapshot may have failed silently")
	}

	return dlls, nil
}

func enumProcessModules(pid int, processName string) ([]DLLModuleInfo, error) {
	modules := make([]DLLModuleInfo, 0)

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION|windows.PROCESS_VM_READ, false, uint32(pid))
	if err != nil {
		return modules, fmt.Errorf("OpenProcess failed: %w", err)
	}
	defer windows.CloseHandle(hProcess)

	var moduleCount uint32
	err = windows.EnumProcessModules(hProcess, nil, 0, &moduleCount)
	if err != nil {
		return modules, fmt.Errorf("EnumProcessModules (size) failed: %w", err)
	}

	if moduleCount == 0 {
		return modules, nil
	}

	handleSize := unsafe.Sizeof(windows.Handle(0))
	numModules := int(moduleCount) / int(handleSize)
	if numModules <= 0 {
		numModules = 1
	}

	moduleHandles := make([]windows.Handle, numModules)
	var bytesNeeded uint32
	err = windows.EnumProcessModules(hProcess, &moduleHandles[0], uint32(len(moduleHandles))*uint32(handleSize), &bytesNeeded)
	if err != nil {
		return modules, fmt.Errorf("EnumProcessModules (enum) failed: %w", err)
	}

	actualModuleCount := int(bytesNeeded) / int(handleSize)
	if actualModuleCount > numModules {
		actualModuleCount = numModules
	}

	for i := 0; i < actualModuleCount; i++ {
		hModule := moduleHandles[i]
		if hModule == 0 {
			continue
		}

		var modName [windows.MAX_PATH]uint16
		err = windows.GetModuleBaseName(hProcess, hModule, &modName[0], uint32(len(modName)))
		if err != nil {
			continue
		}

		var pathBuffer [windows.MAX_PATH]uint16
		err = windows.GetModuleFileNameEx(hProcess, hModule, &pathBuffer[0], uint32(len(pathBuffer)))
		if err != nil {
			continue
		}

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
	return enumProcessModules(pid, fmt.Sprintf("PID_%d", pid))
}

func GetDLLVersion(dllPath string) string {
	if runtime.GOOS != "windows" {
		return ""
	}

	dllCacheMu.RLock()
	if version, ok := dllVersionCache[dllPath]; ok {
		dllCacheMu.RUnlock()
		return version
	}
	dllCacheMu.RUnlock()

	select {
	case dllFetchSem <- struct{}{}:
		defer func() { <-dllFetchSem }()
	default:
		return ""
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cmd := fmt.Sprintf(`(Get-Item '%s' -ErrorAction SilentlyContinue).VersionInfo | Select-Object -ExpandProperty FileVersion`, strings.ReplaceAll(dllPath, "'", "''"))
	result := utils.RunPowerShellWithContext(ctx, cmd)
	version := ""
	if result.Success() && result.Output != "" {
		version = strings.TrimSpace(result.Output)
	}

	dllCacheMu.Lock()
	dllVersionCache[dllPath] = version
	dllCacheMu.Unlock()

	return version
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

func ClearDLLVersionCache() {
	dllCacheMu.Lock()
	dllVersionCache = make(map[string]string)
	dllCacheMu.Unlock()
}
