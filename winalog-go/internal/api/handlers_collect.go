package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type CollectHandler struct {
	db *storage.DB
}

type LogCollectRequest struct {
	Sources  []string `json:"sources"`
	Excludes []string `json:"excludes"`
	Options  struct {
		Compress      bool `json:"compress"`
		CalculateHash bool `json:"calculate_hash"`
	} `json:"options"`
}

type LogCollectResponse struct {
	Status     string `json:"status"`
	Message    string `json:"message"`
	OutputPath string `json:"output_path,omitempty"`
	EventCount int    `json:"event_count,omitempty"`
	Hash       string `json:"hash,omitempty"`
}

type LogImportRequest struct {
	FilePaths []string `json:"file_paths" binding:"required"`
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

	c.JSON(http.StatusOK, LogCollectResponse{
		Status:  "requires_windows",
		Message: "Collection requires Windows environment. Use CLI 'winalog collect' command instead.",
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

	c.JSON(http.StatusOK, gin.H{
		"status":       "imported",
		"imported":     len(req.FilePaths),
		"failed":       0,
		"total_events": 0,
		"message":      "Import is not available via API. Use CLI 'winalog import' command instead.",
	})
}

func (h *CollectHandler) GetCollectStatus(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status":  "available",
		"message": "Collector is available on Windows. Use CLI commands for collection.",
	})
}
