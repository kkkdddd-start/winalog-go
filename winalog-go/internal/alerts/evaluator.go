package alerts

import (
	"regexp"
	"strings"
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/rules"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type eventCountKey struct {
	ruleName string
	aggKey   string
}

type eventCountEntry struct {
	count     int
	firstTime time.Time
	lastTime  time.Time
}

type Evaluator struct {
	mu         sync.RWMutex
	eventCount map[eventCountKey]*eventCountEntry
}

func NewEvaluator() *Evaluator {
	e := &Evaluator{
		eventCount: make(map[eventCountKey]*eventCountEntry),
	}
	go e.cleanupExpiredEntries()
	return e
}

func (e *Evaluator) cleanupExpiredEntries() {
	ticker := time.NewTicker(1 * time.Minute)
	defer ticker.Stop()
	for range ticker.C {
		e.mu.Lock()
		now := time.Now()
		for key, entry := range e.eventCount {
			if now.Sub(entry.lastTime) > 2*time.Hour {
				delete(e.eventCount, key)
			}
		}
		e.mu.Unlock()
	}
}

func (e *Evaluator) Evaluate(rule *rules.AlertRule, event *types.Event) (bool, error) {
	if !e.matchFilter(rule.Filter, event) {
		return false, nil
	}

	if rule.Conditions != nil {
		if !e.matchConditions(rule.Conditions, event) {
			return false, nil
		}
	}

	if rule.Threshold > 0 {
		if !e.checkThreshold(rule, event) {
			return false, nil
		}
	}

	return true, nil
}

