package reports

import (
	"fmt"
	"sort"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type Generator struct {
	db     *storage.DB
	stats  *SecurityStats
	config *GeneratorConfig
}

type GeneratorConfig struct {
	Title        string
	StartTime    time.Time
	EndTime      time.Time
	Format       ReportFormat
	IncludeRaw   bool
	IncludeIOC   bool
	IncludeMITRE bool
}

type ReportFormat string

const (
	FormatHTML ReportFormat = "html"
	FormatJSON ReportFormat = "json"
)

const (
	maxIOCIPs       = 100
	maxIOCUsers     = 100
	maxIOCComputers = 50
)

type ReportRequest struct {
	Title        string
	Format       ReportFormat
	StartTime    time.Time
	EndTime      time.Time
	IncludeRaw   bool
	IncludeIOC   bool
	IncludeMITRE bool
}

type Report struct {
	GeneratedAt time.Time      `json:"generated_at"`
	Title       string         `json:"title"`
	TimeRange   TimeRange      `json:"time_range"`
	Summary     ReportSummary  `json:"summary"`
	Stats       *SecurityStats `json:"stats,omitempty"`
	TopAlerts   []*types.Alert `json:"top_alerts,omitempty"`
	TopEvents   []*types.Event `json:"top_events,omitempty"`
	EventDist   *EventDist     `json:"event_distribution,omitempty"`
	LoginStats  *LoginStats    `json:"login_stats,omitempty"`
	IOCs        *IOCSummary    `json:"iocs,omitempty"`
	MITREDist   *MITREDist     `json:"mitre_distribution,omitempty"`
	RawEvents   []*types.Event `json:"raw_events,omitempty"`
}

type TimeRange struct {
	Start time.Time `json:"start"`
	End   time.Time `json:"end"`
}

type ReportSummary struct {
	TotalEvents    int64    `json:"total_events"`
	TotalAlerts    int64    `json:"total_alerts"`
	CriticalEvents int64    `json:"critical_events"`
	HighAlerts     int64    `json:"high_alerts"`
	TimeRangeDays  float64  `json:"time_range_days"`
	Computers      []string `json:"computers"`
}

type EventDist struct {
	ByLevel     map[string]int64 `json:"by_level"`
	ByLogName   map[string]int64 `json:"by_log_name"`
	BySource    map[string]int64 `json:"by_source"`
	TopEventIDs []EventIDCount   `json:"top_event_ids"`
}

type EventIDCount struct {
	EventID int32 `json:"event_id"`
	Count   int64 `json:"count"`
}

type LoginStats struct {
	Successful int64 `json:"successful"`
	Failed     int64 `json:"failed"`
	Total      int64 `json:"total"`
}

type IOCSummary struct {
	IPAddresses []string `json:"ip_addresses"`
	Users       []string `json:"users"`
	Computers   []string `json:"computers"`
	FilePaths   []string `json:"file_paths"`
}

type MITREDist struct {
	ByTactic    map[string]int64 `json:"by_tactic"`
	ByTechnique map[string]int64 `json:"by_technique"`
}

func NewGenerator(db *storage.DB) *Generator {
	return &Generator{
		db:     db,
		config: &GeneratorConfig{},
	}
}

func (g *Generator) Generate(req *ReportRequest) (*Report, error) {
	report := &Report{
		GeneratedAt: time.Now(),
		Title:       req.Title,
		TimeRange: TimeRange{
			Start: req.StartTime,
			End:   req.EndTime,
		},
	}

	stats, err := g.calculateSecurityStats(req)
	if err != nil {
		return nil, fmt.Errorf("failed to calculate security stats: %w", err)
	}
	report.Stats = stats

	summary, err := g.calculateSummary(req)
	if err != nil {
		return nil, fmt.Errorf("failed to calculate summary: %w", err)
	}
	report.Summary = summary

	if req.IncludeIOC {
		iocs, err := g.extractIOCs(req)
		if err != nil {
			return nil, fmt.Errorf("failed to extract IOCs: %w", err)
		}
		report.IOCs = iocs
	}

	if req.IncludeMITRE {
		mitre, err := g.calculateMITREDistribution(req)
		if err != nil {
			return nil, fmt.Errorf("failed to calculate MITRE distribution: %w", err)
		}
		report.MITREDist = mitre
	}

	alerts, err := g.getTopAlerts(req)
	if err != nil {
		return nil, fmt.Errorf("failed to get top alerts: %w", err)
	}
	report.TopAlerts = alerts

	if req.IncludeRaw {
		events, err := g.getTopEvents(req)
		if err != nil {
			return nil, fmt.Errorf("failed to get top events: %w", err)
		}
		report.RawEvents = events
	}

	return report, nil
}

func (g *Generator) calculateSummary(req *ReportRequest) (ReportSummary, error) {
	summary := ReportSummary{}

	stats, err := g.db.GetStats()
	if err != nil {
		return summary, err
	}
	summary.TotalEvents = stats.EventCount
	summary.TotalAlerts = stats.AlertCount

	alertStats, err := g.db.AlertRepo().GetStats()
	if err == nil {
		summary.CriticalEvents = alertStats.BySeverity["critical"]
		summary.HighAlerts = alertStats.BySeverity["high"]
	}

	if !req.StartTime.IsZero() && !req.EndTime.IsZero() {
		summary.TimeRangeDays = req.EndTime.Sub(req.StartTime).Hours() / 24
	}

	computers, err := g.getUniqueComputers()
	if err == nil {
		summary.Computers = computers
	}

	return summary, nil
}

func (g *Generator) calculateSecurityStats(req *ReportRequest) (*SecurityStats, error) {
	stats := &SecurityStats{
		GeneratedAt: time.Now(),
	}

	eventFilter := &storage.EventFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     100000,
	}

	events, _, err := g.db.ListEvents(eventFilter)
	if err != nil {
		return stats, err
	}

	stats.TotalEvents = int64(len(events))

	for _, event := range events {
		stats.EventDistribution.ByLevel[event.Level.String()]++
		stats.EventDistribution.ByLogName[event.LogName]++
		stats.EventDistribution.BySource[event.Source]++

		stats.LevelDistribution = append(stats.LevelDistribution, &types.LevelDistribution{
			Level: event.Level,
			Count: int64(stats.EventDistribution.ByLevel[event.Level.String()]),
		})
	}

	alertFilter := &storage.AlertFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     1000,
	}
	alerts, err := g.db.AlertRepo().Query(alertFilter)
	if err == nil {
		stats.TotalAlerts = int64(len(alerts))
		for _, alert := range alerts {
			severity := string(alert.Severity)
			stats.AlertDistribution.BySeverity[severity]++
		}
	}

	stats.TopEventIDs = g.calculateTopEventIDs(events, 20)

	stats.LoginStats = g.calculateLoginStats(events)

	return stats, nil
}

