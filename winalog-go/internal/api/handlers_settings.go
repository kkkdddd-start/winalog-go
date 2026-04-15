package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/config"
)

type SettingsHandler struct {
	cfg *config.Config
}

type Settings struct {
	DatabasePath         string `json:"database_path"`
	LogLevel             string `json:"log_level"`
	MaxEvents            int    `json:"max_events"`
	RetentionDays        int    `json:"retention_days"`
	EnableAlerting       bool   `json:"enable_alerting"`
	EnableLiveCollection bool   `json:"enable_live_collection"`
	EnableAutoUpdate     bool   `json:"enable_auto_update"`
	APIPort              int    `json:"api_port"`
	APIHost              string `json:"api_host"`
	CORSEnabled          bool   `json:"cors_enabled"`
	MaxImportFileSize    int    `json:"max_import_file_size"`
	ExportDirectory      string `json:"export_directory"`
}

func NewSettingsHandler(cfg *config.Config) *SettingsHandler {
	return &SettingsHandler{cfg: cfg}
}

func (h *SettingsHandler) GetSettings(c *gin.Context) {
	c.JSON(http.StatusOK, Settings{
		DatabasePath:         h.cfg.Database.Path,
		LogLevel:             h.cfg.Log.Level,
		MaxEvents:            h.cfg.Search.MaxResults,
		RetentionDays:        30,
		EnableAlerting:       h.cfg.Alerts.Enabled,
		EnableLiveCollection: false,
		EnableAutoUpdate:     h.cfg.TUI.AutoUpdate,
		APIPort:              h.cfg.API.Port,
		APIHost:              h.cfg.API.Host,
		CORSEnabled:          len(h.cfg.API.CORS.AllowedOrigins) > 0,
		MaxImportFileSize:    h.cfg.Import.BatchSize,
		ExportDirectory:      h.cfg.Report.OutputDir,
	})
}

func (h *SettingsHandler) SaveSettings(c *gin.Context) {
	var settings Settings
	if err := c.ShouldBindJSON(&settings); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "invalid settings: " + err.Error(),
		})
		return
	}

	h.cfg.Database.Path = settings.DatabasePath
	h.cfg.Log.Level = settings.LogLevel
	h.cfg.Search.MaxResults = settings.MaxEvents
	h.cfg.Alerts.Enabled = settings.EnableAlerting
	h.cfg.TUI.AutoUpdate = settings.EnableAutoUpdate
	h.cfg.API.Port = settings.APIPort
	h.cfg.API.Host = settings.APIHost
	h.cfg.Import.BatchSize = settings.MaxImportFileSize
	h.cfg.Report.OutputDir = settings.ExportDirectory

	c.JSON(http.StatusOK, gin.H{
		"status":  "saved",
		"message": "Settings updated in memory. Restart required for full effect.",
	})
}

func (h *SettingsHandler) ResetSettings(c *gin.Context) {
	defaultCfg := config.DefaultConfig()
	h.cfg.Database = defaultCfg.Database
	h.cfg.Import = defaultCfg.Import
	h.cfg.Search = defaultCfg.Search
	h.cfg.Alerts = defaultCfg.Alerts
	h.cfg.TUI = defaultCfg.TUI
	h.cfg.API = defaultCfg.API
	h.cfg.Report = defaultCfg.Report
	h.cfg.Log = defaultCfg.Log

	c.JSON(http.StatusOK, gin.H{
		"status":  "reset",
		"message": "Settings reset to defaults. Restart required.",
	})
}
