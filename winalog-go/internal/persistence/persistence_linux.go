//go:build !windows

package persistence

import (
	"context"
)

func RunAllDetectors(ctx context.Context) *DetectionResult {
	return NewDetectionResult()
}

func DetectByCategory(ctx context.Context, category string) *DetectionResult {
	return NewDetectionResult()
}

func DetectByTechnique(ctx context.Context, technique Technique) *DetectionResult {
	return NewDetectionResult()
}
