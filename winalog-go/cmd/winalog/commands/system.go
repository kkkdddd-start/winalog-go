package commands

import (
	"context"
	"fmt"
	"os"
	"runtime"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/api"
	"github.com/kkkdddd-start/winalog-go/internal/collectors"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/tui"
	"github.com/spf13/cobra"
)

var statusCmd = &cobra.Command{
	Use:   "status",
	Short: "Show system status",
	Long:  `Display database statistics and system status.`,
	RunE:  runStatus,
}

func runStatus(cmd *cobra.Command, args []string) error {
	return nil
}

var infoCmd = &cobra.Command{
	Use:   "info",
	Short: "Show system information",
	Long:  `Display system information including processes and network connections.`,
	RunE:  runInfo,
}

var infoFlags struct {
	process  bool
	network  bool
	users    bool
	registry bool
	tasks    bool
	save     bool
}

func init() {
	infoCmd.Flags().BoolVar(&infoFlags.process, "process", false, "Show process info")
	infoCmd.Flags().BoolVar(&infoFlags.network, "network", false, "Show network connections")
	infoCmd.Flags().BoolVar(&infoFlags.users, "users", false, "Show user accounts")
	infoCmd.Flags().BoolVar(&infoFlags.registry, "registry", false, "Show registry persistence")
	infoCmd.Flags().BoolVar(&infoFlags.tasks, "tasks", false, "Show scheduled tasks")
	infoCmd.Flags().BoolVar(&infoFlags.save, "save", false, "Save to database")
}

func runInfo(cmd *cobra.Command, args []string) error {
	ctx := context.Background()

	showAll := !infoFlags.process && !infoFlags.network && !infoFlags.users && !infoFlags.registry && !infoFlags.tasks

	fmt.Println("=" + strings.Repeat("=", 60))
	fmt.Println("  System Information")
	fmt.Println("=" + strings.Repeat("=", 60))

	if showAll || infoFlags.process {
		fmt.Println("\n[Process Information]")
		processes, err := collectors.ListProcesses()
		if err != nil {
			fmt.Printf("  Error: %v\n", err)
		} else {
			fmt.Printf("  Total Processes: %d\n", len(processes))
			fmt.Printf("  %-8s %-8s %-30s %-20s\n", "PID", "PPID", "NAME", "COMMAND")
			fmt.Println("  " + strings.Repeat("-", 66))
			for i, p := range processes {
				if i >= 20 {
					fmt.Printf("  ... and %d more processes\n", len(processes)-20)
					break
				}
				name := p.Name
				if len(name) > 28 {
					name = name[:25] + "..."
				}
				args := p.Args
				if len(args) > 18 {
					args = args[:15] + "..."
				}
				fmt.Printf("  %-8d %-8d %-30s %-20s\n", p.PID, p.PPID, name, args)
			}
		}
	}

	if showAll || infoFlags.network {
		fmt.Println("\n[Network Connections]")
		connections, err := collectors.ListNetworkConnections()
		if err != nil {
			fmt.Printf("  Error: %v\n", err)
		} else {
			fmt.Printf("  Total Connections: %d\n", len(connections))
			fmt.Printf("  %-6s %-20s %-8s %-20s %-8s %-15s\n", "PROTO", "LOCAL ADDRESS", "PORT", "REMOTE ADDRESS", "PORT", "STATE")
			fmt.Println("  " + strings.Repeat("-", 85))
			for i, c := range connections {
				if i >= 20 {
					fmt.Printf("  ... and %d more connections\n", len(connections)-20)
					break
				}
				local := c.LocalAddr
				if len(local) > 18 {
					local = local[:15] + "..."
				}
				remote := c.RemoteAddr
				if len(remote) > 18 {
					remote = remote[:15] + "..."
				}
				state := c.State
				if len(state) > 13 {
					state = state[:10] + "..."
				}
				fmt.Printf("  %-6s %-20s %-8d %-20s %-8d %-15s\n",
					c.Protocol, local, c.LocalPort, remote, c.RemotePort, state)
			}
		}
	}

	if showAll || (!infoFlags.process && !infoFlags.network) {
		fmt.Println("\n[Basic System Info]")
		hostname, _ := os.Hostname()
		fmt.Printf("  Hostname:     %s\n", hostname)
		fmt.Printf("  OS:           %s\n", runtime.GOOS)
		fmt.Printf("  Architecture: %s\n", runtime.GOARCH)
		fmt.Printf("  Go Version:   %s\n", runtime.Version())
		fmt.Printf("  CPUs:         %d\n", runtime.NumCPU())
		var m runtime.MemStats
		runtime.ReadMemStats(&m)
		fmt.Printf("  Memory:       %.2f MB allocated\n", float64(m.Alloc)/1024/1024)
	}

	fmt.Println("\n" + strings.Repeat("=", 61))

	if infoFlags.save {
		fmt.Println("\n[Saving to database...]")
		if err := saveSystemSnapshot(ctx); err != nil {
			fmt.Printf("  Error saving: %v\n", err)
		} else {
			fmt.Println("  Saved successfully!")
		}
	}

	return nil
}

