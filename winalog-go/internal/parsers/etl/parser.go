package etl

import (
	"encoding/binary"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
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

		etlEvents, err := p.ParseBatch(path)
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
	events, err := p.parseEtlWithAPI(path)
	if err != nil {
		events, err = p.parseEtlBinary(path)
		if err != nil {
			return events, err
		}
	}

	return events, nil
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

type etlEventHeader struct {
	HeaderLength  uint16
	HeaderType    uint16
	EventVersion  uint16
	EventType     uint16
	Levels        uint8
	EventVersion2 uint8
	KernelTime    uint32
	ProcessTime   uint32
	EventRecordID uint32
	EventGuid     [16]byte
	TimeStamp     int64
}

func (p *EtlParser) parseEtlBinary(path string) ([]*types.Event, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	header := &etlHeader{}
	if err := binary.Read(file, binary.LittleEndian, header); err != nil {
		return nil, err
	}

	if string(header.Magic[:]) != "ETL\x00" && string(header.Magic[:]) != "PeT\x00" && string(header.Magic[:]) != "\x00\x00\x00\x00" {
		return nil, fmt.Errorf("invalid ETL magic number: %s", string(header.Magic[:]))
	}

	events := make([]*types.Event, 0)

	eventHeader := &etlEventHeader{}
	for {
		if err := binary.Read(file, binary.LittleEndian, eventHeader); err != nil {
			break
		}

		if eventHeader.HeaderLength < 48 {
			break
		}

		dataSize := int(eventHeader.HeaderLength) - 48
		if dataSize <= 0 || dataSize > 65536 {
			break
		}

		data := make([]byte, dataSize)
		if _, err := file.Read(data); err != nil {
			break
		}

		event := p.parseEtlEventData(eventHeader, data)
		if event != nil {
			events = append(events, event)
		}
	}

	return events, nil
}

func (p *EtlParser) parseEtlEventData(header *etlEventHeader, data []byte) *types.Event {
	event := &types.Event{}

	event.Timestamp = time.Date(1601, 1, 1, 0, 0, 0, 0, time.UTC).
		Add(time.Duration(header.TimeStamp) * 100 * time.Nanosecond)

	event.Level = p.mapLevel(header.Levels)
	event.Source = "ETL"
	event.LogName = "ETW"
	event.EventID = 0

	event.Message = string(data)

	return event
}

func (p *EtlParser) mapLevel(level uint8) types.EventLevel {
	switch level {
	case 1:
		return types.EventLevelCritical
	case 2:
		return types.EventLevelError
	case 3:
		return types.EventLevelWarning
	case 4:
		return types.EventLevelInfo
	case 5:
		return types.EventLevelVerbose
	default:
		return types.EventLevelInfo
	}
}

func (p *EtlParser) parseEtlWithAPI(path string) ([]*types.Event, error) {
	events := make([]*types.Event, 0)

	cmd := fmt.Sprintf(`Get-WinEvent -Path '%s' -ErrorAction SilentlyContinue | Select-Object TimeCreated,Id,Level,ProviderName,Message | ConvertTo-Json -Compress`, path)

	result := utils.RunPowerShell(cmd)
	if !result.Success() || result.Output == "" {
		return events, fmt.Errorf("failed to parse ETL with API")
	}

	output := strings.TrimSpace(result.Output)
	lines := strings.Split(output, "\n")

	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" {
			continue
		}

		var eventRaw struct {
			TimeCreated  string `json:"TimeCreated"`
			Id           int    `json:"Id"`
			Level        int    `json:"Level"`
			ProviderName string `json:"ProviderName"`
			Message      string `json:"Message"`
		}

		if err := json.Unmarshal([]byte(line), &eventRaw); err != nil {
			continue
		}

		event := &types.Event{
			EventID: int32(eventRaw.Id),
			Source:  eventRaw.ProviderName,
			LogName: "ETW",
			Level:   p.mapWinEventLevel(eventRaw.Level),
			Message: eventRaw.Message,
		}

		if eventRaw.TimeCreated != "" {
			if t, err := time.Parse(time.RFC3339, eventRaw.TimeCreated); err == nil {
				event.Timestamp = t
			}
		}

		events = append(events, event)
	}

	return events, nil
}

