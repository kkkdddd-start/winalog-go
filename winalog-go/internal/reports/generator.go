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
	GeneratedAt      time.Time         `json:"generated_at"`
	Title            string            `json:"title"`
	TimeRange        TimeRange         `json:"time_range"`
	Summary          ReportSummary     `json:"summary"`
	Stats            *SecurityStats    `json:"stats,omitempty"`
	TopAlerts        []*types.Alert    `json:"top_alerts,omitempty"`
	TopEvents        []*types.Event    `json:"top_events,omitempty"`
	EventDist        *EventDist        `json:"event_distribution,omitempty"`
	LoginStats       *LoginStats       `json:"login_stats,omitempty"`
	IOCs             *IOCSummary       `json:"iocs,omitempty"`
	MITREDist        *MITREDist        `json:"mitre_distribution,omitempty"`
	RawEvents        []*types.Event    `json:"raw_events,omitempty"`
	ExecutiveSummary *ExecutiveSummary `json:"executive_summary,omitempty"`
	TimelineAnalysis *TimelineAnalysis `json:"timeline_analysis,omitempty"`
	ThreatLandscape  *ThreatLandscape  `json:"threat_landscape,omitempty"`
	Recommendations  []Recommendation  `json:"recommendations,omitempty"`
	AttackPatterns   []*AttackPattern  `json:"attack_patterns,omitempty"`
	ComplianceStatus *ComplianceStatus `json:"compliance_status,omitempty"`
}

type ExecutiveSummary struct {
	RiskScore        float64  `json:"risk_score"`
	RiskLevel        string   `json:"risk_level"`
	TotalAlerts      int64    `json:"total_alerts"`
	ResolvedAlerts   int64    `json:"resolved_alerts"`
	UnresolvedAlerts int64    `json:"unresolved_alerts"`
	TopThreat        string   `json:"top_threat"`
	KeyFindings      []string `json:"key_findings"`
	ActionItems      int      `json:"action_items"`
}

type TimelineAnalysis struct {
	EventsByHour     map[int]int64    `json:"events_by_hour"`
	EventsByDay      map[string]int64 `json:"events_by_day"`
	AlertsByHour     map[int]int64    `json:"alerts_by_hour"`
	AlertsByDay      map[string]int64 `json:"alerts_by_day"`
	PeakActivityHour int              `json:"peak_activity_hour"`
	PeakActivityDay  string           `json:"peak_activity_day"`
}

type ThreatLandscape struct {
	CriticalThreats  int64          `json:"critical_threats"`
	HighThreats      int64          `json:"high_threats"`
	MediumThreats    int64          `json:"medium_threats"`
	LowThreats       int64          `json:"low_threats"`
	TopAttackVectors []AttackVector `json:"top_attack_vectors"`
	AffectedSystems  []string       `json:"affected_systems"`
}

type AttackVector struct {
	Name       string  `json:"name"`
	Count      int64   `json:"count"`
	Percentage float64 `json:"percentage"`
}

type AttackPattern struct {
	Name          string   `json:"name"`
	TechniqueID   string   `json:"technique_id"`
	Count         int64    `json:"count"`
	Severity      string   `json:"severity"`
	Indicators    []string `json:"indicators"`
	AffectedHosts []string `json:"affected_hosts"`
}

