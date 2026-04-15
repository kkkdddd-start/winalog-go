package api

import (
	"fmt"
	"net/http"
	"os"
	"runtime"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/collectors"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type SystemHandler struct {
	db *storage.DB
}

type SystemInfo struct {
	Hostname      string    `json:"hostname"`
	Domain        string    `json:"domain"`
	OSName        string    `json:"os_name"`
	OSVersion     string    `json:"os_version"`
	Architecture  string    `json:"architecture"`
	IsAdmin       bool      `json:"is_admin"`
	Timezone      string    `json:"timezone"`
	LocalTime     time.Time `json:"local_time"`
	UptimeSeconds int64     `json:"uptime_seconds"`
	GoVersion     string    `json:"go_version"`
	CPUCount      int       `json:"cpu_count"`
	MemoryTotalGB float64   `json:"memory_total_gb"`
	MemoryFreeGB  float64   `json:"memory_free_gb"`
}

type MetricsResponse struct {
	TotalEvents   int64   `json:"total_events"`
	TotalAlerts   int64   `json:"total_alerts"`
	EventsPerMin  float64 `json:"events_per_minute"`
	AlertsPerHour float64 `json:"alerts_per_hour"`
	UptimeSeconds int64   `json:"uptime_seconds"`
	CPUCount      int     `json:"cpu_count"`
	GoVersion     string  `json:"go_version"`
	MemoryUsageMB float64 `json:"memory_usage_mb"`
}

type ProcessResponse struct {
	Processes []*ProcessInfo `json:"processes"`
	Total     int            `json:"total"`
}

type ProcessInfo struct {
	PID    int    `json:"pid"`
	PPID   int    `json:"ppid"`
	Name   string `json:"name"`
	Exe    string `json:"exe"`
	Args   string `json:"args"`
	User   string `json:"user"`
	Status string `json:"status"`
}

type NetworkConnectionResponse struct {
	Connections []*NetworkConnInfo `json:"connections"`
	Total       int                `json:"total"`
}

type NetworkConnInfo struct {
	PID         int    `json:"pid"`
	Protocol    string `json:"protocol"`
	LocalAddr   string `json:"local_addr"`
	LocalPort   int    `json:"local_port"`
	RemoteAddr  string `json:"remote_addr"`
	RemotePort  int    `json:"remote_port"`
	State       string `json:"state"`
	ProcessName string `json:"process_name"`
}

var startTime = time.Now()

func NewSystemHandler(db *storage.DB) *SystemHandler {
	return &SystemHandler{db: db}
}

func (h *SystemHandler) GetSystemInfo(c *gin.Context) {
	hostname, _ := os.Hostname()
	var m runtime.MemStats
	runtime.ReadMemStats(&m)

	info := SystemInfo{
		Hostname:      hostname,
		Domain:        utils.GetDomain(),
		OSName:        "Windows",
		OSVersion:     getWindowsVersionString(),
		Architecture:  runtime.GOARCH,
		IsAdmin:       utils.IsAdmin(),
		Timezone:      getTimezone(),
		LocalTime:     time.Now(),
		UptimeSeconds: int64(time.Since(startTime).Seconds()),
		GoVersion:     runtime.Version(),
		CPUCount:      runtime.NumCPU(),
		MemoryTotalGB: float64(m.Sys) / 1024 / 1024 / 1024,
		MemoryFreeGB:  float64(m.Sys-m.Alloc) / 1024 / 1024 / 1024,
	}

	c.JSON(http.StatusOK, info)
}

func (h *SystemHandler) GetMetrics(c *gin.Context) {
	var totalEvents int64
	var totalAlerts int64

	if h.db != nil {
		h.db.QueryRow("SELECT COUNT(*) FROM events").Scan(&totalEvents)
		h.db.QueryRow("SELECT COUNT(*) FROM alerts").Scan(&totalAlerts)
	}

	var m runtime.MemStats
	runtime.ReadMemStats(&m)

	metrics := MetricsResponse{
		TotalEvents:   totalEvents,
		TotalAlerts:   totalAlerts,
		UptimeSeconds: int64(time.Since(startTime).Seconds()),
		CPUCount:      runtime.NumCPU(),
		GoVersion:     runtime.Version(),
		MemoryUsageMB: float64(m.Alloc) / 1024 / 1024,
	}

	c.JSON(http.StatusOK, metrics)
}

