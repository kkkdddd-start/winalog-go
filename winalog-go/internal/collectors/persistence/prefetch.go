package collectors

import (
	"context"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type PrefetchCollector struct{}

func NewPrefetchCollector() *PrefetchCollector {
	return &PrefetchCollector{}
}

func (c *PrefetchCollector) Name() string {
	return "prefetch"
}

func (c *PrefetchCollector) RequiresAdmin() bool {
	return true
}

func (c *PrefetchCollector) Collect(ctx context.Context) ([]interface{}, error) {
	entries, err := c.collectPrefetch()
	if err != nil {
		return nil, err
	}

	interfaces := make([]interface{}, len(entries))
	for i, e := range entries {
		interfaces[i] = e
	}
	return interfaces, nil
}

func (c *PrefetchCollector) collectPrefetch() ([]*types.PrefetchEntry, error) {
	entries := make([]*types.PrefetchEntry, 0)

	prefetch := &types.PrefetchEntry{
		Name:        "SAMPLE.EXE",
		Path:        "C:\\Windows\\Prefetch\\SAMPLE.EXE-12345678.pf",
		LastRunTime: time.Now(),
		RunCount:    1,
		CollectedAt: time.Now(),
	}

	entries = append(entries, prefetch)

	return entries, nil
}

type PrefetchInfo struct {
	Name             string
	Path             string
	LastRunTime      time.Time
	RunCount         int
	LastModifiedTime time.Time
}

func ListPrefetchFiles() ([]PrefetchInfo, error) {
	return []PrefetchInfo{}, nil
}

func GetPrefetchInfo(prefetchPath string) (*PrefetchInfo, error) {
	return &PrefetchInfo{Path: prefetchPath}, nil
}

func ParsePrefetch(prefetchPath string) (*types.PrefetchEntry, error) {
	return &types.PrefetchEntry{Path: prefetchPath}, nil
}

func CollectPrefetch(ctx context.Context) ([]*types.PrefetchEntry, error) {
	collector := NewPrefetchCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	entries := make([]*types.PrefetchEntry, 0, len(results))
	for _, r := range results {
		if e, ok := r.(*types.PrefetchEntry); ok {
			entries = append(entries, e)
		}
	}
	return entries, nil
}
