package api

import (
	"fmt"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/engine"
	"github.com/kkkdddd-start/winalog-go/internal/exporters"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type AlertHandler struct {
	db *storage.DB
}

type ImportHandler struct {
	db *storage.DB
}

type ErrorResponse struct {
	Error   string         `json:"error"`
	Code    ErrorCode      `json:"code,omitempty"`
	Details map[string]any `json:"details,omitempty"`
}

type ErrorCode string

const (
	ErrCodeAlertNotFound        ErrorCode = "ALERT_NOT_FOUND"
	ErrCodeAlertAlreadyResolved ErrorCode = "ALERT_ALREADY_RESOLVED"
	ErrCodeEventNotFound        ErrorCode = "EVENT_NOT_FOUND"
	ErrCodeInvalidRequest       ErrorCode = "INVALID_REQUEST"
)

type SuccessResponse struct {
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

type PaginationRequest struct {
	Page     int `form:"page,default=1" binding:"min=1"`
	PageSize int `form:"page_size,default=100" binding:"min=1,max=10000"`
}

type ListEventsResponse struct {
	Events     []*types.Event `json:"events"`
	Total      int64          `json:"total"`
	Page       int            `json:"page"`
	PageSize   int            `json:"page_size"`
	TotalPages int            `json:"total_pages"`
}

func (h *AlertHandler) ListEvents(c *gin.Context) {
	var req PaginationRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: ErrCodeInvalidRequest})
		return
	}

	filter := &storage.EventFilter{
		Limit:  req.PageSize,
		Offset: (req.Page - 1) * req.PageSize,
	}

	events, total, err := h.db.ListEvents(filter)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	totalPages := int(total) / req.PageSize
	if int(total)%req.PageSize > 0 {
		totalPages++
	}

	c.JSON(200, ListEventsResponse{
		Events:     events,
		Total:      total,
		Page:       req.Page,
		PageSize:   req.PageSize,
		TotalPages: totalPages,
	})
}

func (h *AlertHandler) GetEvent(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid event id", Code: ErrCodeInvalidRequest})
		return
	}

	event, err := h.db.GetEventByID(id)
	if err != nil {
		c.JSON(404, ErrorResponse{Error: "event not found", Code: ErrCodeEventNotFound})
		return
	}

	c.JSON(200, event)
}

type SearchEventsRequest struct {
	Keywords  string   `form:"keywords"`
	Regex     bool     `form:"regex"`
	EventIDs  []int32  `form:"event_ids"`
	Levels    []int    `form:"levels"`
	LogNames  []string `form:"log_names"`
	Sources   []string `form:"sources"`
	Users     []string `form:"users"`
	Computers []string `form:"computers"`
	StartTime string   `form:"start_time"`
	EndTime   string   `form:"end_time"`
	Page      int      `form:"page,default=1"`
	PageSize  int      `form:"page_size,default=100"`
	SortBy    string   `form:"sort_by,default=timestamp"`
	SortOrder string   `form:"sort_order,default=desc"`
	Highlight bool     `form:"highlight"`
}

func (h *AlertHandler) SearchEvents(c *gin.Context) {
	var req SearchEventsRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: ErrCodeInvalidRequest})
		return
	}

	if req.Page < 1 {
		req.Page = 1
	}
	if req.PageSize < 1 || req.PageSize > 10000 {
		req.PageSize = 100
	}

	filter := &storage.EventFilter{
		Keywords: req.Keywords,
		Regex:    req.Regex,
		Limit:    req.PageSize,
		Offset:   (req.Page - 1) * req.PageSize,
		EventIDs: req.EventIDs,
		Levels:   req.Levels,
		LogNames: req.LogNames,
	}

	if req.StartTime != "" {
		if t, err := time.Parse(time.RFC3339, req.StartTime); err == nil {
			filter.StartTime = &t
		}
	}
	if req.EndTime != "" {
		if t, err := time.Parse(time.RFC3339, req.EndTime); err == nil {
			filter.EndTime = &t
		}
	}

	start := time.Now()
	events, total, err := h.db.SearchEvents(filter)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	totalPages := int(total) / req.PageSize
	if int(total)%req.PageSize > 0 {
		totalPages++
	}

	c.JSON(200, types.SearchResponse{
		Events:     events,
		Total:      total,
		Page:       req.Page,
		PageSize:   req.PageSize,
		TotalPages: totalPages,
		QueryTime:  time.Since(start).Milliseconds(),
	})
}

