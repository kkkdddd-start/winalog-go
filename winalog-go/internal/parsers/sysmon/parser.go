package sysmon

import (
	"encoding/xml"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type SysmonParser struct{}

func NewSysmonParser() *SysmonParser {
	return &SysmonParser{}
}

func (p *SysmonParser) CanParse(path string) bool {
	name := strings.ToLower(filepath.Base(path))
	return strings.Contains(name, "sysmon") || strings.Contains(name, "microsoft-windows-sysmon")
}

func (p *SysmonParser) GetType() string {
	return "sysmon"
}

func (p *SysmonParser) Parse(path string) <-chan *types.Event {
	events := make(chan *types.Event, 1000)

	go func() {
		defer close(events)

		sysmonEvents, err := p.parseSysmon(path)
		if err != nil {
			return
		}

		for _, e := range sysmonEvents {
			events <- e
		}
	}()

	return events
}

func (p *SysmonParser) ParseBatch(path string) ([]*types.Event, error) {
	return p.parseSysmon(path)
}

type SysmonEvent struct {
	EventID           int
	Schema            string
	Image             string
	CommandLine       string
	TargetFilename    string
	Hashes            map[string]string
	ParentImage       string
	ParentCommandLine string
	UserName          string
	Computer          string
	TimeCreated       time.Time
}

func (p *SysmonParser) parseSysmon(path string) ([]*types.Event, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	events := make([]*types.Event, 0)

	var wrapper struct {
		XMLName xml.Name `xml:"Event"`
		System  struct {
			XMLName  xml.Name `xml:"System"`
			Provider struct {
				Name string `xml:"Name,attr"`
			} `xml:"Provider"`
			EventID     string `xml:"EventID"`
			TimeCreated string `xml:"TimeCreated"`
			Computer    string `xml:"Computer"`
		} `xml:"System"`
		EventData struct {
			XMLName xml.Name `xml:"EventData"`
			Data    []struct {
				Name  string `xml:"Name,attr"`
				Value string `xml:",chardata"`
			} `xml:"Data"`
		} `xml:"EventData"`
	}

	decoder := xml.NewDecoder(file)
	for {
		token, err := decoder.Token()
		if err != nil {
			break
		}

		switch elem := token.(type) {
		case xml.StartElement:
			if elem.Name.Local == "Event" {
				wrapper = struct {
					XMLName xml.Name `xml:"Event"`
					System  struct {
						XMLName  xml.Name `xml:"System"`
						Provider struct {
							Name string `xml:"Name,attr"`
						} `xml:"Provider"`
						EventID     string `xml:"EventID"`
						TimeCreated string `xml:"TimeCreated"`
						Computer    string `xml:"Computer"`
					} `xml:"System"`
					EventData struct {
						XMLName xml.Name `xml:"EventData"`
						Data    []struct {
							Name  string `xml:"Name,attr"`
							Value string `xml:",chardata"`
						} `xml:"Data"`
					} `xml:"EventData"`
				}{}

				if err := decoder.DecodeElement(&wrapper, &elem); err != nil {
					continue
				}

				event := p.convertToEvent(wrapper)
				if event != nil {
					events = append(events, event)
				}
			}
		}
	}

	return events, nil
}

func (p *SysmonParser) convertToEvent(wrapper struct {
	XMLName xml.Name `xml:"Event"`
	System  struct {
		XMLName  xml.Name `xml:"System"`
		Provider struct {
			Name string `xml:"Name,attr"`
		} `xml:"Provider"`
		EventID     string `xml:"EventID"`
		TimeCreated string `xml:"TimeCreated"`
		Computer    string `xml:"Computer"`
	} `xml:"System"`
	EventData struct {
		XMLName xml.Name `xml:"EventData"`
		Data    []struct {
			Name  string `xml:"Name,attr"`
			Value string `xml:",chardata"`
		} `xml:"Data"`
	} `xml:"EventData"`
}) *types.Event {
	event := &types.Event{
		Source:     "Sysmon",
		LogName:    "Microsoft-Windows-Sysmon/Operational",
		Computer:   wrapper.System.Computer,
		ImportTime: time.Now(),
	}

	if wrapper.System.Provider.Name != "" {
		event.Source = wrapper.System.Provider.Name
	}

	if t, err := time.Parse("2006-01-02T15:04:05.000Z07:00", wrapper.System.TimeCreated); err == nil {
		event.Timestamp = t
	} else {
		event.Timestamp = time.Now()
	}

	var eventID int
	fmt.Sscanf(wrapper.System.EventID, "%d", &eventID)
	event.EventID = int32(eventID)

	event.Level = p.getLevelForEventID(eventID)

	dataMap := make(map[string]string)
	for _, d := range wrapper.EventData.Data {
		dataMap[d.Name] = d.Value
	}

	event.Message = p.buildMessage(eventID, dataMap)

	rawXML, _ := xml.Marshal(wrapper)
	xmlStr := string(rawXML)
	event.RawXML = &xmlStr

	return event
}

func (p *SysmonParser) getLevelForEventID(eventID int) types.EventLevel {
	switch eventID {
	case 1:
		return types.EventLevelInfo
	case 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22:
		return types.EventLevelInfo
	default:
		return types.EventLevelInfo
	}
}

func (p *SysmonParser) buildMessage(eventID int, data map[string]string) string {
	switch eventID {
	case 1:
		return fmt.Sprintf("Process Create: %s %s (PID: %s)",
			data["Image"], data["CommandLine"], data["ProcessId"])
	case 2:
		return fmt.Sprintf("File Creation Time Changed: %s", data["TargetFilename"])
	case 3:
		return fmt.Sprintf("Network Connection: %s:%s -> %s:%s [%s]",
			data["SourceHostname"], data["SourcePort"], data["DestinationHostname"], data["DestinationPort"], data["Protocol"])
	case 4:
		return fmt.Sprintf("Sysmon Service State Changed: %s", data["State"])
	case 5:
		return fmt.Sprintf("Process Terminated: %s (PID: %s)", data["Image"], data["ProcessId"])
	case 6:
		return fmt.Sprintf("Driver Loaded: %s [Hash: %s]", data["ImageLoaded"], data["Hashes"])
	case 7:
		return fmt.Sprintf("Image Loaded: %s in %s", data["ImageLoaded"], data["Image"])
	case 8:
		return fmt.Sprintf("CreateRemoteThread: %s -> %s in %s",
			data["SourceImage"], data["TargetImage"], data["TargetProcessId"])
	case 9:
		return fmt.Sprintf("Raw Access Read: %s by %s", data["Image"], data["Device"])
	case 10:
		return fmt.Sprintf("Process Access: %s -> %s [%s]",
			data["SourceImage"], data["TargetImage"], data["GrantedAccess"])
	case 11:
		return fmt.Sprintf("File Created: %s", data["TargetFilename"])
	case 12:
		return fmt.Sprintf("Registry Object Added/Deleted: %s", data["TargetObject"])
	case 13:
		return fmt.Sprintf("Registry Value Set: %s = %s", data["TargetObject"], data["Details"])
	case 14:
		return fmt.Sprintf("Registry Object Renamed: %s -> %s", data["OldTargetObject"], data["NewTargetObject"])
	case 15:
		return fmt.Sprintf("File Stream Created: %s in %s", data["TargetFilename"], data["RuleName"])
	case 16:
		return fmt.Sprintf("Sysmon Service Configuration Changed")
	case 17:
		return fmt.Sprintf("Pipe Created: %s", data["PipeName"])
	case 18:
		return fmt.Sprintf("Pipe Connected: %s", data["PipeName"])
	case 19:
		return fmt.Sprintf("WMI Event Filter: %s", data["EventNamespace"])
	case 20:
		return fmt.Sprintf("WMI Consumer: %s", data["Consumer"])
	case 21:
		return fmt.Sprintf("WMI Consumer Filter Binding: %s -> %s", data["Filter"], data["Consumer"])
	case 22:
		return fmt.Sprintf("DNS Query: %s [%s]", data["QueryName"], data["QueryResults"])
	default:
		return fmt.Sprintf("Sysmon Event %d", eventID)
	}
}
