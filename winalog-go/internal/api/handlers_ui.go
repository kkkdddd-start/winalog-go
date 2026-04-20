package api

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type UIHandler struct {
	db *storage.DB
}

type DashboardOverview struct {
	TotalEvents      int64            `json:"total_events"`
	TotalAlerts      int64            `json:"total_alerts"`
	CriticalAlerts   int64            `json:"critical_alerts"`
	HighAlerts       int64            `json:"high_alerts"`
	MediumAlerts     int64            `json:"medium_alerts"`
	LowAlerts        int64            `json:"low_alerts"`
	ResolvedAlerts   int64            `json:"resolved_alerts"`
	UnresolvedAlerts int64            `json:"unresolved_alerts"`
	EventsLast24h    int64            `json:"events_last_24h"`
	AlertsLast24h    int64            `json:"alerts_last_24h"`
	DatabaseSize     string           `json:"database_size"`
	EventSources     map[string]int64 `json:"event_sources"`
	TopAlerts        []*AlertSummary  `json:"top_alerts"`
	RecentEvents     []*EventSummary  `json:"recent_events"`
	AlertTrend       []*TrendPoint    `json:"alert_trend"`
	RiskScore        float64          `json:"risk_score"`
}

type AlertSummary struct {
	ID         int64     `json:"id"`
	RuleName   string    `json:"rule_name"`
	Severity   string    `json:"severity"`
	Message    string    `json:"message"`
	Count      int       `json:"count"`
	FirstSeen  time.Time `json:"first_seen"`
	LastSeen   time.Time `json:"last_seen"`
	IsResolved bool      `json:"is_resolved"`
}

type EventSummary struct {
	ID        int64     `json:"id"`
	EventID   int32     `json:"event_id"`
	Timestamp time.Time `json:"timestamp"`
	Source    string    `json:"source"`
	Computer  string    `json:"computer"`
	Level     string    `json:"level"`
	Message   string    `json:"message"`
}

type TrendPoint struct {
	Date  string `json:"date"`
	Count int64  `json:"count"`
}

func NewUIHandler(db *storage.DB) *UIHandler {
	return &UIHandler{db: db}
}

func (h *UIHandler) GetDashboardOverview(c *gin.Context) {
	overview := &DashboardOverview{}
	ctx := c.Request.Context()

	stats, err := h.db.GetStatsWithContext(ctx)
	if err == nil {
		overview.TotalEvents = stats.EventCount
		overview.DatabaseSize = formatBytes(stats.DatabaseSize)
	}

	alertStats, err := h.db.AlertRepo().GetStatsWithContext(ctx)
	if err == nil {
		overview.TotalAlerts = alertStats.TotalCount
		if bySev, ok := alertStats.BySeverity["critical"]; ok {
			overview.CriticalAlerts = bySev
		}
		if bySev, ok := alertStats.BySeverity["high"]; ok {
			overview.HighAlerts = bySev
		}
		if bySev, ok := alertStats.BySeverity["medium"]; ok {
			overview.MediumAlerts = bySev
		}
		if bySev, ok := alertStats.BySeverity["low"]; ok {
			overview.LowAlerts = bySev
		}
		if byStatus, ok := alertStats.ByStatus["resolved"]; ok {
			overview.ResolvedAlerts = byStatus
		}
		overview.UnresolvedAlerts = overview.TotalAlerts - overview.ResolvedAlerts
	}

	if overview.TotalAlerts > 0 {
		overview.RiskScore = float64(overview.UnresolvedAlerts) / float64(overview.TotalAlerts) * 100
	}

	now := time.Now()
	last24h := now.Add(-24 * time.Hour)

	rows, err := h.db.QueryWithContext(ctx, `
		SELECT COUNT(*) FROM events WHERE timestamp >= ?
	`, last24h.Format(time.RFC3339))
	if err == nil {
		defer rows.Close()
		if rows.Next() {
			rows.Scan(&overview.EventsLast24h)
		}
	}

	alertRows, err := h.db.QueryWithContext(ctx, `
		SELECT COUNT(*) FROM alerts WHERE first_seen >= ?
	`, last24h.Format(time.RFC3339))
	if err == nil {
		defer alertRows.Close()
		if alertRows.Next() {
			alertRows.Scan(&overview.AlertsLast24h)
		}
	}

	sources := make(map[string]int64)
	sourceRows, err := h.db.QueryWithContext(ctx, `
		SELECT log_name, COUNT(*) as count
		FROM events
		GROUP BY log_name
		ORDER BY count DESC
		LIMIT 8
	`)
	if err == nil {
		defer sourceRows.Close()
		for sourceRows.Next() {
			var logName string
			var count int64
			if err := sourceRows.Scan(&logName, &count); err == nil {
				sources[logName] = count
			}
		}
	}
	overview.EventSources = sources

	alertFilter := &storage.AlertFilter{
		Limit: 10,
	}
	alerts, err := h.db.AlertRepo().QueryWithContext(ctx, alertFilter)
	if err == nil {
		for _, alert := range alerts {
			overview.TopAlerts = append(overview.TopAlerts, &AlertSummary{
				ID:         alert.ID,
				RuleName:   alert.RuleName,
				Severity:   string(alert.Severity),
				Message:    alert.Message,
				Count:      alert.Count,
				FirstSeen:  alert.FirstSeen,
				LastSeen:   alert.LastSeen,
				IsResolved: alert.Resolved,
			})
		}
	}

	eventFilter := &storage.EventFilter{
		Limit: 10,
	}
	events, _, err := h.db.ListEventsWithContext(ctx, eventFilter)
	if err == nil {
		for _, event := range events {
			overview.RecentEvents = append(overview.RecentEvents, &EventSummary{
				ID:        event.ID,
				EventID:   event.EventID,
				Timestamp: event.Timestamp,
				Source:    event.Source,
				Computer:  event.Computer,
				Level:     event.Level.String(),
				Message:   event.Message,
			})
		}
	}

	c.JSON(http.StatusOK, overview)
}

