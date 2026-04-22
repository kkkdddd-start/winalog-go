package api

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"runtime"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/alerts"
	"github.com/kkkdddd-start/winalog-go/internal/collectors"
	"github.com/kkkdddd-start/winalog-go/internal/engine"
	"github.com/kkkdddd-start/winalog-go/internal/exporters"
	"github.com/kkkdddd-start/winalog-go/internal/parsers/evtx"
	"github.com/kkkdddd-start/winalog-go/internal/rules"
	"github.com/kkkdddd-start/winalog-go/internal/rules/builtin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type CollectHandler struct {
	db *storage.DB
}

func SetupCollectRoutes(r *gin.Engine, collectHandler *CollectHandler) {
	collect := r.Group("/api/collect")
	{
		collect.GET("/channels", collectHandler.CollectChannels)
		collect.POST("", collectHandler.StartCollect)
		collect.POST("/import", collectHandler.ImportLogs)
		collect.POST("/upload", collectHandler.UploadFiles)
		collect.POST("/evtx2csv", collectHandler.Evtx2Csv)
		collect.GET("/status", collectHandler.GetCollectStatus)
	}
}

// LogChannel 日志通道
type LogChannel struct {
	Name     string `json:"name"`
	Category string `json:"category"`
	LogPath  string `json:"log_path,omitempty"`
}

