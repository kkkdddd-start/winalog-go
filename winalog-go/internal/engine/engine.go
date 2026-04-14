package engine

import (
	"context"
	"fmt"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/parsers"
	"github.com/kkkdddd-start/winalog-go/internal/parsers/csv"
	"github.com/kkkdddd-start/winalog-go/internal/parsers/etl"
	"github.com/kkkdddd-start/winalog-go/internal/parsers/evtx"
	"github.com/kkkdddd-start/winalog-go/internal/parsers/iis"
	"github.com/kkkdddd-start/winalog-go/internal/parsers/sysmon"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type Engine struct {
	db        *storage.DB
	parsers   *parsers.ParserRegistry
	eventRepo *storage.EventRepo
	alertRepo *storage.AlertRepo
	importCfg ImportConfig
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
}

func NewEngine(db *storage.DB) *Engine {
	e := &Engine{
		db:        db,
		parsers:   parsers.NewParserRegistry(),
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
	}

	e.registerParsers()
	return e
}

func (e *Engine) registerParsers() {
	e.parsers.Register(evtx.NewEvtxParser())
	e.parsers.Register(etl.NewEtlParser())
	e.parsers.Register(csv.NewCsvParser())
	e.parsers.Register(iis.NewIISParser())
	e.parsers.Register(sysmon.NewSysmonParser())
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
				progressFn(&ImportProgress{
					TotalFiles:      result.TotalFiles,
					CurrentFile:     idx + 1,
					CurrentFileName: filepath.Base(path),
					EventsImported:  result.EventsImported,
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

	for event := range events {
		select {
		case <-ctx.Done():
			return &ImportResult{EventsImported: totalEvents}, ctx.Err()
		default:
		}

		batch = append(batch, event)
		if len(batch) >= e.importCfg.BatchSize {
			if err := e.eventRepo.InsertBatch(batch); err != nil {
				lastErr = err
				break
			}
			totalEvents += int64(len(batch))
			batch = batch[:0]
		}
	}

	if len(batch) > 0 {
		if err := e.eventRepo.InsertBatch(batch); err != nil {
			lastErr = err
		}
		totalEvents += int64(len(batch))
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

	start := time.Now()
	events, total, err := e.eventRepo.Search(req)
	if err != nil {
		return nil, err
	}

	totalPages := int(total) / req.PageSize
	if int(total)%req.PageSize > 0 {
		totalPages++
	}

	return &types.SearchResponse{
		Events:     events,
		Total:      total,
		Page:       req.Page,
		PageSize:   req.PageSize,
		TotalPages: totalPages,
		QueryTime:  time.Since(start).Milliseconds(),
	}, nil
}

func (e *Engine) GetStats() (*storage.DBStats, error) {
	return e.db.GetStats()
}

func (e *Engine) GetParserRegistry() *parsers.ParserRegistry {
	return e.parsers
}
