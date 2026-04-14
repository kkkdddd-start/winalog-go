package timeline

import (
	"fmt"
	"sort"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type TimelineBuilder struct {
	events       []*types.Event
	filter       *TimelineFilter
	attackChains []*AttackChain
	categories   map[string][]*types.Event
}

type TimelineFilter struct {
	StartTime  time.Time
	EndTime    time.Time
	EventIDs   map[int32]bool
	Levels     map[types.EventLevel]bool
	LogNames   map[string]bool
	Sources    map[string]bool
	Computers  map[string]bool
	Users      map[string]bool
	Keywords   string
	MITREIDs   []string
	IncludeRaw bool
}

type TimelineEntry struct {
	ID          int64     `json:"id"`
	Timestamp   time.Time `json:"timestamp"`
	EventID     int32     `json:"event_id"`
	Level       string    `json:"level"`
	Category    string    `json:"category"`
	Source      string    `json:"source"`
	LogName     string    `json:"log_name"`
	Computer    string    `json:"computer"`
	User        string    `json:"user,omitempty"`
	Message     string    `json:"message"`
	MITREAttack []string  `json:"mitre_attack,omitempty"`
	AttackChain string    `json:"attack_chain,omitempty"`
	RawXML      string    `json:"raw_xml,omitempty"`
}

type Timeline struct {
	Entries    []*TimelineEntry `json:"entries"`
	TotalCount int              `json:"total_count"`
	StartTime  time.Time        `json:"start_time"`
	EndTime    time.Time        `json:"end_time"`
	Duration   time.Duration    `json:"duration"`
}

type AttackChain struct {
	ID          string         `json:"id"`
	Name        string         `json:"name"`
	Description string         `json:"description"`
	Technique   string         `json:"technique"`
	Tactic      string         `json:"tactic"`
	Severity    string         `json:"severity"`
	Events      []*types.Event `json:"events"`
	StartTime   time.Time      `json:"start_time"`
	EndTime     time.Time      `json:"end_time"`
	Duration    time.Duration  `json:"duration"`
}

type Category string

const (
	CategoryAuthentication Category = "Authentication"
	CategoryAuthorization  Category = "Authorization"
	CategoryProcess        Category = "Process"
	CategoryNetwork        Category = "Network"
	CategoryFile           Category = "File"
	CategoryRegistry       Category = "Registry"
	CategoryScheduledTask  Category = "Scheduled Task"
	CategoryService        Category = "Service"
	CategoryPowerShell     Category = "PowerShell"
	CategoryRemoteAccess   Category = "Remote Access"
	CategoryAccount        Category = "Account"
	CategoryUnknown        Category = "Unknown"
)

func NewTimelineBuilder() *TimelineBuilder {
	return &TimelineBuilder{
		events:       make([]*types.Event, 0),
		filter:       &TimelineFilter{},
		attackChains: make([]*AttackChain, 0),
		categories:   make(map[string][]*types.Event),
	}
}

func (b *TimelineBuilder) SetEvents(events []*types.Event) {
	b.events = events
}

func (b *TimelineBuilder) SetFilter(filter *TimelineFilter) {
	b.filter = filter
}

func (b *TimelineBuilder) Build() (*Timeline, error) {
	entries := make([]*TimelineEntry, 0)

	for _, event := range b.events {
		if !b.matchesFilter(event) {
			continue
		}

		entry := &TimelineEntry{
			ID:        event.ID,
			Timestamp: event.Timestamp,
			EventID:   event.EventID,
			Level:     event.Level.String(),
			Category:  b.categorizeEvent(event),
			Source:    event.Source,
			LogName:   event.LogName,
			Computer:  event.Computer,
			Message:   event.Message,
		}

		if event.User != nil {
			entry.User = *event.User
		}
		if event.RawXML != nil && b.filter.IncludeRaw {
			entry.RawXML = *event.RawXML
		}

		entries = append(entries, entry)
	}

	sort.Slice(entries, func(i, j int) bool {
		return entries[i].Timestamp.Before(entries[j].Timestamp)
	})

	timeline := &Timeline{
		Entries:    entries,
		TotalCount: len(entries),
	}

	if len(entries) > 0 {
		timeline.StartTime = entries[0].Timestamp
		timeline.EndTime = entries[len(entries)-1].Timestamp
		timeline.Duration = timeline.EndTime.Sub(timeline.StartTime)
	}

	b.linkAttackChains(timeline)

	return timeline, nil
}

func (b *TimelineBuilder) matchesFilter(event *types.Event) bool {
	if !b.filter.StartTime.IsZero() && event.Timestamp.Before(b.filter.StartTime) {
		return false
	}
	if !b.filter.EndTime.IsZero() && event.Timestamp.After(b.filter.EndTime) {
		return false
	}

	if len(b.filter.EventIDs) > 0 {
		if !b.filter.EventIDs[event.EventID] {
			return false
		}
	}

	if len(b.filter.Levels) > 0 {
		if !b.filter.Levels[event.Level] {
			return false
		}
	}

	if len(b.filter.LogNames) > 0 {
		if !b.filter.LogNames[event.LogName] {
			return false
		}
	}

	if len(b.filter.Computers) > 0 {
		if !b.filter.Computers[event.Computer] {
			return false
		}
	}

	return true
}

func (b *TimelineBuilder) categorizeEvent(event *types.Event) string {
	switch {
	case isAuthEvent(event.EventID):
		return string(CategoryAuthentication)
	case isAuthzEvent(event.EventID):
		return string(CategoryAuthorization)
	case isProcessEvent(event.EventID):
		return string(CategoryProcess)
	case isNetworkEvent(event.EventID):
		return string(CategoryNetwork)
	case isFileEvent(event.EventID):
		return string(CategoryFile)
	case isRegistryEvent(event.EventID):
		return string(CategoryRegistry)
	case isScheduledTaskEvent(event.EventID):
		return string(CategoryScheduledTask)
	case isServiceEvent(event.EventID):
		return string(CategoryService)
	case isPowerShellEvent(event.EventID):
		return string(CategoryPowerShell)
	case isRemoteAccessEvent(event.EventID):
		return string(CategoryRemoteAccess)
	case isAccountEvent(event.EventID):
		return string(CategoryAccount)
	default:
		return string(CategoryUnknown)
	}
}

func isAuthEvent(eventID int32) bool {
	authEvents := map[int32]bool{
		4624: true, 4625: true, 4634: true, 4647: true,
		4648: true, 4670: true, 4768: true, 4769: true,
		4776: true,
	}
	return authEvents[eventID]
}

func isAuthzEvent(eventID int32) bool {
	authzEvents := map[int32]bool{
		4672: true, 4673: true, 4674: true, 4702: true,
	}
	return authzEvents[eventID]
}

func isProcessEvent(eventID int32) bool {
	processEvents := map[int32]bool{
		4688: true, 4689: true, 4696: true, 4697: true,
		4698: true, 4699: true, 4700: true, 4701: true,
	}
	return processEvents[eventID]
}

func isNetworkEvent(eventID int32) bool {
	networkEvents := map[int32]bool{
		3: true, 4000: true, 4001: true, 4002: true,
		5156: true, 5157: true, 5158: true, 5159: true,
	}
	return networkEvents[eventID]
}

func isFileEvent(eventID int32) bool {
	fileEvents := map[int32]bool{
		4656: true, 4657: true, 4658: true, 4660: true,
		4663: true, 4664: true, 4670: true,
	}
	return fileEvents[eventID]
}

func isRegistryEvent(eventID int32) bool {
	registryEvents := map[int32]bool{
		4657: true, 4660: true,
	}
	return registryEvents[eventID]
}

func isScheduledTaskEvent(eventID int32) bool {
	taskEvents := map[int32]bool{
		4698: true, 4699: true, 4700: true, 4701: true,
		4702: true,
	}
	return taskEvents[eventID]
}

func isServiceEvent(eventID int32) bool {
	serviceEvents := map[int32]bool{
		4697: true, 4698: true, 4699: true,
		7000: true, 7001: true, 7002: true, 7009: true,
	}
	return serviceEvents[eventID]
}

func isPowerShellEvent(eventID int32) bool {
	powershellEvents := map[int32]bool{
		400: true, 600: true, 800: true,
		4100: true, 4103: true, 4104: true,
	}
	return powershellEvents[eventID]
}

func isRemoteAccessEvent(eventID int32) bool {
	remoteEvents := map[int32]bool{
		4624: true, 4625: true, 4648: true, 4672: true,
	}
	return remoteEvents[eventID]
}

func isAccountEvent(eventID int32) bool {
	accountEvents := map[int32]bool{
		4720: true, 4721: true, 4722: true, 4723: true,
		4724: true, 4725: true, 4726: true, 4738: true,
		4740: true, 4767: true, 4768: true, 4769: true,
	}
	return accountEvents[eventID]
}

func (b *TimelineBuilder) linkAttackChains(timeline *Timeline) {
	chains := b.detectAttackChains(b.events)

	for i, chain := range chains {
		chainID := fmt.Sprintf("chain-%d", i+1)
		for _, event := range chain.Events {
			for _, entry := range timeline.Entries {
				if entry.ID == event.ID {
					entry.AttackChain = chainID
					entry.MITREAttack = []string{chain.Technique}
					break
				}
			}
		}
	}
}

func (b *TimelineBuilder) detectAttackChains(events []*types.Event) []*AttackChain {
	chains := make([]*AttackChain, 0)

	bruteForce := b.detectBruteForce(events)
	if len(bruteForce) > 0 {
		chains = append(chains, bruteForce...)
	}

	lateralMovement := b.detectLateralMovement(events)
	if len(lateralMovement) > 0 {
		chains = append(chains, lateralMovement...)
	}

	persistence := b.detectPersistence(events)
	if len(persistence) > 0 {
		chains = append(chains, persistence...)
	}

	return chains
}

func (b *TimelineBuilder) detectBruteForce(events []*types.Event) []*AttackChain {
	chains := make([]*AttackChain, 0)

	var failedLogins []*types.Event
	var successfulLogins []*types.Event

	for _, event := range events {
		if event.EventID == 4625 {
			failedLogins = append(failedLogins, event)
		} else if event.EventID == 4624 {
			successfulLogins = append(successfulLogins, event)
		}
	}

	if len(failedLogins) >= 10 {
		chains = append(chains, &AttackChain{
			ID:          "brute-force-detected",
			Name:        "Brute Force Attack Detected",
			Description: fmt.Sprintf("Detected %d failed login attempts", len(failedLogins)),
			Technique:   "T1110",
			Tactic:      "Credential Access",
			Severity:    "high",
			Events:      failedLogins,
			StartTime:   failedLogins[0].Timestamp,
			EndTime:     failedLogins[len(failedLogins)-1].Timestamp,
		})
	}

	return chains
}

func (b *TimelineBuilder) detectLateralMovement(events []*types.Event) []*AttackChain {
	chains := make([]*AttackChain, 0)

	var remoteLogins []*types.Event

	for _, event := range events {
		if event.EventID == 4624 || event.EventID == 4648 {
			if event.User != nil && *event.User != "" {
				remoteLogins = append(remoteLogins, event)
			}
		}
	}

	if len(remoteLogins) >= 3 {
		chains = append(chains, &AttackChain{
			ID:          "lateral-movement-detected",
			Name:        "Lateral Movement Detected",
			Description: fmt.Sprintf("Detected %d remote login events", len(remoteLogins)),
			Technique:   "T1021",
			Tactic:      "Lateral Movement",
			Severity:    "high",
			Events:      remoteLogins,
			StartTime:   remoteLogins[0].Timestamp,
			EndTime:     remoteLogins[len(remoteLogins)-1].Timestamp,
		})
	}

	return chains
}

func (b *TimelineBuilder) detectPersistence(events []*types.Event) []*AttackChain {
	chains := make([]*AttackChain, 0)

	var persistenceEvents []*types.Event

	for _, event := range events {
		if event.EventID == 4698 || event.EventID == 4702 {
			persistenceEvents = append(persistenceEvents, event)
		}
	}

	if len(persistenceEvents) > 0 {
		chains = append(chains, &AttackChain{
			ID:          "persistence-detected",
			Name:        "Persistence Mechanism Detected",
			Description: fmt.Sprintf("Detected %d scheduled task/Service creation events", len(persistenceEvents)),
			Technique:   "T1053",
			Tactic:      "Persistence",
			Severity:    "medium",
			Events:      persistenceEvents,
			StartTime:   persistenceEvents[0].Timestamp,
			EndTime:     persistenceEvents[len(persistenceEvents)-1].Timestamp,
		})
	}

	return chains
}

func (b *TimelineBuilder) GroupByComputer() map[string]*Timeline {
	result := make(map[string]*Timeline)

	for _, event := range b.events {
		if !b.matchesFilter(event) {
			continue
		}

		computer := event.Computer
		if computer == "" {
			computer = "Unknown"
		}

		if _, exists := b.categories[computer]; !exists {
			b.categories[computer] = make([]*types.Event, 0)
		}
		b.categories[computer] = append(b.categories[computer], event)
	}

	for computer, events := range b.categories {
		builder := NewTimelineBuilder()
		builder.SetEvents(events)
		builder.SetFilter(b.filter)
		timeline, _ := builder.Build()
		result[computer] = timeline
	}

	return result
}

func (b *TimelineBuilder) GroupByCategory() map[string]*Timeline {
	result := make(map[string]*Timeline)

	for _, event := range b.events {
		if !b.matchesFilter(event) {
			continue
		}

		category := b.categorizeEvent(event)

		if _, exists := b.categories[category]; !exists {
			b.categories[category] = make([]*types.Event, 0)
		}
		b.categories[category] = append(b.categories[category], event)
	}

	for category, events := range b.categories {
		builder := NewTimelineBuilder()
		builder.SetEvents(events)
		builder.SetFilter(b.filter)
		timeline, _ := builder.Build()
		result[category] = timeline
	}

	return result
}

func (b *TimelineBuilder) GetAttackChains() []*AttackChain {
	chains := b.detectAttackChains(b.events)
	for i, chain := range chains {
		chain.Duration = chain.EndTime.Sub(chain.StartTime)
		if chain.Duration == 0 {
			chain.Duration = time.Second
		}
		chains[i] = chain
	}
	return chains
}
