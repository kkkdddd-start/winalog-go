package tui

import (
	"fmt"
	"strings"
	"time"

	"github.com/charmbracelet/bubbletea"

	"github.com/kkkdddd-start/winalog-go/internal/tui/styles"
)

func (m Model) View() string {
	if m.loading {
		return styles.LoadingStyle.Render(fmt.Sprintf("\n\n   Loading %s...\n\n", m.loadingMsg))
	}

	var view string
	switch m.currentView {
	case ViewDashboard:
		view = m.renderDashboard()
	case ViewEvents:
		view = m.renderEvents()
	case ViewEventDetail:
		view = m.renderEventDetail()
	case ViewAlerts:
		view = m.renderAlerts()
	case ViewAlertDetail:
		view = m.renderAlertDetail()
	case ViewSearch:
		view = m.renderSearch()
	case ViewTimeline:
		view = m.renderTimeline()
	case ViewCollect:
		view = m.renderCollect()
	case ViewHelp:
		view = m.renderHelp()
	case ViewSettings:
		view = m.renderSettings()
	default:
		view = m.renderDashboard()
	}

	if m.err != nil {
		view += "\n" + styles.ErrorStyle.Render(fmt.Sprintf(" Error: %v ", m.err))
	}

	return view
}

func (m Model) renderDashboard() string {
	var sb strings.Builder

	sb.WriteString(styles.TitleStyle.Render(" WinLogAnalyzer v2.4.0 ") + "\n")
	sb.WriteString(styles.SubtitleStyle.Render(" Windows Security Forensics Tool ") + "\n\n")

	if len(m.alerts) > 0 {
		sb.WriteString(styles.SectionTitle.Render(" Recent Alerts ") + "\n")
		for i, alert := range m.alerts {
			if i >= 5 {
				break
			}
			sb.WriteString(fmt.Sprintf("  %s %s\n",
				styles.SeverityBadge(string(alert.Severity)),
				truncate(alert.Message, 60)))
		}
		sb.WriteString("\n")
	}

	if len(m.events) > 0 {
		sb.WriteString(styles.SectionTitle.Render(" Recent Events ") + "\n")
		for i, event := range m.events {
			if i >= 5 {
				break
			}
			levelColor := getLevelColor(event.Level)
			sb.WriteString(fmt.Sprintf("  %s %s %s\n",
				levelColor,
				fmt.Sprintf("%d", event.EventID),
				truncate(event.Message, 50)))
		}
		sb.WriteString("\n")
	}

	sb.WriteString(styles.HelpStyle.Render(" [d] Dashboard [e] Events [a] Alerts [/] Search [?] Help [q] Quit "))

	return sb.String()
}

func (m Model) renderEvents() string {
	var sb strings.Builder

	sb.WriteString(styles.HeaderStyle.Render(fmt.Sprintf(" Events (Total: %d) ", len(m.events))) + "\n")
	sb.WriteString(styles.DividerStyle.Render(styles.RepeatStr("─", m.width-4)) + "\n")

	if len(m.events) == 0 {
		sb.WriteString(styles.EmptyStyle.Render("  No events found. Press [i] to import or [r] to refresh. ") + "\n")
	} else {
		start := m.selectedIdx
		end := min(m.selectedIdx+20, len(m.events))

		for i := start; i < end && i < len(m.events); i++ {
			event := m.events[i]
			levelColor := getLevelColor(event.Level)

			prefix := "  "
			if i == m.selectedIdx {
				prefix = styles.SelectedStyle.Render(" >")
			}

			userStr := ""
			if event.User != nil {
				userStr = *event.User
			}

			sb.WriteString(fmt.Sprintf("%s %-4d %s %s %s %s\n",
				prefix,
				i+1,
				event.Timestamp.Format("2006-01-02 15:04:05"),
				levelColor,
				truncate(userStr, 15),
				truncate(event.Message, 40)))
		}
	}

	sb.WriteString("\n" + styles.StatusBarStyle.Render(
		fmt.Sprintf(" Selected: %d/%d | [j/k] Navigate | [Enter] Detail | [r] Refresh | [q] Back ",
			m.selectedIdx+1, len(m.events))))

	return sb.String()
}

