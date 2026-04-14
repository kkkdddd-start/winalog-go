//go:build windows
// +build windows

package collectors

import (
	"context"
	"fmt"
	"net"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"golang.org/x/sys/windows"
)

func (c *NetworkInfoCollector) collectNetworkInfo() ([]*types.NetworkConnection, error) {
	connections := make([]*types.NetworkConnection, 0)

	table, err := windows.GetExtendedTcpTable(nil, true, windows.AF_INET, windows.TCP_TABLE_OWNER_PID_ALL, 0)
	if err != nil {
		return nil, err
	}

	buffer := make([]byte, table.Size)
	table, err = windows.GetExtendedTcpTable(&buffer[0], true, windows.AF_INET, windows.TCP_TABLE_OWNER_PID_ALL, 0)
	if err != nil {
		return nil, err
	}

	offset := 0
	numConnections := int(table.NumEntries)

	for i := 0; i < numConnections; i++ {
		entry := (*windows.MibTcpRowOwnerPID)(unsafe.Pointer(&buffer[offset]))

		state := "UNKNOWN"
		switch entry.State {
		case windows.MIB_TCP_STATE_CLOSED:
			state = "CLOSED"
		case windows.MIB_TCP_STATE_LISTEN:
			state = "LISTEN"
		case windows.MIB_TCP_STATE_SYN_SENT:
			state = "SYN_SENT"
		case windows.MIB_TCP_STATE_SYN_RCVD:
			state = "SYN_RCVD"
		case windows.MIB_TCP_STATE_ESTAB:
			state = "ESTABLISHED"
		case windows.MIB_TCP_STATE_FIN_WAIT1:
			state = "FIN_WAIT1"
		case windows.MIB_TCP_STATE_FIN_WAIT2:
			state = "FIN_WAIT2"
		case windows.MIB_TCP_STATE_CLOSE_WAIT:
			state = "CLOSE_WAIT"
		case windows.MIB_TCP_STATE_CLOSING:
			state = "CLOSING"
		case windows.MIB_TCP_STATE_LAST_ACK:
			state = "LAST_ACK"
		case windows.MIB_TCP_STATE_TIME_WAIT:
			state = "TIME_WAIT"
		case windows.MIB_TCP_STATE_DELETE_TCB:
			state = "DELETE_TCB"
		}

		localAddr := fmt.Sprintf("%d.%d.%d.%d",
			byte(entry.LocalAddr),
			byte(entry.LocalAddr>>8),
			byte(entry.LocalAddr>>16),
			byte(entry.LocalAddr>>24))

		conn := &types.NetworkConnection{
			PID:         int32(entry.OwningPid),
			Protocol:    "TCP",
			LocalAddr:   localAddr,
			LocalPort:   int(entry.LocalPort),
			RemoteAddr:  "",
			RemotePort:  int(entry.RemotePort),
			State:       state,
			ProcessName: getProcessNameByPID(int(entry.OwningPid)),
		}

		connections = append(connections, conn)

		offset += unsafe.Sizeof(entry)
	}

	udpTable, err := windows.GetExtendedUdpTable(nil, true, windows.AF_INET, windows.UDP_TABLE_OWNER_PID, 0)
	if err == nil {
		udpBuffer := make([]byte, udpTable.Size)
		udpTable, err = windows.GetExtendedUdpTable(&udpBuffer[0], true, windows.AF_INET, windows.UDP_TABLE_OWNER_PID, 0)
		if err == nil {
			offset = 0
			numUDP := int(udpTable.NumEntries)
			for i := 0; i < numUDP; i++ {
				entry := (*windows.MibUdpRowOwnerPID)(unsafe.Pointer(&udpBuffer[offset]))

				localAddr := fmt.Sprintf("%d.%d.%d.%d",
					byte(entry.LocalAddr),
					byte(entry.LocalAddr>>8),
					byte(entry.LocalAddr>>16),
					byte(entry.LocalAddr>>24))

				conn := &types.NetworkConnection{
					PID:         int32(entry.OwningPid),
					Protocol:    "UDP",
					LocalAddr:   localAddr,
					LocalPort:   int(entry.LocalPort),
					RemoteAddr:  "*",
					RemotePort:  0,
					State:       "LISTENING",
					ProcessName: getProcessNameByPID(int(entry.OwningPid)),
				}

				connections = append(connections, conn)
				offset += unsafe.Sizeof(entry)
			}
		}
	}

	return connections, nil
}

