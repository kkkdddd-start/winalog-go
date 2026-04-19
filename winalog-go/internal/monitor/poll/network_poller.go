//go:build windows

package poll

import (
	"context"
	"fmt"
	"net"
	"strings"
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/monitor"
	"golang.org/x/sys/windows"
)

type NetworkPoller struct {
	ctx         context.Context
	cancel      context.CancelFunc
	interval    time.Duration
	prevState   map[string]*ConnectionInfo
	events      chan *monitor.MonitorEvent
	subscribers []chan *monitor.MonitorEvent
	subMu       sync.RWMutex
	running     bool
	mu          sync.RWMutex
}

type MIB_TCPROW_OWNER_PID struct {
	State      uint32
	LocalAddr  [4]byte
	LocalPort  uint32
	RemoteAddr [4]byte
	RemotePort uint32
	PID        uint32
}

type MIB_UDPROW_OWNER_PID struct {
	LocalAddr [4]byte
	LocalPort uint32
	PID       uint32
}

func NewNetworkPoller(interval time.Duration) *NetworkPoller {
	if interval <= 0 {
		interval = 5 * time.Second
	}
	return &NetworkPoller{
		interval:    interval,
		prevState:   make(map[string]*ConnectionInfo),
		events:      make(chan *monitor.MonitorEvent, 100),
		subscribers: make([]chan *monitor.MonitorEvent, 0),
		running:     false,
	}
}

func (np *NetworkPoller) Start() error {
	np.mu.Lock()
	if np.running {
		np.mu.Unlock()
		return nil
	}
	np.running = true
	np.mu.Unlock()

	go np.run()
	return nil
}

func (np *NetworkPoller) Stop() error {
	np.mu.Lock()
	defer np.mu.Unlock()

	if !np.running {
		return nil
	}

	np.cancel()
	np.running = false

	np.subMu.Lock()
	for _, ch := range np.subscribers {
		close(ch)
	}
	np.subscribers = make([]chan *monitor.MonitorEvent, 0)
	np.subMu.Unlock()

	return nil
}

func (np *NetworkPoller) Subscribe(ch chan *monitor.MonitorEvent) func() {
	np.subMu.Lock()
	defer np.subMu.Unlock()
	np.subscribers = append(np.subscribers, ch)
	return func() {
		np.subMu.Lock()
		defer np.subMu.Unlock()
		for i, c := range np.subscribers {
			if c == ch {
				np.subscribers = append(np.subscribers[:i], np.subscribers[i+1:]...)
				close(ch)
				break
			}
		}
	}
}

func (np *NetworkPoller) run() {
	ticker := time.NewTicker(np.interval)
	defer ticker.Stop()

	np.pollConnections()

	for {
		select {
		case <-np.ctx.Done():
			return
		case <-ticker.C:
			np.pollConnections()
		}
	}
}

func (np *NetworkPoller) pollConnections() {
	currentState := make(map[string]*ConnectionInfo)

	connections, err := net.Conn()
	if err == nil {
		defer func() {
			if conn, ok := connections.(interface{ Close() error }); ok {
				conn.Close()
			}
		}()
	}

	tcpConns, err := np.getTCPConnections()
	if err == nil {
		for _, conn := range tcpConns {
			key := fmt.Sprintf("tcp-%s-%d-%s-%d", conn.LocalAddr, conn.LocalPort, conn.RemoteAddr, conn.RemotePort)
			currentState[key] = conn
		}
	}

	udpConns, err := np.getUDPConnections()
	if err == nil {
		for _, conn := range udpConns {
			key := fmt.Sprintf("udp-%s-%d", conn.LocalAddr, conn.LocalPort)
			currentState[key] = conn
		}
	}

	np.mu.Lock()
	for key, conn := range currentState {
		if _, exists := np.prevState[key]; !exists {
			event := np.createNetworkEvent(conn)
			if event != nil {
				np.publishEvent(event)
			}
		}
	}
	np.prevState = currentState
	np.mu.Unlock()
}