type ExportRequest struct {
	Format  string        `json:"format"` // "json" | "csv" | "excel"
	Filters ExportFilters `json:"filters"`
}

type ExportFilters struct {
	EventIDs  []int32  `json:"event_ids"`
	Levels    []int    `json:"levels"`
	LogNames  []string `json:"log_names"`
	Computers []string `json:"computers"`
	Users     []string `json:"users"`
	StartTime string   `json:"start_time"`
	EndTime   string   `json:"end_time"`
	Keywords  string   `json:"keywords"`
	Limit     int      `json:"limit"`
}

type ExportResponse struct {
	Success bool   `json:"success"`
	Total   int    `json:"total"`
	Message string `json:"message,omitempty"`
}

func (h *AlertHandler) ExportEvents(c *gin.Context) {
	var req ExportRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: ErrCodeInvalidRequest})
		return
	}

	if req.Format == "" {
		req.Format = "json"
	}
	if req.Filters.Limit <= 0 || req.Filters.Limit > 100000 {
		req.Filters.Limit = 10000
	}

	filter := &storage.EventFilter{
		Limit:     req.Filters.Limit,
		EventIDs:  req.Filters.EventIDs,
		Levels:    req.Filters.Levels,
		LogNames:  req.Filters.LogNames,
		Computers: req.Filters.Computers,
	}

	if req.Filters.StartTime != "" {
		if t, err := time.Parse(time.RFC3339, req.Filters.StartTime); err == nil {
			filter.StartTime = &t
		}
	}
	if req.Filters.EndTime != "" {
		if t, err := time.Parse(time.RFC3339, req.Filters.EndTime); err == nil {
			filter.EndTime = &t
		}
	}

	events, _, err := h.db.ListEvents(filter)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	factory := &exporters.ExporterFactory{}
	exporter := factory.Create(req.Format)

	switch req.Format {
	case "csv":
		c.Header("Content-Type", exporter.ContentType())
		c.Header("Content-Disposition", "attachment; filename=events_export.csv")
		exporter.Export(events, c.Writer)
	case "excel", "xlsx":
		c.Header("Content-Type", exporter.ContentType())
		c.Header("Content-Disposition", "attachment; filename=events_export.xlsx")
		exporter.Export(events, c.Writer)
	default:
		c.JSON(200, gin.H{
			"events": events,
			"total":  len(events),
		})
	}
}

type ListAlertsResponse struct {
	Alerts     []*types.Alert `json:"alerts"`
	Total      int64          `json:"total"`
	Page       int            `json:"page"`
	PageSize   int            `json:"page_size"`
	TotalPages int            `json:"total_pages"`
}

func (h *AlertHandler) ListAlerts(c *gin.Context) {
	var req struct {
		PaginationRequest
		Severity string `form:"severity"`
		Resolved *bool  `form:"resolved"`
	}

	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: ErrCodeInvalidRequest})
		return
	}

	filter := &storage.AlertQuery{
		Page:     req.Page,
		PageSize: req.PageSize,
	}
	if req.Severity != "" {
		filter.Severity = req.Severity
	}
	if req.Resolved != nil {
		filter.Resolved = req.Resolved
	}

	alerts, total, err := h.db.AlertRepo().List(filter)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	totalPages := int(total) / req.PageSize
	if int(total)%req.PageSize > 0 {
		totalPages++
	}

	c.JSON(200, ListAlertsResponse{
		Alerts:     alerts,
		Total:      total,
		Page:       req.Page,
		PageSize:   req.PageSize,
		TotalPages: totalPages,
	})
}

func (h *AlertHandler) GetAlertStats(c *gin.Context) {
	stats, err := h.db.AlertRepo().GetStats()
	if err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	alertStats := &types.AlertStats{
		Total:      stats.TotalCount,
		BySeverity: stats.BySeverity,
		ByStatus:   stats.ByStatus,
		ByRule:     stats.TopRules,
		AvgPerDay:  stats.AvgPerDay,
	}

	c.JSON(200, alertStats)
}

func (h *AlertHandler) GetAlertTrend(c *gin.Context) {
	days, _ := strconv.Atoi(c.DefaultQuery("days", "7"))
	if days <= 0 || days > 90 {
		days = 7
	}

	trend, err := h.db.AlertRepo().GetTrend(days)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	c.JSON(200, trend)
}

