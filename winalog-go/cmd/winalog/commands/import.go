package commands

import (
	"github.com/spf13/cobra"
)

var importCmd = &cobra.Command{
	Use:   "import [flags] <path>",
	Short: "Import EVTX/ETL/LOG/CSV files",
	Long: `Import Windows event log files into the database for analysis.

Supported file types:
  - .evtx (Windows Event Log)
  - .etl (Event Trace Log)
  - .log (Text/CSV logs)
  - .csv (Comma-separated values)
  - Sysmon format logs

Examples:
  winalog import security.evtx
  winalog import --log-name Security security.evtx system.evtx
  winalog import --incremental --workers 4 ./logs/`,
	Args: cobra.ExactArgs(1),
	RunE: runImport,
}

var importFlags struct {
	logName      string
	incremental  bool
	workers      int
	batchSize    int
	skipPatterns string
}

func init() {
	importCmd.Flags().StringVar(&importFlags.logName, "log-name", "", "Log name for imported files")
	importCmd.Flags().BoolVar(&importFlags.incremental, "incremental", true, "Enable incremental import")
	importCmd.Flags().IntVar(&importFlags.workers, "workers", 4, "Number of parallel workers")
	importCmd.Flags().IntVar(&importFlags.batchSize, "batch-size", 10000, "Batch size for insertion")
	importCmd.Flags().StringVar(&importFlags.skipPatterns, "skip-patterns", "", "Patterns to skip (comma-separated)")
}

func runImport(cmd *cobra.Command, args []string) error {
	// TODO: Implement import logic
	return nil
}
