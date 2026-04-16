package api

import (
	"context"
	"fmt"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/alerts"
	"github.com/kkkdddd-start/winalog-go/internal/engine"
	"github.com/kkkdddd-start/winalog-go/internal/exporters"
	"github.com/kkkdddd-start/winalog-go/internal/rules"
	"github.com/kkkdddd-start/winalog-go/internal/rules/builtin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type AlertHandler struct {
	db          *storage.DB
	alertEngine *alerts.Engine
}

type ImportHandler struct {
	db *storage.DB
}

type ErrorResponse struct {
	Error   string          `json:"error"`
	Code    types.ErrorCode `json:"code,omitempty"`
	Details map[string]any  `json:"details,omitempty"`
}

type ValidationError struct {
	Field   string
	Message string
}

func (e *ValidationError) Error() string {
	return e.Message
}

type SuccessResponse struct {
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

type PaginationRequest struct {
	Page     int `form:"page,default=1" binding:"min=1"`
	PageSize int `form:"page_size,default=100" binding:"min=1,max=10000"`
}

func internalError(c *gin.Context, err error) {
	c.JSON(http.StatusInternalServerError, ErrorResponse{
		Error: err.Error(),
		Code:  types.ErrCodeInternalError,
	})
}

func badRequestError(c *gin.Context, err error) {
	c.JSON(http.StatusBadRequest, ErrorResponse{
		Error: err.Error(),
		Code:  types.ErrCodeInvalidRequest,
	})
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
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: types.ErrCodeInvalidRequest})
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
		c.JSON(400, ErrorResponse{Error: "invalid event id", Code: types.ErrCodeInvalidRequest})
		return
	}

	event, err := h.db.GetEventByID(id)
	if err != nil {
		c.JSON(404, ErrorResponse{Error: "event not found", Code: types.ErrCodeEventNotFound})
		return
	}

	c.JSON(200, event)
}

type SearchEventsRequest struct {
	Keywords  string   `json:"keywords"`
	Regex     bool     `json:"regex"`
	EventIDs  []int32  `json:"event_ids"`
	Levels    []int    `json:"levels"`
	LogNames  []string `json:"log_names"`
	Sources   []string `json:"sources"`
	Users     []string `json:"users"`
	Computers []string `json:"computers"`
	StartTime string   `json:"start_time"`
	EndTime   string   `json:"end_time"`
	Page      int      `json:"page"`
	PageSize  int      `json:"page_size"`
	SortBy    string   `json:"sort_by"`
	SortOrder string   `json:"sort_order"`
	Highlight bool     `json:"highlight"`
}

func (h *AlertHandler) SearchEvents(c *gin.Context) {
	var req SearchEventsRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: types.ErrCodeInvalidRequest})
		return
	}

	if req.Page < 1 {
		req.Page = 1
	}
	if req.PageSize < 1 || req.PageSize > 10000 {
		req.PageSize = 100
	}

	filter := &storage.EventFilter{
		Keywords:  req.Keywords,
		Regex:     req.Regex,
		Limit:     req.PageSize,
		Offset:    (req.Page - 1) * req.PageSize,
		EventIDs:  req.EventIDs,
		Levels:    req.Levels,
		LogNames:  req.LogNames,
		Computers: req.Computers,
		Users:     req.Users,
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
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: types.ErrCodeInvalidRequest})
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

type RunAnalysisResponse struct {
	Success        bool     `json:"success"`
	AlertsCreated  int      `json:"alerts_created"`
	EventsAnalyzed int      `json:"events_analyzed"`
	RulesExecuted  int      `json:"rules_executed"`
	Duration       string   `json:"duration"`
	Errors         []string `json:"errors,omitempty"`
}

