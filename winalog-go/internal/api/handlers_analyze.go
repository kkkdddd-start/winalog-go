package api

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/analyzers"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type AnalyzeHandler struct {
	db      *storage.DB
	manager *analyzers.AnalyzerManager
}

type AnalyzeRequest struct {
	Type      string `json:"type" binding:"required"`
	StartTime string `json:"start_time"`
	EndTime   string `json:"end_time"`
	Hours     int    `json:"hours"`
}

type AnalyzeFinding struct {
	Description string                 `json:"description"`
	Severity    string                 `json:"severity"`
	Score       float64                `json:"score"`
	RuleName    string                 `json:"rule_name,omitempty"`
	MitreAttack []string               `json:"mitre_attack,omitempty"`
	Metadata    map[string]interface{} `json:"metadata,omitempty"`
}

type AnalyzeResult struct {
	Type      string           `json:"type"`
	Severity  string           `json:"severity"`
	Score     float64          `json:"score"`
	Summary   string           `json:"summary"`
	Findings  []AnalyzeFinding `json:"findings"`
	Timestamp int64            `json:"timestamp"`
}

func NewAnalyzeHandler(db *storage.DB, manager *analyzers.AnalyzerManager) *AnalyzeHandler {
	return &AnalyzeHandler{
		db:      db,
		manager: manager,
	}
}

func (h *AnalyzeHandler) RunAnalysis(c *gin.Context) {
	analyzerType := c.Param("type")
	if analyzerType == "" {
		analyzerType = c.DefaultQuery("type", "brute-force")
	}

	if h.manager == nil {
		c.JSON(http.StatusServiceUnavailable, ErrorResponse{
			Error: "analyzer manager not initialized",
			Code:  ErrCodeInternal,
		})
		return
	}

	analyzer, ok := h.manager.Get(analyzerType)
	if !ok {
		c.JSON(http.StatusNotFound, ErrorResponse{
			Error: "analyzer not found: " + analyzerType,
			Code:  ErrCodeInvalidRequest,
		})
		return
	}

	var req AnalyzeRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		req = AnalyzeRequest{Type: analyzerType}
	}

	hours := req.Hours
	if hours <= 0 {
		hours = 24
	}

	filter := &storage.EventFilter{
		Limit: 10000,
	}

	if hours > 0 {
		startTime := time.Now().Add(-time.Duration(hours) * time.Hour)
		filter.StartTime = &startTime
		endTime := time.Now()
		filter.EndTime = &endTime
	}

	events, _, err := h.db.ListEvents(filter)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "failed to fetch events: " + err.Error(),
		})
		return
	}

	result, err := analyzer.Analyze(events)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "analysis failed: " + err.Error(),
		})
		return
	}

	response := AnalyzeResult{
		Type:      result.Type,
		Severity:  result.Severity,
		Score:     result.Score,
		Summary:   result.Summary,
		Findings:  make([]AnalyzeFinding, len(result.Findings)),
		Timestamp: result.Timestamp,
	}

	for i, f := range result.Findings {
		var mitre []string
		if f.MitreAttack != "" {
			mitre = []string{f.MitreAttack}
		}
		response.Findings[i] = AnalyzeFinding{
			Description: f.Description,
			Severity:    f.Severity,
			Score:       f.Score,
			RuleName:    f.RuleName,
			MitreAttack: mitre,
			Metadata:    f.Metadata,
		}
	}

	c.JSON(http.StatusOK, response)
}

func (h *AnalyzeHandler) ListAnalyzers(c *gin.Context) {
	if h.manager == nil {
		c.JSON(http.StatusOK, gin.H{
			"analyzers": []string{},
		})
		return
	}
	analyzerList := h.manager.List()
	c.JSON(http.StatusOK, gin.H{
		"analyzers": analyzerList,
	})
}

func (h *AnalyzeHandler) GetAnalyzerInfo(c *gin.Context) {
	analyzerType := c.Param("type")

	if h.manager == nil {
		c.JSON(http.StatusNotFound, ErrorResponse{
			Error: "analyzer not found: " + analyzerType,
			Code:  ErrCodeInvalidRequest,
		})
		return
	}

	analyzer, ok := h.manager.Get(analyzerType)
	if !ok {
		c.JSON(http.StatusNotFound, ErrorResponse{
			Error: "analyzer not found: " + analyzerType,
			Code:  ErrCodeInvalidRequest,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"type":      analyzer.Name(),
		"available": true,
	})
}

func SetupAnalyzeRoutes(r *gin.Engine, analyzeHandler *AnalyzeHandler) {
	analyze := r.Group("/api/analyze")
	{
		analyze.POST("/:type", analyzeHandler.RunAnalysis)
	}

	analyzers := r.Group("/api/analyzers")
	{
		analyzers.GET("", analyzeHandler.ListAnalyzers)
		analyzers.GET("/:type", analyzeHandler.GetAnalyzerInfo)
	}
}
