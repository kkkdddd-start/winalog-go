package collectors

import (
	"context"
	"os"
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

	pid := os.Getpid()
	ppid := os.Getppid()
	exe, _ := os.Executable()

	proc := &types.ProcessInfo{
		PID:         int32(pid),
		PPID:        int32(ppid),
		Name:        "winalog",
		Path:        exe,
		CommandLine: "winalog",
		User:        "current",
		StartTime:   time.Now(),
	}

	if proc.StartTime.IsZero() {
		proc.StartTime = time.Now()
	}

	processes = append(processes, proc)

	return processes, nil
}

func (c *ProcessInfoCollector) getProcessInfoByPID(pid int) (*types.ProcessInfo, error) {
	proc := &types.ProcessInfo{
		PID:  int32(pid),
		Name: "process",
	}

	return proc, nil
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

func ListProcesses() ([]Process, error) {
	processes := []Process{
		{PID: 1, PPID: 0, Name: "init", Exe: "/sbin/init", User: "root"},
	}

	return processes, nil
}

func GetProcessCmdLine(pid int) string {
	return ""
}

func GetProcessUser(pid int) (string, error) {
	return "root", nil
}

func IsProcessRunning(pid int) bool {
	return pid > 0
}

func GetProcessStartTime(pid int) (time.Time, error) {
	return time.Now(), nil
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
