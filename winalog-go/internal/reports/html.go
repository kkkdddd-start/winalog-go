package reports

import (
	"fmt"
	"html/template"
	"io"
	"time"
)

type HTMLReport struct {
	*Report
}

func NewHTMLReport(report *Report) *HTMLReport {
	return &HTMLReport{Report: report}
}

func (r *HTMLReport) Write(w io.Writer) error {
	htmlTemplate := getHTMLTemplate()
	tmpl, err := template.New("report").Parse(htmlTemplate)
	if err != nil {
		return fmt.Errorf("failed to parse template: %w", err)
	}

	data := struct {
		*Report
		GeneratedAtStr string
		StartTimeStr   string
		EndTimeStr     string
		Version        string
	}{
		Report:         r.Report,
		GeneratedAtStr: r.Report.GeneratedAt.Format(time.RFC1123),
		StartTimeStr:   r.Report.TimeRange.Start.Format(time.RFC1123),
		EndTimeStr:     r.Report.TimeRange.End.Format(time.RFC1123),
		Version:        "2.4.0",
	}

	return tmpl.Execute(w, data)
}

type HTMLExporter struct {
	generator *Generator
}

func NewHTMLExporter(generator *Generator) *HTMLExporter {
	return &HTMLExporter{generator: generator}
}

func (e *HTMLExporter) Export(req *ReportRequest, w io.Writer) error {
	report, err := e.generator.Generate(req)
	if err != nil {
		return fmt.Errorf("failed to generate report: %w", err)
	}

	htmlReport := NewHTMLReport(report)
	return htmlReport.Write(w)
}

func (e *HTMLExporter) ExportToFile(req *ReportRequest, filename string) error {
	file, err := createFile(filename)
	if err != nil {
		return err
	}
	defer file.Close()
	return e.Export(req, file)
}

