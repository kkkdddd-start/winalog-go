package rules

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"time"

	"gopkg.in/yaml.v3"
)

type Loader struct {
	rulePaths []string
	validator *Validator
}

func NewLoader(paths []string) *Loader {
	return &Loader{
		rulePaths: paths,
		validator: NewValidator(),
	}
}

func (l *Loader) Load() ([]*AlertRule, []*CorrelationRule, error) {
	alertRules := make([]*AlertRule, 0)
	correlationRules := make([]*CorrelationRule, 0)

	for _, path := range l.rulePaths {
		rules, corrRules, err := l.loadFromPath(path)
		if err != nil {
			continue
		}
		alertRules = append(alertRules, rules...)
		correlationRules = append(correlationRules, corrRules...)
	}

	return alertRules, correlationRules, nil
}

func (l *Loader) loadFromPath(path string) ([]*AlertRule, []*CorrelationRule, error) {
	info, err := os.Stat(path)
	if err != nil {
		return nil, nil, err
	}

	if info.IsDir() {
		return l.loadFromDir(path)
	}

	return l.loadFromFile(path)
}

func (l *Loader) loadFromDir(dir string) ([]*AlertRule, []*CorrelationRule, error) {
	alertRules := make([]*AlertRule, 0)
	correlationRules := make([]*CorrelationRule, 0)

	entries, err := ioutil.ReadDir(dir)
	if err != nil {
		return nil, nil, err
	}

	for _, entry := range entries {
		if entry.IsDir() {
			continue
		}

		ext := strings.ToLower(filepath.Ext(entry.Name()))
		if ext != ".yaml" && ext != ".yml" {
			continue
		}

		filePath := filepath.Join(dir, entry.Name())
		rules, corrRules, err := l.loadFromFile(filePath)
		if err != nil {
			continue
		}

		alertRules = append(alertRules, rules...)
		correlationRules = append(correlationRules, corrRules...)
	}

	return alertRules, correlationRules, nil
}

func (l *Loader) loadFromFile(filePath string) ([]*AlertRule, []*CorrelationRule, error) {
	data, err := ioutil.ReadFile(filePath)
	if err != nil {
		return nil, nil, err
	}

	var doc YAMLDocument
	if err := yaml.Unmarshal(data, &doc); err != nil {
		return nil, nil, err
	}

	alertRules := make([]*AlertRule, 0)
	correlationRules := make([]*CorrelationRule, 0)

	for _, rule := range doc.AlertRules {
		if err := l.validator.ValidateAlertRule(rule); err != nil {
			continue
		}
		alertRules = append(alertRules, rule)
	}

	for _, rule := range doc.CorrelationRules {
		if err := l.validator.ValidateCorrelationRule(rule); err != nil {
			continue
		}
		correlationRules = append(correlationRules, rule)
	}

	return alertRules, correlationRules, nil
}

type YAMLDocument struct {
	AlertRules       []*AlertRule       `yaml:"alert_rules,omitempty"`
	CorrelationRules []*CorrelationRule `yaml:"correlation_rules,omitempty"`
}

type Validator struct{}

func NewValidator() *Validator {
	return &Validator{}
}

func (v *Validator) ValidateAlertRule(rule *AlertRule) error {
	if rule.Name == "" {
		return fmt.Errorf("rule name is required")
	}

	if rule.Severity == "" {
		return fmt.Errorf("severity is required")
	}

	validSeverities := map[Severity]bool{
		SeverityCritical: true,
		SeverityHigh:     true,
		SeverityMedium:   true,
		SeverityLow:      true,
		SeverityInfo:     true,
	}

	if !validSeverities[rule.Severity] {
		return fmt.Errorf("invalid severity: %s", rule.Severity)
	}

	if rule.Filter == nil && rule.Conditions == nil {
		return fmt.Errorf("either filter or conditions is required")
	}

	if rule.Filter != nil {
		if err := v.validateFilter(rule.Filter); err != nil {
			return err
		}
	}

	return nil
}

func (v *Validator) ValidateCorrelationRule(rule *CorrelationRule) error {
	if rule.Name == "" {
		return fmt.Errorf("rule name is required")
	}

	if len(rule.Patterns) < 2 {
		return fmt.Errorf("correlation rule requires at least 2 patterns")
	}

	for i, pattern := range rule.Patterns {
		if pattern.EventID == 0 {
			return fmt.Errorf("pattern %d has invalid event_id", i)
		}
	}

	return nil
}

func (v *Validator) validateFilter(filter *Filter) error {
	for _, eid := range filter.EventIDs {
		if eid < 0 || eid > 65535 {
			return fmt.Errorf("invalid event_id: %d", eid)
		}
	}

	for _, level := range filter.Levels {
		if level < 0 || level > 4 {
			return fmt.Errorf("invalid level: %d", level)
		}
	}

	if filter.Keywords != "" && filter.KeywordMode == "" {
		filter.KeywordMode = LogicalOpAnd
	}

	return nil
}

func (v *Validator) ValidateMITREID(id string) bool {
	if len(id) < 5 {
		return false
	}

	parts := strings.Split(id, ".")
	if len(parts) != 2 {
		return false
	}

	if parts[0] != "T" {
		return false
	}

	return true
}

func (v *Validator) ValidateThreshold(threshold int) error {
	if threshold < 0 {
		return fmt.Errorf("threshold must be non-negative")
	}
	return nil
}

func (v *Validator) ValidateTimeWindow(tw time.Duration) error {
	if tw < 0 {
		return fmt.Errorf("time_window must be non-negative")
	}
	return nil
}

func LoadRulesFromFile(filePath string) ([]*AlertRule, error) {
	loader := NewLoader([]string{filePath})
	alertRules, _, err := loader.Load()
	return alertRules, err
}

func LoadCorrelationRulesFromFile(filePath string) ([]*CorrelationRule, error) {
	loader := NewLoader([]string{filePath})
	_, corrRules, err := loader.Load()
	return corrRules, err
}
