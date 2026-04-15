//go:build windows
// +build windows

package collectors

import (
	"archive/zip"
	"context"
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

func (c *OneClickCollector) DiscoverLogSources() ([]string, error) {
	sources := []string{
		`C:\Windows\System32\winevt\Logs`,
		`C:\Windows\System32\winevt\Microsoft`,
	}

	windowsLogSources := []string{
		"Security",
		"System",
		"Application",
		"Setup",
		"ForwardedEvents",
	}

	var found []string
	for _, source := range sources {
		if _, err := os.Stat(source); err == nil {
			found = append(found, source)
		}
	}

	for _, logName := range windowsLogSources {
		cmd := fmt.Sprintf(`Get-WinEvent -ListLog '%s' -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FileName`, logName)
		result := utils.RunPowerShell(cmd)
		if result.Success() && result.Output != "" {
			for _, line := range strings.Split(result.Output, "\n") {
				path := strings.TrimSpace(line)
				if path != "" && !contains(found, path) {
					if _, err := os.Stat(path); err == nil {
						found = append(found, path)
					}
				}
			}
		}
	}

	return found, nil
}

func contains(slice []string, item string) bool {
	for _, s := range slice {
		if s == item {
			return true
		}
	}
	return false
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

		err := copyFile(src, dst)
		if err == nil {
			return nil
		}
		lastErr = err
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

	destDir := filepath.Dir(dst)
	if err := os.MkdirAll(destDir, 0755); err != nil {
		return err
	}

	destFile, err := os.Create(dst)
	if err != nil {
		return err
	}
	defer destFile.Close()

	_, err = io.Copy(destFile, sourceFile)
	if err != nil {
		return err
	}

	sourceInfo, _ := sourceFile.Stat()
	os.Chtimes(dst, sourceInfo.ModTime(), sourceInfo.ModTime())

	return nil
}

func (c *OneClickCollector) CollectEvtxLogs(ctx context.Context, outputDir string) error {
	logSources := []string{
		`C:\Windows\System32\winevt\Logs\Security.evtx`,
		`C:\Windows\System32\winevt\Logs\System.evtx`,
		`C:\Windows\System32\winevt\Logs\Application.evtx`,
		`C:\Windows\System32\winevt\Logs\Microsoft-Windows-Sysmon%4Operational.evtx`,
	}

	evtxDir := filepath.Join(outputDir, "evtx")
	if err := os.MkdirAll(evtxDir, 0755); err != nil {
		return err
	}

	workers := c.cfg.Workers
	if workers <= 0 {
		workers = 4
	}

	jobs := make(chan string, len(logSources))
	results := make(chan error, len(logSources))
	var wg sync.WaitGroup

	for w := 0; w < workers; w++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for src := range jobs {
				fileName := filepath.Base(src)
				dst := filepath.Join(evtxDir, fileName)
				if err := c.CopyFileWithRetry(src, dst, 3); err != nil {
					results <- err
				} else {
					results <- nil
				}
			}
		}()
	}

	for _, source := range logSources {
		if _, err := os.Stat(source); err == nil {
			jobs <- source
		}
	}

	close(jobs)
	wg.Wait()
	close(results)

	return nil
}

func (c *OneClickCollector) CollectPrefetch(ctx context.Context, outputDir string) error {
	if !c.cfg.IncludePrefetch {
		return nil
	}

	prefetchDir := `C:\Windows\Prefetch`
	if _, err := os.Stat(prefetchDir); os.IsNotExist(err) {
		return nil
	}

	destDir := filepath.Join(outputDir, "prefetch")
	if err := os.MkdirAll(destDir, 0755); err != nil {
		return err
	}

	entries, err := os.ReadDir(prefetchDir)
	if err != nil {
		return err
	}

	workers := c.cfg.Workers
	if workers <= 0 {
		workers = 4
	}

	jobs := make(chan string, len(entries))
	results := make(chan error, len(entries))
	var wg sync.WaitGroup

	for w := 0; w < workers; w++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for entry := range jobs {
				src := filepath.Join(prefetchDir, entry.Name())
				dst := filepath.Join(destDir, entry.Name())
				if err := c.CopyFileWithRetry(src, dst, 3); err != nil {
					results <- err
				} else {
					results <- nil
				}
			}
		}()
	}

	for _, entry := range entries {
		if !entry.IsDir() && strings.HasSuffix(strings.ToLower(entry.Name()), ".pf") {
			jobs <- filepath.Join(prefetchDir, entry.Name())
		}
	}

	close(jobs)
	wg.Wait()
	close(results)

	return nil
}

func (c *OneClickCollector) CollectRegistry(ctx context.Context, outputDir string) error {
	if !c.cfg.IncludeRegistry {
		return nil
	}

	regDir := filepath.Join(outputDir, "registry")
	if err := os.MkdirAll(regDir, 0755); err != nil {
		return err
	}

	collector := NewRegistryInfoCollector()
	data, err := collector.Collect(ctx)
	if err != nil {
		return err
	}

	reportFile := filepath.Join(regDir, "persistence.json")
	content, _ := json.MarshalIndent(data, "", "  ")
	return os.WriteFile(reportFile, content, 0644)
}

