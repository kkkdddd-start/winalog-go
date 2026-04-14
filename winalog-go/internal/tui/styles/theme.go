package styles

import (
	"github.com/charmbracelet/lipgloss"
)

var (
	TitleStyle = lipgloss.NewStyle().
			Bold(true).
			Foreground(lipgloss.Color("86")).
			Background(lipgloss.Color("235")).
			Padding(0, 2)

	SubtitleStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("245")).
			Padding(0, 2)

	HeaderStyle = lipgloss.NewStyle().
			Bold(true).
			Foreground(lipgloss.Color("86")).
			Background(lipgloss.Color("236")).
			Width(60).
			Padding(0, 1)

	SectionTitle = lipgloss.NewStyle().
			Bold(true).
			Foreground(lipgloss.Color("75")).
			MarginTop(1)

	DividerStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("240"))

	HelpStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("245")).
			Background(lipgloss.Color("236")).
			Padding(0, 1).
			MarginTop(1)

	StatusBarStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("250")).
			Background(lipgloss.Color("235")).
			Padding(0, 1)

	LoadingStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("75")).
			Padding(1, 2)

	ErrorStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("196")).
			Background(lipgloss.Color("235")).
			Padding(0, 1)

	EmptyStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("240")).
			Italic(true)

	SelectedStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("86")).
			Bold(true)

	KeyStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("75")).
			Bold(true)

	ResolvedStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("75"))
)

func SeverityBadge(severity string) lipgloss.Style {
	var color lipgloss.Color
	switch severity {
	case "critical":
		color = lipgloss.Color("196")
	case "high":
		color = lipgloss.Color("202")
	case "medium":
		color = lipgloss.Color("214")
	case "low":
		color = lipgloss.Color("75")
	default:
		color = lipgloss.Color("244")
	}

	return lipgloss.NewStyle().
		Foreground(color).
		Bold(true).
		Width(10)
}

func RepeatStr(s string, count int) string {
	result := ""
	for i := 0; i < count; i++ {
		result += s
	}
	return result
}
