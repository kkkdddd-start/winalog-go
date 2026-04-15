package api

import (
	"context"
	"fmt"
	"net/http"
	"runtime"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/persistence"
)

type PersistenceHandler struct{}

func NewPersistenceHandler() *PersistenceHandler {
	return &PersistenceHandler{}
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

	ctx := context.Background()
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
	var sb strings.Builder

	sb.WriteString("ID,Time,Technique,Category,Severity,Title,Description,Key,Value,FilePath,RecommendedAction\n")

	for _, det := range detections {
		sb.WriteString(fmt.Sprintf("%s,%s,%s,%s,%s,\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\"\n",
			det.ID,
			det.Time.Format("2006-01-02 15:04:05"),
			det.Technique,
			det.Category,
			det.Severity,
			escapeCSV(det.Title),
			escapeCSV(det.Description),
			escapeCSV(det.Evidence.Key),
			escapeCSV(det.Evidence.Value),
			escapeCSV(det.Evidence.FilePath),
			escapeCSV(det.RecommendedAction),
		))
	}

	return sb.String()
}

func escapeCSV(s string) string {
	s = strings.ReplaceAll(s, "\"", "\"\"")
	s = strings.ReplaceAll(s, "\n", " ")
	s = strings.ReplaceAll(s, "\r", "")
	return s
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
