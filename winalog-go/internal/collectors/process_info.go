//go:build windows

package collectors

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"
	"time"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/forensics"
	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
	"golang.org/x/sys/windows"
)

type ProcessInfoCollector struct {
	BaseCollector
}

type Process struct {
	PID     int
	PPID    int
	Name    string
	Path    string
	Command string
	User    string
}

func NewProcessInfoCollector() *ProcessInfoCollector {
	return &ProcessInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "process_info",
				Description:   "Collect process information",
				RequiresAdmin: true,
				Version:       "1.0.0",
			},
		},
	}
}

func (c *ProcessInfoCollector) Collect(ctx context.Context) ([]interface{}, error) {
	processes, err := c.collectProcessInfo()
	if err != nil {
		return nil, err
	}
	interfaces := make([]interface{}, len(processes))
	for i, p := range processes {
		interfaces[i] = p
	}
	return interfaces, nil
}

func (c *ProcessInfoCollector) collectProcessInfo() ([]*types.ProcessInfo, error) {
	type procInfo struct {
		pid  uint32
		ppid uint32
		name string
	}

	processes := make([]*types.ProcessInfo, 0)

	snapshot, err := windows.CreateToolhelp32Snapshot(windows.TH32CS_SNAPPROCESS, 0)
	if err != nil {
		return nil, err
	}
	defer windows.CloseHandle(snapshot)

	var entry windows.ProcessEntry32
	entry.Size = uint32(unsafe.Sizeof(entry))

	err = windows.Process32First(snapshot, &entry)
	if err != nil {
		return nil, err
	}

	var procList []procInfo
	for {
		procList = append(procList, procInfo{
			pid:  entry.ProcessID,
			ppid: entry.ParentProcessID,
			name: windows.UTF16ToString(entry.ExeFile[:]),
		})
		err = windows.Process32Next(snapshot, &entry)
		if err != nil {
			break
		}
	}

	pids := make([]uint32, len(procList))
	for i, p := range procList {
		pids[i] = p.pid
	}
	commandLines := batchGetCommandLines(pids)
	memMap, cpuMap := batchGetProcessMemoryAndCPU(pids)

	for _, p := range procList {
		exePath := getProcessPath(p.pid)

		proc := &types.ProcessInfo{
			PID:         int32(p.pid),
			PPID:        int32(p.ppid),
			Name:        p.name,
			Path:        exePath,
			CommandLine: commandLines[p.pid],
			User:        getProcessUser(p.pid),
			StartTime:   getProcessStartTime(p.pid),
			IsElevated:  isProcessElevated(p.pid),
			MemoryMB:    memMap[p.pid],
			CPUPercent:  cpuMap[p.pid],
		}

		if exePath != "" && !strings.HasSuffix(strings.ToLower(exePath), ".tmp") {
			sigInfo, _ := forensics.VerifySignature(exePath)
			if sigInfo != nil {
				proc.IsSigned = sigInfo.Status == "Valid"
				if sigInfo.Status != "Error" && sigInfo.Status != "Unsupported" {
					proc.Signature = &types.SignatureInfo{
						Status:     sigInfo.Status,
						Issuer:     sigInfo.Issuer,
						Subject:    sigInfo.Signer,
						ValidFrom:  formatTime(sigInfo.NotBefore),
						ValidTo:    formatTime(sigInfo.NotAfter),
						Thumbprint: sigInfo.Thumbprint,
					}
				}
			}
		}

		processes = append(processes, proc)
	}

	return processes, nil
}

func batchGetCommandLines(pids []uint32) map[uint32]string {
	result := make(map[uint32]string)

	if len(pids) == 0 {
		return result
	}

	script := `(Get-CimInstance Win32_Process | Select-Object ProcessId, CommandLine | ConvertTo-Json -Compress)`

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	cmdResult := utils.RunPowerShellWithContext(ctx, script)
	if !cmdResult.Success() || cmdResult.Output == "" {
		return result
	}

	var entries []struct {
		ProcessID   uint32 `json:"ProcessId"`
		CommandLine string `json:"CommandLine"`
	}

	if err := json.Unmarshal([]byte(cmdResult.Output), &entries); err != nil {
		var single struct {
			ProcessID   uint32 `json:"ProcessId"`
			CommandLine string `json:"CommandLine"`
		}
		if err2 := json.Unmarshal([]byte(cmdResult.Output), &single); err2 == nil && single.ProcessID != 0 {
			result[single.ProcessID] = single.CommandLine
		}
		return result
	}

	pidSet := make(map[uint32]bool)
	for _, pid := range pids {
		pidSet[pid] = true
	}

	for _, e := range entries {
		if pidSet[e.ProcessID] {
			result[e.ProcessID] = e.CommandLine
		}
	}

	return result
}

