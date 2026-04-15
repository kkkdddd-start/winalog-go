package api

import (
	"fmt"
	"net/http"
	"runtime"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
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

var startTime = time.Now()

func NewSystemHandler(db *storage.DB) *SystemHandler {
	return &SystemHandler{db: db}
}

func (h *SystemHandler) GetSystemInfo(c *gin.Context) {
	info := SystemInfo{
		Hostname:      "Linux Host",
		Domain:        "workgroup",
		OSName:        runtime.GOOS,
		OSVersion:     runtime.Version(),
		Architecture:  runtime.GOARCH,
		IsAdmin:       false,
		Timezone:      "UTC",
		LocalTime:     time.Now(),
		UptimeSeconds: int64(time.Since(startTime).Seconds()),
		GoVersion:     runtime.Version(),
		CPUCount:      runtime.NumCPU(),
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
	}
}
