package api

import (
	"net/http"
	"regexp"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type QueryHandler struct {
	db *storage.DB
}

type QueryRequest struct {
	SQL    string `json:"sql" binding:"required"`
	Limit  int    `json:"limit"`
	Offset int    `json:"offset"`
}

type QueryResponse struct {
	Columns []string                 `json:"columns"`
	Rows    []map[string]interface{} `json:"rows"`
	Count   int                      `json:"count"`
	Total   int                      `json:"total"`
}

var sqlForbiddenPatterns = []*regexp.Regexp{
	regexp.MustCompile(`(?i)\b(DROP|DELETE|TRUNCATE|ALTER)\s+(TABLE|DATABASE)`),
	regexp.MustCompile(`(?i)\b(INSERT\s+INTO|REPLACE\s+INTO)\s+\w+\s+\(SELECT`),
	regexp.MustCompile(`(?i)\b(EXEC|EXECUTE)\s*\(`),
	regexp.MustCompile(`(?i)\b(PRAGMA|SHELL)\s*\(`),
	regexp.MustCompile(`(?i)--`),
	regexp.MustCompile(`(?i)/\*.*\*/`),
	regexp.MustCompile(`(?i)\b(GRANT|REVOKE|DENY)\s`),
	regexp.MustCompile(`(?i)\b(CREATE\s+INDEX|DROP\s+INDEX)\s`),
}

var sqlAllowedPrefixes = map[string]bool{
	"SELECT":  true,
	"PRAGMA":  true,
	"EXPLAIN": true,
	"WITH":    true,
}

func NewQueryHandler(db *storage.DB) *QueryHandler {
	return &QueryHandler{db: db}
}

func validateSQL(sql string) error {
	sql = strings.TrimSpace(sql)

	if sql == "" {
		return types.NewValidationError("sql", "sql field is required", nil)
	}

	if len(sql) > 10000 {
		return types.NewValidationError("sql", "sql statement too long (max 10000 chars)", nil)
	}

	normalizedSQL := strings.ToUpper(sql)
	hasValidPrefix := false
	for prefix := range sqlAllowedPrefixes {
		if strings.HasPrefix(normalizedSQL, prefix) {
			hasValidPrefix = true
			break
		}
	}

	if !hasValidPrefix {
		return types.NewValidationError("sql", "only SELECT, PRAGMA, EXPLAIN, WITH queries are allowed", nil)
	}

	for _, pattern := range sqlForbiddenPatterns {
		if pattern.MatchString(sql) {
			return types.NewValidationError("sql", "forbidden SQL pattern detected", nil)
		}
	}

	if strings.Count(sql, "'")%2 != 0 || strings.Count(sql, "\"")%2 != 0 {
		return types.NewValidationError("sql", "unclosed string literal", nil)
	}

	return nil
}

func (h *QueryHandler) Execute(c *gin.Context) {
	var req QueryRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "sql query is required",
			Code:  types.ErrCodeInvalidRequest,
		})
		return
	}

	if err := validateSQL(req.SQL); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: err.Error(),
			Code:  types.ErrCodeInvalidQuery,
		})
		return
	}

	if req.Limit <= 0 {
		req.Limit = 100
	}
	if req.Limit > 1000 {
		req.Limit = 1000
	}

	rows, err := h.db.Query(req.SQL)
	if err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "query failed: " + err.Error(),
			Code:  types.ErrCodeInvalidQuery,
		})
		return
	}
	defer rows.Close()

	columns, err := rows.Columns()
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "failed to get columns: " + err.Error(),
			Code:  types.ErrCodeInternalError,
		})
		return
	}

	var results []map[string]interface{}
	for rows.Next() {
		values := make([]interface{}, len(columns))
		valuePtrs := make([]interface{}, len(columns))
		for i := range values {
			valuePtrs[i] = &values[i]
		}

		if err := rows.Scan(valuePtrs...); err != nil {
			continue
		}

		row := make(map[string]interface{})
		for i, col := range columns {
			val := values[i]
			if b, ok := val.([]byte); ok {
				row[col] = string(b)
			} else {
				row[col] = val
			}
		}
		results = append(results, row)

		if len(results) >= req.Limit {
			break
		}
	}

	if results == nil {
		results = []map[string]interface{}{}
	}

	c.JSON(http.StatusOK, QueryResponse{
		Columns: columns,
		Rows:    results,
		Count:   len(results),
		Total:   len(results),
	})
}

