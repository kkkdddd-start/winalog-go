package template

import (
	"embed"
	"html/template"
)

//go:embed *
var templateFS embed.FS

var cachedTemplate *template.Template

func GetReportTemplate() (*template.Template, error) {
	if cachedTemplate != nil {
		return cachedTemplate, nil
	}

	funcMap := template.FuncMap{
		"div": func(a, b float64) float64 {
			if b == 0 {
				return 0
			}
			return a / b
		},
	}

	tmpl, err := template.New("report.html").Funcs(funcMap).ParseFS(templateFS, "report.html")
	if err != nil {
		return nil, err
	}

	cachedTemplate = tmpl
	return cachedTemplate, nil
}

func MustGetReportTemplate() *template.Template {
	tmpl, err := GetReportTemplate()
	if err != nil {
		panic("failed to load report template: " + err.Error())
	}
	return tmpl
}
