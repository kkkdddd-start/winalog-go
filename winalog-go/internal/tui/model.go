package tui

import (
	"fmt"
	"time"

	"github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
	"github.com/kkkdddd-start/winalog-go/internal/config"
	"github.com/kkkdddd-start/winalog-go/internal/engine"
	"github.com/kkkdddd-start/winalog-go/internal/persistence"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type ViewType int

const (
	ViewDashboard ViewType = iota
	ViewEvents
	ViewEventDetail
	ViewAlerts
	ViewAlertDetail
	ViewSearch
	ViewTimeline
	ViewReports
	ViewAnalyze
	ViewSystemInfo
	ViewPersistence
	ViewForensics
	ViewCollect
	ViewHelp
	ViewSettings
	ViewMetrics
)

type FilterOptions struct {
	Keywords  string
	EventIDs  []int32
	Levels    []int
	LogNames  []string
	StartTime *time.Time
	EndTime   *time.Time
	RuleName  string
	Severity  string
}

type Model struct {
	engine *engine.Engine
	db     *storage.DB
	cfg    *config.Config

	currentView ViewType
	events      []*types.Event
	alerts      []*types.Alert

	selectedIdx int
	searchQuery string
	filterOpts  FilterOptions

	width  int
	height int

	err        error
	loading    bool
	loadingMsg string

	searchResults      []*types.Event
	timelineEvents     []*types.Event
	reportContent      string
	analyzeResult      *types.AnalyzeResult
	systemInfo         map[string]string
	persistenceResults []*types.Detection

	stats *types.AlertStats
	trend *types.AlertTrend

	inputBuffer    string
	inputMode      bool
	importPath     string
	importing      bool
	importProgress *ImportProgress
}

type ImportProgress struct {
	CurrentFile     int
	TotalFiles      int
	CurrentFileName string
	EventsImported  int64
}

func NewModel(cfg *config.Config) (*Model, error) {
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	return &Model{
		cfg:         cfg,
		db:          db,
		currentView: ViewDashboard,
		selectedIdx: 0,
		filterOpts:  FilterOptions{},
		stats:       &types.AlertStats{},
		trend:       &types.AlertTrend{},
	}, nil
}

func (m *Model) Width() int {
	return m.width
}

func (m *Model) Height() int {
	return m.height
}

func (m *Model) CurrentView() ViewType {
	return m.currentView
}

func (m *Model) SelectedIdx() int {
	return m.selectedIdx
}

func (m *Model) SetView(view ViewType) {
	m.currentView = view
	m.selectedIdx = 0
}

func (m *Model) SetError(err error) {
	m.err = err
}

func (m *Model) ClearError() {
	m.err = nil
}

func (m *Model) IsLoading() bool {
	return m.loading
}

func (m *Model) SetLoading(loading bool, msg string) {
	m.loading = loading
	m.loadingMsg = msg
}

func (m *Model) DB() *storage.DB {
	return m.db
}

func (m *Model) Config() *config.Config {
	return m.cfg
}

func (m *Model) RefreshStats() error {
	return nil
}

func (m *Model) RefreshEvents() error {
	m.SetLoading(true, "Loading events...")
	defer m.SetLoading(false, "")

	filter := &storage.EventFilter{
		Limit:  100,
		Offset: 0,
	}

	events, _, err := m.db.ListEvents(filter)
	if err != nil {
		return err
	}

	m.events = events
	return nil
}

func (m *Model) RefreshAlerts() error {
	m.SetLoading(true, "Loading alerts...")
	defer m.SetLoading(false, "")

	filter := &storage.AlertFilter{
		Limit: 100,
	}

	alerts, err := m.db.AlertRepo().Query(filter)
	if err != nil {
		return err
	}

	m.alerts = alerts
	return nil
}

func (m *Model) Search(query string) error {
	m.SetLoading(true, "Searching...")
	defer m.SetLoading(false, "")

	m.searchQuery = query
	events, _, err := m.db.SearchEvents(query, 100)
	if err != nil {
		return err
	}

	m.searchResults = events
	m.SetView(ViewSearch)
	return nil
}

func (m *Model) LoadMoreEvents(offset, limit int) ([]*types.Event, error) {
	filter := &storage.EventFilter{
		Limit:  limit,
		Offset: offset,
	}
	return m.db.ListEventsFiltered(filter)
}

func (m *Model) LoadEventByID(id int64) (*types.Event, error) {
	return m.db.GetEventByID(id)
}

func (m *Model) LoadAlertByID(id int64) (*types.Alert, error) {
	return m.db.AlertRepo().GetByID(id)
}

func (m *Model) ResolveAlert(id int64, notes string) error {
	return m.db.AlertRepo().Resolve(id, notes)
}

func (m *Model) Close() error {
	if m.db != nil {
		return m.db.Close()
	}
	return nil
}

func InitialModel(cfg *config.Config) (*Model, error) {
	m, err := NewModel(cfg)
	if err != nil {
		return nil, err
	}

	if err := m.RefreshStats(); err != nil {
		fmt.Printf("Warning: failed to refresh stats: %v\n", err)
	}

	if err := m.RefreshEvents(); err != nil {
		fmt.Printf("Warning: failed to refresh events: %v\n", err)
	}

	if err := m.RefreshAlerts(); err != nil {
		fmt.Printf("Warning: failed to refresh alerts: %v\n", err)
	}

	return m, nil
}

func StartTUI(cfg *config.Config) error {
	m, err := InitialModel(cfg)
	if err != nil {
		return fmt.Errorf("failed to initialize TUI model: %w", err)
	}

	p := tea.NewProgram(m, tea.WithAltScreen())
	if _, err := p.Run(); err != nil {
		return fmt.Errorf("TUI error: %w", err)
	}

	return nil
}

func truncate(s string, maxLen int) string {
	if maxLen <= 0 {
		return ""
	}
	runes := []rune(s)
	if len(runes) <= maxLen {
		return s
	}
	return string(runes[:maxLen-3]) + "..."
}

func getSeverityColor(severity types.Severity) lipgloss.Color {
	switch severity {
	case types.SeverityCritical:
		return lipgloss.Color("196")
	case types.SeverityHigh:
		return lipgloss.Color("202")
	case types.SeverityMedium:
		return lipgloss.Color("214")
	case types.SeverityLow:
		return lipgloss.Color("75")
	default:
		return lipgloss.Color("244")
	}
}

func getLevelColor(level types.EventLevel) lipgloss.Color {
	switch level {
	case types.EventLevelCritical:
		return lipgloss.Color("196")
	case types.EventLevelError:
		return lipgloss.Color("202")
	case types.EventLevelWarning:
		return lipgloss.Color("214")
	case types.EventLevelInfo:
		return lipgloss.Color("75")
	default:
		return lipgloss.Color("244")
	}
}

var borderStyle = lipgloss.NewStyle().
	BorderStyle(lipgloss.RoundedBorder()).
	BorderForeground(lipgloss.Color("240"))
