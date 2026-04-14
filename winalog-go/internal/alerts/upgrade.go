package alerts

import (
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type AlertUpgradeCache struct {
	rules []*types.AlertUpgradeRule
}

func NewAlertUpgradeCache() *AlertUpgradeCache {
	return &AlertUpgradeCache{
		rules: make([]*types.AlertUpgradeRule, 0),
	}
}

func (c *AlertUpgradeCache) Add(rule *types.AlertUpgradeRule) {
	c.rules = append(c.rules, rule)
}

func (c *AlertUpgradeCache) Check(alert *types.Alert) (bool, *types.AlertUpgradeRule) {
	for _, rule := range c.rules {
		if c.matches(rule, alert) {
			return true, rule
		}
	}
	return false, nil
}

func (c *AlertUpgradeCache) matches(rule *types.AlertUpgradeRule, alert *types.Alert) bool {
	if rule.Name != "" && rule.Name != alert.RuleName {
		return false
	}

	if rule.NewSeverity != "" && rule.NewSeverity != alert.Severity {
		return false
	}

	if rule.Threshold > 0 && alert.Count < rule.Threshold {
		return false
	}

	return true
}

func (c *AlertUpgradeCache) Remove(ruleName string) {
	newRules := make([]*types.AlertUpgradeRule, 0)
	for _, rule := range c.rules {
		if rule.Name != ruleName {
			newRules = append(newRules, rule)
		}
	}
	c.rules = newRules
}

func (c *AlertUpgradeCache) Clear() {
	c.rules = make([]*types.AlertUpgradeRule, 0)
}

func (c *AlertUpgradeCache) List() []*types.AlertUpgradeRule {
	return c.rules
}

func (c *AlertUpgradeCache) Update(rule *types.AlertUpgradeRule) {
	for i, r := range c.rules {
		if r.Name == rule.Name {
			c.rules[i] = rule
			return
		}
	}
	c.Add(rule)
}
