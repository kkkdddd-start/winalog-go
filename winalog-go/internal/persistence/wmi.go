//go:build windows

package persistence

import (
	"context"
	"encoding/json"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type WMIPersistenceDetector struct{}

func NewWMIPersistenceDetector() *WMIPersistenceDetector {
	return &WMIPersistenceDetector{}
}

func (d *WMIPersistenceDetector) Name() string {
	return "wmi_persistence_detector"
}

func (d *WMIPersistenceDetector) GetTechnique() Technique {
	return TechniqueT1546003
}

func (d *WMIPersistenceDetector) RequiresAdmin() bool {
	return true
}

type WMIEventConsumer struct {
	Name        string
	Type        string
	CommandLine string
	ScriptFile  string
}

type WMIEventFilter struct {
	Name      string
	Query     string
	Namespace string
}

type WMIBinding struct {
	FilterName   string
	ConsumerName string
	Namespace    string
}

func (d *WMIPersistenceDetector) Detect(ctx context.Context) ([]*Detection, error) {
	detections := make([]*Detection, 0)

	consumers, err := d.enumerateConsumers()
	if err == nil {
		for _, consumer := range consumers {
			det := d.analyzeConsumer(consumer)
			if det != nil {
				detections = append(detections, det)
			}
		}
	}

	filters, err := d.enumerateFilters()
	if err == nil {
		for _, filter := range filters {
			det := d.analyzeFilter(filter)
			if det != nil {
				detections = append(detections, det)
			}
		}
	}

	bindings, err := d.enumerateBindings()
	if err == nil {
		for _, binding := range bindings {
			det := d.analyzeBinding(binding)
			if det != nil {
				detections = append(detections, det)
			}
		}
	}

	return detections, nil
}

func (d *WMIPersistenceDetector) enumerateConsumers() ([]WMIEventConsumer, error) {
	consumers := make([]WMIEventConsumer, 0)

	cmd := `Get-WMIObject -Namespace 'Root\Subscription' -Class CommandLineEventConsumer -ErrorAction SilentlyContinue | ForEach-Object { $_.PSBase | Select-Object -Property Name,__CLASS,CommandLine | ConvertTo-Json -Compress }`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return consumers, result.Error
	}

	output := strings.TrimSpace(result.Output)
	if output == "" {
		return consumers, nil
	}

	lines := strings.Split(output, "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" {
			continue
		}

		var consumer map[string]interface{}
		if err := json.Unmarshal([]byte(line), &consumer); err != nil {
			continue
		}

		wmic := WMIEventConsumer{
			Name: getStringValue(consumer, "Name"),
			Type: getStringValue(consumer, "__CLASS"),
		}

		if cmdLine := getStringValue(consumer, "CommandLine"); cmdLine != "" {
			wmic.CommandLine = cmdLine
		}

		consumers = append(consumers, wmic)
	}

	cmd = `Get-WMIObject -Namespace 'Root\Subscription' -Class ActiveScriptEventConsumer -ErrorAction SilentlyContinue | ForEach-Object { $_.PSBase | Select-Object -Property Name,ScriptFileName,ScriptText | ConvertTo-Json -Compress }`

	result = utils.RunPowerShell(cmd)
	if result.Success() && result.Output != "" {
		lines = strings.Split(strings.TrimSpace(result.Output), "\n")
		for _, line := range lines {
			line = strings.TrimSpace(line)
			if line == "" || line == "null" {
				continue
			}

			var consumer map[string]interface{}
			if err := json.Unmarshal([]byte(line), &consumer); err != nil {
				continue
			}

			wmic := WMIEventConsumer{
				Name:       getStringValue(consumer, "Name"),
				Type:       "ActiveScriptEventConsumer",
				ScriptFile: getStringValue(consumer, "ScriptFileName"),
			}

			consumers = append(consumers, wmic)
		}
	}

	cmd = `Get-WMIObject -Namespace 'Root\Subscription' -Class NTEventLogEventConsumer -ErrorAction SilentlyContinue | ForEach-Object { $_.PSBase | Select-Object -Property Name,Sources,Category | ConvertTo-Json -Compress }`

	result = utils.RunPowerShell(cmd)
	if result.Success() && result.Output != "" {
		lines = strings.Split(strings.TrimSpace(result.Output), "\n")
		for _, line := range lines {
			line = strings.TrimSpace(line)
			if line == "" || line == "null" {
				continue
			}

			var consumer map[string]interface{}
			if err := json.Unmarshal([]byte(line), &consumer); err != nil {
				continue
			}

			wmic := WMIEventConsumer{
				Name: getStringValue(consumer, "Name"),
				Type: "NTEventLogEventConsumer",
			}

			consumers = append(consumers, wmic)
		}
	}

	return consumers, nil
}

