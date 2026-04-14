package builtin

import (
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/rules"
)

func GetAlertRules() []*rules.AlertRule {
	return []*rules.AlertRule{
		{
			Name:        "Failed Login",
			Description: "Detects failed login attempts",
			Enabled:     true,
			Severity:    rules.SeverityMedium,
			Score:       50,
			MitreAttack: "T1110",
			Filter: &rules.Filter{
				EventIDs: []int32{4625},
				Levels:   []int{2},
			},
			Message: "Failed login detected for user {{.User}} on {{.Computer}}",
			Tags:    []string{"authentication", "brute-force"},
		},
		{
			Name:        "Successful Login",
			Description: "Detects successful login events",
			Enabled:     true,
			Severity:    rules.SeverityInfo,
			Score:       10,
			Filter: &rules.Filter{
				EventIDs: []int32{4624},
				Levels:   []int{4},
			},
			Message: "Successful login by {{.User}} on {{.Computer}}",
			Tags:    []string{"authentication", "login"},
		},
		{
			Name:        "Privilege Escalation",
			Description: "Detects privilege escalation via special privileges assigned",
			Enabled:     true,
			Severity:    rules.SeverityHigh,
			Score:       80,
			MitreAttack: "T1548",
			Filter: &rules.Filter{
				EventIDs: []int32{4672},
				Levels:   []int{0},
			},
			Message: "Special privileges assigned to {{.User}} on {{.Computer}}",
			Tags:    []string{"privilege", "escalation"},
		},
		{
			Name:        "Suspicious Process Creation",
			Description: "Detects suspicious process creation events",
			Enabled:     true,
			Severity:    rules.SeverityHigh,
			Score:       75,
			MitreAttack: "T1055",
			Filter: &rules.Filter{
				EventIDs: []int32{4688},
				Levels:   []int{4},
			},
			Conditions: &rules.Conditions{
				Any: []*rules.Condition{
					{Field: "message", Operator: "contains", Value: "powershell.exe"},
					{Field: "message", Operator: "contains", Value: "cmd.exe"},
					{Field: "message", Operator: "contains", Value: "wscript.exe"},
					{Field: "message", Operator: "contains", Value: "cscript.exe"},
				},
			},
			Message: "Suspicious process created: {{.Message}}",
			Tags:    []string{"process", "suspicious"},
		},
		{
			Name:        "Scheduled Task Created",
			Description: "Detects scheduled task creation",
			Enabled:     true,
			Severity:    rules.SeverityMedium,
			Score:       50,
			MitreAttack: "T1053",
			Filter: &rules.Filter{
				EventIDs: []int32{4698},
				Levels:   []int{4},
			},
			Message: "Scheduled task created: {{.Message}}",
			Tags:    []string{"persistence", "scheduled-task"},
		},
		{
			Name:        "Service Created",
			Description: "Detects service creation",
			Enabled:     true,
			Severity:    rules.SeverityMedium,
			Score:       50,
			MitreAttack: "T1543",
			Filter: &rules.Filter{
				EventIDs: []int32{4697},
				Levels:   []int{4},
			},
			Message: "Service created: {{.Message}}",
			Tags:    []string{"persistence", "service"},
		},
		{
			Name:        "PowerShell Execution",
			Description: "Detects PowerShell execution",
			Enabled:     true,
			Severity:    rules.SeverityMedium,
			Score:       60,
			MitreAttack: "T1059",
			Filter: &rules.Filter{
				EventIDs: []int32{4688},
				Levels:   []int{4},
			},
			Conditions: &rules.Conditions{
				Any: []*rules.Condition{
					{Field: "message", Operator: "contains", Value: "powershell.exe"},
				},
			},
			Message: "PowerShell execution detected",
			Tags:    []string{"scripting", "powershell"},
		},
		{
			Name:        "Network Connection",
			Description: "Detects network connection from suspicious process",
			Enabled:     true,
			Severity:    rules.SeverityLow,
			Score:       30,
			MitreAttack: "T1046",
			Filter: &rules.Filter{
				EventIDs: []int32{3},
				Levels:   []int{4},
			},
			Message: "Network connection detected",
			Tags:    []string{"network", "connection"},
		},
		{
			Name:        "Account Discovery",
			Description: "Detects account discovery via net user command",
			Enabled:     true,
			Severity:    rules.SeverityLow,
			Score:       30,
			MitreAttack: "T1087",
			Filter: &rules.Filter{
				EventIDs: []int32{4688},
				Levels:   []int{4},
			},
			Conditions: &rules.Conditions{
				Any: []*rules.Condition{
					{Field: "message", Operator: "contains", Value: "net.exe"},
					{Field: "message", Operator: "contains", Value: "net1.exe"},
				},
			},
			Message: "Account discovery command executed",
			Tags:    []string{"discovery", "account"},
		},
		{
			Name:        "Kerberoasting",
			Description: "Detects Kerberoasting attack pattern",
			Enabled:     true,
			Severity:    rules.SeverityHigh,
			Score:       80,
			MitreAttack: "T1558",
			Filter: &rules.Filter{
				EventIDs: []int32{4769},
				Levels:   []int{4},
			},
			Message: "Kerberos TGS request detected - possible Kerberoasting",
			Tags:    []string{"kerberos", "attack"},
		},
	}
}

