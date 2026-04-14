package collectors

import (
	"context"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type NetworkInfoCollector struct {
	BaseCollector
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
	for i, conn := range connections {
		interfaces[i] = conn
	}
	return interfaces, nil
}

func (c *NetworkInfoCollector) collectNetworkInfo() ([]*types.NetworkConnection, error) {
	connections := make([]*types.NetworkConnection, 0)

	conn := &types.NetworkConnection{
		PID:         1,
		Protocol:    "TCP",
		LocalAddr:   "127.0.0.1",
		LocalPort:   0,
		RemoteAddr:  "",
		RemotePort:  0,
		State:       "LISTEN",
		ProcessName: "system",
	}

	connections = append(connections, conn)

	return connections, nil
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

func ListNetworkConnections() ([]NetConnection, error) {
	return []NetConnection{}, nil
}

func GetTCPConnections() ([]NetConnection, error) {
	return []NetConnection{}, nil
}

func GetUDPEndpoints() ([]NetConnection, error) {
	return []NetConnection{}, nil
}

func CollectNetworkInfo(ctx context.Context) ([]*types.NetworkConnection, error) {
	collector := NewNetworkInfoCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	connections := make([]*types.NetworkConnection, 0, len(results))
	for _, r := range results {
		if conn, ok := r.(*types.NetworkConnection); ok {
			connections = append(connections, conn)
		}
	}
	return connections, nil
}

func ParseIPAddress(ip string) (string, error) {
	return ip, nil
}

func ResolveHostname(ip string) (string, error) {
	return ip, nil
}
