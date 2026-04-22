package api

import (
	"context"
	"fmt"
	"log"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type LiveHandler struct {
	db             *storage.DB
	startTime      time.Time
	eventCount     int64
	lastCount      int64
	mu             sync.RWMutex
	lastImportTime time.Time
}

type LiveEventMessage struct {
	Type string      `json:"type"`
	Data interface{} `json:"data"`
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

func (h *LiveHandler) StreamEventsSSE(c *gin.Context) {
	c.Header("Content-Type", "text/event-stream")
	c.Header("Cache-Control", "no-cache")
	c.Header("Connection", "keep-alive")
	c.Header("X-Accel-Buffering", "no")

	clientIP := c.ClientIP()
	clientGone := c.Request.Context().Done()

	h.mu.Lock()
	h.lastImportTime = time.Now().Add(-24 * time.Hour)
	h.mu.Unlock()

	log.Printf("[INFO] [SSE] Live events stream connected from %s", clientIP)

	c.SSEvent("connected", map[string]interface{}{
		"type":      "connected",
		"message":   "Connected to live event stream",
		"time":      time.Now().Format(time.RFC3339),
		"stream_id": fmt.Sprintf("live-%d", time.Now().Unix()),
	})
	c.Writer.Flush()

	pollInterval := 2 * time.Second
	ticker := time.NewTicker(pollInterval)
	defer ticker.Stop()

	eventCount := 0
	statsCount := 0
	lastEventCount := 0
	tickCount := 0

	for {
		select {
		case <-ticker.C:
			tickCount++
			if h.db != nil {
				h.mu.RLock()
				lastImport := h.lastImportTime
				h.mu.RUnlock()

				queryCtx, queryCancel := context.WithTimeout(context.Background(), 5*time.Second)
				filter := &storage.EventFilter{
					Limit:     100,
					StartTime: &lastImport,
				}
				events, _, err := h.db.ListEventsWithContext(queryCtx, filter)
				queryCancel()
				if err != nil {
					log.Printf("[ERROR] [SSE] Live ListEvents failed: %v", err)
				} else if len(events) > 0 {
					for _, event := range events {
						msg := LiveEventMessage{
							Type: "event",
							Data: formatLiveEvent(event),
						}
						c.SSEvent("event", msg)
						eventCount++
					}
					h.mu.Lock()
					h.lastImportTime = events[len(events)-1].ImportTime
					h.mu.Unlock()
					log.Printf("[DEBUG] [SSE] Live sent %d events to %s (total=%d)", len(events), clientIP, eventCount)
				}

				stats, err := h.db.GetStats()
				if err != nil {
					log.Printf("[ERROR] [SSE] Live GetStats failed: %v", err)
				} else {
					c.SSEvent("stats", map[string]interface{}{
						"total_events": stats.EventCount,
						"alerts":       stats.AlertCount,
						"events_new":   eventCount - lastEventCount,
						"timestamp":    time.Now().Format(time.RFC3339),
					})
					statsCount++
					lastEventCount = eventCount
				}
			}
			if _, err := c.Writer.Write([]byte{}); err != nil {
				log.Printf("[WARN] [SSE] Live write failed, closing stream: %v", err)
				return
			}
			c.Writer.Flush()

			if tickCount%30 == 0 {
				log.Printf("[INFO] [SSE] Live stream stats: events=%d, stats_sent=%d, uptime_ticks=%d", eventCount, statsCount, tickCount)
			}
		case <-clientGone:
			log.Printf("[INFO] [SSE] Live events stream disconnected from %s: events=%d, stats=%d, duration=%s",
				clientIP, eventCount, statsCount, pollInterval*time.Duration(tickCount))
			return
		}
	}
}

func formatLiveEvent(event *types.Event) map[string]interface{} {
	return map[string]interface{}{
		"id":         event.ID,
		"timestamp":  event.Timestamp,
		"event_id":   event.EventID,
		"level":      event.Level,
		"source":     event.Source,
		"log_name":   event.LogName,
		"computer":   event.Computer,
		"user":       event.User,
		"message":    event.Message,
		"ip_address": event.IPAddress,
	}
}

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
		Alerts:       alertCount,
		Uptime:       duration(uptime),
		Timestamp:    time.Now(),
	}

	c.JSON(200, stats)
}
