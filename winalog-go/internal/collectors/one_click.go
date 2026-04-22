//go:build windows

package collectors

import (
	"archive/zip"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/forensics"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type OneClickCollector struct {
	BaseCollector
	cfg CollectConfig
}

type CollectConfig struct {
	Workers            int
	IncludePrefetch    bool
	IncludeRegistry    bool
	IncludeSystemInfo  bool
	IncludeProcessSig  bool
	IncludeProcessDLLs bool
	IncludeAmcache     bool
	IncludeUserassist  bool
	IncludeUSNJournal  bool
	IncludeShimCache   bool
	IncludeTasks       bool
	IncludeLogs        bool
	IncludeNetwork     bool
	IncludeDrivers     bool
	IncludeUsers       bool
	DLLCollectionMode  string
	SelectedPIDs       []int
	OutputPath         string
	Compress           bool
	CalculateHash      bool
	SelectedSources    []string
	EnabledFormats     []string
}

type OneClickResult struct {
	OutputPath     string            `json:"output_path"`
	Duration       time.Duration     `json:"duration"`
	Success        bool              `json:"success"`
	CollectedItems map[string]int    `json:"collected_items"`
	Hashes         map[string]string `json:"hashes,omitempty"`
	Errors         []string          `json:"errors,omitempty"`
}

type CollectProgressCallback interface {
	OnProgress(stage string, current, total int)
	OnError(stage string, err error)
	OnComplete(result *OneClickResult)
}

func NewOneClickCollector() *OneClickCollector {
	return &OneClickCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "one_click",
				Description:   "One-click collection of Windows logs and artifacts",
				RequiresAdmin: true,
				Version:       "1.0.0",
			},
		},
		cfg: CollectConfig{
			Workers:            4,
			IncludeProcessSig:  true,
			IncludeProcessDLLs: false,
			DLLCollectionMode:  "none",
		},
	}
}

func (c *OneClickCollector) Collect(ctx context.Context) ([]interface{}, error) {
	result, err := c.FullCollect(ctx)
	if err != nil {
		return nil, err
	}
	return []interface{}{result}, nil
}

func RunOneClickCollection(ctx context.Context, opts interface{}) (interface{}, error) {
	c := NewOneClickCollector()

	if opts != nil {
		if collectOpts, ok := opts.(CollectOptions); ok {
			c.cfg.Workers = collectOpts.Workers
			c.cfg.IncludePrefetch = collectOpts.IncludePrefetch
			c.cfg.IncludeRegistry = collectOpts.IncludeRegistry
			c.cfg.IncludeSystemInfo = collectOpts.IncludeSystemInfo
			c.cfg.IncludeProcessSig = collectOpts.IncludeProcessSig
			c.cfg.IncludeProcessDLLs = collectOpts.IncludeProcessDLLs
			c.cfg.IncludeAmcache = collectOpts.IncludeAmcache
			c.cfg.IncludeUserassist = collectOpts.IncludeUserassist
			c.cfg.IncludeUSNJournal = collectOpts.IncludeUSNJournal
			c.cfg.IncludeShimCache = collectOpts.IncludeShimCache
			c.cfg.DLLCollectionMode = collectOpts.DLLCollectionMode
			c.cfg.SelectedPIDs = collectOpts.SelectedPIDs
			if collectOpts.OutputPath != "" {
				c.cfg.OutputPath = collectOpts.OutputPath
			}
			c.cfg.Compress = collectOpts.Compress
			c.cfg.CalculateHash = collectOpts.CalculateHash
			if len(collectOpts.SelectedSources) > 0 {
				c.cfg.SelectedSources = collectOpts.SelectedSources
			}
			if len(collectOpts.Formats) > 0 {
				c.cfg.EnabledFormats = collectOpts.Formats
			}
		}
	}

	result, err := c.FullCollect(ctx)
	if err != nil {
		return &OneClickResult{
			Success: false,
			Errors:  []string{err.Error()},
		}, err
	}
	return result, nil
}

