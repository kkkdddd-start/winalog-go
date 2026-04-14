package evtx

import (
	"encoding/json"
	"fmt"
	"path/filepath"
	"strings"
	"time"

	evtxlib "github.com/0xrawsec/golang-evtx/evtx"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type EvtxParser struct{}

func NewEvtxParser() *EvtxParser {
	return &EvtxParser{}
}

func (p *EvtxParser) CanParse(path string) bool {
	ext := strings.ToLower(filepath.Ext(path))
	return ext == ".evtx"
}

func (p *EvtxParser) GetType() string {
	return "evtx"
}

func (p *EvtxParser) Parse(path string) <-chan *types.Event {
	events := make(chan *types.Event, 1000)

	go func() {
		defer close(events)

		evtxEvents, err := p.parseEvtxFile(path)
		if err != nil {
			return
		}

		for _, e := range evtxEvents {
			events <- e
		}
	}()

	return events
}

func (p *EvtxParser) ParseBatch(path string) ([]*types.Event, error) {
	return p.parseEvtxFile(path)
}

func (p *EvtxParser) parseEvtxFile(path string) ([]*types.Event, error) {
	evtxFile, err := evtxlib.Open(path)
	if err != nil {
		evtxFile, err = evtxlib.OpenDirty(path)
		if err != nil {
			return nil, fmt.Errorf("failed to open EVTX file: %w", err)
		}
	}
	defer evtxFile.Close()

	events := make([]*types.Event, 0)

	for eventMap := range evtxFile.FastEvents() {
		if eventMap == nil {
			continue
		}

		event := p.convertMapToEvent(eventMap)
		if event != nil {
			events = append(events, event)
		}
	}

	return events, nil
}

func (p *EvtxParser) convertMapToEvent(m *evtxlib.GoEvtxMap) *types.Event {
	if m == nil {
		return nil
	}

	event := &types.Event{
		Level:      types.EventLevelInfo,
		ImportTime: time.Now(),
	}

	event.EventID = int32(m.EventID())
	event.LogName = m.Channel()

	eventPath := evtxlib.Path("Event")
	elem, err := m.Get(&eventPath)
	if err == nil && elem != nil {
		if eventMap, ok := (*elem).(evtxlib.GoEvtxMap); ok {
			systemPath := evtxlib.Path("System")
			if sysElem, err := eventMap.Get(&systemPath); err == nil && sysElem != nil {
				if system, ok := (*sysElem).(evtxlib.GoEvtxMap); ok {
					computerPath := evtxlib.Path("Computer")
					event.Computer = system.GetStringStrict(&computerPath)
					levelPath := evtxlib.Path("Level")
					level := system.GetIntStrict(&levelPath)
					if level > 0 && level <= 5 {
						event.Level = types.EventLevel(level)
					}

					timePath := evtxlib.Path("TimeCreated/SystemTime")
					if timeElem, err := system.Get(&timePath); err == nil && timeElem != nil {
						if ts, ok := (*timeElem).(string); ok {
							if t, err := time.Parse("2006-01-02T15:04:05.9999999Z", ts); err == nil {
								event.Timestamp = t
							} else if t, err := time.Parse(time.RFC3339, ts); err == nil {
								event.Timestamp = t
							}
						}
					}

					providerPath := evtxlib.Path("Provider")
					if provElem, err := system.Get(&providerPath); err == nil && provElem != nil {
						if provider, ok := (*provElem).(evtxlib.GoEvtxMap); ok {
							namePath := evtxlib.Path("Name")
							event.Source = provider.GetStringStrict(&namePath)
						}
					}
				}
			}

			edPath := evtxlib.Path("EventData")
			if edElem, err := eventMap.Get(&edPath); err == nil && edElem != nil {
				if ed, ok := (*edElem).(evtxlib.GoEvtxMap); ok {
					event.Message = p.extractEventData(&ed)
				}
			}
		}
	}

	if event.Timestamp.IsZero() {
		event.Timestamp = time.Now()
	}

	if rawJSON, err := json.Marshal(m); err == nil {
		rawStr := string(rawJSON)
		event.RawXML = &rawStr
	}

	return event
}

func (p *EvtxParser) extractEventData(m *evtxlib.GoEvtxMap) string {
	var parts []string
	for k, v := range *m {
		if v == nil {
			continue
		}
		switch val := v.(type) {
		case string:
			if val != "" {
				parts = append(parts, fmt.Sprintf("%s=%s", k, val))
			}
		case evtxlib.GoEvtxMap:
			if val != nil {
				parts = append(parts, p.extractEventData(&val))
			}
		default:
			parts = append(parts, fmt.Sprintf("%s=%v", k, val))
		}
	}
	return strings.Join(parts, "; ")
}
