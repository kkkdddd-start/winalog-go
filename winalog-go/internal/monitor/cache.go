package monitor

import (
	"sync"

	"github.com/kkkdddd-start/winalog-go/internal/monitor/types"
)

const DefaultMaxCacheSize = 10000

type EventCache struct {
	mu      sync.RWMutex
	events  []*types.MonitorEvent
	maxSize int
	stats   *CacheStats
}

type CacheStats struct {
	TotalAdded   uint64
	TotalDropped uint64
}

func NewEventCache(maxSize int) *EventCache {
	if maxSize <= 0 {
		maxSize = DefaultMaxCacheSize
	}
	return &EventCache{
		events:  make([]*types.MonitorEvent, 0, maxSize),
		maxSize: maxSize,
		stats:   &CacheStats{},
	}
}

func (c *EventCache) Add(event *types.MonitorEvent) {
	c.mu.Lock()
	defer c.mu.Unlock()

	if event == nil {
		return
	}

	if len(c.events) >= c.maxSize {
		c.events = c.events[1:]
		c.stats.TotalDropped++
	}

	c.events = append(c.events, event)
	c.stats.TotalAdded++
}

func (c *EventCache) Get(filter *EventFilter) ([]*types.MonitorEvent, int64) {
	c.mu.RLock()
	defer c.mu.RUnlock()

	var result []*types.MonitorEvent

	for _, e := range c.events {
		if filter != nil {
			if filter.Type != "" && e.Type != filter.Type {
				continue
			}
			if filter.Severity != "" && e.Severity != filter.Severity {
				continue
			}
			if !filter.StartTime.IsZero() && e.Timestamp.Before(filter.StartTime) {
				continue
			}
			if !filter.EndTime.IsZero() && e.Timestamp.After(filter.EndTime) {
				continue
			}
		}
		result = append(result, e)
	}

	total := int64(len(result))

	offset := 0
	limit := 0
	if filter != nil {
		if filter.Offset > 0 {
			offset = filter.Offset
			if offset > len(result) {
				offset = len(result)
			}
		}
		if filter.Limit > 0 {
			limit = filter.Limit
		}
	}

	if result == nil {
		result = make([]*types.MonitorEvent, 0)
	}

	if offset >= len(result) {
		return result, total
	}

	if limit <= 0 || offset+limit > len(result) {
		limit = len(result) - offset
	}

	return result[offset : offset+limit], total
}

func (c *EventCache) GetAll() []*types.MonitorEvent {
	c.mu.RLock()
	defer c.mu.RUnlock()
	result := make([]*types.MonitorEvent, len(c.events))
	copy(result, c.events)
	return result
}

func (c *EventCache) Clear() {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.events = make([]*types.MonitorEvent, 0, c.maxSize)
}

func (c *EventCache) Size() int {
	c.mu.RLock()
	defer c.mu.RUnlock()
	return len(c.events)
}

func (c *EventCache) GetStats() *CacheStats {
	c.mu.RLock()
	defer c.mu.RUnlock()
	return &CacheStats{
		TotalAdded:   c.stats.TotalAdded,
		TotalDropped: c.stats.TotalDropped,
	}
}