func SetupQueryRoutes(r *gin.Engine, h *QueryHandler) {
	query := r.Group("/api/query")
	{
		query.POST("/execute", h.Execute)
		query.GET("/tables", h.ListTables)
		query.GET("/quick-queries", h.ListQuickQueries)
		query.GET("/quick-query/:name", h.GetQuickQuery)
	}
}

type TableInfo struct {
	Name    string       `json:"name"`
	Columns []ColumnInfo `json:"columns"`
	Count   int64        `json:"count"`
}

type ColumnInfo struct {
	Name    string `json:"name"`
	Type    string `json:"type"`
	NotNull bool   `json:"not_null"`
}

type QuickQuery struct {
	Name        string `json:"name"`
	Category    string `json:"category"`
	Description string `json:"description"`
	SQL         string `json:"sql"`
	Table       string `json:"table"`
}

var quickQueries = []QuickQuery{
	{
		Name:        "recent_events",
		Category:    "Events",
		Description: "Latest 100 events ordered by timestamp",
		SQL:         "SELECT * FROM events ORDER BY timestamp DESC LIMIT 100",
		Table:       "events",
	},
	{
		Name:        "events_by_level",
		Category:    "Events",
		Description: "Event count by level",
		SQL:         "SELECT level, COUNT(*) as count FROM events GROUP BY level ORDER BY count DESC",
		Table:       "events",
	},
	{
		Name:        "events_by_source",
		Category:    "Events",
		Description: "Event count by source",
		SQL:         "SELECT source, COUNT(*) as count FROM events GROUP BY source ORDER BY count DESC LIMIT 50",
		Table:       "events",
	},
	{
		Name:        "critical_alerts",
		Category:    "Alerts",
		Description: "Unresolved critical and high severity alerts",
		SQL:         "SELECT * FROM alerts WHERE severity IN ('critical', 'high') AND resolved = 0 ORDER BY first_seen DESC",
		Table:       "alerts",
	},
	{
		Name:        "recent_alerts",
		Category:    "Alerts",
		Description: "Latest 50 alerts",
		SQL:         "SELECT * FROM alerts ORDER BY first_seen DESC LIMIT 50",
		Table:       "alerts",
	},
	{
		Name:        "unresolved_alerts",
		Category:    "Alerts",
		Description: "All unresolved alerts",
		SQL:         "SELECT * FROM alerts WHERE resolved = 0 ORDER BY severity DESC, first_seen DESC",
		Table:       "alerts",
	},
	{
		Name:        "alerts_by_rule",
		Category:    "Alerts",
		Description: "Alert count grouped by rule",
		SQL:         "SELECT rule_name, severity, COUNT(*) as count, MAX(first_seen) as last_seen FROM alerts GROUP BY rule_name, severity ORDER BY count DESC",
		Table:       "alerts",
	},
	{
		Name:        "recent_processes",
		Category:    "Live Monitoring",
		Description: "Latest process snapshot",
		SQL:         "SELECT pid, name, username, command_line, memory_mb, cpu_percent, collected_at FROM processes ORDER BY collected_at DESC LIMIT 100",
		Table:       "processes",
	},
	{
		Name:        "top_processes_memory",
		Category:    "Live Monitoring",
		Description: "Top processes by memory usage",
		SQL:         "SELECT name, COUNT(*) as count, AVG(memory_mb) as avg_memory FROM processes GROUP BY name HAVING avg_memory > 50 ORDER BY avg_memory DESC LIMIT 20",
		Table:       "processes",
	},
	{
		Name:        "process_by_user",
		Category:    "Live Monitoring",
		Description: "Process count by username",
		SQL:         "SELECT username, COUNT(*) as count FROM processes WHERE username != '' GROUP BY username ORDER BY count DESC",
		Table:       "processes",
	},
	{
		Name:        "recent_network",
		Category:    "Live Monitoring",
		Description: "Latest network connections",
		SQL:         "SELECT pid, process_name, protocol, local_addr, local_port, remote_addr, remote_port, state, collected_at FROM network_connections ORDER BY collected_at DESC LIMIT 100",
		Table:       "network_connections",
	},
	{
		Name:        "listening_ports",
		Category:    "Live Monitoring",
		Description: "Processes listening on ports",
		SQL:         "SELECT DISTINCT process_name, protocol, local_addr, local_port FROM network_connections WHERE state = 'LISTEN' ORDER BY local_port",
		Table:       "network_connections",
	},
	{
		Name:        "established_connections",
		Category:    "Live Monitoring",
		Description: "Current established connections",
		SQL:         "SELECT * FROM network_connections WHERE state = 'ESTABLISHED' ORDER BY collected_at DESC",
		Table:       "network_connections",
	},
	{
		Name:        "network_by_protocol",
		Category:    "Live Monitoring",
		Description: "Network connections by protocol",
		SQL:         "SELECT protocol, COUNT(*) as count FROM network_connections GROUP BY protocol",
		Table:       "network_connections",
	},
	{
		Name:        "latest_system_snapshot",
		Category:    "System Info",
		Description: "Most recent system info snapshot",
		SQL:         "SELECT hostname, os_name, os_version, architecture, cpu_count, cpu_model, memory_total_gb, memory_free_gb, disk_total_gb, disk_free_gb, is_admin, uptime_seconds, collected_at FROM system_info ORDER BY collected_at DESC LIMIT 1",
		Table:       "system_info",
	},
	{
		Name:        "system_uptime_history",
		Category:    "System Info",
		Description: "System uptime history",
		SQL:         "SELECT hostname, uptime_seconds, memory_free_gb, disk_free_gb, collected_at FROM system_info ORDER BY collected_at DESC LIMIT 24",
		Table:       "system_info",
	},
	{
		Name:        "recent_imports",
		Category:    "Import Log",
		Description: "Recent import operations",
		SQL:         "SELECT file_path, events_count, import_time, import_duration, status FROM import_log ORDER BY import_time DESC LIMIT 20",
		Table:       "import_log",
	},
	{
		Name:        "import_stats",
		Category:    "Import Log",
		Description: "Import statistics",
		SQL:         "SELECT status, COUNT(*) as count, SUM(events_count) as total_events, AVG(import_duration) as avg_duration FROM import_log GROUP BY status",
		Table:       "import_log",
	},
	{
		Name:        "active_suppress_rules",
		Category:    "Suppress Rules",
		Description: "Active suppression rules",
		SQL:         "SELECT name, conditions, duration, scope, expires_at FROM suppress_rules WHERE enabled = 1 ORDER BY created_at DESC",
		Table:       "suppress_rules",
	},
	{
		Name:        "persistence_detections",
		Category:    "Persistence",
		Description: "All persistence detections",
		SQL:         "SELECT id, detection_id, technique, category, severity, title, description, is_true_positive, created_at FROM persistence_detections ORDER BY created_at DESC",
		Table:       "persistence_detections",
	},
}