// CollectChannels 获取可用的日志通道
// GET /api/collect/channels
func (h *CollectHandler) CollectChannels(c *gin.Context) {
	channels, err := collectors.GetRegisteredChannels()
	if err != nil {
		channels = getDefaultChannels()
	}

	channelFilePaths, _ := collectors.GetChannelFilePaths()
	filePathMap := make(map[string]string)
	for _, ch := range channelFilePaths {
		filePathMap[ch.Name] = ch.LogPath
	}

	response := make([]LogChannel, 0, len(channels))
	for _, ch := range channels {
		logPath := filePathMap[ch]
		if logPath == "" {
			logPath = filepath.Join(os.Getenv("SystemRoot"), "System32", "winevt", "Logs", ch+".evtx")
		}
		response = append(response, LogChannel{
			Name:     ch,
			Category: collectors.CategorizeChannel(ch),
			LogPath:  logPath,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"channels": response,
		"total":    len(response),
	})
}

// getDefaultChannels 返回默认的日志通道
func getDefaultChannels() []string {
	return []string{
		"Security",
		"System",
		"Application",
		"Setup",
		"Microsoft-Windows-Sysmon/Operational",
		"Microsoft-Windows-PowerShell/Operational",
		"Microsoft-Windows-WMI-Activity/Operational",
		"Microsoft-Windows-TaskScheduler/Operational",
	}
}

type LogCollectResponse struct {
	Status         string         `json:"status"`
	Message        string         `json:"message"`
	OutputPath     string         `json:"output_path,omitempty"`
	EventCount     int            `json:"event_count,omitempty"`
	Hash           string         `json:"hash,omitempty"`
	Duration       string         `json:"duration,omitempty"`
	Errors         []string       `json:"errors,omitempty"`
	CollectedItems map[string]int `json:"collected_items,omitempty"`
	SuccessCount   int            `json:"success_count"`
	FailedCount    int            `json:"failed_count"`
}

type LogCollectRequest struct {
	Sources []string          `json:"sources"`
	Formats []string          `json:"formats"`
	Options LogCollectOptions `json:"options"`
}

type LogCollectOptions struct {
	Workers           int    `json:"workers"`
	IncludePrefetch   bool   `json:"include_prefetch"`
	IncludeRegistry   bool   `json:"include_registry"`
	IncludeSystemInfo bool   `json:"include_system_info"`
	IncludeShimCache  bool   `json:"include_shimcache"`
	IncludeAmcache    bool   `json:"include_amcache"`
	IncludeUserassist bool   `json:"include_userassist"`
	IncludeUSNJournal bool   `json:"include_usn_journal"`
	IncludeTasks      bool   `json:"include_tasks"`
	IncludeLogs       bool   `json:"include_logs"`
	IncludeProcesses  bool   `json:"include_processes"`
	IncludeNetwork    bool   `json:"include_network"`
	IncludeDlls       bool   `json:"include_dlls"`
	IncludeDrivers    bool   `json:"include_drivers"`
	IncludeUsers      bool   `json:"include_users"`
	Compress          bool   `json:"compress"`
	CalculateHash     bool   `json:"calculate_hash"`
	OutputPath        string `json:"output_path"`
}

type LogImportRequest struct {
	FilePaths     []string `json:"file_paths" binding:"required"`
	AlertOnImport bool     `json:"alert_on_import"`
}

type CollectStatus struct {
	Status     string `json:"status"`
	Progress   int    `json:"progress"`
	Message    string `json:"message"`
	OutputPath string `json:"output_path,omitempty"`
	FilesCount int    `json:"files_count,omitempty"`
	Duration   string `json:"duration,omitempty"`
}

func NewCollectHandler(db *storage.DB) *CollectHandler {
	return &CollectHandler{db: db}
}

func (h *CollectHandler) StartCollect(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusOK, LogCollectResponse{
			Status:  "error",
			Message: "collection is only supported on Windows. This server is running in Linux server mode.",
		})
		return
	}

	var req LogCollectRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		req = LogCollectRequest{}
	}

	opts := collectors.CollectOptions{
		Workers:           4,
		IncludeSystemInfo: true,
		IncludeLogs:       true,
		Compress:          true,
		CalculateHash:     true,
	}

	if req.Options.Workers > 0 {
		opts.Workers = req.Options.Workers
	}
	opts.IncludePrefetch = req.Options.IncludePrefetch
	opts.IncludeRegistry = req.Options.IncludeRegistry
	opts.IncludeSystemInfo = req.Options.IncludeSystemInfo
	opts.IncludeShimCache = req.Options.IncludeShimCache
	opts.IncludeAmcache = req.Options.IncludeAmcache
	opts.IncludeUserassist = req.Options.IncludeUserassist
	opts.IncludeUSNJournal = req.Options.IncludeUSNJournal
	opts.IncludeTasks = req.Options.IncludeTasks
	opts.IncludeLogs = req.Options.IncludeLogs
	opts.IncludeProcessSig = req.Options.IncludeProcesses
	opts.IncludeNetwork = req.Options.IncludeNetwork
	opts.IncludeProcessDLLs = req.Options.IncludeDlls
	opts.IncludeDrivers = req.Options.IncludeDrivers
	opts.IncludeUsers = req.Options.IncludeUsers
	opts.Compress = req.Options.Compress
	opts.CalculateHash = req.Options.CalculateHash
	if req.Options.OutputPath != "" {
		opts.OutputPath = req.Options.OutputPath
	}
	if len(req.Sources) > 0 {
		opts.SelectedSources = req.Sources
	}
	if len(req.Formats) > 0 {
		opts.Formats = req.Formats
	}

	ctx := context.Background()
	result, err := collectors.RunOneClickCollection(ctx, opts)

	if err != nil {
		c.JSON(http.StatusOK, LogCollectResponse{
			Status:  "error",
			Message: err.Error(),
		})
		return
	}

	oneClickResult, ok := result.(*collectors.OneClickResult)
	if !ok {
		c.JSON(http.StatusOK, LogCollectResponse{
			Status:  "error",
			Message: "invalid result type",
		})
		return
	}

	successCount := 0
	failedCount := len(oneClickResult.Errors)
	for range oneClickResult.CollectedItems {
		successCount++
	}

	statusStr := "completed"
	message := "Collection completed successfully"
	if len(oneClickResult.Errors) > 0 {
		statusStr = "completed_with_errors"
		message = fmt.Sprintf("Collection completed with %d errors", len(oneClickResult.Errors))
	}
	if !oneClickResult.Success {
		statusStr = "failed"
		message = fmt.Sprintf("Collection failed with %d errors", len(oneClickResult.Errors))
	}

	c.JSON(http.StatusOK, LogCollectResponse{
		Status:         statusStr,
		Message:        message,
		OutputPath:     oneClickResult.OutputPath,
		Duration:       fmt.Sprintf("%v", oneClickResult.Duration),
		Errors:         oneClickResult.Errors,
		CollectedItems: oneClickResult.CollectedItems,
		SuccessCount:   successCount,
		FailedCount:    failedCount,
	})
}

