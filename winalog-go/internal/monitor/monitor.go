//go:build windows

package monitor

import (
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/monitor/types"
)

type MonitorEngine struct {
	mu           sync.RWMutex
	config       *ConfigManager
	eventCache   *EventCache
	processWatch interface {
		Start() error
		Stop() error
		Subscribe(ch chan *types.MonitorEvent) func()
	}
	networkPoll interface {
		Start() error
		Stop() error
		Subscribe(ch chan *types.MonitorEvent) func()
	}
	dnsPoll interface {
		Start() error
		Stop() error
		Subscribe(ch chan *types.MonitorEvent) func()
	}
	isRunning bool
	startTime time.Time
	stats     *types.MonitorStats
	eventCh   chan *types.MonitorEvent
}

func NewMonitorEngine(configPath string) (*MonitorEngine, error) {
	configMgr := NewConfigManager(configPath)

	engine := &MonitorEngine{
		config:     configMgr,
		eventCache: NewEventCache(DefaultMaxCacheSize),
		isRunning:  false,
		stats: &types.MonitorStats{
			ProcessCount: 0,
			NetworkCount: 0,
			DNSCount:     0,
			AlertCount:   0,
		},
		eventCh: make(chan *types.MonitorEvent, 1000),
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

func (e *MonitorEngine) updateStats(event *types.MonitorEvent) {
	e.mu.Lock()
	defer e.mu.Unlock()

	switch event.Type {
	case types.EventTypeProcess:
		e.stats.ProcessCount++
	case types.EventTypeNetwork:
		e.stats.NetworkCount++
	case types.EventTypeDNS:
		e.stats.DNSCount++
	}

	if event.Severity == types.SeverityHigh || event.Severity == types.SeverityCritical {
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
	log.Printf("[MONITOR] UpdateConfig called: ProcessEnabled=%v, NetworkEnabled=%v, DNSEnabled=%v",
		req.ProcessEnabled != nil && *req.ProcessEnabled,
		req.NetworkEnabled != nil && *req.NetworkEnabled,
		req.DNSEnabled != nil && *req.DNSEnabled)

	if err := e.config.UpdateFromRequest(req); err != nil {
		log.Printf("[MONITOR] UpdateConfig: config.UpdateFromRequest failed: %v", err)
		return err
	}

	config := e.config.Get()
	log.Printf("[MONITOR] UpdateConfig: config after update - ProcessEnabled=%v, NetworkEnabled=%v, DNSEnabled=%v",
		config.ProcessEnabled, config.NetworkEnabled, config.DNSEnabled)

	e.mu.Lock()
	e.stats.ProcessEnabled = config.ProcessEnabled
	e.stats.NetworkEnabled = config.NetworkEnabled
	e.stats.DNSEnabled = config.DNSEnabled

	if config.ProcessEnabled && e.processWatch == nil {
		log.Printf("[MONITOR] UpdateConfig: Starting process watcher")
		e.processWatch, _ = e.createProcessWatcher()
		if e.processWatch != nil {
			e.processWatch.Subscribe(e.eventCh)
			if err := e.processWatch.Start(); err != nil {
				log.Printf("[MONITOR] UpdateConfig: processWatch.Start() failed: %v", err)
			} else {
				log.Printf("[MONITOR] UpdateConfig: process watcher started successfully")
			}
		} else {
			log.Printf("[MONITOR] UpdateConfig: createProcessWatcher returned nil")
		}
	} else if !config.ProcessEnabled && e.processWatch != nil {
		log.Printf("[MONITOR] UpdateConfig: Stopping process watcher")
		e.processWatch.Stop()
		e.processWatch = nil
	}

	if config.NetworkEnabled && e.networkPoll == nil {
		log.Printf("[MONITOR] UpdateConfig: Starting network poller")
		e.networkPoll = e.createNetworkPoller(config.PollInterval)
		if e.networkPoll != nil {
			e.networkPoll.Subscribe(e.eventCh)
			if err := e.networkPoll.Start(); err != nil {
				log.Printf("[MONITOR] UpdateConfig: networkPoll.Start() failed: %v", err)
			} else {
				log.Printf("[MONITOR] UpdateConfig: network poller started successfully")
			}
		}
	} else if !config.NetworkEnabled && e.networkPoll != nil {
		log.Printf("[MONITOR] UpdateConfig: Stopping network poller")
		e.networkPoll.Stop()
		e.networkPoll = nil
	}

	if config.DNSEnabled && e.dnsPoll == nil {
		log.Printf("[MONITOR] UpdateConfig: Starting DNS poller")
		e.dnsPoll = e.createDNSPoller(config.PollInterval)
		if e.dnsPoll != nil {
			e.dnsPoll.Subscribe(e.eventCh)
			if err := e.dnsPoll.Start(); err != nil {
				log.Printf("[MONITOR] UpdateConfig: dnsPoll.Start() failed: %v", err)
			} else {
				log.Printf("[MONITOR] UpdateConfig: DNS poller started successfully")
			}
		}
	} else if !config.DNSEnabled && e.dnsPoll != nil {
		log.Printf("[MONITOR] UpdateConfig: Stopping DNS poller")
		e.dnsPoll.Stop()
		e.dnsPoll = nil
	}

	e.mu.Unlock()

	return nil
}

func (e *MonitorEngine) GetStats() *types.MonitorStats {
	e.mu.RLock()
	defer e.mu.RUnlock()
	stats := *e.stats
	stats.IsRunning = e.isRunning
	return &stats
}

func (e *MonitorEngine) GetEvents(filter *EventFilter) ([]*types.MonitorEvent, int64) {
	return e.eventCache.Get(filter)
}

func (e *MonitorEngine) Subscribe(ch chan *types.MonitorEvent) func() {
	return func() {
		<-ch
	}
}

func (e *MonitorEngine) IsRunning() bool {
	e.mu.RLock()
	defer e.mu.RUnlock()
	return e.isRunning
}
