package analyzers

import (
	"fmt"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type AnalyzerError struct {
	AnalyzerName string
	Err          error
}

type AnalyzerErrors struct {
	Errors []AnalyzerError
}

func (e *AnalyzerErrors) Error() string {
	if len(e.Errors) == 1 {
		return fmt.Sprintf("analyzer %s failed: %v", e.Errors[0].AnalyzerName, e.Errors[0].Err)
	}
	return fmt.Sprintf("%d analyzers failed", len(e.Errors))
}

type AnalyzerResult struct {
	AnalyzerName string
	Result       *Result
	Error        error
}

type Analyzer interface {
	Name() string
	Analyze(events []*types.Event) (*Result, error)
}

type Result struct {
	Type      string    `json:"type"`
	Findings  []Finding `json:"findings"`
	Summary   string    `json:"summary"`
	Severity  string    `json:"severity"`
	Score     float64   `json:"score"`
	Timestamp int64     `json:"timestamp"`
}

type Finding struct {
	Description string                 `json:"description"`
	Evidence    []EvidenceItem         `json:"evidence,omitempty"`
	RuleName    string                 `json:"rule_name,omitempty"`
	MitreAttack string                 `json:"mitre_attack,omitempty"`
	Severity    string                 `json:"severity"`
	Score       float64                `json:"score"`
	Metadata    map[string]interface{} `json:"metadata,omitempty"`
}

type EvidenceItem struct {
	EventID   int32  `json:"event_id"`
	Timestamp string `json:"timestamp"`
	User      string `json:"user"`
	Computer  string `json:"computer"`
	Message   string `json:"message"`
}

type BaseAnalyzer struct {
	name string
}

func (a *BaseAnalyzer) Name() string {
	return a.name
}

func NewResult(analyzerType string, findings []Finding, summary string, severity string, score float64) *Result {
	return &Result{
		Type:     analyzerType,
		Findings: findings,
		Summary:  summary,
		Severity: severity,
		Score:    score,
	}
}

func (r *Result) AddFinding(finding Finding) {
	r.Findings = append(r.Findings, finding)
}

var severityWeights = map[string]float64{
	"critical": 1.5,
	"high":     1.2,
	"medium":   1.0,
	"low":      0.8,
	"info":     0.5,
}

func (r *Result) CalculateOverallScore() float64 {
	if len(r.Findings) == 0 {
		return 0
	}

	var totalScore float64
	var totalWeight float64

	for _, f := range r.Findings {
		weight := severityWeights[f.Severity]
		if weight == 0 {
			weight = 1.0
		}
		totalScore += f.Score * weight
		totalWeight += weight
	}

	if totalWeight == 0 {
		return 0
	}
	return totalScore / totalWeight
}

type AnalyzerManager struct {
	analyzers map[string]Analyzer
}

func NewAnalyzerManager() *AnalyzerManager {
	return &AnalyzerManager{
		analyzers: make(map[string]Analyzer),
	}
}

func (m *AnalyzerManager) Register(analyzer Analyzer) {
	m.analyzers[analyzer.Name()] = analyzer
}

func (m *AnalyzerManager) Get(name string) (Analyzer, bool) {
	analyzer, ok := m.analyzers[name]
	return analyzer, ok
}

func (m *AnalyzerManager) List() []string {
	names := make([]string, 0, len(m.analyzers))
	for name := range m.analyzers {
		names = append(names, name)
	}
	return names
}

func (m *AnalyzerManager) AnalyzeAll(events []*types.Event) ([]*Result, error) {
	results := make([]*Result, 0, len(m.analyzers))
	var errors []AnalyzerError

	for name, analyzer := range m.analyzers {
		result, err := analyzer.Analyze(events)
		if err != nil {
			errors = append(errors, AnalyzerError{
				AnalyzerName: name,
				Err:          err,
			})
			continue
		}
		results = append(results, result)
	}

	if len(errors) > 0 {
		return results, &AnalyzerErrors{Errors: errors}
	}
	return results, nil
}
