package alerts

import (
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/rules"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type SuppressCache struct {
	rules []*types.SuppressRule
}

func NewSuppressCache() *SuppressCache {
	return &SuppressCache{
		rules: make([]*types.SuppressRule, 0),
	}
}

func (c *SuppressCache) Add(rule *types.SuppressRule) {
	c.rules = append(c.rules, rule)
}

func (c *SuppressCache) IsSuppressed(rule *rules.AlertRule, event *types.Event) bool {
	for _, suppress := range c.rules {
		if !suppress.Enabled {
			continue
		}

		if suppress.Name != "" && suppress.Name != rule.Name {
			continue
		}

		if c.matchesConditions(suppress.Conditions, event) {
			return true
		}

		if c.matchesTimeWindow(suppress, event) {
			return true
		}
	}

	return false
}

func (c *SuppressCache) matchesConditions(conds []types.SuppressCondition, event *types.Event) bool {
	if len(conds) == 0 {
		return false
	}

	for _, cond := range conds {
		field := strings.ToLower(cond.Field)
		value := cond.Value

		var match bool
		switch field {
		case "source":
			match = event.Source == value
		case "log_name":
			match = event.LogName == value
		case "computer":
			match = event.Computer == value
		case "user":
			var userStr string
			if event.User != nil {
				userStr = *event.User
			}
			match = userStr == value
		case "user_sid":
			if event.UserSID != nil {
				match = *event.UserSID == value
			}
		case "ip_address":
			if event.IPAddress != nil {
				match = *event.IPAddress == value
			}
		default:
			match = false
		}

		if match {
			return true
		}
	}

	return false
}

func (c *SuppressCache) matchesTimeWindow(rule *types.SuppressRule, event *types.Event) bool {
	if rule.Duration <= 0 {
		return false
	}

	if !rule.ExpiresAt.IsZero() {
		now := time.Now()
		if now.After(rule.ExpiresAt) {
			return false
		}
	}

	return true
}

func (c *SuppressCache) Remove(ruleName string) {
	newRules := make([]*types.SuppressRule, 0)
	for _, rule := range c.rules {
		if rule.Name != ruleName {
			newRules = append(newRules, rule)
		}
	}
	c.rules = newRules
}

func (c *SuppressCache) Clear() {
	c.rules = make([]*types.SuppressRule, 0)
}

func (c *SuppressCache) List() []*types.SuppressRule {
	return c.rules
}

func (c *SuppressCache) Update(rule *types.SuppressRule) {
	for i, r := range c.rules {
		if r.Name == rule.Name {
			c.rules[i] = rule
			return
		}
	}
	c.Add(rule)
}
