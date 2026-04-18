package api

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/alerts"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type SuppressHandler struct {
	db          *storage.DB
	alertEngine *alerts.Engine
}

type SuppressRuleRequest struct {
	Name       string                 `json:"name" binding:"required"`
	Conditions []SuppressConditionReq `json:"conditions"`
	Duration   int                    `json:"duration"`
	Scope      string                 `json:"scope"`
	Enabled    bool                   `json:"enabled"`
	ExpiresAt  string                 `json:"expires_at"`
}

type SuppressConditionReq struct {
	Field    string      `json:"field" binding:"required"`
	Operator string      `json:"operator" binding:"required"`
	Value    interface{} `json:"value" binding:"required"`
}

type SuppressRuleResponse struct {
	ID         int64                     `json:"id"`
	Name       string                    `json:"name"`
	Conditions []types.SuppressCondition `json:"conditions"`
	Duration   int                       `json:"duration"`
	Scope      string                    `json:"scope"`
	Enabled    bool                      `json:"enabled"`
	ExpiresAt  string                    `json:"expires_at"`
	CreatedAt  string                    `json:"created_at"`
}

func NewSuppressHandler(db *storage.DB, alertEngine *alerts.Engine) *SuppressHandler {
	return &SuppressHandler{db: db, alertEngine: alertEngine}
}

func (h *SuppressHandler) ListSuppressRules(c *gin.Context) {
	rows, err := h.db.Query(`
		SELECT id, name, conditions, duration, scope, enabled, expires_at, created_at
		FROM suppress_rules
		ORDER BY created_at DESC
	`)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}
	defer rows.Close()

	rules := make([]SuppressRuleResponse, 0)
	for rows.Next() {
		var r SuppressRuleResponse
		var conditionsJSON string
		var expiresAt, createdAt sql.NullString

		if err := rows.Scan(&r.ID, &r.Name, &conditionsJSON, &r.Duration, &r.Scope, &r.Enabled, &expiresAt, &createdAt); err != nil {
			continue
		}

		if conditionsJSON != "" {
			parseConditions(conditionsJSON, &r.Conditions)
		}
		r.ExpiresAt = expiresAt.String
		r.CreatedAt = createdAt.String

		rules = append(rules, r)
	}

	c.JSON(http.StatusOK, gin.H{
		"rules": rules,
		"total": len(rules),
	})
}

func (h *SuppressHandler) CreateSuppressRule(c *gin.Context) {
	var req SuppressRuleRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{Error: err.Error()})
		return
	}

	if req.Scope == "" {
		req.Scope = "global"
	}

	conditionsJSON := serializeConditions(req.Conditions)

	var expiresAt interface{}
	if req.ExpiresAt != "" {
		expiresAt = req.ExpiresAt
	}

	now := time.Now()
	result, err := h.db.Exec(`
		INSERT INTO suppress_rules (name, conditions, duration, scope, enabled, expires_at, created_at)
		VALUES (?, ?, ?, ?, ?, ?, ?)
	`, req.Name, conditionsJSON, req.Duration, req.Scope, req.Enabled, expiresAt, now)

	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}

	id, _ := result.LastInsertId()

	h.loadRulesToEngine()

	c.JSON(http.StatusCreated, SuppressRuleResponse{
		ID:         id,
		Name:       req.Name,
		Conditions: convertToSuppressConditions(req.Conditions),
		Duration:   req.Duration,
		Scope:      req.Scope,
		Enabled:    req.Enabled,
		ExpiresAt:  req.ExpiresAt,
		CreatedAt:  now.Format(time.RFC3339),
	})
}

