package engine

import (
	"context"
	"fmt"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/parsers"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type Engine struct {
	db          *storage.DB
	parsers     *parsers.ParserRegistry
	eventRepo   *storage.EventRepo
	alertRepo   *storage.AlertRepo
	importCfg   ImportConfig
	searchCache *searchCache
}

type searchCache struct {
	mu      sync.RWMutex
	entries map[string]*cacheEntry
	maxAge  time.Duration
	maxSize int
}

type cacheEntry struct {
	result  *types.SearchResponse
	created time.Time
	key     string
}

type ImportConfig struct {
	Workers          int
	BatchSize        int
	SkipPatterns     []string
	Incremental      bool
	CalculateHash    bool
	ProgressCallback bool
}

type ImportProgress struct {
	TotalFiles      int
	CurrentFile     int
	CurrentFileName string
	EventsImported  int64
	BytesProcessed  int64
	EventsPerSec    float64
	EstimatedLeft   time.Duration
}

func NewEngine(db *storage.DB) *Engine {
	e := &Engine{
		db:        db,
		parsers:   parsers.GetGlobalRegistry(),
		eventRepo: storage.NewEventRepo(db),
		alertRepo: storage.NewAlertRepo(db),
		importCfg: ImportConfig{
			Workers:          4,
			BatchSize:        10000,
			SkipPatterns:     []string{"Diagnostics", "Debug"},
			Incremental:      true,
			CalculateHash:    true,
			ProgressCallback: true,
		},
		searchCache: &searchCache{
			entries: make(map[string]*cacheEntry),
			maxAge:  30 * time.Second,
			maxSize: 100,
		},
	}

	return e
}

func (e *Engine) SetImportConfig(cfg ImportConfig) {
	e.importCfg = cfg
}

func (e *Engine) Import(ctx context.Context, req *ImportRequest, progressFn func(*ImportProgress)) (*ImportResult, error) {
	result := &ImportResult{
		StartTime: time.Now(),
	}

	files := collectFiles(req.Paths, e.importCfg.SkipPatterns)
	if len(files) == 0 {
		return nil, fmt.Errorf("no files found to import")
	}

	result.TotalFiles = len(files)

	workerPool := make(chan struct{}, e.importCfg.Workers)
	var wg sync.WaitGroup
	var mu sync.Mutex
	startTime := time.Now()

	for i, file := range files {
		select {
		case <-ctx.Done():
			return result, ctx.Err()
		default:
		}

		workerPool <- struct{}{}
		wg.Add(1)

		go func(idx int, path string) {
			defer wg.Done()
			defer func() { <-workerPool }()

			fileResult, err := e.importFile(ctx, path)
			mu.Lock()
			if err != nil {
				result.FilesFailed++
				result.Errors = append(result.Errors, &types.ImportError{
					FilePath: path,
					Error:    err.Error(),
				})
			} else {
				result.FilesImported++
				result.EventsImported += fileResult.EventsImported
			}
			if progressFn != nil {
				elapsed := time.Since(startTime)
				eventsPerSec := float64(result.EventsImported) / elapsed.Seconds()
				remainingFiles := len(files) - idx - 1
				var eta time.Duration
				if eventsPerSec > 0 && remainingFiles > 0 {
					avgEventsPerFile := float64(result.EventsImported) / float64(idx+1)
					remainingEvents := int64(avgEventsPerFile * float64(remainingFiles))
					eta = time.Duration(float64(remainingEvents) / eventsPerSec * float64(time.Second))
				}
				progressFn(&ImportProgress{
					TotalFiles:      result.TotalFiles,
					CurrentFile:     idx + 1,
					CurrentFileName: filepath.Base(path),
					EventsImported:  result.EventsImported,
					EventsPerSec:    eventsPerSec,
					EstimatedLeft:   eta,
				})
			}
			mu.Unlock()
		}(i, file)
	}

	wg.Wait()
	result.Duration = time.Since(result.StartTime)
	return result, nil
}

