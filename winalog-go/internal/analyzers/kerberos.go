package analyzers

import (
	"strconv"
	"strings"
	"time"

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
	TGTRequests    int
	TGSRequests    int
	GoldenTickets  int
	SilverTickets  int
	TicketWarnings int
	Kerberoasting  int
	FailedPreauth  int
	Anomalies      []*KerberosAnomaly
}

type KerberosAnomaly struct {
	Type        string
	User        string
	Time        time.Time
	SourceIP    string
	Severity    string
	Description string
	TicketType  string
	Lifetime    int
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
	analysis := &KerberosAnalysis{
		Anomalies: make([]*KerberosAnomaly, 0),
	}

	for _, e := range events {
		switch e.EventID {
		case 4768:
			analysis.TGTRequests++
			if a.isGoldenTicket(e) {
				analysis.GoldenTickets++
				analysis.Anomalies = append(analysis.Anomalies, &KerberosAnomaly{
					Type:        "Golden Ticket",
					User:        a.getTargetUser(e),
					Time:        e.Timestamp,
					SourceIP:    a.getSourceIP(e),
					Severity:    "critical",
					Description: "TGT with suspicious lifetime or encryption detected",
					TicketType:  "TGT",
					Lifetime:    a.getTicketLifetime(e),
				})
			}

		case 4769:
			analysis.TGSRequests++
			if a.isKerberoasting(e) {
				analysis.Kerberoasting++
				analysis.Anomalies = append(analysis.Anomalies, &KerberosAnomaly{
					Type:        "Kerberoasting",
					User:        a.getTargetUser(e),
					Time:        e.Timestamp,
					SourceIP:    a.getSourceIP(e),
					Severity:    "high",
					Description: "TGS request for user account - possible Kerberoasting attack",
					TicketType:  "TGS",
				})
			}
			if a.isSilverTicket(e) {
				analysis.SilverTickets++
				analysis.Anomalies = append(analysis.Anomalies, &KerberosAnomaly{
					Type:        "Silver Ticket",
					User:        a.getTargetUser(e),
					Time:        e.Timestamp,
					SourceIP:    a.getSourceIP(e),
					Severity:    "high",
					Description: "TGS request with suspicious service - possible Silver Ticket",
					TicketType:  "TGS",
				})
			}

		case 4771:
			analysis.FailedPreauth++
			if a.isSuspiciousPreauth(e) {
				analysis.TicketWarnings++
				analysis.Anomalies = append(analysis.Anomalies, &KerberosAnomaly{
					Type:        "Failed Preauthentication",
					User:        a.getTargetUser(e),
					Time:        e.Timestamp,
					SourceIP:    a.getSourceIP(e),
					Severity:    "medium",
					Description: "Failed Kerberos preauthentication - possible brute force or AS-REP Roasting",
					TicketType:  "AS-REQ",
				})
			}

		case 4770:
			analysis.TicketWarnings++
			analysis.Anomalies = append(analysis.Anomalies, &KerberosAnomaly{
				Type:        "AS-REP Ticket Modification",
				User:        a.getTargetUser(e),
				Time:        e.Timestamp,
				SourceIP:    a.getSourceIP(e),
				Severity:    "high",
				Description: "AS-REP ticket modification detected - possible AS-REP Roasting",
				TicketType:  "AS-REP",
			})
		}
	}

	return analysis
}

func (a *KerberosAnalyzer) getTargetUser(e *types.Event) string {
	if e.User != nil && *e.User != "" {
		return *e.User
	}

	user := a.extractFromMessage(e.Message, "Target User:", "TargetUserName:")
	if user != "" {
		return user
	}

	return a.extractFromMessage(e.Message, "Account Name:", "AccountName:")
}

func (a *KerberosAnalyzer) getSourceIP(e *types.Event) string {
	if e.IPAddress != nil && *e.IPAddress != "" && *e.IPAddress != "-" {
		return *e.IPAddress
	}

	return a.extractFromMessage(e.Message, "IpAddress:", "Client Address:")
}

func (a *KerberosAnalyzer) getTicketLifetime(e *types.Event) int {
	lifetimeStr := a.extractFromMessage(e.Message, "TicketLifetime:", "Lifetime:")
	if lifetimeStr != "" {
		if lifetime, err := strconv.Atoi(lifetimeStr); err == nil {
			return lifetime
		}
	}
	return 0
}

func (a *KerberosAnalyzer) extractFromMessage(message, pattern1, pattern2 string) string {
	patterns := []string{pattern1, pattern2}
	for _, pattern := range patterns {
		idx := strings.Index(message, pattern)
		if idx >= 0 {
			valuePart := message[idx+len(pattern):]
			endIdx := strings.IndexAny(valuePart, "\r\n\t,")
			if endIdx > 0 {
				return strings.TrimSpace(valuePart[:endIdx])
			}
			return strings.TrimSpace(valuePart)
		}
	}
	return ""
}