func (e *Evaluator) matchFilter(filter *rules.Filter, event *types.Event) bool {
	if filter == nil {
		return true
	}

	if len(filter.EventIDs) > 0 {
		found := false
		for _, eid := range filter.EventIDs {
			if event.EventID == eid {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}

	if len(filter.Levels) > 0 {
		found := false
		for _, level := range filter.Levels {
			if int(event.Level) == level {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}

	if len(filter.LogNames) > 0 {
		found := false
		for _, logName := range filter.LogNames {
			if event.LogName == logName {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}

	if len(filter.Sources) > 0 {
		found := false
		for _, source := range filter.Sources {
			if event.Source == source {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}

	if len(filter.Computers) > 0 {
		found := false
		for _, computer := range filter.Computers {
			if event.Computer == computer {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}

	if filter.Keywords != "" {
		if !e.matchKeywords(filter.Keywords, event, filter.KeywordMode) {
			return false
		}
	}

	if filter.TimeRange != nil {
		if !e.matchTimeRange(filter.TimeRange, event) {
			return false
		}
	}

	if len(filter.IpAddress) > 0 {
		if event.IPAddress == nil {
			return false
		}
		found := false
		for _, ip := range filter.IpAddress {
			if *event.IPAddress == ip {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}

	if len(filter.ExcludeComputers) > 0 {
		for _, computer := range filter.ExcludeComputers {
			if event.Computer == computer {
				return false
			}
		}
	}

	if len(filter.ExcludeUsers) > 0 {
		if event.User != nil {
			for _, user := range filter.ExcludeUsers {
				if *event.User == user {
					return false
				}
			}
		}
	}

	return true
}

func (e *Evaluator) matchConditions(conditions *rules.Conditions, event *types.Event) bool {
	if conditions == nil {
		return true
	}

	if conditions.Any != nil {
		for _, cond := range conditions.Any {
			if e.matchCondition(cond, event) {
				return true
			}
		}
		return false
	}

	if conditions.All != nil {
		for _, cond := range conditions.All {
			if !e.matchCondition(cond, event) {
				return false
			}
		}
		return true
	}

	if conditions.None != nil {
		for _, cond := range conditions.None {
			if e.matchCondition(cond, event) {
				return false
			}
		}
		return true
	}

	return true
}

func (e *Evaluator) matchCondition(cond *rules.Condition, event *types.Event) bool {
	field := strings.ToLower(cond.Field)

	switch field {
	case "event_id":
		return e.compareValue(event.EventID, cond.Operator, cond.Value)
	case "level":
		return e.compareValue(int(event.Level), cond.Operator, cond.Value)
	case "source":
		return e.compareString(event.Source, cond.Operator, cond.Value, cond.Regex)
	case "log_name":
		return e.compareString(event.LogName, cond.Operator, cond.Value, cond.Regex)
	case "computer":
		return e.compareString(event.Computer, cond.Operator, cond.Value, cond.Regex)
	case "user":
		var userStr string
		if event.User != nil {
			userStr = *event.User
		}
		return e.compareString(userStr, cond.Operator, cond.Value, cond.Regex)
	case "message":
		return e.compareString(event.Message, cond.Operator, cond.Value, cond.Regex)
	default:
		return false
	}
}

func (e *Evaluator) compareValue(eventVal interface{}, op string, condVal string) bool {
	switch v := eventVal.(type) {
	case int32:
		var condInt int32
		if _, err := parseInt(condVal, &condInt); err != nil {
			return false
		}
		return e.compareInt(int(v), op, int(condInt))
	case int:
		var condInt int32
		if _, err := parseInt(condVal, &condInt); err != nil {
			return false
		}
		return e.compareInt(v, op, int(condInt))
	default:
		return false
	}
}

func (e *Evaluator) compareInt(a int, op string, b int) bool {
	switch op {
	case "==", "=":
		return a == b
	case "!=":
		return a != b
	case ">":
		return a > b
	case ">=":
		return a >= b
	case "<":
		return a < b
	case "<=":
		return a <= b
	default:
		return false
	}
}

func (e *Evaluator) compareString(a, op, b string, regex bool) bool {
	if regex {
		matched, _ := regexp.MatchString(b, a)
		switch op {
		case "==", "=", "contains":
			return matched
		case "!=", "not":
			return !matched
		default:
			return matched
		}
	}

	switch op {
	case "==", "=", "contains":
		return strings.Contains(strings.ToLower(a), strings.ToLower(b))
	case "!=", "not":
		return !strings.Contains(strings.ToLower(a), strings.ToLower(b))
	case "startswith":
		return strings.HasPrefix(strings.ToLower(a), strings.ToLower(b))
	case "endswith":
		return strings.HasSuffix(strings.ToLower(a), strings.ToLower(b))
	default:
		return false
	}
}

func (e *Evaluator) matchKeywords(keywords string, event *types.Event, mode rules.LogicalOp) bool {
	words := strings.Split(keywords, ",")
	matchedCount := 0

	for _, word := range words {
		word = strings.TrimSpace(word)
		if word == "" {
			continue
		}

		found := false
		if strings.Contains(strings.ToLower(event.Message), strings.ToLower(word)) {
			found = true
		}

		if found {
			matchedCount++
		}
	}

	switch mode {
	case rules.OpAnd:
		return matchedCount == len(words)
	case rules.OpOr:
		return matchedCount > 0
	default:
		return matchedCount == len(words)
	}
}

func (e *Evaluator) matchTimeRange(tr *types.TimeRange, event *types.Event) bool {
	if tr == nil {
		return true
	}

	if !event.Timestamp.IsZero() {
		if tr.Start.After(event.Timestamp) {
			return false
		}
		if tr.End.Before(event.Timestamp) {
			return false
		}
	}

	return true
}

func (e *Evaluator) checkThreshold(rule *rules.AlertRule, event *types.Event) bool {
	if rule.Threshold <= 0 {
		return true
	}
	if rule.TimeWindow <= 0 {
		return true
	}

	aggKey := e.getAggregationKey(rule, event)

	e.mu.Lock()
	defer e.mu.Unlock()

	key := eventCountKey{ruleName: rule.Name, aggKey: aggKey}
	now := event.Timestamp

	entry, exists := e.eventCount[key]
	if !exists {
		entry = &eventCountEntry{
			count:     1,
			firstTime: now,
			lastTime:  now,
		}
		e.eventCount[key] = entry
		return entry.count >= rule.Threshold
	}

	if now.Sub(entry.firstTime) > rule.TimeWindow {
		entry.count = 1
		entry.firstTime = now
		entry.lastTime = now
	} else {
		entry.count++
		entry.lastTime = now
	}

	return entry.count >= rule.Threshold
}

func (e *Evaluator) getAggregationKey(rule *rules.AlertRule, event *types.Event) string {
	var parts []string

	parts = append(parts, rule.Name)

	getUserStr := func() string {
		if event.User != nil {
			return *event.User
		}
		return ""
	}

	if rule.AggregationKey != "" {
		switch strings.ToLower(rule.AggregationKey) {
		case "user":
			if event.UserSID != nil {
				parts = append(parts, *event.UserSID)
			} else {
				parts = append(parts, getUserStr())
			}
		case "computer":
			parts = append(parts, event.Computer)
		case "source":
			parts = append(parts, event.Source)
		case "ip":
			if event.IPAddress != nil {
				parts = append(parts, *event.IPAddress)
			}
		default:
			parts = append(parts, getUserStr())
		}
	} else {
		if event.UserSID != nil {
			parts = append(parts, *event.UserSID)
		} else {
			parts = append(parts, getUserStr())
		}
	}

	return strings.Join(parts, "|")
}

func parseInt(s string, result *int32) (bool, error) {
	var v int64
	for i := 0; i < len(s); i++ {
		if s[i] >= '0' && s[i] <= '9' {
			v = v*10 + int64(s[i]-'0')
		} else {
			return false, nil
		}
	}
	*result = int32(v)
	return true, nil
}