func (c *OneClickCollector) FullCollect(ctx context.Context) (*OneClickResult, error) {
	startTime := time.Now()
	result := &OneClickResult{
		Success:        true,
		CollectedItems: make(map[string]int),
		Errors:         make([]string, 0),
	}

	log.Printf("[INFO] One-click collection started")

	if c.cfg.OutputPath == "" {
		execPath, err := os.Executable()
		workDir := "."
		if err == nil {
			workDir = filepath.Dir(execPath)
		}
		timestamp := time.Now().Format("20060102_150405")
		c.cfg.OutputPath = filepath.Join(workDir, fmt.Sprintf("winalog_collect_%s", timestamp))
		log.Printf("[INFO] Output path not specified, using: %s", c.cfg.OutputPath)
	}

	tempDir := c.cfg.OutputPath + "_temp"
	if err := os.MkdirAll(tempDir, 0755); err != nil {
		result.Success = false
		result.Errors = append(result.Errors, fmt.Sprintf("failed to create temp dir: %v", err))
		log.Printf("[ERROR] Failed to create temp dir: %v", err)
		return result, err
	}
	defer os.RemoveAll(tempDir)

	var allErrors []string
	var collectedItems = make(map[string]int)

	if c.cfg.IncludeSystemInfo {
		log.Printf("[INFO] Collecting system info...")
		if err := c.collectSystemInfoTo(tempDir); err != nil {
			log.Printf("[ERROR] System info collection failed: %v", err)
			allErrors = append(allErrors, fmt.Sprintf("systemInfo: %v", err))
		} else {
			log.Printf("[INFO] System info collected successfully")
			collectedItems["systemInfo"] = 1
		}
	}

	if c.cfg.IncludeRegistry {
		log.Printf("[INFO] Collecting registry...")
		if err := c.CollectRegistry(ctx, tempDir); err != nil {
			log.Printf("[ERROR] Registry collection failed: %v", err)
			allErrors = append(allErrors, fmt.Sprintf("registry: %v", err))
		} else {
			log.Printf("[INFO] Registry collected successfully")
			collectedItems["registry"] = 1
		}
	}

	if c.cfg.IncludeTasks {
		log.Printf("[INFO] Collecting scheduled tasks...")
		if err := c.CollectScheduledTasks(ctx, tempDir); err != nil {
			log.Printf("[ERROR] Scheduled tasks collection failed: %v", err)
			allErrors = append(allErrors, fmt.Sprintf("scheduledTasks: %v", err))
		} else {
			log.Printf("[INFO] Scheduled tasks collected successfully")
			collectedItems["scheduledTasks"] = 1
		}
	}

	if c.cfg.IncludeUsers {
		log.Printf("[INFO] Collecting local users...")
		if err := c.CollectLocalUsers(ctx, tempDir); err != nil {
			log.Printf("[ERROR] Local users collection failed: %v", err)
			allErrors = append(allErrors, fmt.Sprintf("localUsers: %v", err))
		} else {
			log.Printf("[INFO] Local users collected successfully")
			collectedItems["localUsers"] = 1
		}
	}

	if c.cfg.IncludePrefetch {
		log.Printf("[INFO] Collecting prefetch...")
		if err := c.CollectPrefetch(ctx, tempDir); err != nil {
			log.Printf("[ERROR] Prefetch collection failed: %v", err)
			allErrors = append(allErrors, err.Error())
		} else {
			log.Printf("[INFO] Prefetch collected successfully")
			collectedItems["prefetch"] = 1
		}
	}

	log.Printf("[INFO] Collecting EVTX logs...")
	if err := c.CollectEvtxLogs(ctx, tempDir); err != nil {
		log.Printf("[ERROR] EVTX logs collection failed: %v", err)
		allErrors = append(allErrors, fmt.Sprintf("evtxLogs: %v", err))
	} else {
		log.Printf("[INFO] EVTX logs collected successfully")
		collectedItems["evtxLogs"] = 1
	}

	log.Printf("[INFO] Collecting event logs...")
	if err := c.CollectEventLogs(ctx, tempDir); err != nil {
		log.Printf("[ERROR] Event logs collection failed: %v", err)
		allErrors = append(allErrors, err.Error())
	} else {
		log.Printf("[INFO] Event logs collected successfully")
		collectedItems["eventLogs"] = 1
	}

	if c.cfg.IncludeProcessSig || c.cfg.IncludeProcessDLLs {
		log.Printf("[INFO] Collecting process info with signatures...")
		if err := c.collectProcessInfoWithSignaturesAndDLLs(tempDir); err != nil {
			log.Printf("[ERROR] Process info collection failed: %v", err)
			allErrors = append(allErrors, err.Error())
		} else {
			log.Printf("[INFO] Process info collected successfully")
			collectedItems["processInfo"] = 1
		}
	}

	if c.cfg.IncludeAmcache {
		log.Printf("[INFO] Collecting amcache...")
		if err := c.CollectAmcache(ctx, tempDir); err != nil {
			log.Printf("[ERROR] Amcache collection failed: %v", err)
			allErrors = append(allErrors, err.Error())
		} else {
			log.Printf("[INFO] Amcache collected successfully")
			collectedItems["amcache"] = 1
		}
	}

	if c.cfg.IncludeUserassist {
		log.Printf("[INFO] Collecting userassist...")
		if err := c.CollectUserAssist(ctx, tempDir); err != nil {
			log.Printf("[ERROR] Userassist collection failed: %v", err)
			allErrors = append(allErrors, err.Error())
		} else {
			log.Printf("[INFO] Userassist collected successfully")
			collectedItems["userassist"] = 1
		}
	}

	if c.cfg.IncludeUSNJournal {
		log.Printf("[INFO] Collecting USN journal...")
		if err := c.CollectUSNJournal(ctx, tempDir); err != nil {
			log.Printf("[ERROR] USN journal collection failed: %v", err)
			allErrors = append(allErrors, err.Error())
		} else {
			log.Printf("[INFO] USN journal collected successfully")
			collectedItems["usnJournal"] = 1
		}
	}

	if c.cfg.IncludeShimCache {
		log.Printf("[INFO] Collecting shimcache...")
		if err := c.CollectShimCache(ctx, tempDir); err != nil {
			log.Printf("[ERROR] Shimcache collection failed: %v", err)
			allErrors = append(allErrors, fmt.Sprintf("shimCache: %v", err))
		} else {
			log.Printf("[INFO] Shimcache collected successfully")
			collectedItems["shimCache"] = 1
		}
	}

	if c.cfg.IncludeNetwork {
		log.Printf("[INFO] Collecting network connections...")
		if err := c.CollectNetworkConnections(ctx, tempDir); err != nil {
			log.Printf("[ERROR] Network connections collection failed: %v", err)
			allErrors = append(allErrors, fmt.Sprintf("networkConnections: %v", err))
		} else {
			log.Printf("[INFO] Network connections collected successfully")
			collectedItems["networkConnections"] = 1
		}
	}

	if c.cfg.IncludeDrivers {
		log.Printf("[INFO] Collecting drivers...")
		if err := c.CollectDrivers(ctx, tempDir); err != nil {
			log.Printf("[ERROR] Drivers collection failed: %v", err)
			allErrors = append(allErrors, fmt.Sprintf("drivers: %v", err))
		} else {
			log.Printf("[INFO] Drivers collected successfully")
			collectedItems["drivers"] = 1
		}
	}

	if c.cfg.CalculateHash {
		log.Printf("[INFO] Calculating file hashes...")
		hashes, err := c.CalculateFileHashes(tempDir)
		if err == nil {
			result.Hashes = hashes
			log.Printf("[INFO] File hashes calculated: %d files", len(hashes))
		} else {
			log.Printf("[WARN] Failed to calculate file hashes: %v", err)
		}
	}

	if c.cfg.Compress {
		log.Printf("[INFO] Creating ZIP archive...")
		zipPath := c.cfg.OutputPath + ".zip"
		if err := c.CreateZipFromDir(tempDir, zipPath); err != nil {
			log.Printf("[ERROR] Failed to create ZIP: %v", err)
			allErrors = append(allErrors, err.Error())
		} else {
			log.Printf("[INFO] ZIP archive created: %s", zipPath)
			c.cfg.OutputPath = zipPath
		}
	} else {
		log.Printf("[INFO] Moving temp directory to output path...")
		if err := os.Rename(tempDir, c.cfg.OutputPath); err != nil {
			log.Printf("[ERROR] Failed to move directory: %v", err)
			allErrors = append(allErrors, err.Error())
		}
	}

	result.OutputPath = c.cfg.OutputPath
	result.Duration = time.Since(startTime)
	result.Errors = allErrors
	result.CollectedItems = collectedItems
	if len(allErrors) > 0 {
		result.Success = false
	}

	log.Printf("[INFO] One-click collection completed: success=%v, collected=%d items, errors=%d, duration=%v",
		result.Success, len(collectedItems), len(allErrors), result.Duration)
	if len(allErrors) > 0 {
		for i, err := range allErrors {
			log.Printf("[ERROR] Collection error[%d]: %s", i+1, err)
		}
	}

	return result, nil
}