func (d *WMIPersistenceDetector) enumerateFilters() ([]WMIEventFilter, error) {
	filters := make([]WMIEventFilter, 0)

	cmd := `Get-WMIObject -Namespace 'Root\Subscription' -Class __EventFilter -ErrorAction SilentlyContinue | ForEach-Object { $_.PSBase | Select-Object -Property Name,Query | ConvertTo-Json -Compress }`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return filters, result.Error
	}

	output := strings.TrimSpace(result.Output)
	if output == "" {
		return filters, nil
	}

	lines := strings.Split(output, "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" {
			continue
		}

		var filter map[string]interface{}
		if err := json.Unmarshal([]byte(line), &filter); err != nil {
			continue
		}

		wf := WMIEventFilter{
			Name:      getStringValue(filter, "Name"),
			Query:     getStringValue(filter, "Query"),
			Namespace: "Root\\Subscription",
		}

		filters = append(filters, wf)
	}

	return filters, nil
}

func (d *WMIPersistenceDetector) enumerateBindings() ([]WMIBinding, error) {
	bindings := make([]WMIBinding, 0)

	cmd := `Get-WMIObject -Namespace 'Root\Subscription' -Class __FilterToConsumerBinding -ErrorAction SilentlyContinue | ForEach-Object { $_.PSBase | Select-Object -Property FilterReference,ConsumerReference | ConvertTo-Json -Compress }`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return bindings, result.Error
	}

	output := strings.TrimSpace(result.Output)
	if output == "" {
		return bindings, nil
	}

	lines := strings.Split(output, "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" {
			continue
		}

		var binding map[string]interface{}
		if err := json.Unmarshal([]byte(line), &binding); err != nil {
			continue
		}

		filterRef := getStringValue(binding, "FilterReference")
		consumerRef := getStringValue(binding, "ConsumerReference")

		filterName := extractWMIPart(filterRef)
		consumerName := extractWMIPart(consumerRef)

		wb := WMIBinding{
			FilterName:   filterName,
			ConsumerName: consumerName,
			Namespace:    "Root\\Subscription",
		}

		bindings = append(bindings, wb)
	}

	return bindings, nil
}

func (d *WMIPersistenceDetector) analyzeConsumer(consumer WMIEventConsumer) *Detection {
	if consumer.CommandLine != "" && d.isSuspiciousCommand(consumer.CommandLine) {
		return &Detection{
			Technique:   TechniqueT1546003,
			Category:    "WMI",
			Severity:    SeverityHigh,
			Time:        time.Now(),
			Title:       "Suspicious WMI Command Line Consumer",
			Description: "A WMI event consumer contains a suspicious command: " + consumer.CommandLine,
			Evidence: Evidence{
				Type:    EvidenceTypeWMI,
				Key:     "CommandLineEventConsumer",
				Command: consumer.CommandLine,
			},
			MITRERef:          []string{"T1546.003"},
			RecommendedAction: "Investigate the command and verify if it is legitimate. WMI consumers can be used for persistent code execution.",
			FalsePositiveRisk: "Medium",
		}
	}

	if consumer.ScriptFile != "" {
		return &Detection{
			Technique:   TechniqueT1546003,
			Category:    "WMI",
			Severity:    SeverityMedium,
			Time:        time.Now(),
			Title:       "WMI Script Consumer Detected",
			Description: "A WMI event consumer is using a script file: " + consumer.ScriptFile,
			Evidence: Evidence{
				Type:    EvidenceTypeWMI,
				Key:     "ActiveScriptEventConsumer",
				Command: consumer.ScriptFile,
			},
			MITRERef:          []string{"T1546.003"},
			RecommendedAction: "Verify the script content and author",
			FalsePositiveRisk: "Medium",
		}
	}

	return nil
}