func getHTMLTemplate() string {
	return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{.Title}} - WinLogAnalyzer Report</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
    <style>
        body { background-color: #f8f9fa; }
        .card { box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); margin-bottom: 1.5rem; }
        .card-header { background-color: #2c3e50; color: white; font-weight: 600; }
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
    </style>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">WinLogAnalyzer Security Report</span>
            <span class="navbar-text text-white-50">
                Generated: {{.GeneratedAtStr}}
            </span>
        </div>
    </nav>

    <div class="container-fluid py-4">
        <h4 class="mb-4">{{.Title}}</h4>
        
        <!-- Summary Cards -->
        <div class="row">
            <div class="col-md-3">
                <div class="card stat-card">
                    <div class="card-body">
                        <h6 class="card-title text-muted">Total Events</h6>
                        <h2 class="mb-0">{{.Summary.TotalEvents}}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stat-card stat-card-alerts">
                    <div class="card-body">
                        <h6 class="card-title text-muted">Total Alerts</h6>
                        <h2 class="mb-0">{{.Summary.TotalAlerts}}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stat-card" style="border-left-color: #dc3545;">
                    <div class="card-body">
                        <h6 class="card-title text-muted">Critical Events</h6>
                        <h2 class="mb-0">{{.Summary.CriticalEvents}}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stat-card" style="border-left-color: #fd7e14;">
                    <div class="card-body">
                        <h6 class="card-title text-muted">High Alerts</h6>
                        <h2 class="mb-0">{{.Summary.HighAlerts}}</h2>
                    </div>
                </div>
            </div>
        </div>

        <!-- Time Range -->
        <div class="row mt-3">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <strong>Analysis Period:</strong> 
                        {{.StartTimeStr}} to {{.EndTimeStr}}
                        ({{printf "%.1f" .Summary.TimeRangeDays}} days)
                    </div>
                </div>
            </div>
        </div>

        {{if .Stats}}
        <!-- Event Distribution -->
        <div class="row mt-3">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Events by Level</div>
                    <div class="card-body">
                        <canvas id="levelChart" height="200"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Events by Log Name</div>
                    <div class="card-body">
                        <canvas id="logNameChart" height="200"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <!-- Top Event IDs -->
        <div class="row mt-3">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">Top Event IDs</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Event ID</th>
                                        <th>Count</th>
                                        <th>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {{range .Stats.TopEventIDs}}
                                    <tr>
                                        <td>{{.EventID}}</td>
                                        <td>{{.Count}}</td>
                                        <td>{{printf "%.1f" (div (float64 .Count) (float64 $.Stats.TotalEvents))}}%</td>
                                    </tr>
                                    {{end}}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{end}}

        <!-- Login Statistics -->
        {{if .Stats.LoginStats}}
        <div class="row mt-3">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">Login Statistics</div>
                    <div class="card-body">
                        <table class="table table-sm">
                            <tr><td>Successful Logins</td><td class="text-success">{{.Stats.LoginStats.Successful}}</td></tr>
                            <tr><td>Failed Logins</td><td class="text-danger">{{.Stats.LoginStats.Failed}}</td></tr>
                            <tr><td>Total Login Events</td><td>{{.Stats.LoginStats.Total}}</td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        {{end}}

        <!-- Top Alerts -->
        {{if .TopAlerts}}
        <div class="row mt-3">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">Top Alerts</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Rule</th>
                                        <th>Severity</th>
                                        <th>Message</th>
                                        <th>Count</th>
                                        <th>Last Seen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {{range .TopAlerts}}
                                    <tr>
                                        <td>{{.ID}}</td>
                                        <td>{{.RuleName}}</td>
                                        <td><span class="badge badge-{{.Severity}}">{{.Severity}}</span></td>
                                        <td>{{.Message}}</td>
                                        <td>{{.Count}}</td>
                                        <td>{{.LastSeen.Format "2006-01-02 15:04"}}</td>
                                    </tr>
                                    {{end}}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{end}}

        <!-- IOCs -->
        {{if .IOCs}}
        <div class="row mt-3">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">IP Addresses</div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            {{range .IOCs.IPAddresses}}<li><code>{{.}}</code></li>{{end}}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">Users</div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            {{range .IOCs.Users}}<li><code>{{.}}</code></li>{{end}}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">Computers</div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            {{range .IOCs.Computers}}<li><code>{{.}}</code></li>{{end}}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {{end}}

        <!-- MITRE ATT&CK -->
        {{if .MITREDist}}
        <div class="row mt-3">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">MITRE ATT&CK by Tactic</div>
                    <div class="card-body">
                        <table class="table table-sm">
                            <thead><tr><th>Tactic</th><th>Count</th></tr></thead>
                            <tbody>
                                {{range $tactic, $count := .MITREDist.ByTactic}}
                                <tr><td>{{$tactic}}</td><td>{{$count}}</td></tr>
                                {{end}}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">MITRE ATT&CK by Technique</div>
                    <div class="card-body">
                        <table class="table table-sm">
                            <thead><tr><th>Technique</th><th>Count</th></tr></thead>
                            <tbody>
                                {{range $tech, $count := .MITREDist.ByTechnique}}
                                <tr><td><code>{{$tech}}</code></td><td>{{$count}}</td></tr>
                                {{end}}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        {{end}}

        <!-- Footer -->
        <footer class="mt-5 text-center text-muted">
            <p>WinLogAnalyzer v{{.Version}} | Windows Security Log Analysis Report</p>
        </footer>
    </div>

    {{if .Stats}}
    <script>
        // Level Distribution Chart
        const levelCtx = document.getElementById('levelChart').getContext('2d');
        new Chart(levelCtx, {
            type: 'doughnut',
            data: {
                labels: Object.keys({{.Stats.EventDistribution.ByLevel}}),
                datasets: [{
                    data: Object.values({{.Stats.EventDistribution.ByLevel}}),
                    backgroundColor: ['#dc3545', '#fd7e14', '#ffc107', '#0dcaf0', '#6c757d']
                }]
            }
        });

        // Log Name Distribution Chart
        const logCtx = document.getElementById('logNameChart').getContext('2d');
        const logNames = Object.keys({{.Stats.EventDistribution.ByLogName}});
        const logCounts = Object.values({{.Stats.EventDistribution.ByLogName}});
        new Chart(logCtx, {
            type: 'bar',
            data: {
                labels: logNames.slice(0, 10),
                datasets: [{
                    label: 'Events',
                    data: logCounts.slice(0, 10),
                    backgroundColor: '#3498db'
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: { legend: { display: false } }
            }
        });
    </script>
    {{end}}
</body>
</html>`
}

func createFile(filename string) (*fileWriter, error) {
	return &fileWriter{filename: filename}, nil
}

type fileWriter struct {
	filename string
	content  []byte
}

func (f *fileWriter) Write(p []byte) (n int, err error) {
	f.content = append(f.content, p...)
	return len(p), nil
}

func (f *fileWriter) Close() error {
	return nil
}