func (c *ProcessInfoCollector) CollectProcessInfoWithSignature() ([]*types.ProcessInfo, error) {
	return c.collectProcessInfo()
}

func getProcessPath(pid uint32) string {
	defer func() {
		if r := recover(); r != nil {
			return
		}
	}()

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION, false, pid)
	if err != nil {
		return ""
	}
	defer windows.CloseHandle(hProcess)

	var pathBuf [windows.MAX_PATH]uint16
	size := uint32(len(pathBuf))
	if err := windows.QueryFullProcessImageName(hProcess, 0, &pathBuf[0], &size); err != nil {
		return ""
	}
	return windows.UTF16ToString(pathBuf[:size])
}

func formatTime(t *time.Time) string {
	if t == nil {
		return ""
	}
	return t.Format(time.RFC3339)
}

func getCommandLine(pid uint32) string {
	defer func() {
		if r := recover(); r != nil {
			return
		}
	}()

	script := fmt.Sprintf(`(Get-CimInstance Win32_Process -Filter "ProcessId=%d" -ErrorAction SilentlyContinue).CommandLine`, pid)
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	result := utils.RunPowerShellWithContext(ctx, script)
	if result.Success() && result.Output != "" {
		return strings.TrimSpace(result.Output)
	}

	return ""
}

func getProcessUser(pid uint32) string {
	defer func() {
		if r := recover(); r != nil {
			return
		}
	}()

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION, false, pid)
	if err != nil {
		return "SYSTEM"
	}
	defer windows.CloseHandle(hProcess)

	var token windows.Token
	err = windows.OpenProcessToken(hProcess, windows.TOKEN_QUERY, &token)
	if err != nil {
		return "SYSTEM"
	}
	defer token.Close()

	tokenUser, err := token.GetTokenUser()
	if err != nil {
		return "SYSTEM"
	}

	user, domain, _, err := tokenUser.User.Sid.LookupAccount("")
	if err != nil {
		return "SYSTEM"
	}

	return domain + "\\" + user
}

func isProcessElevated(pid uint32) bool {
	defer func() {
		if r := recover(); r != nil {
			return
		}
	}()

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION, false, pid)
	if err != nil {
		return false
	}
	defer windows.CloseHandle(hProcess)

	var token windows.Token
	err = windows.OpenProcessToken(hProcess, windows.TOKEN_QUERY, &token)
	if err != nil {
		return false
	}
	defer token.Close()

	var elevation uint32
	err = windows.GetTokenInformation(token, windows.TokenElevation, (*byte)(unsafe.Pointer(&elevation)), 4, nil)
	if err != nil {
		return false
	}

	return elevation != 0
}

