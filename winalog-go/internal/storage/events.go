package storage

import (
	"database/sql"
	"fmt"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

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
		event.Timestamp,
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
		event.ImportTime,
		event.ImportID,
	)
	return err
}

func (r *EventRepo) InsertBatch(events []*types.Event) error {
	if len(events) == 0 {
		return nil
	}

	tx, err := r.db.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	stmt, err := tx.Prepare(`
		INSERT INTO events (timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
	if err != nil {
		return err
	}
	defer stmt.Close()

	for _, event := range events {
		_, err := stmt.Exec(
			event.Timestamp,
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
			event.ImportTime,
			event.ImportID,
		)
		if err != nil {
			return err
		}
	}

	return tx.Commit()
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
		if req.Regex {
			conditions = append(conditions, "message GLOB ?")
			args = append(args, req.Keywords)
		} else {
			conditions = append(conditions, "message LIKE ?")
			args = append(args, "%"+req.Keywords+"%")
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
		sortBy = req.SortBy
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
	var user, userSID, rawXML, sessionID, ipAddress sql.NullString
	var importID sql.NullInt64

	err := row.Scan(
		&e.ID,
		&e.Timestamp,
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
		&e.ImportTime,
		&importID,
	)
	if err != nil {
		return nil, err
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

func scanEventFromRows(rows *sql.Rows) (*types.Event, error) {
	var e types.Event
	var user, userSID, rawXML, sessionID, ipAddress sql.NullString
	var importID sql.NullInt64

	err := rows.Scan(
		&e.ID,
		&e.Timestamp,
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
		&e.ImportTime,
		&importID,
	)
	if err != nil {
		return nil, err
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