func (c *OneClickCollector) FullCollectWithCallback(ctx context.Context, callback CollectProgressCallback) (*OneClickResult, error) {
	stages := []string{
		"systemInfo",
		"registry",
		"scheduledTasks",
		"localUsers",
		"prefetch",
		"eventLogs",
		"processInfo",
		"amcache",
		"userassist",
		"usnjournal",
		"shimCache",
		"networkConnections",
		"drivers",
	}
	total := len(stages)

	if callback != nil {
		callback.OnProgress("init", 0, total)
	}

	result, err := c.FullCollect(ctx)
	if err != nil {
		if callback != nil {
			callback.OnError("fullCollect", err)
		}
		return result, err
	}

	for i, stage := range stages {
		if callback != nil {
			callback.OnProgress(stage, i+1, total)
		}
	}

	if callback != nil {
		callback.OnComplete(result)
	}

	return result, nil
}

func (c *OneClickCollector) collectProcessInfoWithSignaturesAndDLLs(tempDir string) error {
	processDir := filepath.Join(tempDir, "processes")
	if err := os.MkdirAll(processDir, 0755); err != nil {
		return err
	}

	collector := NewProcessInfoCollector()
	processes, err := collector.collectProcessInfo()
	if err != nil {
		return err
	}

	processList := make([]map[string]interface{}, 0)
	dllList := make([]map[string]interface{}, 0)

	for _, proc := range processes {
		procData := map[string]interface{}{
			"pid":       proc.PID,
			"name":      proc.Name,
			"ppid":      proc.PPID,
			"path":      proc.Path,
			"user":      proc.User,
			"is_signed": proc.IsSigned,
		}
		if proc.Signature != nil {
			procData["signature"] = proc.Signature
		}
		processList = append(processList, procData)

		if c.cfg.IncludeProcessDLLs {
			switch c.cfg.DLLCollectionMode {
			case "all":
				dlls, _ := GetProcessDLLs(int(proc.PID))
				for _, dll := range dlls {
					dllData := map[string]interface{}{
						"pid":     dll.ProcessID,
						"name":    dll.ProcessName,
						"module":  dll.Name,
						"path":    dll.Path,
						"size":    dll.Size,
						"version": dll.Version,
					}
					dllList = append(dllList, dllData)
				}
			case "selected":
				for _, selectedPID := range c.cfg.SelectedPIDs {
					if int(proc.PID) == selectedPID {
						dlls, _ := GetProcessDLLs(int(proc.PID))
						for _, dll := range dlls {
							dllData := map[string]interface{}{
								"pid":     dll.ProcessID,
								"name":    dll.ProcessName,
								"module":  dll.Name,
								"path":    dll.Path,
								"size":    dll.Size,
								"version": dll.Version,
							}
							dllList = append(dllList, dllData)
						}
						break
					}
				}
			}
		}
	}

	processData, _ := json.MarshalIndent(processList, "", "  ")
	if err := os.WriteFile(filepath.Join(processDir, "processes.json"), processData, 0600); err != nil {
		return err
	}

	if len(dllList) > 0 {
		dllData, _ := json.MarshalIndent(dllList, "", "  ")
		if err := os.WriteFile(filepath.Join(processDir, "process_dlls.json"), dllData, 0600); err != nil {
			return err
		}
	}

	return nil
}

