package storage

import (
	"database/sql"
	"fmt"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

var allowedSortFields = map[string]bool{
	"timestamp":   true,
	"event_id":    true,
	"level":       true,
	"source":      true,
	"log_name":    true,
	"computer":    true,
	"user":        true,
	"user_sid":    true,
	"session_id":  true,
	"ip_address":  true,
	"import_time": true,
}

type EventRepo struct {
	db *DB
}

func NewEventRepo(db *DB) *EventRepo {
	return &EventRepo{db: db}
}

func (r *EventRepo) Insert(event *types.Event) error {
	query := `
		INSERT INTO events (timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

	_, err := r.db.Exec(query,
		event.Timestamp.Format(time.RFC3339Nano),
		event.EventID,
		int(event.Level),
		event.Source,
		event.LogName,
		event.Computer,
		event.User,
		event.UserSID,
		event.Message,
		event.RawXML,
		event.SessionID,
		event.IPAddress,
		event.ImportTime.Format(time.RFC3339Nano),
		event.ImportID,
	)
	return err
}

func (r *EventRepo) InsertBatch(events []*types.Event) error {
	if len(events) == 0 {
		return nil
	}

	tx, unlock, err := r.db.Begin()
	if err != nil {
		return err
	}
	defer unlock()

	stmt, err := tx.Prepare(`
		INSERT INTO events (timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
	if err != nil {
		return err
	}
	defer stmt.Close()

	for _, event := range events {
		_, err := stmt.Exec(
			event.Timestamp.Format(time.RFC3339Nano),
			event.EventID,
			int(event.Level),
			event.Source,
			event.LogName,
			event.Computer,
			event.User,
			event.UserSID,
			event.Message,
			event.RawXML,
			event.SessionID,
			event.IPAddress,
			event.ImportTime.Format(time.RFC3339Nano),
			event.ImportID,
		)
		if err != nil {
			return err
		}
	}

	err = tx.Commit()
	if err != nil {
		return err
	}
	return nil
}

func (r *EventRepo) GetByID(id int64) (*types.Event, error) {
	query := `
		SELECT id, timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id
		FROM events WHERE id = ?`

	row := r.db.QueryRow(query, id)
	return scanEvent(row)
}

func (r *EventRepo) Search(req *types.SearchRequest) ([]*types.Event, int64, error) {
	var conditions []string
	var args []interface{}

	if len(req.Keywords) > 0 {
		keywordMode := strings.ToUpper(req.KeywordMode)
		if keywordMode == "" {
			keywordMode = "AND"
		}

		if req.Regex {
			pattern := req.Keywords
			if keywordMode == "OR" {
				conditions, args = appendGlobCondition(conditions, args, "message", pattern)
			} else {
				words := strings.Fields(req.Keywords)
				for _, word := range words {
					conditions, args = appendGlobCondition(conditions, args, "message", word)
				}
			}
		} else {
			words := strings.Fields(req.Keywords)
			if len(words) == 0 {
				conditions = append(conditions, "message LIKE ?")
				args = append(args, "%"+req.Keywords+"%")
			} else if keywordMode == "OR" {
				var likeConditions []string
				for _, word := range words {
					likeConditions = append(likeConditions, "message LIKE ?")
					args = append(args, "%"+word+"%")
				}
				conditions = append(conditions, "("+strings.Join(likeConditions, " OR ")+")")
			} else {
				for _, word := range words {
					conditions = append(conditions, "message LIKE ?")
					args = append(args, "%"+word+"%")
				}
			}
		}
	}

	if len(req.EventIDs) > 0 {
		placeholders := make([]string, len(req.EventIDs))
		for i, id := range req.EventIDs {
			placeholders[i] = "?"
			args = append(args, id)
		}
		conditions = append(conditions, fmt.Sprintf("event_id IN (%s)", strings.Join(placeholders, ",")))
	}

	if len(req.Levels) > 0 {
		placeholders := make([]string, len(req.Levels))
		for i, l := range req.Levels {
			placeholders[i] = "?"
			args = append(args, l)
		}
		conditions = append(conditions, fmt.Sprintf("level IN (%s)", strings.Join(placeholders, ",")))
	}

	if len(req.LogNames) > 0 {
		placeholders := make([]string, len(req.LogNames))
		for i, name := range req.LogNames {
			placeholders[i] = "?"
			args = append(args, name)
		}
		conditions = append(conditions, fmt.Sprintf("log_name IN (%s)", strings.Join(placeholders, ",")))
	}

	if len(req.Computers) > 0 {
		placeholders := make([]string, len(req.Computers))
		for i, c := range req.Computers {
			placeholders[i] = "?"
			args = append(args, c)
		}
		conditions = append(conditions, fmt.Sprintf("computer IN (%s)", strings.Join(placeholders, ",")))
	}

	if req.StartTime != nil {
		conditions = append(conditions, "timestamp >= ?")
		args = append(args, req.StartTime.Format(time.RFC3339))
	}

	if req.EndTime != nil {
		conditions = append(conditions, "timestamp <= ?")
		args = append(args, req.EndTime.Format(time.RFC3339))
	}

	whereClause := ""
	if len(conditions) > 0 {
		whereClause = "WHERE " + strings.Join(conditions, " AND ")
	}

	countQuery := fmt.Sprintf("SELECT COUNT(*) FROM events %s", whereClause)
	var total int64
	if err := r.db.QueryRow(countQuery, args...).Scan(&total); err != nil {
		return nil, 0, err
	}

	sortOrder := "DESC"
	if req.SortOrder == "asc" {
		sortOrder = "ASC"
	}
	sortBy := "timestamp"
	if req.SortBy != "" {
		sanitized := strings.ToLower(strings.TrimSpace(req.SortBy))
		if allowedSortFields[sanitized] {
			sortBy = sanitized
		}
	}

	offset := (req.Page - 1) * req.PageSize
	query := fmt.Sprintf(`
		SELECT id, timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id
		FROM events %s
		ORDER BY %s %s
		LIMIT ? OFFSET ?`, whereClause, sortBy, sortOrder)

	args = append(args, req.PageSize, offset)

	rows, err := r.db.Query(query, args...)
	if err != nil {
		return nil, 0, err
	}
	defer rows.Close()

	var events []*types.Event
	for rows.Next() {
		event, err := scanEventFromRows(rows)
		if err != nil {
			return nil, 0, err
		}
		events = append(events, event)
	}

	return events, total, nil
}

func (r *EventRepo) DeleteByImportID(importID int64) error {
	_, err := r.db.Exec("DELETE FROM events WHERE import_id = ?", importID)
	return err
}

func (r *EventRepo) DeleteOldEvents(age string) (int64, error) {
	t, err := time.ParseDuration(age)
	if err != nil {
		return 0, err
	}

	cutoff := time.Now().Add(-t)
	result, err := r.db.Exec("DELETE FROM events WHERE timestamp < ?", cutoff)
	if err != nil {
		return 0, err
	}
	return result.RowsAffected()
}

func (r *EventRepo) GetByTimeRange(start, end string) ([]*types.Event, error) {
	query := `
		SELECT id, timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id
		FROM events
		WHERE timestamp >= ? AND timestamp <= ?
		ORDER BY timestamp DESC`

	rows, err := r.db.Query(query, start, end)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var events []*types.Event
	for rows.Next() {
		event, err := scanEventFromRows(rows)
		if err != nil {
			return nil, err
		}
		events = append(events, event)
	}

	return events, nil
}

func (r *EventRepo) GetEventIDsByImportID(importID int64) ([]int64, error) {
	query := "SELECT id FROM events WHERE import_id = ?"
	rows, err := r.db.Query(query, importID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var ids []int64
	for rows.Next() {
		var id int64
		if err := rows.Scan(&id); err != nil {
			return nil, err
		}
		ids = append(ids, id)
	}
	return ids, nil
}

func scanEvent(row interface{ Scan(...interface{}) error }) (*types.Event, error) {
	var e types.Event
	var timestampStr, importTimeStr string
	var user, userSID, rawXML, sessionID, ipAddress sql.NullString
	var importID sql.NullInt64

	err := row.Scan(
		&e.ID,
		&timestampStr,
		&e.EventID,
		&e.Level,
		&e.Source,
		&e.LogName,
		&e.Computer,
		&user,
		&userSID,
		&e.Message,
		&rawXML,
		&sessionID,
		&ipAddress,
		&importTimeStr,
		&importID,
	)
	if err != nil {
		return nil, err
	}

	if timestampStr != "" {
		if t, err := time.Parse(time.RFC3339Nano, timestampStr); err == nil {
			e.Timestamp = t
		}
	}

	if importTimeStr != "" {
		if t, err := time.Parse(time.RFC3339Nano, importTimeStr); err == nil {
			e.ImportTime = t
		}
	}

	if user.Valid {
		e.User = &user.String
	}
	if userSID.Valid {
		e.UserSID = &userSID.String
	}
	if rawXML.Valid {
		e.RawXML = &rawXML.String
	}
	if sessionID.Valid {
		e.SessionID = &sessionID.String
	}
	if ipAddress.Valid {
		e.IPAddress = &ipAddress.String
	}
	if importID.Valid {
		e.ImportID = importID.Int64
	}

	return &e, nil
}

func appendGlobCondition(conditions []string, args []interface{}, field, pattern string) ([]string, []interface{}) {
	safePattern := sanitizeGlobPattern(pattern)
	if safePattern == "" {
		return conditions, args
	}
	conditions = append(conditions, fmt.Sprintf("message GLOB ?"))
	args = append(args, safePattern)
	return conditions, args
}

func sanitizeGlobPattern(pattern string) string {
	var result []byte
	for i := 0; i < len(pattern); i++ {
		c := pattern[i]
		switch c {
		case '*', '?', '[', ']':
			result = append(result, c)
		case '\\':
			if i+1 < len(pattern) {
				result = append(result, '\\', pattern[i+1])
				i++
			}
		default:
			result = append(result, c)
		}
	}
	return string(result)
}

func scanEventFromRows(rows *sql.Rows) (*types.Event, error) {
	return scanEvent(rows)
}
