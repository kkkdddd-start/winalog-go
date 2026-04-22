package api

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"runtime"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/collectors"
	"github.com/kkkdddd-start/winalog-go/internal/config"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type SystemHandler struct {
	db *storage.DB
}

type SystemInfo struct {
	Hostname            string    `json:"hostname"`
	Domain              string    `json:"domain"`
	OSName              string    `json:"os_name"`
	OSVersion           string    `json:"os_version"`
	Architecture        string    `json:"architecture"`
	IsAdmin             bool      `json:"is_admin"`
	Timezone            string    `json:"timezone"`
	LocalTime           time.Time `json:"local_time"`
	UptimeSeconds       int64     `json:"uptime_seconds"`
	GoVersion           string    `json:"go_version"`
	CPUCount            int       `json:"cpu_count"`
	MemoryTotalGB       float64   `json:"memory_total_gb"`
	MemoryFreeGB        float64   `json:"memory_free_gb"`
	SystemMemoryTotalGB float64   `json:"system_memory_total_gb"`
	SystemMemoryFreeGB  float64   `json:"system_memory_free_gb"`
	GoMemoryUsageMB     float64   `json:"go_memory_usage_mb"`
}

type MetricsResponse struct {
	TotalEvents         int64   `json:"total_events"`
	TotalAlerts         int64   `json:"total_alerts"`
	EventsPerMin        float64 `json:"events_per_minute"`
	AlertsPerHour       float64 `json:"alerts_per_hour"`
	UptimeSeconds       int64   `json:"uptime_seconds"`
	CPUCount            int     `json:"cpu_count"`
	GoVersion           string  `json:"go_version"`
	MemoryUsageMB       float64 `json:"memory_usage_mb"`
	SystemMemoryTotalMB float64 `json:"system_memory_total_mb"`
	SystemMemoryFreeMB  float64 `json:"system_memory_free_mb"`
}

type ProcessResponse struct {
	Processes []*ProcessInfo `json:"processes"`
	Total     int            `json:"total"`
}

type ProcessInfo struct {
	PID         int32          `json:"pid"`
	PPID        int32          `json:"ppid"`
	Name        string         `json:"name"`
	Exe         string         `json:"exe"`
	Args        string         `json:"args"`
	User        string         `json:"user"`
	Status      string         `json:"status"`
	Path        string         `json:"path"`
	CommandLine string         `json:"command_line"`
	IsSigned    bool           `json:"is_signed"`
	Signature   *SignatureInfo `json:"signature,omitempty"`
}

