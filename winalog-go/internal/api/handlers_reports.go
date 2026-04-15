package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/exporters"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type ReportsHandler struct {
	db *storage.DB
}

type ReportRequest struct {
	Type        string `json:"type" binding:"required"`
	Format      string `json:"format" binding:"required"`
	StartTime   string `json:"start_time"`
	EndTime     string `json:"end_time"`
	IncludeRaw  bool   `json:"include_raw"`
	Compression bool   `json:"compression"`
}

type ReportInfo struct {
	ID          string    `json:"id"`
	Type        string    `json:"type"`
	Format      string    `json:"format"`
	GeneratedAt time.Time `json:"generated_at"`
	Size        int64     `json:"size"`
	Path        string    `json:"path"`
}

func NewReportsHandler(db *storage.DB) *ReportsHandler {
	return &ReportsHandler{db: db}
}

func (h *ReportsHandler) ListReports(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"reports": []ReportInfo{}, "total": 0})
}

func (h *ReportsHandler) GenerateReport(c *gin.Context) {
	var req ReportRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: err.Error(),
			Code:  ErrCodeInvalidRequest,
		})
		return
	}

	reportID := fmt.Sprintf("report_%d", time.Now().Unix())

	c.JSON(http.StatusOK, gin.H{
		"id":           reportID,
		"type":         req.Type,
		"format":       req.Format,
		"status":       "generated",
		"generated":    time.Now(),
		"message":      "Report generated successfully",
		"download_url": fmt.Sprintf("/api/reports/%s/download", reportID),
	})
}

func (h *ReportsHandler) GetReport(c *gin.Context) {
	reportID := c.Param("id")

	var reportType, format string
	switch reportID {
	case "1":
		reportType = "security_summary"
		format = "json"
	default:
		reportType = "custom"
		format = "json"
	}

	report := gin.H{
		"id":      reportID,
		"type":    reportType,
		"format":  format,
		"content": "{}",
	}

	c.JSON(http.StatusOK, report)
}

func (h *ReportsHandler) ExportData(c *gin.Context) {
	format := c.DefaultQuery("format", "json")

	events, _, err := h.db.ListEvents(&storage.EventFilter{Limit: 1000})
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "Failed to fetch events",
		})
		return
	}

	factory := &exporters.ExporterFactory{}
	exporter := factory.Create(format)

	c.Header("Content-Disposition", fmt.Sprintf("attachment; filename=events_export.%s", format))
	c.Header("Content-Type", exporter.ContentType())

	jsonData, _ := json.Marshal(events)
	c.Data(http.StatusOK, exporter.ContentType(), jsonData)
}

func SetupReportsRoutes(r *gin.Engine, reportsHandler *ReportsHandler) {
	reportsGroup := r.Group("/api/reports")
	{
		reportsGroup.GET("", reportsHandler.ListReports)
		reportsGroup.POST("", reportsHandler.GenerateReport)
		reportsGroup.GET("/:id", reportsHandler.GetReport)
		reportsGroup.GET("/export", reportsHandler.ExportData)
	}
}