func saveSystemSnapshot(ctx context.Context) error {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	repo := storage.NewSystemRepo(db)

	hostname, _ := os.Hostname()
	var m runtime.MemStats
	runtime.ReadMemStats(&m)

	snapshot := &storage.SystemSnapshot{
		Hostname:      hostname,
		OSName:        runtime.GOOS,
		Architecture:  runtime.GOARCH,
		CPUCount:      runtime.NumCPU(),
		MemoryTotalGB: float64(m.Sys) / 1024 / 1024 / 1024,
		MemoryFreeGB:  float64(m.Sys-m.Alloc) / 1024 / 1024 / 1024,
		CollectedAt:   time.Now(),
	}

	if err := repo.SaveSnapshot(snapshot); err != nil {
		return err
	}

	processes, _ := collectors.ListProcesses()
	processInfos := make([]*storage.ProcessInfo, 0, len(processes))
	for _, p := range processes {
		processInfos = append(processInfos, &storage.ProcessInfo{
			PID:         p.PID,
			Name:        p.Name,
			Exe:         p.Exe,
			CommandLine: p.Args,
			Username:    p.User,
			ParentPID:   p.PPID,
			CollectedAt: time.Now(),
		})
	}
	repo.SaveProcesses(processInfos)

	connections, _ := collectors.ListNetworkConnections()
	netConnections := make([]*storage.NetworkConnection, 0, len(connections))
	for _, c := range connections {
		netConnections = append(netConnections, &storage.NetworkConnection{
			PID:         c.PID,
			ProcessName: c.ProcessName,
			Protocol:    c.Protocol,
			LocalAddr:   c.LocalAddr,
			LocalPort:   c.LocalPort,
			RemoteAddr:  c.RemoteAddr,
			RemotePort:  c.RemotePort,
			State:       c.State,
			CollectedAt: time.Now(),
		})
	}
	repo.SaveNetworkConnections(netConnections)

	return nil
}

var verifyCmd = &cobra.Command{
	Use:   "verify [file]",
	Short: "Verify file integrity",
	Long:  `Calculate and verify file SHA256 hash.`,
	Args:  cobra.ExactArgs(1),
	RunE:  runVerify,
}

func runVerify(cmd *cobra.Command, args []string) error {
	return nil
}

var rulesCmd = &cobra.Command{
	Use:   "rules [subcommand]",
	Short: "Rule management",
	Long:  `Manage alert and correlation rules.`,
}

func init() {
	rulesCmd.AddCommand(&cobra.Command{
		Use:   "list",
		Short: "List all rules",
		RunE:  runRulesList,
	})
	rulesCmd.AddCommand(&cobra.Command{
		Use:   "validate [file]",
		Short: "Validate rule file",
		Args:  cobra.ExactArgs(1),
		RunE:  runRulesValidate,
	})
	rulesCmd.AddCommand(&cobra.Command{
		Use:   "enable <name>",
		Short: "Enable a rule",
		Args:  cobra.ExactArgs(1),
		RunE:  runRulesEnable,
	})
	rulesCmd.AddCommand(&cobra.Command{
		Use:   "disable <name>",
		Short: "Disable a rule",
		Args:  cobra.ExactArgs(1),
		RunE:  runRulesDisable,
	})
}

func runRulesList(cmd *cobra.Command, args []string) error {
	return nil
}

func runRulesValidate(cmd *cobra.Command, args []string) error {
	return nil
}

func runRulesEnable(cmd *cobra.Command, args []string) error {
	return nil
}

func runRulesDisable(cmd *cobra.Command, args []string) error {
	return nil
}

