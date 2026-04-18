//go:build windows

package forensics

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"time"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/version"
	"golang.org/x/sys/windows"
)

type MemoryDumpResult struct {
	ProcessID   uint32            `json:"process_id"`
	ProcessName string            `json:"process_name"`
	DumpPath    string            `json:"dump_path"`
	DumpSize    int64             `json:"dump_size"`
	DumpTime    time.Time         `json:"dump_time"`
	Hash        string            `json:"hash"`
	Modules     []MemoryModule    `json:"modules,omitempty"`
	Permissions MemoryPermissions `json:"permissions"`
	Error       string            `json:"error,omitempty"`
}

type MemoryModule struct {
	BaseAddress uint64 `json:"base_address"`
	Size        uint64 `json:"size"`
	Name        string `json:"name"`
	Path        string `json:"path"`
}

type MemoryPermissions struct {
	Readable    bool `json:"readable"`
	Writable    bool `json:"writable"`
	Executable  bool `json:"executable"`
	CopyOnWrite bool `json:"copy_on_write"`
}

type MemoryRegion struct {
	BaseAddress    uint64 `json:"base_address"`
	AllocationBase uint64 `json:"allocation_base"`
	RegionSize     uint64 `json:"region_size"`
	State          uint32 `json:"state"`
	Protect        uint32 `json:"protect"`
	Type           uint32 `json:"type"`
}

type MemoryCollector struct {
	outputDir      string
	includeModules bool
	includeStacks  bool
}

func NewMemoryCollector(outputDir string) *MemoryCollector {
	return &MemoryCollector{
		outputDir:      outputDir,
		includeModules: true,
		includeStacks:  false,
	}
}

func (c *MemoryCollector) SetIncludeModules(include bool) {
	c.includeModules = include
}

func (c *MemoryCollector) SetIncludeStacks(include bool) {
	c.includeStacks = include
}

func (c *MemoryCollector) CollectProcessMemory(pid uint32) (*MemoryDumpResult, error) {
	result := &MemoryDumpResult{
		ProcessID:   pid,
		ProcessName: fmt.Sprintf("Process_%d", pid),
		DumpTime:    time.Now(),
	}

	info, err := getProcessInfo(pid)
	if err == nil {
		result.ProcessName = info.Name
	}

	dumpPath := filepath.Join(c.outputDir, fmt.Sprintf("memory_%d_%s.raw", pid, time.Now().Format("20060102_150405")))

	dumpData, err := readProcessMemory(pid)
	if err != nil {
		result.Error = err.Error()
		return result, err
	}

	file, err := os.Create(dumpPath)
	if err != nil {
		result.Error = err.Error()
		return result, err
	}
	defer file.Close()

	written, err := file.Write(dumpData)
	if err != nil {
		result.Error = err.Error()
		return result, err
	}

	result.DumpSize = int64(written)
	result.DumpPath = dumpPath
	result.Hash = calculateMemoryHash(dumpData)
	result.Permissions = MemoryPermissions{Readable: true}

	if c.includeModules {
		modules, _ := c.collectModules(pid)
		result.Modules = modules
	}

	return result, nil
}

func (c *MemoryCollector) CollectSystemMemory() (*MemoryDumpResult, error) {
	result := &MemoryDumpResult{
		ProcessID:   0,
		ProcessName: "System",
		DumpTime:    time.Now(),
	}

	dumpPath := filepath.Join(c.outputDir, fmt.Sprintf("system_memory_%s.raw", time.Now().Format("20060102_150405")))

	dumpData, err := readSystemMemory()
	if err != nil {
		result.Error = err.Error()
		return result, err
	}

	file, err := os.Create(dumpPath)
	if err != nil {
		result.Error = err.Error()
		return result, err
	}
	defer file.Close()

	written, err := file.Write(dumpData)
	if err != nil {
		result.Error = err.Error()
		return result, err
	}

	result.DumpSize = int64(written)
	result.DumpPath = dumpPath
	result.Hash = calculateMemoryHash(dumpData)

	return result, nil
}

