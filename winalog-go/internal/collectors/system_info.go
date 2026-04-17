//go:build windows

package collectors

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"runtime"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type SystemInfoCollector struct {
	BaseCollector
}

func NewSystemInfoCollector() *SystemInfoCollector {
	return &SystemInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "system_info",
				Description:   "Collect system information",
				RequiresAdmin: false,
				Version:       "1.0.0",
			},
		},
	}
}

func (c *SystemInfoCollector) Collect(ctx context.Context) ([]interface{}, error) {
	info := c.collectSystemInfo()
	return []interface{}{info}, nil
}

func (c *SystemInfoCollector) collectSystemInfo() *types.SystemInfo {
	info := &types.SystemInfo{}

	info.Hostname, _ = os.Hostname()
	info.LocalTime = time.Now()
	info.OSName = runtime.GOOS
	info.Architecture = runtime.GOARCH

	if runtime.GOOS == "windows" {
		c.collectWindowsInfo(info)
	} else {
		c.collectLinuxInfo(info)
	}

	return info
}

func (c *SystemInfoCollector) collectWindowsInfo(info *types.SystemInfo) {
	if winVersion, err := utils.GetWindowsVersion(); err == nil {
		info.OSVersion = fmt.Sprintf("Windows %d.%d (Build %d)",
			winVersion.Major, winVersion.Minor, winVersion.Build)
		if winVersion.CSDVersion != "" {
			info.OSVersion += " " + winVersion.CSDVersion
		}
	}

	if domain, err := getComputerDomain(); err == nil {
		info.Domain = domain
	}

	if uptime, err := getSystemUptime(); err == nil {
		info.Uptime = uptime
		info.BootTime = time.Now().Add(-uptime)
	}

	info.TimeZone = getTimeZone()

	cpuCount, cpuModel := getCPUInfo()
	info.CPUCores = cpuCount
	info.CPUModel = cpuModel

	memTotal, memFree := getMemoryInfo()
	info.MemoryTotal = memTotal
	info.MemoryFree = memFree

	info.Admin = utils.IsAdmin()
}

func (c *SystemInfoCollector) collectLinuxInfo(info *types.SystemInfo) {
	info.OSVersion = "Linux"

	if data, err := os.ReadFile("/proc/uptime"); err == nil {
		var uptimeSeconds float64
		fmt.Sscanf(string(data), "%f", &uptimeSeconds)
		info.Uptime = time.Duration(uptimeSeconds) * time.Second
		info.BootTime = time.Now().Add(-info.Uptime)
	}

	if data, err := os.ReadFile("/proc/meminfo"); err == nil {
		lines := strings.Split(string(data), "\n")
		var memTotal, memFree int64
		for _, line := range lines {
			var key string
			var value int64
			if n, _ := fmt.Sscanf(line, "%s %d", &key, &value); n == 2 {
				if key == "MemTotal:" {
					memTotal = value * 1024
				} else if key == "MemAvailable:" {
					memFree = value * 1024
				}
			}
		}
		info.MemoryTotal = uint64(memTotal)
		info.MemoryFree = uint64(memFree)
	}

	if data, err := os.ReadFile("/proc/cpuinfo"); err == nil {
		lines := strings.Split(string(data), "\n")
		var modelName string
		var coreCount int
		for _, line := range lines {
			if strings.HasPrefix(line, "processor") {
				coreCount++
			}
			if strings.HasPrefix(line, "model name") {
				parts := strings.Split(line, ":")
				if len(parts) == 2 {
					modelName = strings.TrimSpace(parts[1])
				}
			}
		}
		info.CPUCores = coreCount
		info.CPUModel = modelName
	}
}

func getComputerDomain() (string, error) {
	cmd := `(Get-CimInstance Win32_ComputerSystem).Domain`
	result := utils.RunPowerShell(cmd)
	if result.Success() {
		return strings.TrimSpace(result.Output), nil
	}
	return "", result.Error
}

func getSystemUptime() (time.Duration, error) {
	cmd := `(Get-CimInstance Win32_OperatingSystem).LastBootUpTime`
	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return 0, result.Error
	}

	lastBootStr := strings.TrimSpace(result.Output)
	formats := []string{
		"20060102150405.000000-000",
		"2006-01-02 15:04:05",
	}

	for _, format := range formats {
		if t, err := time.Parse(format, lastBootStr); err == nil {
			return time.Since(t), nil
		}
	}

	return 0, fmt.Errorf("failed to parse uptime")
}

func getTimeZone() string {
	cmd := `Get-TimeZone | Select-Object -ExpandProperty Id`
	result := utils.RunPowerShell(cmd)
	if result.Success() {
		return strings.TrimSpace(result.Output)
	}
	return "Unknown"
}

func getCPUInfo() (int, string) {
	cmd := `Get-CimInstance Win32_Processor | Select-Object NumberOfCores, Name | ConvertTo-Json -Compress`
	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return runtime.NumCPU(), ""
	}

	var cpuRaw struct {
		NumberOfCores int    `json:"NumberOfCores"`
		Name          string `json:"Name"`
	}

	if err := json.Unmarshal([]byte(result.Output), &cpuRaw); err != nil {
		return runtime.NumCPU(), ""
	}

	return cpuRaw.NumberOfCores, cpuRaw.Name
}

func getMemoryInfo() (uint64, uint64) {
	cmd := `Get-CimInstance Win32_OperatingSystem | Select-Object TotalVisibleMemorySize, FreePhysicalMemory | ConvertTo-Json -Compress`
	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		var m runtime.MemStats
		runtime.ReadMemStats(&m)
		return m.Sys, m.Sys - m.Alloc
	}

	var memRaw struct {
		TotalVisibleMemorySize int64 `json:"TotalVisibleMemorySize"`
		FreePhysicalMemory     int64 `json:"FreePhysicalMemory"`
	}

	if err := json.Unmarshal([]byte(result.Output), &memRaw); err != nil {
		var m runtime.MemStats
		runtime.ReadMemStats(&m)
		return m.Sys, m.Sys - m.Alloc
	}

	total := uint64(memRaw.TotalVisibleMemorySize) * 1024
	free := uint64(memRaw.FreePhysicalMemory) * 1024
	return total, free
}

func (c *SystemInfoCollector) getHostname() string {
	hostname, err := os.Hostname()
	if err != nil {
		return "unknown"
	}
	return hostname
}

func (c *SystemInfoCollector) getBootTime() (time.Time, error) {
	uptime, err := getSystemUptime()
	if err != nil {
		return time.Time{}, err
	}
	return time.Now().Add(-uptime), nil
}

func CollectSystemInfo(ctx context.Context) (*types.SystemInfo, error) {
	collector := NewSystemInfoCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}
	if len(results) == 0 {
		return nil, nil
	}
	return results[0].(*types.SystemInfo), nil
}