func (h *AlertHandler) GetAlert(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid alert id", Code: ErrCodeInvalidRequest})
		return
	}

	alert, err := h.db.AlertRepo().GetByID(id)
	if err != nil {
		c.JSON(404, ErrorResponse{Error: "alert not found", Code: ErrCodeAlertNotFound})
		return
	}

	c.JSON(200, alert)
}

type ResolveAlertRequest struct {
	Notes string `json:"notes"`
}

func (h *AlertHandler) ResolveAlert(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid alert id", Code: ErrCodeInvalidRequest})
		return
	}

	var req ResolveAlertRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: ErrCodeInvalidRequest})
		return
	}

	alert, err := h.db.AlertRepo().GetByID(id)
	if err != nil {
		c.JSON(404, ErrorResponse{Error: "alert not found", Code: ErrCodeAlertNotFound})
		return
	}

	if alert.Resolved {
		c.JSON(400, ErrorResponse{Error: "alert already resolved", Code: ErrCodeAlertAlreadyResolved})
		return
	}

	if err := h.db.AlertRepo().Resolve(id, req.Notes); err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	c.JSON(200, SuccessResponse{Message: "Alert resolved"})
}

type MarkFalsePositiveRequest struct {
	Reason string `json:"reason"`
}

func (h *AlertHandler) MarkFalsePositive(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid alert id", Code: ErrCodeInvalidRequest})
		return
	}

	var req MarkFalsePositiveRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: ErrCodeInvalidRequest})
		return
	}

	if err := h.db.AlertRepo().MarkFalsePositive(id, req.Reason); err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	c.JSON(200, SuccessResponse{Message: "Alert marked as false positive"})
}

func (h *AlertHandler) DeleteAlert(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid alert id", Code: ErrCodeInvalidRequest})
		return
	}

	if err := h.db.AlertRepo().Delete(id); err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	c.JSON(200, SuccessResponse{Message: "Alert deleted"})
}

type BatchAlertActionRequest struct {
	IDs    []int64 `json:"ids"`
	Action string  `json:"action"`
	Notes  string  `json:"notes"`
	Reason string  `json:"reason"`
}

func (h *AlertHandler) BatchAlertAction(c *gin.Context) {
	var req BatchAlertActionRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: ErrCodeInvalidRequest})
		return
	}

	if len(req.IDs) == 0 {
		c.JSON(400, ErrorResponse{Error: "no alert IDs provided", Code: ErrCodeInvalidRequest})
		return
	}

	for _, id := range req.IDs {
		switch req.Action {
		case "resolve":
			h.db.AlertRepo().Resolve(id, req.Notes)
		case "false-positive":
			h.db.AlertRepo().MarkFalsePositive(id, req.Reason)
		case "delete":
			h.db.AlertRepo().Delete(id)
		}
	}

	c.JSON(200, SuccessResponse{
		Message: "Batch action completed",
		Data: gin.H{
			"affected": len(req.IDs),
		},
	})
}

func parseTime(s string) (*time.Time, error) {
	if s == "" {
		return nil, nil
	}
	t, err := time.Parse(time.RFC3339, s)
	if err != nil {
		return nil, err
	}
	return &t, nil
}

func exportEventsToCSV(events []*types.Event) string {
	return "id,timestamp,event_id,level,source,log_name,computer,user,message\n"
}

type ImportRequest struct {
	Files []string `json:"files" binding:"required"`
}

func (h *ImportHandler) ImportLogs(c *gin.Context) {
	var req ImportRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: ErrCodeInvalidRequest})
		return
	}

	if len(req.Files) == 0 {
		c.JSON(400, ErrorResponse{Error: "no files provided", Code: ErrCodeInvalidRequest})
		return
	}

	eng := engine.NewEngine(h.db)

	importReq := &engine.ImportRequest{
		Paths:     req.Files,
		BatchSize: 1000,
	}

	ctx := c.Request.Context()
	result, err := eng.Import(ctx, importReq, nil)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	c.JSON(200, gin.H{
		"success":         result.TotalFiles > 0 && result.FilesFailed == 0,
		"total_files":     result.TotalFiles,
		"files_imported":  result.FilesImported,
		"files_failed":    result.FilesFailed,
		"events_imported": result.EventsImported,
		"duration":        fmt.Sprintf("%v", result.Duration),
		"errors":          result.Errors,
	})
}

