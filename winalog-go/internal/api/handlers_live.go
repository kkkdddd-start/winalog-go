package api

import (
	"time"

	"github.com/gin-gonic/gin"
)

type LiveHandler struct{}

type LiveEventMessage struct {
	Type string      `json:"type"`
	Data interface{} `json:"data"`
}

type LiveStats struct {
	TotalEvents  int64     `json:"total_events"`
	EventsPerSec float64   `json:"events_per_sec"`
	Uptime       duration  `json:"uptime"`
	Timestamp    time.Time `json:"timestamp"`
}

type duration time.Duration

func (d duration) MarshalJSON() ([]byte, error) {
	return []byte(`"` + time.Duration(d).String() + `"`), nil
}

func (h *LiveHandler) StreamEventsSSE(c *gin.Context) {
	c.Header("Content-Type", "text/event-stream")
	c.Header("Cache-Control", "no-cache")
	c.Header("Connection", "keep-alive")
	c.Header("X-Accel-Buffering", "no")

	clientGone := c.Request.Context().Done()

	ticker := time.NewTicker(1 * time.Second)
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
			c.SSEvent("ping", "")
			c.Writer.Flush()
		case <-clientGone:
			return
		}
	}
}

func (h *LiveHandler) GetLiveStats(c *gin.Context) {
	stats := &LiveStats{
		TotalEvents:  0,
		EventsPerSec: 0,
		Uptime:       duration(0),
		Timestamp:    time.Now(),
	}

	c.JSON(200, stats)
}
