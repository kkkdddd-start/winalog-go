//go:build windows

package poll

import (
	"context"
	"fmt"
	"log"
	"net"
	"strings"
	"sync"
	"syscall"
	"time"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/monitor/types"
	"golang.org/x/sys/windows"
)

type NetworkPoller struct {
	ctx         context.Context
	cancel      context.CancelFunc
	interval    time.Duration
	prevState   map[string]*types.ConnectionInfo
	events      chan *types.MonitorEvent
	subscribers []chan *types.MonitorEvent
	subMu       sync.RWMutex
	running     bool
	mu          sync.RWMutex
	wg          sync.WaitGroup
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

type Addr struct {
	IP   string
	Port uint16
}

var (
	iphlpapi     *syscall.DLL
	procTcpTable *syscall.Proc
	procUdpTable *syscall.Proc
	dllLoaded    bool
)

func initDLL() error {
	if dllLoaded {
		return nil
	}
	var err error
	iphlpapi, err = syscall.LoadDLL("iphlpapi.dll")
	if err != nil {
		return fmt.Errorf("failed to load iphlpapi.dll: %w", err)
	}
	procTcpTable, err = iphlpapi.FindProc("GetExtendedTcpTable")
	if err != nil {
		return fmt.Errorf("failed to find GetExtendedTcpTable: %w", err)
	}
	procUdpTable, err = iphlpapi.FindProc("GetExtendedUdpTable")
	if err != nil {
		return fmt.Errorf("failed to find GetExtendedUdpTable: %w", err)
	}
	dllLoaded = true
	return nil
}

func getTCPConnections() ([]*types.ConnectionInfo, error) {
	if err := initDLL(); err != nil {
		return nil, err
	}

	var size uint32
	ret, _, _ := procTcpTable.Call(0, uintptr(unsafe.Pointer(&size)), 0, windows.AF_INET, 5, 0)
	if ret != 0 && ret != 122 {
		return nil, fmt.Errorf("GetExtendedTcpTable failed: %d", ret)
	}

	buf := make([]byte, size)
	ret, _, _ = procTcpTable.Call(uintptr(unsafe.Pointer(&buf[0])), uintptr(unsafe.Pointer(&size)), 0, windows.AF_INET, 5, 0)
	if ret != 0 {
		return nil, fmt.Errorf("GetExtendedTcpTable failed: %d", ret)
	}

	numEntries := uint32(buf[0]) | (uint32(buf[1]) << 8) | (uint32(buf[2]) << 16) | (uint32(buf[3]) << 24)
	offset := 4

	connections := make([]*types.ConnectionInfo, 0)
	for i := uint32(0); i < numEntries; i++ {
		row := (*MIB_TCPROW_OWNER_PID)(unsafe.Pointer(&buf[offset]))
		offset += int(unsafe.Sizeof(*row))

		localIP := net.IP(row.LocalAddr[:]).String()
		remoteIP := net.IP(row.RemoteAddr[:]).String()
		localPort := windows.Ntohs(uint16(row.LocalPort))
		remotePort := windows.Ntohs(uint16(row.RemotePort))

		connections = append(connections, &types.ConnectionInfo{
			Protocol:   "TCP",
			LocalAddr:  fmt.Sprintf("%s:%d", localIP, localPort),
			RemoteAddr: fmt.Sprintf("%s:%d", remoteIP, remotePort),
			State:      row.State,
			PID:        row.PID,
		})
	}

	return connections, nil
}

func getUDPConnections() ([]*types.ConnectionInfo, error) {
	if err := initDLL(); err != nil {
		return nil, err
	}

	var size uint32
	ret, _, _ := procUdpTable.Call(0, uintptr(unsafe.Pointer(&size)), 0, windows.AF_INET, 1, 0)
	if ret != 0 && ret != 122 {
		return nil, fmt.Errorf("GetExtendedUdpTable failed: %d", ret)
	}

	buf := make([]byte, size)
	ret, _, _ = procUdpTable.Call(uintptr(unsafe.Pointer(&buf[0])), uintptr(unsafe.Pointer(&size)), 0, windows.AF_INET, 1, 0)
	if ret != 0 {
		return nil, fmt.Errorf("GetExtendedUdpTable failed: %d", ret)
	}

	numEntries := uint32(buf[0]) | (uint32(buf[1]) << 8) | (uint32(buf[2]) << 16) | (uint32(buf[3]) << 24)
	offset := 4

	connections := make([]*types.ConnectionInfo, 0)
	for i := uint32(0); i < numEntries; i++ {
		row := (*MIB_UDPROW_OWNER_PID)(unsafe.Pointer(&buf[offset]))
		offset += int(unsafe.Sizeof(*row))

		localIP := net.IP(row.LocalAddr[:]).String()
		localPort := windows.Ntohs(uint16(row.LocalPort))

		connections = append(connections, &types.ConnectionInfo{
			Protocol:   "UDP",
			LocalAddr:  fmt.Sprintf("%s:%d", localIP, localPort),
			RemoteAddr: "*:*",
			State:      0,
			PID:        row.PID,
		})
	}

	return connections, nil
}

func NewNetworkPoller(interval time.Duration) (*NetworkPoller, error) {
	if err := initDLL(); err != nil {
		return nil, err
	}

	if interval <= 0 {
		interval = 5 * time.Second
	}
	ctx, cancel := context.WithCancel(context.Background())
	return &NetworkPoller{
		ctx:         ctx,
		cancel:      cancel,
		interval:    interval,
		prevState:   make(map[string]*types.ConnectionInfo),
		events:      make(chan *types.MonitorEvent, 100),
		subscribers: make([]chan *types.MonitorEvent, 0),
		running:     false,
	}, nil
}

func (np *NetworkPoller) Start() error {
	np.mu.Lock()
	defer np.mu.Unlock()

	if np.running {
		return nil
	}
	np.running = true

	np.wg.Add(1)
	go np.run()
	return nil
}

func (np *NetworkPoller) Stop() error {
	np.mu.Lock()
	if !np.running {
		np.mu.Unlock()
		return nil
	}

	np.cancel()
	np.running = false
	np.mu.Unlock()

	np.wg.Wait()

	np.subMu.Lock()
	for _, ch := range np.subscribers {
		close(ch)
	}
	np.subscribers = make([]chan *types.MonitorEvent, 0)
	np.subMu.Unlock()

	return nil
}

func (np *NetworkPoller) Subscribe(ch chan *types.MonitorEvent) func() {
	np.subMu.Lock()
	defer np.subMu.Unlock()
	np.subscribers = append(np.subscribers, ch)
	return func() {
		np.subMu.Lock()
		defer np.subMu.Unlock()
		for i, c := range np.subscribers {
			if c == ch {
				np.subscribers = append(np.subscribers[:i], np.subscribers[i+1:]...)
				break
			}
		}
	}
}

func (np *NetworkPoller) run() {
	defer np.wg.Done()
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
	select {
	case <-np.ctx.Done():
		return
	default:
	}

	currentState := make(map[string]*types.ConnectionInfo)

	tcpConns, err := getTCPConnections()
	if err != nil {
		log.Printf("[ERROR] getTCPConnections failed: %v", err)
	} else {
		for _, conn := range tcpConns {
			key := fmt.Sprintf("tcp-%s-%s", conn.LocalAddr, conn.RemoteAddr)
			currentState[key] = conn
		}
	}

	udpConns, err := getUDPConnections()
	if err != nil {
		log.Printf("[ERROR] getUDPConnections failed: %v", err)
	} else {
		for _, conn := range udpConns {
			key := fmt.Sprintf("udp-%s", conn.LocalAddr)
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

func (np *NetworkPoller) createNetworkEvent(conn *types.ConnectionInfo) *types.MonitorEvent {
	severity := types.SeverityInfo
	processName := getProcessName(conn.PID)

	localIP, localPort := splitAddr(conn.LocalAddr)
	remoteIP, remotePort := splitAddr(conn.RemoteAddr)

	for _, port := range types.SuspiciousPorts {
		if remotePort != 0 && remotePort == port {
			severity = types.SeverityHigh
			break
		}
	}

	for _, ipRange := range types.SuspiciousIPs {
		if strings.HasPrefix(conn.RemoteAddr, ipRange[:len(ipRange)-3]) {
			severity = types.SeverityMedium
			break
		}
	}

	data := make(map[string]interface{})
	data["protocol"] = conn.Protocol
	data["source_ip"] = localIP.IP
	data["source_port"] = localPort
	data["dest_ip"] = remoteIP.IP
	data["dest_port"] = remotePort
	data["state"] = getTCPState(conn.State)
	data["process_name"] = processName
	data["pid"] = conn.PID

	return &types.MonitorEvent{
		ID:        fmt.Sprintf("net-%s-%d-%d", conn.Protocol, localPort, time.Now().UnixNano()),
		Type:      types.EventTypeNetwork,
		Timestamp: time.Now(),
		Severity:  severity,
		Data:      data,
	}
}

func (np *NetworkPoller) publishEvent(event *types.MonitorEvent) {
	np.subMu.RLock()
	defer np.subMu.RUnlock()

	for _, ch := range np.subscribers {
		select {
		case ch <- event:
		default:
		}
	}
}

func splitAddr(addr string) (Addr, uint16) {
	parts := strings.Split(addr, ":")
	if len(parts) == 2 {
		var port uint16
		fmt.Sscanf(parts[1], "%d", &port)
		return Addr{IP: parts[0], Port: port}, port
	}
	return Addr{IP: addr, Port: 0}, 0
}

func getProcessName(pid uint32) string {
	if pid == 0 {
		return "Unknown"
	}

	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_LIMITED_INFORMATION|windows.PROCESS_QUERY_INFORMATION, false, pid)
	if err != nil {
		return "Unknown"
	}
	defer windows.CloseHandle(hProcess)

	if hProcess == 0 {
		return "Unknown"
	}

	var buf [windows.MAX_PATH]uint16
	size := uint32(len(buf))
	if err := windows.QueryFullProcessImageName(hProcess, 0, &buf[0], &size); err != nil {
		return "Unknown"
	}

	path := windows.UTF16ToString(buf[:size])
	if path == "" {
		return "Unknown"
	}

	parts := strings.Split(path, "\\")
	if len(parts) > 0 {
		return parts[len(parts)-1]
	}

	return path
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
