package collectors

import (
	"context"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type UserAssistCollector struct{}

func NewUserAssistCollector() *UserAssistCollector {
	return &UserAssistCollector{}
}

func (c *UserAssistCollector) Name() string {
	return "userassist"
}

func (c *UserAssistCollector) RequiresAdmin() bool {
	return true
}

func (c *UserAssistCollector) Collect(ctx context.Context) ([]interface{}, error) {
	entries, err := c.collectUserAssist()
	if err != nil {
		return nil, err
	}

	interfaces := make([]interface{}, len(entries))
	for i, e := range entries {
		interfaces[i] = e
	}
	return interfaces, nil
}

func (c *UserAssistCollector) collectUserAssist() ([]*types.UserAssistEntry, error) {
	entries := make([]*types.UserAssistEntry, 0)

	ua := &types.UserAssistEntry{
		Name:        "Sample",
		Path:        "C:\\Program Files\\Sample\\sample.exe",
		FocusCount:  1,
		TimeFocused: 0,
		LastUsed:    time.Now(),
		CollectedAt: time.Now(),
	}

	entries = append(entries, ua)

	return entries, nil
}

type UserAssistEntry struct {
	Name        string
	Path        string
	FocusCount  int
	TimeFocused int64
	LastUsed    time.Time
	SessionID   int
}

func GetUserAssist() ([]UserAssistEntry, error) {
	return []UserAssistEntry{}, nil
}

func ParseUserAssist(regKey string) ([]*types.UserAssistEntry, error) {
	return []*types.UserAssistEntry{}, nil
}

func CollectUserAssist(ctx context.Context) ([]*types.UserAssistEntry, error) {
	collector := NewUserAssistCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	entries := make([]*types.UserAssistEntry, 0, len(results))
	for _, r := range results {
		if e, ok := r.(*types.UserAssistEntry); ok {
			entries = append(entries, e)
		}
	}
	return entries, nil
}
