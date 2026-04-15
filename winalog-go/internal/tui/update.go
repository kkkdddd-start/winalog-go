package tui

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/charmbracelet/bubbletea"
	"github.com/kkkdddd-start/winalog-go/internal/engine"
)

func (m Model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		return m.handleKey(msg)
	case tea.WindowSizeMsg:
		m.width = msg.Width
		m.height = msg.Height
	case loadingMsg:
		m.loading = true
		m.loadingMsg = string(msg)
	case loadedMsg:
		m.loading = false
		m.loadingMsg = ""
	case errorMsg:
		m.err = fmt.Errorf("%s", msg)
	case clearErrorMsg:
		m.err = nil
	}
	return m, nil
}

type (
	loadingMsg    string
	loadedMsg     struct{}
	errorMsg      string
	clearErrorMsg struct{}
)

func (m Model) handleInputKey(msg tea.KeyMsg) (tea.Model, tea.Cmd) {
	switch msg.String() {
	case "enter":
		return m.handleImport()
	case "esc":
		m.inputMode = false
		m.inputBuffer = ""
	case "backspace":
		if len(m.inputBuffer) > 0 {
			m.inputBuffer = m.inputBuffer[:len(m.inputBuffer)-1]
		}
	default:
		if len(msg.String()) == 1 {
			m.inputBuffer += msg.String()
		}
	}
	return m, nil
}

func (m Model) handleKey(msg tea.KeyMsg) (tea.Model, tea.Cmd) {

	switch msg.String() {
	case "q", "ctrl+c":
		return m, tea.Quit
	case "?":
		m.SetView(ViewHelp)
	case "/":
		m.SetView(ViewSearch)
		m.inputBuffer = ""
	case "esc":
		m.SetView(ViewDashboard)
	case "d":
		m.SetView(ViewDashboard)
	case "e":
		m.SetView(ViewEvents)
	case "a":
		m.SetView(ViewAlerts)
	case "t":
		m.SetView(ViewTimeline)
	case "r":
		m.SetView(ViewReports)
	case "n":
		m.SetView(ViewAnalyze)
	case "s":
		m.SetView(ViewSystemInfo)
	case "p":
		m.SetView(ViewPersistence)
	case "f":
		m.SetView(ViewForensics)
	case "m":
		m.SetView(ViewMetrics)
	case ",":
		m.SetView(ViewSettings)
	case "l":
		m.SetView(ViewCollect)
	case "i":
		m.SetView(ViewCollect)
		m.inputMode = true
		m.inputBuffer = ""

	case "j", "down":
		m.selectedIdx = min(m.selectedIdx+1, m.maxItems()-1)
	case "k", "up":
		m.selectedIdx = max(m.selectedIdx-1, 0)
	case "g":
		m.selectedIdx = 0
	case "G":
		m.selectedIdx = m.maxItems() - 1

	case "enter":
		return m.handleEnter()
	case "R":
		switch m.currentView {
		case ViewEvents:
			if err := m.RefreshEvents(); err != nil {
				m.err = err
			}
		case ViewAlerts:
			if err := m.RefreshAlerts(); err != nil {
				m.err = err
			}
		case ViewDashboard:
			if err := m.RefreshStats(); err != nil {
				m.err = err
			}
		case ViewSearch:
			m.SetView(ViewDashboard)
		}
	case "0":
		if m.currentView == ViewSearch {
			m.selectedIdx = 0
		}
	}
	return m, nil
}

func (m Model) handleEnter() (tea.Model, tea.Cmd) {
	switch m.currentView {
	case ViewDashboard:
		m.SetView(ViewEvents)
	case ViewEvents:
		m.SetView(ViewEventDetail)
	case ViewAlerts:
		m.SetView(ViewAlertDetail)
	case ViewSearch:
		m.SetView(ViewEventDetail)
	case ViewCollect:
		return m.handleImport()
	case ViewEventDetail, ViewAlertDetail:
		return m, nil
	}
	return m, nil
}

func (m Model) handleImport() (tea.Model, tea.Cmd) {
	if m.inputBuffer == "" {
		m.err = fmt.Errorf("no path specified")
		return m, nil
	}

	m.importing = true
	m.importProgress = &ImportProgress{}

	go func() {
		eng := engine.NewEngine(m.db)

		files := collectImportFiles(m.inputBuffer)
		if len(files) == 0 {
			m.err = fmt.Errorf("no supported files found in %s", m.inputBuffer)
			m.importing = false
			return
		}

		req := &engine.ImportRequest{
			Paths: files,
		}

		result, err := eng.Import(nil, req, func(progress *engine.ImportProgress) {
			m.importProgress = &ImportProgress{
				CurrentFile:     progress.CurrentFile,
				TotalFiles:      progress.TotalFiles,
				CurrentFileName: progress.CurrentFileName,
				EventsImported:  progress.EventsImported,
			}
		})

		if err != nil {
			m.err = fmt.Errorf("import failed: %v", err)
		} else {
			m.err = nil
			fmt.Printf("\nImported %d events from %d files\n", result.EventsImported, result.FilesImported)
		}
		m.importing = false
		m.inputBuffer = ""
	}()

	return m, nil
}

func collectImportFiles(path string) []string {
	var files []string

	info, err := os.Stat(path)
	if err != nil {
		return files
	}

	if info.IsDir() {
		filepath.Walk(path, func(fpath string, info os.FileInfo, err error) error {
			if err != nil {
				return nil
			}
			if info.IsDir() {
				return nil
			}
			ext := strings.ToLower(filepath.Ext(fpath))
			if ext == ".evtx" || ext == ".etl" || ext == ".csv" || ext == ".log" || ext == ".txt" {
				files = append(files, fpath)
			}
			return nil
		})
	} else {
		files = append(files, path)
	}

	return files
}

func (m Model) maxItems() int {
	switch m.currentView {
	case ViewEvents, ViewSearch:
		return len(m.events)
	case ViewAlerts:
		return len(m.alerts)
	default:
		return 0
	}
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
