//go:build windows

package monitor

import (
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/monitor/poll"
	"github.com/kkkdddd-start/winalog-go/internal/monitor/wmi"
)

func createProcessWatcher() (interface {
	Start() error
	Stop() error
	Subscribe(ch chan *MonitorEvent) func()
}, error) {
	return wmi.NewProcessWatcher()
}

func createNetworkPoller(interval time.Duration) interface {
	Start() error
	Stop() error
	Subscribe(ch chan *MonitorEvent) func()
} {
	return poll.NewNetworkPoller(interval)
}

func createDNSPoller(interval time.Duration) interface {
	Start() error
	Stop() error
	Subscribe(ch chan *MonitorEvent) func()
} {
	return poll.NewDNSPoller(interval)
}
