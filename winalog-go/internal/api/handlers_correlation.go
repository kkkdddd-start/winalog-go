package api

import (
	"context"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/correlation"
	"github.com/kkkdddd-start/winalog-go/internal/rules"
	"github.com/kkkdddd-start/winalog-go/internal/rules/builtin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type CorrelationHandler struct {
	db *storage.DB
}

type CorrelationRequest struct {
	TimeWindow string   `json:"time_window"`
	Rules      []string `json:"rules"`
}

type CorrelationResponse struct {
	RuleName    string    `json:"rule_name"`
	Severity    string    `json:"severity"`
	Events      int       `json:"event_count"`
	StartTime   time.Time `json:"start_time"`
	EndTime     time.Time `json:"end_time"`
	Description string    `json:"description"`
}

func NewCorrelationHandler(db *storage.DB) *CorrelationHandler {
	return &CorrelationHandler{db: db}
}

func (h *CorrelationHandler) Analyze(c *gin.Context) {
	var req CorrelationRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		req.TimeWindow = "24h"
	}

	timeWindow := 24 * time.Hour
	if req.TimeWindow != "" {
		if dur, err := time.ParseDuration(req.TimeWindow); err == nil {
			timeWindow = dur
		}
	}

	startTime := time.Now().Add(-timeWindow)
	endTime := time.Now()

	rows, err := h.db.Query(`
		SELECT id, timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id
		FROM events WHERE timestamp >= ? AND timestamp <= ? ORDER BY timestamp`,
		startTime.Format(time.RFC3339), endTime.Format(time.RFC3339))
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}
	defer rows.Close()

	var events []*types.Event
	for rows.Next() {
		event, err := types.ScanEvent(rows)
		if err != nil {
			continue
		}
		events = append(events, event)
	}

	if len(events) == 0 {
		c.JSON(http.StatusOK, gin.H{
			"results": []CorrelationResponse{},
			"count":   0,
		})
		return
	}

	engine := correlation.NewEngine()
	engine.LoadEvents(events)

	correlationRules := builtin.GetCorrelationRules()
	if len(req.Rules) > 0 {
		var filtered []*rules.CorrelationRule
		for _, r := range correlationRules {
			for _, name := range req.Rules {
				if r.Name == name {
					filtered = append(filtered, r)
					break
				}
			}
		}
		correlationRules = filtered
	}

	results, err := engine.Analyze(context.Background(), correlationRules)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}

	response := make([]CorrelationResponse, 0, len(results))
	for _, r := range results {
		response = append(response, CorrelationResponse{
			RuleName:    r.RuleName,
			Severity:    string(r.Severity),
			Events:      len(r.Events),
			StartTime:   r.StartTime,
			EndTime:     r.EndTime,
			Description: r.Description,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"results": response,
		"count":   len(response),
	})
}

func SetupCorrelationRoutes(r *gin.Engine, h *CorrelationHandler) {
	correlationGroup := r.Group("/api/correlation")
	{
		correlationGroup.POST("/analyze", h.Analyze)
	}
}