func (h *UIHandler) GetAlertGroups(c *gin.Context) {
	groupBy := c.DefaultQuery("group_by", "severity")

	var query string
	switch groupBy {
	case "rule_name":
		query = `
			SELECT rule_name, severity, COUNT(*) as count, 
			       MIN(first_seen) as first_seen, MAX(last_seen) as last_seen
			FROM alerts 
			WHERE 1=1
			GROUP BY rule_name, severity
			ORDER BY count DESC
			LIMIT 50
		`
	case "computer":
		query = `
			SELECT log_name as computer, severity, COUNT(*) as count,
			       MIN(first_seen) as first_seen, MAX(last_seen) as last_seen
			FROM alerts 
			WHERE 1=1
			GROUP BY log_name, severity
			ORDER BY count DESC
			LIMIT 50
		`
	case "time":
		query = `
			SELECT 
				DATE(first_seen) as date,
				severity, 
				COUNT(*) as count
			FROM alerts 
			WHERE 1=1
			GROUP BY DATE(first_seen), severity
			ORDER BY date DESC
			LIMIT 30
		`
	default:
		query = `
			SELECT severity, COUNT(*) as count,
			       MIN(first_seen) as first_seen, MAX(last_seen) as last_seen
			FROM alerts 
			WHERE 1=1
			GROUP BY severity
			ORDER BY count DESC
		`
	}

	rows, err := h.db.Query(query)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}
	defer rows.Close()

	type GroupInfo struct {
		Key       string    `json:"key"`
		Severity  string    `json:"severity,omitempty"`
		Count     int64     `json:"count"`
		FirstSeen time.Time `json:"first_seen"`
		LastSeen  time.Time `json:"last_seen"`
	}

	groups := make([]GroupInfo, 0)
	for rows.Next() {
		var g GroupInfo
		var firstSeen, lastSeen time.Time

		switch groupBy {
		case "rule_name":
			var severity string
			if err := rows.Scan(&g.Key, &severity, &g.Count, &firstSeen, &lastSeen); err == nil {
				g.Severity = severity
				g.FirstSeen = firstSeen
				g.LastSeen = lastSeen
				groups = append(groups, g)
			}
		case "computer":
			var severity string
			if err := rows.Scan(&g.Key, &severity, &g.Count, &firstSeen, &lastSeen); err == nil {
				g.Severity = severity
				g.FirstSeen = firstSeen
				g.LastSeen = lastSeen
				groups = append(groups, g)
			}
		case "time":
			var severity string
			if err := rows.Scan(&g.Key, &severity, &g.Count); err == nil {
				g.Severity = severity
				groups = append(groups, g)
			}
		default:
			if err := rows.Scan(&g.Severity, &g.Count, &firstSeen, &lastSeen); err == nil {
				g.Key = g.Severity
				g.FirstSeen = firstSeen
				g.LastSeen = lastSeen
				groups = append(groups, g)
			}
		}
	}

	c.JSON(http.StatusOK, gin.H{
		"groups":   groups,
		"group_by": groupBy,
		"total":    len(groups),
	})
}

