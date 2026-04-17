package reports

import (
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type APIReportSummary struct {
	TotalEvents     int64            `json:"total_events"`
	TotalAlerts     int64            `json:"total_alerts"`
	CriticalAlerts  int64            `json:"critical_alerts"`
	HighAlerts      int64            `json:"high_alerts"`
	MediumAlerts    int64            `json:"medium_alerts"`
	LowAlerts       int64            `json:"low_alerts"`
	TopEventSources map[string]int64 `json:"top_sources"`
	TimeRange       APITimeRange     `json:"time_range"`
}

type APITimeRange struct {
	Start time.Time `json:"start"`
	End   time.Time `json:"end"`
}

type APIReportAlert struct {
	ID        int64     `json:"id"`
	RuleName  string    `json:"rule_name"`
	Severity  string    `json:"severity"`
	Message   string    `json:"message"`
	Count     int       `json:"count"`
	FirstSeen time.Time `json:"first_seen"`
	LastSeen  time.Time `json:"last_seen"`
	MITRE     []string  `json:"mitre_attack,omitempty"`
}

type APIReportEvent struct {
	ID        int64     `json:"id"`
	Timestamp time.Time `json:"timestamp"`
	EventID   int32     `json:"event_id"`
	Level     string    `json:"level"`
	Source    string    `json:"source"`
	LogName   string    `json:"log_name"`
	Computer  string    `json:"computer"`
	Message   string    `json:"message"`
}

type APIReportTimeline struct {
	Timestamp time.Time `json:"timestamp"`
	Type      string    `json:"type"`
	Source    string    `json:"source"`
	Message   string    `json:"message"`
	Severity  string    `json:"severity,omitempty"`
}

type APIReportContent struct {
	Summary   *APIReportSummary    `json:"summary,omitempty"`
	Alerts    []*APIReportAlert    `json:"alerts,omitempty"`
	Events    []*APIReportEvent    `json:"events,omitempty"`
	Timeline  []*APIReportTimeline `json:"timeline,omitempty"`
	RawEvents []*types.Event       `json:"raw_events,omitempty"`
}

func AdaptReportToAPI(report *Report) *APIReportContent {
	if report == nil {
		return nil
	}

	content := &APIReportContent{}

	if report.Summary.TotalEvents > 0 || report.Summary.TotalAlerts > 0 {
		content.Summary = &APIReportSummary{
			TotalEvents:     report.Summary.TotalEvents,
			TotalAlerts:     report.Summary.TotalAlerts,
			CriticalAlerts:  report.Summary.CriticalEvents,
			HighAlerts:      report.Summary.HighAlerts,
			TopEventSources: make(map[string]int64),
			TimeRange: APITimeRange{
				Start: report.TimeRange.Start,
				End:   report.TimeRange.End,
			},
		}

		if report.Stats != nil {
			for source, count := range report.Stats.EventDistribution.BySource {
				content.Summary.TopEventSources[source] = count
			}
		}
	}

	for _, alert := range report.TopAlerts {
		content.Alerts = append(content.Alerts, &APIReportAlert{
			ID:        alert.ID,
			RuleName:  alert.RuleName,
			Severity:  string(alert.Severity),
			Message:   alert.Message,
			Count:     alert.Count,
			FirstSeen: alert.FirstSeen,
			LastSeen:  alert.LastSeen,
			MITRE:     alert.MITREAttack,
		})
	}

	for _, event := range report.TopEvents {
		levelStr := "Level0"
		if event.Level != 0 {
			levelStr = event.Level.String()
		}
		content.Events = append(content.Events, &APIReportEvent{
			ID:        event.ID,
			Timestamp: event.Timestamp,
			EventID:   event.EventID,
			Level:     levelStr,
			Source:    event.Source,
			LogName:   event.LogName,
			Computer:  event.Computer,
			Message:   event.Message,
		})
	}

	if report.RawEvents != nil {
		content.RawEvents = report.RawEvents
	}

	return content
}

func BuildAlertReportContent(alerts []*types.Alert) []*APIReportAlert {
	result := make([]*APIReportAlert, 0, len(alerts))
	for _, alert := range alerts {
		result = append(result, &APIReportAlert{
			ID:        alert.ID,
			RuleName:  alert.RuleName,
			Severity:  string(alert.Severity),
			Message:   alert.Message,
			Count:     alert.Count,
			FirstSeen: alert.FirstSeen,
			LastSeen:  alert.LastSeen,
			MITRE:     alert.MITREAttack,
		})
	}
	return result
}

func BuildEventReportContent(events []*types.Event) []*APIReportEvent {
	result := make([]*APIReportEvent, 0, len(events))
	for _, event := range events {
		levelStr := "Level0"
		if event.Level != 0 {
			levelStr = event.Level.String()
		}
		result = append(result, &APIReportEvent{
			ID:        event.ID,
			Timestamp: event.Timestamp,
			EventID:   event.EventID,
			Level:     levelStr,
			Source:    event.Source,
			LogName:   event.LogName,
			Computer:  event.Computer,
			Message:   event.Message,
		})
	}
	return result
}
