package api

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/observability"
)

type LogsHandler struct{}

func NewLogsHandler() *LogsHandler {
	return &LogsHandler{}
}

func (h *LogsHandler) GetLogs(c *gin.Context) {
	offsetStr := c.DefaultQuery("offset", "0")
	limitStr := c.DefaultQuery("limit", "100")

	offset, _ := strconv.Atoi(offsetStr)
	limit, _ := strconv.Atoi(limitStr)

	if limit <= 0 || limit > 1000 {
		limit = 100
	}
	if offset < 0 {
		offset = 0
	}

	metricsLogger := observability.GetMetricsLogger()
	entries, total, err := metricsLogger.ReadLines(offset, limit)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"entries": entries,
		"total":   total,
		"offset":  offset,
		"limit":   limit,
	})
}

func (h *LogsHandler) GetLogFiles(c *gin.Context) {
	metricsLogger := observability.GetMetricsLogger()
	files := metricsLogger.GetLogFiles()

	c.JSON(http.StatusOK, gin.H{
		"files": files,
		"count": len(files),
	})
}

func (h *LogsHandler) GetLogFileContent(c *gin.Context) {
	filename := c.Param("filename")
	if filename == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "filename is required"})
		return
	}

	metricsLogger := observability.GetMetricsLogger()
	files := metricsLogger.GetLogFiles()

	var targetPath string
	for _, f := range files {
		if f.Name == filename {
			targetPath = f.Path
			break
		}
	}

	if targetPath == "" {
		c.JSON(http.StatusNotFound, gin.H{"error": "log file not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"path": targetPath,
	})
}

func SetupLogsRoutes(r *gin.Engine, logsHandler *LogsHandler) {
	logs := r.Group("/api/logs")
	{
		logs.GET("", logsHandler.GetLogs)
		logs.GET("/files", logsHandler.GetLogFiles)
		logs.GET("/files/:filename", logsHandler.GetLogFileContent)
	}
}
