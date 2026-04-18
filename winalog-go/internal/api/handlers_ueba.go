package api

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/ueba"
)

type UEBAHandler struct {
	db     *storage.DB
	engine *ueba.Engine
}

type UEBARequest struct {
	StartTime string `json:"start_time"`
	EndTime   string `json:"end_time"`
	Hours     int    `json:"hours"`
}

type UEBAResult struct {
	Type            string                `json:"type"`
	Anomalies       []*ueba.AnomalyResult `json:"anomalies"`
	TotalAnomaly    int                   `json:"total_anomaly"`
	HighRiskCount   int                   `json:"high_risk_count"`
	MediumRiskCount int                   `json:"medium_risk_count"`
	Duration        string                `json:"duration"`
}

func NewUEBAHandler(db *storage.DB) *UEBAHandler {
	engine := ueba.NewEngine(ueba.EngineConfig{
		LearningWindow:       7 * 24 * time.Hour,
		AlertThreshold:       70,
		MinEventsForBaseline: 10,
	})

	return &UEBAHandler{
		db:     db,
		engine: engine,
	}
}

func (h *UEBAHandler) Analyze(c *gin.Context) {
	startTime := time.Now()

	var req UEBARequest
	if err := c.ShouldBindJSON(&req); err != nil {
		req = UEBARequest{}
	}

	hours := req.Hours
	if hours <= 0 {
		hours = 24
	}

	endTime := time.Now()
	start := endTime.Add(-time.Duration(hours) * time.Hour)

	if req.StartTime != "" {
		if t, err := time.Parse(time.RFC3339, req.StartTime); err == nil {
			start = t
		}
	}
	if req.EndTime != "" {
		if t, err := time.Parse(time.RFC3339, req.EndTime); err == nil {
			endTime = t
		}
	}

	filter := &storage.EventFilter{
		StartTime: &start,
		EndTime:   &endTime,
		Limit:     50000,
	}

	events, _, err := h.db.ListEvents(filter)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: "failed to fetch events"})
		return
	}

	if len(events) < 10 {
		c.JSON(http.StatusOK, UEBAResult{
			Type:            "ueba_analysis",
			Anomalies:       []*ueba.AnomalyResult{},
			TotalAnomaly:    0,
			HighRiskCount:   0,
			MediumRiskCount: 0,
			Duration:        time.Since(startTime).String(),
		})
		return
	}

	h.engine.Learn(events)

	anomalies := h.engine.DetectAnomalies(events)

	highCount := 0
	mediumCount := 0
	for _, a := range anomalies {
		if a.Severity == "high" {
			highCount++
		} else if a.Severity == "medium" {
			mediumCount++
		}
	}

	c.JSON(http.StatusOK, UEBAResult{
		Type:            "ueba_analysis",
		Anomalies:       anomalies,
		TotalAnomaly:    len(anomalies),
		HighRiskCount:   highCount,
		MediumRiskCount: mediumCount,
		Duration:        time.Since(startTime).String(),
	})
}

func (h *UEBAHandler) GetProfiles(c *gin.Context) {
	profiles := h.engine.GetUserActivity()

	profileList := make([]map[string]interface{}, 0)
	for user, baseline := range profiles {
		profileList = append(profileList, map[string]interface{}{
			"user":               user,
			"login_count":        baseline.LoginCount,
			"last_updated":       baseline.LastUpdated,
			"avg_events_per_day": baseline.AvgEventsPerDay,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"profiles": profileList,
		"total":    len(profileList),
	})
}

func (h *UEBAHandler) GetAnomalyDetails(c *gin.Context) {
	anomalyType := c.Param("type")

	c.JSON(http.StatusOK, gin.H{
		"type":        anomalyType,
		"description": getAnomalyDescription(anomalyType),
	})
}

func (h *UEBAHandler) GetBaseline(c *gin.Context) {
	profiles := h.engine.GetUserActivity()

	profileList := make([]map[string]interface{}, 0)
	for user, baseline := range profiles {
		typicalHours := make([]int, 0)
		for hour := range baseline.TypicalHours {
			typicalHours = append(typicalHours, hour)
		}

		typicalComputers := make([]string, 0)
		for computer := range baseline.TypicalComputers {
			typicalComputers = append(typicalComputers, computer)
		}

		profileList = append(profileList, map[string]interface{}{
			"user":               user,
			"login_count":        baseline.LoginCount,
			"last_updated":       baseline.LastUpdated,
			"avg_events_per_day": baseline.AvgEventsPerDay,
			"typical_hours":      typicalHours,
			"typical_computers":  typicalComputers,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"baseline": profileList,
		"total":    len(profileList),
	})
}

func (h *UEBAHandler) LearnBaseline(c *gin.Context) {
	var req UEBARequest
	if err := c.ShouldBindJSON(&req); err != nil {
		req = UEBARequest{}
	}

	hours := req.Hours
	if hours <= 0 {
		hours = 168
	}

	endTime := time.Now()
	start := endTime.Add(-time.Duration(hours) * time.Hour)

	if req.StartTime != "" {
		if t, err := time.Parse(time.RFC3339, req.StartTime); err == nil {
			start = t
		}
	}
	if req.EndTime != "" {
		if t, err := time.Parse(time.RFC3339, req.EndTime); err == nil {
			endTime = t
		}
	}

	filter := &storage.EventFilter{
		StartTime: &start,
		EndTime:   &endTime,
		Limit:     100000,
	}

	events, _, err := h.db.ListEvents(filter)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: "failed to fetch events"})
		return
	}

	if len(events) < 10 {
		c.JSON(http.StatusBadRequest, ErrorResponse{Error: "insufficient events for baseline learning (minimum 10)"})
		return
	}

	if err := h.engine.Learn(events); err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: "failed to learn baseline"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message":   "baseline learned successfully",
		"events":    len(events),
		"time_span": time.Since(start).String(),
	})
}

func (h *UEBAHandler) ClearBaseline(c *gin.Context) {
	h.engine.Clear()
	c.JSON(http.StatusOK, gin.H{
		"message": "baseline cleared successfully",
	})
}

func getAnomalyDescription(anomalyType string) string {
	descriptions := map[string]string{
		"impossible_travel":    "Detects when a user logs in from two geographically distant locations in an impossibly short time period",
		"abnormal_behavior":    "Detects deviations from a user's established behavioral patterns",
		"abnormal_hours":       "Detects activity outside typical working hours",
		"unusual_hours":        "Detects significant activity during unusual hours",
		"new_location":         "Detects logins from new or unfamiliar locations",
		"privilege_escalation": "Detects unusual privilege assignment events",
		"brute_force":          "Detects potential brute force attack patterns",
		"data_exfiltration":    "Detects potential data exfiltration activity",
	}

	if desc, ok := descriptions[anomalyType]; ok {
		return desc
	}
	return "Unknown anomaly type"
}

func SetupUEBARoutes(r *gin.Engine, uebaHandler *UEBAHandler) {
	ueba := r.Group("/api/ueba")
	{
		ueba.POST("/analyze", uebaHandler.Analyze)
		ueba.GET("/profiles", uebaHandler.GetProfiles)
		ueba.GET("/anomaly/:type", uebaHandler.GetAnomalyDetails)
		ueba.GET("/baseline", uebaHandler.GetBaseline)
		ueba.POST("/baseline/learn", uebaHandler.LearnBaseline)
		ueba.DELETE("/baseline", uebaHandler.ClearBaseline)
	}
}
