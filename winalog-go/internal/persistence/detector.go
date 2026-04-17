//go:build windows

package persistence

import (
	"context"
	"fmt"
	"sync"
	"time"

	"github.com/google/uuid"
)

type Detector interface {
	Name() string
	Detect(ctx context.Context) ([]*Detection, error)
	RequiresAdmin() bool
	GetTechnique() Technique
}

type DetectorInfo struct {
	Name          string
	Description   string
	Technique     Technique
	RequiresAdmin bool
}

type DetectionEngine struct {
	detectors     map[string]Detector
	result        *DetectionResult
	mu            sync.RWMutex
	adminRequired bool
}

func NewDetectionEngine() *DetectionEngine {
	return &DetectionEngine{
		detectors: make(map[string]Detector),
		result:    NewDetectionResult(),
	}
}

func (e *DetectionEngine) Register(d Detector) {
	e.mu.Lock()
	defer e.mu.Unlock()
	e.detectors[d.Name()] = d
	if d.RequiresAdmin() {
		e.adminRequired = true
	}
}

func (e *DetectionEngine) RegisterAll(detectors []Detector) {
	for _, d := range detectors {
		e.Register(d)
	}
}

func (e *DetectionEngine) Detect(ctx context.Context) *DetectionResult {
	e.mu.Lock()
	defer e.mu.Unlock()

	e.result = NewDetectionResult()

	var wg sync.WaitGroup
	resultChan := make(chan *Detection, 100)
	errorChan := make(chan string, 10)

	for name, d := range e.detectors {
		wg.Add(1)
		go func(name string, d Detector) {
			defer wg.Done()

			detections, err := d.Detect(ctx)
			if err != nil {
				errorChan <- fmt.Sprintf("%s: %v", name, err)
				return
			}

			for _, det := range detections {
				if det.ID == "" {
					det.ID = uuid.New().String()
				}
				if det.Time.IsZero() {
					det.Time = time.Now()
				}
				resultChan <- det
			}
		}(name, d)
	}

	go func() {
		wg.Wait()
		close(resultChan)
		close(errorChan)
	}()

	for det := range resultChan {
		e.result.Add(det)
	}

	for errMsg := range errorChan {
		e.result.Errors = append(e.result.Errors, errMsg)
		e.result.ErrorCount++
	}

	e.result.EndTime = time.Now()
	e.result.Duration = e.result.EndTime.Sub(e.result.StartTime)

	return e.result
}

func (e *DetectionEngine) DetectCategory(ctx context.Context, category string) *DetectionResult {
	e.mu.RLock()
	defer e.mu.RUnlock()

	result := NewDetectionResult()

	for _, d := range e.detectors {
		detections, err := d.Detect(ctx)
		if err != nil {
			continue
		}

		for _, det := range detections {
			if det.Category == category {
				if det.ID == "" {
					det.ID = uuid.New().String()
				}
				result.Add(det)
			}
		}
	}

	return result
}

func (e *DetectionEngine) DetectTechnique(ctx context.Context, technique Technique) *DetectionResult {
	e.mu.RLock()
	defer e.mu.RUnlock()

	result := NewDetectionResult()

	for _, d := range e.detectors {
		if d.GetTechnique() != technique {
			continue
		}

		detections, err := d.Detect(ctx)
		if err != nil {
			continue
		}

		for _, det := range detections {
			if det.ID == "" {
				det.ID = uuid.New().String()
			}
			result.Add(det)
		}
	}

	return result
}

func (e *DetectionEngine) ListDetectors() []DetectorInfo {
	e.mu.RLock()
	defer e.mu.RUnlock()

	infos := make([]DetectorInfo, 0, len(e.detectors))
	for _, d := range e.detectors {
		infos = append(infos, DetectorInfo{
			Name:          d.Name(),
			Technique:     d.GetTechnique(),
			RequiresAdmin: d.RequiresAdmin(),
		})
	}
	return infos
}

func (e *DetectionEngine) RequiresAdmin() bool {
	return e.adminRequired
}

func (e *DetectionEngine) GetResult() *DetectionResult {
	e.mu.RLock()
	defer e.mu.RUnlock()
	return e.result
}

func RunAllDetectors(ctx context.Context) *DetectionResult {
	engine := NewDetectionEngine()
	registerAllDetectors(engine)
	return engine.Detect(ctx)
}

func DetectByCategory(ctx context.Context, category string) *DetectionResult {
	engine := NewDetectionEngine()
	registerAllDetectors(engine)
	return engine.DetectCategory(ctx, category)
}

func DetectByTechnique(ctx context.Context, technique Technique) *DetectionResult {
	engine := NewDetectionEngine()
	registerAllDetectors(engine)
	return engine.DetectTechnique(ctx, technique)
}

func AllDetectors() []Detector {
	return []Detector{
		NewRunKeyDetector(),
		NewUserInitDetector(),
		NewStartupFolderDetector(),
		NewAccessibilityDetector(),
		NewCOMHijackDetector(),
		NewIFEODetector(),
		NewAppInitDetector(),
		NewWMIPersistenceDetector(),
		NewServicePersistenceDetector(),
		NewLSAPersistenceDetector(),
		NewWinsockDetector(),
		NewBHODetector(),
		NewPrintMonitorDetector(),
		NewBootExecuteDetector(),
		NewETWDetector(),
	}
}

func registerAllDetectors(engine *DetectionEngine) {
	for _, d := range AllDetectors() {
		engine.Register(d)
	}
}

func RunAllDetectorsWithProgress(ctx context.Context, progressChan chan<- string) *DetectionResult {
	engine := NewDetectionEngine()
	registerAllDetectors(engine)

	detectors := engine.ListDetectors()
	total := len(detectors)

	result := NewDetectionResult()
	var wg sync.WaitGroup
	resultChan := make(chan *Detection, 100)
	errorChan := make(chan string, 10)

	for i, info := range detectors {
		wg.Add(1)
		detectorName := info.Name
		go func(idx int, name string, d Detector) {
			defer wg.Done()

			progressChan <- fmt.Sprintf("Running %s (%d/%d)", name, idx+1, total)

			detections, err := d.Detect(ctx)
			if err != nil {
				errorChan <- fmt.Sprintf("%s: %v", name, err)
				return
			}

			for _, det := range detections {
				if det.ID == "" {
					det.ID = uuid.New().String()
				}
				if det.Time.IsZero() {
					det.Time = time.Now()
				}
				resultChan <- det
			}
		}(i, detectorName, engine.detectors[detectorName])
	}

	go func() {
		wg.Wait()
		close(resultChan)
		close(errorChan)
	}()

	for det := range resultChan {
		result.Add(det)
	}

	for errMsg := range errorChan {
		result.Errors = append(result.Errors, errMsg)
		result.ErrorCount++
	}

	progressChan <- "complete"
	return result
}
