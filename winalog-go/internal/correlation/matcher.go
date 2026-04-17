package correlation

import (
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/rules"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type Matcher struct{}

func NewMatcher() *Matcher {
	return &Matcher{}
}

func (m *Matcher) Match(rule *rules.CorrelationRule, events []*types.Event) bool {
	if len(rule.Patterns) != len(events) {
		return false
	}

	for i, pattern := range rule.Patterns {
		event := events[i]
		if !m.matchPattern(pattern, event) {
			return false
		}
	}

	return true
}

func (m *Matcher) matchPattern(pattern *rules.Pattern, event *types.Event) bool {
	if pattern.EventID != 0 && event.EventID != pattern.EventID {
		return false
	}

	if len(pattern.Conditions) > 0 {
		if !m.matchConditions(pattern.Conditions, event) {
			return false
		}
	}

	return true
}

func (m *Matcher) matchConditions(conditions []*rules.Condition, event *types.Event) bool {
	for _, cond := range conditions {
		if !m.matchCondition(cond, event) {
			return false
		}
	}
	return true
}

func (m *Matcher) matchCondition(cond *rules.Condition, event *types.Event) bool {
	field := cond.Field
	value := cond.Value

	getUserStr := func() string {
		if event.User != nil {
			return *event.User
		}
		return ""
	}

	switch field {
	case "source":
		return event.Source == value
	case "log_name":
		return event.LogName == value
	case "computer":
		return event.Computer == value
	case "user":
		return getUserStr() == value
	case "message":
		return contains(event.Message, value)
	default:
		return false
	}
}

func (m *Matcher) FilterByTimeRange(events []*types.Event, start, end time.Time) []*types.Event {
	filtered := make([]*types.Event, 0)

	for _, event := range events {
		if event.Timestamp.After(start) && event.Timestamp.Before(end) {
			filtered = append(filtered, event)
		}
	}

	return filtered
}

func (m *Matcher) FilterByPattern(events []*types.Event, pattern *rules.Pattern) []*types.Event {
	filtered := make([]*types.Event, 0)

	for _, event := range events {
		if m.matchPattern(pattern, event) {
			filtered = append(filtered, event)
		}
	}

	if pattern.MinCount > 0 && len(filtered) < pattern.MinCount {
		return []*types.Event{}
	}

	if pattern.MaxCount > 0 && len(filtered) > pattern.MaxCount {
		return filtered[:pattern.MaxCount]
	}

	return filtered
}

func (m *Matcher) CountMatches(events []*types.Event, pattern *rules.Pattern) int {
	count := 0
	for _, event := range events {
		if m.matchPattern(pattern, event) {
			count++
		}
	}
	return count
}

func (m *Matcher) CheckOrderedSequence(events []*types.Event, pattern *rules.Pattern) bool {
	if !pattern.Ordered || len(events) < 2 {
		return true
	}

	for i := 0; i < len(events)-1; i++ {
		if events[i].Timestamp.After(events[i+1].Timestamp) {
			return false
		}
	}
	return true
}

func contains(s, substr string) bool {
	if len(s) < len(substr) {
		return false
	}
	for i := 0; i <= len(s)-len(substr); i++ {
		if s[i:i+len(substr)] == substr {
			return true
		}
	}
	return false
}