func (np *NetworkPoller) getTCPConnections() ([]*monitor.ConnectionInfo, error) {
	var rows []MIB_TCPROW_OWNER_PID
	size := uint32(0)

	ret := windows.GetExtendedTcpTable(nil, &size, false, windows.AF_INET, windows.TCP_TABLE_OWNER_PID_ALL, 0)
	if ret != 0 && ret != windows.ERROR_INSUFFICIENT_BUFFER {
		return nil, fmt.Errorf("GetExtendedTcpTable failed: %d", ret)
	}

	buf := make([]byte, size)
	ret = windows.GetExtendedTcpTable(&buf[0], &size, false, windows.AF_INET, windows.TCP_TABLE_OWNER_PID_ALL, 0)
	if ret != 0 {
		return nil, fmt.Errorf("GetExtendedTcpTable failed: %d", ret)
	}

	numEntries := uint32(buf[0]) | (uint32(buf[1]) << 8) | (uint32(buf[2]) << 16) | (uint32(buf[3]) << 24)
	offset := 4

	var connections []*monitor.ConnectionInfo
	for i := uint32(0); i < numEntries; i++ {
		row := (*MIB_TCPROW_OWNER_PID)(unsafe.Pointer(&buf[offset]))
		offset += int(unsafe.Sizeof(*row))

		localIP := net.IP(row.LocalAddr[:]).String()
		remoteIP := net.IP(row.RemoteAddr[:]).String()

		connections = append(connections, &monitor.ConnectionInfo{
			Protocol:   "TCP",
			LocalAddr:  fmt.Sprintf("%s:%d", localIP, row.LocalPort),
			RemoteAddr: fmt.Sprintf("%s:%d", remoteIP, row.RemotePort),
			State:      row.State,
			PID:        row.PID,
		})
	}

	return connections, nil
}

func (np *NetworkPoller) getUDPConnections() ([]*monitor.ConnectionInfo, error) {
	var rows []MIB_UDPROW_OWNER_PID
	size := uint32(0)

	ret := windows.GetExtendedUdpTable(nil, &size, false, windows.AF_INET, windows.UDP_TABLE_OWNER_PID, 0)
	if ret != 0 && ret != windows.ERROR_INSUFFICIENT_BUFFER {
		return nil, fmt.Errorf("GetExtendedUdpTable failed: %d", ret)
	}

	buf := make([]byte, size)
	ret = windows.GetExtendedUdpTable(&buf[0], &size, false, windows.AF_INET, windows.UDP_TABLE_OWNER_PID, 0)
	if ret != 0 {
		return nil, fmt.Errorf("GetExtendedUdpTable failed: %d", ret)
	}

	numEntries := uint32(buf[0]) | (uint32(buf[1]) << 8) | (uint32(buf[2]) << 16) | (uint32(buf[3]) << 24)
	offset := 4

	var connections []*monitor.ConnectionInfo
	for i := uint32(0); i < numEntries; i++ {
		row := (*MIB_UDPROW_OWNER_PID)(unsafe.Pointer(&buf[offset]))
		offset += int(unsafe.Sizeof(*row))

		localIP := net.IP(row.LocalAddr[:]).String()

		connections = append(connections, &monitor.ConnectionInfo{
			Protocol:   "UDP",
			LocalAddr:  fmt.Sprintf("%s:%d", localIP, row.LocalPort),
			RemoteAddr: "*:*",
			State:      0,
			PID:        row.PID,
		})
	}

	return connections, nil
}

