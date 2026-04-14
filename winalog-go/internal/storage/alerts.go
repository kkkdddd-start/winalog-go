package storage

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type AlertRepo struct {
	db *DB
}

func NewAlertRepo(db *DB) *AlertRepo {
	return &AlertRepo{db: db}
}

func (r *AlertRepo) Insert(alert *types.Alert) error {
	query := `
		INSERT INTO alerts (rule_name, severity, message, event_ids, first_seen, last_seen, count, mitre_attack, resolved, resolved_time, notes, false_positive, log_name, rule_score)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

	eventIDsJSON, _ := json.Marshal(alert.EventIDs)
	mitreJSON, _ := json.Marshal(alert.MITREAttack)

	var resolvedTime interface{}
	if alert.ResolvedTime != nil {
		resolvedTime = alert.ResolvedTime
	}

	_, err := r.db.Exec(query,
		alert.RuleName,
		alert.Severity,
		alert.Message,
		string(eventIDsJSON),
		alert.FirstSeen,
		alert.LastSeen,
		alert.Count,
		string(mitreJSON),
		alert.Resolved,
		resolvedTime,
		alert.Notes,
		alert.FalsePositive,
		alert.LogName,
		alert.RuleScore,
	)
	return err
}

func (r *AlertRepo) Update(alert *types.Alert) error {
	query := `
		UPDATE alerts SET
			rule_name = ?,
			severity = ?,
			message = ?,
			event_ids = ?,
			first_seen = ?,
			last_seen = ?,
			count = ?,
			mitre_attack = ?,
			resolved = ?,
			resolved_time = ?,
			notes = ?,
			false_positive = ?,
			log_name = ?,
			rule_score = ?
		WHERE id = ?`

	eventIDsJSON, _ := json.Marshal(alert.EventIDs)
	mitreJSON, _ := json.Marshal(alert.MITREAttack)

	var resolvedTime interface{}
	if alert.ResolvedTime != nil {
		resolvedTime = alert.ResolvedTime
	}

	_, err := r.db.Exec(query,
		alert.RuleName,
		alert.Severity,
		alert.Message,
		string(eventIDsJSON),
		alert.FirstSeen,
		alert.LastSeen,
		alert.Count,
		string(mitreJSON),
		alert.Resolved,
		resolvedTime,
		alert.Notes,
		alert.FalsePositive,
		alert.LogName,
		alert.RuleScore,
		alert.ID,
	)
	return err
}

func (r *AlertRepo) GetByID(id int64) (*types.Alert, error) {
	query := `
		SELECT id, rule_name, severity, message, event_ids, first_seen, last_seen, count, mitre_attack, resolved, resolved_time, notes, false_positive, log_name, rule_score
		FROM alerts WHERE id = ?`

	row := r.db.QueryRow(query, id)
	return scanAlert(row)
}

func (r *AlertRepo) List(query *AlertQuery) ([]*types.Alert, int64, error) {
	var conditions []string
	var args []interface{}

	if query.Severity != "" {
		conditions = append(conditions, "severity = ?")
		args = append(args, query.Severity)
	}

	if query.Resolved != nil {
		conditions = append(conditions, "resolved = ?")
		args = append(args, *query.Resolved)
	}

	if query.RuleName != "" {
		conditions = append(conditions, "rule_name = ?")
		args = append(args, query.RuleName)
	}

	if query.StartTime != "" {
		conditions = append(conditions, "first_seen >= ?")
		args = append(args, query.StartTime)
	}

	if query.EndTime != "" {
		conditions = append(conditions, "first_seen <= ?")
		args = append(args, query.EndTime)
	}

	whereClause := ""
	if len(conditions) > 0 {
		whereClause = "WHERE " + strings.Join(conditions, " AND ")
	}

	countQuery := fmt.Sprintf("SELECT COUNT(*) FROM alerts %s", whereClause)
	var total int64
	if err := r.db.QueryRow(countQuery, args...).Scan(&total); err != nil {
		return nil, 0, err
	}

	offset := (query.Page - 1) * query.PageSize
	selectQuery := fmt.Sprintf(`
		SELECT id, rule_name, severity, message, event_ids, first_seen, last_seen, count, mitre_attack, resolved, resolved_time, notes, false_positive, log_name, rule_score
		FROM alerts %s
		ORDER BY first_seen DESC
		LIMIT ? OFFSET ?`, whereClause)

	args = append(args, query.PageSize, offset)

	rows, err := r.db.Query(selectQuery, args...)
	if err != nil {
		return nil, 0, err
	}
	defer rows.Close()

	var alerts []*types.Alert
	for rows.Next() {
		alert, err := scanAlertFromRows(rows)
		if err != nil {
			return nil, 0, err
		}
		alerts = append(alerts, alert)
	}

	return alerts, total, nil
}

func (r *AlertRepo) Resolve(id int64, notes string) error {
	query := "UPDATE alerts SET resolved = 1, resolved_time = ?, notes = ? WHERE id = ?"
	_, err := r.db.Exec(query, time.Now(), notes, id)
	return err
}

func (r *AlertRepo) Delete(id int64) error {
	_, err := r.db.Exec("DELETE FROM alerts WHERE id = ?", id)
	return err
}

func (r *AlertRepo) MarkFalsePositive(id int64, reason string) error {
	query := "UPDATE alerts SET false_positive = 1, notes = ? WHERE id = ?"
	_, err := r.db.Exec(query, reason, id)
	return err
}

func (r *AlertRepo) GetUnresolved() ([]*types.Alert, error) {
	query := `
		SELECT id, rule_name, severity, message, event_ids, first_seen, last_seen, count, mitre_attack, resolved, resolved_time, notes, false_positive, log_name, rule_score
		FROM alerts WHERE resolved = 0 ORDER BY first_seen DESC`

	rows, err := r.db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var alerts []*types.Alert
	for rows.Next() {
		alert, err := scanAlertFromRows(rows)
		if err != nil {
			return nil, err
		}
		alerts = append(alerts, alert)
	}

	return alerts, nil
}

func (r *AlertRepo) GetByRuleName(ruleName string) ([]*types.Alert, error) {
	query := `
		SELECT id, rule_name, severity, message, event_ids, first_seen, last_seen, count, mitre_attack, resolved, resolved_time, notes, false_positive, log_name, rule_score
		FROM alerts WHERE rule_name = ? ORDER BY first_seen DESC`

	rows, err := r.db.Query(query, ruleName)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var alerts []*types.Alert
	for rows.Next() {
		alert, err := scanAlertFromRows(rows)
		if err != nil {
			return nil, err
		}
		alerts = append(alerts, alert)
	}

	return alerts, nil
}

func (r *AlertRepo) CountBySeverity() (map[string]int64, error) {
	query := "SELECT severity, COUNT(*) FROM alerts GROUP BY severity"
	rows, err := r.db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	counts := make(map[string]int64)
	for rows.Next() {
		var severity string
		var count int64
		if err := rows.Scan(&severity, &count); err != nil {
			return nil, err
		}
		counts[severity] = count
	}

	return counts, nil
}

func (r *AlertRepo) CountByStatus() (map[string]int64, error) {
	query := "SELECT resolved, COUNT(*) FROM alerts GROUP BY resolved"
	rows, err := r.db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	counts := make(map[string]int64)
	for rows.Next() {
		var resolved bool
		var count int64
		if err := rows.Scan(&resolved, &count); err != nil {
			return nil, err
		}
		status := "unresolved"
		if resolved {
			status = "resolved"
		}
		counts[status] = count
	}

	return counts, nil
}

func (r *AlertRepo) CountByRule() ([]*types.RuleCount, error) {
	query := `
		SELECT rule_name, COUNT(*) as count
		FROM alerts
		GROUP BY rule_name
		ORDER BY count DESC`

	rows, err := r.db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var results []*types.RuleCount
	var total int64
	for rows.Next() {
		var rc types.RuleCount
		if err := rows.Scan(&rc.RuleName, &rc.Count); err != nil {
			return nil, err
		}
		total += rc.Count
		results = append(results, &rc)
	}

	for _, rc := range results {
		if total > 0 {
			rc.Percentage = float64(rc.Count) / float64(total) * 100
		}
	}

	return results, nil
}

func scanAlert(row interface{ Scan(...interface{}) error }) (*types.Alert, error) {
	var a types.Alert
	var eventIDsJSON, mitreJSON sql.NullString
	var resolvedTime sql.NullInt64
	var notes sql.NullString

	err := row.Scan(
		&a.ID,
		&a.RuleName,
		&a.Severity,
		&a.Message,
		&eventIDsJSON,
		&a.FirstSeen,
		&a.LastSeen,
		&a.Count,
		&mitreJSON,
		&a.Resolved,
		&resolvedTime,
		&notes,
		&a.FalsePositive,
		&a.LogName,
		&a.RuleScore,
	)
	if err != nil {
		return nil, err
	}

	if eventIDsJSON.Valid {
		json.Unmarshal([]byte(eventIDsJSON.String), &a.EventIDs)
	}
	if mitreJSON.Valid {
		json.Unmarshal([]byte(mitreJSON.String), &a.MITREAttack)
	}
	if resolvedTime.Valid {
		t := time.Unix(resolvedTime.Int64, 0)
		a.ResolvedTime = &t
	}
	if notes.Valid {
		a.Notes = notes.String
	}

	return &a, nil
}

func scanAlertFromRows(rows *sql.Rows) (*types.Alert, error) {
	var a types.Alert
	var eventIDsJSON, mitreJSON sql.NullString
	var resolvedTime sql.NullInt64
	var notes sql.NullString

	err := rows.Scan(
		&a.ID,
		&a.RuleName,
		&a.Severity,
		&a.Message,
		&eventIDsJSON,
		&a.FirstSeen,
		&a.LastSeen,
		&a.Count,
		&mitreJSON,
		&a.Resolved,
		&resolvedTime,
		&notes,
		&a.FalsePositive,
		&a.LogName,
		&a.RuleScore,
	)
	if err != nil {
		return nil, err
	}

	if eventIDsJSON.Valid {
		json.Unmarshal([]byte(eventIDsJSON.String), &a.EventIDs)
	}
	if mitreJSON.Valid {
		json.Unmarshal([]byte(mitreJSON.String), &a.MITREAttack)
	}
	if resolvedTime.Valid {
		t := time.Unix(resolvedTime.Int64, 0)
		a.ResolvedTime = &t
	}
	if notes.Valid {
		a.Notes = notes.String
	}

	return &a, nil
}