func getProcessNameByPID(pid int) string {
	hProcess, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION|windows.PROCESS_VM_READ, false, uint32(pid))
	if err != nil {
		return "unknown"
	}
	defer windows.CloseHandle(hProcess)

	var module windows.Handle
	err = windows.EnumProcessModules(hProcess, &module, unsafe.Sizeof(module), nil)
	if err != nil {
		return "unknown"
	}

	var name [windows.MAX_PATH]uint16
	err = windows.GetModuleBaseName(hProcess, module, &name[0], uint32(len(name)))
	if err != nil {
		return "unknown"
	}

	return windows.UTF16ToString(name[:])
}

func ListNetworkConnections() ([]NetConnection, error) {
	var connections []NetConnection

	table, err := windows.GetExtendedTcpTable(nil, true, windows.AF_INET, windows.TCP_TABLE_OWNER_PID_ALL, 0)
	if err != nil {
		return nil, err
	}

	buffer := make([]byte, table.Size)
	table, err = windows.GetExtendedTcpTable(&buffer[0], true, windows.AF_INET, windows.TCP_TABLE_OWNER_PID_ALL, 0)
	if err != nil {
		return nil, err
	}

	offset := 0
	numConnections := int(table.NumEntries)

	for i := 0; i < numConnections; i++ {
		entry := (*windows.MibTcpRowOwnerPID)(unsafe.Pointer(&buffer[offset]))

		state := "UNKNOWN"
		switch entry.State {
		case windows.MIB_TCP_STATE_ESTAB:
			state = "ESTABLISHED"
		case windows.MIB_TCP_STATE_LISTEN:
			state = "LISTEN"
		}

		localAddr := fmt.Sprintf("%d.%d.%d.%d",
			byte(entry.LocalAddr),
			byte(entry.LocalAddr>>8),
			byte(entry.LocalAddr>>16),
			byte(entry.LocalAddr>>24))

		connections = append(connections, NetConnection{
			PID:         int(entry.OwningPid),
			Protocol:    "TCP",
			LocalAddr:   localAddr,
			LocalPort:   int(entry.LocalPort),
			RemoteAddr:  "",
			RemotePort:  int(entry.RemotePort),
			State:       state,
			ProcessName: getProcessNameByPID(int(entry.OwningPid)),
		})

		offset += unsafe.Sizeof(entry)
	}

	return connections, nil
}

func GetTCPConnections() ([]NetConnection, error) {
	return ListNetworkConnections()
}

func GetUDPEndpoints() ([]NetConnection, error) {
	var endpoints []NetConnection

	udpTable, err := windows.GetExtendedUdpTable(nil, true, windows.AF_INET, windows.UDP_TABLE_OWNER_PID, 0)
	if err != nil {
		return nil, err
	}

	udpBuffer := make([]byte, udpTable.Size)
	udpTable, err = windows.GetExtendedUdpTable(&udpBuffer[0], true, windows.AF_INET, windows.UDP_TABLE_OWNER_PID, 0)
	if err != nil {
		return nil, err
	}

	offset := 0
	numUDP := int(udpTable.NumEntries)

	for i := 0; i < numUDP; i++ {
		entry := (*windows.MibUdpRowOwnerPID)(unsafe.Pointer(&udpBuffer[offset]))

		localAddr := fmt.Sprintf("%d.%d.%d.%d",
			byte(entry.LocalAddr),
			byte(entry.LocalAddr>>8),
			byte(entry.LocalAddr>>16),
			byte(entry.LocalAddr>>24))

		endpoints = append(endpoints, NetConnection{
			PID:         int(entry.OwningPid),
			Protocol:    "UDP",
			LocalAddr:   localAddr,
			LocalPort:   int(entry.LocalPort),
			RemoteAddr:  "*",
			RemotePort:  0,
			State:       "LISTENING",
			ProcessName: getProcessNameByPID(int(entry.OwningPid)),
		})
		offset += unsafe.Sizeof(entry)
	}

	return endpoints, nil
}

func ParseIPAddress(ip string) (string, error) {
	return ip, nil
}

func ResolveHostname(ip string) (string, error) {
	addr, err := net.LookupAddr(ip)
	if err != nil {
		return ip, err
	}
	if len(addr) > 0 {
		return addr[0], nil
	}
	return ip, nil
}