func (e *Engine) importFile(ctx context.Context, path string) (*ImportResult, error) {
	parser := e.parsers.Get(path)
	if parser == nil {
		return nil, fmt.Errorf("no parser found for %s", path)
	}

	startTime := time.Now()
	events := parser.Parse(path)

	var batch []*types.Event
	var totalEvents int64
	var lastErr error
	var batchNum int

	for event := range events {
		select {
		case <-ctx.Done():
			return &ImportResult{EventsImported: totalEvents}, ctx.Err()
		default:
		}

		batch = append(batch, event)
		if len(batch) >= e.importCfg.BatchSize {
			batchNum++
			if err := e.eventRepo.InsertBatch(batch); err != nil {
				lastErr = fmt.Errorf("batch %d failed: %w", batchNum, err)
			} else {
				totalEvents += int64(len(batch))
			}
			batch = batch[:0]
		}
	}

	if len(batch) > 0 {
		batchNum++
		if err := e.eventRepo.InsertBatch(batch); err != nil {
			lastErr = fmt.Errorf("batch %d (final) failed: %w", batchNum, err)
		} else {
			totalEvents += int64(len(batch))
		}
		batch = batch[:0]
	}

	duration := time.Since(startTime)
	e.db.InsertImportLog(path, "", int(totalEvents), int(duration.Milliseconds()), "success", "")

	return &ImportResult{
		EventsImported: totalEvents,
		Duration:       duration,
	}, lastErr
}

type ImportResult struct {
	StartTime      time.Time
	Duration       time.Duration
	TotalFiles     int
	FilesImported  int
	FilesFailed    int
	EventsImported int64
	Errors         []*types.ImportError
}

type ImportRequest struct {
	Paths            []string
	LogName          string
	Incremental      bool
	SkipPatterns     []string
	Workers          int
	BatchSize        int
	CalculateHash    bool
	ProgressCallback func(*ImportProgress)
}

func collectFiles(paths []string, skipPatterns []string) []string {
	var files []string
	for _, path := range paths {
		ext := strings.ToLower(filepath.Ext(path))
		if ext == ".evtx" || ext == ".etl" || ext == ".csv" || ext == ".log" || ext == ".txt" {
			if !shouldSkip(path, skipPatterns) {
				files = append(files, path)
			}
		}
	}
	return files
}

func shouldSkip(path string, patterns []string) bool {
	for _, pattern := range patterns {
		if strings.Contains(path, pattern) {
			return true
		}
	}
	return false
}

func (e *Engine) Search(req *types.SearchRequest) (*types.SearchResponse, error) {
	if req.Page <= 0 {
		req.Page = 1
	}
	if req.PageSize <= 0 {
		req.PageSize = 100
	}
	if req.SortOrder == "" {
		req.SortOrder = "desc"
	}

	cacheKey := e.generateCacheKey(req)
	if entry := e.searchCache.get(cacheKey); entry != nil {
		return entry.result, nil
	}

	start := time.Now()
	events, total, err := e.eventRepo.Search(req)
	if err != nil {
		return nil, err
	}

	totalPages := int(total) / req.PageSize
	if int(total)%req.PageSize > 0 {
		totalPages++
	}

	result := &types.SearchResponse{
		Events:     events,
		Total:      total,
		Page:       req.Page,
		PageSize:   req.PageSize,
		TotalPages: totalPages,
		QueryTime:  time.Since(start).Milliseconds(),
	}

	e.searchCache.set(cacheKey, result)

	return result, nil
}

func (e *Engine) generateCacheKey(req *types.SearchRequest) string {
	return fmt.Sprintf("%d|%d|%s|%s|%v|%v|%v|%v|%v|%v",
		req.Page, req.PageSize, req.SortOrder, req.Keywords,
		req.EventIDs, req.Levels, req.LogNames, req.Sources, req.Computers, req.Users)
}

func (c *searchCache) get(key string) *cacheEntry {
	c.mu.RLock()
	defer c.mu.RUnlock()

	if entry, ok := c.entries[key]; ok {
		if time.Since(entry.created) < c.maxAge {
			return entry
		}
	}
	return nil
}

func (c *searchCache) set(key string, result *types.SearchResponse) {
	c.mu.Lock()
	defer c.mu.Unlock()

	if len(c.entries) >= c.maxSize {
		c.evictOldest()
	}

	c.entries[key] = &cacheEntry{
		result:  result,
		created: time.Now(),
		key:     key,
	}
}

func (c *searchCache) evictOldest() {
	var oldestKey string
	var oldestTime time.Time
	for key, entry := range c.entries {
		if oldestTime.IsZero() || entry.created.Before(oldestTime) {
			oldestTime = entry.created
			oldestKey = key
		}
	}
	if oldestKey != "" {
		delete(c.entries, oldestKey)
	}
}

func (e *Engine) GetStats() (*storage.DBStats, error) {
	return e.db.GetStats()
}

func (e *Engine) GetParserRegistry() *parsers.ParserRegistry {
	return e.parsers
}
