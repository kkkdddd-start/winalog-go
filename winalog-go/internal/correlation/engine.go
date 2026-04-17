package correlation

import (
	"context"
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/rules"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type Engine struct {
	mu      sync.RWMutex
	events  map[int64]*types.Event
	index   *EventIndex
	matcher *Matcher
	chain   *ChainBuilder
	maxAge  time.Duration
}

type EventIndex struct {
	mu              sync.RWMutex
	byID            map[int64]*types.Event
	byTime          []*types.Event
	byEID           map[int32][]*types.Event
	maxAge          time.Duration
	lastCleanup     time.Time
	cleanupInterval time.Duration
}

func NewEventIndex(maxAge time.Duration) *EventIndex {
	return &EventIndex{
		byID:            make(map[int64]*types.Event),
		byEID:           make(map[int32][]*types.Event),
		maxAge:          maxAge,
		lastCleanup:     time.Now(),
		cleanupInterval: 5 * time.Minute,
	}
}

func (idx *EventIndex) Add(event *types.Event) {
	idx.mu.Lock()

	if time.Since(idx.lastCleanup) > idx.cleanupInterval {
		idx.lastCleanup = time.Now()
		go idx.cleanupLocked()
	}

	idx.byID[event.ID] = event
	idx.byTime = append(idx.byTime, event)
	idx.byEID[event.EventID] = append(idx.byEID[event.EventID], event)

	idx.mu.Unlock()
}

func (idx *EventIndex) cleanupLocked() {
	idx.mu.Lock()
	defer idx.mu.Unlock()

	if idx.maxAge <= 0 {
		return
	}
	cutoff := time.Now().Add(-idx.maxAge)

	splitIdx := 0
	for i, event := range idx.byTime {
		if event.Timestamp.After(cutoff) {
			break
		}
		splitIdx = i + 1
	}

	if splitIdx == 0 {
		return
	}

	oldEvents := idx.byTime[:splitIdx]
	idx.byTime = idx.byTime[splitIdx:]

	for _, event := range oldEvents {
		delete(idx.byID, event.ID)
	}
}

func (idx *EventIndex) Cleanup() {
	idx.mu.Lock()
	defer idx.mu.Unlock()

	if idx.maxAge <= 0 {
		return
	}

	cutoff := time.Now().Add(-idx.maxAge)
	if len(idx.byTime) == 0 || idx.byTime[0].Timestamp.After(cutoff) {
		return
	}

	splitIdx := 0
	for i, event := range idx.byTime {
		if event.Timestamp.After(cutoff) {
			break
		}
		splitIdx = i + 1
	}

	oldEvents := idx.byTime[:splitIdx]
	idx.byTime = idx.byTime[splitIdx:]

	for _, event := range oldEvents {
		delete(idx.byID, event.ID)
		if slice, ok := idx.byEID[event.EventID]; ok {
			newSlice := make([]*types.Event, 0, len(slice))
			for _, e := range slice {
				if e.ID != event.ID {
					newSlice = append(newSlice, e)
				}
			}
			if len(newSlice) > 0 {
				idx.byEID[event.EventID] = newSlice
			} else {
				delete(idx.byEID, event.EventID)
			}
		}
	}
}

func (idx *EventIndex) GetByID(id int64) (*types.Event, bool) {
	idx.mu.RLock()
	defer idx.mu.RUnlock()

	event, ok := idx.byID[id]
	return event, ok
}

func (idx *EventIndex) GetByEventID(eid int32) []*types.Event {
	idx.mu.RLock()
	defer idx.mu.RUnlock()

	events, ok := idx.byEID[eid]
	if !ok {
		return nil
	}

	result := make([]*types.Event, len(events))
	copy(result, events)
	return result
}

func (idx *EventIndex) GetByTimeRange(start, end time.Time) []*types.Event {
	idx.mu.RLock()
	defer idx.mu.RUnlock()

	var result []*types.Event
	for _, event := range idx.byTime {
		if event.Timestamp.After(start) && event.Timestamp.Before(end) {
			result = append(result, event)
		}
	}
	return result
}

func NewEngine(maxAge time.Duration) *Engine {
	return &Engine{
		events:  make(map[int64]*types.Event),
		index:   NewEventIndex(maxAge),
		matcher: NewMatcher(),
		chain:   NewChainBuilder(),
		maxAge:  maxAge,
	}
}

func (e *Engine) LoadEvents(events []*types.Event) {
	e.mu.Lock()
	defer e.mu.Unlock()

	for _, event := range events {
		e.events[event.ID] = event
		e.index.Add(event)
	}
}

