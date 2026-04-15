package template

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"text/template"
)

type Manager struct {
	mu              sync.RWMutex
	templates       map[string]*template.Template
	customTemplates map[string]string
	defaultCSS      string
}

var defaultManager *Manager
var once sync.Once

func GetManager() *Manager {
	once.Do(func() {
		defaultManager = &Manager{
			templates:       make(map[string]*template.Template),
			customTemplates: make(map[string]string),
		}
	})
	return defaultManager
}

func (m *Manager) RegisterTemplate(name string, tmpl *template.Template) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.templates[name] = tmpl
}

func (m *Manager) SetCustomTemplate(name string, content string) error {
	m.mu.Lock()
	defer m.mu.Unlock()

	funcMap := template.FuncMap{
		"div": func(a, b float64) float64 {
			if b == 0 {
				return 0
			}
			return a / b
		},
		"printf": func(format string, args ...interface{}) string {
			return fmt.Sprintf(format, args...)
		},
	}

	tmpl, err := template.New(name).Funcs(funcMap).Parse(content)
	if err != nil {
		return err
	}

	m.customTemplates[name] = content
	m.templates[name] = tmpl
	return nil
}

func (m *Manager) GetTemplate(name string) (*template.Template, bool) {
	m.mu.RLock()
	defer m.mu.RUnlock()

	if tmpl, ok := m.templates[name]; ok {
		return tmpl, true
	}

	if content, ok := m.customTemplates[name]; ok {
		funcMap := template.FuncMap{
			"div": func(a, b float64) float64 {
				if b == 0 {
					return 0
				}
				return a / b
			},
		}
		tmpl, err := template.New(name).Funcs(funcMap).Parse(content)
		if err == nil {
			return tmpl, true
		}
	}

	return nil, false
}

func (m *Manager) ListTemplates() []string {
	m.mu.RLock()
	defer m.mu.RUnlock()

	names := make([]string, 0, len(m.templates))
	for name := range m.templates {
		names = append(names, name)
	}
	return names
}

func (m *Manager) DeleteCustomTemplate(name string) bool {
	m.mu.Lock()
	defer m.mu.Unlock()

	if _, ok := m.customTemplates[name]; ok {
		delete(m.customTemplates, name)
		delete(m.templates, name)
		return true
	}
	return false
}

func (m *Manager) IsCustomTemplate(name string) bool {
	m.mu.RLock()
	defer m.mu.RUnlock()
	_, ok := m.customTemplates[name]
	return ok
}

func (m *Manager) GetDefaultCSS() string {
	if m.defaultCSS != "" {
		return m.defaultCSS
	}

	m.defaultCSS = `
	body { background-color: #f8f9fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
	.card { box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); margin-bottom: 1.5rem; border-radius: 0.5rem; }
	.card-header { background-color: #2c3e50; color: white; font-weight: 600; border-radius: 0.5rem 0.5rem 0 0; }
	.severity-critical { color: #dc3545; font-weight: bold; }
	.severity-high { color: #fd7e14; font-weight: bold; }
	.severity-medium { color: #ffc107; font-weight: bold; }
	.severity-low { color: #0dcaf0; font-weight: bold; }
	.severity-info { color: #6c757d; }
	.badge-critical { background-color: #dc3545; }
	.badge-high { background-color: #fd7e14; }
	.badge-medium { background-color: #ffc107; color: #000; }
	.badge-low { background-color: #0dcaf0; color: #000; }
	.stat-card { border-left: 4px solid #3498db; }
	.stat-card-alerts { border-left-color: #e74c3c; }
	.table-responsive { font-size: 0.875rem; }
	pre { background-color: #f5f5f5; padding: 1rem; border-radius: 0.25rem; overflow-x: auto; }
	.navbar-brand { font-weight: 600; }
	footer { margin-top: 3rem; padding: 2rem 0; border-top: 1px solid #dee2e6; }
`

	return m.defaultCSS
}

func LoadTemplatesFromDir(dir string) error {
	m := GetManager()

	entries, err := os.ReadDir(dir)
	if err != nil {
		return err
	}

	for _, entry := range entries {
		if entry.IsDir() {
			continue
		}

		ext := filepath.Ext(entry.Name())
		if ext == ".html" || ext == ".tmpl" {
			name := strings.TrimSuffix(entry.Name(), ext)
			content, err := os.ReadFile(filepath.Join(dir, entry.Name()))
			if err != nil {
				continue
			}

			m.SetCustomTemplate(name, string(content))
		}
	}

	return nil
}

func (m *Manager) SaveCustomTemplate(name string, dir string) error {
	m.mu.RLock()
	content, ok := m.customTemplates[name]
	m.mu.RUnlock()

	if !ok {
		return nil
	}

	os.MkdirAll(dir, 0755)

	filename := filepath.Join(dir, name+".html")
	return os.WriteFile(filename, []byte(content), 0644)
}

type TemplateInfo struct {
	Name        string `json:"name"`
	IsBuiltIn   bool   `json:"is_built_in"`
	IsCustom    bool   `json:"is_custom"`
	Description string `json:"description"`
}

var BuiltInTemplates = map[string]string{
	"security_summary":  "Security summary report with charts and statistics",
	"alert_report":      "Detailed alert report with MITRE ATT&CK mapping",
	"event_report":      "Event listing report with filtering options",
	"timeline_report":   "Timeline visualization of security events",
	"executive_summary": "Executive-level summary for management",
	"incident_report":   "Incident-focused report for security teams",
}

func (m *Manager) ListTemplateInfo() []TemplateInfo {
	infos := make([]TemplateInfo, 0, len(BuiltInTemplates)+len(m.customTemplates))

	for name, desc := range BuiltInTemplates {
		infos = append(infos, TemplateInfo{
			Name:        name,
			IsBuiltIn:   true,
			IsCustom:    false,
			Description: desc,
		})
	}

	for name := range m.customTemplates {
		if _, ok := BuiltInTemplates[name]; !ok {
			infos = append(infos, TemplateInfo{
				Name:        name,
				IsBuiltIn:   false,
				IsCustom:    true,
				Description: "Custom template",
			})
		}
	}

	return infos
}