type SignatureInfo struct {
	Status     string `json:"status"`
	Issuer     string `json:"issuer"`
	Subject    string `json:"subject"`
	ValidFrom  string `json:"valid_from"`
	ValidTo    string `json:"valid_to"`
	Thumbprint string `json:"thumbprint"`
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

type EnvVarResponse struct {
	Variables []*EnvVar `json:"variables"`
	Total     int       `json:"total"`
}

type EnvVar struct {
	Name  string `json:"name"`
	Value string `json:"value"`
	Type  string `json:"type"`
}

type DLLResponse struct {
	Modules []*DLLInfo `json:"modules"`
	Total   int        `json:"total"`
}

type DLLInfo struct {
	ProcessID   int32  `json:"process_id"`
	ProcessName string `json:"process_name"`
	Name        string `json:"name"`
	Path        string `json:"path"`
	Size        uint32 `json:"size"`
	Version     string `json:"version"`
	IsSigned    bool   `json:"is_signed"`
}

type ProcessDLLResponse struct {
	ProcessID   int32      `json:"process_id"`
	ProcessName string     `json:"process_name"`
	DLLs        []*DLLInfo `json:"dlls"`
	Total       int        `json:"total"`
}

type DriverResponse struct {
	Drivers []*DriverInfo `json:"drivers"`
	Total   int           `json:"total"`
}

type DriverInfo struct {
	Name        string `json:"name"`
	DisplayName string `json:"display_name"`
	Description string `json:"description"`
	Path        string `json:"path"`
	Status      string `json:"status"`
}

type UserResponse struct {
	Users []*UserInfo `json:"users"`
	Total int         `json:"total"`
}

type UserInfo struct {
	Name     string `json:"name"`
	SID      string `json:"sid"`
	Enabled  bool   `json:"enabled"`
	FullName string `json:"full_name"`
	Type     string `json:"type"`
	HomeDir  string `json:"home_dir"`
}

type RegistryPersistenceResponse struct {
	RunKeys []*RegistryKeyInfo `json:"run_keys"`
	Total   int                `json:"total"`
}

type RegistryKeyInfo struct {
	Path  string `json:"path"`
	Name  string `json:"name"`
	Value string `json:"value"`
	Type  string `json:"type"`
}

type TaskResponse struct {
	Tasks []*TaskInfo `json:"tasks"`
	Total int         `json:"total"`
}

type TaskInfo struct {
	Name  string `json:"name"`
	Path  string `json:"path"`
	State string `json:"state"`
}

var startTime = time.Now()

func NewSystemHandler(db *storage.DB) *SystemHandler {
	return &SystemHandler{db: db}
}

func (h *SystemHandler) GetSystemInfo(c *gin.Context) {
	hostname, _ := os.Hostname()
	var m runtime.MemStats
	runtime.ReadMemStats(&m)

	isAdmin := false
	domain := ""
	osVersion := ""
	sysMemTotalGB := 0.0
	sysMemFreeGB := 0.0

	if runtime.GOOS == "windows" {
		domain = utils.GetDomain()
		isAdmin = utils.IsAdmin()
		osVersion = getWindowsVersionString()
		sysMemTotalGB, sysMemFreeGB = getWindowsSystemMemory()
	} else {
		osVersion = "Linux Server Mode"
		sysMemTotalGB, sysMemFreeGB = getLinuxSystemMemory()
	}

	info := SystemInfo{
		Hostname:            hostname,
		Domain:              domain,
		OSName:              runtime.GOOS,
		OSVersion:           osVersion,
		Architecture:        runtime.GOARCH,
		IsAdmin:             isAdmin,
		Timezone:            getTimezone(),
		LocalTime:           time.Now(),
		UptimeSeconds:       int64(time.Since(startTime).Seconds()),
		GoVersion:           runtime.Version(),
		CPUCount:            runtime.NumCPU(),
		MemoryTotalGB:       float64(m.Sys) / 1024 / 1024 / 1024,
		MemoryFreeGB:        float64(m.Sys-m.Alloc) / 1024 / 1024 / 1024,
		SystemMemoryTotalGB: sysMemTotalGB,
		SystemMemoryFreeGB:  sysMemFreeGB,
		GoMemoryUsageMB:     float64(m.Alloc) / 1024 / 1024,
	}

	c.JSON(http.StatusOK, info)
}

func getLinuxSystemMemory() (totalGB float64, freeGB float64) {
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
		return float64(memTotal) / 1024 / 1024 / 1024, float64(memFree) / 1024 / 1024 / 1024
	}
	return 0, 0
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

func (h *SystemHandler) GetNetworkConnections(c *gin.Context) {
	enabledStr := c.DefaultQuery("enabled", "true")
	enabled := enabledStr == "true" || enabledStr == "1"

	log.Printf("[INFO] GetNetworkConnections called with enabled=%v", enabled)

	if runtime.GOOS != "windows" {
		c.JSON(http.StatusOK, NetworkConnectionResponse{
			Connections: []*NetworkConnInfo{},
			Total:       0,
		})
		return
	}

	if !enabled {
		log.Printf("[INFO] GetNetworkConnections skipped - module disabled")
		c.JSON(http.StatusOK, NetworkConnectionResponse{
			Connections: []*NetworkConnInfo{},
			Total:       0,
		})
		return
	}

	cfg := config.DefaultConfig()
	defaultLimit := cfg.Search.DefaultQueryLimit
	maxLimit := cfg.Search.MaxQueryLimit

	limitStr := c.DefaultQuery("limit", strconv.Itoa(defaultLimit))
	limit, _ := strconv.Atoi(limitStr)
	if limit <= 0 || limit > maxLimit {
		limit = defaultLimit
	}

	protocol := c.Query("protocol")

	connections, err := collectors.ListNetworkConnections()
	if err != nil {
		log.Printf("[ERROR] GetNetworkConnections failed: %v", err)
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
			LocalPort:   int(conn.LocalPort),
			RemoteAddr:  conn.RemoteAddr,
			RemotePort:  int(conn.RemotePort),
			State:       conn.State,
			ProcessName: conn.ProcessName,
		})
		if len(result) >= limit {
			break
		}
	}

	if h.db != nil {
		systemRepo := storage.NewSystemRepo(h.db)
		storageConnections := make([]*storage.NetworkConnection, 0, len(connections))
		now := time.Now()
		for _, conn := range connections {
			storageConnections = append(storageConnections, &storage.NetworkConnection{
				PID:         conn.PID,
				ProcessName: conn.ProcessName,
				Protocol:    conn.Protocol,
				LocalAddr:   conn.LocalAddr,
				LocalPort:   conn.LocalPort,
				RemoteAddr:  conn.RemoteAddr,
				RemotePort:  conn.RemotePort,
				State:       conn.State,
				CollectedAt: now,
			})
		}
		if err := systemRepo.SaveNetworkConnections(storageConnections); err != nil {
			log.Printf("[ERROR] Failed to save network connections to database: %v", err)
		} else {
			log.Printf("[INFO] Saved %d network connections to database", len(storageConnections))
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
		system.GET("/env", systemHandler.GetEnvironmentVariables)
		system.GET("/dlls", systemHandler.GetLoadedDLLs)
		system.GET("/drivers", systemHandler.GetDrivers)
		system.GET("/users", systemHandler.GetUsers)
		system.GET("/registry", systemHandler.GetRegistryPersistence)
		system.GET("/tasks", systemHandler.GetScheduledTasks)
		system.GET("/process/:pid/dlls", systemHandler.GetProcessDLLs)
	}
}

