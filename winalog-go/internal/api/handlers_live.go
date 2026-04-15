package api

import (
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type LiveHandler struct {
	db         *storage.DB
	startTime  time.Time
	eventCount int64
	lastCount  int64
	mu         sync.RWMutex
}

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

func NewLiveHandler(db *storage.DB) *LiveHandler {
	return &LiveHandler{
		db:        db,
		startTime: time.Now(),
	}
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
	h.mu.Lock()
	defer h.mu.Unlock()

	var totalEvents int64
	if h.db != nil {
		stats, err := h.db.GetStats()
		if err == nil {
			totalEvents = stats.EventCount
		}
	}

	uptime := time.Since(h.startTime)
	eventsPerSec := 0.0
	if uptime.Seconds() > 0 {
		eventsPerSec = float64(totalEvents-h.lastCount) / uptime.Seconds()
		if eventsPerSec < 0 {
			eventsPerSec = 0
		}
	}

	stats := &LiveStats{
		TotalEvents:  totalEvents,
		EventsPerSec: eventsPerSec,
		Uptime:       duration(uptime),
		Timestamp:    time.Now(),
	}

	c.JSON(200, stats)
}
