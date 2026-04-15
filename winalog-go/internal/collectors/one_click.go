//go:build windows

package collectors

import (
	"context"
	"fmt"
	"os"
	"time"
)

type OneClickCollector struct {
	BaseCollector
	cfg CollectConfig
}

type CollectConfig struct {
	Workers           int
	IncludePrefetch   bool
	IncludeRegistry   bool
	IncludeSystemInfo bool
	OutputPath        string
}

type CollectOptions struct {
	Workers           int
	IncludePrefetch   bool
	IncludeRegistry   bool
	IncludeSystemInfo bool
	OutputPath        string
	Compress          bool
	CalculateHash     bool
}

type OneClickResult struct {
	OutputPath string
	Duration   time.Duration
	Success    bool
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
			Workers: 4,
		},
	}
}

func (c *OneClickCollector) Collect(ctx context.Context) ([]interface{}, error) {
	return nil, nil
}

func RunOneClickCollection(ctx context.Context, opts interface{}) (interface{}, error) {
	c := NewOneClickCollector()

	if opts != nil {
		if collectOpts, ok := opts.(CollectOptions); ok {
			c.cfg.Workers = collectOpts.Workers
			c.cfg.IncludePrefetch = collectOpts.IncludePrefetch
			c.cfg.IncludeRegistry = collectOpts.IncludeRegistry
			c.cfg.IncludeSystemInfo = collectOpts.IncludeSystemInfo
			if collectOpts.OutputPath != "" {
				c.cfg.OutputPath = collectOpts.OutputPath
			}
		}
	}

	startTime := time.Now()
	outputPath, err := c.FullCollect(ctx)
	if err != nil {
		return nil, err
	}
	return &OneClickResult{
		OutputPath: outputPath,
		Duration:   time.Since(startTime),
		Success:    true,
	}, nil
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

func (c *OneClickCollector) CollectEvtxLogs(ctx context.Context, outputDir string) error {
	return nil
}

func (c *OneClickCollector) CollectPrefetch(ctx context.Context, outputDir string) error {
	return nil
}

func (c *OneClickCollector) CollectRegistry(ctx context.Context, outputDir string) error {
	return nil
}

func (c *OneClickCollector) CollectSystemInfo(ctx context.Context, outputDir string) error {
	return nil
}

func (c *OneClickCollector) CalculateFileHashes(dir string) (map[string]string, error) {
	return make(map[string]string), nil
}

func (c *OneClickCollector) GenerateCollectReport(success bool, outputDir string) error {
	return nil
}

func (c *OneClickCollector) FullCollect(ctx context.Context) (string, error) {
	startTime := time.Now()

	if c.cfg.OutputPath == "" {
		c.cfg.OutputPath = fmt.Sprintf("winalog_collect_%s.zip", time.Now().Format("20060102_150405"))
	}

	if err := c.CollectEvtxLogs(ctx, os.TempDir()); err != nil {
		return "", err
	}

	if err := c.CollectPrefetch(ctx, os.TempDir()); err != nil {
		return "", err
	}

	if err := c.CollectRegistry(ctx, os.TempDir()); err != nil {
		return "", err
	}

	if err := c.CollectSystemInfo(ctx, os.TempDir()); err != nil {
		return "", err
	}

	_ = startTime
	return c.cfg.OutputPath, nil
}

func CreateZipFromDir(sourceDir, zipPath string) error {
	return nil
}
