package collectors

import (
	"archive/zip"
	"context"
	"crypto/sha256"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type OneClickCollector struct {
	collectors []Collector
	cfg        CollectOptions
}

type CollectOptions struct {
	IncludeLogs       bool
	IncludePrefetch   bool
	IncludeShimcache  bool
	IncludeAmcache    bool
	IncludeUserassist bool
	IncludeRegistry   bool
	IncludeTasks      bool
	IncludeSystemInfo bool
	Compress          bool
	OutputPath        string
	Workers           int
}

func NewOneClickCollector(cfg CollectOptions) *OneClickCollector {
	oc := &OneClickCollector{
		cfg: cfg,
	}

	oc.collectors = []Collector{
		NewSystemInfoCollector(),
		NewProcessInfoCollector(),
		NewNetworkInfoCollector(),
		NewUserInfoCollector(),
	}

	if cfg.IncludeRegistry {
		oc.collectors = append(oc.collectors, NewRegistryInfoCollector())
	}

	if cfg.IncludeSystemInfo {
		oc.collectors = append(oc.collectors, NewSystemInfoCollector())
	}

	return oc
}

func (c *OneClickCollector) Collect(ctx context.Context) (*types.CollectResult, error) {
	startTime := time.Now()

	if c.cfg.OutputPath == "" {
		c.cfg.OutputPath = fmt.Sprintf("winalog_collect_%s.zip", time.Now().Format("20060102_150405"))
	}

	outputFile, err := os.Create(c.cfg.OutputPath)
	if err != nil {
		return nil, err
	}
	defer outputFile.Close()

	var zipWriter *zip.Writer
	if c.cfg.Compress {
		zipWriter = zip.NewWriter(outputFile)
		defer zipWriter.Close()
	}

	results := make(map[string]interface{})
	var collectErrors []error

	for _, collector := range c.collectors {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
		}

		data, err := collector.Collect(ctx)
		if err != nil {
			collectErrors = append(collectErrors, err)
			continue
		}

		results[collector.Name()] = data
	}

	if len(collectErrors) > 0 {
		return &types.CollectResult{
			Success:  false,
			Errors:   collectErrors,
			Duration: time.Since(startTime),
		}, fmt.Errorf("collection completed with %d errors", len(collectErrors))
	}

	return &types.CollectResult{
		Success:    true,
		OutputPath: c.cfg.OutputPath,
		FileCount:  len(results),
		Duration:   time.Since(startTime),
	}, nil
}

func (c *OneClickCollector) AddCollector(collector Collector) {
	c.collectors = append(c.collectors, collector)
}

func (c *OneClickCollector) ListCollectors() []string {
	names := make([]string, len(c.collectors))
	for i, col := range c.collectors {
		names[i] = col.Name()
	}
	return names
}

func (c *OneClickCollector) DiscoverLogSources() ([]string, error) {
	sources := []string{
		"C:\\Windows\\System32\\winevt\\Logs",
		"C:\\Windows\\System32\\winevt\\Microsoft",
	}

	var found []string
	for _, source := range sources {
		if _, err := os.Stat(source); err == nil {
			found = append(found, source)
		}
	}

	return found, nil
}

func (c *OneClickCollector) CheckFileLock(path string) bool {
	f, err := os.Open(path)
	if err != nil {
		return os.IsPermission(err)
	}
	f.Close()
	return false
}

func (c *OneClickCollector) CollectToZip(ctx context.Context, outputPath string) error {
	result, err := c.Collect(ctx)
	if err != nil {
		return err
	}

	if !result.Success {
		return fmt.Errorf("collection failed")
	}

	return nil
}

func RunOneClickCollection(ctx context.Context, opts CollectOptions) (*types.CollectResult, error) {
	collector := NewOneClickCollector(opts)
	return collector.Collect(ctx)
}

func CreateZipArchive(files []string, outputPath string) error {
	zipFile, err := os.Create(outputPath)
	if err != nil {
		return err
	}
	defer zipFile.Close()

	zipWriter := zip.NewWriter(zipFile)
	defer zipWriter.Close()

	for _, file := range files {
		f, err := os.Open(file)
		if err != nil {
			continue
		}

		info, _ := f.Stat()
		header, _ := zip.FileInfoHeader(info)
		header.Name = filepath.Base(file)

		writer, err := zipWriter.CreateHeader(header)
		if err != nil {
			f.Close()
			continue
		}

		io.Copy(writer, f)
		f.Close()
	}

	return nil
}

func CalculateSHA256(filePath string) (string, error) {
	f, err := os.Open(filePath)
	if err != nil {
		return "", err
	}
	defer f.Close()

	hash := sha256.New()
	if _, err := io.Copy(hash, f); err != nil {
		return "", err
	}

	return fmt.Sprintf("%x", hash.Sum(nil)), nil
}
