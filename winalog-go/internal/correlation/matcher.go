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

func (m *Matcher) JoinEvents(events []*types.Event, joinField string) map[string][]*types.Event {
	joined := make(map[string][]*types.Event)

	for _, event := range events {
		var key string
		switch joinField {
		case "user":
			if event.UserSID != nil {
				key = *event.UserSID
			} else if event.User != nil {
				key = *event.User
			}
		case "computer":
			key = event.Computer
		case "ip":
			if event.IPAddress != nil {
				key = *event.IPAddress
			}
		case "session":
			if event.SessionID != nil {
				key = *event.SessionID
			}
		default:
			if event.User != nil {
				key = *event.User
			}
		}

		if key == "" {
			continue
		}

		joined[key] = append(joined[key], event)
	}

	return joined
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

	return filtered
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
