package correlation

import (
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/rules"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type ChainConfig struct {
	StartEventIDs map[int32]bool
	Transitions   map[int32][]int32
}

var DefaultChainConfig = &ChainConfig{
	StartEventIDs: map[int32]bool{
		4624: true,
		4625: true,
		4634: true,
		4648: true,
		4672: true,
		4688: true,
		4698: true,
		4697: true,
	},
	Transitions: map[int32][]int32{
		4624: {4634, 4672, 4688},
		4625: {4624},
		4648: {4624, 4672},
		4688: {4698, 4697},
	},
}

type ChainBuilder struct {
	config *ChainConfig
}

func NewChainBuilder() *ChainBuilder {
	return &ChainBuilder{config: DefaultChainConfig}
}

func NewChainBuilderWithConfig(cfg *ChainConfig) *ChainBuilder {
	return &ChainBuilder{config: cfg}
}

func (cb *ChainBuilder) Build(startEvent *types.Event, relatedEvents []*types.Event, rule *rules.CorrelationRule) *types.CorrelationResult {
	result := &types.CorrelationResult{
		ID:          generateResultID(),
		RuleName:    rule.Name,
		Description: rule.Description,
		Severity:    types.Severity(rule.Severity),
		Events:      []*types.Event{startEvent},
		StartTime:   startEvent.Timestamp,
		EndTime:     startEvent.Timestamp,
	}

	for _, evt := range relatedEvents {
		result.Events = append(result.Events, evt)
		if evt.Timestamp.After(result.EndTime) {
			result.EndTime = evt.Timestamp
		}
	}

	return result
}

func (cb *ChainBuilder) FindChains(startEvent *types.Event, maxDepth int) ([]*types.CorrelationResult, error) {
	chains := make([]*types.CorrelationResult, 0)

	if !cb.config.StartEventIDs[startEvent.EventID] {
		return chains, nil
	}

	depth := 0
	currentEvents := []*types.Event{startEvent}

	for depth < maxDepth {
		nextEvents := cb.findNextEvents(currentEvents)
		if len(nextEvents) == 0 {
			break
		}

		for _, nextEvent := range nextEvents {
			chain := &types.CorrelationResult{
				ID:        generateResultID(),
				StartTime: startEvent.Timestamp,
				EndTime:   nextEvent.Timestamp,
				Events:    append([]*types.Event{startEvent}, nextEvent),
				Severity:  types.SeverityHigh,
			}
			chains = append(chains, chain)
		}

		currentEvents = nextEvents
		depth++
	}

	return chains, nil
}

func (cb *ChainBuilder) findNextEvents(events []*types.Event) []*types.Event {
	nextEvents := make([]*types.Event, 0)

	for _, event := range events {
		if nextIDs, ok := cb.config.Transitions[event.EventID]; ok {
			for _, nextID := range nextIDs {
				nextEvents = append(nextEvents, &types.Event{
					ID:        event.ID + 1,
					EventID:   nextID,
					Timestamp: event.Timestamp.Add(1 * time.Second),
					User:      event.User,
					Computer:  event.Computer,
				})
			}
		}
	}

	return nextEvents
}

func (cb *ChainBuilder) BuildFromRule(rule *rules.CorrelationRule, events []*types.Event) *types.CorrelationResult {
	if len(events) == 0 {
		return nil
	}

	result := &types.CorrelationResult{
		ID:          generateResultID(),
		RuleName:    rule.Name,
		Description: rule.Description,
		Severity:    types.Severity(rule.Severity),
		Events:      events,
		StartTime:   events[0].Timestamp,
		EndTime:     events[0].Timestamp,
	}

	for _, event := range events {
		if event.Timestamp.After(result.EndTime) {
			result.EndTime = event.Timestamp
		}
	}

	return result
}

func generateResultID() string {
	return time.Now().Format("20060102150405.000000")
}
