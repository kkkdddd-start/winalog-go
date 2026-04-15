package collectors

import (
	"context"
	"fmt"
	"os"
	"strconv"
	"strings"
	"time"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"golang.org/x/sys/windows"
)

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

		proc := &types.ProcessInfo{
			PID:         int32(entry.ProcessID),
			PPID:        int32(entry.ParentProcessID),
			Name:        exeName,
			CommandLine: getCommandLine(entry.ProcessID),
			User:        getProcessUser(entry.ProcessID),
			StartTime:   getProcessStartTime(entry.ProcessID),
		}

		processes = append(processes, proc)

		err = windows.Process32Next(snapshot, &entry)
		if err != nil {
			break
		}
	}

	return processes, nil
}

func getCommandLine(pid uint32) string {
	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION|windows.PROCESS_VM_READ, false, pid)
	if err != nil {
		return ""
	}
	defer windows.CloseHandle(hProcess)

	var peb windows.PEB
	var bytesRead uintptr
	err = windows.ReadProcessMemory(hProcess, unsafe.Pointer(peb.ProcessParameters), unsafe.Pointer(&peb), unsafe.Sizeof(peb), &bytesRead)
	if err != nil {
		return ""
	}

	var params windows.RtlUserProcessParameters
	err = windows.ReadProcessMemory(hProcess, unsafe.Pointer(peb.ProcessParameters), unsafe.Pointer(&params), unsafe.Sizeof(params), &bytesRead)
	if err != nil {
		return ""
	}

	if params.CommandLine.Length == 0 {
		return ""
	}

	cmdLine, err := windows.GetCommandLine()
	if err != nil {
		return ""
	}

	return cmdLine
}

func getProcessUser(pid uint32) string {
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
	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION, false, pid)
	if err != nil {
		return time.Now()
	}
	defer windows.CloseHandle(hProcess)

	var creationTime windows.Filetime
	err = windows.GetProcessTimes(hProcess, &creationTime, nil, nil, nil)
	if err != nil {
		return time.Now()
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
		processes = append(processes, Process{
			PID:    int(entry.ProcessID),
			PPID:   int(entry.ParentProcessID),
			Name:   windows.UTF16ToString(entry.ExeFile[:]),
			Status: "Running",
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
