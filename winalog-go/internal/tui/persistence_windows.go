//go:build windows

package tui

import (
	"context"

	"github.com/kkkdddd-start/winalog-go/internal/persistence"
)

func runPersistenceDetectors(ctx context.Context) *persistence.DetectionResult {
	return persistence.RunAllDetectors(ctx)
}
