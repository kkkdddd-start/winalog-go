//go:build windows

package commands

import (
	"github.com/spf13/cobra"
)

func RegisterCommands(root *cobra.Command) {
	root.PersistentFlags().StringVar(&dbPath, "db", "", "Database path")

	root.AddCommand(importCmd)
	root.AddCommand(searchCmd)
	root.AddCommand(collectCmd)
	root.AddCommand(alertCmd)
	root.AddCommand(correlateCmd)
	root.AddCommand(reportCmd)
	root.AddCommand(exportCmd)
	root.AddCommand(timelineCmd)
	root.AddCommand(multiCmd)
	root.AddCommand(liveCmd)
	root.AddCommand(statusCmd)
	root.AddCommand(infoCmd)
	root.AddCommand(verifyCmd)
	root.AddCommand(rulesCmd)
	root.AddCommand(dbCmd)
	root.AddCommand(configCmd)
	root.AddCommand(metricsCmd)
	root.AddCommand(queryCmd)
	root.AddCommand(tuiCmd)
	root.AddCommand(serveCmd)
	root.AddCommand(analyzeCmd)
	root.AddCommand(forensicsCmd)
	root.AddCommand(persistenceCmd)
	root.AddCommand(dashboardCmd)
	root.AddCommand(whitelistCmd)
	root.AddCommand(uebaCmd)
}
