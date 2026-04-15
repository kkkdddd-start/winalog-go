package collectors

import (
	"context"
	"fmt"
	"os"
	"runtime"
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

type SystemInfo struct {
	Hostname     string    `json:"hostname"`
	OS           string    `json:"os"`
	OSVersion    string    `json:"os_version"`
	Architecture string    `json:"architecture"`
	Kernel       string    `json:"kernel"`
	Platform     string    `json:"platform"`
	Domain       string    `json:"domain"`
	DomainRole   string    `json:"domain_role"`
	Timezone     string    `json:"timezone"`
	Locale       string    `json:"locale"`
	BootTime     time.Time `json:"boot_time"`
	Uptime       int64     `json:"uptime_seconds"`
	CPUCores     int       `json:"cpu_cores"`
	MemoryTotal  uint64    `json:"memory_total"`
	MemoryUsed   uint64    `json:"memory_used"`
	CollectedAt  time.Time `json:"collected_at"`
}

func (c *SystemInfoCollector) collectSystemInfo() *types.SystemInfo {
	info := &types.SystemInfo{
		Hostname:     c.getHostname(),
		OSName:       runtime.GOOS,
		Architecture: runtime.GOARCH,
	}

	info.Hostname, _ = os.Hostname()
	info.LocalTime = time.Now()

	if runtime.GOOS == "windows" {
		if winVersion, err := utils.GetWindowsVersion(); err == nil {
			info.OSVersion = fmt.Sprintf("Windows %d.%d (Build %d)", winVersion.Major, winVersion.Minor, winVersion.Build)
			if winVersion.CSDVersion != "" {
				info.OSVersion += " " + winVersion.CSDVersion
			}
		}
	}

	return info
}

func (c *SystemInfoCollector) getHostname() string {
	hostname, err := os.Hostname()
	if err != nil {
		return "unknown"
	}
	return hostname
}

func (c *SystemInfoCollector) getBootTime() (time.Time, error) {
	return time.Now(), nil
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
