//go:build windows

package wmi

import (
	"context"
	"fmt"
	"log"
	"strings"
	"sync"
	"time"

	"github.com/StackExchange/wmi"
	"github.com/kkkdddd-start/winalog-go/internal/monitor/types"
)

type ProcessWatcher struct {
	ctx         context.Context
	cancel      context.CancelFunc
	events      chan *types.MonitorEvent
	subscribers []chan *types.MonitorEvent
	subMu       sync.RWMutex
	running     bool
	mu          sync.RWMutex
}

type Win32_Process struct {
	Name            string
	ProcessID       uint32
	ParentProcessID uint32
	ExecutablePath  string
	CommandLine     string
}

func NewProcessWatcher() (*ProcessWatcher, error) {
	ctx, cancel := context.WithCancel(context.Background())
	return &ProcessWatcher{
		ctx:         ctx,
		cancel:      cancel,
		events:      make(chan *types.MonitorEvent, 100),
		subscribers: make([]chan *types.MonitorEvent, 0),
		running:     false,
	}, nil
}

func (pw *ProcessWatcher) Start() error {
	pw.mu.Lock()
	if pw.running {
		pw.mu.Unlock()
		return nil
	}
	pw.running = true
	pw.mu.Unlock()

	go pw.run()
	return nil
}

func (pw *ProcessWatcher) Stop() error {
	pw.mu.Lock()
	defer pw.mu.Unlock()

	if !pw.running {
		return nil
	}

	pw.cancel()
	pw.running = false

	pw.subMu.Lock()
	for _, ch := range pw.subscribers {
		close(ch)
	}
	pw.subscribers = make([]chan *types.MonitorEvent, 0)
	pw.subMu.Unlock()

	return nil
}

func (pw *ProcessWatcher) Subscribe(ch chan *types.MonitorEvent) func() {
	pw.subMu.Lock()
	defer pw.subMu.Unlock()
	pw.subscribers = append(pw.subscribers, ch)
	return func() {
		pw.subMu.Lock()
		defer pw.subMu.Unlock()
		for i, c := range pw.subscribers {
			if c == ch {
				pw.subscribers = append(pw.subscribers[:i], pw.subscribers[i+1:]...)
				break
			}
		}
	}
}

func (pw *ProcessWatcher) run() {
	ticker := time.NewTicker(1 * time.Second)
	defer ticker.Stop()

	var lastProcesses = make(map[uint32]string)
	isFirstRun := true

	for {
		select {
		case <-pw.ctx.Done():
			return
		case <-ticker.C:
			pw.checkNewProcesses(lastProcesses, isFirstRun)
			isFirstRun = false
		}
	}
}

func (pw *ProcessWatcher) checkNewProcesses(lastProcs map[uint32]string, isFirstRun bool) {
	var processes []Win32_Process
	err := wmi.Query("SELECT Name, ProcessID, ParentProcessID, ExecutablePath FROM Win32_Process", &processes)
	if err != nil {
		log.Printf("[PROCESS] WMI query failed: %v", err)
		return
	}

	log.Printf("[PROCESS] WMI query returned %d processes (first_run=%v)", len(processes), isFirstRun)

	currentProcs := make(map[uint32]string)
	for _, p := range processes {
		currentProcs[p.ProcessID] = p.Name
	}

	for pid, name := range currentProcs {
		_, exists := lastProcs[pid]
		if isFirstRun || !exists {
			event := pw.createProcessEvent(pid, name, !isFirstRun && !exists)
			if event != nil {
				pw.publishEvent(event)
			}
		}
	}
}

func (pw *ProcessWatcher) createProcessEvent(pid uint32, name string, isNew bool) *types.MonitorEvent {
	var processes []Win32_Process
	query := fmt.Sprintf("WHERE ProcessID = %d", pid)
	err := wmi.Query(query, &processes)
	if err != nil || len(processes) == 0 {
		return nil
	}

	p := processes[0]

	severity := types.SeverityInfo
	for _, indicator := range types.SuspiciousProcessIndicators {
		if strings.Contains(strings.ToLower(p.ExecutablePath), strings.ToLower(indicator)) ||
			strings.Contains(strings.ToLower(p.CommandLine), strings.ToLower(indicator)) {
			severity = types.SeverityMedium
			break
		}
	}

	eventData := types.ProcessEventData{
		PID:         p.ProcessID,
		PPID:        p.ParentProcessID,
		ProcessName: p.Name,
		Path:        p.ExecutablePath,
		CommandLine: p.CommandLine,
		User:        getProcessUser(p.ProcessID),
	}

	data := make(map[string]interface{})
	data["pid"] = eventData.PID
	data["ppid"] = eventData.PPID
	data["process_name"] = eventData.ProcessName
	data["path"] = eventData.Path
	data["command_line"] = eventData.CommandLine
	data["user"] = eventData.User
	data["is_new"] = isNew

	return &types.MonitorEvent{
		ID:        fmt.Sprintf("proc-%d-%d", p.ProcessID, time.Now().UnixNano()),
		Type:      types.EventTypeProcess,
		Timestamp: time.Now(),
		Severity:  severity,
		Data:      data,
	}
}

func (pw *ProcessWatcher) publishEvent(event *types.MonitorEvent) {
	pw.subMu.RLock()
	defer pw.subMu.RUnlock()

	for _, ch := range pw.subscribers {
		select {
		case ch <- event:
		default:
		}
	}
}

func getProcessUser(pid uint32) string {
	return "SYSTEM"
}