func (m Model) renderEventDetail() string {
	if m.selectedIdx >= len(m.events) {
		return styles.ErrorStyle.Render(" No event selected ")
	}

	event := m.events[m.selectedIdx]
	var sb strings.Builder

	sb.WriteString(styles.HeaderStyle.Render(" Event Detail ") + "\n")
	sb.WriteString(styles.DividerStyle.Render(styles.RepeatStr("─", m.width-4)) + "\n\n")

	fields := []struct{ label, value string }{
		{"ID", fmt.Sprintf("%d", event.ID)},
		{"Timestamp", event.Timestamp.Format(time.RFC3339)},
		{"EventID", fmt.Sprintf("%d", event.EventID)},
		{"Level", event.Level.String()},
		{"Source", event.Source},
		{"LogName", event.LogName},
		{"Computer", event.Computer},
		{"User", derefString(event.User)},
		{"UserSID", derefString(event.UserSID)},
		{"IPAddress", derefString(event.IPAddress)},
		{"SessionID", derefString(event.SessionID)},
	}

	for _, f := range fields {
		if f.value != "" {
			sb.WriteString(fmt.Sprintf("  %-12s: %s\n", f.label, f.value))
		}
	}

	sb.WriteString("\n" + styles.SectionTitle.Render(" Message ") + "\n")
	sb.WriteString(fmt.Sprintf("  %s\n", truncate(event.Message, m.width-8)))

	if event.RawXML != nil && *event.RawXML != "" {
		sb.WriteString("\n" + styles.SectionTitle.Render(" Raw XML ") + "\n")
		sb.WriteString(fmt.Sprintf("  %s\n", truncate(*event.RawXML, 200)))
	}

	sb.WriteString("\n" + styles.StatusBarStyle.Render(
		fmt.Sprintf(" [j/k] Navigate | [Enter] Related Events | [q] Back ")))

	return sb.String()
}

func (m Model) renderAlerts() string {
	var sb strings.Builder

	sb.WriteString(styles.HeaderStyle.Render(fmt.Sprintf(" Alerts (Total: %d) ", len(m.alerts))) + "\n")
	sb.WriteString(styles.DividerStyle.Render(styles.RepeatStr("─", m.width-4)) + "\n")

	if len(m.alerts) == 0 {
		sb.WriteString(styles.EmptyStyle.Render("  No alerts found. ") + "\n")
	} else {
		start := m.selectedIdx
		end := min(m.selectedIdx+20, len(m.alerts))

		for i := start; i < end && i < len(m.alerts); i++ {
			alert := m.alerts[i]

			prefix := "  "
			if i == m.selectedIdx {
				prefix = styles.SelectedStyle.Render(" >")
			}

			resolvedStr := ""
			if alert.Resolved {
				resolvedStr = styles.ResolvedStyle.Render(" RESOLVED ")
			}

			sb.WriteString(fmt.Sprintf("%s %-4d %s %s %s %s %s\n",
				prefix,
				i+1,
				styles.SeverityBadge(string(alert.Severity)),
				truncate(alert.RuleName, 20),
				alert.LastSeen.Format("01-02 15:04"),
				truncate(alert.Message, 30),
				resolvedStr))
		}
	}

	sb.WriteString("\n" + styles.StatusBarStyle.Render(
		fmt.Sprintf(" Selected: %d/%d | [j/k] Navigate | [Enter] Detail | [r] Refresh | [q] Back ",
			m.selectedIdx+1, len(m.alerts))))

	return sb.String()
}

func (m Model) renderAlertDetail() string {
	if m.selectedIdx >= len(m.alerts) {
		return styles.ErrorStyle.Render(" No alert selected ")
	}

	alert := m.alerts[m.selectedIdx]
	var sb strings.Builder

	sb.WriteString(styles.HeaderStyle.Render(" Alert Detail ") + "\n")
	sb.WriteString(styles.DividerStyle.Render(styles.RepeatStr("─", m.width-4)) + "\n\n")

	sb.WriteString(fmt.Sprintf("  %s %s\n\n", styles.SeverityBadge(string(alert.Severity)), alert.RuleName))

	fields := []struct{ label, value string }{
		{"ID", fmt.Sprintf("%d", alert.ID)},
		{"Severity", string(alert.Severity)},
		{"Message", alert.Message},
		{"Count", fmt.Sprintf("%d", alert.Count)},
		{"FirstSeen", alert.FirstSeen.Format(time.RFC3339)},
		{"LastSeen", alert.LastSeen.Format(time.RFC3339)},
		{"Resolved", fmt.Sprintf("%t", alert.Resolved)},
		{"RuleScore", fmt.Sprintf("%.2f", alert.RuleScore)},
		{"LogName", alert.LogName},
	}

	for _, f := range fields {
		if f.value != "" && f.value != "<nil>" {
			sb.WriteString(fmt.Sprintf("  %-12s: %s\n", f.label, truncate(f.value, 60)))
		}
	}

	if len(alert.EventIDs) > 0 {
		sb.WriteString(fmt.Sprintf("  %-12s: %v\n", "EventIDs", alert.EventIDs))
	}

	if len(alert.MITREAttack) > 0 {
		sb.WriteString(fmt.Sprintf("  %-12s: %v\n", "MITRE", alert.MITREAttack))
	}

	if alert.ResolvedTime != nil {
		sb.WriteString(fmt.Sprintf("  %-12s: %s\n", "ResolvedTime", alert.ResolvedTime.Format(time.RFC3339)))
	}

	if alert.Notes != "" {
		sb.WriteString(fmt.Sprintf("  %-12s: %s\n", "Notes", alert.Notes))
	}

	sb.WriteString("\n" + styles.HelpStyle.Render(" [r] Resolve | [f] Mark False Positive | [q] Back "))

	return sb.String()
}

