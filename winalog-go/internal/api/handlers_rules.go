package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/rules/builtin"
)

type RulesHandler struct{}

type RuleInfo struct {
	ID          string   `json:"id"`
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Enabled     bool     `json:"enabled"`
	Severity    string   `json:"severity"`
	Score       float64  `json:"score"`
	MitreAttack []string `json:"mitre_attack"`
	Tags        []string `json:"tags"`
}

type RulesListResponse struct {
	Rules        []RuleInfo `json:"rules"`
	TotalCount   int        `json:"total_count"`
	EnabledCount int        `json:"enabled_count"`
}

func NewRulesHandler() *RulesHandler {
	return &RulesHandler{}
}

func (h *RulesHandler) ListRules(c *gin.Context) {
	alertRules := builtin.GetAlertRules()

	rulesList := make([]RuleInfo, 0, len(alertRules))
	enabledCount := 0

	for _, rule := range alertRules {
		ruleInfo := RuleInfo{
			ID:          rule.Name,
			Name:        rule.Name,
			Description: rule.Description,
			Enabled:     rule.Enabled,
			Severity:    string(rule.Severity),
			Score:       rule.Score,
			MitreAttack: []string{},
			Tags:        rule.Tags,
		}
		if rule.MitreAttack != "" {
			ruleInfo.MitreAttack = []string{rule.MitreAttack}
		}
		rulesList = append(rulesList, ruleInfo)
		if rule.Enabled {
			enabledCount++
		}
	}

	c.JSON(http.StatusOK, RulesListResponse{
		Rules:        rulesList,
		TotalCount:   len(rulesList),
		EnabledCount: enabledCount,
	})
}

func (h *RulesHandler) GetRule(c *gin.Context) {
	name := c.Param("name")

	alertRules := builtin.GetAlertRules()
	for _, rule := range alertRules {
		if rule.Name == name {
			ruleInfo := RuleInfo{
				ID:          rule.Name,
				Name:        rule.Name,
				Description: rule.Description,
				Enabled:     rule.Enabled,
				Severity:    string(rule.Severity),
				Score:       rule.Score,
				MitreAttack: []string{},
				Tags:        rule.Tags,
			}
			if rule.MitreAttack != "" {
				ruleInfo.MitreAttack = []string{rule.MitreAttack}
			}
			c.JSON(http.StatusOK, ruleInfo)
			return
		}
	}

	c.JSON(http.StatusNotFound, ErrorResponse{
		Error: "Rule not found",
		Code:  "RULE_NOT_FOUND",
	})
}

func (h *RulesHandler) ToggleRule(c *gin.Context) {
	name := c.Param("name")
	enabled := c.Query("enabled") == "true"

	alertRules := builtin.GetAlertRules()
	found := false
	for _, rule := range alertRules {
		if rule.Name == name {
			rule.Enabled = enabled
			found = true
			break
		}
	}

	if !found {
		c.JSON(http.StatusNotFound, ErrorResponse{
			Error: "Rule not found",
			Code:  "RULE_NOT_FOUND",
		})
		return
	}

	c.JSON(http.StatusOK, SuccessResponse{
		Message: "Rule " + name + " " + map[bool]string{true: "enabled", false: "disabled"}[enabled],
	})
}

func SetupRulesRoutes(r *gin.Engine, rulesHandler *RulesHandler) {
	rulesGroup := r.Group("/api/rules")
	{
		rulesGroup.GET("", rulesHandler.ListRules)
		rulesGroup.GET("/:name", rulesHandler.GetRule)
		rulesGroup.POST("/:name/toggle", rulesHandler.ToggleRule)
	}
}
