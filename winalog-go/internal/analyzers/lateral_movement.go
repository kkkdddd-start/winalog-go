package analyzers

import (
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type LateralMovementAnalyzer struct {
	BaseAnalyzer
}

func NewLateralMovementAnalyzer() *LateralMovementAnalyzer {
	return &LateralMovementAnalyzer{
		BaseAnalyzer: BaseAnalyzer{name: "lateral_movement"},
	}
}

type LateralMovementAnalysis struct {
	TotalEvents    int
	RDPConnections int
	PSExecEvents   int
	WMIEvents      int
	PassTheHash    int
	AdminShares    int
	RemoteFX       int
	Findings       []*LateralMovementFinding
}

type LateralMovementFinding struct {
	Type        string
	Time        time.Time
	SourceIP    string
	SourceHost  string
	TargetHost  string
	User        string
	Description string
	Severity    string
	MitreAttack string
}

func (a *LateralMovementAnalyzer) Analyze(events []*types.Event) (*Result, error) {
	result := NewResult("lateral_movement", nil, "", "medium", 50)

	analysis := a.performAnalysis(events)
	findings := a.detectLateralMovement(analysis)

	for _, finding := range findings {
		result.AddFinding(Finding{
			Description: finding.Description,
			RuleName:    "Lateral Movement - " + finding.Type,
			MitreAttack: finding.MitreAttack,
			Severity:    finding.Severity,
			Score:       a.calculateScore(finding.Severity),
			Metadata: map[string]interface{}{
				"source_ip":   finding.SourceIP,
				"source_host": finding.SourceHost,
				"target_host": finding.TargetHost,
				"user":        finding.User,
				"time":        finding.Time.Format(time.RFC3339),
			},
		})
	}

	result.Summary = a.generateSummary(analysis)
	result.Score = result.CalculateOverallScore()

	if len(findings) > 0 {
		result.Severity = "high"
	}

	return result, nil
}

func (a *LateralMovementAnalyzer) performAnalysis(events []*types.Event) *LateralMovementAnalysis {
	analysis := &LateralMovementAnalysis{
		Findings: make([]*LateralMovementFinding, 0),
	}

	for _, e := range events {
		switch e.EventID {
		case 4624:
			analysis.TotalEvents++
			logonType := a.getLogonType(e)
			if logonType == 3 || logonType == 10 || logonType == 12 {
				analysis.RDPConnections++
				if a.isSuspiciousLogin(e) {
					analysis.Findings = append(analysis.Findings, &LateralMovementFinding{
						Type:        "Suspicious RDP",
						Time:        e.Timestamp,
						SourceIP:    a.getSourceIP(e),
						SourceHost:  a.getSourceHost(e),
						TargetHost:  e.Computer,
						User:        a.getTargetUser(e),
						Description: "Suspicious RDP login from external IP",
						Severity:    "high",
						MitreAttack: "T1021.001",
					})
				}
			}

		case 4688:
			analysis.TotalEvents++
			command := strings.ToLower(e.Message)
			if strings.Contains(command, "psexec") || strings.Contains(command, "psexec") {
				analysis.PSExecEvents++
				analysis.Findings = append(analysis.Findings, &LateralMovementFinding{
					Type:        "PSExec Usage",
					Time:        e.Timestamp,
					SourceHost:  e.Computer,
					TargetHost:  a.extractTargetFromCommand(e.Message),
					User:        a.getTargetUser(e),
					Description: "PSExec-like process execution detected",
					Severity:    "critical",
					MitreAttack: "T1021.002",
				})
			}
			if strings.Contains(command, "wmic") || strings.Contains(command, "wmiexec") {
				analysis.WMIEvents++
				analysis.Findings = append(analysis.Findings, &LateralMovementFinding{
					Type:        "WMI Execution",
					Time:        e.Timestamp,
					SourceHost:  e.Computer,
					User:        a.getTargetUser(e),
					Description: "WMI remote execution detected",
					Severity:    "high",
					MitreAttack: "T1047",
				})
			}

		case 4648:
			analysis.TotalEvents++
			if a.isExplicitCredentials(e) {
				analysis.Findings = append(analysis.Findings, &LateralMovementFinding{
					Type:        "Explicit Credentials",
					Time:        e.Timestamp,
					SourceHost:  a.getSourceHost(e),
					TargetHost:  e.Computer,
					User:        a.getTargetUser(e),
					Description: "Logon with explicit credentials - possible lateral movement",
					Severity:    "medium",
					MitreAttack: "T1078.004",
				})
			}

		case 3:
			analysis.TotalEvents++
			sourceIP := a.getSourceIPFromEvent(e)
			if sourceIP != "" && a.isExternalIP(sourceIP) {
				analysis.Findings = append(analysis.Findings, &LateralMovementFinding{
					Type:        "External Network Connection",
					Time:        e.Timestamp,
					SourceIP:    sourceIP,
					TargetHost:  e.Computer,
					Description: "Network connection from external IP",
					Severity:    "medium",
					MitreAttack: "T1011",
				})
			}
		}
	}

	return analysis
}

func (a *LateralMovementAnalyzer) getLogonType(e *types.Event) int {
	return e.GetLogonType()
}

func (a *LateralMovementAnalyzer) getSourceIP(e *types.Event) string {
	if e.IPAddress != nil && *e.IPAddress != "" && *e.IPAddress != "-" {
		return *e.IPAddress
	}
	return ""
}

func (a *LateralMovementAnalyzer) getSourceIPFromEvent(e *types.Event) string {
	return a.getSourceIP(e)
}

func (a *LateralMovementAnalyzer) getSourceHost(e *types.Event) string {
	if v := e.GetExtractedField("WorkstationName"); v != nil {
		if s, ok := v.(string); ok && s != "" {
			return s
		}
	}
	if e.IPAddress != nil && *e.IPAddress != "" && *e.IPAddress != "-" {
		return *e.IPAddress
	}
	return ""
}

func (a *LateralMovementAnalyzer) getTargetUser(e *types.Event) string {
	if e.User != nil && *e.User != "" {
		return *e.User
	}
	return ""
}

func (a *LateralMovementAnalyzer) isSuspiciousLogin(e *types.Event) bool {
	sourceIP := a.getSourceIP(e)
	if sourceIP == "" || sourceIP == "-" || sourceIP == "127.0.0.1" {
		return false
	}
	return a.isExternalIP(sourceIP)
}

func (a *LateralMovementAnalyzer) isExplicitCredentials(e *types.Event) bool {
	return strings.Contains(strings.ToLower(e.Message), "explicit")
}

func (a *LateralMovementAnalyzer) isExternalIP(ip string) bool {
	if ip == "" || ip == "-" || ip == "127.0.0.1" || ip == "::1" || ip == "::" {
		return false
	}
	parts := strings.Split(ip, ".")
	if len(parts) != 4 {
		return true
	}
	firstOctet := 0
	for _, c := range parts[0] {
		if c >= '0' && c <= '9' {
			firstOctet = firstOctet*10 + int(c-'0')
		}
	}
	if firstOctet >= 10 && firstOctet <= 11 {
		return false
	}
	if firstOctet == 192 && parts[1] == "168" {
		return false
	}
	if firstOctet == 172 {
		secondOctet := 0
		for _, c := range parts[1] {
			if c >= '0' && c <= '9' {
				secondOctet = secondOctet*10 + int(c-'0')
			}
		}
		if secondOctet >= 16 && secondOctet <= 31 {
			return false
		}
	}
	return true
}

func (a *LateralMovementAnalyzer) extractTargetFromCommand(message string) string {
	return ""
}

func (a *LateralMovementAnalyzer) detectLateralMovement(analysis *LateralMovementAnalysis) []*LateralMovementFinding {
	return analysis.Findings
}

func (a *LateralMovementAnalyzer) calculateScore(severity string) float64 {
	switch severity {
	case "critical":
		return 90
	case "high":
		return 75
	case "medium":
		return 50
	case "low":
		return 25
	default:
		return 50
	}
}

func (a *LateralMovementAnalyzer) generateSummary(analysis *LateralMovementAnalysis) string {
	return "Lateral Movement Analysis: " +
		" RDP=" + itoa(analysis.RDPConnections) +
		" PSExec=" + itoa(analysis.PSExecEvents) +
		" WMI=" + itoa(analysis.WMIEvents) +
		" Total=" + itoa(analysis.TotalEvents)
}

func itoa(i int) string {
	return string(rune('0'+i/100000%10)) + string(rune('0'+i/10000%10)) + string(rune('0'+i/1000%10)) + string(rune('0'+i/100%10)) + string(rune('0'+i/10%10)) + string(rune('0'+i%10))
}