func (h *SuppressHandler) UpdateSuppressRule(c *gin.Context) {
	idStr := c.Param("id")
	var id int64
	if _, err := parseID(idStr, &id); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{Error: "invalid rule id"})
		return
	}

	var req SuppressRuleRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{Error: err.Error()})
		return
	}

	conditionsJSON := serializeConditions(req.Conditions)

	var expiresAt interface{}
	if req.ExpiresAt != "" {
		expiresAt = req.ExpiresAt
	}

	_, err := h.db.Exec(`
		UPDATE suppress_rules
		SET name = ?, conditions = ?, duration = ?, scope = ?, enabled = ?, expires_at = ?
		WHERE id = ?
	`, req.Name, conditionsJSON, req.Duration, req.Scope, req.Enabled, expiresAt, id)

	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}

	h.loadRulesToEngine()

	c.JSON(http.StatusOK, SuccessResponse{Message: "Suppress rule updated"})
}

func (h *SuppressHandler) DeleteSuppressRule(c *gin.Context) {
	idStr := c.Param("id")
	var id int64
	if _, err := parseID(idStr, &id); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{Error: "invalid rule id"})
		return
	}

	_, err := h.db.Exec("DELETE FROM suppress_rules WHERE id = ?", id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}

	h.loadRulesToEngine()

	c.JSON(http.StatusOK, SuccessResponse{Message: "Suppress rule deleted"})
}

func (h *SuppressHandler) ToggleSuppressRule(c *gin.Context) {
	idStr := c.Param("id")
	var id int64
	if _, err := parseID(idStr, &id); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{Error: "invalid rule id"})
		return
	}

	enabled := c.Query("enabled") == "true"

	_, err := h.db.Exec("UPDATE suppress_rules SET enabled = ? WHERE id = ?", enabled, id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}

	h.loadRulesToEngine()

	c.JSON(http.StatusOK, SuccessResponse{Message: "Suppress rule toggled"})
}

func (h *SuppressHandler) GetSuppressRule(c *gin.Context) {
	idStr := c.Param("id")
	var id int64
	if _, err := parseID(idStr, &id); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{Error: "invalid rule id"})
		return
	}

	var r SuppressRuleResponse
	var conditionsJSON string
	var expiresAt, createdAt sql.NullString

	err := h.db.QueryRow(`
		SELECT id, name, conditions, duration, scope, enabled, expires_at, created_at
		FROM suppress_rules WHERE id = ?
	`, id).Scan(&r.ID, &r.Name, &conditionsJSON, &r.Duration, &r.Scope, &r.Enabled, &expiresAt, &createdAt)

	if err != nil {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "rule not found"})
		return
	}

	if conditionsJSON != "" {
		parseConditions(conditionsJSON, &r.Conditions)
	}
	r.ExpiresAt = expiresAt.String
	r.CreatedAt = createdAt.String

	c.JSON(http.StatusOK, r)
}

func parseID(s string, id *int64) (bool, error) {
	var parsed int64
	for _, c := range s {
		if c < '0' || c > '9' {
			return false, nil
		}
		parsed = parsed*10 + int64(c-'0')
	}
	*id = parsed
	return true, nil
}

func serializeConditions(conditions []SuppressConditionReq) string {
	if len(conditions) == 0 {
		return ""
	}
	result := "["
	for i, c := range conditions {
		if i > 0 {
			result += ","
		}
		result += `{"field":"` + c.Field + `","operator":"` + c.Operator + `","value":"` + toString(c.Value) + `"}`
	}
	result += "]"
	return result
}

func parseConditions(jsonStr string, conditions *[]types.SuppressCondition) {
	if jsonStr == "" || jsonStr == "[]" {
		*conditions = []types.SuppressCondition{}
		return
	}

	type rawCondition struct {
		Field    string      `json:"field"`
		Operator string      `json:"operator"`
		Value    interface{} `json:"value"`
	}

	var raw []rawCondition
	if err := json.Unmarshal([]byte(jsonStr), &raw); err != nil {
		*conditions = []types.SuppressCondition{}
		return
	}

	*conditions = make([]types.SuppressCondition, len(raw))
	for i, r := range raw {
		(*conditions)[i] = types.SuppressCondition{
			Field:    r.Field,
			Operator: r.Operator,
			Value:    r.Value,
		}
	}
}