func (p *EtlParser) mapWinEventLevel(level int) types.EventLevel {
	switch level {
	case 1:
		return types.EventLevelCritical
	case 2:
		return types.EventLevelError
	case 3:
		return types.EventLevelWarning
	case 4:
		return types.EventLevelInfo
	case 5:
		return types.EventLevelVerbose
	default:
		return types.EventLevelInfo
	}
}

func (p *EtlParser) parseEventLine(line string) *types.Event {
	event := &types.Event{
		Timestamp: time.Now(),
		Level:     types.EventLevelInfo,
		Source:    "ETL",
		LogName:   "ETW",
	}

	if strings.Contains(line, "EventID=") {
		event.EventID = parseEventID(line)
	}

	if strings.Contains(line, "Level=") {
		event.Level = parseLevel(line)
	}

	if strings.Contains(line, "TimeCreated") {
		event.Timestamp = parseTimestamp(line)
	}

	return event
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

func parseLevel(line string) types.EventLevel {
	start := strings.Index(line, "Level=")
	if start == -1 {
		return types.EventLevelInfo
	}
	start += 6
	end := start
	for end < len(line) && (line[end] >= '0' && line[end] <= '9') {
		end++
	}
	if end > start {
		var level int
		fmt.Sscanf(line[start:end], "%d", &level)
		switch level {
		case 1:
			return types.EventLevelCritical
		case 2:
			return types.EventLevelError
		case 3:
			return types.EventLevelWarning
		case 4:
			return types.EventLevelInfo
		case 5:
			return types.EventLevelVerbose
		}
	}
	return types.EventLevelInfo
}

func parseTimestamp(line string) time.Time {
	start := strings.Index(line, "TimeCreated")
	if start == -1 {
		return time.Now()
	}

	timeStr := extractQuotedValue(line[start:], "SystemTime")
	if timeStr != "" {
		if t, err := time.Parse(time.RFC3339, timeStr); err == nil {
			return t
		}
	}

	return time.Now()
}

func extractQuotedValue(s, key string) string {
	idx := strings.Index(s, key)
	if idx == -1 {
		return ""
	}

	rest := s[idx+len(key):]
	start := strings.Index(rest, "\"")
	if start == -1 {
		return ""
	}
	end := strings.Index(rest[start+1:], "\"")
	if end == -1 {
		return ""
	}

	return rest[start+1 : start+1+end]
}

type EtlProvider struct {
	Name     string
	Guid     string
	Levels   []int
	Keywords []int64
}

func ListEtlProviders(path string) ([]EtlProvider, error) {
	providers := make([]EtlProvider, 0)

	cmd := fmt.Sprintf(`Get-WinEvent -Path '%s' -ErrorAction SilentlyContinue | Select-Object -ExpandProperty ProviderName -Unique`, path)

	result := utils.RunPowerShell(cmd)
	if !result.Success() || result.Output == "" {
		return providers, nil
	}

	lines := strings.Split(result.Output, "\n")
	for _, line := range lines {
		name := strings.TrimSpace(line)
		if name != "" {
			providers = append(providers, EtlProvider{
				Name: name,
			})
		}
	}

	return providers, nil
}

func GetEtlStatistics(path string) (map[string]interface{}, error) {
	stats := make(map[string]interface{})

	cmd := fmt.Sprintf(`Get-WinEvent -Path '%s' -ErrorAction SilentlyContinue | Measure-Object | ConvertTo-Json -Compress`, path)

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return stats, result.Error
	}

	var count struct {
		Count int `json:"Count"`
	}

	if err := json.Unmarshal([]byte(result.Output), &count); err == nil {
		stats["TotalEvents"] = count.Count
	}

	cmd = fmt.Sprintf(`Get-WinEvent -Path '%s' -ErrorAction SilentlyContinue | Group-Object -Property Id | Sort-Object -Property Count -Descending | Select-Object -First 10 | ConvertTo-Json -Compress`, path)

	result = utils.RunPowerShell(cmd)
	if result.Success() && result.Output != "" {
		var topEvents []struct {
			Name  string `json:"Name"`
			Count int    `json:"Count"`
		}

		if err := json.Unmarshal([]byte(result.Output), &topEvents); err == nil {
			stats["TopEventIds"] = topEvents
		}
	}

	return stats, nil
}
