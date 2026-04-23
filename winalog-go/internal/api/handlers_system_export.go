//go:build windows

package api

import (
	"encoding/csv"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/collectors"
	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

func (h *SystemHandler) ExportProcesses(c *gin.Context) {
	processes, err := collectors.ListProcesses()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Header("Content-Disposition", "attachment; filename=processes.csv")
	c.Header("Content-Type", "text/csv")

	w := csv.NewWriter(c.Writer)
	w.Write([]string{"PID", "PPID", "Name", "Path", "Command", "User"})
	for _, p := range processes {
		w.Write([]string{
			strconv.Itoa(p.PID),
			strconv.Itoa(p.PPID),
			p.Name,
			p.Path,
			p.Command,
			p.User,
		})
	}
	w.Flush()
}

func (h *SystemHandler) ExportNetworkConnections(c *gin.Context) {
	connections, err := collectors.ListNetworkConnections()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Header("Content-Disposition", "attachment; filename=network_connections.csv")
	c.Header("Content-Type", "text/csv")

	w := csv.NewWriter(c.Writer)
	w.Write([]string{"PID", "Protocol", "LocalAddr", "LocalPort", "RemoteAddr", "RemotePort", "State", "ProcessName"})
	for _, conn := range connections {
		w.Write([]string{
			strconv.Itoa(conn.PID),
			conn.Protocol,
			conn.LocalAddr,
			strconv.Itoa(conn.LocalPort),
			conn.RemoteAddr,
			strconv.Itoa(conn.RemotePort),
			conn.State,
			conn.ProcessName,
		})
	}
	w.Flush()
}

func (h *SystemHandler) ExportEnvironmentVariables(c *gin.Context) {
	vars, err := collectors.ListEnvironmentVariables()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Header("Content-Disposition", "attachment; filename=environment_variables.csv")
	c.Header("Content-Type", "text/csv")

	w := csv.NewWriter(c.Writer)
	w.Write([]string{"Name", "Value", "Type"})
	for _, v := range vars {
		w.Write([]string{v.Name, v.Value, v.Type})
	}
	w.Flush()
}

func (h *SystemHandler) ExportDrivers(c *gin.Context) {
	drivers, err := collectors.ListDrivers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Header("Content-Disposition", "attachment; filename=drivers.csv")
	c.Header("Content-Type", "text/csv")

	w := csv.NewWriter(c.Writer)
	w.Write([]string{"Name", "DisplayName", "Description", "Path", "Status"})
	for _, d := range drivers {
		w.Write([]string{
			d.Name,
			d.DisplayName,
			d.Description,
			d.Path,
			d.Status,
		})
	}
	w.Flush()
}

func (h *SystemHandler) ExportUsers(c *gin.Context) {
	users, err := collectors.ListLocalUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Header("Content-Disposition", "attachment; filename=users.csv")
	c.Header("Content-Type", "text/csv")

	w := csv.NewWriter(c.Writer)
	w.Write([]string{"Name", "FullName", "SID", "Domain", "Type", "Enabled", "HomeDir", "ProfilePath"})
	for _, u := range users {
		w.Write([]string{
			u.Name,
			u.FullName,
			u.SID,
			u.Domain,
			u.Type,
			strconv.FormatBool(u.Enabled),
			u.HomeDir,
			u.ProfilePath,
		})
	}
	w.Flush()
}

func (h *SystemHandler) ExportRegistryPersistence(c *gin.Context) {
	persistence, err := collectors.CollectRegistryPersistence(c.Request.Context())
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if len(persistence) == 0 {
		c.JSON(http.StatusOK, gin.H{"message": "no registry persistence found"})
		return
	}

	c.Header("Content-Disposition", "attachment; filename=registry_persistence.csv")
	c.Header("Content-Type", "text/csv")

	w := csv.NewWriter(c.Writer)
	w.Write([]string{"Category", "Path", "Name", "Value", "Type", "Source", "Enabled", "Description"})

	for _, reg := range persistence {
		exportRegistryInfo(w, "RunKeys", reg.RunKeys)
		exportRegistryInfo(w, "UserInit", reg.UserInit)
		exportRegistryInfo(w, "TaskScheduler", reg.TaskScheduler)
		exportRegistryInfo(w, "Services", reg.Services)
		exportRegistryInfo(w, "IFEO", reg.IFEO)
		exportRegistryInfo(w, "AppInitDLLs", reg.AppInitDLLs)
		exportRegistryInfo(w, "KnownDLLs", reg.KnownDLLs)
		exportRegistryInfo(w, "BootExecute", reg.BootExecute)
		exportRegistryInfo(w, "AppCertDlls", reg.AppCertDlls)
		exportRegistryInfo(w, "LSASSettings", reg.LSASSettings)
		exportRegistryInfo(w, "ShellExtensions", reg.ShellExtensions)
		exportRegistryInfo(w, "BrowserHelpers", reg.BrowserHelpers)
		exportRegistryInfo(w, "StartupFolders", reg.StartupFolders)
	}
	w.Flush()
}

func exportRegistryInfo(w *csv.Writer, category string, entries []*types.RegistryInfo) {
	for _, entry := range entries {
		w.Write([]string{
			category,
			entry.Path,
			entry.Name,
			entry.Value,
			entry.Type,
			entry.Source,
			strconv.FormatBool(entry.Enabled),
			entry.Description,
		})
	}
}

func (h *SystemHandler) ExportScheduledTasks(c *gin.Context) {
	tasks, err := collectors.ListScheduledTasks()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.Header("Content-Disposition", "attachment; filename=scheduled_tasks.csv")
	c.Header("Content-Type", "text/csv")

	w := csv.NewWriter(c.Writer)
	w.Write([]string{"TaskName", "TaskPath", "State", "Author", "Description", "NextRunTime", "LastRunTime", "LastResult", "RunAsUser", "Action", "TriggerType"})
	for _, t := range tasks {
		w.Write([]string{
			t.TaskName,
			t.TaskPath,
			t.State,
			t.Author,
			t.Description,
			t.NextRunTime,
			t.LastRunTime,
			strconv.Itoa(t.LastResult),
			t.RunAsUser,
			t.Action,
			t.TriggerType,
		})
	}
	w.Flush()
}
