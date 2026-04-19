package api

import (
	"context"
	"fmt"
	"net/http"
	"runtime"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/observability"
	"github.com/kkkdddd-start/winalog-go/internal/persistence"
)

const (
	defaultDetectTimeout = 5 * time.Minute
	defaultCacheTTL      = 30 * time.Second
)

type PersistenceHandler struct {
	cache          *DetectionCache
	cacheMutex     sync.RWMutex
	detectorConfig map[string]bool
	detectorMutex  sync.RWMutex
}

type DetectorConfig struct {
	Name        string `json:"name"`
	Enabled     bool   `json:"enabled"`
	Description string `json:"description"`
	Technique   string `json:"technique"`
	Category    string `json:"category"`
}

type DetectionCache struct {
	result    *persistence.DetectionResult
	timestamp time.Time
	params    string
	ttl       time.Duration
}

func NewPersistenceHandler() *PersistenceHandler {
	return &PersistenceHandler{
		cache: &DetectionCache{
			ttl: defaultCacheTTL,
		},
		detectorConfig: map[string]bool{
			"run_key_detector":             true,
			"user_init_detector":           true,
			"startup_folder_detector":      true,
			"accessibility_detector":       true,
			"com_hijack_detector":          true,
			"ifeo_detector":                true,
			"appinit_detector":             true,
			"wmi_persistence_detector":     true,
			"service_persistence_detector": true,
			"lsa_persistence_detector":     true,
			"winsock_detector":             true,
			"bho_detector":                 true,
			"print_monitor_detector":       true,
			"boot_execute_detector":        true,
			"etw_detector":                 true,
		},
	}
}

type DetectRequest struct {
	Category  string `json:"category"`
	Technique string `json:"technique"`
}

type DetectResponse struct {
	Detections []*EnrichedDetection   `json:"detections"`
	Summary    map[string]interface{} `json:"summary"`
	Duration   string                 `json:"duration"`
	TotalCount int                    `json:"total_count"`
	Cached     bool                   `json:"cached,omitempty"`
}

type EnrichedDetection struct {
	ID                string                 `json:"id"`
	Time              time.Time              `json:"time"`
	Technique         string                 `json:"technique"`
	Category          string                 `json:"category"`
	Severity          string                 `json:"severity"`
	Title             string                 `json:"title"`
	Description       string                 `json:"description"`
	Evidence          map[string]interface{} `json:"evidence"`
	MITRERef          []string               `json:"mitre_ref"`
	RecommendedAction string                 `json:"recommended_action"`
	FalsePositiveRisk string                 `json:"false_positive_risk"`
	Explanation       string                 `json:"explanation"`
	Recommendation    string                 `json:"recommendation"`
	RealCase          string                 `json:"real_case"`
}

func enrichDetections(detections []*persistence.Detection) []*EnrichedDetection {
	enriched := make([]*EnrichedDetection, 0, len(detections))
	for _, d := range detections {
		explanation, recommendation, realCase := d.GetRuleDetails()
		enriched = append(enriched, &EnrichedDetection{
			ID:                d.ID,
			Time:              d.Time,
			Technique:         string(d.Technique),
			Category:          d.Category,
			Severity:          string(d.Severity),
			Title:             d.Title,
			Description:       d.Description,
			Evidence:          map[string]interface{}{"type": string(d.Evidence.Type), "key": d.Evidence.Key, "value": d.Evidence.Value, "path": d.Evidence.Path},
			MITRERef:          d.MITRERef,
			RecommendedAction: recommendation,
			FalsePositiveRisk: d.FalsePositiveRisk,
			Explanation:       explanation,
			Recommendation:    recommendation,
			RealCase:          realCase,
		})
	}
	return enriched
}

