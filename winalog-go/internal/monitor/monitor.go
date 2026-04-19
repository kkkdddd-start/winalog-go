//go:build windows

package monitor

import (
	"context"
	"sync"
	"time"
)

type MonitorEngine struct {
	mu           sync.RWMutex
	config       *ConfigManager
	eventCache   *EventCache
	processWatch interface {
		Start() error
		Stop() error
		Subscribe(ch chan *MonitorEvent) func()
	}
	networkPoll interface {
		Start() error
		Stop() error
		Subscribe(ch chan *MonitorEvent) func()
	}
	dnsPoll interface {
		Start() error
		Stop() error
		Subscribe(ch chan *MonitorEvent) func()
	}
	isRunning bool
	startTime time.Time
	stats     *MonitorStats
	eventCh   chan *MonitorEvent
}

func NewMonitorEngine(configPath string) (*MonitorEngine, error) {
	configMgr := NewConfigManager(configPath)

	engine := &MonitorEngine{
		config:     configMgr,
		eventCache: NewEventCache(DefaultMaxCacheSize),
		isRunning:  false,
		stats: &MonitorStats{
			ProcessCount: 0,
			NetworkCount: 0,
			DNSCount:     0,
			AlertCount:   0,
		},
		eventCh: make(chan *MonitorEvent, 1000),
	}

	return engine, nil
}

func (e *MonitorEngine) Start() error {
	e.mu.Lock()
	defer e.mu.Unlock()

	if e.isRunning {
		return nil
	}

	config := e.config.Get()
	e.startTime = time.Now()

	var err error

	if config.ProcessEnabled {
		e.processWatch, err = e.createProcessWatcher()
		if err == nil && e.processWatch != nil {
			e.processWatch.Subscribe(e.eventCh)
			e.processWatch.Start()
		}
	}

	if config.NetworkEnabled {
		e.networkPoll = e.createNetworkPoller(config.PollInterval)
		if e.networkPoll != nil {
			e.networkPoll.Subscribe(e.eventCh)
			e.networkPoll.Start()
		}
	}

	if config.DNSEnabled {
		e.dnsPoll = e.createDNSPoller(config.PollInterval)
		if e.dnsPoll != nil {
			e.dnsPoll.Subscribe(e.eventCh)
			e.dnsPoll.Start()
		}
	}

	go e.processEvents()

	e.isRunning = true
	e.stats.IsRunning = true
	e.stats.StartTime = e.startTime

	e.updateConfigStats()

	return nil
}

func (e *MonitorEngine) Stop() error {
	e.mu.Lock()
	defer e.mu.Unlock()

	if !e.isRunning {
		return nil
	}

	if e.processWatch != nil {
		e.processWatch.Stop()
		e.processWatch = nil
	}

	if e.networkPoll != nil {
		e.networkPoll.Stop()
		e.networkPoll = nil
	}

	if e.dnsPoll != nil {
		e.dnsPoll.Stop()
		e.dnsPoll = nil
	}

	e.isRunning = false
	e.stats.IsRunning = false

	return nil
}

func (e *MonitorEngine) processEvents() {
	for {
		select {
		case event, ok := <-e.eventCh:
			if !ok {
				return
			}
			e.eventCache.Add(event)
			e.updateStats(event)
		}
	}
}

func (e *MonitorEngine) updateStats(event *MonitorEvent) {
	e.mu.Lock()
	defer e.mu.Unlock()

	switch event.Type {
	case EventTypeProcess:
		e.stats.ProcessCount++
	case EventTypeNetwork:
		e.stats.NetworkCount++
	case EventTypeDNS:
		e.stats.DNSCount++
	}

	if event.Severity == SeverityHigh || event.Severity == SeverityCritical {
		e.stats.AlertCount++
	}
}

func (e *MonitorEngine) updateConfigStats() {
	config := e.config.Get()
	e.stats.ProcessEnabled = config.ProcessEnabled
	e.stats.NetworkEnabled = config.NetworkEnabled
	e.stats.DNSEnabled = config.DNSEnabled
}

func (e *MonitorEngine) UpdateConfig(req *MonitorConfigRequest) error {
	if err := e.config.UpdateFromRequest(req); err != nil {
		return err
	}

	config := e.config.Get()
	e.mu.Lock()
	e.stats.ProcessEnabled = config.ProcessEnabled
	e.stats.NetworkEnabled = config.NetworkEnabled
	e.stats.DNSEnabled = config.DNSEnabled

	if config.ProcessEnabled && e.processWatch == nil {
		e.processWatch, _ = e.createProcessWatcher()
		if e.processWatch != nil {
			e.processWatch.Subscribe(e.eventCh)
			e.processWatch.Start()
		}
	} else if !config.ProcessEnabled && e.processWatch != nil {
		e.processWatch.Stop()
		e.processWatch = nil
	}

	if config.NetworkEnabled && e.networkPoll == nil {
		e.networkPoll = e.createNetworkPoller(config.PollInterval)
		if e.networkPoll != nil {
			e.networkPoll.Subscribe(e.eventCh)
			e.networkPoll.Start()
		}
	} else if !config.NetworkEnabled && e.networkPoll != nil {
		e.networkPoll.Stop()
		e.networkPoll = nil
	}

	if config.DNSEnabled && e.dnsPoll == nil {
		e.dnsPoll = e.createDNSPoller(config.PollInterval)
		if e.dnsPoll != nil {
			e.dnsPoll.Subscribe(e.eventCh)
			e.dnsPoll.Start()
		}
	} else if !config.DNSEnabled && e.dnsPoll != nil {
		e.dnsPoll.Stop()
		e.dnsPoll = nil
	}

	e.mu.Unlock()

	return nil
}

func (e *MonitorEngine) GetStats() *MonitorStats {
	e.mu.RLock()
	defer e.mu.RUnlock()
	stats := *e.stats
	stats.IsRunning = e.isRunning
	return &stats
}

func (e *MonitorEngine) GetEvents(filter *EventFilter) ([]*MonitorEvent, int64) {
	return e.eventCache.Get(filter)
}

func (e *MonitorEngine) Subscribe(ch chan *MonitorEvent) func() {
	return func() {
		<-ch
	}
}

func (e *MonitorEngine) IsRunning() bool {
	e.mu.RLock()
	defer e.mu.RUnlock()
	return e.isRunning
}
