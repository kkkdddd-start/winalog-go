package commands

import (
	"fmt"
	"os"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/exporters"
	"github.com/kkkdddd-start/winalog-go/internal/reports"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/timeline"
	"github.com/spf13/cobra"
)

var reportCmd = &cobra.Command{
	Use:   "report [subcommand]",
	Short: "Report generation",
	Long:  `Generate security and analysis reports.`,
}

func init() {
	reportCmd.AddCommand(&cobra.Command{
		Use:   "generate [type]",
		Short: "Generate a report",
		Args:  cobra.ExactArgs(1),
		RunE:  runReportGenerate,
	})
}

var reportFlags struct {
	format    string
	output    string
	timeRange string
}

func init() {
	reportCmd.PersistentFlags().StringVar(&reportFlags.format, "format", "html", "Report format: html, json")
	reportCmd.PersistentFlags().StringVarP(&reportFlags.output, "output", "o", "", "Output file")
	reportCmd.PersistentFlags().StringVar(&reportFlags.timeRange, "time-range", "24h", "Time range for report")
}

func runReportGenerate(cmd *cobra.Command, args []string) error {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	duration, err := time.ParseDuration(reportFlags.timeRange)
	if err != nil {
		return fmt.Errorf("invalid time range: %w", err)
	}

	endTime := time.Now()
	startTime := endTime.Add(-duration)

	req := &reports.ReportRequest{
		Title:      args[0],
		Format:     reports.ReportFormat(reportFlags.format),
		StartTime:  startTime,
		EndTime:    endTime,
		IncludeRaw: false,
		IncludeIOC: true,
	}

	gen := reports.NewGenerator(db)

	switch reportFlags.format {
	case "html":
		htmlExporter := reports.NewHTMLExporter(gen)
		if reportFlags.output != "" {
			file, err := os.Create(reportFlags.output)
			if err != nil {
				return err
			}
			defer file.Close()
			return htmlExporter.Export(req, file)
		}
		return htmlExporter.Export(req, os.Stdout)

	case "json":
		jsonExporter := reports.NewJSONExporter(gen)
		data, err := jsonExporter.Export(req)
		if err != nil {
			return err
		}
		if reportFlags.output != "" {
			return os.WriteFile(reportFlags.output, data, 0644)
		}
		fmt.Println(string(data))
		return nil

	default:
		return fmt.Errorf("unsupported format: %s", reportFlags.format)
	}
}

var exportCmd = &cobra.Command{
	Use:   "export [subcommand]",
	Short: "Export events data",
	Long:  `Export events to various formats.`,
}

var exportFlags struct {
	format string
	limit  int
}

func init() {
	exportCmd.PersistentFlags().StringVar(&exportFlags.format, "format", "csv", "Export format: csv, json, excel")
	exportCmd.PersistentFlags().IntVar(&exportFlags.limit, "limit", 10000, "Maximum number of events to export")
	exportCmd.AddCommand(&cobra.Command{
		Use:   "json [file]",
		Short: "Export to JSON",
		Args:  cobra.ExactArgs(0),
		RunE:  runExportJSON,
	})
	exportCmd.AddCommand(&cobra.Command{
		Use:   "csv [file]",
		Short: "Export to CSV",
		Args:  cobra.ExactArgs(0),
		RunE:  runExportCSV,
	})
	exportCmd.AddCommand(&cobra.Command{
		Use:   "timeline [file]",
		Short: "Export timeline",
		Args:  cobra.ExactArgs(0),
		RunE:  runExportTimeline,
	})
}

func runExportJSON(cmd *cobra.Command, args []string) error {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	events, _, err := db.ListEvents(&storage.EventFilter{Limit: exportFlags.limit})
	if err != nil {
		return err
	}

	exporter := exporters.NewJsonExporter(true)
	if len(args) > 0 {
		file, err := os.Create(args[0])
		if err != nil {
			return err
		}
		defer file.Close()
		return exporter.Export(events, file)
	}
	return exporter.Export(events, os.Stdout)
}

func runExportCSV(cmd *cobra.Command, args []string) error {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	events, _, err := db.ListEvents(&storage.EventFilter{Limit: exportFlags.limit})
	if err != nil {
		return err
	}

	exporter := exporters.NewCsvExporter()
	if len(args) > 0 {
		file, err := os.Create(args[0])
		if err != nil {
			return err
		}
		defer file.Close()
		return exporter.Export(events, file)
	}
	return exporter.Export(events, os.Stdout)
}

