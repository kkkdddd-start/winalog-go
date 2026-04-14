package commands

import (
	"encoding/json"
	"fmt"
	"os"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/analyzers"
	"github.com/kkkdddd-start/winalog-go/internal/correlation"
	"github.com/kkkdddd-start/winalog-go/internal/rules"
	"github.com/kkkdddd-start/winalog-go/internal/rules/builtin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/spf13/cobra"
)

var correlateCmd = &cobra.Command{
	Use:   "correlate",
	Short: "Run correlation analysis",
	Long:  `Execute correlation rules to detect attack chains.`,
	RunE:  runCorrelate,
}

var correlateFlags struct {
	timeWindow string
	rules      []string
	format     string
	output     string
}

func init() {
	correlateCmd.Flags().StringVar(&correlateFlags.timeWindow, "time-window", "24h", "Time window for correlation")
	correlateCmd.Flags().StringSliceVar(&correlateFlags.rules, "rules", nil, "Specific rules to run")
	correlateCmd.Flags().StringVar(&correlateFlags.format, "format", "table", "Output format: table, json")
	correlateCmd.Flags().StringVarP(&correlateFlags.output, "output", "o", "", "Output file")
}

func runCorrelate(cmd *cobra.Command, args []string) error {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	engine := correlation.NewEngine()

	timeWindow, err := parseDuration(correlateFlags.timeWindow)
	if err != nil {
		return fmt.Errorf("invalid time window: %w", err)
	}

	startTime := time.Now().Add(-timeWindow)
	endTime := time.Now()

	rows, err := db.Query(`
		SELECT id, timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id
		FROM events WHERE timestamp >= ? AND timestamp <= ? ORDER BY timestamp`,
		startTime.Format(time.RFC3339), endTime.Format(time.RFC3339))
	if err != nil {
		return fmt.Errorf("failed to query events: %w", err)
	}
	defer rows.Close()

	var events []*types.Event
	for rows.Next() {
		event, err := types.ScanEvent(rows)
		if err != nil {
			continue
		}
		events = append(events, event)
	}

	if len(events) == 0 {
		fmt.Println("No events found in time window")
		return nil
	}

	engine.LoadEvents(events)

	correlationRules := builtin.GetCorrelationRules()
	if len(correlateFlags.rules) > 0 {
		var filtered []*rules.CorrelationRule
		for _, r := range correlationRules {
			for _, name := range correlateFlags.rules {
				if r.Name == name {
					filtered = append(filtered, r)
					break
				}
			}
		}
		correlationRules = filtered
	}

	results, err := engine.Analyze(nil, correlationRules)
	if err != nil {
		return fmt.Errorf("failed to run correlation: %w", err)
	}

	if len(results) == 0 {
		fmt.Println("No correlation results found")
		return nil
	}

	switch correlateFlags.format {
	case "json":
		data, _ := json.MarshalIndent(results, "", "  ")
		if correlateFlags.output != "" {
			os.WriteFile(correlateFlags.output, data, 0644)
			fmt.Printf("Results saved to %s\n", correlateFlags.output)
		} else {
			fmt.Println(string(data))
		}
	default:
		fmt.Printf("%-20s %-10s %-15s %s\n", "RuleName", "Severity", "Events", "TimeRange")
		fmt.Println("-------------------- ---------- --------------- ----------------------------------------")
		for _, r := range results {
			timeRange := fmt.Sprintf("%s - %s",
				r.StartTime.Format("2006-01-02 15:04"),
				r.EndTime.Format("2006-01-02 15:04"))
			fmt.Printf("%-20s %-10s %-15d %s\n",
				r.RuleName, r.Severity, len(r.Events), timeRange)
		}
		fmt.Printf("\nTotal: %d correlation results\n", len(results))
	}

	return nil
}

var analyzeCmd = &cobra.Command{
	Use:   "analyze [subcommand]",
	Short: "Run specialized analyzers",
	Long:  `Run specialized analyzers for specific threat detection.`,
}

var analyzeBruteForceCmd = &cobra.Command{
	Use:   "brute-force",
	Short: "Detect brute force attacks",
	RunE:  runAnalyzeBruteForce,
}

var analyzeLoginCmd = &cobra.Command{
	Use:   "login",
	Short: "Analyze login activity",
	RunE:  runAnalyzeLogin,
}

var analyzeKerberosCmd = &cobra.Command{
	Use:   "kerberos",
	Short: "Analyze Kerberos activity",
	RunE:  runAnalyzeKerberos,
}

var analyzePowerShellCmd = &cobra.Command{
	Use:   "powershell",
	Short: "Analyze PowerShell activity",
	RunE:  runAnalyzePowerShell,
}

var analyzeFlags struct {
	hours  int
	format string
	output string
}

