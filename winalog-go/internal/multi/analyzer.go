package multi

import (
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type MultiMachineAnalyzer struct {
	db       *storage.DB
	machines map[string]*MachineContext
	mu       sync.RWMutex
}

type MachineContext struct {
	ID        string         `json:"id"`
	Name      string         `json:"name"`
	IP        string         `json:"ip"`
	Role      string         `json:"role"`
	Events    []*types.Event `json:"events"`
	FirstSeen time.Time      `json:"first_seen"`
	LastSeen  time.Time      `json:"last_seen"`
}

type LateralMovement struct {
	SourceMachine string         `json:"source_machine"`
	TargetMachine string         `json:"target_machine"`
	User          string         `json:"user"`
	Technique     string         `json:"technique"`
	Time          time.Time      `json:"time"`
	Evidence      []*types.Event `json:"evidence"`
}

type CrossMachineResult struct {
	Machine         *MachineContext    `json:"machine"`
	LateralMovement []*LateralMovement `json:"lateral_movement"`
	Statistics      *MachineStats      `json:"statistics"`
}

type MachineStats struct {
	TotalEvents      int64            `json:"total_events"`
	EventByLevel     map[string]int64 `json:"event_by_level"`
	TopEventIDs      map[int32]int64  `json:"top_event_ids"`
	LoginAttempts    int64            `json:"login_attempts"`
	FailedLogins     int64            `json:"failed_logins"`
	SuccessfulLogins int64            `json:"successful_logins"`
}

func NewMultiMachineAnalyzer(db *storage.DB) *MultiMachineAnalyzer {
	return &MultiMachineAnalyzer{
		db:       db,
		machines: make(map[string]*MachineContext),
	}
}

func (a *MultiMachineAnalyzer) AddMachine(ctx *MachineContext) {
	a.mu.Lock()
	defer a.mu.Unlock()
	a.machines[ctx.ID] = ctx
}

func (a *MultiMachineAnalyzer) GetMachine(id string) (*MachineContext, bool) {
	a.mu.RLock()
	defer a.mu.RUnlock()
	ctx, ok := a.machines[id]
	return ctx, ok
}

func (a *MultiMachineAnalyzer) ListMachines() []*MachineContext {
	a.mu.RLock()
	defer a.mu.RUnlock()

	result := make([]*MachineContext, 0, len(a.machines))
	for _, ctx := range a.machines {
		result = append(result, ctx)
	}
	return result
}

func (a *MultiMachineAnalyzer) Analyze() (*CrossMachineResult, error) {
	a.mu.Lock()
	defer a.mu.Unlock()

	result := &CrossMachineResult{
		LateralMovement: make([]*LateralMovement, 0),
		Statistics:      &MachineStats{},
	}

	for _, machine := range a.machines {
		if result.Machine == nil {
			result.Machine = machine
		}

		movements := a.detectLateralMovement(machine)
		result.LateralMovement = append(result.LateralMovement, movements...)

		stats := a.calculateStats(machine.Events)
		if result.Statistics.TotalEvents == 0 {
			result.Statistics = stats
		}
	}

	return result, nil
}

func (a *MultiMachineAnalyzer) detectLateralMovement(machine *MachineContext) []*LateralMovement {
	movements := make([]*LateralMovement, 0)

	var prevEvent *types.Event
	for _, event := range machine.Events {
		if event.EventID == 4624 {
			if prevEvent != nil && prevEvent.EventID == 4625 {
				movements = append(movements, &LateralMovement{
					SourceMachine: machine.Name,
					TargetMachine: machine.Name,
					User:          extractUser(event),
					Technique:     "Credential Dumping",
					Time:          event.Timestamp,
					Evidence:      []*types.Event{prevEvent, event},
				})
			}
		}
		prevEvent = event
	}

	return movements
}

func (a *MultiMachineAnalyzer) calculateStats(events []*types.Event) *MachineStats {
	stats := &MachineStats{
		EventByLevel: make(map[string]int64),
		TopEventIDs:  make(map[int32]int64),
	}

	for _, event := range events {
		stats.TotalEvents++
		stats.EventByLevel[event.Level.String()]++

		stats.TopEventIDs[event.EventID]++

		switch event.EventID {
		case 4624:
			stats.SuccessfulLogins++
			stats.LoginAttempts++
		case 4625:
			stats.FailedLogins++
			stats.LoginAttempts++
		}
	}

	return stats
}

func extractUser(event *types.Event) string {
	if event.User != nil {
		return *event.User
	}
	return "Unknown"
}

func (a *MultiMachineAnalyzer) DetectDC() []*MachineContext {
	a.mu.RLock()
	defer a.mu.RUnlock()

	var dcs []*MachineContext
	for _, machine := range a.machines {
		if machine.Role == "DC" {
			dcs = append(dcs, machine)
		}
	}
	return dcs
}

func (a *MultiMachineAnalyzer) DetectServers() []*MachineContext {
	a.mu.RLock()
	defer a.mu.RUnlock()

	var servers []*MachineContext
	for _, machine := range a.machines {
		if machine.Role == "Server" {
			servers = append(servers, machine)
		}
	}
	return servers
}

func (a *MultiMachineAnalyzer) DetectWorkstations() []*MachineContext {
	a.mu.RLock()
	defer a.mu.RUnlock()

	var workstations []*MachineContext
	for _, machine := range a.machines {
		if machine.Role == "Workstation" {
			workstations = append(workstations, machine)
		}
	}
	return workstations
}