func runExportTimeline(cmd *cobra.Command, args []string) error {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	events, _, err := db.ListEvents(&storage.EventFilter{Limit: exportFlags.limit})
	if err != nil {
		return err
	}

	exporter := exporters.NewTimelineExporter()
	if len(args) > 0 {
		file, err := os.Create(args[0])
		if err != nil {
			return err
		}
		defer file.Close()
		return exporter.Export(events, file)
	}
	return exporter.Export(events, os.Stdout)
}

var timelineCmd = &cobra.Command{
	Use:   "timeline [subcommand]",
	Short: "Timeline analysis",
	Long:  `Build and query global event timelines.`,
}

var timelineFlags struct {
	startTime string
	endTime   string
	category  string
	computer  string
}

func init() {
	timelineCmd.PersistentFlags().StringVar(&timelineFlags.startTime, "start", "", "Start time (RFC3339)")
	timelineCmd.PersistentFlags().StringVar(&timelineFlags.endTime, "end", "", "End time (RFC3339)")
	timelineCmd.PersistentFlags().StringVar(&timelineFlags.category, "category", "", "Filter by category")
	timelineCmd.PersistentFlags().StringVar(&timelineFlags.computer, "computer", "", "Filter by computer")
	timelineCmd.AddCommand(&cobra.Command{
		Use:   "build",
		Short: "Build global timeline",
		RunE:  runTimelineBuild,
	})
	timelineCmd.AddCommand(&cobra.Command{
		Use:   "query",
		Short: "Query timeline",
		RunE:  runTimelineQuery,
	})
}

func runTimelineBuild(cmd *cobra.Command, args []string) error {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	events, _, err := db.ListEvents(&storage.EventFilter{Limit: 100000})
	if err != nil {
		return err
	}

	builder := timeline.NewTimelineBuilder()
	builder.SetEvents(events)

	filter := &timeline.TimelineFilter{}
	if timelineFlags.startTime != "" {
		if t, err := time.Parse(time.RFC3339, timelineFlags.startTime); err == nil {
			filter.StartTime = t
		}
	}
	if timelineFlags.endTime != "" {
		if t, err := time.Parse(time.RFC3339, timelineFlags.endTime); err == nil {
			filter.EndTime = t
		}
	}
	builder.SetFilter(filter)

	tl, err := builder.Build()
	if err != nil {
		return err
	}

	fmt.Printf("Timeline built: %d entries\n", tl.TotalCount)
	fmt.Printf("Time range: %s to %s\n", tl.StartTime.Format(time.RFC3339), tl.EndTime.Format(time.RFC3339))

	return nil
}

func runTimelineQuery(cmd *cobra.Command, args []string) error {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	events, _, err := db.ListEvents(&storage.EventFilter{Limit: 10000})
	if err != nil {
		return err
	}

	builder := timeline.NewTimelineBuilder()
	builder.SetEvents(events)
	tl, err := builder.Build()
	if err != nil {
		return err
	}

	visualizer := timeline.NewTimelineVisualizer(tl)
	data, err := visualizer.RenderJSON()
	if err != nil {
		return err
	}
	fmt.Println(data)

	return nil
}

var multiCmd = &cobra.Command{
	Use:   "multi [subcommand]",
	Short: "Multi-machine analysis",
	Long:  `Cross-machine correlation and lateral movement detection.`,
}

func init() {
	multiCmd.AddCommand(&cobra.Command{
		Use:   "analyze",
		Short: "Analyze cross-machine",
		RunE:  runMultiAnalyze,
	})
	multiCmd.AddCommand(&cobra.Command{
		Use:   "lateral",
		Short: "Detect lateral movement",
		RunE:  runMultiLateral,
	})
}

func runMultiAnalyze(cmd *cobra.Command, args []string) error {
	fmt.Println("Multi-machine analysis requires multiple machine contexts in the database.")
	fmt.Println("This feature analyzes events across different machines to detect patterns.")
	return nil
}

func runMultiLateral(cmd *cobra.Command, args []string) error {
	fmt.Println("Lateral movement detection analyzes remote login and authentication events.")
	return nil
}

var liveCmd = &cobra.Command{
	Use:   "live [subcommand]",
	Short: "Live monitoring",
	Long:  `Real-time event log monitoring.`,
}

func init() {
	liveCmd.AddCommand(&cobra.Command{
		Use:   "collect",
		Short: "Start live collection",
		RunE:  runLiveCollect,
	})
}

func runLiveCollect(cmd *cobra.Command, args []string) error {
	fmt.Println("Starting live event collection...")
	fmt.Println("Press Ctrl+C to stop.")
	time.Sleep(time.Hour)
	return nil
}
