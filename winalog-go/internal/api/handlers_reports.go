package api

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jung-kurt/gofpdf"
	"github.com/kkkdddd-start/winalog-go/internal/exporters"
	reporttemplate "github.com/kkkdddd-start/winalog-go/internal/reports/template"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
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
	Title       string `json:"title"`
	Description string `json:"description"`
}

type ReportInfo struct {
	ID          string    `json:"id"`
	Type        string    `json:"type"`
	Format      string    `json:"format"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Status      string    `json:"status"`
	GeneratedAt time.Time `json:"generated_at"`
	CompletedAt time.Time `json:"completed_at,omitempty"`
	FilePath    string    `json:"file_path,omitempty"`
	FileSize    int64     `json:"file_size,omitempty"`
	Error       string    `json:"error,omitempty"`
}

type ReportContent struct {
	Summary   *ReportSummary    `json:"summary,omitempty"`
	Alerts    []*ReportAlert    `json:"alerts,omitempty"`
	Events    []*ReportEvent    `json:"events,omitempty"`
	Timeline  []*ReportTimeline `json:"timeline,omitempty"`
	RawEvents []*types.Event    `json:"raw_events,omitempty"`
}

type ReportSummary struct {
	TotalEvents     int64            `json:"total_events"`
	TotalAlerts     int64            `json:"total_alerts"`
	CriticalAlerts  int64            `json:"critical_alerts"`
	HighAlerts      int64            `json:"high_alerts"`
	MediumAlerts    int64            `json:"medium_alerts"`
	LowAlerts       int64            `json:"low_alerts"`
	TopEventSources map[string]int64 `json:"top_sources"`
	TimeRange       TimeRange        `json:"time_range"`
}

type TimeRange struct {
	Start time.Time `json:"start"`
	End   time.Time `json:"end"`
}

type ReportAlert struct {
	ID        int64     `json:"id"`
	RuleName  string    `json:"rule_name"`
	Severity  string    `json:"severity"`
	Message   string    `json:"message"`
	Count     int64     `json:"count"`
	FirstSeen time.Time `json:"first_seen"`
	LastSeen  time.Time `json:"last_seen"`
	MITRE     []string  `json:"mitre_attack,omitempty"`
}

type ReportEvent struct {
	ID        int64     `json:"id"`
	Timestamp time.Time `json:"timestamp"`
	EventID   int32     `json:"event_id"`
	Level     string    `json:"level"`
	Source    string    `json:"source"`
	LogName   string    `json:"log_name"`
	Computer  string    `json:"computer"`
	Message   string    `json:"message"`
}

type ReportTimeline struct {
	Timestamp time.Time `json:"timestamp"`
	Type      string    `json:"type"`
	Source    string    `json:"source"`
	Message   string    `json:"message"`
	Severity  string    `json:"severity,omitempty"`
}

func NewReportsHandler(db *storage.DB) *ReportsHandler {
	return &ReportsHandler{db: db}
}

func (h *ReportsHandler) ListReports(c *gin.Context) {
	rows, err := h.db.Query(`
		SELECT id, type, format, title, description, status, generated_at, completed_at, file_path, file_size
		FROM reports 
		ORDER BY generated_at DESC 
		LIMIT 100
	`)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}
	defer rows.Close()

	reports := make([]ReportInfo, 0)
	for rows.Next() {
		var r ReportInfo
		var generatedAt, completedAt sql.NullTime
		var filePath sql.NullString
		var fileSize sql.NullInt64
		var title, description sql.NullString

		if err := rows.Scan(&r.ID, &r.Type, &r.Format, &title, &description, &r.Status, &generatedAt, &completedAt, &filePath, &fileSize); err != nil {
			continue
		}

		if title.Valid {
			r.Title = title.String
		}
		if description.Valid {
			r.Description = description.String
		}
		if generatedAt.Valid {
			r.GeneratedAt = generatedAt.Time
		}
		if completedAt.Valid {
			r.CompletedAt = completedAt.Time
		}
		if filePath.Valid {
			r.FilePath = filePath.String
		}
		if fileSize.Valid {
			r.FileSize = fileSize.Int64
		}

		reports = append(reports, r)
	}

	c.JSON(http.StatusOK, gin.H{
		"reports": reports,
		"total":   len(reports),
	})
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

	reportID := fmt.Sprintf("report_%s_%d", req.Type, time.Now().UnixNano())
	reportDir := filepath.Join(os.TempDir(), "winalog_reports")
	os.MkdirAll(reportDir, 0755)

	generatedAt := time.Now()

	_, err := h.db.Exec(`
		INSERT INTO reports (id, type, format, title, description, status, generated_at, query_params)
		VALUES (?, ?, ?, ?, ?, 'generating', ?, ?)`,
		reportID, req.Type, req.Format, req.Title, req.Description, generatedAt, "")

	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}

	go h.generateReportAsync(reportID, req, generatedAt)

	c.JSON(http.StatusOK, gin.H{
		"id":           reportID,
		"type":         req.Type,
		"format":       req.Format,
		"status":       "generating",
		"generated_at": generatedAt,
		"message":      "Report generation started",
		"download_url": fmt.Sprintf("/api/reports/%s/download", reportID),
	})
}

func (h *ReportsHandler) generateReportAsync(reportID string, req ReportRequest, generatedAt time.Time) {
	content, err := h.buildReportContent(req)
	if err != nil {
		h.db.Exec(`UPDATE reports SET status = 'failed', error_message = ?, completed_at = ? WHERE id = ?`,
			err.Error(), time.Now(), reportID)
		return
	}

	reportDir := filepath.Join(os.TempDir(), "winalog_reports")
	os.MkdirAll(reportDir, 0755)
	fileName := fmt.Sprintf("%s.%s", reportID, req.Format)
	filePath := filepath.Join(reportDir, fileName)

	if req.Format == "pdf" {
		if err := h.generatePDF(content, filePath, req); err != nil {
			h.db.Exec(`UPDATE reports SET status = 'failed', error_message = ?, completed_at = ? WHERE id = ?`,
				err.Error(), time.Now(), reportID)
			return
		}
	} else {
		data, _ := json.MarshalIndent(content, "", "  ")
		if err := os.WriteFile(filePath, data, 0644); err != nil {
			h.db.Exec(`UPDATE reports SET status = 'failed', error_message = ?, completed_at = ? WHERE id = ?`,
				err.Error(), time.Now(), reportID)
			return
		}
	}

	fi, _ := os.Stat(filePath)
	fileSize := int64(0)
	if fi != nil {
		fileSize = fi.Size()
	}

	h.db.Exec(`UPDATE reports SET status = 'completed', completed_at = ?, file_path = ?, file_size = ? WHERE id = ?`,
		time.Now(), filePath, fileSize, reportID)
}

func (h *ReportsHandler) generatePDF(content *ReportContent, filePath string, req ReportRequest) error {
	pdf := gofpdf.New("P", "mm", "A4", "")
	pdf.SetMargins(15, 15, 15)
	pdf.AddPage()

	pdf.SetFillColor(22, 33, 62)
	pdf.Rect(0, 0, 210, 40, "F")
	pdf.SetTextColor(0, 217, 255)
	pdf.SetFont("Arial", "B", 20)
	pdf.SetXY(15, 12)
	title := req.Title
	if title == "" {
		title = fmt.Sprintf("%s Report", req.Type)
	}
	pdf.Cell(180, 10, title)

	pdf.SetTextColor(136, 136, 136)
	pdf.SetFont("Arial", "", 10)
	pdf.SetXY(15, 28)
	pdf.Cell(180, 6, fmt.Sprintf("Generated: %s", time.Now().Format("2006-01-02 15:04:05")))

	pdf.SetTextColor(51, 51, 51)
	pdf.SetY(50)

	if content.Summary != nil {
		h.addSummaryToPDF(pdf, content.Summary)
	}

	if content.Alerts != nil && len(content.Alerts) > 0 {
		h.addAlertsToPDF(pdf, content.Alerts)
	}

	if content.Events != nil && len(content.Events) > 0 {
		h.addEventsToPDF(pdf, content.Events)
	}

	if content.Timeline != nil && len(content.Timeline) > 0 {
		h.addTimelineToPDF(pdf, content.Timeline)
	}

	return pdf.OutputFileAndClose(filePath)
}

func (h *ReportsHandler) addSummaryToPDF(pdf *gofpdf.Fpdf, summary *ReportSummary) {
	pdf.SetFont("Arial", "B", 14)
	pdf.SetTextColor(0, 217, 255)
	pdf.Cell(0, 10, "Security Summary")
	pdf.Ln(12)

	pdf.SetFont("Arial", "", 10)
	pdf.SetTextColor(51, 51, 51)

	metrics := []struct {
		label string
		value int64
	}{
		{"Total Events", summary.TotalEvents},
		{"Total Alerts", summary.TotalAlerts},
		{"Critical Alerts", summary.CriticalAlerts},
		{"High Alerts", summary.HighAlerts},
		{"Medium Alerts", summary.MediumAlerts},
		{"Low Alerts", summary.LowAlerts},
	}

	for _, m := range metrics {
		pdf.SetFont("Arial", "B", 10)
		pdf.Cell(60, 7, m.label+":")
		pdf.SetFont("Arial", "", 10)
		pdf.Cell(0, 7, fmt.Sprintf("%d", m.value))
		pdf.Ln(7)
	}

	pdf.Ln(5)
}

func (h *ReportsHandler) addAlertsToPDF(pdf *gofpdf.Fpdf, alerts []*ReportAlert) {
	pdf.SetFont("Arial", "B", 14)
	pdf.SetTextColor(0, 217, 255)
	pdf.Cell(0, 10, "Alert Details")
	pdf.Ln(12)

	tableWidth := []float64{25, 40, 25, 70}
	headers := []string{"Severity", "Rule Name", "Count", "Message"}

	pdf.SetFont("Arial", "B", 9)
	pdf.SetFillColor(0, 217, 255)
	pdf.SetTextColor(255, 255, 255)
	for i, h := range headers {
		pdf.Cell(tableWidth[i], 8, h)
	}
	pdf.Ln(8)

	pdf.SetFont("Arial", "", 8)
	pdf.SetTextColor(51, 51, 51)
	fill := false
	for i, alert := range alerts {
		if i >= 20 {
			pdf.Cell(0, 7, "... and more alerts")
			break
		}
		if fill {
			pdf.SetFillColor(245, 245, 245)
		} else {
			pdf.SetFillColor(255, 255, 255)
		}
		pdf.Cell(tableWidth[0], 6, alert.Severity)
		pdf.Cell(tableWidth[1], 6, h.truncateString(alert.RuleName, 25))
		pdf.Cell(tableWidth[2], 6, fmt.Sprintf("%d", alert.Count))
		pdf.Cell(tableWidth[3], 6, h.truncateString(alert.Message, 45))
		pdf.Ln(6)
		fill = !fill
	}

	pdf.Ln(5)
}

func (h *ReportsHandler) addEventsToPDF(pdf *gofpdf.Fpdf, events []*ReportEvent) {
	pdf.SetFont("Arial", "B", 14)
	pdf.SetTextColor(0, 217, 255)
	pdf.Cell(0, 10, "Event Details")
	pdf.Ln(12)

	tableWidth := []float64{35, 20, 30, 60}
	headers := []string{"Timestamp", "Event ID", "Source", "Message"}

	pdf.SetFont("Arial", "B", 9)
	pdf.SetFillColor(0, 217, 255)
	pdf.SetTextColor(255, 255, 255)
	for i, h := range headers {
		pdf.Cell(tableWidth[i], 8, h)
	}
	pdf.Ln(8)

	pdf.SetFont("Arial", "", 8)
	pdf.SetTextColor(51, 51, 51)
	fill := false
	for i, event := range events {
		if i >= 20 {
			pdf.Cell(0, 7, "... and more events")
			break
		}
		if fill {
			pdf.SetFillColor(245, 245, 245)
		} else {
			pdf.SetFillColor(255, 255, 255)
		}
		pdf.Cell(tableWidth[0], 6, event.Timestamp.Format("2006-01-02 15:04"))
		pdf.Cell(tableWidth[1], 6, fmt.Sprintf("%d", event.EventID))
		pdf.Cell(tableWidth[2], 6, h.truncateString(event.Source, 20))
		pdf.Cell(tableWidth[3], 6, h.truncateString(event.Message, 40))
		pdf.Ln(6)
		fill = !fill
	}

	pdf.Ln(5)
}

func (h *ReportsHandler) addTimelineToPDF(pdf *gofpdf.Fpdf, timeline []*ReportTimeline) {
	pdf.SetFont("Arial", "B", 14)
	pdf.SetTextColor(0, 217, 255)
	pdf.Cell(0, 10, "Event Timeline")
	pdf.Ln(12)

	pdf.SetFont("Arial", "", 8)
	pdf.SetTextColor(51, 51, 51)
	for i, entry := range timeline {
		if i >= 30 {
			pdf.Cell(0, 6, "... and more timeline entries")
			break
		}
		pdf.SetFont("Arial", "B", 8)
		pdf.Cell(0, 5, fmt.Sprintf("[%s] %s", entry.Timestamp.Format("2006-01-02 15:04"), entry.Type))
		pdf.Ln(5)
		pdf.SetFont("Arial", "", 8)
		if entry.Severity != "" {
			pdf.Cell(0, 5, fmt.Sprintf("  Severity: %s | Source: %s", entry.Severity, entry.Source))
		} else {
			pdf.Cell(0, 5, fmt.Sprintf("  Source: %s", entry.Source))
		}
		pdf.Ln(5)
		pdf.Cell(0, 5, h.truncateString(entry.Message, 100))
		pdf.Ln(8)
	}
}

func (h *ReportsHandler) truncateString(s string, maxLen int) string {
	if len(s) <= maxLen {
		return s
	}
	return s[:maxLen-3] + "..."
}

func (h *ReportsHandler) buildReportContent(req ReportRequest) (*ReportContent, error) {
	content := &ReportContent{}

	var startTime, endTime *time.Time
	if req.StartTime != "" {
		if t, err := time.Parse(time.RFC3339, req.StartTime); err == nil {
			startTime = &t
		}
	}
	if req.EndTime != "" {
		if t, err := time.Parse(time.RFC3339, req.EndTime); err == nil {
			endTime = &t
		}
	}

	switch req.Type {
	case "security_summary":
		summary, err := h.buildSecuritySummary(startTime, endTime)
		if err == nil {
			content.Summary = summary
		}
	case "alert_report":
		alerts, err := h.buildAlertReport(startTime, endTime)
		if err == nil {
			content.Alerts = alerts
		}
	case "event_report":
		events, err := h.buildEventReport(startTime, endTime)
		if err == nil {
			content.Events = events
		}
	case "timeline_report":
		timeline, err := h.buildTimelineReport(startTime, endTime)
		if err == nil {
			content.Timeline = timeline
		}
	default:
		summary, _ := h.buildSecuritySummary(startTime, endTime)
		if summary != nil {
			content.Summary = summary
		}
	}

	return content, nil
}

func (h *ReportsHandler) buildSecuritySummary(startTime, endTime *time.Time) (*ReportSummary, error) {
	summary := &ReportSummary{
		TopEventSources: make(map[string]int64),
	}

	h.db.QueryRow("SELECT COUNT(*) FROM events").Scan(&summary.TotalEvents)
	h.db.QueryRow("SELECT COUNT(*) FROM alerts").Scan(&summary.TotalAlerts)
	h.db.QueryRow("SELECT COUNT(*) FROM alerts WHERE severity = 'critical'").Scan(&summary.CriticalAlerts)
	h.db.QueryRow("SELECT COUNT(*) FROM alerts WHERE severity = 'high'").Scan(&summary.HighAlerts)
	h.db.QueryRow("SELECT COUNT(*) FROM alerts WHERE severity = 'medium'").Scan(&summary.MediumAlerts)
	h.db.QueryRow("SELECT COUNT(*) FROM alerts WHERE severity = 'low'").Scan(&summary.LowAlerts)

	rows, err := h.db.Query(`
		SELECT log_name, COUNT(*) as cnt 
		FROM events 
		GROUP BY log_name 
		ORDER BY cnt DESC 
		LIMIT 10
	`)
	if err == nil {
		defer rows.Close()
		for rows.Next() {
			var logName string
			var count int64
			if rows.Scan(&logName, &count) == nil {
				summary.TopEventSources[logName] = count
			}
		}
	}

	return summary, nil
}

func (h *ReportsHandler) buildAlertReport(startTime, endTime *time.Time) ([]*ReportAlert, error) {
	query := `
		SELECT id, rule_name, severity, message, count, first_seen, last_seen, mitre_attack
		FROM alerts
		WHERE 1=1
	`
	var args []interface{}

	if startTime != nil {
		query += " AND first_seen >= ?"
		args = append(args, startTime.Format(time.RFC3339))
	}
	if endTime != nil {
		query += " AND first_seen <= ?"
		args = append(args, endTime.Format(time.RFC3339))
	}

	query += " ORDER BY first_seen DESC LIMIT 1000"

	rows, err := h.db.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	alerts := make([]*ReportAlert, 0)
	for rows.Next() {
		var a ReportAlert
		var firstSeen, lastSeen time.Time
		var mitreStr sql.NullString

		if err := rows.Scan(&a.ID, &a.RuleName, &a.Severity, &a.Message, &a.Count, &firstSeen, &lastSeen, &mitreStr); err != nil {
			continue
		}

		a.FirstSeen = firstSeen
		a.LastSeen = lastSeen
		if mitreStr.Valid && mitreStr.String != "" {
			json.Unmarshal([]byte(mitreStr.String), &a.MITRE)
		}

		alerts = append(alerts, &a)
	}

	return alerts, nil
}

func (h *ReportsHandler) buildEventReport(startTime, endTime *time.Time) ([]*ReportEvent, error) {
	query := `
		SELECT id, timestamp, event_id, level, source, log_name, computer, message
		FROM events
		WHERE 1=1
	`
	var args []interface{}

	if startTime != nil {
		query += " AND timestamp >= ?"
		args = append(args, startTime.Format(time.RFC3339))
	}
	if endTime != nil {
		query += " AND timestamp <= ?"
		args = append(args, endTime.Format(time.RFC3339))
	}

	query += " ORDER BY timestamp DESC LIMIT 1000"

	rows, err := h.db.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	events := make([]*ReportEvent, 0)
	for rows.Next() {
		var e ReportEvent
		var timestamp time.Time
		var level int

		if err := rows.Scan(&e.ID, &timestamp, &e.EventID, &level, &e.Source, &e.LogName, &e.Computer, &e.Message); err != nil {
			continue
		}

		e.Timestamp = timestamp
		e.Level = fmt.Sprintf("Level%d", level)
		events = append(events, &e)
	}

	return events, nil
}

func (h *ReportsHandler) buildTimelineReport(startTime, endTime *time.Time) ([]*ReportTimeline, error) {
	entries := make([]*ReportTimeline, 0)

	limit := 500
	if startTime != nil || endTime != nil {
		limit = 1000
	}

	eventRows, err := h.db.Query(`
		SELECT timestamp, event_id, source, log_name, message 
		FROM events 
		WHERE 1=1
	`+buildTimeFilter(startTime, endTime)+`
		ORDER BY timestamp DESC LIMIT ?
	`, limit/2)

	if err == nil {
		defer eventRows.Close()
		for eventRows.Next() {
			var timestamp time.Time
			var eventID int32
			var source, logName, message string

			if eventRows.Scan(&timestamp, &eventID, &source, &logName, &message) == nil {
				entries = append(entries, &ReportTimeline{
					Timestamp: timestamp,
					Type:      "event",
					Source:    source,
					Message:   message,
				})
			}
		}
	}

	alertRows, err := h.db.Query(`
		SELECT first_seen, source, message, severity 
		FROM alerts 
		WHERE 1=1
	`+buildTimeFilter(startTime, endTime)+`
		ORDER BY first_seen DESC LIMIT ?
	`, limit/2)

	if err == nil {
		defer alertRows.Close()
		for alertRows.Next() {
			var timestamp time.Time
			var source, message, severity string

			if alertRows.Scan(&timestamp, &source, &message, &severity) == nil {
				entries = append(entries, &ReportTimeline{
					Timestamp: timestamp,
					Type:      "alert",
					Source:    source,
					Message:   message,
					Severity:  severity,
				})
			}
		}
	}

	return entries, nil
}

func buildTimeFilter(startTime, endTime *time.Time) string {
	filter := ""
	if startTime != nil {
		filter += fmt.Sprintf(" AND timestamp >= '%s'", startTime.Format(time.RFC3339))
	}
	if endTime != nil {
		filter += fmt.Sprintf(" AND timestamp <= '%s'", endTime.Format(time.RFC3339))
	}
	return filter
}

func (h *ReportsHandler) GetReport(c *gin.Context) {
	reportID := c.Param("id")

	var report ReportInfo
	var generatedAt, completedAt sql.NullTime
	var title, description, queryParams sql.NullString
	var filePath sql.NullString
	var fileSize sql.NullInt64

	err := h.db.QueryRow(`
		SELECT id, type, format, title, description, status, generated_at, completed_at, file_path, file_size, query_params
		FROM reports WHERE id = ?
	`, reportID).Scan(&report.ID, &report.Type, &report.Format, &title, &description, &report.Status,
		&generatedAt, &completedAt, &filePath, &fileSize, &queryParams)

	if err != nil {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "Report not found"})
		return
	}

	if title.Valid {
		report.Title = title.String
	}
	if description.Valid {
		report.Description = description.String
	}
	if generatedAt.Valid {
		report.GeneratedAt = generatedAt.Time
	}
	if completedAt.Valid {
		report.CompletedAt = completedAt.Time
	}
	if filePath.Valid {
		report.FilePath = filePath.String
	}
	if fileSize.Valid {
		report.FileSize = fileSize.Int64
	}

	c.JSON(http.StatusOK, report)
}

type TemplateRequest struct {
	Name        string `json:"name" binding:"required"`
	Content     string `json:"content" binding:"required"`
	Description string `json:"description"`
}

func (h *ReportsHandler) ListTemplates(c *gin.Context) {
	tmplMgr := reporttemplate.GetManager()
	infos := tmplMgr.ListTemplateInfo()

	c.JSON(200, gin.H{
		"templates": infos,
		"total":     len(infos),
	})
}

func (h *ReportsHandler) GetTemplate(c *gin.Context) {
	name := c.Param("name")
	tmplMgr := reporttemplate.GetManager()

	if tmpl, ok := tmplMgr.GetTemplate(name); ok {
		c.JSON(200, gin.H{
			"name":      name,
			"content":   "",
			"template":  tmpl.Root,
			"is_custom": tmplMgr.IsCustomTemplate(name),
		})
		return
	}

	c.JSON(404, ErrorResponse{Error: "Template not found"})
}

func (h *ReportsHandler) CreateTemplate(c *gin.Context) {
	var req TemplateRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error()})
		return
	}

	tmplMgr := reporttemplate.GetManager()
	if err := tmplMgr.SetCustomTemplate(req.Name, req.Content); err != nil {
		c.JSON(400, ErrorResponse{Error: "Invalid template: " + err.Error()})
		return
	}

	c.JSON(201, SuccessResponse{Message: "Template created"})
}

func (h *ReportsHandler) UpdateTemplate(c *gin.Context) {
	name := c.Param("name")

	var req TemplateRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: err.Error()})
		return
	}

	tmplMgr := reporttemplate.GetManager()
	if err := tmplMgr.SetCustomTemplate(name, req.Content); err != nil {
		c.JSON(400, ErrorResponse{Error: "Invalid template: " + err.Error()})
		return
	}

	c.JSON(200, SuccessResponse{Message: "Template updated"})
}

func (h *ReportsHandler) DeleteTemplate(c *gin.Context) {
	name := c.Param("name")

	tmplMgr := reporttemplate.GetManager()
	if !tmplMgr.IsCustomTemplate(name) {
		c.JSON(404, ErrorResponse{Error: "Template not found or cannot be deleted"})
		return
	}

	tmplMgr.DeleteCustomTemplate(name)
	c.JSON(200, SuccessResponse{Message: "Template deleted"})
}

func (h *ReportsHandler) ExportData(c *gin.Context) {
	format := c.DefaultQuery("format", "json")

	events, _, err := h.db.ListEvents(&storage.EventFilter{Limit: 1000})
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: "Failed to fetch events"})
		return
	}

	factory := &exporters.ExporterFactory{}
	exporter := factory.Create(format)

	c.Header("Content-Disposition", fmt.Sprintf("attachment; filename=events_export.%s", format))
	c.Header("Content-Type", exporter.ContentType())

	exporter.Export(events, c.Writer)
}

func SetupReportsRoutes(r *gin.Engine, reportsHandler *ReportsHandler) {
	reportsGroup := r.Group("/api/reports")
	{
		reportsGroup.GET("", reportsHandler.ListReports)
		reportsGroup.POST("", reportsHandler.GenerateReport)
		reportsGroup.GET("/:id", reportsHandler.GetReport)
		reportsGroup.GET("/export", reportsHandler.ExportData)
	}

	templateGroup := r.Group("/api/report-templates")
	{
		templateGroup.GET("", reportsHandler.ListTemplates)
		templateGroup.GET("/:name", reportsHandler.GetTemplate)
		templateGroup.POST("", reportsHandler.CreateTemplate)
		templateGroup.PUT("/:name", reportsHandler.UpdateTemplate)
		templateGroup.DELETE("/:name", reportsHandler.DeleteTemplate)
	}
}