func init() {
	analyzeCmd.AddCommand(analyzeBruteForceCmd)
	analyzeCmd.AddCommand(analyzeLoginCmd)
	analyzeCmd.AddCommand(analyzeKerberosCmd)
	analyzeCmd.AddCommand(analyzePowerShellCmd)

	analyzeBruteForceCmd.Flags().IntVar(&analyzeFlags.hours, "hours", 24, "Time window in hours")
	analyzeBruteForceCmd.Flags().StringVar(&analyzeFlags.format, "format", "table", "Output format: table, json")
	analyzeBruteForceCmd.Flags().StringVarP(&analyzeFlags.output, "output", "o", "", "Output file")

	analyzeLoginCmd.Flags().IntVar(&analyzeFlags.hours, "hours", 24, "Time window in hours")
	analyzeLoginCmd.Flags().StringVar(&analyzeFlags.format, "format", "table", "Output format: table, json")
	analyzeLoginCmd.Flags().StringVarP(&analyzeFlags.output, "output", "o", "", "Output file")

	analyzeKerberosCmd.Flags().IntVar(&analyzeFlags.hours, "hours", 24, "Time window in hours")
	analyzeKerberosCmd.Flags().StringVar(&analyzeFlags.format, "format", "table", "Output format: table, json")
	analyzeKerberosCmd.Flags().StringVarP(&analyzeFlags.output, "output", "o", "", "Output file")

	analyzePowerShellCmd.Flags().IntVar(&analyzeFlags.hours, "hours", 24, "Time window in hours")
	analyzePowerShellCmd.Flags().StringVar(&analyzeFlags.format, "format", "table", "Output format: table, json")
	analyzePowerShellCmd.Flags().StringVarP(&analyzeFlags.output, "output", "o", "", "Output file")
}

func getEventsForAnalysis(hours int) ([]*types.Event, error) {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return nil, err
	}
	defer db.Close()

	startTime := time.Now().Add(-time.Duration(hours) * time.Hour)

	rows, err := db.Query(`
		SELECT id, timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id
		FROM events WHERE timestamp >= ? ORDER BY timestamp`,
		startTime.Format(time.RFC3339))
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var events []*types.Event
	for rows.Next() {
		event, err := types.ScanEvent(rows)
		if err != nil {
			continue
		}
		events = append(events, event)
	}

	return events, nil
}

func runAnalyzerWithResult(name string, analyzer analyzers.Analyzer, hours int) error {
	events, err := getEventsForAnalysis(hours)
	if err != nil {
		return fmt.Errorf("failed to get events: %w", err)
	}

	if len(events) == 0 {
		fmt.Println("No events found in time window")
		return nil
	}

	result, err := analyzer.Analyze(events)
	if err != nil {
		return fmt.Errorf("failed to run %s analysis: %w", name, err)
	}

	switch analyzeFlags.format {
	case "json":
		data, _ := json.MarshalIndent(result, "", "  ")
		if analyzeFlags.output != "" {
			os.WriteFile(analyzeFlags.output, data, 0644)
			fmt.Printf("Results saved to %s\n", analyzeFlags.output)
		} else {
			fmt.Println(string(data))
		}
	default:
		fmt.Printf("=== %s Analysis ===\n", name)
		fmt.Printf("Type:     %s\n", result.Type)
		fmt.Printf("Severity: %s\n", result.Severity)
		fmt.Printf("Score:    %.2f\n", result.Score)
		fmt.Printf("Summary:  %s\n", result.Summary)

		if len(result.Findings) > 0 {
			fmt.Printf("\nFindings (%d):\n", len(result.Findings))
			for i, f := range result.Findings {
				fmt.Printf("  [%d] %s (Severity: %s, Score: %.1f)\n", i+1, f.Description, f.Severity, f.Score)
				if f.RuleName != "" {
					fmt.Printf("      Rule: %s\n", f.RuleName)
				}
				if f.MitreAttack != "" {
					fmt.Printf("      MITRE: %s\n", f.MitreAttack)
				}
			}
		}
	}

	return nil
}

func runAnalyzeBruteForce(cmd *cobra.Command, args []string) error {
	analyzer := analyzers.NewBruteForceAnalyzer()
	return runAnalyzerWithResult("Brute Force Detection", analyzer, analyzeFlags.hours)
}

func runAnalyzeLogin(cmd *cobra.Command, args []string) error {
	analyzer := analyzers.NewLoginAnalyzer()
	return runAnalyzerWithResult("Login Activity", analyzer, analyzeFlags.hours)
}

func runAnalyzeKerberos(cmd *cobra.Command, args []string) error {
	analyzer := analyzers.NewKerberosAnalyzer()
	return runAnalyzerWithResult("Kerberos Activity", analyzer, analyzeFlags.hours)
}

func runAnalyzePowerShell(cmd *cobra.Command, args []string) error {
	analyzer := analyzers.NewPowerShellAnalyzer()
	return runAnalyzerWithResult("PowerShell Activity", analyzer, analyzeFlags.hours)
}

func parseDuration(s string) (time.Duration, error) {
	return time.ParseDuration(s)
}