func (c *MemoryCollector) collectModules(pid uint32) ([]MemoryModule, error) {
	modules := make([]MemoryModule, 0)

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION|windows.PROCESS_VM_READ, false, pid)
	if err != nil {
		return modules, err
	}
	defer windows.CloseHandle(hProcess)

	var moduleCount uint32
	err = windows.EnumProcessModules(hProcess, nil, 0, &moduleCount)
	if err != nil {
		return modules, err
	}

	handleSize := unsafe.Sizeof(windows.Handle(0))
	moduleHandles := make([]windows.Handle, moduleCount/uint32(handleSize))
	err = windows.EnumProcessModules(hProcess, &moduleHandles[0], moduleCount, &moduleCount)
	if err != nil {
		return modules, err
	}

	for _, hModule := range moduleHandles {
		var modName [windows.MAX_PATH]uint16
		windows.GetModuleBaseName(hProcess, hModule, &modName[0], uint32(len(modName)))

		var modInfo windows.ModuleInfo
		err := windows.GetModuleInformation(hProcess, hModule, &modInfo, uint32(unsafe.Sizeof(modInfo)))
		if err != nil {
			continue
		}

		modules = append(modules, MemoryModule{
			BaseAddress: uint64(hModule),
			Size:        uint64(modInfo.SizeOfImage),
			Name:        windows.UTF16ToString(modName[:]),
		})
	}

	return modules, nil
}

var (
	ErrProcessMemoryNotImplemented = fmt.Errorf("process memory dump not implemented")
	ErrSystemMemoryNotImplemented  = fmt.Errorf("system memory dump not implemented")
)

type processInfo struct {
	Name string
}

func getProcessInfo(pid uint32) (processInfo, error) {
	if runtime.GOOS != "windows" {
		return processInfo{Name: fmt.Sprintf("Process_%d", pid)}, nil
	}

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION, false, pid)
	if err != nil {
		return processInfo{Name: fmt.Sprintf("Process_%d", pid)}, err
	}
	defer windows.CloseHandle(hProcess)

	var name [windows.MAX_PATH]uint16
	size := uint32(len(name))
	if err := windows.QueryFullProcessImageName(hProcess, 0, &name[0], &size); err != nil {
		return processInfo{Name: fmt.Sprintf("Process_%d", pid)}, err
	}

	return processInfo{Name: windows.UTF16ToString(name[:])}, nil
}

func readProcessMemory(pid uint32) ([]byte, error) {
	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION|windows.PROCESS_VM_READ, false, pid)
	if err != nil {
		return nil, fmt.Errorf("failed to open process: %w", err)
	}
	defer windows.CloseHandle(hProcess)

	var memInfo windows.MemoryBasicInformation
	var buffer bytes.Buffer

	address := uintptr(0)
	for {
		err := windows.VirtualQueryEx(hProcess, address, &memInfo, unsafe.Sizeof(memInfo))
		if err != nil {
			break
		}

		if memInfo.State == windows.MEM_COMMIT && memInfo.Protect&0x02 != 0 {
			size := uint64(memInfo.RegionSize)

			if size > 100*1024*1024 {
				size = 100 * 1024 * 1024
			}

			data := make([]byte, size)
			var nr uintptr
			err := windows.ReadProcessMemory(
				hProcess,
				memInfo.BaseAddress,
				&data[0],
				uintptr(len(data)),
				&nr,
			)

			if err == nil && nr > 0 {
				buffer.Write(data[:nr])
			}
		}

		address = uintptr(memInfo.BaseAddress) + uintptr(memInfo.RegionSize)
		if address == 0 {
			break
		}
	}

	return buffer.Bytes(), nil
}

func readSystemMemory() ([]byte, error) {
	return nil, ErrSystemMemoryNotImplemented
}

