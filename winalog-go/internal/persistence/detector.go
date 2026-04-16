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

	engine.Register(NewRunKeyDetector())
	engine.Register(NewUserInitDetector())
	engine.Register(NewStartupFolderDetector())
	engine.Register(NewAccessibilityDetector())
	engine.Register(NewCOMHijackDetector())
	engine.Register(NewIFEODetector())
	engine.Register(NewAppInitDetector())
	engine.Register(NewWMIPersistenceDetector())
	engine.Register(NewServicePersistenceDetector())
	engine.Register(NewLSAPersistenceDetector())
	engine.Register(NewWinsockDetector())
	engine.Register(NewBHODetector())
	engine.Register(NewPrintMonitorDetector())
	engine.Register(NewBootExecuteDetector())
	engine.Register(NewETWDetector())

	return engine.Detect(ctx)
}

func DetectByCategory(ctx context.Context, category string) *DetectionResult {
	engine := NewDetectionEngine()

	engine.Register(NewRunKeyDetector())
	engine.Register(NewUserInitDetector())
	engine.Register(NewStartupFolderDetector())
	engine.Register(NewAccessibilityDetector())
	engine.Register(NewCOMHijackDetector())
	engine.Register(NewIFEODetector())
	engine.Register(NewAppInitDetector())
	engine.Register(NewWMIPersistenceDetector())
	engine.Register(NewServicePersistenceDetector())
	engine.Register(NewLSAPersistenceDetector())
	engine.Register(NewWinsockDetector())
	engine.Register(NewBHODetector())
	engine.Register(NewPrintMonitorDetector())
	engine.Register(NewBootExecuteDetector())
	engine.Register(NewETWDetector())

	return engine.DetectCategory(ctx, category)
}

func DetectByTechnique(ctx context.Context, technique Technique) *DetectionResult {
	engine := NewDetectionEngine()

	engine.Register(NewRunKeyDetector())
	engine.Register(NewUserInitDetector())
	engine.Register(NewStartupFolderDetector())
	engine.Register(NewAccessibilityDetector())
	engine.Register(NewCOMHijackDetector())
	engine.Register(NewIFEODetector())
	engine.Register(NewAppInitDetector())
	engine.Register(NewWMIPersistenceDetector())
	engine.Register(NewServicePersistenceDetector())
	engine.Register(NewLSAPersistenceDetector())
	engine.Register(NewWinsockDetector())
	engine.Register(NewBHODetector())
	engine.Register(NewPrintMonitorDetector())
	engine.Register(NewBootExecuteDetector())
	engine.Register(NewETWDetector())

	return engine.DetectTechnique(ctx, technique)
}