func (np *NetworkPoller) createNetworkEvent(conn *monitor.ConnectionInfo) *monitor.MonitorEvent {
	severity := monitor.SeverityInfo
	processName := getProcessName(conn.PID)

	for _, port := range monitor.SuspiciousPorts {
		if conn.RemoteAddr != "*:*" {
			remoteParts := strings.Split(conn.RemoteAddr, ":")
			if len(remoteParts) == 2 {
				var portNum uint16
				fmt.Sscanf(remoteParts[1], "%d", &portNum)
				if portNum == port {
					severity = monitor.SeverityHigh
					break
				}
			}
		}
	}

	for _, ipRange := range monitor.SuspiciousIPs {
		if strings.HasPrefix(conn.RemoteAddr, ipRange[:len(ipRange)-3]) {
			severity = monitor.SeverityMedium
			break
		}
	}

	data := make(map[string]interface{})
	data["protocol"] = conn.Protocol
	data["source_ip"], data["source_port"] = splitAddr(conn.LocalAddr)
	data["dest_ip"], data["dest_port"] = splitAddr(conn.RemoteAddr)
	data["state"] = getTCPState(conn.State)
	data["process_name"] = processName
	data["pid"] = conn.PID

	return &monitor.MonitorEvent{
		ID:        fmt.Sprintf("net-%s-%d-%d", conn.Protocol, conn.LocalPort, time.Now().UnixNano()),
		Type:      monitor.EventTypeNetwork,
		Timestamp: time.Now(),
		Severity:  severity,
		Data:      data,
	}
}

func (np *NetworkPoller) publishEvent(event *monitor.MonitorEvent) {
	np.subMu.RLock()
	defer np.subMu.RUnlock()

	for _, ch := range np.subscribers {
		select {
		case ch <- event:
		default:
		}
	}
}

func splitAddr(addr string) (string, interface{}) {
	parts := strings.Split(addr, ":")
	if len(parts) == 2 {
		var port uint16
		fmt.Sscanf(parts[1], "%d", &port)
		return parts[0], port
	}
	return addr, nil
}

func getProcessName(pid uint32) string {
	return "Unknown"
}

func getTCPState(state uint32) string {
	states := map[uint32]string{
		1:  "CLOSED",
		2:  "LISTEN",
		3:  "SYN_SENT",
		4:  "SYN_RCVD",
		5:  "ESTABLISHED",
		6:  "FIN_WAIT_1",
		7:  "FIN_WAIT_2",
		8:  "CLOSE_WAIT",
		9:  "CLOSING",
		10: "LAST_ACK",
		11: "TIME_WAIT",
		12: "DELETE_TCB",
	}
	if s, ok := states[state]; ok {
		return s
	}
	return "UNKNOWN"
}

type MIB_TCPROW_OWNER_PID struct {
	State      uint32
	LocalAddr  [4]byte
	LocalPort  uint32
	RemoteAddr [4]byte
	RemotePort uint32
	PID        uint32
}

type MIB_UDPROW_OWNER_PID struct {
	LocalAddr [4]byte
	LocalPort uint32
	PID       uint32
}

func NewNetworkPoller(interval time.Duration) *NetworkPoller {
	if interval <= 0 {
		interval = 5 * time.Second
	}
	return &NetworkPoller{
		interval:    interval,
		prevState:   make(map[string]*ConnectionInfo),
		events:      make(chan *monitor.MonitorEvent, 100),
		subscribers: make([]chan *monitor.MonitorEvent, 0),
		running:     false,
	}
}

func (np *NetworkPoller) Start() error {
	np.mu.Lock()
	if np.running {
		np.mu.Unlock()
		return nil
	}
	np.running = true
	np.mu.Unlock()

	go np.run()
	return nil
}

func (np *NetworkPoller) Stop() error {
	np.mu.Lock()
	defer np.mu.Unlock()

	if !np.running {
		return nil
	}

	np.cancel()
	np.running = false

	np.subMu.Lock()
	for _, ch := range np.subscribers {
		close(ch)
	}
	np.subscribers = make([]chan *monitor.MonitorEvent, 0)
	np.subMu.Unlock()

	return nil
}