func (c *OneClickCollector) collectSystemInfoTo(tempDir string) error {
	infoDir := filepath.Join(tempDir, "system_info")
	if err := os.MkdirAll(infoDir, 0755); err != nil {
		return err
	}

	info, err := CollectSystemInfo(context.Background())
	if err != nil {
		return err
	}

	data, _ := json.MarshalIndent(info, "", "  ")
	return os.WriteFile(filepath.Join(infoDir, "system_info.json"), data, 0600)
}

func (c *OneClickCollector) CollectEvtxLogs(ctx context.Context, outputDir string) error {
	evtxDir := filepath.Join(outputDir, "winevt_logs")
	if err := os.MkdirAll(evtxDir, 0755); err != nil {
		return err
	}

	// 默认启用的格式
	enabledFormats := c.cfg.EnabledFormats
	if len(enabledFormats) == 0 {
		enabledFormats = []string{"evtx", "etl"}
	}

	// 如果没有指定源，使用注册的通道
	logSources := c.cfg.SelectedSources
	if len(logSources) == 0 {
		channels, err := GetRegisteredChannels()
		if err == nil && len(channels) > 0 {
			logSources = channels
		} else {
			logSources = []string{
				"Security",
				"System",
				"Application",
				"Microsoft-Windows-Sysmon/Operational",
				"Microsoft-Windows-PowerShell/Operational",
			}
		}
	}

	for _, source := range logSources {
		// 根据格式决定采集方式
		if isFormatEnabled(enabledFormats, "evtx") {
			var evtxPath string
			if strings.HasPrefix(source, "Microsoft-") {
				evtxPath = filepath.Join(`C:\Windows\System32\winevt\Logs`, source+".evtx")
			} else {
				evtxPath = filepath.Join(`C:\Windows\System32\winevt\Logs`, source+".evtx")
			}

			if _, err := os.Stat(evtxPath); err == nil {
				dst := filepath.Join(evtxDir, filepath.Base(evtxPath))
				if err := c.CopyFileWithRetry(evtxPath, dst, 3); err == nil {
					continue
				}
			}

			exportPath := filepath.Join(evtxDir, source+".evtx")
			exportCmd := fmt.Sprintf(`wevtutil epl "%s" "%s" /q:*[System[TimeCreated[@t>'%s']]] 2>nul`,
				source, exportPath, time.Now().Add(-7*24*time.Hour).Format("2006-01-02T15:04:00"))
			utils.RunPowerShell(exportCmd)

			if _, err := os.Stat(exportPath); err == nil {
				continue
			}

			exportCmd2 := fmt.Sprintf(`wevtutil epl "%s" "%s" 2>nul`, source, exportPath)
			utils.RunPowerShell(exportCmd2)
		}

		// ETL 格式支持（如果启用）
		if isFormatEnabled(enabledFormats, "etl") {
			var etlPath string
			if strings.HasPrefix(source, "Microsoft-") {
				etlPath = filepath.Join(`C:\Windows\System32\winevt\Logs`, source+".etl")
			} else {
				etlPath = filepath.Join(`C:\Windows\System32\winevt\Logs`, source+".etl")
			}

			if _, err := os.Stat(etlPath); err == nil {
				dst := filepath.Join(evtxDir, filepath.Base(etlPath))
				c.CopyFileWithRetry(etlPath, dst, 3)
			}
		}
	}

	return nil
}

