package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/alerts"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type PolicyHandler struct {
	engine *alerts.Engine
}

type PolicyTemplateRequest struct {
	Name   string            `json:"name" binding:"required"`
	Params map[string]string `json:"params"`
}

type PolicyTemplateInfo struct {
	Name         string          `json:"name"`
	Description  string          `json:"description"`
	PolicyType   string          `json:"policy_type"`
	Parameters   []ParameterInfo `json:"parameters"`
	TimeWindow   string          `json:"time_window"`
	Enabled      bool            `json:"enabled"`
	Priority     int             `json:"priority"`
	MITREMapping []string        `json:"mitre_mapping,omitempty"`
}

type ParameterInfo struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Default     string   `json:"default,omitempty"`
	Required    bool     `json:"required"`
	Type        string   `json:"type"`
	Options     []string `json:"options,omitempty"`
}

func NewPolicyHandler(engine *alerts.Engine) *PolicyHandler {
	return &PolicyHandler{engine: engine}
}

func (h *PolicyHandler) ListTemplates(c *gin.Context) {
	policyMgr := alerts.GetPolicyManager()
	templates := policyMgr.ListTemplates()

	response := make([]PolicyTemplateInfo, 0, len(templates))
	for _, t := range templates {
		params := make([]ParameterInfo, 0, len(t.Parameters))
		for _, p := range t.Parameters {
			params = append(params, ParameterInfo{
				Name:        p.Name,
				Description: p.Description,
				Default:     p.Default,
				Required:    p.Required,
				Type:        p.Type,
				Options:     p.Options,
			})
		}

		response = append(response, PolicyTemplateInfo{
			Name:         t.Name,
			Description:  t.Description,
			PolicyType:   string(t.PolicyType),
			Parameters:   params,
			TimeWindow:   t.TimeWindow.String(),
			Enabled:      t.Enabled,
			Priority:     t.Priority,
			MITREMapping: t.MITREMapping,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"templates": response,
		"total":     len(response),
	})
}

func (h *PolicyHandler) GetTemplate(c *gin.Context) {
	name := c.Param("name")

	policyMgr := alerts.GetPolicyManager()
	template, ok := policyMgr.GetTemplate(name)
	if !ok {
		c.JSON(http.StatusNotFound, ErrorResponse{
			Error: "Template not found",
			Code:  "TEMPLATE_NOT_FOUND",
		})
		return
	}

	params := make([]ParameterInfo, 0, len(template.Parameters))
	for _, p := range template.Parameters {
		params = append(params, ParameterInfo{
			Name:        p.Name,
			Description: p.Description,
			Default:     p.Default,
			Required:    p.Required,
			Type:        p.Type,
			Options:     p.Options,
		})
	}

	c.JSON(http.StatusOK, PolicyTemplateInfo{
		Name:         template.Name,
		Description:  template.Description,
		PolicyType:   string(template.PolicyType),
		Parameters:   params,
		TimeWindow:   template.TimeWindow.String(),
		Enabled:      template.Enabled,
		Priority:     template.Priority,
		MITREMapping: template.MITREMapping,
	})
}

func (h *PolicyHandler) InstantiateTemplate(c *gin.Context) {
	var req PolicyTemplateRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: err.Error(),
			Code:  types.ErrCodeInvalidRequest,
		})
		return
	}

	policyMgr := alerts.GetPolicyManager()

	_, ok := policyMgr.GetTemplate(req.Name)
	if !ok {
		c.JSON(http.StatusNotFound, ErrorResponse{
			Error: "Template not found",
			Code:  "TEMPLATE_NOT_FOUND",
		})
		return
	}

	ruleName := req.Name
	if params, ok := req.Params["rule_name"]; ok {
		ruleName = params
		delete(req.Params, "rule_name")
	}

	if h.engine != nil {
		if err := h.engine.LoadPolicyTemplate(req.Name, ruleName, req.Params); err != nil {
			c.JSON(http.StatusInternalServerError, ErrorResponse{
				Error: "Failed to load template: " + err.Error(),
				Code:  "INTERNAL_ERROR",
			})
			return
		}
	}

	instance, err := policyMgr.InstantiateTemplate(req.Name, ruleName, req.Params)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "Failed to instantiate template: " + err.Error(),
			Code:  "INTERNAL_ERROR",
		})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message":       "Template instantiated successfully",
		"template_name": instance.TemplateName,
		"rule_name":     instance.RuleName,
		"created_at":    instance.CreatedAt,
	})
}

func (h *PolicyHandler) ListInstances(c *gin.Context) {
	policyMgr := alerts.GetPolicyManager()
	instances := policyMgr.ListInstances()

	c.JSON(http.StatusOK, gin.H{
		"instances": instances,
		"total":     len(instances),
	})
}

func (h *PolicyHandler) DeleteInstance(c *gin.Context) {
	key := c.Param("key")

	policyMgr := alerts.GetPolicyManager()
	if !policyMgr.DeleteInstance(key) {
		c.JSON(http.StatusNotFound, ErrorResponse{
			Error: "Instance not found",
			Code:  "INSTANCE_NOT_FOUND",
		})
		return
	}

	c.JSON(http.StatusOK, SuccessResponse{
		Message: "Instance deleted successfully",
	})
}

