package collectors

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type ProcessInfoCollector struct {
	BaseCollector
}

func NewProcessInfoCollector() *ProcessInfoCollector {
	return &ProcessInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "process_info",
				Description:   "Collect process information",
				RequiresAdmin: false,
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

	entries, err := os.ReadDir("/proc")
	if err != nil {
		return processes, nil
	}

	for _, entry := range entries {
		if !entry.IsDir() {
			continue
		}

		pid, err := strconv.Atoi(entry.Name())
		if err != nil {
			continue
		}

		proc, err := c.getProcessInfo(pid)
		if err != nil {
			continue
		}

		if proc != nil {
			processes = append(processes, proc)
		}
	}

	return processes, nil
}

func (c *ProcessInfoCollector) getProcessInfo(pid int) (*types.ProcessInfo, error) {
	proc := &types.ProcessInfo{
		PID:  int32(pid),
		Name: "unknown",
	}

	statPath := filepath.Join("/proc", strconv.Itoa(pid), "stat")
	cmdlinePath := filepath.Join("/proc", strconv.Itoa(pid), "cmdline")

	cmdline, _ := os.ReadFile(cmdlinePath)
	if len(cmdline) > 0 {
		proc.CommandLine = strings.ReplaceAll(string(cmdline), "\x00", " ")
		proc.CommandLine = strings.TrimSpace(proc.CommandLine)
		if parts := strings.Fields(proc.CommandLine); len(parts) > 0 {
			proc.Path = parts[0]
			proc.Name = filepath.Base(parts[0])
		}
	}

	stat, err := os.ReadFile(statPath)
	if err == nil {
		statStr := string(stat)
		if idx := strings.Index(statStr, "("); idx > 0 {
			endIdx := strings.LastIndex(statStr, ")")
			if endIdx > idx {
				proc.Name = statStr[idx+1 : endIdx]
			}
		}

		fields := strings.Fields(statStr)
		if len(fields) >= 4 {
			if ppid, err := strconv.Atoi(fields[3]); err == nil {
				proc.PPID = int32(ppid)
			}
		}

		if len(fields) >= 22 {
			if utime, err := strconv.ParseInt(fields[13], 10, 64); err == nil {
				bootTime, _ := getBootTime()
				proc.StartTime = bootTime.Add(time.Duration(utime*10000) * time.Microsecond)
			}
		}
	}

	exePath := filepath.Join("/proc", strconv.Itoa(pid), "exe")
	if exe, err := os.Readlink(exePath); err == nil && exe != "" {
		proc.Path = exe
		if proc.Name == "unknown" {
			proc.Name = filepath.Base(exe)
		}
	}

	commPath := filepath.Join("/proc", strconv.Itoa(pid), "comm")
	if comm, err := os.ReadFile(commPath); err == nil {
		proc.Name = strings.TrimSpace(string(comm))
	}

	return proc, nil
}

func ListProcesses() ([]Process, error) {
	processes := []Process{}

	entries, err := os.ReadDir("/proc")
	if err != nil {
		return processes, nil
	}

	for _, entry := range entries {
		if !entry.IsDir() {
			continue
		}

		pid, err := strconv.Atoi(entry.Name())
		if err != nil {
			continue
		}

		proc := Process{PID: pid}

		statPath := filepath.Join("/proc", entry.Name(), "stat")
		stat, err := os.ReadFile(statPath)
		if err == nil {
			statStr := string(stat)
			idx := strings.Index(statStr, "(")
			endIdx := strings.LastIndex(statStr, ")")
			if idx > 0 && endIdx > idx {
				proc.Name = statStr[idx+1 : endIdx]
			}

			fields := strings.Fields(statStr)
			if len(fields) >= 4 {
				if ppid, err := strconv.Atoi(fields[3]); err == nil {
					proc.PPID = ppid
				}
			}
		}

		cmdlinePath := filepath.Join("/proc", entry.Name(), "cmdline")
		cmdline, err := os.ReadFile(cmdlinePath)
		if err == nil && len(cmdline) > 0 {
			proc.Args = strings.ReplaceAll(string(cmdline), "\x00", " ")
			proc.Args = strings.TrimSpace(proc.Args)
		}

		exePath := filepath.Join("/proc", entry.Name(), "exe")
		if exe, err := os.Readlink(exePath); err == nil && exe != "" {
			proc.Exe = exe
		}

		statusPath := filepath.Join("/proc", entry.Name(), "status")
		status, err := os.ReadFile(statusPath)
		if err == nil {
			for _, line := range strings.Split(string(status), "\n") {
				if strings.HasPrefix(line, "Uid:") {
					fields := strings.Fields(line)
					if len(fields) >= 2 {
						proc.User = fields[1]
					}
				}
			}
		}

		processes = append(processes, proc)
	}

	return processes, nil
}

func GetProcessCmdLine(pid int) string {
	cmdlinePath := filepath.Join("/proc", strconv.Itoa(pid), "cmdline")
	cmdline, err := os.ReadFile(cmdlinePath)
	if err != nil {
		return ""
	}
	return strings.ReplaceAll(string(cmdline), "\x00", " ")
}

func GetProcessUser(pid int) string {
	statusPath := filepath.Join("/proc", strconv.Itoa(pid), "status")
	status, err := os.ReadFile(statusPath)
	if err != nil {
		return "unknown"
	}
	for _, line := range strings.Split(string(status), "\n") {
		if strings.HasPrefix(line, "Uid:") {
			fields := strings.Fields(line)
			if len(fields) >= 2 {
				return fields[1]
			}
		}
	}
	return "unknown"
}

func IsProcessRunning(pid int) bool {
	_, err := os.Stat(filepath.Join("/proc", strconv.Itoa(pid)))
	return err == nil
}

func GetProcessStartTime(pid int) (time.Time, error) {
	statPath := filepath.Join("/proc", strconv.Itoa(pid), "stat")
	stat, err := os.ReadFile(statPath)
	if err != nil {
		return time.Time{}, err
	}

	fields := strings.Fields(string(stat))
	if len(fields) < 22 {
		return time.Time{}, fmt.Errorf("invalid stat file")
	}

	utime, err := strconv.ParseInt(fields[13], 10, 64)
	if err != nil {
		return time.Time{}, err
	}

	bootTime, err := getBootTime()
	if err != nil {
		return time.Time{}, err
	}

	return bootTime.Add(time.Duration(utime*10000) * time.Microsecond), nil
}

func getBootTime() (time.Time, error) {
	uptimePath := "/proc/uptime"
	uptime, err := os.ReadFile(uptimePath)
	if err != nil {
		return time.Now(), nil
	}

	fields := strings.Fields(string(uptime))
	if len(fields) < 1 {
		return time.Now(), nil
	}

	uptimeSeconds, err := strconv.ParseFloat(fields[0], 64)
	if err != nil {
		return time.Now(), nil
	}

	return time.Now().Add(-time.Duration(uptimeSeconds) * time.Second), nil
}

func CollectProcessInfo(ctx context.Context) ([]*types.ProcessInfo, error) {
	collector := NewProcessInfoCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	processes := make([]*types.ProcessInfo, 0, len(results))
	for _, r := range results {
		if p, ok := r.(*types.ProcessInfo); ok {
			processes = append(processes, p)
		}
	}
	return processes, nil
}

type Process struct {
	PID    int
	PPID   int
	Name   string
	Exe    string
	Args   string
	User   string
	Status string
}