func (a *KerberosAnalyzer) isGoldenTicket(e *types.Event) bool {
	lifetime := a.getTicketLifetime(e)

	if lifetime > 10*60*60*1000 {
		return true
	}

	user := strings.ToLower(a.getTargetUser(e))
	if strings.Contains(user, "krbtgt") {
		return true
	}

	return false
}

func (a *KerberosAnalyzer) isSilverTicket(e *types.Event) bool {
	serviceName := a.extractServiceName(e)

	if serviceName == "" {
		return false
	}

	suspiciousServices := []string{
		"cifs", "smb", "ldap", "http", "host",
		"rpcss", "mssql", "mysql", "postgres",
	}

	serviceLower := strings.ToLower(serviceName)
	for _, suspicious := range suspiciousServices {
		if strings.Contains(serviceLower, suspicious) {
			return true
		}
	}

	return false
}

func (a *KerberosAnalyzer) extractServiceName(e *types.Event) string {
	serviceName := a.extractFromMessage(e.Message, "ServiceName:", "Service Short Name:")
	if serviceName != "" {
		return serviceName
	}

	return a.extractFromMessage(e.Message, "Service:", "Service Name:")
}

func (a *KerberosAnalyzer) isKerberoasting(e *types.Event) bool {
	serviceName := a.extractServiceName(e)
	if serviceName == "" {
		return false
	}

	if !strings.Contains(serviceName, "$") {
		return false
	}

	return true
}

func (a *KerberosAnalyzer) isSuspiciousPreauth(e *types.Event) bool {
	sourceIP := a.getSourceIP(e)
	if sourceIP == "" || sourceIP == "-" || sourceIP == "::1" || sourceIP == "127.0.0.1" {
		return true
	}

	if strings.HasPrefix(sourceIP, "192.168.") ||
		strings.HasPrefix(sourceIP, "10.") ||
		strings.HasPrefix(sourceIP, "172.") {
		return false
	}

	return true
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
			Metadata: map[string]interface{}{
				"count": analysis.GoldenTickets,
			},
		})
	}

	if analysis.SilverTickets > 0 {
		findings = append(findings, Finding{
			Description: "Possible Silver Ticket attack detected",
			RuleName:    "Kerberos - Silver Ticket",
			MitreAttack: "T1558.002",
			Severity:    "high",
			Score:       85,
			Metadata: map[string]interface{}{
				"count": analysis.SilverTickets,
			},
		})
	}

	if analysis.Kerberoasting > 0 {
		findings = append(findings, Finding{
			Description: "Kerberoasting attack detected - TGS requests for service accounts",
			RuleName:    "Kerberos - Kerberoasting",
			MitreAttack: "T1558.003",
			Severity:    "high",
			Score:       80,
			Metadata: map[string]interface{}{
				"count": analysis.Kerberoasting,
			},
		})
	}

	if analysis.FailedPreauth > 10 {
		findings = append(findings, Finding{
			Description: "High number of failed Kerberos preauthentication attempts",
			RuleName:    "Kerberos - Failed Preauth Flood",
			MitreAttack: "T1558.004",
			Severity:    "medium",
			Score:       60,
			Metadata: map[string]interface{}{
				"count": analysis.FailedPreauth,
			},
		})
	}

	return findings
}

func (a *KerberosAnalyzer) generateSummary(analysis *KerberosAnalysis) string {
	var sb strings.Builder
	sb.WriteString("Kerberos Analysis Summary:\n")
	sb.WriteString("  TGT Requests: ")
	sb.WriteString(strconv.Itoa(analysis.TGTRequests))
	sb.WriteString("\n  TGS Requests: ")
	sb.WriteString(strconv.Itoa(analysis.TGSRequests))
	sb.WriteString("\n  Failed Preauth: ")
	sb.WriteString(strconv.Itoa(analysis.FailedPreauth))
	sb.WriteString("\n  Golden Tickets: ")
	sb.WriteString(strconv.Itoa(analysis.GoldenTickets))
	sb.WriteString("\n  Silver Tickets: ")
	sb.WriteString(strconv.Itoa(analysis.SilverTickets))
	sb.WriteString("\n  Kerberoasting: ")
	sb.WriteString(strconv.Itoa(analysis.Kerberoasting))
	sb.WriteString("\n  Ticket Warnings: ")
	sb.WriteString(strconv.Itoa(analysis.TicketWarnings))
	return sb.String()
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
