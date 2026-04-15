package rules

import (
	"fmt"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type Severity string

const (
	SeverityCritical Severity = "critical"
	SeverityHigh     Severity = "high"
	SeverityMedium   Severity = "medium"
	SeverityLow      Severity = "low"
	SeverityInfo     Severity = "info"
)

type LogicalOp string

const (
	LogicalOpAnd LogicalOp = "AND"
	LogicalOpOr  LogicalOp = "OR"
)

type AlertRule struct {
	Name           string        `yaml:"name"`
	Description    string        `yaml:"description"`
	Enabled        bool          `yaml:"enabled"`
	Severity       Severity      `yaml:"severity"`
	Score          float64       `yaml:"score"`
	MitreAttack    string        `yaml:"mitre_attack,omitempty"`
	Filter         *Filter       `yaml:"filter"`
	Conditions     *Conditions   `yaml:"conditions,omitempty"`
	Threshold      int           `yaml:"threshold,omitempty"`
	TimeWindow     time.Duration `yaml:"time_window,omitempty"`
	AggregationKey string        `yaml:"aggregation_key,omitempty"`
	Message        string        `yaml:"message"`
	Tags           []string      `yaml:"tags,omitempty"`
	Status         string        `yaml:"status,omitempty"`
	Product        string        `yaml:"logsource,omitempty"`
	LogSource      *LogSource    `yaml:"logsource,omitempty"`
	FalsePositives []string      `yaml:"falsepositives,omitempty"`
	Level          string        `yaml:"level,omitempty"`
	References     []string      `yaml:"references,omitempty"`
}

func (r *AlertRule) BuildMessage(event *types.Event) string {
	if r.Message == "" {
		return fmt.Sprintf("Alert triggered by rule %s", r.Name)
	}

	msg := r.Message
	msg = replace(msg, "{{.EventID}}", fmt.Sprintf("%d", event.EventID))
	msg = replace(msg, "{{.Source}}", event.Source)
	msg = replace(msg, "{{.Computer}}", event.Computer)
	var userStr string
	if event.User != nil {
		userStr = *event.User
	} else if event.UserSID != nil {
		userStr = *event.UserSID
	}
	msg = replace(msg, "{{.User}}", userStr)
	msg = replace(msg, "{{.Message}}", event.Message)

	return msg
}

type CorrelationRule struct {
	Name        string        `yaml:"name"`
	Description string        `yaml:"description"`
	Enabled     bool          `yaml:"enabled"`
	Severity    Severity      `yaml:"severity"`
	Patterns    []*Pattern    `yaml:"patterns"`
	TimeWindow  time.Duration `yaml:"time_window"`
	Join        string        `yaml:"join"`
	MitreAttack string        `yaml:"mitre_attack,omitempty"`
	Tags        []string      `yaml:"tags,omitempty"`
}

type Pattern struct {
	EventID    int32         `yaml:"event_id"`
	Conditions []*Condition  `yaml:"conditions,omitempty"`
	Join       string        `yaml:"join,omitempty"`
	TimeWindow time.Duration `yaml:"time_window,omitempty"`
}

type Filter struct {
	EventIDs    []int32          `yaml:"event_ids,omitempty"`
	Levels      []int            `yaml:"levels,omitempty"`
	LogNames    []string         `yaml:"log_names,omitempty"`
	Sources     []string         `yaml:"sources,omitempty"`
	Computers   []string         `yaml:"computers,omitempty"`
	Keywords    string           `yaml:"keywords,omitempty"`
	KeywordMode LogicalOp        `yaml:"keyword_mode,omitempty"`
	TimeRange   *types.TimeRange `yaml:"time_range,omitempty"`
}

type Conditions struct {
	Any  []*Condition `yaml:"any,omitempty"`
	All  []*Condition `yaml:"all,omitempty"`
	None []*Condition `yaml:"none,omitempty"`
}

type Condition struct {
	Field    string `yaml:"field"`
	Operator string `yaml:"operator"`
	Value    string `yaml:"value"`
	Regex    bool   `yaml:"regex,omitempty"`
}

type LogSource struct {
	Product    string `yaml:"product,omitempty"`
	Service    string `yaml:"service,omitempty"`
	Category   string `yaml:"category,omitempty"`
	Definition string `yaml:"definition,omitempty"`
}

type BaseRule struct {
	Name        string   `yaml:"name"`
	Description string   `yaml:"description"`
	Enabled     bool     `yaml:"enabled"`
	Tags        []string `yaml:"tags,omitempty"`
}

func (r *AlertRule) Validate() error {
	if r.Name == "" {
		return fmt.Errorf("rule name is required")
	}
	if r.Severity == "" {
		return fmt.Errorf("severity is required")
	}
	if r.Filter == nil && r.Conditions == nil {
		return fmt.Errorf("either filter or conditions is required")
	}
	return nil
}

func (r *CorrelationRule) Validate() error {
	if r.Name == "" {
		return fmt.Errorf("rule name is required")
	}
	if len(r.Patterns) < 2 {
		return fmt.Errorf("correlation rule requires at least 2 patterns")
	}
	for i, pattern := range r.Patterns {
		if pattern.EventID == 0 {
			return fmt.Errorf("pattern %d has invalid event_id", i)
		}
	}
	return nil
}

func replace(s, old, new string) string {
	if old == "" {
		return s
	}
	result := ""
	i := 0
	for {
		idx := -1
		for j := i; j <= len(s)-len(old); j++ {
			if s[j:j+len(old)] == old {
				idx = j
				break
			}
		}
		if idx == -1 {
			result += s[i:]
			break
		}
		result += s[i:idx] + new
		i = idx + len(old)
	}
	return result
}

func ParseSeverity(s string) (Severity, error) {
	switch s {
	case "critical":
		return SeverityCritical, nil
	case "high":
		return SeverityHigh, nil
	case "medium":
		return SeverityMedium, nil
	case "low":
		return SeverityLow, nil
	case "info":
		return SeverityInfo, nil
	default:
		return SeverityInfo, fmt.Errorf("unknown severity: %s", s)
	}
}

func (s Severity) ScoreValue() float64 {
	switch s {
	case SeverityCritical:
		return 100
	case SeverityHigh:
		return 75
	case SeverityMedium:
		return 50
	case SeverityLow:
		return 25
	default:
		return 10
	}
}