func calculateMemoryHash(data []byte) string {
	if len(data) == 0 {
		return ""
	}
	hash := sha256.Sum256(data)
	return hex.EncodeToString(hash[:])
}

type MemoryAnalysis struct {
	DumpFile           string        `json:"dump_file"`
	Hash               string        `json:"hash"`
	AnalysisTime       time.Time     `json:"analysis_time"`
	ProcessTree        []ProcessNode `json:"process_tree,omitempty"`
	NetworkConnections []NetworkConn `json:"network_connections,omitempty"`
	LoadedDLLs         []DLLInfo     `json:"loaded_dlls,omitempty"`
	SuspiciousAPIs     []APICall     `json:"suspicious_apis,omitempty"`
}

type ProcessNode struct {
	PID      uint32        `json:"pid"`
	Name     string        `json:"name"`
	PPID     uint32        `json:"ppid"`
	Children []ProcessNode `json:"children,omitempty"`
}

type NetworkConn struct {
	Protocol   string `json:"protocol"`
	LocalAddr  string `json:"local_addr"`
	RemoteAddr string `json:"remote_addr"`
	State      string `json:"state"`
	PID        uint32 `json:"pid"`
}

type DLLInfo struct {
	Name        string `json:"name"`
	BaseAddress uint64 `json:"base_address"`
	Size        uint32 `json:"size"`
	Path        string `json:"path"`
}

type APICall struct {
	Address   uint64   `json:"address"`
	APIName   string   `json:"api_name"`
	Module    string   `json:"module"`
	Arguments []string `json:"arguments,omitempty"`
}

func AnalyzeMemoryDump(dumpPath string) (*MemoryAnalysis, error) {
	analysis := &MemoryAnalysis{
		DumpFile:     dumpPath,
		AnalysisTime: time.Now(),
	}

	data, err := os.ReadFile(dumpPath)
	if err != nil {
		return nil, fmt.Errorf("failed to read dump file: %w", err)
	}

	hash := sha256.Sum256(data)
	analysis.Hash = hex.EncodeToString(hash[:])

	return analysis, nil
}

func ExtractProcessTree(dumpData []byte) ([]ProcessNode, error) {
	return []ProcessNode{}, nil
}

func FindNetworkConnections(dumpData []byte) ([]NetworkConn, error) {
	return []NetworkConn{}, nil
}

func FindSuspiciousAPI(dumpData []byte) ([]APICall, error) {
	return []APICall{}, nil
}

type MemoryDumpMetadata struct {
	Version      string    `json:"version"`
	Timestamp    time.Time `json:"timestamp"`
	Hostname     string    `json:"hostname"`
	ProcessID    uint32    `json:"process_id,omitempty"`
	ProcessName  string    `json:"process_name,omitempty"`
	DumpType     string    `json:"dump_type"`
	Size         int64     `json:"size"`
	Hash         string    `json:"hash"`
	Algorithm    string    `json:"algorithm"`
	OSVersion    string    `json:"os_version"`
	Architecture string    `json:"architecture"`
}

func (m *MemoryDumpMetadata) ToJSON() ([]byte, error) {
	return json.MarshalIndent(m, "", "  ")
}

func (m *MemoryDumpMetadata) Save(path string) error {
	data, err := m.ToJSON()
	if err != nil {
		return err
	}
	return os.WriteFile(path, data, 0644)
}

func CreateMemoryDumpMetadata(dumpPath string, dumpType string, hostname string, pid uint32, processName string) (*MemoryDumpMetadata, error) {
	data, err := os.ReadFile(dumpPath)
	if err != nil {
		return nil, err
	}

	hash := sha256.Sum256(data)

	metadata := &MemoryDumpMetadata{
		Version:      version.Version,
		Timestamp:    time.Now(),
		Hostname:     hostname,
		ProcessID:    pid,
		ProcessName:  processName,
		DumpType:     dumpType,
		Size:         int64(len(data)),
		Hash:         hex.EncodeToString(hash[:]),
		Algorithm:    "SHA256",
		OSVersion:    "Windows",
		Architecture: "x64",
	}

	return metadata, nil
}