func GetCorrelationRules() []*rules.CorrelationRule {
	return []*rules.CorrelationRule{
		{
			Name:        "Brute Force Attack",
			Description: "Detects brute force attack pattern",
			Enabled:     true,
			Severity:    rules.SeverityHigh,
			Patterns: []*rules.Pattern{
				{EventID: 4625},
				{EventID: 4625},
				{EventID: 4625},
			},
			TimeWindow:  5 * time.Minute,
			Join:        "user",
			MitreAttack: "T1110",
		},
		{
			Name:        "Lateral Movement",
			Description: "Detects lateral movement via SMB",
			Enabled:     true,
			Severity:    rules.SeverityCritical,
			Patterns: []*rules.Pattern{
				{EventID: 4624},
				{EventID: 4648},
			},
			TimeWindow:  1 * time.Minute,
			Join:        "user",
			MitreAttack: "T1021",
		},
		{
			Name:        "Privilege Escalation Chain",
			Description: "Detects privilege escalation chain",
			Enabled:     true,
			Severity:    rules.SeverityHigh,
			Patterns: []*rules.Pattern{
				{EventID: 4672},
				{EventID: 4688},
			},
			TimeWindow:  1 * time.Minute,
			Join:        "user",
			MitreAttack: "T1548",
		},
		{
			Name:        "Persistence Chain",
			Description: "Detects persistence mechanism creation",
			Enabled:     true,
			Severity:    rules.SeverityHigh,
			Patterns: []*rules.Pattern{
				{EventID: 4688},
				{EventID: 4698},
			},
			TimeWindow:  5 * time.Minute,
			Join:        "user",
			MitreAttack: "T1053",
		},
	}
}

type MITREMapping struct {
	Tactic    string
	Technique string
}

func GetMITREMappings() map[string]MITREMapping {
	return map[string]MITREMapping{
		"T1110": {Tactic: "Credential Access", Technique: "Brute Force"},
		"T1548": {Tactic: "Privilege Escalation", Technique: "Abuse Elevation Control Mechanism"},
		"T1055": {Tactic: "Defense Evasion", Technique: "Process Injection"},
		"T1053": {Tactic: "Persistence", Technique: "Scheduled Task/Job"},
		"T1543": {Tactic: "Persistence", Technique: "Create/Modify System Process"},
		"T1059": {Tactic: "Execution", Technique: "Command and Scripting Interpreter"},
		"T1046": {Tactic: "Discovery", Technique: "Network Service Scanning"},
		"T1087": {Tactic: "Discovery", Technique: "Account Discovery"},
		"T1558": {Tactic: "Credential Access", Technique: "Steal or Forge Kerberos Tickets"},
		"T1021": {Tactic: "Lateral Movement", Technique: "Remote Services"},
	}
}

func GetExplanation(ruleName string) string {
	explanations := map[string]string{
		"Failed Login":                "Failed login attempts may indicate brute force attacks or credential guessing. Check if the source IP is suspicious and if multiple accounts are targeted.",
		"Successful Login":            "Successful login events are important for tracking user activity and identifying potential account compromise.",
		"Privilege Escalation":        "Special privileges assigned to users should be monitored. Excessive privileges can lead to privilege escalation attacks.",
		"Suspicious Process Creation": "Suspicious processes may indicate malware execution or attacker activity. Check the process lineage and parent process.",
		"Scheduled Task Created":      "Scheduled tasks are a common persistence mechanism used by malware and attackers.",
		"Service Created":             "New services can be used for persistence or to run malicious code with higher privileges.",
		"PowerShell Execution":        "PowerShell is often used by attackers for execution and lateral movement due to its powerful capabilities.",
		"Network Connection":          "Network connections from suspicious processes may indicate data exfiltration or C2 communication.",
		"Account Discovery":           "Account discovery commands are often run before further attacks to understand the environment.",
		"Kerberoasting":               "Kerberoasting attacks request Kerberos TGS tickets which can be cracked offline to obtain credentials.",
		"Brute Force Attack":          "Multiple failed logins followed by a successful login may indicate successful brute force attack.",
		"Lateral Movement":            "Remote execution followed by login events may indicate lateral movement in the network.",
		"Privilege Escalation Chain":  "Privilege escalation followed by suspicious process execution may indicate privilege abuse.",
		"Persistence Chain":           "Process execution followed by persistence mechanism creation may indicate malware installation.",
	}
	return explanations[ruleName]
}

func GetRecommendation(ruleName string) string {
	recommendations := map[string]string{
		"Failed Login":                "Review failed login sources, implement account lockout policies, enable MFA.",
		"Successful Login":            "Review login locations, enable MFA for sensitive accounts.",
		"Privilege Escalation":        "Review special privileges, implement least privilege principle.",
		"Suspicious Process Creation": "Investigate process lineage, block suspicious processes at endpoint.",
		"Scheduled Task Created":      "Review new scheduled tasks, block unauthorized task creation.",
		"Service Created":             "Review new services, implement service whitelisting.",
		"PowerShell Execution":        "Restrict PowerShell execution, enable script logging.",
		"Network Connection":          "Block suspicious network connections at firewall.",
		"Account Discovery":           "Monitor for reconnaissance activity, restrict net command usage.",
		"Kerberoasting":               "Enable AES encryption, monitor for unusual TGS requests.",
	}
	return recommendations[ruleName]
}

func IsSuspiciousKeyword(message string) bool {
	keywords := []string{
		"mimikatz",
		"pwdump",
		"hashdump",
		"sekurlsa",
		"kerberos::",
		"lsass",
		" Invoke-Mimikatz",
		"Empire",
		"Metasploit",
		"Cobalt Strike",
	}
	messageLower := strings.ToLower(message)
	for _, kw := range keywords {
		if strings.Contains(messageLower, strings.ToLower(kw)) {
			return true
		}
	}
	return false
}

func stringsToLower(s []string) []string {
	result := make([]string, len(s))
	for i, v := range s {
		result[i] = strings.ToLower(v)
	}
	return result
}

func stringsContains(s, substr string) bool {
	return strings.Contains(strings.ToLower(s), strings.ToLower(substr))
}
