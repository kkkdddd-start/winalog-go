package analyzers

import (
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type LoginAnalyzer struct {
	BaseAnalyzer
}

func NewLoginAnalyzer() *LoginAnalyzer {
	return &LoginAnalyzer{
		BaseAnalyzer: BaseAnalyzer{name: "login"},
	}
}

type LoginAnalysis struct {
	TotalLogins      int
	SuccessfulLogins int
	FailedLogins     int
	SuccessRate      float64
	ByLogonType      map[int]int
	ByTimeOfDay      map[int]int
	SuspiciousLogins []*SuspiciousLogin
}

type SuspiciousLogin struct {
	User     string
	Time     string
	SourceIP string
	Reason   string
	Severity string
}

func (a *LoginAnalyzer) Analyze(events []*types.Event) (*Result, error) {
	result := NewResult("login", nil, "", "medium", 50)

	analysis := a.performAnalysis(events)

	findings := a.detectSuspiciousLogins(analysis)

	for _, finding := range findings {
		result.AddFinding(finding)
	}

	result.Summary = a.generateSummary(analysis)
	result.Score = result.CalculateOverallScore()

	return result, nil
}

func (a *LoginAnalyzer) performAnalysis(events []*types.Event) *LoginAnalysis {
	analysis := &LoginAnalysis{
		ByLogonType:      make(map[int]int),
		ByTimeOfDay:      make(map[int]int),
		SuspiciousLogins: make([]*SuspiciousLogin, 0),
	}

	for _, e := range events {
		switch e.EventID {
		case 4624:
			analysis.SuccessfulLogins++
			analysis.ByLogonType[a.getLogonType(e)]++
			analysis.ByTimeOfDay[e.Timestamp.Hour()]++
		case 4625:
			analysis.FailedLogins++
		}
	}

	analysis.TotalLogins = analysis.SuccessfulLogins + analysis.FailedLogins
	if analysis.TotalLogins > 0 {
		analysis.SuccessRate = float64(analysis.SuccessfulLogins) / float64(analysis.TotalLogins)
	}

	return analysis
}

func (a *LoginAnalyzer) getLogonType(e *types.Event) int {
	return 0
}

func (a *LoginAnalyzer) detectSuspiciousLogins(analysis *LoginAnalysis) []Finding {
	findings := make([]Finding, 0)

	if analysis.SuccessRate < 0.5 && analysis.TotalLogins > 10 {
		findings = append(findings, Finding{
			Description: "Low login success rate indicates potential attack",
			RuleName:    "Login - Low Success Rate",
			Severity:    "high",
			Score:       70,
		})
	}

	for _, sl := range analysis.SuspiciousLogins {
		findings = append(findings, Finding{
			Description: sl.Reason,
			RuleName:    "Login - Suspicious Activity",
			Severity:    sl.Severity,
			Score:       60,
			Metadata: map[string]interface{}{
				"user":     sl.User,
				"sourceIP": sl.SourceIP,
			},
		})
	}

	return findings
}

func (a *LoginAnalyzer) generateSummary(analysis *LoginAnalysis) string {
	return sprintf("Total logins: %d, Successful: %d (%.1f%%), Failed: %d",
		analysis.TotalLogins, analysis.SuccessfulLogins, analysis.SuccessRate*100, analysis.FailedLogins)
}