func (h *PolicyHandler) ApplyTemplates(c *gin.Context) {
	if h.engine == nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "Alert engine not available",
			Code:  "ENGINE_NOT_AVAILABLE",
		})
		return
	}

	if err := h.engine.ApplyPolicyTemplates(); err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: "Failed to apply templates: " + err.Error(),
			Code:  "INTERNAL_ERROR",
		})
		return
	}

	c.JSON(http.StatusOK, SuccessResponse{
		Message: "Policy templates applied successfully",
	})
}

type CreateCustomPolicyRequest struct {
	Name         string          `json:"name" binding:"required"`
	Description  string          `json:"description"`
	PolicyType   string          `json:"policy_type" binding:"required"`
	Parameters   []ParameterInfo `json:"parameters"`
	Conditions   []ConditionInfo `json:"conditions"`
	Actions      []ActionInfo    `json:"actions"`
	TimeWindow   int             `json:"time_window"`
	Enabled      bool            `json:"enabled"`
	Priority     int             `json:"priority"`
	MITREMapping []string        `json:"mitre_mapping"`
}

type ConditionInfo struct {
	Field    string      `json:"field" binding:"required"`
	Operator string      `json:"operator" binding:"required"`
	Value    interface{} `json:"value" binding:"required"`
}

type ActionInfo struct {
	Type       string                 `json:"type" binding:"required"`
	Parameters map[string]interface{} `json:"parameters"`
}

func (h *PolicyHandler) CreateCustomPolicy(c *gin.Context) {
	var req CreateCustomPolicyRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: err.Error(),
			Code:  types.ErrCodeInvalidRequest,
		})
		return
	}

	policyMgr := alerts.GetPolicyManager()

	params := make([]alerts.PolicyParam, 0, len(req.Parameters))
	for _, p := range req.Parameters {
		params = append(params, alerts.PolicyParam{
			Name:        p.Name,
			Description: p.Description,
			Default:     p.Default,
			Required:    p.Required,
			Type:        p.Type,
			Options:     p.Options,
		})
	}

	conditions := make([]alerts.PolicyCondition, 0, len(req.Conditions))
	for _, cond := range req.Conditions {
		conditions = append(conditions, alerts.PolicyCondition{
			Field:    cond.Field,
			Operator: cond.Operator,
			Value:    cond.Value,
		})
	}

	actions := make([]alerts.PolicyAction, 0, len(req.Actions))
	for _, a := range req.Actions {
		actions = append(actions, alerts.PolicyAction{
			Type:       a.Type,
			Parameters: a.Parameters,
		})
	}

	var policyType alerts.PolicyType
	switch req.PolicyType {
	case "upgrade":
		policyType = alerts.PolicyTypeUpgrade
	case "suppress":
		policyType = alerts.PolicyTypeSuppress
	default:
		policyType = alerts.PolicyTypeUpgrade
	}

	template := &alerts.PolicyTemplate{
		Name:         req.Name,
		Description:  req.Description,
		PolicyType:   policyType,
		Parameters:   params,
		Conditions:   conditions,
		Actions:      actions,
		TimeWindow:   0,
		Enabled:      req.Enabled,
		Priority:     req.Priority,
		MITREMapping: req.MITREMapping,
	}

	if req.TimeWindow > 0 {
		template.TimeWindow = 0
	}

	if err := policyMgr.CreateCustomTemplate(template); err != nil {
		c.JSON(http.StatusConflict, ErrorResponse{
			Error: err.Error(),
			Code:  "TEMPLATE_EXISTS",
		})
		return
	}

	c.JSON(http.StatusCreated, SuccessResponse{
		Message: "Custom policy template created successfully",
	})
}

func (h *PolicyHandler) DeleteCustomPolicy(c *gin.Context) {
	name := c.Param("name")

	policyMgr := alerts.GetPolicyManager()
	if !policyMgr.DeleteTemplate(name) {
		c.JSON(http.StatusNotFound, ErrorResponse{
			Error: "Template not found",
			Code:  "TEMPLATE_NOT_FOUND",
		})
		return
	}

	c.JSON(http.StatusOK, SuccessResponse{
		Message: "Custom policy template deleted successfully",
	})
}

func SetupPolicyRoutes(r *gin.Engine, policyHandler *PolicyHandler) {
	policy := r.Group("/api/policy-templates")
	{
		policy.GET("", policyHandler.ListTemplates)
		policy.GET("/:name", policyHandler.GetTemplate)
		policy.POST("", policyHandler.InstantiateTemplate)
		policy.POST("/apply", policyHandler.ApplyTemplates)
		policy.DELETE("/:name", policyHandler.DeleteCustomPolicy)
	}

	policyInstances := r.Group("/api/policy-instances")
	{
		policyInstances.GET("", policyHandler.ListInstances)
		policyInstances.DELETE("/:key", policyHandler.DeleteInstance)
	}

	customPolicy := r.Group("/api/policies")
	{
		customPolicy.POST("", policyHandler.CreateCustomPolicy)
		customPolicy.DELETE("/:name", policyHandler.DeleteCustomPolicy)
	}
}