func (c *OneClickCollector) CollectEventLogs(ctx context.Context, outputDir string) error {
	eventLogDir := filepath.Join(outputDir, "event_logs")
	if err := os.MkdirAll(eventLogDir, 0755); err != nil {
		return err
	}

	logNames := []string{
		"Application",
		"System",
		"Security",
		"Setup",
		"ForwardedEvents",
	}

	exportedCount := 0
	for _, logName := range logNames {
		select {
		case <-ctx.Done():
			return ctx.Err()
		default:
		}

		exportPath := filepath.Join(eventLogDir, logName+".evtx")
		exportCmd := fmt.Sprintf(`wevtutil epl "%s" "%s" /q:*[System[TimeCreated[@t>'%s']]] /overwrite:false`,
			logName, exportPath, time.Now().Add(-7*24*time.Hour).Format("2006-01-02T15:04:00"))

		log.Printf("[DEBUG] [OneClick] Exporting event log: %s", logName)
		exportResult := utils.RunPowerShellWithContext(ctx, exportCmd)
		if !exportResult.Success() {
			log.Printf("[WARN] [OneClick] Failed to export log %s: %v", logName, exportResult.Error)
		} else {
			exportedCount++
			log.Printf("[DEBUG] [OneClick] Exported event log: %s", logName)
		}
	}

	log.Printf("[DEBUG] [OneClick] Event log collection completed: %d/%d exported", exportedCount, len(logNames))
	return nil
}

