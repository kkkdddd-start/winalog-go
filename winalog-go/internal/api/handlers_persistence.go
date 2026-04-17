package api

import (
	"context"
	"fmt"
	"net/http"
	"runtime"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/persistence"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

const (
	defaultDetectTimeout = 5 * time.Minute
	defaultCacheTTL      = 30 * time.Second
)

type PersistenceHandler struct {
	cache      *DetectionCache
	cacheMutex sync.RWMutex
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
	}
}

type DetectRequest struct {
	Category  string `json:"category"`
	Technique string `json:"technique"`
}

type DetectResponse struct {
	Detections []*persistence.Detection `json:"detections"`
	Summary    map[string]interface{}   `json:"summary"`
	Duration   string                   `json:"duration"`
	TotalCount int                      `json:"total_count"`
	Cached     bool                     `json:"cached,omitempty"`
}

func (h *PersistenceHandler) Detect(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusOK, DetectResponse{
			Detections: []*persistence.Detection{},
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
				Detections: h.cache.result.Detections,
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
		Detections: result.Detections,
		Summary:    result.Summary(),
		Duration:   result.Duration.String(),
		TotalCount: result.TotalCount,
	}

	c.JSON(http.StatusOK, response)
}

func exportDetectionsToCSV(detections []*persistence.Detection) string {
	return utils.ExportDetectionsToCSVString(detections)
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

func SetupPersistenceRoutes(r *gin.Engine, persistenceHandler *PersistenceHandler) {
	persistenceGroup := r.Group("/api/persistence")
	{
		persistenceGroup.GET("/detect", persistenceHandler.Detect)
		persistenceGroup.GET("/categories", persistenceHandler.ListCategories)
		persistenceGroup.GET("/techniques", persistenceHandler.ListTechniques)
	}
}
