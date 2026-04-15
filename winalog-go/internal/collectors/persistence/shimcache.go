package collectors

import (
	"context"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type ShimCacheCollector struct{}

func NewShimCacheCollector() *ShimCacheCollector {
	return &ShimCacheCollector{}
}

func (c *ShimCacheCollector) Name() string {
	return "shimcache"
}

func (c *ShimCacheCollector) RequiresAdmin() bool {
	return true
}

func (c *ShimCacheCollector) Collect(ctx context.Context) ([]interface{}, error) {
	entries, err := c.collectShimCache()
	if err != nil {
		return nil, err
	}

	interfaces := make([]interface{}, len(entries))
	for i, e := range entries {
		interfaces[i] = e
	}
	return interfaces, nil
}

func (c *ShimCacheCollector) collectShimCache() ([]*types.ShimCacheEntry, error) {
	entries := make([]*types.ShimCacheEntry, 0)

	shim := &types.ShimCacheEntry{
		Path:          "C:\\Windows\\System32\\sample.exe",
		LastModified:  time.Now(),
		ExecutionTime: time.Now(),
		CollectedAt:   time.Now(),
	}

	entries = append(entries, shim)

	return entries, nil
}

type ShimCacheEntry struct {
	Path           string
	LastModified   time.Time
	LastUpdateTime time.Time
	ExecutionTime  time.Time
	Size           int
	Flag           int
}

func GetShimCache() ([]ShimCacheEntry, error) {
	return []ShimCacheEntry{}, nil
}

func ParseShimCache(regKey string) ([]*types.ShimCacheEntry, error) {
	return []*types.ShimCacheEntry{}, nil
}

func CollectShimCache(ctx context.Context) ([]*types.ShimCacheEntry, error) {
	collector := NewShimCacheCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	entries := make([]*types.ShimCacheEntry, 0, len(results))
	for _, r := range results {
		if e, ok := r.(*types.ShimCacheEntry); ok {
			entries = append(entries, e)
		}
	}
	return entries, nil
}