func (h *CollectHandler) ImportLogs(c *gin.Context) {
	var req LogImportRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "invalid request: " + err.Error(),
		})
		return
	}

	if len(req.FilePaths) == 0 {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "no file paths provided",
		})
		return
	}

	eng := engine.NewEngine(h.db)

	importReq := &engine.ImportRequest{
		Paths:     req.FilePaths,
		BatchSize: 1000,
	}

	ctx := context.Background()
	result, err := eng.Import(ctx, importReq, nil)

	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"status":   "error",
			"success":  false,
			"message":  err.Error(),
			"imported": 0,
			"failed":   len(req.FilePaths),
			"total":    len(req.FilePaths),
		})
		return
	}

	response := gin.H{
		"status":       "completed",
		"success":      true,
		"message":      "Import completed successfully",
		"imported":     result.FilesImported,
		"failed":       result.FilesFailed,
		"total_events": result.EventsImported,
		"duration":     result.Duration.String(),
		"errors":       result.Errors,
	}

	if req.AlertOnImport {
		alertEngine := alerts.NewEngine(h.db, alerts.EngineConfig{
			DedupWindow: 5 * time.Minute,
			StatsWindow: 24 * time.Hour,
		})

		builtinRules := builtin.GetAlertRules()
		enabledRules := make([]*rules.AlertRule, 0)
		for _, r := range builtinRules {
			if r.Enabled {
				enabledRules = append(enabledRules, r)
			}
		}
		alertEngine.LoadRules(enabledRules)

		startTime := result.StartTime
		events, _, _ := h.db.ListEvents(&storage.EventFilter{
			Limit:     10000,
			StartTime: &startTime,
		})

		if len(events) > 0 {
			alertResult, err := alertEngine.EvaluateBatch(context.Background(), events)
			if err != nil {
				response["alert_error"] = err.Error()
			} else {
				if err := alertEngine.SaveAlerts(alertResult); err != nil {
					response["alert_error"] = err.Error()
				} else {
					response["alerts_generated"] = len(alertResult)
				}
			}
		}
	}

	c.JSON(http.StatusOK, response)
}

func (h *CollectHandler) GetCollectStatus(c *gin.Context) {
	c.JSON(http.StatusOK, CollectStatus{
		Status:   "idle",
		Progress: 100,
		Message:  "Collection service is ready",
	})
}

type Evtx2CsvRequest struct {
	FilePaths     []string `json:"file_paths" binding:"required"`
	OutputDir     string   `json:"output_dir"`
	Limit         int      `json:"limit"`
	IncludeXml    bool     `json:"include_xml"`
	CalculateHash bool     `json:"calculate_hash"`
}

type Evtx2CsvResponse struct {
	Success     bool     `json:"success"`
	Results     []Result `json:"results"`
	TotalEvents int      `json:"total_events"`
	TotalFiles  int      `json:"total_files"`
	FailedFiles int      `json:"failed_files"`
	Errors      []string `json:"errors,omitempty"`
}

type Result struct {
	InputPath  string `json:"input_path"`
	OutputPath string `json:"output_path"`
	EventCount int    `json:"event_count"`
	Error      string `json:"error,omitempty"`
}