func (c *OneClickCollector) CollectPrefetch(ctx context.Context, outputDir string) error {
	prefetchDir := filepath.Join(outputDir, "prefetch")
	if err := os.MkdirAll(prefetchDir, 0755); err != nil {
		return err
	}

	prefetchPath := `C:\Windows\Prefetch`
	entries, err := os.ReadDir(prefetchPath)
	if err != nil {
		return nil
	}

	for _, entry := range entries {
		if strings.HasSuffix(entry.Name(), ".pf") {
			src := filepath.Join(prefetchPath, entry.Name())
			dst := filepath.Join(prefetchDir, entry.Name())
			c.CopyFileWithRetry(src, dst, 3)
		}
	}

	return nil
}

func (c *OneClickCollector) CollectRegistry(ctx context.Context, outputDir string) error {
	regDir := filepath.Join(outputDir, "registry")
	if err := os.MkdirAll(regDir, 0755); err != nil {
		return err
	}

	runKeys := []string{
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`,
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce`,
	}

	for _, keyPath := range runKeys {
		keyName := strings.ReplaceAll(keyPath, "\\", "_")
		keyName = strings.ReplaceAll(keyName, ":", "")
		outputPath := filepath.Join(regDir, keyName+".txt")

		cmd := fmt.Sprintf(`Get-ItemProperty -Path '%s' -ErrorAction SilentlyContinue | ConvertTo-Json -Compress`, keyPath)
		result := utils.RunPowerShell(cmd)
		if result.Success() && result.Output != "" {
			os.WriteFile(outputPath, []byte(result.Output), 0600)
		}
	}

	return nil
}

func (c *OneClickCollector) CollectAmcache(ctx context.Context, outputDir string) error {
	amcacheDir := filepath.Join(outputDir, "amcache")
	if err := os.MkdirAll(amcacheDir, 0755); err != nil {
		return err
	}

	entries, err := GetAmcache()
	if err != nil {
		return err
	}

	data, _ := json.MarshalIndent(entries, "", "  ")
	return os.WriteFile(filepath.Join(amcacheDir, "amcache.json"), data, 0600)
}

func (c *OneClickCollector) CollectUserAssist(ctx context.Context, outputDir string) error {
	uaDir := filepath.Join(outputDir, "userassist")
	if err := os.MkdirAll(uaDir, 0755); err != nil {
		return err
	}

	entries, err := GetUserAssist()
	if err != nil {
		return err
	}

	data, _ := json.MarshalIndent(entries, "", "  ")
	return os.WriteFile(filepath.Join(uaDir, "userassist.json"), data, 0600)
}

func (c *OneClickCollector) CollectUSNJournal(ctx context.Context, outputDir string) error {
	usnDir := filepath.Join(outputDir, "usnjournal")
	if err := os.MkdirAll(usnDir, 0755); err != nil {
		return err
	}

	for _, drive := range []string{"C:", "D:", "E:"} {
		entries, err := GetUSNJournal(drive)
		if err != nil {
			continue
		}
		data, _ := json.MarshalIndent(entries, "", "  ")
		fileName := fmt.Sprintf("usnjournal_%s.json", strings.TrimSuffix(drive, ":"))
		os.WriteFile(filepath.Join(usnDir, fileName), data, 0600)
	}

	return nil
}

