package api

import (
	"context"
	"fmt"
	"net/http"
	"runtime"

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

type LogCollectRequest struct {
	Options LogCollectOptions `json:"options"`
}

type LogCollectOptions struct {
	Workers           int    `json:"workers"`
	IncludePrefetch   bool   `json:"include_prefetch"`
	IncludeRegistry   bool   `json:"include_registry"`
	IncludeSystemInfo bool   `json:"include_system_info"`
	Compress          bool   `json:"compress"`
	CalculateHash     bool   `json:"calculate_hash"`
	OutputPath        string `json:"output_path"`
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
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusOK, LogCollectResponse{
			Status:  "error",
			Message: "collection is only supported on Windows. This server is running in Linux server mode.",
		})
		return
	}

	var req LogCollectRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		req = LogCollectRequest{}
	}

	opts := collectors.CollectOptions{
		Workers:           4,
		IncludeSystemInfo: true,
		Compress:          true,
		CalculateHash:     true,
	}

	if req.Options.Workers > 0 {
		opts.Workers = req.Options.Workers
	}
	opts.IncludePrefetch = req.Options.IncludePrefetch
	opts.IncludeRegistry = req.Options.IncludeRegistry
	opts.IncludeSystemInfo = req.Options.IncludeSystemInfo
	opts.Compress = req.Options.Compress
	opts.CalculateHash = req.Options.CalculateHash
	if req.Options.OutputPath != "" {
		opts.OutputPath = req.Options.OutputPath
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

	oneClickResult, ok := result.(*collectors.OneClickResult)
	if !ok {
		c.JSON(http.StatusOK, LogCollectResponse{
			Status:  "error",
			Message: "invalid result type",
		})
		return
	}

	c.JSON(http.StatusOK, LogCollectResponse{
		Status:     "completed",
		Message:    "Collection completed successfully",
		OutputPath: oneClickResult.OutputPath,
		Duration:   fmt.Sprintf("%v", oneClickResult.Duration),
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

func (h *CollectHandler) GetCollectStatus(c *gin.Context) {
	c.JSON(http.StatusOK, CollectStatus{
		Status:   "idle",
		Progress: 100,
		Message:  "Collection service is ready",
	})
}
