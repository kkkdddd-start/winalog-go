package commands

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"strings"

	"github.com/kkkdddd-start/winalog-go/internal/persistence"
	"github.com/spf13/cobra"
)

var persistenceCmd = &cobra.Command{
	Use:   "persistence [flags] <subcommand>",
	Short: "Detect Windows persistence mechanisms",
	Long: `Detect Windows persistence mechanisms based on MITRE ATT&CK techniques.

Supported techniques:
  - T1546.001: Accessibility Features
  - T1546.003: WMI Event Subscription
  - T1546.010: AppInit_DLLs
  - T1546.012: IFEO Debugger
  - T1546.015: COM Hijacking
  - T1546.016: Startup Folder
  - T1547.001/016: Registry Run Keys
  - T1053: Scheduled Task
  - T1543.003: Windows Service

Examples:
  winalog persistence detect
  winalog persistence detect --category registry
  winalog persistence detect --technique T1546.001
  winalog persistence detect --output detections.json`,
	RunE: runPersistence,
}

var persistenceFlags struct {
	category  string
	technique string
	output    string
	format    string
}

func init() {
	persistenceCmd.Flags().StringVar(&persistenceFlags.category, "category", "", "Filter by category (Registry, WMI, COM, Service, ScheduledTask)")
	persistenceCmd.Flags().StringVar(&persistenceFlags.technique, "technique", "", "Filter by MITRE technique (e.g., T1546.001)")
	persistenceCmd.Flags().StringVarP(&persistenceFlags.output, "output", "o", "", "Output file path")
	persistenceCmd.Flags().StringVarP(&persistenceFlags.format, "format", "f", "json", "Output format (json, csv, text)")
}

func runPersistence(cmd *cobra.Command, args []string) error {
	ctx := context.Background()

	var result *persistence.DetectionResult

	if persistenceFlags.technique != "" {
		result = persistence.DetectByTechnique(ctx, persistence.Technique(persistenceFlags.technique))
	} else if persistenceFlags.category != "" {
		result = persistence.DetectByCategory(ctx, persistenceFlags.category)
	} else {
		result = persistence.RunAllDetectors(ctx)
	}

	if result == nil {
		result = &persistence.DetectionResult{
			Detections: []*persistence.Detection{},
		}
	}

	if persistenceFlags.output != "" {
		return writeOutput(result, persistenceFlags.output, persistenceFlags.format)
	}

	printResult(result)
	return nil
}

func printResult(result *persistence.DetectionResult) {
	if len(result.Detections) == 0 {
		fmt.Println("No persistence mechanisms detected.")
		return
	}

	summary := result.Summary()
	fmt.Printf("\n=== Persistence Detection Results ===\n\n")
	fmt.Printf("Total Detections: %d\n", result.TotalCount)
	fmt.Printf("Duration: %v\n\n", result.Duration)

	bySeverity := summary["by_severity"].(map[string]int)
	fmt.Println("By Severity:")
	for sev, count := range bySeverity {
		if count > 0 {
			fmt.Printf("  %s: %d\n", sev, count)
		}
	}
	fmt.Println()

	byCategory := summary["by_category"].(map[string]int)
	fmt.Println("By Category:")
	for cat, count := range byCategory {
		if count > 0 {
			fmt.Printf("  %s: %d\n", cat, count)
		}
	}
	fmt.Println()

	if persistenceFlags.format == "text" {
		printDetectionsText(result.Detections)
	} else {
		printDetectionsJSON(result.Detections)
	}
}

func printDetectionsJSON(detections []*persistence.Detection) {
	data, err := json.MarshalIndent(detections, "", "  ")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error marshaling JSON: %v\n", err)
		return
	}
	fmt.Println(string(data))
}

func printDetectionsText(detections []*persistence.Detection) {
	for i, det := range detections {
		fmt.Printf("[%d] %s\n", i+1, det.Title)
		fmt.Printf("    Technique: %s\n", det.Technique)
		fmt.Printf("    Severity: %s\n", det.Severity)
		fmt.Printf("    Category: %s\n", det.Category)
		if det.Evidence.Key != "" {
			fmt.Printf("    Registry Key: %s\n", det.Evidence.Key)
		}
		if det.Evidence.Value != "" {
			fmt.Printf("    Value: %s\n", det.Evidence.Value)
		}
		if det.Evidence.FilePath != "" {
			fmt.Printf("    File: %s\n", det.Evidence.FilePath)
		}
		fmt.Printf("    Recommended Action: %s\n", det.RecommendedAction)
		fmt.Println()
	}
}

func writeOutput(result *persistence.DetectionResult, outputPath, format string) error {
	var data []byte
	var err error

	switch format {
	case "json":
		data, err = json.MarshalIndent(result, "", "  ")
	case "csv":
		data, err = exportToCSV(result.Detections)
	default:
		data, err = json.MarshalIndent(result, "", "  ")
	}

	if err != nil {
		return fmt.Errorf("error formatting output: %w", err)
	}

	err = os.WriteFile(outputPath, data, 0644)
	if err != nil {
		return fmt.Errorf("error writing output file: %w", err)
	}

	fmt.Printf("Results written to: %s\n", outputPath)
	return nil
}

func exportToCSV(detections []*persistence.Detection) ([]byte, error) {
	var sb strings.Builder

	sb.WriteString("ID,Time,Technique,Category,Severity,Title,Description,Key,Value,FilePath,RecommendedAction\n")

	for _, det := range detections {
		sb.WriteString(fmt.Sprintf("%s,%s,%s,%s,%s,\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\"\n",
			det.ID,
			det.Time.Format("2006-01-02 15:04:05"),
			det.Technique,
			det.Category,
			det.Severity,
			escapeCSV(det.Title),
			escapeCSV(det.Description),
			escapeCSV(det.Evidence.Key),
			escapeCSV(det.Evidence.Value),
			escapeCSV(det.Evidence.FilePath),
			escapeCSV(det.RecommendedAction),
		))
	}

	return []byte(sb.String()), nil
}

func escapeCSV(s string) string {
	s = strings.ReplaceAll(s, "\"", "\"\"")
	s = strings.ReplaceAll(s, "\n", " ")
	s = strings.ReplaceAll(s, "\r", "")
	return s
}

var detectCmd = &cobra.Command{
	Use:   "detect",
	Short: "Run all persistence detectors",
	Long:  `Run all persistence mechanism detectors.`,
	RunE: func(cmd *cobra.Command, args []string) error {
		return runPersistence(cmd, args)
	},
}

func init() {
	persistenceCmd.AddCommand(detectCmd)
}
