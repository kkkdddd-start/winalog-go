package iis

import (
	"bufio"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type IISParser struct {
	Format string
}

func NewIISParser() *IISParser {
	return &IISParser{
		Format: "w3c",
	}
}

func (p *IISParser) CanParse(path string) bool {
	name := strings.ToLower(filepath.Base(path))
	return strings.Contains(name, "iis") || strings.Contains(name, "u_ex")
}

func (p *IISParser) GetType() string {
	return "iis"
}

func (p *IISParser) Parse(path string) <-chan *types.Event {
	events := make(chan *types.Event, 1000)

	go func() {
		defer close(events)

		iisEvents, err := p.parseIIS(path)
		if err != nil {
			return
		}

		for _, e := range iisEvents {
			events <- e
		}
	}()

	return events
}

func (p *IISParser) ParseBatch(path string) ([]*types.Event, error) {
	return p.parseIIS(path)
}

type IISLog struct {
	Date      time.Time
	Time      time.Time
	ClientIP  string
	UserName  string
	Method    string
	URIStem   string
	URIQuery  string
	Status    int
	BytesSent int64
	UserAgent string
	Referer   string
}

var (
	iisW3CHeaderRegex = regexp.MustCompile(`^#Fields:\s+(.+)$`)
	iisDateRegex      = regexp.MustCompile(`^\d{4}-\d{2}-\d{2}`)
)

func (p *IISParser) parseIIS(path string) ([]*types.Event, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var columns []string
	events := make([]*types.Event, 0)
	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		line := scanner.Text()

		if strings.HasPrefix(line, "#") {
			if matches := iisW3CHeaderRegex.FindStringSubmatch(line); len(matches) > 1 {
				columns = parseIISColumns(matches[1])
			}
			continue
		}

		if !iisDateRegex.MatchString(line) {
			continue
		}

		event := p.parseLogLine(line, columns)
		if event != nil {
			events = append(events, event)
		}
	}

	return events, nil
}

func parseIISColumns(header string) []string {
	return strings.Split(header, " ")
}

func (p *IISParser) parseLogLine(line string, columns []string) *types.Event {
	fields := strings.Fields(line)
	if len(fields) < 5 {
		return nil
	}

	event := &types.Event{
		Source:     "IIS",
		LogName:    "IIS",
		Level:      types.EventLevelInfo,
		ImportTime: time.Now(),
	}

	for i, col := range columns {
		if i >= len(fields) {
			break
		}
		value := fields[i]

		switch strings.ToLower(col) {
		case "date":
			if t, err := time.Parse("2006-01-02", value); err == nil {
				event.Timestamp = t
			}
		case "time":
			if len(fields) > i+1 {
				timeStr := value + " " + fields[i+1]
				if t, err := time.Parse("2006-01-02 15:04:05", timeStr); err == nil {
					event.Timestamp = t
					i++
				}
			}
		case "s-ip":
			event.Computer = value
		case "cs-method":
			event.Message = value
		case "cs-uri-stem":
			if event.Message != "" {
				event.Message += " " + value
			} else {
				event.Message = value
			}
		case "cs-uri-query":
			if value != "-" && event.Message != "" {
				event.Message += "?" + value
			}
		case "s-port":
			if port, err := strconv.Atoi(value); err == nil {
				event.Message += fmt.Sprintf(" (Port: %d)", port)
			}
		case "c-ip":
			ip := value
			event.IPAddress = &ip
		case "cs(User-Agent)":
			ua := value
			event.Message += " " + ua
		case "sc-status":
			if status, err := strconv.Atoi(value); err == nil {
				if status >= 400 {
					event.Level = types.EventLevelWarning
				}
				if status >= 500 {
					event.Level = types.EventLevelError
				}
			}
		case "sc-bytes":
			if b, err := strconv.ParseInt(value, 10, 64); err == nil {
				event.Message += fmt.Sprintf(" [Bytes: %d]", b)
			}
		}
	}

	if event.Timestamp.IsZero() {
		event.Timestamp = time.Now()
	}

	return event
}
