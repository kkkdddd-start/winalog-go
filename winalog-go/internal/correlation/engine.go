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
}

type EventIndex struct {
	mu     sync.RWMutex
	byID   map[int64]*types.Event
	byTime []*types.Event
	byEID  map[int32][]*types.Event
}

func NewEventIndex() *EventIndex {
	return &EventIndex{
		byID:  make(map[int64]*types.Event),
		byEID: make(map[int32][]*types.Event),
	}
}

func (idx *EventIndex) Add(event *types.Event) {
	idx.mu.Lock()
	defer idx.mu.Unlock()

	idx.byID[event.ID] = event
	idx.byTime = append(idx.byTime, event)
	idx.byEID[event.EventID] = append(idx.byEID[event.EventID], event)
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

func NewEngine() *Engine {
	return &Engine{
		events:  make(map[int64]*types.Event),
		index:   NewEventIndex(),
		matcher: NewMatcher(),
		chain:   NewChainBuilder(),
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
	e.index = NewEventIndex()
}