func (np *NetworkPoller) Subscribe(ch chan *monitor.MonitorEvent) func() {
	np.subMu.Lock()
	defer np.subMu.Unlock()
	np.subscribers = append(np.subscribers, ch)
	return func() {
		np.subMu.Lock()
		defer np.subMu.Unlock()
		for i, c := range np.subscribers {
			if c == ch {
				np.subscribers = append(np.subscribers[:i], np.subscribers[i+1:]...)
				close(ch)
				break
			}
		}
	}
}

func (np *NetworkPoller) run() {
	ticker := time.NewTicker(np.interval)
	defer ticker.Stop()

	np.Poll()

	for {
		select {
		case <-np.ctx.Done():
			return
		case <-ticker.C:
			np.Poll()
		}
	}
}

func (np *NetworkPoller) Poll() error {
	currentState := make(map[string]*ConnectionInfo)

	tcpConns, err := np.getTCPConnections()
	if err == nil {
		for _, conn := range tcpConns {
			key := fmt.Sprintf("tcp-%s-%d-%s-%d", conn.LocalAddr, conn.LocalPort, conn.RemoteAddr, conn.RemotePort)
			currentState[key] = conn
		}
	}

	udpConns, err := np.getUDPConnections()
	if err == nil {
		for _, conn := range udpConns {
			key := fmt.Sprintf("udp-%s-%d", conn.LocalAddr, conn.LocalPort)
			currentState[key] = conn
		}
	}

	np.mu.Lock()
	for key, conn := range currentState {
		if _, exists := np.prevState[key]; !exists {
			event := np.createNetworkEvent(conn)
			if event != nil {
				np.publishEvent(event)
			}
		}
	}
	np.prevState = currentState
	np.mu.Unlock()

	return nil
}

func (np *NetworkPoller) getTCPConnections() ([]*monitor.ConnectionInfo, error) {
	var rows []MIB_TCPROW_OWNER_PID
	size := uint32(0)

	ret := windows.GetExtendedTcpTable(nil, &size, false, windows.AF_INET, windows.TCP_TABLE_OWNER_PID_ALL, 0)
	if ret != 0 && ret != windows.ERROR_INSUFFICIENT_BUFFER {
		return nil, fmt.Errorf("GetExtendedTcpTable failed: %d", ret)
	}

	buf := make([]byte, size)
	ret = windows.GetExtendedTcpTable(&buf[0], &size, false, windows.AF_INET, windows.TCP_TABLE_OWNER_PID_ALL, 0)
	if ret != 0 {
		return nil, fmt.Errorf("GetExtendedTcpTable failed: %d", ret)
	}

	numEntries := uint32(buf[0]) | (uint32(buf[1]) << 8) | (uint32(buf[2]) << 16) | (uint32(buf[3]) << 24)
	offset := 4

	var connections []*monitor.ConnectionInfo
	for i := uint32(0); i < numEntries; i++ {
		row := (*MIB_TCPROW_OWNER_PID)(unsafe.Pointer(&buf[offset]))
		offset += unsafe.Sizeof(*row)

		localIP := net.IP(row.LocalAddr[:]).String()
		remoteIP := net.IP(row.RemoteAddr[:]).String()

		connections = append(connections, &monitor.ConnectionInfo{
			Protocol:   "TCP",
			LocalAddr:  fmt.Sprintf("%s:%d", localIP, row.LocalPort),
			RemoteAddr: fmt.Sprintf("%s:%d", remoteIP, row.RemotePort),
			State:      row.State,
			PID:        row.PID,
		})
	}

	return connections, nil
}

