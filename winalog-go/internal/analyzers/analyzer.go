package analyzers

import (
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

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

func (r *Result) CalculateOverallScore() float64 {
	if len(r.Findings) == 0 {
		return 0
	}

	var total float64
	for _, f := range r.Findings {
		total += f.Score
	}
	return total / float64(len(r.Findings))
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

	for _, analyzer := range m.analyzers {
		result, err := analyzer.Analyze(events)
		if err != nil {
			continue
		}
		results = append(results, result)
	}

	return results, nil
}