func (e *Engine) Analyze(ctx context.Context, rules []*rules.CorrelationRule) ([]*types.CorrelationResult, error) {
	e.mu.RLock()
	defer e.mu.RUnlock()

	results := make([]*types.CorrelationResult, 0)

	for _, rule := range rules {
		select {
		case <-ctx.Done():
			return results, ctx.Err()
		default:
		}

		if !rule.Enabled {
			continue
		}

		ruleResults := e.analyzeRule(rule)
		results = append(results, ruleResults...)
	}

	return results, nil
}

func (e *Engine) analyzeRule(rule *rules.CorrelationRule) []*types.CorrelationResult {
	allResults := make([]*types.CorrelationResult, 0)
	patterns := rule.Patterns
	if len(patterns) < 2 {
		return allResults
	}

	for i, pattern := range patterns {
		events := e.index.GetByEventID(pattern.EventID)
		if events == nil {
			continue
		}

		if pattern.TimeWindow > 0 {
			events = e.filterByTimeWindow(events, pattern.TimeWindow)
		}

		if pattern.MinCount > 0 && len(events) < pattern.MinCount {
			continue
		}

		if pattern.MaxCount > 0 && len(events) > pattern.MaxCount {
			events = events[:pattern.MaxCount]
		}

		for idx := 0; idx < len(events); idx++ {
			baseEvent := events[idx]
			if baseEvent == nil {
				continue
			}

			if i == len(patterns)-1 {
				if pattern.Negate {
					continue
				}
				result := e.chain.Build(baseEvent, events[idx+1:], rule)
				if result != nil {
					allResults = append(allResults, result)
				}
				continue
			}

			nextPattern := patterns[i+1]
			nextEvents := e.findRelatedEvents(baseEvent, nextPattern)

			if len(nextEvents) > 0 {
				for _, nextEvent := range nextEvents {
					if !e.matcher.CheckOrderedSequence([]*types.Event{baseEvent, nextEvent}, nextPattern) {
						continue
					}
					result := e.chain.Build(baseEvent, []*types.Event{nextEvent}, rule)
					if result != nil {
						allResults = append(allResults, result)
					}
					break
				}
			}
		}
	}

	return allResults
}

func (e *Engine) filterByTimeWindow(events []*types.Event, window time.Duration) []*types.Event {
	if len(events) == 0 || window <= 0 {
		return events
	}

	baseTime := events[0].Timestamp
	for _, event := range events {
		if event.Timestamp.Before(baseTime) {
			baseTime = event.Timestamp
		}
	}
	cutoff := baseTime.Add(window)
	filtered := make([]*types.Event, 0)

	for _, event := range events {
		if event.Timestamp.After(baseTime) && event.Timestamp.Before(cutoff) {
			filtered = append(filtered, event)
		}
	}

	return filtered
}

func (e *Engine) findRelatedEvents(base *types.Event, pattern *rules.Pattern) []*types.Event {
	var events []*types.Event

	switch pattern.Join {
	case "user":
		events = e.index.GetByEventID(pattern.EventID)
		if events == nil {
			return nil
		}
		filtered := make([]*types.Event, 0)
		for _, evt := range events {
			if evt.User == base.User || (evt.UserSID != nil && base.UserSID != nil && *evt.UserSID == *base.UserSID) {
				filtered = append(filtered, evt)
			}
		}
		return filtered

	case "computer":
		events = e.index.GetByEventID(pattern.EventID)
		if events == nil {
			return nil
		}
		filtered := make([]*types.Event, 0)
		for _, evt := range events {
			if evt.Computer == base.Computer {
				filtered = append(filtered, evt)
			}
		}
		return filtered

	case "ip":
		events = e.index.GetByEventID(pattern.EventID)
		if events == nil {
			return nil
		}
		filtered := make([]*types.Event, 0)
		for _, evt := range events {
			if evt.IPAddress != nil && base.IPAddress != nil && *evt.IPAddress == *base.IPAddress {
				filtered = append(filtered, evt)
			}
		}
		return filtered

	default:
		return e.index.GetByEventID(pattern.EventID)
	}
}

func (e *Engine) FindChains(ctx context.Context, startEventID int64, maxDepth int) ([]*types.CorrelationResult, error) {
	e.mu.RLock()
	defer e.mu.RUnlock()

	startEvent, ok := e.index.GetByID(startEventID)
	if !ok {
		return nil, nil
	}

	return e.chain.FindChains(startEvent, maxDepth)
}

func (e *Engine) GetEvents() []*types.Event {
	e.mu.RLock()
	defer e.mu.RUnlock()

	events := make([]*types.Event, 0, len(e.events))
	for _, event := range e.events {
		events = append(events, event)
	}
	return events
}

func (e *Engine) Clear() {
	e.mu.Lock()
	defer e.mu.Unlock()

	e.events = make(map[int64]*types.Event)
	e.index = NewEventIndex(e.maxAge)
}