func getWindowsVersionString() string {
	if runtime.GOOS != "windows" {
		return "N/A"
	}
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

func (h *SystemHandler) GetEnvironmentVariables(c *gin.Context) {
	vars, err := collectors.ListEnvironmentVariables()
	if err != nil {
		log.Printf("[ERROR] GetEnvironmentVariables failed: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	result := make([]*EnvVar, 0, len(vars))
	for _, v := range vars {
		result = append(result, &EnvVar{
			Name:  v.Name,
			Value: v.Value,
			Type:  v.Type,
		})
	}

	c.JSON(http.StatusOK, EnvVarResponse{
		Variables: result,
		Total:     len(result),
	})
}

func (h *SystemHandler) GetLoadedDLLs(c *gin.Context) {
	enabledStr := c.DefaultQuery("enabled", "true")
	enabled := enabledStr == "true" || enabledStr == "1"

	log.Printf("[INFO] GetLoadedDLLs called with enabled=%v", enabled)

	if runtime.GOOS != "windows" {
		c.JSON(http.StatusOK, DLLResponse{
			Modules: []*DLLInfo{},
			Total:   0,
		})
		return
	}

	if !enabled {
		log.Printf("[INFO] GetLoadedDLLs skipped - module disabled")
		c.JSON(http.StatusOK, DLLResponse{
			Modules: []*DLLInfo{},
			Total:   0,
		})
		return
	}

	cfg := config.DefaultConfig()
	defaultLimit := cfg.Search.DefaultQueryLimit
	maxLimit := cfg.Search.MaxQueryLimit

	limitStr := c.DefaultQuery("limit", strconv.Itoa(defaultLimit))
	limit, _ := strconv.Atoi(limitStr)
	if limit <= 0 || limit > maxLimit {
		limit = defaultLimit
	}

	dlls, err := collectors.ListLoadedDLLs()
	if err != nil {
		log.Printf("[ERROR] GetLoadedDLLs failed: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	log.Printf("[INFO] GetLoadedDLLs: collected %d DLLs, limit=%d", len(dlls), limit)

	result := make([]*DLLInfo, 0, len(dlls))
	for _, dll := range dlls {
		result = append(result, &DLLInfo{
			ProcessID:   dll.ProcessID,
			ProcessName: dll.ProcessName,
			Name:        dll.Name,
			Path:        dll.Path,
			Size:        dll.Size,
			Version:     dll.Version,
		})
		if len(result) >= limit {
			break
		}
	}

	c.JSON(http.StatusOK, DLLResponse{
		Modules: result,
		Total:   len(dlls),
	})
}

func (h *SystemHandler) GetDrivers(c *gin.Context) {
	enabledStr := c.DefaultQuery("enabled", "true")
	enabled := enabledStr == "true" || enabledStr == "1"

	log.Printf("[INFO] GetDrivers called with enabled=%v", enabled)

	if runtime.GOOS != "windows" {
		c.JSON(http.StatusOK, DriverResponse{
			Drivers: []*DriverInfo{},
			Total:   0,
		})
		return
	}

	if !enabled {
		log.Printf("[INFO] GetDrivers skipped - module disabled")
		c.JSON(http.StatusOK, DriverResponse{
			Drivers: []*DriverInfo{},
			Total:   0,
		})
		return
	}

	drivers, err := collectors.ListDrivers()
	if err != nil {
		log.Printf("[ERROR] GetDrivers failed: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	result := make([]*DriverInfo, 0, len(drivers))
	for _, d := range drivers {
		result = append(result, &DriverInfo{
			Name:        d.Name,
			DisplayName: d.DisplayName,
			Description: d.Description,
			Path:        d.Path,
			Status:      d.Status,
		})
	}

	c.JSON(http.StatusOK, DriverResponse{
		Drivers: result,
		Total:   len(result),
	})
}

func (h *SystemHandler) GetRegistryPersistence(c *gin.Context) {
	enabledStr := c.DefaultQuery("enabled", "true")
	enabled := enabledStr == "true" || enabledStr == "1"

	log.Printf("[INFO] GetRegistryPersistence called with enabled=%v", enabled)

	if runtime.GOOS != "windows" {
		c.JSON(http.StatusOK, RegistryPersistenceResponse{
			RunKeys: []*RegistryKeyInfo{},
			Total:   0,
		})
		return
	}

	if !enabled {
		log.Printf("[INFO] GetRegistryPersistence skipped - module disabled")
		c.JSON(http.StatusOK, RegistryPersistenceResponse{
			RunKeys: []*RegistryKeyInfo{},
			Total:   0,
		})
		return
	}

	persistence, err := collectors.CollectRegistryPersistence(context.Background())
	if err != nil {
		log.Printf("[ERROR] GetRegistryPersistence failed: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if len(persistence) == 0 {
		c.JSON(http.StatusOK, RegistryPersistenceResponse{
			RunKeys: []*RegistryKeyInfo{},
			Total:   0,
		})
		return
	}

	p := persistence[0]
	keys := make([]*RegistryKeyInfo, 0)

	for _, k := range p.RunKeys {
		keys = append(keys, &RegistryKeyInfo{
			Path:  k.Path,
			Name:  k.Name,
			Value: k.Value,
			Type:  k.Type,
		})
	}
	for _, k := range p.UserInit {
		keys = append(keys, &RegistryKeyInfo{
			Path:  k.Path,
			Name:  k.Name,
			Value: k.Value,
			Type:  k.Type,
		})
	}

	c.JSON(http.StatusOK, RegistryPersistenceResponse{
		RunKeys: keys,
		Total:   len(keys),
	})
}

func (h *SystemHandler) GetProcessDLLs(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusOK, ProcessDLLResponse{
			ProcessID:   0,
			ProcessName: "",
			DLLs:        []*DLLInfo{},
			Total:       0,
		})
		return
	}

	pidStr := c.Param("pid")
	pid, err := strconv.Atoi(pidStr)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid pid"})
		return
	}

	dlls, err := collectors.GetProcessDLLs(pid)
	if err != nil {
		log.Printf("[ERROR] GetProcessDLLs failed: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	processName := fmt.Sprintf("Process_%d", pid)

	result := make([]*DLLInfo, 0, len(dlls))
	for _, dll := range dlls {
		result = append(result, &DLLInfo{
			ProcessID:   dll.ProcessID,
			ProcessName: dll.ProcessName,
			Name:        dll.Name,
			Path:        dll.Path,
			Size:        dll.Size,
			Version:     dll.Version,
		})
		if dll.ProcessName != "" {
			processName = dll.ProcessName
		}
	}

	c.JSON(http.StatusOK, ProcessDLLResponse{
		ProcessID:   int32(pid),
		ProcessName: processName,
		DLLs:        result,
		Total:       len(result),
	})
}