func (h *UIHandler) GetMetrics(c *gin.Context) {
	metrics := make(map[string]interface{})

	stats, err := h.db.GetStats()
	if err == nil {
		metrics["total_events"] = stats.EventCount
		metrics["database_size_bytes"] = stats.DatabaseSize
		metrics["database_size_human"] = formatBytes(stats.DatabaseSize)
	}

	alertStats, err := h.db.AlertRepo().GetStats()
	if err == nil {
		metrics["total_alerts"] = alertStats.TotalCount
		metrics["alerts_by_severity"] = alertStats.BySeverity
		metrics["alerts_by_status"] = alertStats.ByStatus
		metrics["avg_per_day"] = alertStats.AvgPerDay
	}

	now := time.Now()

	hourlyCounts := make([]int64, 24)
	hourRows, err := h.db.Query(`
		SELECT 
			CAST(strftime('%H', timestamp) AS INTEGER) as hour,
			COUNT(*)
		FROM events 
		WHERE timestamp >= ?
		GROUP BY hour
		ORDER BY hour
	`, now.Add(-24*time.Hour).Format(time.RFC3339))
	if err == nil {
		defer hourRows.Close()
		for hourRows.Next() {
			var hour, count int64
			if hourRows.Scan(&hour, &count) == nil {
				if hour >= 0 && hour < 24 {
					hourlyCounts[hour] = count
				}
			}
		}
	}
	metrics["events_by_hour"] = hourlyCounts

	metrics["timestamp"] = now.Format(time.RFC3339)

	c.JSON(http.StatusOK, metrics)
}

func (h *UIHandler) GetEventDistribution(c *gin.Context) {
	distribution := make(map[string]interface{})

	levelRows, err := h.db.Query(`
		SELECT level, COUNT(*) as count
		FROM events
		GROUP BY level
		ORDER BY count DESC
	`)
	if err == nil {
		defer levelRows.Close()
		byLevel := make(map[string]int64)
		for levelRows.Next() {
			var level, count int
			if levelRows.Scan(&level, &count) == nil {
				byLevel[formatLevel(level)] = int64(count)
			}
		}
		distribution["by_level"] = byLevel
	}

	sourceRows, err := h.db.Query(`
		SELECT source, COUNT(*) as count
		FROM events
		GROUP BY source
		ORDER BY count DESC
		LIMIT 20
	`)
	if err == nil {
		defer sourceRows.Close()
		bySource := make(map[string]int64)
		for sourceRows.Next() {
			var source string
			var count int64
			if sourceRows.Scan(&source, &count) == nil {
				bySource[source] = count
			}
		}
		distribution["by_source"] = bySource
	}

	logNameRows, err := h.db.Query(`
		SELECT log_name, COUNT(*) as count
		FROM events
		GROUP BY log_name
		ORDER BY count DESC
		LIMIT 15
	`)
	if err == nil {
		defer logNameRows.Close()
		byLogName := make(map[string]int64)
		for logNameRows.Next() {
			var logName string
			var count int64
			if logNameRows.Scan(&logName, &count) == nil {
				byLogName[logName] = count
			}
		}
		distribution["by_log_name"] = byLogName
	}

	eventIDRows, err := h.db.Query(`
		SELECT event_id, COUNT(*) as count
		FROM events
		GROUP BY event_id
		ORDER BY count DESC
		LIMIT 20
	`)
	if err == nil {
		defer eventIDRows.Close()
		type EventIDCount struct {
			EventID int32 `json:"event_id"`
			Count   int64 `json:"count"`
		}
		topEventIDs := make([]EventIDCount, 0)
		for eventIDRows.Next() {
			var eventID int32
			var count int64
			if eventIDRows.Scan(&eventID, &count) == nil {
				topEventIDs = append(topEventIDs, EventIDCount{EventID: eventID, Count: count})
			}
		}
		distribution["top_event_ids"] = topEventIDs
	}

	c.JSON(http.StatusOK, distribution)
}

func formatLevel(level int) string {
	switch level {
	case 1:
		return "Critical"
	case 2:
		return "Error"
	case 3:
		return "Warning"
	case 4:
		return "Info"
	default:
		return "Verbose"
	}
}

func SetupUIRoutes(r *gin.Engine, uiHandler *UIHandler) {
	ui := r.Group("/api/ui")
	{
		ui.GET("/dashboard", uiHandler.GetDashboardOverview)
		ui.GET("/alerts/groups", uiHandler.GetAlertGroups)
		ui.GET("/metrics", uiHandler.GetMetrics)
		ui.GET("/events/distribution", uiHandler.GetEventDistribution)
	}
}
