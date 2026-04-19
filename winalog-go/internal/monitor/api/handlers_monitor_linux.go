//go:build !windows

package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/monitor"
)

type MonitorHandler struct {
	engine interface {
		Start() error
		Stop() error
		UpdateConfig(req *monitor.MonitorConfigRequest) error
		GetStats() *monitor.MonitorStats
		GetEvents(filter *monitor.EventFilter) ([]*monitor.MonitorEvent, int64)
		Subscribe(ch chan *monitor.MonitorEvent) func()
		IsRunning() bool
	}
}

func NewMonitorHandler(engine *monitor.MonitorEngine) *MonitorHandler {
	return &MonitorHandler{}
}

func (h *MonitorHandler) GetStats(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"stats": &monitor.MonitorStats{
			IsRunning: false,
		},
	})
}

func (h *MonitorHandler) ListEvents(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"events": []*monitor.MonitorEvent{},
		"total":  0,
		"limit":  50,
		"offset": 0,
	})
}

func (h *MonitorHandler) UpdateConfig(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Monitor not available on this platform",
	})
}

func (h *MonitorHandler) StartStop(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Monitor not available on this platform",
	})
}

func (h *MonitorHandler) StreamEvents(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"events": []*monitor.MonitorEvent{},
	})
}

func SetupMonitorRoutes(r *gin.Engine, h *MonitorHandler) {
	monitorGroup := r.Group("/api/monitor")
	{
		monitorGroup.GET("/stats", h.GetStats)
		monitorGroup.GET("/events", h.ListEvents)
		monitorGroup.POST("/config", h.UpdateConfig)
		monitorGroup.POST("/action", h.StartStop)
		monitorGroup.GET("/events/stream", h.StreamEvents)
	}
}