func (m Model) renderSearch() string {
	var sb strings.Builder

	sb.WriteString(styles.HeaderStyle.Render(fmt.Sprintf(" Search: %s ", m.searchQuery)) + "\n")
	sb.WriteString(styles.DividerStyle.Render(styles.RepeatStr("─", m.width-4)) + "\n")

	if len(m.searchResults) == 0 && m.searchQuery != "" {
		sb.WriteString(styles.EmptyStyle.Render("  No results found. ") + "\n")
	} else if m.searchQuery == "" {
		sb.WriteString(styles.EmptyStyle.Render("  Type your search query and press Enter. ") + "\n")
	} else {
		for i, event := range m.searchResults {
			if i >= 20 {
				break
			}
			levelColor := getLevelColor(event.Level)
			sb.WriteString(fmt.Sprintf("  %s %s %s\n",
				levelColor,
				fmt.Sprintf("%d", event.EventID),
				truncate(event.Message, 60)))
		}
	}

	sb.WriteString("\n" + styles.StatusBarStyle.Render(
		fmt.Sprintf(" Results: %d | [/] New Search | [j/k] Navigate | [q] Back ", len(m.searchResults))))

	return sb.String()
}

func (m Model) renderTimeline() string {
	var sb strings.Builder

	sb.WriteString(styles.HeaderStyle.Render(" Timeline ") + "\n")
	sb.WriteString(styles.DividerStyle.Render(styles.RepeatStr("─", m.width-4)) + "\n")
	sb.WriteString(styles.EmptyStyle.Render("  Timeline view - use [correlate] command to analyze attack chains ") + "\n")
	sb.WriteString("\n" + styles.HelpStyle.Render(" [q] Back "))

	return sb.String()
}

func (m Model) renderCollect() string {
	var sb strings.Builder

	sb.WriteString(styles.HeaderStyle.Render(" Live Collect ") + "\n")
	sb.WriteString(styles.DividerStyle.Render(styles.RepeatStr("─", m.width-4)) + "\n")
	sb.WriteString(styles.EmptyStyle.Render("  Collection view - use [collect] command to start gathering ") + "\n")
	sb.WriteString("\n" + styles.HelpStyle.Render(" [q] Back "))

	return sb.String()
}

func (m Model) renderHelp() string {
	var sb strings.Builder

	sb.WriteString(styles.TitleStyle.Render(" Help ") + "\n\n")

	helpItems := []struct{ key, desc string }{
		{"d", "Dashboard"},
		{"e", "Events"},
		{"a", "Alerts"},
		{"t", "Timeline"},
		{"/", "Search"},
		{"c", "Collect"},
		{"?", "Help"},
		{",", "Settings"},
		{"j/k", "Navigate Up/Down"},
		{"g/G", "Go Top/Bottom"},
		{"Enter", "Select/Open"},
		{"r", "Refresh"},
		{"q", "Back/Quit"},
	}

	for _, item := range helpItems {
		sb.WriteString(fmt.Sprintf("  %-8s %s\n", styles.KeyStyle.Render(item.key), item.desc))
	}

	sb.WriteString("\n" + styles.HelpStyle.Render(" Press [q] to go back "))

	return sb.String()
}

func (m Model) renderSettings() string {
	var sb strings.Builder

	sb.WriteString(styles.HeaderStyle.Render(" Settings ") + "\n")
	sb.WriteString(styles.DividerStyle.Render(styles.RepeatStr("─", m.width-4)) + "\n")
	sb.WriteString(fmt.Sprintf("  Database: %s\n", m.cfg.Database.Path))
	sb.WriteString(fmt.Sprintf("  API Port: %d\n", m.cfg.API.Port))
	sb.WriteString("\n" + styles.HelpStyle.Render(" [q] Back "))

	return sb.String()
}

func derefString(s *string) string {
	if s == nil {
		return ""
	}
	return *s
}

func (m Model) Init() tea.Cmd {
	return nil
}