func (c *OneClickCollector) CollectShimCache(ctx context.Context, outputDir string) error {
	shimDir := filepath.Join(outputDir, "shimcache")
	if err := os.MkdirAll(shimDir, 0755); err != nil {
		return err
	}

	entries, err := GetShimCache()
	if err != nil {
		return err
	}

	data, _ := json.MarshalIndent(entries, "", "  ")
	return os.WriteFile(filepath.Join(shimDir, "shimcache.json"), data, 0600)
}

func (c *OneClickCollector) CreateZipFromDir(sourceDir, zipPath string) error {
	zipFile, err := os.Create(zipPath)
	if err != nil {
		return err
	}
	defer zipFile.Close()

	writer := zip.NewWriter(zipFile)
	defer writer.Close()

	return filepath.Walk(sourceDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		header, _ := zip.FileInfoHeader(info)
		header.Name = strings.TrimPrefix(path, sourceDir)

		if info.IsDir() {
			header.Name += "/"
		}

		headerWriter, _ := writer.Create(header.Name)
		if info.IsDir() {
			return nil
		}

		file, _ := os.Open(path)
		defer file.Close()
		_, err = io.Copy(headerWriter, file)
		return err
	})
}

func (c *OneClickCollector) CalculateFileHashes(dir string) (map[string]string, error) {
	hashes := make(map[string]string)

	filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
		if err != nil || info.IsDir() {
			return nil
		}

		if hash, err := forensics.CalculateFileHash(path); err == nil {
			hashes[path] = hash.SHA256
		}
		return nil
	})

	return hashes, nil
}

func (c *OneClickCollector) DiscoverLogSources() ([]string, error) {
	sources := []string{
		`C:\Windows\System32\winevt\Logs`,
		`C:\Windows\System32\winevt\Microsoft`,
	}
	return sources, nil
}

func (c *OneClickCollector) IsFileLocked(path string) bool {
	f, err := os.OpenFile(path, os.O_RDWR, 0)
	if err != nil {
		return os.IsPermission(err) || os.IsExist(err)
	}
	f.Close()
	return false
}

func (c *OneClickCollector) CopyFileWithRetry(src, dst string, maxRetries int) error {
	var lastErr error
	for i := 0; i < maxRetries; i++ {
		if c.IsFileLocked(src) {
			time.Sleep(time.Second)
			continue
		}
		lastErr = copyFile(src, dst)
		if lastErr == nil {
			return nil
		}
		time.Sleep(time.Millisecond * 500)
	}
	return lastErr
}

func copyFile(src, dst string) error {
	sourceFile, err := os.Open(src)
	if err != nil {
		return err
	}
	defer sourceFile.Close()

	destDir := getDir(dst)
	if err := os.MkdirAll(destDir, 0755); err != nil {
		return err
	}

	destFile, err := os.Create(dst)
	if err != nil {
		return err
	}
	defer destFile.Close()

	buf := make([]byte, 32*1024)
	for {
		n, err := sourceFile.Read(buf)
		if n > 0 {
			if _, werr := destFile.Write(buf[:n]); werr != nil {
				return werr
			}
		}
		if err != nil {
			break
		}
	}

	sourceInfo, _ := sourceFile.Stat()
	os.Chtimes(dst, sourceInfo.ModTime(), sourceInfo.ModTime())

	return nil
}

func getDir(path string) string {
	for i := len(path) - 1; i >= 0; i-- {
		if path[i] == '\\' || path[i] == '/' {
			return path[:i]
		}
	}
	return "."
}

func (c *OneClickCollector) GenerateCollectReport(success bool, outputDir string) error {
	reportPath := filepath.Join(outputDir, "collection_report.txt")

	var report strings.Builder
	report.WriteString(fmt.Sprintf("WinLog One-Click Collection Report\n"))
	report.WriteString(fmt.Sprintf("===================================\n"))
	report.WriteString(fmt.Sprintf("Timestamp: %s\n", time.Now().Format(time.RFC3339)))
	report.WriteString(fmt.Sprintf("Success: %v\n", success))
	report.WriteString(fmt.Sprintf("Output Directory: %s\n", outputDir))

	if c.cfg.IncludePrefetch {
		report.WriteString(fmt.Sprintf("  - Prefetch: Enabled\n"))
	}
	if c.cfg.IncludeRegistry {
		report.WriteString(fmt.Sprintf("  - Registry: Enabled\n"))
	}
	if c.cfg.IncludeSystemInfo {
		report.WriteString(fmt.Sprintf("  - System Info: Enabled\n"))
	}
	if c.cfg.IncludeProcessSig || c.cfg.IncludeProcessDLLs {
		report.WriteString(fmt.Sprintf("  - Process Info: Enabled\n"))
	}

	return os.WriteFile(reportPath, []byte(report.String()), 0600)
}

