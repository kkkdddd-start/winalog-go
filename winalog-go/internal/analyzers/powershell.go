package analyzers

import (
	"strconv"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

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
	Anomalies         []*PowerShellAnomaly
}

type PowerShellAnomaly struct {
	Type        string
	Time        time.Time
	Source      string
	Command     string
	Severity    string
	Description string
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
	analysis := &PowerShellAnalysis{
		Anomalies: make([]*PowerShellAnomaly, 0),
	}

	for _, e := range events {
		if e.EventID != 4688 && e.EventID != 4103 && e.EventID != 4104 {
			continue
		}

		command := a.extractCommand(e)
		if command == "" {
			continue
		}

		commandLower := strings.ToLower(command)

		if strings.Contains(commandLower, "-encodedcommand") ||
			strings.Contains(commandLower, "-enc ") {
			analysis.EncodedCommands++
			analysis.Anomalies = append(analysis.Anomalies, &PowerShellAnomaly{
				Type:        "Encoded Command",
				Time:        e.Timestamp,
				Command:     command,
				Severity:    "high",
				Description: "PowerShell encoded command detected",
			})
		}

		if strings.Contains(commandLower, "invoke-") ||
			strings.Contains(commandLower, "iex ") {
			analysis.InvokeCommands++
		}

		suspicious := []string{
			"mimikatz", "pwdump", "hashdump",
			"invoke-mimikatz", "sekurlsa",
			"empire", "meterpreter",
			"net user", "net localgroup",
			"reg save", "lsass",
			"extract", "dcsync",
		}

		for _, s := range suspicious {
			if strings.Contains(commandLower, s) {
				analysis.SuspiciousScripts++
				analysis.Anomalies = append(analysis.Anomalies, &PowerShellAnomaly{
					Type:        "Suspicious Script",
					Time:        e.Timestamp,
					Command:     command,
					Severity:    "critical",
					Description: "Suspicious PowerShell script detected: " + s,
				})
				break
			}
		}
	}

	analysis.RiskScore = a.calculateRiskScore(analysis)

	return analysis
}

func (a *PowerShellAnalyzer) extractCommand(e *types.Event) string {
	if e.Message != "" {
		return e.Message
	}

	return ""
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
			Metadata: map[string]interface{}{
				"count": analysis.EncodedCommands,
			},
		})
	}

	if analysis.SuspiciousScripts > 0 {
		findings = append(findings, Finding{
			Description: "Suspicious PowerShell script detected - possible attacker tool",
			RuleName:    "PowerShell - Suspicious Script",
			MitreAttack: "T1059.001",
			Severity:    "critical",
			Score:       90,
			Metadata: map[string]interface{}{
				"count": analysis.SuspiciousScripts,
			},
		})
	}

	return findings
}

func (a *PowerShellAnalyzer) generateSummary(analysis *PowerShellAnalysis) string {
	var sb strings.Builder
	sb.WriteString("PowerShell Analysis Summary:\n")
	sb.WriteString("  Encoded Commands: ")
	sb.WriteString(strconv.Itoa(analysis.EncodedCommands))
	sb.WriteString("\n  Invoke Commands: ")
	sb.WriteString(strconv.Itoa(analysis.InvokeCommands))
	sb.WriteString("\n  Suspicious Scripts: ")
	sb.WriteString(strconv.Itoa(analysis.SuspiciousScripts))
	sb.WriteString("\n  Risk Score: ")
	sb.WriteString(strconv.Itoa(int(analysis.RiskScore)))
	return sb.String()
}
