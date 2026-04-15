package rules

import (
	"encoding/json"
	"os"
	"path/filepath"
	"strings"
	"sync"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type CustomRuleManager struct {
	mu      sync.RWMutex
	rules   map[string]*CustomRule
	dirPath string
}

type CustomRule struct {
	Name        string            `json:"name"`
	Description string            `json:"description"`
	Enabled     bool              `json:"enabled"`
	Severity    string            `json:"severity"`
	Score       float64           `json:"score"`
	MitreAttack string            `json:"mitre_attack"`
	EventIDs    []int32           `json:"event_ids"`
	Levels      []int             `json:"levels"`
	Filter      *CustomRuleFilter `json:"filter"`
	Message     string            `json:"message"`
	Tags        []string          `json:"tags"`
	CreatedAt   string            `json:"created_at"`
	UpdatedAt   string            `json:"updated_at"`
}

type CustomRuleFilter struct {
	EventIDs         []int32  `json:"event_ids,omitempty"`
	Levels           []int    `json:"levels,omitempty"`
	LogNames         []string `json:"log_names,omitempty"`
	Sources          []string `json:"sources,omitempty"`
	Computers        []string `json:"computers,omitempty"`
	Users            []string `json:"users,omitempty"`
	Keywords         []string `json:"keywords,omitempty"`
	ExcludeUsers     []string `json:"exclude_users,omitempty"`
	ExcludeComputers []string `json:"exclude_computers,omitempty"`
	IpAddress        string   `json:"ip_address,omitempty"`
}

func NewCustomRuleManager(dirPath string) *CustomRuleManager {
	return &CustomRuleManager{
		rules:   make(map[string]*CustomRule),
		dirPath: dirPath,
	}
}

func (m *CustomRuleManager) Load() error {
	m.mu.Lock()
	defer m.mu.Unlock()

	if m.dirPath == "" {
		return nil
	}

	os.MkdirAll(m.dirPath, 0755)

	entries, err := os.ReadDir(m.dirPath)
	if err != nil {
		return err
	}

	for _, entry := range entries {
		if entry.IsDir() || filepath.Ext(entry.Name()) != ".json" {
			continue
		}

		data, err := os.ReadFile(filepath.Join(m.dirPath, entry.Name()))
		if err != nil {
			continue
		}

		var rule CustomRule
		if err := json.Unmarshal(data, &rule); err != nil {
			continue
		}

		m.rules[rule.Name] = &rule
	}

	return nil
}

func (m *CustomRuleManager) Save(rule *CustomRule) error {
	m.mu.Lock()
	defer m.mu.Unlock()

	rule.UpdatedAt = Now()

	data, err := json.MarshalIndent(rule, "", "  ")
	if err != nil {
		return err
	}

	filename := filepath.Join(m.dirPath, rule.Name+".json")
	return os.WriteFile(filename, data, 0644)
}

func (m *CustomRuleManager) Add(rule *CustomRule) error {
	m.mu.Lock()
	defer m.mu.Unlock()

	if m.dirPath != "" {
		os.MkdirAll(m.dirPath, 0755)
		filename := filepath.Join(m.dirPath, rule.Name+".json")
		data, err := json.MarshalIndent(rule, "", "  ")
		if err != nil {
			return err
		}
		if err := os.WriteFile(filename, data, 0644); err != nil {
			return err
		}
	}

	m.rules[rule.Name] = rule
	return nil
}

func (m *CustomRuleManager) Delete(name string) error {
	m.mu.Lock()
	defer m.mu.Unlock()

	if m.dirPath != "" {
		filename := filepath.Join(m.dirPath, name+".json")
		os.Remove(filename)
	}

	delete(m.rules, name)
	return nil
}

func (m *CustomRuleManager) Get(name string) (*CustomRule, bool) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	rule, ok := m.rules[name]
	return rule, ok
}

func (m *CustomRuleManager) List() []*CustomRule {
	m.mu.RLock()
	defer m.mu.RUnlock()

	rules := make([]*CustomRule, 0, len(m.rules))
	for _, rule := range m.rules {
		rules = append(rules, rule)
	}
	return rules
}

func (m *CustomRuleManager) GetAll() []*AlertRule {
	rules := m.List()
	alertRules := make([]*AlertRule, 0, len(rules))

	for _, rule := range rules {
		alertRules = append(alertRules, rule.ToAlertRule())
	}

	return alertRules
}

func (r *CustomRule) ToAlertRule() *AlertRule {
	filter := &Filter{}
	if r.Filter != nil {
		filter = &Filter{
			EventIDs:         r.Filter.EventIDs,
			Levels:           r.Filter.Levels,
			LogNames:         r.Filter.LogNames,
			Sources:          r.Filter.Sources,
			Computers:        r.Filter.Computers,
			Keywords:         strings.Join(r.Filter.Keywords, " "),
			ExcludeUsers:     r.Filter.ExcludeUsers,
			ExcludeComputers: r.Filter.ExcludeComputers,
		}
	}

	return &AlertRule{
		Name:        r.Name,
		Description: r.Description,
		Enabled:     r.Enabled,
		Severity:    types.Severity(r.Severity),
		Score:       r.Score,
		MitreAttack: r.MitreAttack,
		Filter:      filter,
		Message:     r.Message,
		Tags:        r.Tags,
	}
}

func Now() string {
	return "2024-01-01T00:00:00Z"
}

func (m *CustomRuleManager) Update(rule *CustomRule) error {
	m.mu.Lock()
	defer m.mu.Unlock()

	if _, ok := m.rules[rule.Name]; !ok {
		return nil
	}

	if m.dirPath != "" {
		os.MkdirAll(m.dirPath, 0755)
		filename := filepath.Join(m.dirPath, rule.Name+".json")
		data, err := json.MarshalIndent(rule, "", "  ")
		if err != nil {
			return err
		}
		if err := os.WriteFile(filename, data, 0644); err != nil {
			return err
		}
	}

	m.rules[rule.Name] = rule
	return nil
}
