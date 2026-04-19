//go:build !windows

package monitor

import (
	"time"
)

type MonitorEngine struct {
	mu           interface{}
	config       *ConfigManager
	eventCache   *EventCache
	processWatch interface{}
	networkPoll  interface{}
	dnsPoll      interface{}
	isRunning    bool
	startTime    time.Time
	stats        *MonitorStats
	eventCh      chan *MonitorEvent
}

func NewMonitorEngine(configPath string) (*MonitorEngine, error) {
	return &MonitorEngine{
		config:     NewConfigManager(configPath),
		eventCache: NewEventCache(DefaultMaxCacheSize),
		isRunning:  false,
		stats: &MonitorStats{
			ProcessCount: 0,
			NetworkCount: 0,
			DNSCount:     0,
			AlertCount:   0,
		},
		eventCh: make(chan *MonitorEvent, 1000),
	}, nil
}

func (e *MonitorEngine) Start() error {
	return nil
}

func (e *MonitorEngine) Stop() error {
	return nil
}

func (e *MonitorEngine) UpdateConfig(req *MonitorConfigRequest) error {
	return nil
}

func (e *MonitorEngine) GetStats() *MonitorStats {
	return &MonitorStats{
		IsRunning: false,
	}
}

func (e *MonitorEngine) GetEvents(filter *EventFilter) ([]*MonitorEvent, int64) {
	return []*MonitorEvent{}, 0
}

func (e *MonitorEngine) Subscribe(ch chan *MonitorEvent) func() {
	return func() {}
}

func (e *MonitorEngine) IsRunning() bool {
	return false
}