func (c *OneClickCollector) CollectSystemInfo(ctx context.Context, outputDir string) error {
	if !c.cfg.IncludeSystemInfo {
		return nil
	}

	infoDir := filepath.Join(outputDir, "system_info")
	if err := os.MkdirAll(infoDir, 0755); err != nil {
		return err
	}

	var wg sync.WaitGroup
	var mu sync.Mutex
	var errors []error

	collectors := map[string]Collector{
		"process": NewProcessInfoCollector(),
		"network": NewNetworkInfoCollector(),
		"user":    NewUserInfoCollector(),
		"driver":  NewDriverInfoCollector(),
		"task":    NewTaskInfoCollector(),
	}

	for name, col := range collectors {
		wg.Add(1)
		go func(colName string, col Collector) {
			defer wg.Done()
			data, err := col.Collect(ctx)
			if err != nil {
				mu.Lock()
				errors = append(errors, err)
				mu.Unlock()
				return
			}

			reportFile := filepath.Join(infoDir, colName+".json")
			content, _ := json.MarshalIndent(data, "", "  ")
			if err := os.WriteFile(reportFile, content, 0644); err != nil {
				mu.Lock()
				errors = append(errors, err)
				mu.Unlock()
			}
		}(name, col)
	}

	wg.Wait()

	if len(errors) > 0 {
		return errors[0]
	}
	return nil
}

func (c *OneClickCollector) CalculateFileHashes(dir string) (map[string]string, error) {
	hashes := make(map[string]string)

	err := filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return nil
		}

		if info.IsDir() {
			return nil
		}

		hash, err := CalculateSHA256(path)
		if err == nil {
			relPath, _ := filepath.Rel(dir, path)
			hashes[relPath] = hash
		}

		return nil
	})

	return hashes, nil
}

func (c *OneClickCollector) GenerateCollectReport(result *types.CollectResult, outputDir string) error {
	report := map[string]interface{}{
		"timestamp":         time.Now().Format(time.RFC3339),
		"hostname":          getHostname(),
		"collection_result": result,
		"version":           "1.0.0",
	}

	reportFile := filepath.Join(outputDir, "collection_report.json")
	content, _ := json.MarshalIndent(report, "", "  ")
	return os.WriteFile(reportFile, content, 0644)
}

func getHostname() string {
	cmd := `hostname`
	result := utils.RunPowerShell(cmd)
	if result.Success() {
		return strings.TrimSpace(result.Output)
	}
	return "unknown"
}

func (c *OneClickCollector) FullCollect(ctx context.Context) (*types.CollectResult, error) {
	startTime := time.Now()

	if c.cfg.OutputPath == "" {
		c.cfg.OutputPath = fmt.Sprintf("winalog_collect_%s.zip", time.Now().Format("20060102_150405"))
	}

	tempDir := filepath.Join(os.TempDir(), fmt.Sprintf("winalog_collect_%d", time.Now().Unix()))

	if err := os.MkdirAll(tempDir, 0755); err != nil {
		return nil, err
	}
	defer os.RemoveAll(tempDir)

	var collectErrors []error

	if err := c.CollectEvtxLogs(ctx, tempDir); err != nil {
		collectErrors = append(collectErrors, err)
	}

	if err := c.CollectPrefetch(ctx, tempDir); err != nil {
		collectErrors = append(collectErrors, err)
	}

	if err := c.CollectRegistry(ctx, tempDir); err != nil {
		collectErrors = append(collectErrors, err)
	}

	if err := c.CollectSystemInfo(ctx, tempDir); err != nil {
		collectErrors = append(collectErrors, err)
	}

	hashes, err := c.CalculateFileHashes(tempDir)
	if err == nil {
		hashFile := filepath.Join(tempDir, "file_hashes.json")
		content, _ := json.MarshalIndent(hashes, "", "  ")
		os.WriteFile(hashFile, content, 0644)
	}

	zipPath := c.cfg.OutputPath
	if !strings.HasSuffix(zipPath, ".zip") {
		zipPath += ".zip"
	}

	if err := CreateZipFromDir(tempDir, zipPath); err != nil {
		collectErrors = append(collectErrors, err)
	}

	c.GenerateCollectReport(&types.CollectResult{
		Success:    len(collectErrors) == 0,
		OutputPath: zipPath,
		Duration:   time.Since(startTime),
	}, tempDir)

	if len(collectErrors) > 0 {
		return &types.CollectResult{
			Success:  false,
			Errors:   collectErrors,
			Duration: time.Since(startTime),
		}, collectErrors[0]
	}

	return &types.CollectResult{
		Success:    true,
		OutputPath: zipPath,
		Duration:   time.Since(startTime),
	}, nil
}

func CreateZipFromDir(sourceDir, zipPath string) error {
	zipFile, err := os.Create(zipPath)
	if err != nil {
		return err
	}
	defer zipFile.Close()

	zipWriter := zip.NewWriter(zipFile)
	defer zipWriter.Close()

	return filepath.Walk(sourceDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		relPath, err := filepath.Rel(sourceDir, path)
		if err != nil {
			return err
		}

		if relPath == "." {
			return nil
		}

		header, err := zip.FileInfoHeader(info)
		if err != nil {
			return err
		}
		header.Name = relPath

		if info.IsDir() {
			header.Name += "/"
		}

		writer, err := zipWriter.CreateHeader(header)
		if err != nil {
			return err
		}

		if !info.IsDir() {
			file, err := os.Open(path)
			if err != nil {
				return err
			}
			defer file.Close()
			_, err = io.Copy(writer, file)
		}

		return err
	})
}
