package api

import (
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type LiveHandler struct {
	db               *storage.DB
	startTime        time.Time
	lastCount        int64
	mu               sync.RWMutex
	lastStatsUpdate  time.Time
}

type LiveStats struct {
	TotalEvents  int64     `json:"total_events"`
	EventsPerSec float64   `json:"events_per_sec"`
	Alerts       int64     `json:"alerts"`
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

// GetLiveStats godoc
// @Summary 获取实时统计信息
// @Description 返回当前实时事件的统计数据
// @Tags live
// @Produce json
// @Success 200 {object} LiveStats
// @Router /api/live/stats [get]
func (h *LiveHandler) GetLiveStats(c *gin.Context) {
	h.mu.Lock()
	defer h.mu.Unlock()

	var totalEvents int64
	var alertCount int64
	if h.db != nil {
		stats, err := h.db.GetStats()
		if err == nil {
			totalEvents = stats.EventCount
			alertCount = stats.AlertCount
		}
	}

	now := time.Now()
	uptime := now.Sub(h.startTime)

	if h.lastStatsUpdate.IsZero() {
		h.lastStatsUpdate = now
		h.lastCount = totalEvents
	}

	elapsed := now.Sub(h.lastStatsUpdate).Seconds()
	eventsPerSec := 0.0
	if elapsed > 1 {
		eventsPerSec = float64(totalEvents-h.lastCount) / elapsed
		if eventsPerSec < 0 {
			eventsPerSec = 0
		}
		h.lastCount = totalEvents
		h.lastStatsUpdate = now
	}

	stats := &LiveStats{
		TotalEvents:  totalEvents,
		EventsPerSec: eventsPerSec,
		Alerts:       alertCount,
		Uptime:       duration(uptime),
		Timestamp:    now,
	}

	c.JSON(200, stats)
}
