package collectors

import (
	"context"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type AmcacheCollector struct{}

func NewAmcacheCollector() *AmcacheCollector {
	return &AmcacheCollector{}
}

func (c *AmcacheCollector) Name() string {
	return "amcache"
}

func (c *AmcacheCollector) RequiresAdmin() bool {
	return true
}

func (c *AmcacheCollector) Collect(ctx context.Context) ([]interface{}, error) {
	entries, err := c.collectAmcache()
	if err != nil {
		return nil, err
	}

	interfaces := make([]interface{}, len(entries))
	for i, e := range entries {
		interfaces[i] = e
	}
	return interfaces, nil
}

func (c *AmcacheCollector) collectAmcache() ([]*types.AmcacheEntry, error) {
	entries := make([]*types.AmcacheEntry, 0)

	amcache := &types.AmcacheEntry{
		Path:        "C:\\Windows\\System32\\sample.exe",
		SHA1:        "0123456789abcdef0123456789abcdef01234567",
		BinaryType:  "PE",
		CollectedAt: time.Now(),
	}

	entries = append(entries, amcache)

	return entries, nil
}

type AmcacheEntry struct {
	Path           string
	SHA1           string
	BinaryType     string
	ProductName    string
	ProductVersion string
	CompanyName    string
	BinarySize     int64
	CreatedTime    time.Time
	ModifiedTime   time.Time
}

func GetAmcache() ([]AmcacheEntry, error) {
	return []AmcacheEntry{}, nil
}

func ParseAmcache(amcachePath string) ([]*types.AmcacheEntry, error) {
	return []*types.AmcacheEntry{}, nil
}

func CollectAmcache(ctx context.Context) ([]*types.AmcacheEntry, error) {
	collector := NewAmcacheCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	entries := make([]*types.AmcacheEntry, 0, len(results))
	for _, r := range results {
		if e, ok := r.(*types.AmcacheEntry); ok {
			entries = append(entries, e)
		}
	}
	return entries, nil
}
