//go:build windows

package poll

import (
	"context"
	"fmt"
	"strings"
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/monitor/types"
)

type DNSEntry struct {
	Name     string
	Type     uint16
	Data     string
	TTL      uint32
	TimeSeen time.Time
}

type DNSPoller struct {
	ctx         context.Context
	cancel      context.CancelFunc
	interval    time.Duration
	prevCache   map[string]*DNSEntry
	events      chan *types.MonitorEvent
	subscribers []chan *types.MonitorEvent
	subMu       sync.RWMutex
	running     bool
	mu          sync.RWMutex
}

func NewDNSPoller(interval time.Duration) *DNSPoller {
	if interval <= 0 {
		interval = 5 * time.Second
	}
	return &DNSPoller{
		interval:    interval,
		prevCache:   make(map[string]*DNSEntry),
		events:      make(chan *types.MonitorEvent, 100),
		subscribers: make([]chan *types.MonitorEvent, 0),
		running:     false,
	}
}

func (dp *DNSPoller) Start() error {
	dp.mu.Lock()
	if dp.running {
		dp.mu.Unlock()
		return nil
	}
	dp.running = true
	dp.mu.Unlock()

	go dp.run()
	return nil
}

func (dp *DNSPoller) Stop() error {
	dp.mu.Lock()
	defer dp.mu.Unlock()

	if !dp.running {
		return nil
	}

	dp.cancel()
	dp.running = false

	dp.subMu.Lock()
	for _, ch := range dp.subscribers {
		close(ch)
	}
	dp.subscribers = make([]chan *types.MonitorEvent, 0)
	dp.subMu.Unlock()

	return nil
}

func (dp *DNSPoller) Subscribe(ch chan *types.MonitorEvent) func() {
	dp.subMu.Lock()
	defer dp.subMu.Unlock()
	dp.subscribers = append(dp.subscribers, ch)
	return func() {
		dp.subMu.Lock()
		defer dp.subMu.Unlock()
		for i, c := range dp.subscribers {
			if c == ch {
				dp.subscribers = append(dp.subscribers[:i], dp.subscribers[i+1:]...)
				close(ch)
				break
			}
		}
	}
}

func (dp *DNSPoller) run() {
	ticker := time.NewTicker(dp.interval)
	defer ticker.Stop()

	dp.pollDNS()

	for {
		select {
		case <-dp.ctx.Done():
			return
		case <-ticker.C:
			dp.pollDNS()
		}
	}
}

func (dp *DNSPoller) pollDNS() {
	currentCache := dp.getDNSCache()

	dp.mu.Lock()
	for name, entry := range currentCache {
		if _, exists := dp.prevCache[name]; !exists {
			event := dp.createDNSEvent(entry)
			if event != nil {
				dp.publishEvent(event)
			}
		}
	}
	dp.prevCache = currentCache
	dp.mu.Unlock()
}

func (dp *DNSPoller) getDNSCache() map[string]*DNSEntry {
	cache := make(map[string]*DNSEntry)

	entries, err := dp.queryDNSCache()
	if err != nil {
		return cache
	}

	for _, entry := range entries {
		key := fmt.Sprintf("%s-%d", entry.Name, entry.Type)
		cache[key] = entry
	}

	return cache
}

func (dp *DNSPoller) queryDNSCache() ([]*DNSEntry, error) {
	return nil, fmt.Errorf("DNS cache query not implemented - requires iphlpapi.dll")
}

func (dp *DNSPoller) createDNSEvent(entry *DNSEntry) *types.MonitorEvent {
	severity := types.SeverityInfo

	for _, indicator := range types.SuspiciousDNSIndicators {
		if strings.Contains(strings.ToLower(entry.Name), strings.ToLower(indicator)) {
			severity = types.SeverityMedium
			break
		}
	}

	if strings.HasPrefix(entry.Data, "127.") ||
		strings.HasPrefix(entry.Data, "192.168.") ||
		strings.HasPrefix(entry.Data, "10.") {
		if severity == types.SeverityInfo {
			severity = types.SeverityLow
		}
	}

	data := make(map[string]interface{})
	data["query_name"] = entry.Name
	data["query_type"] = entry.Type
	data["results"] = []string{entry.Data}
	data["ttl"] = entry.TTL

	return &types.MonitorEvent{
		ID:        fmt.Sprintf("dns-%s-%d-%d", entry.Name, entry.Type, time.Now().UnixNano()),
		Type:      types.EventTypeDNS,
		Timestamp: time.Now(),
		Severity:  severity,
		Data:      data,
	}
}

func (dp *DNSPoller) publishEvent(event *types.MonitorEvent) {
	dp.subMu.RLock()
	defer dp.subMu.RUnlock()

	for _, ch := range dp.subscribers {
		select {
		case ch <- event:
		default:
		}
	}
}