var dbCmd = &cobra.Command{
	Use:   "db [subcommand]",
	Short: "Database management",
	Long:  `Manage the SQLite database.`,
}

func init() {
	dbCmd.AddCommand(&cobra.Command{
		Use:   "status",
		Short: "Show database status",
		RunE:  runDBStatus,
	})
	dbCmd.AddCommand(&cobra.Command{
		Use:   "vacuum",
		Short: "Optimize database",
		RunE:  runDBVacuum,
	})
	dbCmd.AddCommand(&cobra.Command{
		Use:   "clean",
		Short: "Clean old data",
		RunE:  runDBClean,
	})
}

func runDBStatus(cmd *cobra.Command, args []string) error {
	return nil
}

func runDBVacuum(cmd *cobra.Command, args []string) error {
	return nil
}

func runDBClean(cmd *cobra.Command, args []string) error {
	return nil
}

var configCmd = &cobra.Command{
	Use:   "config [subcommand]",
	Short: "Configuration management",
	Long:  `View and modify configuration.`,
}

func init() {
	configCmd.AddCommand(&cobra.Command{
		Use:   "get [key]",
		Short: "Get configuration value",
		RunE:  runConfigGet,
	})
	configCmd.AddCommand(&cobra.Command{
		Use:   "set <key> <value>",
		Short: "Set configuration value",
		Args:  cobra.ExactArgs(2),
		RunE:  runConfigSet,
	})
}

func runConfigGet(cmd *cobra.Command, args []string) error {
	return nil
}

func runConfigSet(cmd *cobra.Command, args []string) error {
	return nil
}

var metricsCmd = &cobra.Command{
	Use:   "metrics",
	Short: "Show Prometheus metrics",
	Long:  `Display Prometheus-format metrics.`,
	RunE:  runMetrics,
}

func runMetrics(cmd *cobra.Command, args []string) error {
	return nil
}

var queryCmd = &cobra.Command{
	Use:   "query <sql>",
	Short: "Execute SQL query",
	Long:  `Execute raw SQL query against the database.`,
	Args:  cobra.ExactArgs(1),
	RunE:  runQuery,
}

func runQuery(cmd *cobra.Command, args []string) error {
	return nil
}

var tuiCmd = &cobra.Command{
	Use:   "tui",
	Short: "Start terminal UI",
	Long:  `Start the Bubble Tea terminal user interface.`,
	RunE:  runTUI,
}

func runTUI(cmd *cobra.Command, args []string) error {
	cfg := getConfig()
	return tui.StartTUI(cfg)
}

var serveCmd = &cobra.Command{
	Use:   "serve",
	Short: "Start HTTP API server",
	Long:  `Start the Gin HTTP API server with Web UI.`,
	RunE:  runServe,
}

var serveFlags struct {
	host string
	port int
}

func init() {
	serveCmd.Flags().StringVar(&serveFlags.host, "host", "127.0.0.1", "API host")
	serveCmd.Flags().IntVar(&serveFlags.port, "port", 8080, "API port")
}

func runServe(cmd *cobra.Command, args []string) error {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	addr := fmt.Sprintf("%s:%d", serveFlags.host, serveFlags.port)
	server := api.NewServer(db, addr)

	fmt.Printf("Starting HTTP API server on %s\n", addr)
	fmt.Printf("API documentation available at http://%s/api/health\n", addr)

	return server.Start()
}

var forensicsCmd = &cobra.Command{
	Use:   "forensics [subcommand]",
	Short: "Forensics operations",
	Long:  `Perform forensics operations.`,
}

func init() {
	forensicsCmd.AddCommand(&cobra.Command{
		Use:   "collect",
		Short: "Collect forensics data",
		RunE:  runForensicsCollect,
	})
	forensicsCmd.AddCommand(&cobra.Command{
		Use:   "hash <file>",
		Short: "Calculate file hash",
		Args:  cobra.ExactArgs(1),
		RunE:  runForensicsHash,
	})
	forensicsCmd.AddCommand(&cobra.Command{
		Use:   "verify <file>",
		Short: "Verify file signature",
		Args:  cobra.ExactArgs(1),
		RunE:  runForensicsVerify,
	})
}

func runForensicsCollect(cmd *cobra.Command, args []string) error {
	return nil
}

func runForensicsHash(cmd *cobra.Command, args []string) error {
	return nil
}

func runForensicsVerify(cmd *cobra.Command, args []string) error {
	return nil
}
