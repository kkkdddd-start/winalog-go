package persistence

import (
	"context"
	"strings"
	"time"
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

	return consumers, nil
}

func (d *WMIPersistenceDetector) enumerateFilters() ([]WMIEventFilter, error) {
	filters := make([]WMIEventFilter, 0)

	return filters, nil
}

func (d *WMIPersistenceDetector) enumerateBindings() ([]WMIBinding, error) {
	bindings := make([]WMIBinding, 0)

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