func (np *NetworkPoller) getUDPConnections() ([]*monitor.ConnectionInfo, error) {
	var rows []MIB_UDPROW_OWNER_PID
	size := uint32(0)

	ret := windows.GetExtendedUdpTable(nil, &size, false, windows.AF_INET, windows.UDP_TABLE_OWNER_PID, 0)
	if ret != 0 && ret != windows.ERROR_INSUFFICIENT_BUFFER {
		return nil, fmt.Errorf("GetExtendedUdpTable failed: %d", ret)
	}

	buf := make([]byte, size)
	ret = windows.GetExtendedUdpTable(&buf[0], &size, false, windows.AF_INET, windows.UDP_TABLE_OWNER_PID, 0)
	if ret != 0 {
		return nil, fmt.Errorf("GetExtendedUdpTable failed: %d", ret)
	}

	numEntries := uint32(buf[0]) | (uint32(buf[1]) << 8) | (uint32(buf[2]) << 16) | (uint32(buf[3]) << 24)
	offset := 4

	var connections []*monitor.ConnectionInfo
	for i := uint32(0); i < numEntries; i++ {
		row := (*MIB_UDPROW_OWNER_PID)(unsafe.Pointer(&buf[offset]))
		offset += unsafe.Sizeof(*row)

		localIP := net.IP(row.LocalAddr[:]).String()

		connections = append(connections, &monitor.ConnectionInfo{
			Protocol:   "UDP",
			LocalAddr:  fmt.Sprintf("%s:%d", localIP, row.LocalPort),
			RemoteAddr: "*:*",
			State:      0,
			PID:        row.PID,
		})
	}

	return connections, nil
}

func (np *NetworkPoller) createNetworkEvent(conn *monitor.ConnectionInfo) *monitor.MonitorEvent {
	severity := monitor.SeverityInfo
	processName := getProcessName(conn.PID)

	for _, port := range monitor.SuspiciousPorts {
		if conn.RemoteAddr != "*:*" {
			remoteParts := strings.Split(conn.RemoteAddr, ":")
			if len(remoteParts) == 2 {
				var portNum uint16
				fmt.Sscanf(remoteParts[1], "%d", &portNum)
				if portNum == port {
					severity = monitor.SeverityHigh
					break
				}
			}
		}
	}

	for _, ipRange := range monitor.SuspiciousIPs {
		if strings.HasPrefix(conn.RemoteAddr, ipRange[:len(ipRange)-3]) {
			severity = monitor.SeverityMedium
			break
		}
	}

	data := make(map[string]interface{})
	data["protocol"] = conn.Protocol
	data["source_ip"], data["source_port"] = splitAddr(conn.LocalAddr)
	data["dest_ip"], data["dest_port"] = splitAddr(conn.RemoteAddr)
	data["state"] = getTCPState(conn.State)
	data["process_name"] = processName
	data["pid"] = conn.PID

	return &monitor.MonitorEvent{
		ID:        fmt.Sprintf("net-%s-%d-%d", conn.Protocol, conn.LocalPort, time.Now().UnixNano()),
		Type:      monitor.EventTypeNetwork,
		Timestamp: time.Now(),
		Severity:  severity,
		Data:      data,
	}
}

func (np *NetworkPoller) publishEvent(event *monitor.MonitorEvent) {
	np.subMu.RLock()
	defer np.subMu.RUnlock()

	for _, ch := range np.subscribers {
		select {
		case ch <- event:
		default:
		}
	}
}

func splitAddr(addr string) (string, interface{}) {
	parts := strings.Split(addr, ":")
	if len(parts) == 2 {
		var port uint16
		fmt.Sscanf(parts[1], "%d", &port)
		return parts[0], port
	}
	return addr, nil
}

func getProcessName(pid uint32) string {
	return "Unknown"
}

func getTCPState(state uint32) string {
	states := map[uint32]string{
		1:  "CLOSED",
		2:  "LISTEN",
		3:  "SYN_SENT",
		4:  "SYN_RCVD",
		5:  "ESTABLISHED",
		6:  "FIN_WAIT_1",
		7:  "FIN_WAIT_2",
		8:  "CLOSE_WAIT",
		9:  "CLOSING",
		10: "LAST_ACK",
		11: "TIME_WAIT",
		12: "DELETE_TCB",
	}
	if s, ok := states[state]; ok {
		return s
	}
	return "UNKNOWN"
}
