package api

import (
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/analyzers"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type AnalyzeHandler struct {
	db      *storage.DB
	manager *analyzers.AnalyzerManager
}

type AnalyzeRequest struct {
	Type      string `json:"type"`
	StartTime string `json:"start_time"`
	EndTime   string `json:"end_time"`
	Hours     int    `json:"hours"`
	Limit     int    `json:"limit"`
	Offset    int    `json:"offset"`
}

type AnalyzeFinding struct {
	Description string                 `json:"description"`
	Severity    string                 `json:"severity"`
	Score       float64                `json:"score"`
	RuleName    string                 `json:"rule_name,omitempty"`
	MitreAttack []string               `json:"mitre_attack,omitempty"`
	Metadata    map[string]interface{} `json:"metadata,omitempty"`
	Evidence    []EvidenceItem         `json:"evidence,omitempty"`
}

type EvidenceItem struct {
	EventID   int32  `json:"event_id"`
	Timestamp string `json:"timestamp"`
	User      string `json:"user"`
	Computer  string `json:"computer"`
	Message   string `json:"message"`
}

type Pagination struct {
	Limit  int   `json:"limit"`
	Offset int   `json:"offset"`
	Total  int64 `json:"total"`
}

type AnalyzeResult struct {
	Type       string           `json:"type"`
	Severity   string           `json:"severity"`
	Score      float64          `json:"score"`
	Summary    string           `json:"summary"`
	Findings   []AnalyzeFinding `json:"findings"`
	Timestamp  int64            `json:"timestamp"`
	Pagination *Pagination      `json:"pagination,omitempty"`
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

	analyzerType = strings.ReplaceAll(analyzerType, "-", "_")

	if h.manager == nil {
		c.JSON(http.StatusServiceUnavailable, ErrorResponse{
			Error: "analyzer manager not initialized",
			Code:  types.ErrCodeInternalError,
		})
		return
	}

	analyzer, ok := h.manager.Get(analyzerType)
	if !ok {
		c.JSON(http.StatusNotFound, ErrorResponse{
			Error: "analyzer not found: " + analyzerType,
			Code:  types.ErrCodeInvalidRequest,
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

	limit := req.Limit
	if limit <= 0 || limit > 100000 {
		limit = 10000
	}
	offset := req.Offset
	if offset < 0 {
		offset = 0
	}

	filter := &storage.EventFilter{
		Limit:  limit,
		Offset: offset,
	}

	if req.StartTime != "" || req.EndTime != "" {
		timeInput := req.StartTime
		if req.EndTime != "" {
			timeInput = req.StartTime + "," + req.EndTime
		}
		if tf, err := types.ParseTimeFilter(timeInput); err == nil && tf != nil {
			filter.StartTime = &tf.Start
			filter.EndTime = &tf.End
		}
	} else if hours > 0 {
		startTime := time.Now().Add(-time.Duration(hours) * time.Hour)
		filter.StartTime = &startTime
		endTime := time.Now()
		filter.EndTime = &endTime
	}

	events, total, err := h.db.ListEvents(filter)
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
		Pagination: &Pagination{
			Limit:  limit,
			Offset: offset,
			Total:  total,
		},
	}

	for i, f := range result.Findings {
		var mitre []string
		if f.MitreAttack != "" {
			mitre = []string{f.MitreAttack}
		}
		evidence := make([]EvidenceItem, 0)
		for _, e := range f.Evidence {
			evidence = append(evidence, EvidenceItem{
				EventID:   e.EventID,
				Timestamp: e.Timestamp,
				User:      e.User,
				Computer:  e.Computer,
				Message:   e.Message,
			})
		}
		response.Findings[i] = AnalyzeFinding{
			Description: f.Description,
			Severity:    f.Severity,
			Score:       f.Score,
			RuleName:    f.RuleName,
			MitreAttack: mitre,
			Metadata:    f.Metadata,
			Evidence:    evidence,
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
			Code:  types.ErrCodeInvalidRequest,
		})
		return
	}

	analyzer, ok := h.manager.Get(analyzerType)
	if !ok {
		c.JSON(http.StatusNotFound, ErrorResponse{
			Error: "analyzer not found: " + analyzerType,
			Code:  types.ErrCodeInvalidRequest,
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
