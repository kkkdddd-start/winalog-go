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
		return types.NewValidationError("sql", "sql query is required", nil)
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
	}
}
