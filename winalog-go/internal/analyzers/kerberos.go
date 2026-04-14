package analyzers

import (
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type KerberosAnalyzer struct {
	BaseAnalyzer
}

func NewKerberosAnalyzer() *KerberosAnalyzer {
	return &KerberosAnalyzer{
		BaseAnalyzer: BaseAnalyzer{name: "kerberos"},
	}
}

type KerberosAnalysis struct {
	TGSRequests    int
	TGTTickets     int
	GoldenTickets  int
	SilverTickets  int
	TicketWarnings int
}

func (a *KerberosAnalyzer) Analyze(events []*types.Event) (*Result, error) {
	result := NewResult("kerberos", nil, "", "medium", 50)

	analysis := a.performAnalysis(events)

	findings := a.detectAnomalies(analysis)

	for _, finding := range findings {
		result.AddFinding(finding)
	}

	result.Summary = a.generateSummary(analysis)
	result.Score = result.CalculateOverallScore()

	return result, nil
}

func (a *KerberosAnalyzer) performAnalysis(events []*types.Event) *KerberosAnalysis {
	analysis := &KerberosAnalysis{}

	for _, e := range events {
		switch e.EventID {
		case 4768:
			analysis.TGTTickets++
		case 4769:
			analysis.TGSRequests++
			if a.isSuspiciousTGSRequest(e) {
				analysis.TicketWarnings++
			}
		case 4771:
			analysis.TicketWarnings++
		}
	}

	return analysis
}

func (a *KerberosAnalyzer) isSuspiciousTGSRequest(e *types.Event) bool {
	if e.Message == "" {
		return false
	}

	suspiciousPatterns := []string{
		"$",
		"krbtgt",
		"admin",
	}

	for _, pattern := range suspiciousPatterns {
		if contains(e.Message, pattern) {
			return true
		}
	}

	return false
}

func (a *KerberosAnalyzer) detectAnomalies(analysis *KerberosAnalysis) []Finding {
	findings := make([]Finding, 0)

	if analysis.GoldenTickets > 0 {
		findings = append(findings, Finding{
			Description: "Possible Golden Ticket attack detected - TGT with suspicious lifetime",
			RuleName:    "Kerberos - Golden Ticket",
			MitreAttack: "T1558.001",
			Severity:    "critical",
			Score:       95,
		})
	}

	if analysis.SilverTickets > 0 {
		findings = append(findings, Finding{
			Description: "Possible Silver Ticket attack detected",
			RuleName:    "Kerberos - Silver Ticket",
			MitreAttack: "T1558.002",
			Severity:    "high",
			Score:       85,
		})
	}

	if analysis.TicketWarnings > 0 {
		findings = append(findings, Finding{
			Description: "Kerberos ticket warnings detected - possible Kerberoasting",
			RuleName:    "Kerberos - Ticket Warning",
			MitreAttack: "T1558.003",
			Severity:    "medium",
			Score:       60,
		})
	}

	return findings
}

func (a *KerberosAnalyzer) generateSummary(analysis *KerberosAnalysis) string {
	return sprintf("Kerberos analysis: %d TGT tickets, %d TGS requests, %d warnings",
		analysis.TGTTickets, analysis.TGSRequests, analysis.TicketWarnings)
}

type PowerShellAnalyzer struct {
	BaseAnalyzer
}

func NewPowerShellAnalyzer() *PowerShellAnalyzer {
	return &PowerShellAnalyzer{
		BaseAnalyzer: BaseAnalyzer{name: "powershell"},
	}
}

type PowerShellAnalysis struct {
	EncodedCommands   int
	SuspiciousScripts int
	InvokeCommands    int
	RiskScore         float64
}

func (a *PowerShellAnalyzer) Analyze(events []*types.Event) (*Result, error) {
	result := NewResult("powershell", nil, "", "medium", 50)

	analysis := a.performAnalysis(events)

	findings := a.detectAnomalies(analysis)

	for _, finding := range findings {
		result.AddFinding(finding)
	}

	result.Summary = a.generateSummary(analysis)
	result.Score = result.CalculateOverallScore()

	return result, nil
}

func (a *PowerShellAnalyzer) performAnalysis(events []*types.Event) *PowerShellAnalysis {
	analysis := &PowerShellAnalysis{}

	for _, e := range events {
		if e.EventID != 4688 && e.EventID != 4103 {
			continue
		}

		if e.Message == "" {
			continue
		}

		msg := e.Message

		if contains(msg, "-EncodedCommand") || contains(msg, "-enc ") {
			analysis.EncodedCommands++
		}

		if contains(msg, "Invoke-") || contains(msg, "iex ") {
			analysis.InvokeCommands++
		}

		suspicious := []string{
			"mimikatz",
			" Invoke-Mimikatz",
			"Empire",
			"meterpreter",
		}

		for _, s := range suspicious {
			if contains(msg, s) {
				analysis.SuspiciousScripts++
				break
			}
		}
	}

	analysis.RiskScore = a.calculateRiskScore(analysis)

	return analysis
}

func (a *PowerShellAnalyzer) calculateRiskScore(analysis *PowerShellAnalysis) float64 {
	score := 0.0

	if analysis.EncodedCommands > 0 {
		score += 30
	}
	if analysis.SuspiciousScripts > 0 {
		score += 50
	}
	if analysis.InvokeCommands > 5 {
		score += 20
	}

	if score > 100 {
		score = 100
	}

	return score
}

func (a *PowerShellAnalyzer) detectAnomalies(analysis *PowerShellAnalysis) []Finding {
	findings := make([]Finding, 0)

	if analysis.EncodedCommands > 0 {
		findings = append(findings, Finding{
			Description: "PowerShell encoded command detected - common in attacks",
			RuleName:    "PowerShell - Encoded Command",
			MitreAttack: "T1059.001",
			Severity:    "high",
			Score:       75,
		})
	}

	if analysis.SuspiciousScripts > 0 {
		findings = append(findings, Finding{
			Description: "Suspicious PowerShell script detected - possible attacker tool",
			RuleName:    "PowerShell - Suspicious Script",
			MitreAttack: "T1059.001",
			Severity:    "critical",
			Score:       90,
		})
	}

	return findings
}

func (a *PowerShellAnalyzer) generateSummary(analysis *PowerShellAnalysis) string {
	return sprintf("PowerShell analysis: %d encoded commands, %d suspicious scripts, risk score: %.0f",
		analysis.EncodedCommands, analysis.SuspiciousScripts, analysis.RiskScore)
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
