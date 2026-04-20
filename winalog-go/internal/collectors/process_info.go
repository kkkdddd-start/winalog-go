//go:build windows

package collectors

import (
	"context"
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

	for {
		exeName := windows.UTF16ToString(entry.ExeFile[:])
		exePath := getProcessPath(entry.ProcessID)

		proc := &types.ProcessInfo{
			PID:         int32(entry.ProcessID),
			PPID:        int32(entry.ParentProcessID),
			Name:        exeName,
			Path:        exePath,
			CommandLine: getCommandLine(entry.ProcessID),
			User:        getProcessUser(entry.ProcessID),
			StartTime:   getProcessStartTime(entry.ProcessID),
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

		err = windows.Process32Next(snapshot, &entry)
		if err != nil {
			break
		}
	}

	return processes, nil
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

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_LIMITED_INFORMATION, false, pid)
	if err != nil {
		return ""
	}
	defer windows.CloseHandle(hProcess)

	var buf [32768]uint16
	size := uint32(len(buf))
	if err := windows.QueryFullProcessImageName(hProcess, 0, &buf[0], &size); err != nil {
		return ""
	}

	path := windows.UTF16ToString(buf[:size])
	if path == "" {
		return ""
	}

	script := fmt.Sprintf(`(Get-CimInstance Win32_Process -Filter "ProcessId=%d").CommandLine`, pid)
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	result := utils.RunPowerShellWithContext(ctx, script)
	if result.Success() && result.Output != "" {
		return strings.TrimSpace(result.Output)
	}

	return path
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

func getProcessStartTime(pid uint32) time.Time {
	defer func() {
		if r := recover(); r != nil {
			return
		}
	}()

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_LIMITED_INFORMATION, false, pid)
	if err != nil {
		return time.Time{}
	}
	defer windows.CloseHandle(hProcess)

	var creationTime windows.Filetime
	var exitTime windows.Filetime
	var kernelTime windows.Filetime
	var userTime windows.Filetime
	err = windows.GetProcessTimes(hProcess, &creationTime, &exitTime, &kernelTime, &userTime)
	if err != nil {
		return time.Time{}
	}

	if creationTime.Nanoseconds() == 0 && creationTime.HighDateTime == 0 && creationTime.LowDateTime == 0 {
		return time.Time{}
	}

	return time.Date(1601, 1, 1, 0, 0, 0, 0, time.UTC).
		Add(time.Duration(creationTime.Nanoseconds()) * time.Nanosecond)
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

	for {
		pid := int(entry.ProcessID)
		ppid := int(entry.ParentProcessID)
		exePath := getProcessPath(uint32(pid))

		processes = append(processes, Process{
			PID:     pid,
			PPID:    ppid,
			Name:    windows.UTF16ToString(entry.ExeFile[:]),
			Path:    exePath,
			Command: getCommandLine(uint32(pid)),
			User:    getProcessUser(uint32(pid)),
		})

		err = windows.Process32Next(snapshot, &entry)
		if err != nil {
			break
		}
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
	return true
}

func GetProcessStartTime(pid int) time.Time {
	return getProcessStartTime(uint32(pid))
}
