package commands

import (
	"encoding/json"
	"fmt"
	"os"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/alerts"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/spf13/cobra"
)

var alertCmd = &cobra.Command{
	Use:   "alert",
	Short: "Alert management",
	Long:  `Manage and view security alerts`,
}

var alertListCmd = &cobra.Command{
	Use:   "list",
	Short: "List alerts",
	RunE:  runAlertList,
}

var alertShowCmd = &cobra.Command{
	Use:   "show <id>",
	Short: "Show alert details",
	Args:  cobra.ExactArgs(1),
	RunE:  runAlertShow,
}

var alertResolveCmd = &cobra.Command{
	Use:   "resolve <id>",
	Short: "Mark alert as resolved",
	Args:  cobra.ExactArgs(1),
	RunE:  runAlertResolve,
}

var alertDeleteCmd = &cobra.Command{
	Use:   "delete <id>",
	Short: "Delete an alert",
	Args:  cobra.ExactArgs(1),
	RunE:  runAlertDelete,
}

var alertExportCmd = &cobra.Command{
	Use:   "export [output-file]",
	Short: "Export alerts to JSON",
	RunE:  runAlertExport,
}

var alertStatsCmd = &cobra.Command{
	Use:   "stats",
	Short: "Show alert statistics",
	RunE:  runAlertStats,
}

var alertListFlags struct {
	severity string
	resolved bool
	ruleName string
	limit    int
	page     int
	format   string
}

var alertExportFlags struct {
	format string
}

func init() {
	alertCmd.AddCommand(alertListCmd)
	alertCmd.AddCommand(alertShowCmd)
	alertCmd.AddCommand(alertResolveCmd)
	alertCmd.AddCommand(alertDeleteCmd)
	alertCmd.AddCommand(alertExportCmd)
	alertCmd.AddCommand(alertStatsCmd)

	alertListCmd.Flags().StringVar(&alertListFlags.severity, "severity", "", "Filter by severity (critical, high, medium, low, info)")
	alertListCmd.Flags().BoolVar(&alertListFlags.resolved, "resolved", false, "Show only resolved alerts")
	alertListCmd.Flags().StringVar(&alertListFlags.ruleName, "rule", "", "Filter by rule name")
	alertListCmd.Flags().IntVar(&alertListFlags.limit, "limit", 100, "Maximum number of alerts to show")
	alertListCmd.Flags().IntVar(&alertListFlags.page, "page", 1, "Page number")
	alertListCmd.Flags().StringVar(&alertListFlags.format, "format", "table", "Output format: table, json, csv")

	alertExportCmd.Flags().StringVar(&alertExportFlags.format, "format", "json", "Export format: json, csv")
}

func getAlertEngine() *alerts.Engine {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return nil
	}

	engineCfg := alerts.EngineConfig{
		DedupWindow: cfg.Alerts.DedupWindow,
		StatsWindow: cfg.Alerts.StatsRetention,
	}

	return alerts.NewEngine(db, engineCfg)
}

func runAlertList(cmd *cobra.Command, args []string) error {
	engine := getAlertEngine()
	if engine == nil {
		return fmt.Errorf("failed to initialize alert engine")
	}

	filter := &storage.AlertFilter{
		Limit:  alertListFlags.limit,
		Offset: (alertListFlags.page - 1) * alertListFlags.limit,
	}

	if alertListFlags.severity != "" {
		filter.Severity = alertListFlags.severity
	}
	if alertListFlags.ruleName != "" {
		filter.RuleName = alertListFlags.ruleName
	}
	if alertListFlags.resolved {
		resolved := true
		filter.Resolved = &resolved
	}

	alertList, err := engine.GetAlerts(filter)
	if err != nil {
		return fmt.Errorf("failed to get alerts: %w", err)
	}

	if len(alertList) == 0 {
		fmt.Println("No alerts found")
		return nil
	}

	switch alertListFlags.format {
	case "json":
		data, _ := json.MarshalIndent(alertList, "", "  ")
		fmt.Println(string(data))
	case "csv":
		fmt.Println("ID,RuleName,Severity,Message,Count,FirstSeen,LastSeen,Resolved")
		for _, a := range alertList {
			resolvedStr := "false"
			if a.Resolved {
				resolvedStr = "true"
			}
			fmt.Printf("%d,%s,%s,%s,%d,%s,%s,%s\n",
				a.ID, a.RuleName, a.Severity, a.Message, a.Count,
				a.FirstSeen.Format(time.RFC3339), a.LastSeen.Format(time.RFC3339),
				resolvedStr)
		}
	default:
		fmt.Printf("%-6s %-10s %-30s %-10s %s\n", "ID", "Severity", "Rule", "Count", "LastSeen")
		fmt.Println("------ ---------- ------------------------------ ---------- -----------")
		for _, a := range alertList {
			ruleName := a.RuleName
			if len(ruleName) > 30 {
				ruleName = ruleName[:27] + "..."
			}
			fmt.Printf("%-6d %-10s %-30s %-10d %s\n",
				a.ID, a.Severity, ruleName, a.Count, a.LastSeen.Format("2006-01-02 15:04"))
		}
		fmt.Printf("\nTotal: %d alerts\n", len(alertList))
	}

	return nil
}

