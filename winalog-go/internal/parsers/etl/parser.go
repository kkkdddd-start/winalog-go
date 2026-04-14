package etl

import (
	"bufio"
	"encoding/binary"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type EtlParser struct{}

func NewEtlParser() *EtlParser {
	return &EtlParser{}
}

func (p *EtlParser) CanParse(path string) bool {
	ext := strings.ToLower(filepath.Ext(path))
	return ext == ".etl"
}

func (p *EtlParser) GetType() string {
	return "etl"
}

func (p *EtlParser) Parse(path string) <-chan *types.Event {
	events := make(chan *types.Event, 1000)

	go func() {
		defer close(events)

		etlEvents, err := p.parseEtl(path)
		if err != nil {
			return
		}

		for _, e := range etlEvents {
			events <- e
		}
	}()

	return events
}

func (p *EtlParser) ParseBatch(path string) ([]*types.Event, error) {
	return p.parseEtl(path)
}

type etlHeader struct {
	Magic      [4]byte
	Version    uint32
	StartTime  int64
	EndTime    int64
	CurrentPos int64
	BufferSize int64
	Version2   uint32
}

func (p *EtlParser) parseEtl(path string) ([]*types.Event, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	header := &etlHeader{}
	if err := binary.Read(file, binary.LittleEndian, header); err != nil {
		return nil, err
	}

	if string(header.Magic[:]) != "ETL\x00" && string(header.Magic[:]) != "PeT\x00" {
		return nil, fmt.Errorf("invalid ETL magic number")
	}

	events := make([]*types.Event, 0)
	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		line := scanner.Text()
		if strings.Contains(line, "<Event") || strings.Contains(line, "Event/TraceData") {
			event := p.parseEventLine(line)
			if event != nil {
				events = append(events, event)
			}
		}
	}

	return events, nil
}

func (p *EtlParser) parseEventLine(line string) *types.Event {
	var event types.Event
	event.Timestamp = time.Now()
	event.Level = types.EventLevelInfo
	event.Source = "ETL"
	event.LogName = "ETW"

	if strings.Contains(line, "EventID=") {
		event.EventID = parseEventID(line)
	}

	return &event
}

func parseEventID(line string) int32 {
	start := strings.Index(line, "EventID=")
	if start == -1 {
		return 0
	}
	start += 8
	end := start
	for end < len(line) && (line[end] >= '0' && line[end] <= '9') {
		end++
	}
	if end > start {
		var id int32
		fmt.Sscanf(line[start:end], "%d", &id)
		return id
	}
	return 0
}
