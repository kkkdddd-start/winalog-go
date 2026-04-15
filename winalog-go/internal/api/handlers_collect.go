package api

import (
	"context"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/collectors"
	"github.com/kkkdddd-start/winalog-go/internal/engine"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type CollectHandler struct {
	db *storage.DB
}

func SetupCollectRoutes(r *gin.Engine, collectHandler *CollectHandler) {
	collect := r.Group("/api/collect")
	{
		collect.POST("", collectHandler.StartCollect)
		collect.POST("/import", collectHandler.ImportLogs)
		collect.GET("/status", collectHandler.GetCollectStatus)
	}
}

type LogCollectResponse struct {
	Status     string `json:"status"`
	Message    string `json:"message"`
	OutputPath string `json:"output_path,omitempty"`
	EventCount int    `json:"event_count,omitempty"`
	Hash       string `json:"hash,omitempty"`
	Duration   string `json:"duration,omitempty"`
}

type LogImportRequest struct {
	FilePaths []string `json:"file_paths" binding:"required"`
}

type CollectStatus struct {
	Status     string `json:"status"`
	Progress   int    `json:"progress"`
	Message    string `json:"message"`
	OutputPath string `json:"output_path,omitempty"`
	FilesCount int    `json:"files_count,omitempty"`
	Duration   string `json:"duration,omitempty"`
}

func NewCollectHandler(db *storage.DB) *CollectHandler {
	return &CollectHandler{db: db}
}

func (h *CollectHandler) StartCollect(c *gin.Context) {
	var req LogCollectRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "invalid request: " + err.Error(),
		})
		return
	}

	opts := collectors.CollectOptions{
		OutputPath: "winalog_collect_" + time.Now().Format("20060102_150405") + ".zip",
		Workers:    4,
		Compress:   true,
	}

	if req.Options.Compress {
		opts.Compress = true
	}
	if req.Options.CalculateHash {
		opts.CalculateHash = true
	}

	ctx := context.Background()
	result, err := collectors.RunOneClickCollection(ctx, opts)

	if err != nil {
		c.JSON(http.StatusOK, LogCollectResponse{
			Status:  "error",
			Message: err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, LogCollectResponse{
		Status:     "completed",
		Message:    "Collection completed successfully",
		OutputPath: result.OutputPath,
		Duration:   result.Duration.String(),
	})
}

func (h *CollectHandler) ImportLogs(c *gin.Context) {
	var req LogImportRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "invalid request: " + err.Error(),
		})
		return
	}

	if len(req.FilePaths) == 0 {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "no file paths provided",
		})
		return
	}

	eng := engine.NewEngine(h.db)

	importReq := &engine.ImportRequest{
		Paths:     req.FilePaths,
		BatchSize: 1000,
	}

	ctx := context.Background()
	result, err := eng.Import(ctx, importReq, nil)

	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"status":   "error",
			"message":  err.Error(),
			"imported": 0,
			"failed":   len(req.FilePaths),
			"total":    len(req.FilePaths),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":       "completed",
		"message":      "Import completed successfully",
		"imported":     result.FilesImported,
		"failed":       result.FilesFailed,
		"total_events": result.EventsImported,
		"duration":     result.Duration.String(),
		"errors":       result.Errors,
	})
}