func runAlertShow(cmd *cobra.Command, args []string) error {
	engine := getAlertEngine()
	if engine == nil {
		return fmt.Errorf("failed to initialize alert engine")
	}

	var id int64
	fmt.Sscanf(args[0], "%d", &id)

	alert, err := engine.GetAlert(id)
	if err != nil {
		return fmt.Errorf("failed to get alert: %w", err)
	}

	if alert == nil {
		return fmt.Errorf("alert %d not found", id)
	}

	fmt.Println("=== Alert Details ===")
	fmt.Printf("ID:           %d\n", alert.ID)
	fmt.Printf("Rule:         %s\n", alert.RuleName)
	fmt.Printf("Severity:     %s\n", alert.Severity)
	fmt.Printf("Message:      %s\n", alert.Message)
	fmt.Printf("Count:        %d\n", alert.Count)
	fmt.Printf("First Seen:   %s\n", alert.FirstSeen.Format(time.RFC3339))
	fmt.Printf("Last Seen:    %s\n", alert.LastSeen.Format(time.RFC3339))
	fmt.Printf("Resolved:     %t\n", alert.Resolved)
	if alert.ResolvedTime != nil {
		fmt.Printf("Resolved At:  %s\n", alert.ResolvedTime.Format(time.RFC3339))
	}
	if len(alert.EventIDs) > 0 {
		fmt.Printf("Event IDs:    %v\n", alert.EventIDs)
	}
	if len(alert.MITREAttack) > 0 {
		fmt.Printf("MITRE ATT&CK: %v\n", alert.MITREAttack)
	}
	fmt.Printf("Log Name:     %s\n", alert.LogName)
	fmt.Printf("Rule Score:   %.2f\n", alert.RuleScore)
	if alert.Notes != "" {
		fmt.Printf("Notes:        %s\n", alert.Notes)
	}

	return nil
}

func runAlertResolve(cmd *cobra.Command, args []string) error {
	engine := getAlertEngine()
	if engine == nil {
		return fmt.Errorf("failed to initialize alert engine")
	}

	var id int64
	fmt.Sscanf(args[0], "%d", &id)

	var notes string
	fmt.Print("Enter resolution notes (optional): ")
	fmt.Scanln(&notes)

	err := engine.ResolveAlert(id, notes)
	if err != nil {
		return fmt.Errorf("failed to resolve alert: %w", err)
	}

	fmt.Printf("Alert %d marked as resolved\n", id)
	return nil
}

func runAlertDelete(cmd *cobra.Command, args []string) error {
	engine := getAlertEngine()
	if engine == nil {
		return fmt.Errorf("failed to initialize alert engine")
	}

	var id int64
	fmt.Sscanf(args[0], "%d", &id)

	err := engine.DeleteAlert(id)
	if err != nil {
		return fmt.Errorf("failed to delete alert: %w", err)
	}

	fmt.Printf("Alert %d deleted\n", id)
	return nil
}

func runAlertExport(cmd *cobra.Command, args []string) error {
	engine := getAlertEngine()
	if engine == nil {
		return fmt.Errorf("failed to initialize alert engine")
	}

	filter := &storage.AlertFilter{
		Limit: 10000,
	}

	alertList, err := engine.GetAlerts(filter)
	if err != nil {
		return fmt.Errorf("failed to get alerts: %w", err)
	}

	var outputPath string
	if len(args) > 0 {
		outputPath = args[0]
	} else {
		outputPath = fmt.Sprintf("alerts_%s.json", time.Now().Format("20060102_150405"))
	}

	var data []byte

	switch alertExportFlags.format {
	case "csv":
		data, err = exportAlertsToCSV(alertList)
	default:
		data, err = json.MarshalIndent(alertList, "", "  ")
	}

	if err != nil {
		return fmt.Errorf("failed to format alerts: %w", err)
	}

	if err := os.WriteFile(outputPath, data, 0644); err != nil {
		return fmt.Errorf("failed to write file: %w", err)
	}

	fmt.Printf("Exported %d alerts to %s\n", len(alertList), outputPath)
	return nil
}

func exportAlertsToCSV(alerts []*types.Alert) ([]byte, error) {
	var lines []string
	lines = append(lines, "ID,RuleName,Severity,Message,Count,FirstSeen,LastSeen,Resolved,Notes")

	for _, a := range alerts {
		lines = append(lines, fmt.Sprintf("%d,%s,%s,\"%s\",%d,%s,%s,%t,\"%s\"",
			a.ID, a.RuleName, a.Severity, a.Message, a.Count,
			a.FirstSeen.Format(time.RFC3339), a.LastSeen.Format(time.RFC3339),
			a.Resolved, a.Notes))
	}

	result := ""
	for i, line := range lines {
		if i > 0 {
			result += "\n"
		}
		result += line
	}
	return []byte(result), nil
}

func runAlertStats(cmd *cobra.Command, args []string) error {
	engine := getAlertEngine()
	if engine == nil {
		return fmt.Errorf("failed to initialize alert engine")
	}

	stats, err := engine.GetStats()
	if err != nil {
		return fmt.Errorf("failed to get stats: %w", err)
	}

	fmt.Println("=== Alert Statistics ===")
	fmt.Printf("Total Alerts:  %d\n", stats.TotalCount)
	fmt.Println("\nBy Severity:")
	for sev, count := range stats.BySeverity {
		fmt.Printf("  %-10s: %d\n", sev, count)
	}
	fmt.Println("\nBy Status:")
	for status, count := range stats.ByStatus {
		fmt.Printf("  %-10s: %d\n", status, count)
	}

	return nil
}
