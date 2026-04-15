package api

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/rules/builtin"
	"github.com/kkkdddd-start/winalog-go/internal/types"
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

type ValidateRuleRequest struct {
	Rule    RuleInfo `json:"rule"`
	Content string   `json:"content"`
}

type ValidateRuleResponse struct {
	Valid    bool     `json:"valid"`
	Errors   []string `json:"errors,omitempty"`
	Warnings []string `json:"warnings,omitempty"`
}

func (h *RulesHandler) ValidateRule(c *gin.Context) {
	var req ValidateRuleRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: err.Error(),
			Code:  ErrCodeInvalidRequest,
		})
		return
	}

	errors := []string{}
	warnings := []string{}

	if req.Content != "" {
		req.Rule.Description = req.Content
	}

	if req.Rule.Name == "" {
		errors = append(errors, "Rule name is required")
	}

	if req.Rule.Severity == "" {
		warnings = append(warnings, "Severity not specified, defaulting to 'medium'")
	} else if !isValidSeverity(req.Rule.Severity) {
		errors = append(errors, "Invalid severity: "+req.Rule.Severity+". Must be one of: critical, high, medium, low, info")
	}

	if req.Rule.Score < 0 || req.Rule.Score > 100 {
		errors = append(errors, "Score must be between 0 and 100")
	}

	for _, mitre := range req.Rule.MitreAttack {
		if !isValidMITRE(mitre) {
			warnings = append(warnings, "Unknown MITRE ATT&CK ID: "+mitre)
		}
	}

	c.JSON(http.StatusOK, ValidateRuleResponse{
		Valid:    len(errors) == 0,
		Errors:   errors,
		Warnings: warnings,
	})
}

func isValidSeverity(s string) bool {
	validSeverities := []string{"critical", "high", "medium", "low", "info"}
	for _, v := range validSeverities {
		if s == v {
			return true
		}
	}
	return false
}

func isValidMITRE(m string) bool {
	if len(m) < 5 {
		return false
	}
	if m[:4] != "T" {
		return false
	}
	return true
}

type ImportRulesRequest struct {
	Rules []RuleInfo `json:"rules"`
}

type ImportRulesResponse struct {
	Imported int      `json:"imported"`
	Failed   int      `json:"failed"`
	Errors   []string `json:"errors,omitempty"`
}

func (h *RulesHandler) ImportRules(c *gin.Context) {
	var req ImportRulesRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: err.Error(),
			Code:  ErrCodeInvalidRequest,
		})
		return
	}

	imported := 0
	failed := 0
	errors := []string{}

	for _, rule := range req.Rules {
		if rule.Name == "" {
			errors = append(errors, "Rule without name skipped")
			failed++
			continue
		}

		alertRules := builtin.GetAlertRules()
		found := false
		for _, existing := range alertRules {
			if existing.Name == rule.Name {
				existing.Description = rule.Description
				existing.Severity = types.Severity(rule.Severity)
				existing.Score = rule.Score
				existing.Enabled = rule.Enabled
				if len(rule.MitreAttack) > 0 {
					existing.MitreAttack = rule.MitreAttack[0]
				}
				found = true
				break
			}
		}

		if found {
			imported++
		} else {
			errors = append(errors, "Rule not found for update: "+rule.Name)
			failed++
		}
	}

	c.JSON(http.StatusOK, ImportRulesResponse{
		Imported: imported,
		Failed:   failed,
		Errors:   errors,
	})
}

func (h *RulesHandler) ExportRules(c *gin.Context) {
	format := c.DefaultQuery("format", "json")

	alertRules := builtin.GetAlertRules()
	rulesList := make([]RuleInfo, 0, len(alertRules))

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
	}

	if format == "yaml" || format == "yml" {
		c.Header("Content-Disposition", "attachment; filename=rules_export.yaml")
		c.Header("Content-Type", "text/yaml")
		yamlContent := "# WinLogAnalyzer Rules Export\n# Generated: " + time.Now().Format(time.RFC3339) + "\n\n"
		for _, rule := range rulesList {
			yamlContent += fmt.Sprintf("- name: %s\n  description: %s\n  severity: %s\n  enabled: %v\n  score: %.1f\n",
				rule.Name, rule.Description, rule.Severity, rule.Enabled, rule.Score)
			if len(rule.MitreAttack) > 0 {
				yamlContent += fmt.Sprintf("  mitre_attack:\n")
				for _, m := range rule.MitreAttack {
					yamlContent += fmt.Sprintf("    - %s\n", m)
				}
			}
			yamlContent += "\n"
		}
		c.String(http.StatusOK, yamlContent)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"rules":       rulesList,
		"total":       len(rulesList),
		"exported_at": time.Now().Format(time.RFC3339),
	})
}

func SetupRulesRoutes(r *gin.Engine, rulesHandler *RulesHandler) {
	rulesGroup := r.Group("/api/rules")
	{
		rulesGroup.GET("", rulesHandler.ListRules)
		rulesGroup.GET("/:name", rulesHandler.GetRule)
		rulesGroup.POST("/:name/toggle", rulesHandler.ToggleRule)
		rulesGroup.POST("/validate", rulesHandler.ValidateRule)
		rulesGroup.POST("/import", rulesHandler.ImportRules)
		rulesGroup.GET("/export", rulesHandler.ExportRules)
	}
}