func (h *QueryHandler) ListTables(c *gin.Context) {
	tables := []string{
		"events",
		"alerts",
		"processes",
		"network_connections",
		"system_info",
		"import_log",
		"suppress_rules",
		"persistence_detections",
		"reports",
		"rule_states",
	}

	result := make([]TableInfo, 0)
	for _, table := range tables {
		var count int64
		h.db.QueryRow("SELECT COUNT(*) FROM " + table).Scan(&count)

		var cols []ColumnInfo
		rows, err := h.db.Query("PRAGMA table_info(" + table + ")")
		if err == nil {
			for rows.Next() {
				var ci ColumnInfo
				var cid int
				var ctype, cname string
				var cnotnull, cpk int
				var cdefault interface{}
				rows.Scan(&cid, &cname, &ctype, &cnotnull, &cdefault, &cpk)
				ci.Name = cname
				ci.Type = ctype
				ci.NotNull = cnotnull == 1
				cols = append(cols, ci)
			}
			rows.Close()
		}

		result = append(result, TableInfo{
			Name:    table,
			Columns: cols,
			Count:   count,
		})
	}

	c.JSON(http.StatusOK, result)
}

func (h *QueryHandler) ListQuickQueries(c *gin.Context) {
	category := c.Query("category")

	if category == "" {
		c.JSON(http.StatusOK, quickQueries)
		return
	}

	filtered := make([]QuickQuery, 0)
	for _, q := range quickQueries {
		if q.Category == category {
			filtered = append(filtered, q)
		}
	}
	c.JSON(http.StatusOK, filtered)
}

func (h *QueryHandler) GetQuickQuery(c *gin.Context) {
	name := c.Param("name")

	for _, q := range quickQueries {
		if q.Name == name {
			c.JSON(http.StatusOK, q)
			return
		}
	}

	c.JSON(http.StatusNotFound, ErrorResponse{
		Error: "quick query not found: " + name,
		Code:  types.ErrCodeNotFound,
	})
}