func (h *SystemHandler) GetProcesses(c *gin.Context) {
	limitStr := c.DefaultQuery("limit", "100")
	limit, _ := strconv.Atoi(limitStr)
	if limit <= 0 || limit > 500 {
		limit = 100
	}

	processes, err := collectors.ListProcesses()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	result := make([]*ProcessInfo, 0, len(processes))
	for _, p := range processes {
		result = append(result, &ProcessInfo{
			PID:  p.PID,
			Name: p.Name,
		})
		if len(result) >= limit {
			break
		}
	}

	c.JSON(http.StatusOK, ProcessResponse{
		Processes: result,
		Total:     len(processes),
	})
}

func (h *SystemHandler) GetNetworkConnections(c *gin.Context) {
	limitStr := c.DefaultQuery("limit", "100")
	limit, _ := strconv.Atoi(limitStr)
	if limit <= 0 || limit > 500 {
		limit = 100
	}

	protocol := c.Query("protocol")

	connections, err := collectors.ListNetworkConnections()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	result := make([]*NetworkConnInfo, 0, len(connections))
	for _, conn := range connections {
		if protocol != "" && conn.Protocol != protocol {
			continue
		}
		result = append(result, &NetworkConnInfo{
			PID:         conn.PID,
			Protocol:    conn.Protocol,
			LocalAddr:   conn.LocalAddr,
			LocalPort:   conn.LocalPort,
			RemoteAddr:  conn.RemoteAddr,
			RemotePort:  conn.RemotePort,
			State:       conn.State,
			ProcessName: conn.ProcessName,
		})
		if len(result) >= limit {
			break
		}
	}

	c.JSON(http.StatusOK, NetworkConnectionResponse{
		Connections: result,
		Total:       len(connections),
	})
}

func (h *SystemHandler) GetPrometheusMetrics(c *gin.Context) {
	var totalEvents int64
	var totalAlerts int64

	if h.db != nil {
		h.db.QueryRow("SELECT COUNT(*) FROM events").Scan(&totalEvents)
		h.db.QueryRow("SELECT COUNT(*) FROM alerts").Scan(&totalAlerts)
	}

	var m runtime.MemStats
	runtime.ReadMemStats(&m)

	uptime := int64(time.Since(startTime).Seconds())

	output := "# HELP winalog_events_total Total number of events\n"
	output += "# TYPE winalog_events_total counter\n"
	output += fmt.Sprintf("winalog_events_total %d\n\n", totalEvents)

	output += "# HELP winalog_alerts_total Total number of alerts\n"
	output += "# TYPE winalog_alerts_total counter\n"
	output += fmt.Sprintf("winalog_alerts_total %d\n\n", totalAlerts)

	output += "# HELP winalog_uptime_seconds Application uptime in seconds\n"
	output += "# TYPE winalog_uptime_seconds counter\n"
	output += fmt.Sprintf("winalog_uptime_seconds %d\n\n", uptime)

	output += "# HELP winalog_cpu_count Number of CPUs\n"
	output += "# TYPE winalog_cpu_count gauge\n"
	output += fmt.Sprintf("winalog_cpu_count %d\n\n", runtime.NumCPU())

	output += "# HELP winalog_memory_bytes Process memory usage in bytes\n"
	output += "# TYPE winalog_memory_bytes gauge\n"
	output += fmt.Sprintf("winalog_memory_bytes %d\n\n", m.Alloc)

	output += "# HELP winalog_memory_total Total allocated sys mem bytes\n"
	output += "# TYPE winalog_memory_total gauge\n"
	output += fmt.Sprintf("winalog_memory_total %d\n\n", m.Sys)

	output += "# HELP go_info Go version info\n"
	output += "# TYPE go_info gauge\n"
	output += "go_info{version=\"" + runtime.Version() + "\"} 1\n"

	c.Data(http.StatusOK, "text/plain; charset=utf-8", []byte(output))
}

func SetupSystemRoutes(r *gin.Engine, systemHandler *SystemHandler) {
	system := r.Group("/api/system")
	{
		system.GET("/info", systemHandler.GetSystemInfo)
		system.GET("/metrics", systemHandler.GetMetrics)
		system.GET("/processes", systemHandler.GetProcesses)
		system.GET("/network", systemHandler.GetNetworkConnections)
	}
}

func getWindowsVersionString() string {
	if winVersion, err := utils.GetWindowsVersion(); err == nil {
		return fmt.Sprintf("Windows %d.%d (Build %d)", winVersion.Major, winVersion.Minor, winVersion.Build)
	}
	return "Windows (Unknown Version)"
}

func getTimezone() string {
	_, offset := time.Now().Zone()
	hours := offset / 3600
	return fmt.Sprintf("UTC%+d", hours)
}