func (h *PersistenceHandler) Detect(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusOK, DetectResponse{
			Detections: []*EnrichedDetection{},
			Summary:    map[string]interface{}{},
			Duration:   "0s",
			TotalCount: 0,
		})
		return
	}

	var req DetectRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	format := c.DefaultQuery("format", "json")

	timeoutStr := c.DefaultQuery("timeout", "5m")
	timeout, err := time.ParseDuration(timeoutStr)
	if err != nil || timeout <= 0 {
		timeout = defaultDetectTimeout
	}
	if timeout > 10*time.Minute {
		timeout = 10 * time.Minute
	}

	ctx, cancel := context.WithTimeout(context.Background(), timeout)
	defer cancel()

	cacheParams := fmt.Sprintf("%s|%s", req.Category, req.Technique)

	if req.Category == "" && req.Technique == "" {
		h.cacheMutex.RLock()
		if h.cache.result != nil &&
			time.Since(h.cache.timestamp) < h.cache.ttl &&
			h.cache.params == cacheParams {
			response := DetectResponse{
				Detections: enrichDetections(h.cache.result.Detections),
				Summary:    h.cache.result.Summary(),
				Duration:   h.cache.result.Duration.String(),
				TotalCount: h.cache.result.TotalCount,
				Cached:     true,
			}
			h.cacheMutex.RUnlock()
			c.JSON(http.StatusOK, response)
			return
		}
		h.cacheMutex.RUnlock()
	}

	var result *persistence.DetectionResult

	if req.Technique != "" {
		result = persistence.DetectByTechnique(ctx, persistence.Technique(req.Technique))
	} else if req.Category != "" {
		result = persistence.DetectByCategory(ctx, req.Category)
	} else {
		result = persistence.RunAllDetectors(ctx)
	}

	if result == nil {
		result = &persistence.DetectionResult{
			Detections: []*persistence.Detection{},
		}
	}

	if result.Detections == nil {
		result.Detections = []*persistence.Detection{}
	}

	if result.ErrorCount > 0 {
		for _, errMsg := range result.Errors {
			observability.LogServiceError("persistence_detector", errMsg)
		}
	}

	if req.Category == "" && req.Technique == "" {
		h.cacheMutex.Lock()
		h.cache.result = result
		h.cache.timestamp = time.Now()
		h.cache.params = cacheParams
		h.cacheMutex.Unlock()
	}

	if format == "csv" {
		c.Header("Content-Type", "text/csv")
		c.Header("Content-Disposition", "attachment; filename=persistence_detections.csv")
		c.String(http.StatusOK, exportDetectionsToCSV(result.Detections))
		return
	}

	response := DetectResponse{
		Detections: enrichDetections(result.Detections),
		Summary:    result.Summary(),
		Duration:   result.Duration.String(),
		TotalCount: result.TotalCount,
	}

	c.JSON(http.StatusOK, response)
}

func exportDetectionsToCSV(detections []*persistence.Detection) string {
	return persistence.ExportDetectionsToCSVString(detections)
}

func (h *PersistenceHandler) ListCategories(c *gin.Context) {
	categories := []map[string]interface{}{
		{
			"name":        "Registry",
			"label":       "注册表",
			"description": "Registry-based persistence mechanisms",
			"techniques":  []string{"T1546.001", "T1546.010", "T1546.012", "T1546.015", "T1547.001", "T1547.016"},
		},
		{
			"name":        "ScheduledTask",
			"label":       "计划任务",
			"description": "Scheduled task/Job persistence",
			"techniques":  []string{"T1053", "T1053.020"},
		},
		{
			"name":        "Service",
			"label":       "服务持久化",
			"description": "Windows service persistence",
			"techniques":  []string{"T1543.003"},
		},
		{
			"name":        "WMI",
			"label":       "WMI持久化",
			"description": "WMI event subscription persistence",
			"techniques":  []string{"T1546.003"},
		},
		{
			"name":        "COM",
			"label":       "COM劫持",
			"description": "COM object hijacking persistence",
			"techniques":  []string{"T1546.015"},
		},
		{
			"name":        "BITS",
			"label":       "BITS作业",
			"description": "BITS persistence",
			"techniques":  []string{"T1197"},
		},
		{
			"name":        "Accessibility",
			"label":       "辅助功能后门",
			"description": "Accessibility features backdoor",
			"techniques":  []string{"T1546.001"},
		},
	}

	c.JSON(http.StatusOK, gin.H{"categories": categories})
}

