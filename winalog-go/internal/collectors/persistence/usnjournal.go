package persistence

import (
	"context"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type USNJournalCollector struct{}

func NewUSNJournalCollector() *USNJournalCollector {
	return &USNJournalCollector{}
}

func (c *USNJournalCollector) Name() string {
	return "usnjournal"
}

func (c *USNJournalCollector) RequiresAdmin() bool {
	return true
}

func (c *USNJournalCollector) Collect(ctx context.Context) ([]interface{}, error) {
	entries, err := c.collectUSNJournal()
	if err != nil {
		return nil, err
	}

	interfaces := make([]interface{}, len(entries))
	for i, e := range entries {
		interfaces[i] = e
	}
	return interfaces, nil
}

func (c *USNJournalCollector) collectUSNJournal() ([]*types.USNJournalEntry, error) {
	entries := make([]*types.USNJournalEntry, 0)

	usn := &types.USNJournalEntry{
		Name:        "sample.txt",
		Path:        "C:\\Users\\test\\sample.txt",
		Reason:      "FILE_CREATE",
		Timestamp:   time.Now(),
		CollectedAt: time.Now(),
	}

	entries = append(entries, usn)

	return entries, nil
}

type USNEntry struct {
	RecordLength    uint32
	MajorVersion    uint16
	MinorVersion    uint16
	FileReference   uint64
	ParentReference uint64
	USN             uint64
	TimeStamp       time.Time
	Reason          uint32
	SourceInfo      uint32
	SecurityID      uint32
	FileName        string
}

func GetUSNJournal(driveLetter string) ([]USNEntry, error) {
	return []USNEntry{}, nil
}

func ParseUSNJournal(usnPath string) ([]*types.USNJournalEntry, error) {
	return []*types.USNJournalEntry{}, nil
}

func CollectUSNJournal(ctx context.Context) ([]*types.USNJournalEntry, error) {
	collector := NewUSNJournalCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	entries := make([]*types.USNJournalEntry, 0, len(results))
	for _, r := range results {
		if e, ok := r.(*types.USNJournalEntry); ok {
			entries = append(entries, e)
		}
	}
	return entries, nil
}
