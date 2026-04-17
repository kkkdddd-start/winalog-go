//go:build windows

package collectors

import (
	"context"
	"encoding/json"
	"strings"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
	"golang.org/x/sys/windows"
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

	tcpConnections, err := getTCPConnections()
	if err == nil {
		connections = append(connections, tcpConnections...)
	}

	udpEndpoints, err := getUDPEndpoints()
	if err == nil {
		connections = append(connections, udpEndpoints...)
	}

	return connections, nil
}

func getTCPConnections() ([]*types.NetworkConnection, error) {
	cmd := `Get-NetTCPConnection | Select-Object LocalAddress,LocalPort,RemoteAddress,RemotePort,State,OwningProcess | ForEach-Object { $_ | ConvertTo-Json -Compress }`
	return executeNetworkCommand(cmd, "TCP")
}

func getUDPEndpoints() ([]*types.NetworkConnection, error) {
	cmd := `Get-NetUDPEndpoint | Select-Object LocalAddress,LocalPort,OwningProcess | ForEach-Object { $_ | ConvertTo-Json -Compress }`
	return executeNetworkCommand(cmd, "UDP")
}

func executeNetworkCommand(cmd string, protocol string) ([]*types.NetworkConnection, error) {
	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return []*types.NetworkConnection{}, nil
	}

	output := strings.TrimSpace(result.Output)
	if output == "" || output == "null" {
		return []*types.NetworkConnection{}, nil
	}

	lines := strings.Split(output, "\n")
	connections := make([]*types.NetworkConnection, 0, len(lines))
	processNames := getProcessNameMap()

	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" {
			continue
		}

		var connRaw struct {
			LocalAddress  string `json:"LocalAddress"`
			LocalPort     int    `json:"LocalPort"`
			RemoteAddress string `json:"RemoteAddress,omitempty"`
			RemotePort    int    `json:"RemotePort,omitempty"`
			State         string `json:"State,omitempty"`
			OwningProcess int    `json:"OwningProcess"`
		}

		if err := json.Unmarshal([]byte(line), &connRaw); err != nil {
			continue
		}

		pid := connRaw.OwningProcess
		processName := processNames[pid]
		if processName == "" {
			processName = "Unknown"
		}

		state := connRaw.State
		if state == "" {
			state = "Listen"
		}

		conn := &types.NetworkConnection{
			Protocol:    protocol,
			LocalAddr:   connRaw.LocalAddress,
			LocalPort:   connRaw.LocalPort,
			RemoteAddr:  connRaw.RemoteAddress,
			RemotePort:  connRaw.RemotePort,
			State:       state,
			PID:         int32(pid),
			ProcessName: processName,
		}
		connections = append(connections, conn)
	}

	return connections, nil
}

func getProcessNameMap() map[int]string {
	nameMap := make(map[int]string)

	snapshot, err := windows.CreateToolhelp32Snapshot(windows.TH32CS_SNAPPROCESS, 0)
	if err != nil {
		return nameMap
	}
	defer windows.CloseHandle(snapshot)

	var entry windows.ProcessEntry32
	entry.Size = uint32(unsafe.Sizeof(entry))

	err = windows.Process32First(snapshot, &entry)
	if err != nil {
		return nameMap
	}

	for {
		pid := int(entry.ProcessID)
		name := windows.UTF16ToString(entry.ExeFile[:])
		nameMap[pid] = name

		err = windows.Process32Next(snapshot, &entry)
		if err != nil {
			break
		}
	}

	return nameMap
}

func ListNetworkConnections() ([]NetConnection, error) {
	typesConn, err := NewNetworkInfoCollector().collectNetworkInfo()
	if err != nil {
		return []NetConnection{}, err
	}

	result := make([]NetConnection, 0, len(typesConn))
	for _, c := range typesConn {
		result = append(result, NetConnection{
			PID:         int(c.PID),
			Protocol:    c.Protocol,
			LocalAddr:   c.LocalAddr,
			LocalPort:   c.LocalPort,
			RemoteAddr:  c.RemoteAddr,
			RemotePort:  c.RemotePort,
			State:       c.State,
			ProcessName: c.ProcessName,
		})
	}
	return result, nil
}

func GetTCPConnections() ([]NetConnection, error) {
	typesConn, err := getTCPConnections()
	if err != nil {
		return []NetConnection{}, err
	}

	result := make([]NetConnection, 0, len(typesConn))
	for _, c := range typesConn {
		result = append(result, NetConnection{
			PID:         int(c.PID),
			Protocol:    c.Protocol,
			LocalAddr:   c.LocalAddr,
			LocalPort:   c.LocalPort,
			RemoteAddr:  c.RemoteAddr,
			RemotePort:  c.RemotePort,
			State:       c.State,
			ProcessName: c.ProcessName,
		})
	}
	return result, nil
}

func GetUDPEndpoints() ([]NetConnection, error) {
	typesConn, err := getUDPEndpoints()
	if err != nil {
		return []NetConnection{}, err
	}

	result := make([]NetConnection, 0, len(typesConn))
	for _, c := range typesConn {
		result = append(result, NetConnection{
			PID:         int(c.PID),
			Protocol:    c.Protocol,
			LocalAddr:   c.LocalAddr,
			LocalPort:   c.LocalPort,
			State:       c.State,
			ProcessName: c.ProcessName,
		})
	}
	return result, nil
}
