package evtx

import (
	"bufio"
	"encoding/binary"
	"encoding/xml"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type EvtxParser struct {
	useWevtutil bool
}

func NewEvtxParser() *EvtxParser {
	return &EvtxParser{
		useWevtutil: false,
	}
}

func (p *EvtxParser) CanParse(path string) bool {
	ext := strings.ToLower(filepath.Ext(path))
	return ext == ".evtx"
}

func (p *EvtxParser) GetType() string {
	return "evtx"
}

type evtxHeader struct {
	Magic       [8]byte
	Version     uint64
	StartChunks uint64
	EndChunks   uint64
	NextRecID   uint64
	HeaderSize  uint64
}

func (p *EvtxParser) Parse(path string) <-chan *types.Event {
	events := make(chan *types.Event, 1000)

	go func() {
		defer close(events)

		evtxEvents, err := p.parseEvtxNative(path)
		if err != nil {
			evtxEvents, err = p.parseViaWevtutil(path)
		}
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
	events, err := p.parseEvtxNative(path)
	if err != nil {
		events, err = p.parseViaWevtutil(path)
	}
	return events, err
}

func (p *EvtxParser) parseEvtxNative(path string) ([]*types.Event, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	header := &evtxHeader{}
	if err := binary.Read(file, binary.LittleEndian, header); err != nil {
		return nil, err
	}

	if string(header.Magic[:]) != "ElfFile\x00" {
		return nil, fmt.Errorf("invalid EVTX magic number")
	}

	events := make([]*types.Event, 0)
	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		line := scanner.Text()
		if strings.Contains(line, "<Event") {
			event := p.parseEventXML(line)
			if event != nil {
				events = append(events, event)
			}
		}
	}

	return events, nil
}

func (p *EvtxParser) parseEventXML(xmlData string) *types.Event {
	var wrapper struct {
		XMLName xml.Name `xml:"Event"`
		System  struct {
			XMLName     xml.Name `xml:"System"`
			EventID     string   `xml:"EventID"`
			Level       string   `xml:"Level"`
			TimeCreated string   `xml:"TimeCreated"`
			Source      string   `xml:"Provider"`
			LogName     string   `xml:"Channel"`
			Computer    string   `xml:"Computer"`
			User        struct {
				ID string `xml:"UserID"`
			} `xml:"User"`
		} `xml:"System"`
		EventData struct {
			XMLName xml.Name `xml:"EventData"`
			Data    []struct {
				Name  string `xml:"Name,attr"`
				Value string `xml:",chardata"`
			} `xml:"Data"`
		} `xml:"EventData"`
	}

	if err := xml.Unmarshal([]byte(xmlData), &wrapper); err != nil {
		return nil
	}

	event := &types.Event{
		Source:   wrapper.System.Source,
		LogName:  wrapper.System.LogName,
		Computer: wrapper.System.Computer,
		Message:  p.extractMessage(wrapper.EventData.Data),
	}

	if event.Source == "" {
		event.Source = "Unknown"
	}
	if event.LogName == "" {
		event.LogName = filepath.Dir(wrapper.System.Source)
	}

	if t, err := time.Parse("2006-01-02T15:04:05.000Z07:00", wrapper.System.TimeCreated); err == nil {
		event.Timestamp = t
	} else {
		event.Timestamp = time.Now()
	}

	if eid, ok := parseUint32(wrapper.System.EventID); ok {
		event.EventID = int32(eid)
	}

	if level, ok := parseInt(wrapper.System.Level); ok {
		event.Level = types.EventLevel(level)
	}

	if wrapper.System.User.ID != "" {
		sid := wrapper.System.User.ID
		event.UserSID = &sid
	}

	rawXML := xmlData
	event.RawXML = &rawXML

	event.ImportTime = time.Now()

	return event
}

func (p *EvtxParser) parseViaWevtutil(path string) ([]*types.Event, error) {
	cmd := exec.Command("wevtutil", "qe", path, "/rd:true", "/f:xml")

	output, err := cmd.Output()
	if err != nil {
		return nil, fmt.Errorf("wevtutil failed: %w", err)
	}

	events := make([]*types.Event, 0)
	scanner := bufio.NewScanner(strings.NewReader(string(output)))

	for scanner.Scan() {
		line := scanner.Text()
		if strings.Contains(line, "<Event") || strings.Contains(line, "</Event>") {
			event := p.parseEventXML(line)
			if event != nil {
				events = append(events, event)
			}
		}
	}

	return events, nil
}

func (p *EvtxParser) extractMessage(data []struct {
	Name  string `xml:"Name,attr"`
	Value string `xml:",chardata"`
}) string {
	var msg string
	for _, d := range data {
		if d.Name == "Message" || d.Name == "" {
			msg += d.Value + " "
		}
	}
	return strings.TrimSpace(msg)
}

type EvtxRecord struct {
	EventRecordID int64
	TimeCreated   time.Time
	EventID       int32
	Level         int
	Source        string
	Computer      string
	Channel       string
	Message       string
	XML           string
	Data          map[string]string
}

func ParseRecordHeader(data []byte) (offset int64, err error) {
	if len(data) < 24 {
		return 0, fmt.Errorf("record too short")
	}
	return 0, nil
}

func parseUint32(s string) (uint32, bool) {
	v, err := strconv.ParseUint(s, 10, 32)
	return uint32(v), err == nil
}

func parseInt(s string) (int, bool) {
	v, err := strconv.Atoi(s)
	return v, err == nil
}