type Recommendation struct {
	Priority    string `json:"priority"`
	Category    string `json:"category"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Actionable  string `json:"actionable"`
}

type ComplianceStatus struct {
	PassedChecks  []string `json:"passed_checks"`
	FailedChecks  []string `json:"failed_checks"`
	Warnings      []string `json:"warnings"`
	OverallStatus string   `json:"overall_status"`
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

	if execSummary, err := g.generateExecutiveSummary(req); err == nil {
		report.ExecutiveSummary = execSummary
	}

	if timeline, err := g.generateTimelineAnalysis(req); err == nil {
		report.TimelineAnalysis = timeline
	}

	if threat, err := g.generateThreatLandscape(req); err == nil {
		report.ThreatLandscape = threat
	}

	if recs, err := g.generateRecommendations(req); err == nil {
		report.Recommendations = recs
	}

	if patterns, err := g.generateAttackPatterns(req); err == nil {
		report.AttackPatterns = patterns
	}

	if compliance, err := g.generateComplianceStatus(req); err == nil {
		report.ComplianceStatus = compliance
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
	stats := NewSecurityStats()
	stats.GeneratedAt = time.Now()

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

func (g *Generator) generateExecutiveSummary(req *ReportRequest) (*ExecutiveSummary, error) {
	summary := &ExecutiveSummary{}

	alertFilter := &storage.AlertFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     10000,
	}
	alerts, err := g.db.AlertRepo().Query(alertFilter)
	if err != nil {
		return summary, err
	}

	summary.TotalAlerts = int64(len(alerts))
	for _, alert := range alerts {
		if alert.Resolved {
			summary.ResolvedAlerts++
		} else {
			summary.UnresolvedAlerts++
		}
	}

	if summary.TotalAlerts > 0 {
		summary.RiskScore = float64(summary.UnresolvedAlerts) / float64(summary.TotalAlerts) * 100
	}

	if summary.RiskScore >= 75 {
		summary.RiskLevel = "Critical"
	} else if summary.RiskScore >= 50 {
		summary.RiskLevel = "High"
	} else if summary.RiskScore >= 25 {
		summary.RiskLevel = "Medium"
	} else {
		summary.RiskLevel = "Low"
	}

	alertStats, _ := g.db.AlertRepo().GetStats()
	if alertStats != nil {
		if critical, ok := alertStats.BySeverity["critical"]; ok && critical > 0 {
			summary.TopThreat = "Critical severity alerts detected"
			summary.KeyFindings = append(summary.KeyFindings, fmt.Sprintf("%d critical alerts require immediate attention", critical))
		}
		if high, ok := alertStats.BySeverity["high"]; ok && high > 0 {
			summary.KeyFindings = append(summary.KeyFindings, fmt.Sprintf("%d high severity alerts detected", high))
		}
	}

	summary.ActionItems = int(summary.UnresolvedAlerts)

	return summary, nil
}

func (g *Generator) generateTimelineAnalysis(req *ReportRequest) (*TimelineAnalysis, error) {
	analysis := &TimelineAnalysis{
		EventsByHour: make(map[int]int64),
		EventsByDay:  make(map[string]int64),
		AlertsByHour: make(map[int]int64),
		AlertsByDay:  make(map[string]int64),
	}

	eventFilter := &storage.EventFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     100000,
	}
	events, _, err := g.db.ListEvents(eventFilter)
	if err != nil {
		return analysis, err
	}

	var maxEventCount int64
	var peakHour int

	for _, event := range events {
		hour := event.Timestamp.Hour()
		day := event.Timestamp.Format("2006-01-02")

		analysis.EventsByHour[hour]++
		analysis.EventsByDay[day]++

		if analysis.EventsByHour[hour] > maxEventCount {
			maxEventCount = analysis.EventsByHour[hour]
			peakHour = hour
		}
	}

	analysis.PeakActivityHour = peakHour

	alertFilter := &storage.AlertFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     10000,
	}
	alerts, err := g.db.AlertRepo().Query(alertFilter)
	if err == nil {
		for _, alert := range alerts {
			hour := alert.FirstSeen.Hour()
			day := alert.FirstSeen.Format("2006-01-02")
			analysis.AlertsByHour[hour]++
			analysis.AlertsByDay[day]++
		}
	}

	var maxDayCount int64
	for day, count := range analysis.EventsByDay {
		if count > maxDayCount {
			maxDayCount = count
			analysis.PeakActivityDay = day
		}
	}

	return analysis, nil
}

func (g *Generator) generateThreatLandscape(req *ReportRequest) (*ThreatLandscape, error) {
	landscape := &ThreatLandscape{
		TopAttackVectors: make([]AttackVector, 0),
		AffectedSystems:  make([]string, 0),
	}

	alertFilter := &storage.AlertFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     10000,
	}
	alerts, err := g.db.AlertRepo().Query(alertFilter)
	if err != nil {
		return landscape, err
	}

	systemSet := make(map[string]bool)
	for _, alert := range alerts {
		switch alert.Severity {
		case types.SeverityCritical:
			landscape.CriticalThreats++
		case types.SeverityHigh:
			landscape.HighThreats++
		case types.SeverityMedium:
			landscape.MediumThreats++
		case types.SeverityLow, types.SeverityInfo:
			landscape.LowThreats++
		}

		if alert.LogName != "" {
			systemSet[alert.LogName] = true
		}
	}

	for sys := range systemSet {
		landscape.AffectedSystems = append(landscape.AffectedSystems, sys)
	}

	mitreCounts := make(map[string]int64)
	for _, alert := range alerts {
		for _, mitre := range alert.MITREAttack {
			mitreCounts[mitre]++
		}
	}

	type mitrePair struct {
		name  string
		count int64
	}
	var mitrePairs []mitrePair
	for mitre, count := range mitreCounts {
		mitrePairs = append(mitrePairs, mitrePair{name: mitre, count: count})
	}

	sort.Slice(mitrePairs, func(i, j int) bool {
		return mitrePairs[i].count > mitrePairs[j].count
	})

	var total int64
	for _, p := range mitrePairs {
		total += p.count
	}

	for i := 0; i < 5 && i < len(mitrePairs); i++ {
		percentage := 0.0
		if total > 0 {
			percentage = float64(mitrePairs[i].count) / float64(total) * 100
		}
		landscape.TopAttackVectors = append(landscape.TopAttackVectors, AttackVector{
			Name:       mitrePairs[i].name,
			Count:      mitrePairs[i].count,
			Percentage: percentage,
		})
	}

	return landscape, nil
}

func (g *Generator) generateRecommendations(req *ReportRequest) ([]Recommendation, error) {
	recommendations := make([]Recommendation, 0)

	alertFilter := &storage.AlertFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     10000,
	}
	alerts, err := g.db.AlertRepo().Query(alertFilter)
	if err != nil {
		return recommendations, err
	}

	criticalCount := int64(0)
	highCount := int64(0)
	unresolvedCount := int64(0)

	for _, alert := range alerts {
		if !alert.Resolved {
			unresolvedCount++
			switch alert.Severity {
			case types.SeverityCritical:
				criticalCount++
			case types.SeverityHigh:
				highCount++
			}
		}
	}

	if criticalCount > 0 {
		recommendations = append(recommendations, Recommendation{
			Priority:    "Critical",
			Category:    "Incident Response",
			Title:       "Address Critical Alerts Immediately",
			Description: fmt.Sprintf("There are %d unresolved critical alerts that require immediate investigation.", criticalCount),
			Actionable:  "Review and respond to critical alerts in the alerts dashboard",
		})
	}

	if highCount > 0 {
		recommendations = append(recommendations, Recommendation{
			Priority:    "High",
			Category:    "Security Monitoring",
			Title:       "Investigate High Severity Alerts",
			Description: fmt.Sprintf(" %d high severity alerts need investigation.", highCount),
			Actionable:  "Conduct threat hunting based on high severity alerts",
		})
	}

	recommendations = append(recommendations, Recommendation{
		Priority:    "Medium",
		Category:    "Prevention",
		Title:       "Implement Additional Logging",
		Description: "Consider expanding event collection to improve detection coverage",
		Actionable:  "Review and update event sources configuration",
	})

	recommendations = append(recommendations, Recommendation{
		Priority:    "Low",
		Category:    "Hardening",
		Title:       "Review User Access Controls",
		Description: "Regularly review user accounts and access permissions",
		Actionable:  "Run access review and remove unnecessary privileges",
	})

	return recommendations, nil
}

func (g *Generator) generateAttackPatterns(req *ReportRequest) ([]*AttackPattern, error) {
	patterns := make([]*AttackPattern, 0)

	alertFilter := &storage.AlertFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     10000,
	}
	alerts, err := g.db.AlertRepo().Query(alertFilter)
	if err != nil {
		return patterns, err
	}

	mitreAlerts := make(map[string][]*types.Alert)
	for _, alert := range alerts {
		for _, mitre := range alert.MITREAttack {
			mitreAlerts[mitre] = append(mitreAlerts[mitre], alert)
		}
	}

	for mitre, alertList := range mitreAlerts {
		hosts := make(map[string]bool)
		for _, alert := range alertList {
			hosts[alert.LogName] = true
		}

		var severity string
		if len(alertList) > 10 {
			severity = "Critical"
		} else if len(alertList) > 5 {
			severity = "High"
		} else {
			severity = "Medium"
		}

		pattern := &AttackPattern{
			Name:          mitre,
			TechniqueID:   mitre,
			Count:         int64(len(alertList)),
			Severity:      severity,
			Indicators:    []string{},
			AffectedHosts: make([]string, 0),
		}

		for host := range hosts {
			pattern.AffectedHosts = append(pattern.AffectedHosts, host)
		}

		patterns = append(patterns, pattern)
	}

	sort.Slice(patterns, func(i, j int) bool {
		return patterns[i].Count > patterns[j].Count
	})

	if len(patterns) > 20 {
		patterns = patterns[:20]
	}

	return patterns, nil
}

func (g *Generator) generateComplianceStatus(req *ReportRequest) (*ComplianceStatus, error) {
	status := &ComplianceStatus{
		PassedChecks: make([]string, 0),
		FailedChecks: make([]string, 0),
		Warnings:     make([]string, 0),
	}

	alertFilter := &storage.AlertFilter{
		StartTime: &req.StartTime,
		EndTime:   &req.EndTime,
		Limit:     10000,
	}
	alerts, _ := g.db.AlertRepo().Query(alertFilter)

	criticalUnresolved := int64(0)
	for _, alert := range alerts {
		if !alert.Resolved && alert.Severity == types.SeverityCritical {
			criticalUnresolved++
		}
	}

	if criticalUnresolved == 0 {
		status.PassedChecks = append(status.PassedChecks, "No unresolved critical alerts")
	} else {
		status.FailedChecks = append(status.FailedChecks, fmt.Sprintf("Critical alerts require attention: %d unresolved", criticalUnresolved))
	}

	stats, _ := g.db.GetStats()
	if stats != nil && stats.EventCount > 0 {
		status.PassedChecks = append(status.PassedChecks, "Event collection is active")
	} else {
		status.Warnings = append(status.Warnings, "Low event collection activity detected")
	}

	if len(status.FailedChecks) == 0 {
		status.OverallStatus = "Compliant"
	} else {
		status.OverallStatus = "Non-Compliant"
	}

	return status, nil
}