func (h *AlertHandler) RunAnalysis(c *gin.Context) {
	if h.alertEngine == nil {
		c.JSON(500, ErrorResponse{Error: "alert engine not initialized", Code: types.ErrCodeInternalError})
		return
	}

	startTime := time.Now()
	ctx := context.Background()

	builtinRules := builtin.GetAlertRules()
	enabledRules := make([]*rules.AlertRule, 0)
	for _, r := range builtinRules {
		if r.Enabled {
			enabledRules = append(enabledRules, r)
		}
	}

	if len(enabledRules) == 0 {
		c.JSON(200, RunAnalysisResponse{
			Success:        true,
			AlertsCreated:  0,
			EventsAnalyzed: 0,
			RulesExecuted:  0,
			Duration:       time.Since(startTime).String(),
		})
		return
	}

	h.alertEngine.LoadRules(enabledRules)

	const batchSize = 1000
	var totalEvents, totalAlerts int
	var errors []string

	offset := 0
	for {
		events, _, err := h.db.ListEvents(&storage.EventFilter{
			Limit:  batchSize,
			Offset: offset,
		})
		if err != nil {
			errors = append(errors, fmt.Sprintf("failed to fetch events at offset %d: %v", offset, err))
			break
		}

		if len(events) == 0 {
			break
		}

		alerts, err := h.alertEngine.EvaluateBatch(ctx, events)
		if err != nil {
			errors = append(errors, fmt.Sprintf("failed to evaluate batch: %v", err))
		}

		if len(alerts) > 0 {
			if err := h.alertEngine.SaveAlerts(alerts); err != nil {
				errors = append(errors, fmt.Sprintf("failed to save alerts: %v", err))
			} else {
				totalAlerts += len(alerts)
			}
		}

		totalEvents += len(events)
		offset += batchSize

		if len(events) < batchSize {
			break
		}
	}

	c.JSON(200, RunAnalysisResponse{
		Success:        len(errors) == 0,
		AlertsCreated:  totalAlerts,
		EventsAnalyzed: totalEvents,
		RulesExecuted:  len(enabledRules),
		Duration:       time.Since(startTime).String(),
		Errors:         errors,
	})
}

