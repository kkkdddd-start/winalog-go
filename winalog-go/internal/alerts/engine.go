package alerts

import (
	"context"
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/rules"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type Engine struct {
	db            *storage.DB
	alertRepo     *storage.AlertRepo
	dedup         *DedupCache
	evaluator     *Evaluator
	stats         *AlertStats
	trend         *AlertTrend
	upgradeRules  *AlertUpgradeCache
	suppressCache *SuppressCache
	mu            sync.RWMutex
	rules         map[string]*rules.AlertRule
}

type EngineConfig struct {
	DedupWindow time.Duration
	StatsWindow time.Duration
}

func NewEngine(db *storage.DB, cfg EngineConfig) *Engine {
	if cfg.DedupWindow == 0 {
		cfg.DedupWindow = 5 * time.Minute
	}
	if cfg.StatsWindow == 0 {
		cfg.StatsWindow = 24 * time.Hour
	}

	e := &Engine{
		db:            db,
		alertRepo:     storage.NewAlertRepo(db),
		dedup:         NewDedupCache(cfg.DedupWindow),
		evaluator:     NewEvaluator(),
		stats:         NewAlertStats(),
		trend:         NewAlertTrend(cfg.StatsWindow),
		upgradeRules:  NewAlertUpgradeCache(),
		suppressCache: NewSuppressCache(),
		rules:         make(map[string]*rules.AlertRule),
	}

	return e
}

func (e *Engine) LoadRules(ruleList []*rules.AlertRule) {
	e.mu.Lock()
	defer e.mu.Unlock()

	e.rules = make(map[string]*rules.AlertRule)
	for _, rule := range ruleList {
		if rule.Enabled {
			e.rules[rule.Name] = rule
		}
	}
}

func (e *Engine) AddRule(rule *rules.AlertRule) {
	e.mu.Lock()
	defer e.mu.Unlock()
	e.rules[rule.Name] = rule
}

func (e *Engine) RemoveRule(name string) {
	e.mu.Lock()
	defer e.mu.Unlock()
	delete(e.rules, name)
}

func (e *Engine) GetRules() []*rules.AlertRule {
	e.mu.RLock()
	defer e.mu.RUnlock()

	result := make([]*rules.AlertRule, 0, len(e.rules))
	for _, rule := range e.rules {
		result = append(result, rule)
	}
	return result
}

func (e *Engine) Evaluate(ctx context.Context, event *types.Event) ([]*types.Alert, error) {
	e.mu.RLock()
	rules := make([]*rules.AlertRule, 0, len(e.rules))
	for _, rule := range e.rules {
		rules = append(rules, rule)
	}
	e.mu.RUnlock()

	var alerts []*types.Alert

	for _, rule := range rules {
		select {
		case <-ctx.Done():
			return alerts, ctx.Err()
		default:
		}

		if e.suppressCache.IsSuppressed(rule, event) {
			continue
		}

		matched, err := e.evaluator.Evaluate(rule, event)
		if err != nil {
			continue
		}

		if matched {
			if e.dedup.IsDuplicate(rule.Name, event) {
				continue
			}

			alert := e.createAlert(rule, event)
			alerts = append(alerts, alert)

			e.dedup.Mark(rule.Name, event)
			e.trend.Record(alert)
		}
	}

	return alerts, nil
}

func (e *Engine) EvaluateBatch(ctx context.Context, events []*types.Event) ([]*types.Alert, error) {
	alertChan := make(chan *types.Alert, len(events))
	errChan := make(chan error, 1)
	var wg sync.WaitGroup

	e.mu.RLock()
	rules := make([]*rules.AlertRule, 0, len(e.rules))
	for _, rule := range e.rules {
		rules = append(rules, rule)
	}
	e.mu.RUnlock()

	for _, event := range events {
		wg.Add(1)
		go func(evt *types.Event) {
			defer wg.Done()

			for _, rule := range rules {
				select {
				case <-ctx.Done():
					return
				default:
				}

				if e.suppressCache.IsSuppressed(rule, evt) {
					continue
				}

				matched, err := e.evaluator.Evaluate(rule, evt)
				if err != nil || !matched {
					continue
				}

				if e.dedup.IsDuplicate(rule.Name, evt) {
					continue
				}

				alert := e.createAlert(rule, evt)
				alertChan <- alert
				e.dedup.Mark(rule.Name, evt)
				e.trend.Record(alert)
			}
		}(event)
	}

	go func() {
		wg.Wait()
		close(alertChan)
		close(errChan)
	}()

	var alerts []*types.Alert
	for alert := range alertChan {
		alerts = append(alerts, alert)
	}

	return alerts, nil
}

func (e *Engine) createAlert(rule *rules.AlertRule, event *types.Event) *types.Alert {
	now := time.Now()

	return &types.Alert{
		RuleName:    rule.Name,
		Severity:    types.Severity(rule.Severity),
		Message:     rule.BuildMessage(event),
		EventIDs:    []int32{event.EventID},
		FirstSeen:   now,
		LastSeen:    now,
		Count:       1,
		MITREAttack: []string{rule.MitreAttack},
		LogName:     event.LogName,
		RuleScore:   rule.Score,
	}
}

func (e *Engine) SaveAlert(alert *types.Alert) error {
	return e.alertRepo.Insert(alert)
}

func (e *Engine) SaveAlerts(alerts []*types.Alert) error {
	return e.alertRepo.InsertBatch(alerts)
}

func (e *Engine) GetAlert(id int64) (*types.Alert, error) {
	return e.alertRepo.GetByID(id)
}

func (e *Engine) GetAlerts(filter *storage.AlertFilter) ([]*types.Alert, error) {
	return e.alertRepo.Query(filter)
}

func (e *Engine) ResolveAlert(id int64, notes string) error {
	alert, err := e.alertRepo.GetByID(id)
	if err != nil {
		return err
	}

	alert.Resolved = true
	now := time.Now()
	alert.ResolvedTime = &now
	alert.Notes = notes

	return e.alertRepo.Update(alert)
}

func (e *Engine) DeleteAlert(id int64) error {
	return e.alertRepo.Delete(id)
}

func (e *Engine) MarkFalsePositive(id int64) error {
	alert, err := e.alertRepo.GetByID(id)
	if err != nil {
		return err
	}

	alert.FalsePositive = true
	return e.alertRepo.Update(alert)
}

func (e *Engine) GetStats() (*AlertStats, error) {
	stats, err := e.alertRepo.GetStats()
	if err != nil {
		return nil, err
	}
	e.stats.CopyFrom(stats)
	return e.stats, nil
}

func (e *Engine) GetTrends() (*AlertTrend, error) {
	return e.trend, nil
}

func (e *Engine) AddUpgradeRule(rule *types.AlertUpgradeRule) {
	e.upgradeRules.Add(rule)
}

func (e *Engine) CheckUpgrade(alert *types.Alert) (bool, *types.AlertUpgradeRule) {
	return e.upgradeRules.Check(alert)
}

func (e *Engine) AddSuppressRule(rule *types.SuppressRule) {
	e.suppressCache.Add(rule)
}

func (e *Engine) ClearSuppressions() {
	e.suppressCache.Clear()
}

func (e *Engine) ClearDedup() {
	e.dedup.Clear()
}