func (h *ImportHandler) GetImportStatus(c *gin.Context) {
	filePath := c.Query("path")
	if filePath == "" {
		c.JSON(400, ErrorResponse{Error: "path parameter required", Code: ErrCodeInvalidRequest})
		return
	}

	log, err := h.db.GetImportLog(filePath)
	if err != nil {
		c.JSON(404, ErrorResponse{Error: "import log not found"})
		return
	}

	c.JSON(200, log)
}

type TimelineHandler struct {
	db *storage.DB
}

type TimelineEntry struct {
	ID        int64     `json:"id"`
	Timestamp time.Time `json:"timestamp"`
	Type      string    `json:"type"` // "event" or "alert"
	EventID   int32     `json:"event_id,omitempty"`
	AlertID   int64     `json:"alert_id,omitempty"`
	Level     string    `json:"level,omitempty"`
	Source    string    `json:"source,omitempty"`
	Message   string    `json:"message"`
	Severity  string    `json:"severity,omitempty"`
	RuleName  string    `json:"rule_name,omitempty"`
	MITRE     []string  `json:"mitre_attack,omitempty"`
}

type TimelineResponse struct {
	Entries    []*TimelineEntry `json:"entries"`
	TotalCount int              `json:"total_count"`
	EventCount int              `json:"event_count"`
	AlertCount int              `json:"alert_count"`
}

func (h *TimelineHandler) GetTimeline(c *gin.Context) {
	limitStr := c.DefaultQuery("limit", "200")
	limit, _ := strconv.Atoi(limitStr)
	if limit <= 0 || limit > 1000 {
		limit = 200
	}

	startTime := c.Query("start_time")
	endTime := c.Query("end_time")

	var start, end *time.Time
	if startTime != "" {
		if t, err := time.Parse(time.RFC3339, startTime); err == nil {
			start = &t
		}
	}
	if endTime != "" {
		if t, err := time.Parse(time.RFC3339, endTime); err == nil {
			end = &t
		}
	}

	entries := make([]*TimelineEntry, 0)

	eventFilter := &storage.EventFilter{
		Limit: limit,
	}
	if start != nil {
		eventFilter.StartTime = start
	}
	if end != nil {
		eventFilter.EndTime = end
	}
	events, _, _ := h.db.ListEvents(eventFilter)
	for _, e := range events {
		entries = append(entries, &TimelineEntry{
			ID:        e.ID,
			Timestamp: e.Timestamp,
			Type:      "event",
			EventID:   e.EventID,
			Level:     e.Level.String(),
			Source:    e.Source,
			Message:   e.Message,
		})
	}

	alertFilter := &storage.AlertFilter{
		Limit: limit,
	}
	if start != nil {
		alertFilter.StartTime = start
	}
	if end != nil {
		alertFilter.EndTime = end
	}
	alerts, _ := h.db.AlertRepo().Query(alertFilter)
	for _, a := range alerts {
		entries = append(entries, &TimelineEntry{
			ID:        a.ID,
			Timestamp: a.FirstSeen,
			Type:      "alert",
			AlertID:   a.ID,
			Severity:  string(a.Severity),
			Message:   a.Message,
			RuleName:  a.RuleName,
			MITRE:     a.MITREAttack,
		})
	}

	sortTimeline(entries)

	eventCount := len(events)
	alertCount := len(alerts)
	totalCount := len(entries)
	if totalCount > limit {
		entries = entries[:limit]
	}

	c.JSON(200, TimelineResponse{
		Entries:    entries,
		TotalCount: totalCount,
		EventCount: eventCount,
		AlertCount: alertCount,
	})
}

func (h *TimelineHandler) DeleteAlert(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid alert id", Code: ErrCodeInvalidRequest})
		return
	}

	if err := h.db.AlertRepo().Delete(id); err != nil {
		c.JSON(500, ErrorResponse{Error: err.Error()})
		return
	}

	c.JSON(200, SuccessResponse{Message: "Alert deleted"})
}

func sortTimeline(entries []*TimelineEntry) {
	for i := 0; i < len(entries)-1; i++ {
		for j := i + 1; j < len(entries); j++ {
			if entries[j].Timestamp.Before(entries[i].Timestamp) {
				entries[i], entries[j] = entries[j], entries[i]
			}
		}
	}
}