func (d *WMIPersistenceDetector) analyzeFilter(filter WMIEventFilter) *Detection {
	if filter.Query == "" {
		return nil
	}

	suspiciousKeywords := []string{
		"select * from", "process",
		"logon", "startup",
		"__InstanceModificationEvent",
	}

	queryLower := strings.ToLower(filter.Query)
	for _, keyword := range suspiciousKeywords {
		if strings.Contains(queryLower, strings.ToLower(keyword)) {
			return &Detection{
				Technique:   TechniqueT1546003,
				Category:    "WMI",
				Severity:    SeverityLow,
				Time:        time.Now(),
				Title:       "WMI Event Filter with Process/Startup Query",
				Description: "A WMI event filter contains a potentially suspicious query: " + filter.Query,
				Evidence: Evidence{
					Type:  EvidenceTypeWMI,
					Key:   "EventFilter",
					Value: filter.Query,
				},
				MITRERef:          []string{"T1546.003"},
				RecommendedAction: "Verify the filter is legitimate",
				FalsePositiveRisk: "Medium",
			}
		}
	}

	return nil
}

func (d *WMIPersistenceDetector) analyzeBinding(binding WMIBinding) *Detection {
	if binding.FilterName == "" || binding.ConsumerName == "" {
		return nil
	}

	return &Detection{
		Technique:   TechniqueT1546003,
		Category:    "WMI",
		Severity:    SeverityMedium,
		Time:        time.Now(),
		Title:       "WMI Filter-Consumer Binding Detected",
		Description: "A WMI permanent event subscription has been created. Filter: " + binding.FilterName + ", Consumer: " + binding.ConsumerName,
		Evidence: Evidence{
			Type:  EvidenceTypeWMI,
			Key:   "__FilterToConsumerBinding",
			Value: binding.FilterName + " -> " + binding.ConsumerName,
		},
		MITRERef:          []string{"T1546.003"},
		RecommendedAction: "Investigate the WMI subscription to verify if it is legitimate. Permanent WMI subscriptions can provide persistent code execution.",
		FalsePositiveRisk: "Medium",
	}
}

func (d *WMIPersistenceDetector) isSuspiciousCommand(command string) bool {
	commandLower := strings.ToLower(command)

	suspicious := []string{
		"powershell", "cmd.exe", "wscript", "cscript",
		"rundll32", "regsvr32", "mshta",
		"\\\\unc\\", "\\\\127\\",
		"%temp%", "%appdata%",
		"net user", "net localgroup",
		"mimikatz", "pwdump",
		".ps1", ".vbs", ".js",
	}

	for _, indicator := range suspicious {
		if strings.Contains(commandLower, indicator) {
			return true
		}
	}

	return false
}

func CheckWMIPersistence() []*Detection {
	detections := make([]*Detection, 0)
	detector := NewWMIPersistenceDetector()

	results, _ := detector.Detect(context.Background())
	detections = append(detections, results...)

	return detections
}

func getStringValue(m map[string]interface{}, key string) string {
	if v, ok := m[key]; ok {
		if s, ok := v.(string); ok {
			return s
		}
	}
	return ""
}

func extractWMIPart(ref string) string {
	if ref == "" {
		return ""
	}

	parts := strings.Split(ref, "=")
	if len(parts) > 1 {
		return strings.Trim(parts[1], `"'`)
	}

	return ref
}