func batchGetProcessMemoryAndCPU(pids []uint32) (map[uint32]float64, map[uint32]float64) {
	memMap := make(map[uint32]float64)
	cpuMap := make(map[uint32]float64)

	if len(pids) == 0 {
		return memMap, cpuMap
	}

	memScript := `(Get-CimInstance Win32_Process | Select-Object ProcessId, WorkingSetSize | ConvertTo-Json -Compress)`
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	memResult := utils.RunPowerShellWithContext(ctx, memScript)
	if memResult.Success() && memResult.Output != "" {
		var entries []struct {
			ProcessID    uint32 `json:"ProcessId"`
			WorkingSetSize int64 `json:"WorkingSetSize"`
		}
		if err := json.Unmarshal([]byte(memResult.Output), &entries); err == nil {
			pidSet := make(map[uint32]bool)
			for _, pid := range pids {
				pidSet[pid] = true
			}
			for _, e := range entries {
				if pidSet[e.ProcessID] {
					memMap[e.ProcessID] = float64(e.WorkingSetSize) / 1024 / 1024
				}
			}
		}
	}

	cpuScript := `(Get-CimInstance Win32_PerfFormattedData_PerfProc_Process | Select-Object IDProcess, PercentProcessorTime | ConvertTo-Json -Compress)`
	cpuResult := utils.RunPowerShellWithContext(ctx, cpuScript)
	if cpuResult.Success() && cpuResult.Output != "" {
		var entries []struct {
			IDProcess             uint32 `json:"IDProcess"`
			PercentProcessorTime float64 `json:"PercentProcessorTime"`
		}
		if err := json.Unmarshal([]byte(cpuResult.Output), &entries); err == nil {
			pidSet := make(map[uint32]bool)
			for _, pid := range pids {
				pidSet[pid] = true
			}
			for _, e := range entries {
				if pidSet[e.IDProcess] {
					cpuMap[e.IDProcess] = e.PercentProcessorTime
				}
			}
		}
	}

	return memMap, cpuMap
}

func getProcessStartTime(pid uint32) time.Time {
	defer func() {
		if r := recover(); r != nil {
			return
		}
	}()

	if pid == 0 {
		return time.Time{}
	}

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_LIMITED_INFORMATION|windows.PROCESS_QUERY_INFORMATION, false, pid)
	if err != nil {
		return time.Time{}
	}
	defer windows.CloseHandle(hProcess)

	if hProcess == 0 {
		return time.Time{}
	}

	var creationTime windows.Filetime
	var exitTime windows.Filetime
	var kernelTime windows.Filetime
	var userTime windows.Filetime
	err = windows.GetProcessTimes(hProcess, &creationTime, &exitTime, &kernelTime, &userTime)
	if err != nil {
		return time.Time{}
	}

	high := uint64(creationTime.HighDateTime)
	low := uint64(creationTime.LowDateTime)
	if high == 0 && low == 0 {
		return time.Time{}
	}

	ns := (high << 32) | low
	return time.Date(1601, 1, 1, 0, 0, 0, 0, time.UTC).
		Add(time.Duration(ns) * 100)
}

func ListProcesses() ([]Process, error) {
	var processes []Process

	snapshot, err := windows.CreateToolhelp32Snapshot(windows.TH32CS_SNAPPROCESS, 0)
	if err != nil {
		return nil, err
	}
	defer windows.CloseHandle(snapshot)

	var entry windows.ProcessEntry32
	entry.Size = uint32(unsafe.Sizeof(entry))

	err = windows.Process32First(snapshot, &entry)
	if err != nil {
		return nil, err
	}

	var procList []struct {
		pid  uint32
		ppid uint32
		name string
	}
	for {
		procList = append(procList, struct {
			pid  uint32
			ppid uint32
			name string
		}{
			pid:  entry.ProcessID,
			ppid: entry.ParentProcessID,
			name: windows.UTF16ToString(entry.ExeFile[:]),
		})
		err = windows.Process32Next(snapshot, &entry)
		if err != nil {
			break
		}
	}

	pids := make([]uint32, len(procList))
	for i, p := range procList {
		pids[i] = p.pid
	}
	commandLines := batchGetCommandLines(pids)

	for _, p := range procList {
		exePath := getProcessPath(p.pid)
		processes = append(processes, Process{
			PID:     int(p.pid),
			PPID:    int(p.ppid),
			Name:    p.name,
			Path:    exePath,
			Command: commandLines[p.pid],
			User:    getProcessUser(p.pid),
		})
	}

	return processes, nil
}

func GetProcessCmdLine(pid int) string {
	return getCommandLine(uint32(pid))
}

func GetProcessUser(pid int) string {
	return getProcessUser(uint32(pid))
}

func IsProcessRunning(pid int) bool {
	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION, false, uint32(pid))
	if err != nil {
		return false
	}
	defer windows.CloseHandle(hProcess)

	var exitCode uint32
	if err := windows.GetExitCodeProcess(hProcess, &exitCode); err != nil {
		return false
	}

	return exitCode == 259
}

func GetProcessStartTime(pid int) time.Time {
	return getProcessStartTime(uint32(pid))
}