type MemoryCollectionRequest struct {
	PID            uint32   `json:"pid,omitempty"`
	IncludeModules bool     `json:"include_modules"`
	IncludeStacks  bool     `json:"include_stacks"`
	OutputDir      string   `json:"output_dir"`
	FilterPatterns []string `json:"filter_patterns,omitempty"`
}

type MemoryCollectionResponse struct {
	Success bool                `json:"success"`
	Dumps   []*MemoryDumpResult `json:"dumps"`
	Errors  []string            `json:"errors,omitempty"`
}

func CollectMemoryForProcess(req *MemoryCollectionRequest) (*MemoryCollectionResponse, error) {
	response := &MemoryCollectionResponse{
		Success: true,
		Dumps:   make([]*MemoryDumpResult, 0),
		Errors:  make([]string, 0),
	}

	if req.OutputDir == "" {
		req.OutputDir = os.TempDir()
	}

	collector := NewMemoryCollector(req.OutputDir)
	collector.SetIncludeModules(req.IncludeModules)
	collector.SetIncludeStacks(req.IncludeStacks)

	if req.PID > 0 {
		result, err := collector.CollectProcessMemory(req.PID)
		if err != nil {
			response.Errors = append(response.Errors, err.Error())
			response.Success = false
		} else {
			response.Dumps = append(response.Dumps, result)
		}
	} else {
		result, err := collector.CollectSystemMemory()
		if err != nil {
			response.Errors = append(response.Errors, err.Error())
			response.Success = false
		} else {
			response.Dumps = append(response.Dumps, result)
		}
	}

	return response, nil
}

type MemoryRegions struct {
	Regions []MemoryRegion `json:"regions"`
}

func QueryMemoryRegions(pid uint32) (*MemoryRegions, error) {
	regions := make([]MemoryRegion, 0)

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION|windows.PROCESS_VM_READ, false, pid)
	if err != nil {
		return &MemoryRegions{Regions: regions}, err
	}
	defer windows.CloseHandle(hProcess)

	var memInfo windows.MemoryBasicInformation
	var address uintptr = 0

	for {
		err := windows.VirtualQueryEx(hProcess, address, &memInfo, unsafe.Sizeof(memInfo))
		if err != nil {
			break
		}

		regions = append(regions, MemoryRegion{
			BaseAddress:    uint64(memInfo.BaseAddress),
			AllocationBase: uint64(memInfo.AllocationBase),
			RegionSize:     uint64(memInfo.RegionSize),
			State:          uint32(memInfo.State),
			Protect:        uint32(memInfo.Protect),
			Type:           uint32(memInfo.Type),
		})

		address = uintptr(memInfo.BaseAddress) + uintptr(memInfo.RegionSize)
		if address == 0 {
			break
		}
	}

	return &MemoryRegions{Regions: regions}, nil
}

func FormatMemoryDumpResult(result *MemoryDumpResult) string {
	var buf bytes.Buffer
	buf.WriteString(fmt.Sprintf("Process ID: %d\n", result.ProcessID))
	buf.WriteString(fmt.Sprintf("Process Name: %s\n", result.ProcessName))
	buf.WriteString(fmt.Sprintf("Dump Path: %s\n", result.DumpPath))
	buf.WriteString(fmt.Sprintf("Dump Size: %d bytes\n", result.DumpSize))
	buf.WriteString(fmt.Sprintf("Dump Time: %s\n", result.DumpTime.Format(time.RFC3339)))
	buf.WriteString(fmt.Sprintf("Hash: %s\n", result.Hash))
	if result.Error != "" {
		buf.WriteString(fmt.Sprintf("Error: %s\n", result.Error))
	}
	if len(result.Modules) > 0 {
		buf.WriteString(fmt.Sprintf("Modules: %d\n", len(result.Modules)))
	}
	return buf.String()
}