func (h *AlertHandler) ListAlerts(c *gin.Context) {
	var req struct {
		PaginationRequest
		Severity string `form:"severity"`
		Resolved *bool  `form:"resolved"`
	}

	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: types.ErrCodeInvalidRequest})
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
		c.JSON(400, ErrorResponse{Error: "invalid alert id", Code: types.ErrCodeInvalidRequest})
		return
	}

	alert, err := h.db.AlertRepo().GetByID(id)
	if err != nil {
		c.JSON(404, ErrorResponse{Error: "alert not found", Code: types.ErrCodeAlertNotFound})
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
		c.JSON(400, ErrorResponse{Error: "invalid alert id", Code: types.ErrCodeInvalidRequest})
		return
	}

	var req ResolveAlertRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: types.ErrCodeInvalidRequest})
		return
	}

	alert, err := h.db.AlertRepo().GetByID(id)
	if err != nil {
		c.JSON(404, ErrorResponse{Error: "alert not found", Code: types.ErrCodeAlertNotFound})
		return
	}

	if alert.Resolved {
		c.JSON(400, ErrorResponse{Error: "alert already resolved", Code: types.ErrCodeAlertAlreadyResolved})
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
		c.JSON(400, ErrorResponse{Error: "invalid alert id", Code: types.ErrCodeInvalidRequest})
		return
	}

	var req MarkFalsePositiveRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: types.ErrCodeInvalidRequest})
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
		c.JSON(400, ErrorResponse{Error: "invalid alert id", Code: types.ErrCodeInvalidRequest})
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
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: types.ErrCodeInvalidRequest})
		return
	}

	if len(req.IDs) == 0 {
		c.JSON(400, ErrorResponse{Error: "no alert IDs provided", Code: types.ErrCodeInvalidRequest})
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
		c.JSON(400, ErrorResponse{Error: err.Error(), Code: types.ErrCodeInvalidRequest})
		return
	}

	if len(req.Files) == 0 {
		c.JSON(400, ErrorResponse{Error: "no files provided", Code: types.ErrCodeInvalidRequest})
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
		c.JSON(400, ErrorResponse{Error: "path parameter required", Code: types.ErrCodeInvalidRequest})
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
		c.JSON(400, ErrorResponse{Error: "invalid alert id", Code: types.ErrCodeInvalidRequest})
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

type TimelineStats struct {
	TotalEvents  int64            `json:"total_events"`
	TotalAlerts  int64            `json:"total_alerts"`
	ByLevel      map[string]int64 `json:"by_level"`
	ByCategory   map[string]int64 `json:"by_category"`
	BySource     map[string]int64 `json:"by_source"`
	TopEventIDs  map[int32]int64  `json:"top_event_ids"`
	TimeRange    string           `json:"time_range"`
	AttackChains int              `json:"attack_chains"`
}

type AttackChainInfo struct {
	ID         string    `json:"id"`
	Name       string    `json:"name"`
	Technique  string    `json:"technique"`
	Tactic     string    `json:"tactic"`
	Severity   string    `json:"severity"`
	EventCount int       `json:"event_count"`
	StartTime  time.Time `json:"start_time"`
	EndTime    time.Time `json:"end_time"`
}

func (h *TimelineHandler) GetTimelineStats(c *gin.Context) {
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

	eventFilter := &storage.EventFilter{Limit: 10000}
	if start != nil {
		eventFilter.StartTime = start
	}
	if end != nil {
		eventFilter.EndTime = end
	}

	events, _, _ := h.db.ListEvents(eventFilter)

	stats := &TimelineStats{
		ByLevel:     make(map[string]int64),
		ByCategory:  make(map[string]int64),
		BySource:    make(map[string]int64),
		TopEventIDs: make(map[int32]int64),
	}

	stats.TotalEvents = int64(len(events))

	for _, e := range events {
		stats.ByLevel[e.Level.String()]++
		stats.BySource[e.Source]++
		stats.TopEventIDs[e.EventID]++
		stats.ByCategory[categorizeEventID(e.EventID)]++
	}

	alertFilter := &storage.AlertFilter{Limit: 1000}
	if start != nil {
		alertFilter.StartTime = start
	}
	if end != nil {
		alertFilter.EndTime = end
	}
	alerts, _ := h.db.AlertRepo().Query(alertFilter)
	stats.TotalAlerts = int64(len(alerts))

	if len(events) > 0 {
		stats.TimeRange = fmt.Sprintf("%.1f hours", events[len(events)-1].Timestamp.Sub(events[0].Timestamp).Hours())
	}

	c.JSON(200, stats)
}

func categorizeEventID(eventID int32) string {
	switch {
	case eventID >= 4624 && eventID <= 4628:
		return "Authentication"
	case eventID >= 4648 && eventID <= 4650:
		return "Remote Access"
	case eventID >= 4660 && eventID <= 4663:
		return "File/Registry"
	case eventID >= 4670 && eventID <= 4674:
		return "Authorization"
	case eventID == 4688 || eventID == 4689:
		return "Process"
	case eventID >= 4696 && eventID <= 4702:
		return "Scheduled Task/Service"
	case eventID >= 4720 && eventID <= 4735:
		return "Account"
	case eventID >= 4740 && eventID <= 4769:
		return "Account"
	default:
		return "Other"
	}
}

func (h *TimelineHandler) GetAttackChains(c *gin.Context) {
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

	eventFilter := &storage.EventFilter{Limit: 10000}
	if start != nil {
		eventFilter.StartTime = start
	}
	if end != nil {
		eventFilter.EndTime = end
	}

	events, _, _ := h.db.ListEvents(eventFilter)

	chains := detectAttackChains(events)

	c.JSON(200, gin.H{
		"chains": chains,
		"total":  len(chains),
	})
}

func detectAttackChains(events []*types.Event) []*AttackChainInfo {
	chains := make([]*AttackChainInfo, 0)

	bruteForceEvents := make([]*types.Event, 0)
	lateralMovementEvents := make([]*types.Event, 0)
	persistenceEvents := make([]*types.Event, 0)

	for _, e := range events {
		switch e.EventID {
		case 4625:
			bruteForceEvents = append(bruteForceEvents, e)
		case 4624, 4648:
			lateralMovementEvents = append(lateralMovementEvents, e)
		case 4698, 4699, 4702:
			persistenceEvents = append(persistenceEvents, e)
		}
	}

	if len(bruteForceEvents) >= 10 {
		chains = append(chains, &AttackChainInfo{
			ID:         "brute-force",
			Name:       "Brute Force Attack",
			Technique:  "T1110",
			Tactic:     "Credential Access",
			Severity:   "high",
			EventCount: len(bruteForceEvents),
			StartTime:  bruteForceEvents[0].Timestamp,
			EndTime:    bruteForceEvents[len(bruteForceEvents)-1].Timestamp,
		})
	}

	if len(lateralMovementEvents) >= 3 {
		chains = append(chains, &AttackChainInfo{
			ID:         "lateral-movement",
			Name:       "Lateral Movement",
			Technique:  "T1021",
			Tactic:     "Lateral Movement",
			Severity:   "high",
			EventCount: len(lateralMovementEvents),
			StartTime:  lateralMovementEvents[0].Timestamp,
			EndTime:    lateralMovementEvents[len(lateralMovementEvents)-1].Timestamp,
		})
	}

	if len(persistenceEvents) > 0 {
		chains = append(chains, &AttackChainInfo{
			ID:         "persistence",
			Name:       "Persistence Mechanism",
			Technique:  "T1053",
			Tactic:     "Persistence",
			Severity:   "medium",
			EventCount: len(persistenceEvents),
			StartTime:  persistenceEvents[0].Timestamp,
			EndTime:    persistenceEvents[len(persistenceEvents)-1].Timestamp,
		})
	}

	return chains
}

func (h *TimelineHandler) ExportTimeline(c *gin.Context) {
	format := c.DefaultQuery("format", "json")

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

	eventFilter := &storage.EventFilter{Limit: 5000}
	if start != nil {
		eventFilter.StartTime = start
	}
	if end != nil {
		eventFilter.EndTime = end
	}

	events, _, _ := h.db.ListEvents(eventFilter)

	switch format {
	case "csv":
		c.Header("Content-Type", "text/csv")
		c.Header("Content-Disposition", "attachment; filename=timeline.csv")
		h.exportTimelineCSV(events, c.Writer)
	case "html":
		c.Header("Content-Type", "text/html")
		c.Header("Content-Disposition", "attachment; filename=timeline.html")
		h.exportTimelineHTML(events, c.Writer)
	default:
		c.JSON(200, gin.H{
			"events": events,
			"total":  len(events),
		})
	}
}

func (h *TimelineHandler) exportTimelineCSV(events []*types.Event, w gin.ResponseWriter) {
	fmt.Fprintf(w, "ID,Timestamp,EventID,Level,Source,LogName,Computer,User,Message\n")
	for _, e := range events {
		user := ""
		if e.User != nil {
			user = *e.User
		}
		fmt.Fprintf(w, "%d,%s,%d,%s,%s,%s,%s,%s,%s\n",
			e.ID, e.Timestamp.Format(time.RFC3339), e.EventID,
			e.Level.String(), e.Source, e.LogName, e.Computer,
			user, e.Message)
	}
}

func (h *TimelineHandler) exportTimelineHTML(events []*types.Event, w gin.ResponseWriter) {
	html := `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>WinLogAnalyzer Timeline</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #1a1a2e; color: #eee; padding: 20px; }
        .timeline { position: relative; padding-left: 30px; }
        .timeline::before { content: ''; position: absolute; left: 10px; top: 0; bottom: 0; width: 2px; background: #3498db; }
        .event { position: relative; margin-bottom: 20px; padding: 10px 15px; background: #16213e; border-radius: 5px; }
        .event::before { content: ''; position: absolute; left: -25px; top: 15px; width: 10px; height: 10px; border-radius: 50%; background: #3498db; }
        .level-critical { border-left: 3px solid #dc3545; }
        .level-error { border-left: 3px solid #fd7e14; }
        .level-warning { border-left: 3px solid #ffc107; }
        .level-info { border-left: 3px solid #3498db; }
        .event-id { color: #00d9ff; font-weight: bold; }
        .timestamp { color: #888; font-size: 0.85em; }
    </style>
</head>
<body>
    <h2>WinLogAnalyzer Timeline</h2>
    <p>Total Events: %d</p>
    <div class="timeline">
`
	fmt.Fprintf(w, html, len(events))

	for _, e := range events {
		level := strings.ToLower(e.Level.String())
		fmt.Fprintf(w, `        <div class="event level-%s">
            <div class="timestamp">%s</div>
            <div><span class="event-id">EventID: %d</span> - %s</div>
            <div>Source: %s | Computer: %s</div>
        </div>
`, level, e.Timestamp.Format("2006-01-02 15:04:05"), e.EventID, e.Message, e.Source, e.Computer)
	}

	fmt.Fprint(w, `
    </div>
</body>
</html>`)
}
