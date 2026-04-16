package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
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

func NewQueryHandler(db *storage.DB) *QueryHandler {
	return &QueryHandler{db: db}
}

func (h *QueryHandler) Execute(c *gin.Context) {
	var req QueryRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "sql query is required",
			Code:  ErrCodeInvalidRequest,
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
			Code:  ErrCodeInvalidRequest,
		})
		return
	}
	defer rows.Close()

	columns, err := rows.Columns()
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "failed to get columns: " + err.Error(),
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
