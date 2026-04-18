package api

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type DashboardHandler struct {
	db *storage.DB
}

type CollectionStatsResponse struct {
	TotalEvents int64            `json:"total_events"`
	TotalSize   string           `json:"total_size"`
	Sources     map[string]int64 `json:"sources"`
	LastImport  string           `json:"last_import"`
}

func NewDashboardHandler(db *storage.DB) *DashboardHandler {
	return &DashboardHandler{db: db}
}

func (h *DashboardHandler) GetLogNames(c *gin.Context) {
	rows, err := h.db.Query(`
		SELECT DISTINCT log_name
		FROM events
		ORDER BY log_name ASC
	`)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}
	defer rows.Close()

	var logNames []string
	for rows.Next() {
		var logName string
		if err := rows.Scan(&logName); err == nil {
			logNames = append(logNames, logName)
		}
	}

	c.JSON(http.StatusOK, gin.H{"log_names": logNames})
}

func (h *DashboardHandler) GetCollectionStats(c *gin.Context) {
	stats, err := h.db.GetStats()
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}

	sources := make(map[string]int64)
	rows, err := h.db.Query(`
		SELECT log_name, COUNT(*) as count 
		FROM events 
		GROUP BY log_name 
		ORDER BY count DESC
		LIMIT 10
	`)
	if err == nil {
		defer rows.Close()
		for rows.Next() {
			var logName string
			var count int64
			if err := rows.Scan(&logName, &count); err == nil {
				sources[logName] = count
			}
		}
	}

	var lastImport string
	row := h.db.QueryRow(`
		SELECT import_time FROM import_log 
		WHERE status = 'success' 
		ORDER BY import_time DESC LIMIT 1
	`)
	var importTime interface{}
	if err := row.Scan(&importTime); err == nil {
		if t, ok := importTime.(string); ok {
			lastImport = t
		}
	}

	totalSize := formatBytes(stats.DatabaseSize)

	c.JSON(http.StatusOK, CollectionStatsResponse{
		TotalEvents: stats.EventCount,
		TotalSize:   totalSize,
		Sources:     sources,
		LastImport:  lastImport,
	})
}

func formatBytes(bytes int64) string {
	const unit = 1024
	if bytes < unit {
		return "< 1 KB"
	}

	exp := 0
	size := float64(bytes)
	for size >= unit {
		size /= unit
		exp++
	}

	if exp >= len("KMGTPE") {
		return "> 1 PB"
	}

	return fmt.Sprintf("%.1f%cB", size, "KMGTPE"[exp-1])
}