func convertToSuppressConditions(req []SuppressConditionReq) []types.SuppressCondition {
	result := make([]types.SuppressCondition, len(req))
	for i, c := range req {
		result[i] = types.SuppressCondition{
			Field:    c.Field,
			Operator: c.Operator,
			Value:    c.Value,
		}
	}
	return result
}

func parseConditionsToSuppress(jsonStr string) []types.SuppressCondition {
	result := make([]types.SuppressCondition, 0)
	start := 0
	for start < len(jsonStr) {
		objStart := strings.Index(jsonStr[start:], "{")
		if objStart == -1 {
			break
		}
		start += objStart
		objEnd := strings.Index(jsonStr[start:], "}")
		if objEnd == -1 {
			break
		}
		objEnd += start + 1
		objStr := jsonStr[start+1 : objEnd-1]

		var field, operator, value string
		for _, part := range strings.Split(objStr, ",") {
			part = strings.TrimSpace(part)
			if strings.HasPrefix(part, `"field"`) {
				parts := strings.Split(part, `":"`)
				if len(parts) == 2 {
					field = strings.TrimSuffix(parts[1], `"`)
				}
			}
			if strings.HasPrefix(part, `"operator"`) {
				parts := strings.Split(part, `":"`)
				if len(parts) == 2 {
					operator = strings.TrimSuffix(parts[1], `"`)
				}
			}
			if strings.HasPrefix(part, `"value"`) {
				parts := strings.Split(part, `":"`)
				if len(parts) == 2 {
					value = strings.TrimSuffix(parts[1], `"`)
				}
			}
		}
		if field != "" {
			result = append(result, types.SuppressCondition{
				Field:    field,
				Operator: operator,
				Value:    value,
			})
		}
		start = objEnd
	}
	return result
}

func toString(v interface{}) string {
	switch val := v.(type) {
	case string:
		return val
	default:
		return ""
	}
}

func (h *SuppressHandler) loadRulesToEngine() {
	if h.alertEngine == nil {
		return
	}
	h.alertEngine.ClearSuppressions()

	rows, err := h.db.Query(`
		SELECT id, name, conditions, duration, scope, enabled, expires_at, created_at
		FROM suppress_rules
		WHERE enabled = 1
	`)
	if err != nil {
		return
	}
	defer rows.Close()

	for rows.Next() {
		var id int64
		var name, conditionsJSON, scope string
		var expiresAt, createdAt sql.NullString
		var duration int
		var enabled bool

		if err := rows.Scan(&id, &name, &conditionsJSON, &duration, &scope, &enabled, &expiresAt, &createdAt); err != nil {
			continue
		}

		if !enabled {
			continue
		}

		rule := &types.SuppressRule{
			Name:     name,
			Duration: time.Duration(duration) * time.Minute,
			Scope:    scope,
			Enabled:  enabled,
		}

		if expiresAt.Valid && expiresAt.String != "" {
			if t, err := time.Parse(time.RFC3339, expiresAt.String); err == nil {
				rule.ExpiresAt = t
			}
		}

		if conditionsJSON != "" && conditionsJSON != "[]" {
			rule.Conditions = parseConditionsToSuppress(conditionsJSON)
		}

		h.alertEngine.AddSuppressRule(rule)
	}
}

func SetupSuppressRoutes(r *gin.Engine, suppressHandler *SuppressHandler) {
	suppress := r.Group("/api/suppress")
	{
		suppress.GET("", suppressHandler.ListSuppressRules)
		suppress.POST("", suppressHandler.CreateSuppressRule)
		suppress.GET("/:id", suppressHandler.GetSuppressRule)
		suppress.PUT("/:id", suppressHandler.UpdateSuppressRule)
		suppress.DELETE("/:id", suppressHandler.DeleteSuppressRule)
		suppress.POST("/:id/toggle", suppressHandler.ToggleSuppressRule)
	}
}