func (h *CollectHandler) Evtx2Csv(c *gin.Context) {
	var req Evtx2CsvRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "invalid request: " + err.Error(),
		})
		return
	}

	if len(req.FilePaths) == 0 {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "no file paths provided",
		})
		return
	}

	outputDir := req.OutputDir
	if outputDir == "" {
		outputDir = "."
	}

	parser := evtx.NewEvtxParser()
	csvExporter := exporters.NewCsvExporter()
	results := make([]Result, 0, len(req.FilePaths))
	totalEvents := 0
	failedFiles := 0
	errors := make([]string, 0)

	for _, inputPath := range req.FilePaths {
		info, err := os.Stat(inputPath)
		if err != nil {
			errors = append(errors, fmt.Sprintf("%s: %v", inputPath, err))
			failedFiles++
			results = append(results, Result{
				InputPath: inputPath,
				Error:     err.Error(),
			})
			continue
		}
		if info.IsDir() {
			errors = append(errors, fmt.Sprintf("%s: is a directory", inputPath))
			failedFiles++
			results = append(results, Result{
				InputPath: inputPath,
				Error:     "is a directory",
			})
			continue
		}

		events, err := parser.ParseBatch(inputPath)
		if err != nil {
			errors = append(errors, fmt.Sprintf("%s: %v", inputPath, err))
			failedFiles++
			results = append(results, Result{
				InputPath: inputPath,
				Error:     err.Error(),
			})
			continue
		}

		if req.Limit > 0 && len(events) > req.Limit {
			events = events[:req.Limit]
		}

		outputPath := inputPath + ".csv"
		if outputDir != "." {
			baseName := filepath.Base(inputPath) + ".csv"
			outputPath = filepath.Join(outputDir, baseName)
		}

		outputFile, err := os.Create(outputPath)
		if err != nil {
			errors = append(errors, fmt.Sprintf("%s: failed to create output: %v", inputPath, err))
			failedFiles++
			results = append(results, Result{
				InputPath: inputPath,
				Error:     err.Error(),
			})
			continue
		}

		if err := csvExporter.Export(events, outputFile); err != nil {
			outputFile.Close()
			errors = append(errors, fmt.Sprintf("%s: failed to export CSV: %v", inputPath, err))
			failedFiles++
			results = append(results, Result{
				InputPath: inputPath,
				Error:     err.Error(),
			})
			continue
		}
		outputFile.Close()

		totalEvents += len(events)
		results = append(results, Result{
			InputPath:  inputPath,
			OutputPath: outputPath,
			EventCount: len(events),
		})
	}

	response := Evtx2CsvResponse{
		Success:     failedFiles == 0,
		Results:     results,
		TotalEvents: totalEvents,
		TotalFiles:  len(req.FilePaths),
		FailedFiles: failedFiles,
	}
	if len(errors) > 0 {
		response.Errors = errors
	}

	c.JSON(http.StatusOK, response)
}

func (h *CollectHandler) UploadFiles(c *gin.Context) {
	file, header, err := c.Request.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "no file provided: " + err.Error(),
		})
		return
	}
	defer file.Close()

	tempDir := os.TempDir()
	if runtime.GOOS == "windows" {
		tempDir = filepath.Join(os.Getenv("TEMP"), "winalog-uploads")
	} else {
		tempDir = filepath.Join("/tmp", "winalog-uploads")
	}

	if err := os.MkdirAll(tempDir, 0755); err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "failed to create temp directory: " + err.Error(),
		})
		return
	}

	filename := fmt.Sprintf("%d-%s", time.Now().UnixNano(), header.Filename)
	filePath := filepath.Join(tempDir, filename)

	out, err := os.Create(filePath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "failed to create file: " + err.Error(),
		})
		return
	}
	defer out.Close()

	if _, err := io.Copy(out, file); err != nil {
		os.Remove(filePath)
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "failed to save file: " + err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success":  true,
		"filename": header.Filename,
		"path":     filePath,
		"size":     header.Size,
	})
}
