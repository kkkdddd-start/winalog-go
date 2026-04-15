//go:build windows

package collectors

import (
	"context"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type NetworkInfoCollector struct {
	BaseCollector
}

type NetConnection struct {
	PID         int
	Protocol    string
	LocalAddr   string
	LocalPort   int
	RemoteAddr  string
	RemotePort  int
	State       string
	ProcessName string
}

func NewNetworkInfoCollector() *NetworkInfoCollector {
	return &NetworkInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "network_info",
				Description:   "Collect network connection information",
				RequiresAdmin: true,
				Version:       "1.0.0",
			},
		},
	}
}

func (c *NetworkInfoCollector) Collect(ctx context.Context) ([]interface{}, error) {
	connections, err := c.collectNetworkInfo()
	if err != nil {
		return nil, err
	}
	interfaces := make([]interface{}, len(connections))
	for i, n := range connections {
		interfaces[i] = n
	}
	return interfaces, nil
}

func (c *NetworkInfoCollector) collectNetworkInfo() ([]*types.NetworkConnection, error) {
	connections := make([]*types.NetworkConnection, 0)
	return connections, nil
}

func ListNetworkConnections() ([]NetConnection, error) {
	return make([]NetConnection, 0), nil
}

func GetTCPConnections() ([]NetConnection, error) {
	return make([]NetConnection, 0), nil
}

func GetUDPEndpoints() ([]NetConnection, error) {
	return make([]NetConnection, 0), nil
}