func (g *Generator) calculateTopEventIDs(events []*types.Event, limit int) []EventIDCount {
	eventCounts := make(map[int32]int64)
	for _, event := range events {
		eventCounts[event.EventID]++
	}

	type pair struct {
		eventID int32
		count   int64
	}
	var pairs []pair
	for id, count := range eventCounts {
		pairs = append(pairs, pair{eventID: id, count: count})
	}

	sort.Slice(pairs, func(i, j int) bool {
		return pairs[i].count > pairs[j].count
	})

	var result []EventIDCount
	for i := 0; i < limit && i < len(pairs); i++ {
		result = append(result, EventIDCount{
			EventID: pairs[i].eventID,
			Count:   pairs[i].count,
		})
	}
	return result
}

func (g *Generator) calculateLoginStats(events []*types.Event) *LoginStats {
	stats := &LoginStats{}

	loginEventIDs := map[int32]bool{
		4624: true, 4625: true,
		4634: true, 4647: true,
		4672: true, 4673: true,
	}

	for _, event := range events {
		if loginEventIDs[event.EventID] {
			stats.Total++
			if event.EventID == 4624 {
				stats.Successful++
			} else if event.EventID == 4625 {
				stats.Failed++
			}
		}
	}

	return stats
}

func (g *Generator) extractIOCs(req *ReportRequest) (*IOCSummary, error) {
	iocs := &IOCSummary{}

	eventFilter := &storage.EventFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     100000,
	}

	events, _, err := g.db.ListEvents(eventFilter)
	if err != nil {
		return iocs, err
	}

	ipSet := make(map[string]bool)
	userSet := make(map[string]bool)
	computerSet := make(map[string]bool)

	for _, event := range events {
		if event.IPAddress != nil && *event.IPAddress != "" {
			ipSet[*event.IPAddress] = true
		}
		if event.User != nil && *event.User != "" {
			userSet[*event.User] = true
		}
		if event.Computer != "" {
			computerSet[event.Computer] = true
		}
	}

	for ip := range ipSet {
		if len(iocs.IPAddresses) < maxIOCIPs {
			iocs.IPAddresses = append(iocs.IPAddresses, ip)
		}
	}
	for user := range userSet {
		if len(iocs.Users) < maxIOCUsers {
			iocs.Users = append(iocs.Users, user)
		}
	}
	for computer := range computerSet {
		if len(iocs.Computers) < maxIOCComputers {
			iocs.Computers = append(iocs.Computers, computer)
		}
	}

	return iocs, nil
}

func (g *Generator) calculateMITREDistribution(req *ReportRequest) (*MITREDist, error) {
	dist := &MITREDist{
		ByTactic:    make(map[string]int64),
		ByTechnique: make(map[string]int64),
	}

	alertFilter := &storage.AlertFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     1000,
	}
	alerts, err := g.db.AlertRepo().Query(alertFilter)
	if err != nil {
		return dist, err
	}

	for _, alert := range alerts {
		for _, mitre := range alert.MITREAttack {
			dist.ByTechnique[mitre]++
			tactic := extractTactic(mitre)
			dist.ByTactic[tactic]++
		}
	}

	return dist, nil
}

func extractTactic(mitreID string) string {
	if len(mitreID) < 4 {
		return "Unknown"
	}
	return mitreID[:4]
}

func (g *Generator) getTopAlerts(req *ReportRequest) ([]*types.Alert, error) {
	alertFilter := &storage.AlertFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     50,
	}
	alerts, err := g.db.AlertRepo().Query(alertFilter)
	if err != nil {
		return nil, err
	}
	return alerts, nil
}

func (g *Generator) getTopEvents(req *ReportRequest) ([]*types.Event, error) {
	eventFilter := &storage.EventFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     1000,
	}
	events, _, err := g.db.ListEvents(eventFilter)
	if err != nil {
		return nil, err
	}
	return events, nil
}

func (g *Generator) getUniqueComputers() ([]string, error) {
	query := "SELECT DISTINCT computer FROM events WHERE computer IS NOT NULL LIMIT 100"
	rows, err := g.db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var computers []string
	for rows.Next() {
		var computer string
		if err := rows.Scan(&computer); err == nil && computer != "" {
			computers = append(computers, computer)
		}
	}
	return computers, nil
}

func (g *Generator) SetConfig(config *GeneratorConfig) {
	g.config = config
}