func (h *PersistenceHandler) ListTechniques(c *gin.Context) {
	techniques := []map[string]interface{}{
		{"id": "T1546.001", "name": "辅助功能后门", "category": "Accessibility"},
		{"id": "T1546.002", "name": "SCM", "category": "Registry"},
		{"id": "T1546.003", "name": "WMI事件订阅", "category": "WMI"},
		{"id": "T1546.007", "name": "Netsh Helper DLL", "category": "Registry"},
		{"id": "T1546.008", "name": "LSASS", "category": "Registry"},
		{"id": "T1546.010", "name": "AppInit_DLLs", "category": "Registry"},
		{"id": "T1546.012", "name": "IFEO调试器劫持", "category": "Registry"},
		{"id": "T1546.015", "name": "COM劫持", "category": "COM"},
		{"id": "T1546.016", "name": "启动项", "category": "Startup"},
		{"id": "T1053", "name": "计划任务/作业", "category": "ScheduledTask"},
		{"id": "T1543.003", "name": "Windows服务", "category": "Service"},
		{"id": "T1197", "name": "BITS作业", "category": "BITS"},
		{"id": "T1098", "name": "账户操作/SID History", "category": "Account"},
	}

	c.JSON(http.StatusOK, gin.H{"techniques": techniques})
}

func (h *PersistenceHandler) ListDetectors(c *gin.Context) {
	h.detectorMutex.RLock()
	defer h.detectorMutex.RUnlock()

	detectorDescriptions := map[string]struct {
		Description string
		Technique   string
		Category    string
	}{
		"run_key_detector":             {"Run Key Persistence", "T1547.001", "Registry"},
		"user_init_detector":           {"UserInit MPR Logon", "T1546.001", "Registry"},
		"startup_folder_detector":      {"Startup Folder Persistence", "T1547.016", "Registry"},
		"accessibility_detector":       {"Accessibility Features Backdoor", "T1546.001", "Accessibility"},
		"com_hijack_detector":          {"COM Hijacking", "T1546.015", "COM"},
		"ifeo_detector":                {"IFEO Injection", "T1546.012", "Registry"},
		"appinit_detector":             {"AppInit DLLs", "T1546.010", "Registry"},
		"wmi_persistence_detector":     {"WMI Event Subscription", "T1546.003", "WMI"},
		"service_persistence_detector": {"Service Persistence", "T1543.003", "Service"},
		"lsa_persistence_detector":     {"LSA Authentication Package", "T1546.008", "Registry"},
		"winsock_detector":             {"Winsock Helper DLL", "T1546.007", "Registry"},
		"bho_detector":                 {"Browser Helper Object", "T1546.001", "Registry"},
		"print_monitor_detector":       {"Print Monitor", "T1546.001", "Registry"},
		"boot_execute_detector":        {"Boot Execute", "T1053", "ScheduledTask"},
		"etw_detector":                 {"ETW Manipulation", "T1546.006", "Registry"},
	}

	detectors := make([]DetectorConfig, 0, len(h.detectorConfig))
	for name, enabled := range h.detectorConfig {
		desc := detectorDescriptions[name]
		detectors = append(detectors, DetectorConfig{
			Name:        name,
			Enabled:     enabled,
			Description: desc.Description,
			Technique:   desc.Technique,
			Category:    desc.Category,
		})
	}

	c.JSON(http.StatusOK, gin.H{"detectors": detectors})
}

type DetectorConfigUpdate struct {
	Detectors []struct {
		Name    string `json:"name"`
		Enabled bool   `json:"enabled"`
	} `json:"detectors"`
}

func (h *PersistenceHandler) UpdateDetectorConfig(c *gin.Context) {
	var req DetectorConfigUpdate
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	h.detectorMutex.Lock()
	defer h.detectorMutex.Unlock()

	for _, d := range req.Detectors {
		if _, exists := h.detectorConfig[d.Name]; exists {
			h.detectorConfig[d.Name] = d.Enabled
		}
	}

	h.cacheMutex.Lock()
	h.cache = &DetectionCache{ttl: defaultCacheTTL}
	h.cacheMutex.Unlock()

	c.JSON(http.StatusOK, gin.H{"message": "Detector configuration updated"})
}

func SetupPersistenceRoutes(r *gin.Engine, persistenceHandler *PersistenceHandler) {
	persistenceGroup := r.Group("/api/persistence")
	{
		persistenceGroup.GET("/detect", persistenceHandler.Detect)
		persistenceGroup.GET("/categories", persistenceHandler.ListCategories)
		persistenceGroup.GET("/techniques", persistenceHandler.ListTechniques)
		persistenceGroup.GET("/detectors", persistenceHandler.ListDetectors)
		persistenceGroup.POST("/detectors/config", persistenceHandler.UpdateDetectorConfig)
	}
}
