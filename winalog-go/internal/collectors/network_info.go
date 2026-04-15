package collectors

import (
	"bufio"
	"context"
	"fmt"
	"net"
	"os"
	"path/filepath"
	"strconv"
	"strings"

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
				RequiresAdmin: false,
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

	tcpConns, _ := c.parseTCPConnections()
	connections = append(connections, tcpConns...)

	udpConns, _ := c.parseUDPConnections()
	connections = append(connections, udpConns...)

	return connections, nil
}

func (c *NetworkInfoCollector) parseTCPConnections() ([]*types.NetworkConnection, error) {
	connections := make([]*types.NetworkConnection, 0)

	file, err := os.Open("/proc/net/tcp")
	if err != nil {
		return connections, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Scan()

	pidMap := c.getProcessNames()

	for scanner.Scan() {
		line := scanner.Text()
		fields := strings.Fields(line)
		if len(fields) < 10 {
			continue
		}

		localAddr := fields[1]
		remoteAddr := fields[2]
		state := fields[3]
		uid := fields[7]

		localIP, localPort := parseIPPort(localAddr)
		remoteIP, remotePort := parseIPPort(remoteAddr)

		conn := &types.NetworkConnection{
			PID:         0,
			Protocol:    "TCP",
			LocalAddr:   localIP,
			LocalPort:   localPort,
			RemoteAddr:  remoteIP,
			RemotePort:  remotePort,
			State:       tcpState(state),
			ProcessName: fmt.Sprintf("uid:%s", uid),
		}

		for pid, name := range pidMap {
			conn.PID = int32(pid)
			conn.ProcessName = name
			break
		}

		connections = append(connections, conn)
	}

	return connections, nil
}

func (c *NetworkInfoCollector) parseUDPConnections() ([]*types.NetworkConnection, error) {
	connections := make([]*types.NetworkConnection, 0)

	file, err := os.Open("/proc/net/udp")
	if err != nil {
		return connections, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Scan()

	pidMap := c.getProcessNames()

	for scanner.Scan() {
		line := scanner.Text()
		fields := strings.Fields(line)
		if len(fields) < 10 {
			continue
		}

		localAddr := fields[1]
		uid := fields[7]

		localIP, localPort := parseIPPort(localAddr)

		conn := &types.NetworkConnection{
			PID:         0,
			Protocol:    "UDP",
			LocalAddr:   localIP,
			LocalPort:   localPort,
			RemoteAddr:  "",
			RemotePort:  0,
			State:       "UNCONN",
			ProcessName: fmt.Sprintf("uid:%s", uid),
		}

		for pid, name := range pidMap {
			conn.PID = int32(pid)
			conn.ProcessName = name
			break
		}

		connections = append(connections, conn)
	}

	return connections, nil
}

func (c *NetworkInfoCollector) getProcessNames() map[int]string {
	result := make(map[int]string)

	entries, err := os.ReadDir("/proc")
	if err != nil {
		return result
	}

	for _, entry := range entries {
		if !entry.IsDir() {
			continue
		}

		pid, err := strconv.Atoi(entry.Name())
		if err != nil {
			continue
		}

		commPath := filepath.Join("/proc", entry.Name(), "comm")
		comm, err := os.ReadFile(commPath)
		if err != nil {
			continue
		}

		result[pid] = strings.TrimSpace(string(comm))
	}

	return result
}

func parseIPPort(addrPort string) (string, int) {
	parts := strings.Split(addrPort, ":")
	if len(parts) != 2 {
		return "", 0
	}

	ip := parts[0]
	port, err := strconv.ParseInt(parts[1], 16, 64)
	if err != nil {
		return "", 0
	}

	ipStr := parseHexIP(ip)
	return ipStr, int(port)
}

func parseHexIP(hex string) string {
	if len(hex) != 8 {
		return hex
	}
	b0, _ := strconv.ParseInt(hex[6:8], 16, 64)
	b1, _ := strconv.ParseInt(hex[4:6], 16, 64)
	b2, _ := strconv.ParseInt(hex[2:4], 16, 64)
	b3, _ := strconv.ParseInt(hex[0:2], 16, 64)
	return fmt.Sprintf("%d.%d.%d.%d", b0, b1, b2, b3)
}

func tcpState(state string) string {
	states := map[string]string{
		"01": "ESTABLISHED",
		"02": "SYN_SENT",
		"03": "SYN_RECV",
		"04": "FIN_WAIT1",
		"05": "FIN_WAIT2",
		"06": "TIME_WAIT",
		"07": "CLOSE",
		"08": "CLOSE_WAIT",
		"09": "LAST_ACK",
		"0A": "LISTEN",
		"0B": "CLOSING",
	}
	return states[state]
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
	connections := []NetConnection{}

	tcpFile, err := os.Open("/proc/net/tcp")
	if err == nil {
		defer tcpFile.Close()
		scanner := bufio.NewScanner(tcpFile)
		scanner.Scan()

		for scanner.Scan() {
			line := scanner.Text()
			fields := strings.Fields(line)
			if len(fields) < 10 {
				continue
			}

			localAddr := fields[1]
			remoteAddr := fields[2]
			state := fields[3]

			localIP, localPort := parseIPPort(localAddr)
			remoteIP, remotePort := parseIPPort(remoteAddr)

			connections = append(connections, NetConnection{
				Protocol:   "TCP",
				LocalAddr:  localIP,
				LocalPort:  localPort,
				RemoteAddr: remoteIP,
				RemotePort: remotePort,
				State:      tcpState(state),
			})
		}
	}

	udpFile, err := os.Open("/proc/net/udp")
	if err == nil {
		defer udpFile.Close()
		scanner := bufio.NewScanner(udpFile)
		scanner.Scan()

		for scanner.Scan() {
			line := scanner.Text()
			fields := strings.Fields(line)
			if len(fields) < 10 {
				continue
			}

			localAddr := fields[1]
			localIP, localPort := parseIPPort(localAddr)

			connections = append(connections, NetConnection{
				Protocol:  "UDP",
				LocalAddr: localIP,
				LocalPort: localPort,
				State:     "UNCONN",
			})
		}
	}

	return connections, nil
}

func GetTCPConnections() ([]NetConnection, error) {
	connections := []NetConnection{}

	file, err := os.Open("/proc/net/tcp")
	if err != nil {
		return connections, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Scan()

	for scanner.Scan() {
		line := scanner.Text()
		fields := strings.Fields(line)
		if len(fields) < 10 {
			continue
		}

		localAddr := fields[1]
		remoteAddr := fields[2]
		state := fields[3]

		localIP, localPort := parseIPPort(localAddr)
		remoteIP, remotePort := parseIPPort(remoteAddr)

		connections = append(connections, NetConnection{
			Protocol:   "TCP",
			LocalAddr:  localIP,
			LocalPort:  localPort,
			RemoteAddr: remoteIP,
			RemotePort: remotePort,
			State:      tcpState(state),
		})
	}

	return connections, nil
}

func GetUDPEndpoints() ([]NetConnection, error) {
	connections := []NetConnection{}

	file, err := os.Open("/proc/net/udp")
	if err != nil {
		return connections, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Scan()

	for scanner.Scan() {
		line := scanner.Text()
		fields := strings.Fields(line)
		if len(fields) < 10 {
			continue
		}

		localAddr := fields[1]
		localIP, localPort := parseIPPort(localAddr)

		connections = append(connections, NetConnection{
			Protocol:  "UDP",
			LocalAddr: localIP,
			LocalPort: localPort,
			State:     "UNCONN",
		})
	}

	return connections, nil
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
	names, err := net.LookupAddr(ip)
	if err != nil || len(names) == 0 {
		return ip, nil
	}
	return strings.TrimSuffix(names[0], "."), nil
}
