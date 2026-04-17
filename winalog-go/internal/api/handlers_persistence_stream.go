//go:build windows

package api

import (
	"context"
	"fmt"
	"net/http"
	"runtime"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/persistence"
)

func (h *PersistenceHandler) DetectStream(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.SSEvent("error", map[string]interface{}{
			"message": "Persistence detection is only available on Windows",
		})
		return
	}

	var req DetectRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		c.SSEvent("error", map[string]interface{}{
			"message": err.Error(),
		})
		return
	}

	timeoutStr := c.DefaultQuery("timeout", "5m")
	timeout, err := time.ParseDuration(timeoutStr)
	if err != nil || timeout <= 0 {
		timeout = defaultDetectTimeout
	}
	if timeout > 10*time.Minute {
		timeout = 10 * time.Minute
	}

	c.Header("Content-Type", "text/event-stream")
	c.Header("Cache-Control", "no-cache")
	c.Header("Connection", "keep-alive")
	c.Header("X-Accel-Buffering", "no")

	clientGone := c.Request.Context().Done()

	ctx, cancel := context.WithTimeout(context.Background(), timeout)
	defer cancel()

	progressChan := make(chan string, 10)
	doneChan := make(chan *persistence.DetectionResult, 1)

	go func() {
		result := persistence.RunAllDetectorsWithProgress(ctx, progressChan)
		doneChan <- result
	}()

	c.SSEvent("started", map[string]interface{}{
		"message": "Detection started",
		"timeout": timeout.String(),
	})
	c.Writer.Flush()

	for {
		select {
		case progress, ok := <-progressChan:
			if !ok {
				continue
			}
			if progress == "complete" {
				c.SSEvent("complete", map[string]interface{}{
					"message": "Detection completed",
				})
			} else {
				c.SSEvent("progress", map[string]interface{}{
					"status": progress,
				})
			}
			c.Writer.Flush()
		case result, ok := <-doneChan:
			if ok {
				c.SSEvent("result", map[string]interface{}{
					"detections":  result.Detections,
					"summary":     result.Summary(),
					"duration":    result.Duration.String(),
					"total_count": result.TotalCount,
					"error_count": result.ErrorCount,
				})
				c.Writer.Flush()
			}
			return
		case <-clientGone:
			cancel()
			c.SSEvent("cancelled", map[string]interface{}{
				"message": "Detection cancelled by client",
			})
			c.Writer.Flush()
			return
		}
	}
}

func SetupPersistenceStreamRoutes(r *gin.Engine, persistenceHandler *PersistenceHandler) {
	persistenceGroup := r.Group("/api/persistence")
	{
		persistenceGroup.GET("/detect/stream", persistenceHandler.DetectStream)
	}
}
