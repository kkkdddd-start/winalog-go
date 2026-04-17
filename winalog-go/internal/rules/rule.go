package rules

import (
	"fmt"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type LogicalOp string

const (
	OpAnd LogicalOp = "AND"
	OpOr  LogicalOp = "OR"
)

type AlertRule struct {
	Name           string         `yaml:"name"`
	Description    string         `yaml:"description"`
	Enabled        bool           `yaml:"enabled"`
	Severity       types.Severity `yaml:"severity"`
	Score          float64        `yaml:"score"`
	MitreAttack    string         `yaml:"mitre_attack,omitempty"`
	Filter         *Filter        `yaml:"filter"`
	Conditions     *Conditions    `yaml:"conditions,omitempty"`
	Threshold      int            `yaml:"threshold,omitempty"`
	TimeWindow     time.Duration  `yaml:"time_window,omitempty"`
	AggregationKey string         `yaml:"aggregation_key,omitempty"`
	Message        string         `yaml:"message"`
	Tags           []string       `yaml:"tags,omitempty"`
	Status         string         `yaml:"status,omitempty"`
	Product        string         `yaml:"logsource,omitempty"`
	LogSource      *LogSource     `yaml:"logsource,omitempty"`
	FalsePositives []string       `yaml:"falsepositives,omitempty"`
	Level          string         `yaml:"level,omitempty"`
	References     []string       `yaml:"references,omitempty"`
}

func (r *AlertRule) BuildMessage(event *types.Event) string {
	if r.Message == "" {
		return fmt.Sprintf("Alert triggered by rule %s", r.Name)
	}

	msg := r.Message
	msg = strings.ReplaceAll(msg, "{{.EventID}}", fmt.Sprintf("%d", event.EventID))
	msg = strings.ReplaceAll(msg, "{{.Source}}", event.Source)
	msg = strings.ReplaceAll(msg, "{{.Computer}}", event.Computer)
	var userStr string
	if event.User != nil {
		userStr = *event.User
	} else if event.UserSID != nil {
		userStr = *event.UserSID
	}
	msg = strings.ReplaceAll(msg, "{{.User}}", userStr)
	msg = strings.ReplaceAll(msg, "{{.Message}}", event.Message)

	return msg
}

type CorrelationRule struct {
	Name        string         `yaml:"name"`
	Description string         `yaml:"description"`
	Enabled     bool           `yaml:"enabled"`
	Severity    types.Severity `yaml:"severity"`
	Patterns    []*Pattern     `yaml:"patterns"`
	TimeWindow  time.Duration  `yaml:"time_window"`
	Join        string         `yaml:"join"`
	MitreAttack string         `yaml:"mitre_attack,omitempty"`
	Tags        []string       `yaml:"tags,omitempty"`
}

type Pattern struct {
	EventID    int32         `yaml:"event_id"`
	Conditions []*Condition  `yaml:"conditions,omitempty"`
	Join       string        `yaml:"join,omitempty"`
	TimeWindow time.Duration `yaml:"time_window,omitempty"`
	MinCount   int           `yaml:"min_count,omitempty"`
	MaxCount   int           `yaml:"max_count,omitempty"`
	Ordered    bool          `yaml:"ordered,omitempty"`
	Negate     bool          `yaml:"negate,omitempty"`
}

type Filter struct {
	EventIDs         []int32          `yaml:"event_ids,omitempty"`
	Levels           []int            `yaml:"levels,omitempty"`
	LogNames         []string         `yaml:"log_names,omitempty"`
	Sources          []string         `yaml:"sources,omitempty"`
	Computers        []string         `yaml:"computers,omitempty"`
	Keywords         string           `yaml:"keywords,omitempty"`
	KeywordMode      LogicalOp        `yaml:"keyword_mode,omitempty"`
	TimeRange        *types.TimeRange `yaml:"time_range,omitempty"`
	LogonTypes       []int            `yaml:"logon_types,omitempty"`
	ExcludeUsers     []string         `yaml:"exclude_users,omitempty"`
	ExcludeComputers []string         `yaml:"exclude_computers,omitempty"`
	ExcludeDomains   []string         `yaml:"exclude_domains,omitempty"`
	MinFailureCount  int              `yaml:"min_failure_count,omitempty"`
	IpAddress        []string         `yaml:"ip_address,omitempty"`
	ProcessNames     []string         `yaml:"process_names,omitempty"`
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

func ParseSeverity(s string) (types.Severity, error) {
	switch s {
	case "critical":
		return types.SeverityCritical, nil
	case "high":
		return types.SeverityHigh, nil
	case "medium":
		return types.SeverityMedium, nil
	case "low":
		return types.SeverityLow, nil
	case "info":
		return types.SeverityInfo, nil
	default:
		return types.SeverityInfo, fmt.Errorf("unknown severity: %s", s)
	}
}

func ScoreValue(s types.Severity) float64 {
	switch s {
	case types.SeverityCritical:
		return 100
	case types.SeverityHigh:
		return 75
	case types.SeverityMedium:
		return 50
	case types.SeverityLow:
		return 25
	default:
		return 10
	}
}
