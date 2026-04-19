//go:build windows

package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"time"

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
	return &MonitorHandler{
		engine: engine,
	}
}

func (h *MonitorHandler) GetStats(c *gin.Context) {
	stats := h.engine.GetStats()
	c.JSON(http.StatusOK, gin.H{
		"stats": stats,
	})
}

func (h *MonitorHandler) ListEvents(c *gin.Context) {
	filter := &monitor.EventFilter{}

	if eventType := c.Query("type"); eventType != "" {
		filter.Type = monitor.EventType(eventType)
	}

	if severity := c.Query("severity"); severity != "" {
		filter.Severity = monitor.Severity(severity)
	}

	if limitStr := c.Query("limit"); limitStr != "" {
		if limit, err := strconv.Atoi(limitStr); err == nil {
			filter.Limit = limit
		}
	} else {
		filter.Limit = 50
	}

	if offsetStr := c.Query("offset"); offsetStr != "" {
		if offset, err := strconv.Atoi(offsetStr); err == nil {
			filter.Offset = offset
		}
	}

	if startTimeStr := c.Query("start_time"); startTimeStr != "" {
		if startTime, err := time.Parse(time.RFC3339, startTimeStr); err == nil {
			filter.StartTime = startTime
		}
	}

	if endTimeStr := c.Query("end_time"); endTimeStr != "" {
		if endTime, err := time.Parse(time.RFC3339, endTimeStr); err == nil {
			filter.EndTime = endTime
		}
	}

	events, total := h.engine.GetEvents(filter)

	c.JSON(http.StatusOK, gin.H{
		"events": events,
		"total":  total,
		"limit":  filter.Limit,
		"offset": filter.Offset,
	})
}

func (h *MonitorHandler) UpdateConfig(c *gin.Context) {
	var req monitor.MonitorConfigRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.engine.UpdateConfig(&req); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	stats := h.engine.GetStats()
	c.JSON(http.StatusOK, gin.H{
		"message": "Configuration updated successfully",
		"stats":   stats,
	})
}

func (h *MonitorHandler) StartStop(c *gin.Context) {
	var req struct {
		Action string `json:"action"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var err error
	if req.Action == "start" {
		err = h.engine.Start()
	} else if req.Action == "stop" {
		err = h.engine.Stop()
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid action. Use 'start' or 'stop'"})
		return
	}

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	stats := h.engine.GetStats()
	c.JSON(http.StatusOK, gin.H{
		"message": fmt.Sprintf("Monitor %s successfully", req.Action),
		"stats":   stats,
	})
}

func (h *MonitorHandler) StreamEvents(c *gin.Context) {
	c.Header("Content-Type", "text/event-stream")
	c.Header("Cache-Control", "no-cache")
	c.Header("Connection", "keep-alive")
	c.Header("Access-Control-Allow-Origin", "*")

	eventChan := make(chan *monitor.MonitorEvent, 100)
	unsubscribe := h.engine.Subscribe(eventChan)
	defer unsubscribe()

	clientGone := c.Request.Context().Done()

	for {
		select {
		case <-clientGone:
			return
		case event := <-eventChan:
			data, err := json.Marshal(event)
			if err != nil {
				continue
			}
			fmt.Fprintf(c.Writer, "data: %s\n\n", data)
			c.Writer.Flush()
		}
	}
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