type AmcacheEntry struct {
	Path   string `json:"path"`
	SHA1   string `json:"sha1"`
	Date   string `json:"date"`
	Volume string `json:"volume"`
}

type UserAssistEntry struct {
	Name       string `json:"name"`
	LastUpdate string `json:"last_update"`
	Count      int    `json:"count"`
}

type USNJournalEntry struct {
	SequenceNumber uint64 `json:"sequence_number"`
	Timestamp      string `json:"timestamp"`
	MajorFunc      uint32 `json:"major_func"`
	MinorFunc      uint32 `json:"minor_func"`
	Flags          uint32 `json:"flags"`
	FileName       string `json:"file_name"`
}

type ShimCacheEntry struct {
	Path         string `json:"path"`
	LastModified string `json:"last_modified"`
	Size         uint64 `json:"size"`
}

func GetAmcache() ([]AmcacheEntry, error) {
	return []AmcacheEntry{}, nil
}

func GetUserAssist() ([]UserAssistEntry, error) {
	return []UserAssistEntry{}, nil
}

func GetUSNJournal(drive string) ([]USNJournalEntry, error) {
	return []USNJournalEntry{}, nil
}

func GetShimCache() ([]ShimCacheEntry, error) {
	return []ShimCacheEntry{}, nil
}

func (c *OneClickCollector) CollectScheduledTasks(ctx context.Context, outputDir string) error {
	tasksDir := filepath.Join(outputDir, "scheduled_tasks")
	if err := os.MkdirAll(tasksDir, 0755); err != nil {
		return err
	}

	collector := NewTaskInfoCollector()
	tasks, err := collector.collectTaskInfo()
	if err != nil {
		return err
	}

	data, _ := json.MarshalIndent(tasks, "", "  ")
	return os.WriteFile(filepath.Join(tasksDir, "scheduled_tasks.json"), data, 0600)
}

func (c *OneClickCollector) CollectLocalUsers(ctx context.Context, outputDir string) error {
	usersDir := filepath.Join(outputDir, "local_users")
	if err := os.MkdirAll(usersDir, 0755); err != nil {
		return err
	}

	collector := NewUserInfoCollector()
	users, err := collector.collectUserInfo()
	if err != nil {
		return err
	}

	data, _ := json.MarshalIndent(users, "", "  ")
	return os.WriteFile(filepath.Join(usersDir, "local_users.json"), data, 0600)
}

func (c *OneClickCollector) CollectNetworkConnections(ctx context.Context, outputDir string) error {
	netDir := filepath.Join(outputDir, "network_connections")
	if err := os.MkdirAll(netDir, 0755); err != nil {
		return err
	}

	collector := NewNetworkInfoCollector()
	connections, err := collector.collectNetworkInfo()
	if err != nil {
		return err
	}

	data, _ := json.MarshalIndent(connections, "", "  ")
	return os.WriteFile(filepath.Join(netDir, "network_connections.json"), data, 0600)
}

func (c *OneClickCollector) CollectDrivers(ctx context.Context, outputDir string) error {
	driversDir := filepath.Join(outputDir, "drivers")
	if err := os.MkdirAll(driversDir, 0755); err != nil {
		return err
	}

	collector := NewDriverInfoCollector()
	drivers, err := collector.collectDriverInfo()
	if err != nil {
		return err
	}

	data, _ := json.MarshalIndent(drivers, "", "  ")
	return os.WriteFile(filepath.Join(driversDir, "drivers.json"), data, 0600)
}
