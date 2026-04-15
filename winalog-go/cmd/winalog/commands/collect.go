package commands

import (
	"context"
	"fmt"

	"github.com/kkkdddd-start/winalog-go/internal/collectors"
	"github.com/spf13/cobra"
)

var collectCmd = &cobra.Command{
	Use:   "collect [flags]",
	Short: "One-click collection of all log sources",
	Long: `Automatically discover and collect all Windows log sources.

Collected data includes:
  - Windows Event Logs (Security, System, Application)
  - IIS logs
  - Prefetch files
  - ShimCache
  - Amcache
  - UserAssist
  - Registry persistence points
  - Scheduled tasks
  - System information

Examples:
  winalog collect
  winalog collect --output ./evidence.zip --compress
  winalog collect --include-prefetch --include-registry`,
	RunE: runCollect,
}

var collectFlags struct {
	outputPath        string
	includeLogs       bool
	includePrefetch   bool
	includeShimcache  bool
	includeAmcache    bool
	includeUserassist bool
	includeRegistry   bool
	includeTasks      bool
	includeSystemInfo bool
	compress          bool
	compressLevel     int
	calculateHash     bool
	password          string
	excludePatterns   string
	workers           int
}

func init() {
	collectCmd.Flags().StringVarP(&collectFlags.outputPath, "output", "o", "winalog_collect.zip", "Output file path")
	collectCmd.Flags().BoolVar(&collectFlags.includeLogs, "include-logs", true, "Include Windows Event Logs")
	collectCmd.Flags().BoolVar(&collectFlags.includePrefetch, "include-prefetch", false, "Include Prefetch")
	collectCmd.Flags().BoolVar(&collectFlags.includeShimcache, "include-shimcache", false, "Include ShimCache")
	collectCmd.Flags().BoolVar(&collectFlags.includeAmcache, "include-amcache", false, "Include Amcache")
	collectCmd.Flags().BoolVar(&collectFlags.includeUserassist, "include-userassist", false, "Include UserAssist")
	collectCmd.Flags().BoolVar(&collectFlags.includeRegistry, "include-registry", false, "Include Registry persistence")
	collectCmd.Flags().BoolVar(&collectFlags.includeTasks, "include-tasks", false, "Include Scheduled Tasks")
	collectCmd.Flags().BoolVar(&collectFlags.includeSystemInfo, "include-system-info", true, "Include System Info")
	collectCmd.Flags().BoolVar(&collectFlags.compress, "compress", true, "Compress output")
	collectCmd.Flags().IntVar(&collectFlags.compressLevel, "compress-level", 6, "Compression level (0-9)")
	collectCmd.Flags().BoolVar(&collectFlags.calculateHash, "calculate-hash", true, "Calculate SHA256 hash")
	collectCmd.Flags().StringVar(&collectFlags.password, "password", "", "ZIP password (optional)")
	collectCmd.Flags().StringVar(&collectFlags.excludePatterns, "exclude", "", "Exclude patterns")
	collectCmd.Flags().IntVar(&collectFlags.workers, "workers", 4, "Number of parallel workers")
}

func runCollect(cmd *cobra.Command, args []string) error {
	opts := collectors.CollectOptions{
		OutputPath: collectFlags.outputPath,
		Workers:    collectFlags.workers,
		Compress:   collectFlags.compress,
	}

	fmt.Println("Starting one-click collection...")
	fmt.Printf("Output: %s\n", opts.OutputPath)
	fmt.Printf("Workers: %d\n", opts.Workers)
	fmt.Printf("Compress: %v\n", opts.Compress)
	fmt.Println()

	ctx := context.Background()
	result, err := collectors.RunOneClickCollection(ctx, opts)
	if err != nil {
		return fmt.Errorf("collection failed: %w", err)
	}

	if result.Success {
		fmt.Printf("\nCollection completed successfully!\n")
		fmt.Printf("Output: %s\n", result.OutputPath)
		fmt.Printf("Files collected: %d\n", result.FileCount)
		fmt.Printf("Duration: %v\n", result.Duration)
	} else {
		fmt.Printf("\nCollection completed with errors:\n")
		for i, e := range result.Errors {
			fmt.Printf("  %d. %v\n", i+1, e)
		}
	}

	return nil
}
