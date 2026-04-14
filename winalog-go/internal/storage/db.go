package storage

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	_ "modernc.org/sqlite"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type DB struct {
	conn    *sql.DB
	path    string
	writeMu sync.Mutex
}

func NewDB(path string) (*DB, error) {
	absPath, err := filepath.Abs(path)
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path: %w", err)
	}

	dsn := absPath + "?_journal_mode=WAL&_busy_timeout=30000&_synchronous=NORMAL"
	conn, err := sql.Open("sqlite", dsn)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	conn.SetMaxOpenConns(1)
	conn.SetMaxIdleConns(1)
	conn.SetConnMaxLifetime(time.Hour)

	db := &DB{
		conn: conn,
		path: absPath,
	}

	if err := db.Ping(); err != nil {
		conn.Close()
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	if err := db.createTables(); err != nil {
		conn.Close()
		return nil, fmt.Errorf("failed to create tables: %w", err)
	}

	return db, nil
}

func (d *DB) Ping() error {
	return d.conn.Ping()
}

func (d *DB) Close() error {
	return d.conn.Close()
}

func (d *DB) Path() string {
	return d.path
}

func (d *DB) Exec(query string, args ...interface{}) (sql.Result, error) {
	d.writeMu.Lock()
	defer d.writeMu.Unlock()
	return d.conn.Exec(query, args...)
}

func (d *DB) Query(query string, args ...interface{}) (*sql.Rows, error) {
	return d.conn.Query(query, args...)
}

func (d *DB) QueryRow(query string, args ...interface{}) *sql.Row {
	return d.conn.QueryRow(query, args...)
}

func (d *DB) Begin() (*sql.Tx, error) {
	d.writeMu.Lock()
	return d.conn.Begin()
}

func (d *DB) CreateTables() error {
	return d.createTables()
}

func (d *DB) createTables() error {
	schema := `
	CREATE TABLE IF NOT EXISTS events (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		timestamp TEXT NOT NULL,
		event_id INTEGER NOT NULL,
		level INTEGER NOT NULL,
		source TEXT,
		log_name TEXT NOT NULL,
		computer TEXT,
		user TEXT,
		user_sid TEXT,
		message TEXT,
		raw_xml TEXT,
		session_id TEXT,
		ip_address TEXT,
		import_time TEXT NOT NULL,
		import_id INTEGER DEFAULT 0,
		INDEX idx_timestamp (timestamp),
		INDEX idx_event_id (event_id),
		INDEX idx_level (level),
		INDEX idx_log_name (log_name),
		INDEX idx_import_id (import_id)
	);

	CREATE TABLE IF NOT EXISTS alerts (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		rule_name TEXT NOT NULL,
		severity TEXT NOT NULL,
		message TEXT NOT NULL,
		event_ids TEXT,
		first_seen TEXT NOT NULL,
		last_seen TEXT NOT NULL,
		count INTEGER DEFAULT 1,
		mitre_attack TEXT,
		resolved INTEGER DEFAULT 0,
		resolved_time TEXT,
		notes TEXT,
		false_positive INTEGER DEFAULT 0,
		log_name TEXT,
		rule_score REAL DEFAULT 0.0,
		INDEX idx_severity (severity),
		INDEX idx_resolved (resolved),
		INDEX idx_rule_name (rule_name),
		INDEX idx_first_seen (first_seen)
	);

	CREATE TABLE IF NOT EXISTS import_log (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		file_path TEXT NOT NULL,
		file_hash TEXT,
		events_count INTEGER DEFAULT 0,
		import_time TEXT NOT NULL,
		import_duration INTEGER DEFAULT 0,
		status TEXT DEFAULT 'success',
		error_message TEXT,
		INDEX idx_import_time (import_time)
	);

	CREATE TABLE IF NOT EXISTS machine_context (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		machine_id TEXT NOT NULL UNIQUE,
		machine_name TEXT,
		ip_address TEXT,
		domain TEXT,
		role TEXT,
		first_seen TEXT NOT NULL,
		last_seen TEXT NOT NULL,
		os_version TEXT,
		INDEX idx_machine_id (machine_id)
	);

	CREATE TABLE IF NOT EXISTS multi_machine_analysis (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		analysis_id TEXT NOT NULL,
		rule_name TEXT NOT NULL,
		description TEXT,
		severity TEXT,
		start_time TEXT NOT NULL,
		end_time TEXT,
		events_count INTEGER DEFAULT 0,
		created_at TEXT NOT NULL,
		INDEX idx_analysis_id (analysis_id)
	);

	CREATE TABLE IF NOT EXISTS global_timeline (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		event_id INTEGER NOT NULL,
		timestamp TEXT NOT NULL,
		event_type TEXT,
		category TEXT,
		severity TEXT,
		source TEXT,
		log_name TEXT,
		computer TEXT,
		user TEXT,
		message TEXT,
		mitre_attack TEXT,
		attack_chain_id TEXT,
		INDEX idx_timestamp (timestamp),
		INDEX idx_category (category),
		INDEX idx_attack_chain (attack_chain_id)
	);

	CREATE TABLE IF NOT EXISTS sessions (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		session_id TEXT NOT NULL UNIQUE,
		start_time TEXT NOT NULL,
		end_time TEXT,
		duration INTEGER,
		events_count INTEGER DEFAULT 0,
		alerts_count INTEGER DEFAULT 0,
		INDEX idx_session_id (session_id)
	);

	CREATE TABLE IF NOT EXISTS evidence_chain (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		evidence_id TEXT NOT NULL UNIQUE,
		timestamp TEXT NOT NULL,
		operator TEXT,
		action TEXT,
		input_hash TEXT,
		output_hash TEXT,
		previous_hash TEXT,
		INDEX idx_evidence_id (evidence_id)
	);

	CREATE TABLE IF NOT EXISTS evidence_file (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		file_path TEXT NOT NULL,
		file_hash TEXT NOT NULL,
		evidence_id TEXT,
		collected_at TEXT NOT NULL,
		collector TEXT,
		FOREIGN KEY (evidence_id) REFERENCES evidence_chain(evidence_id),
		INDEX idx_file_hash (file_hash),
		INDEX idx_evidence_id (evidence_id)
	);
	`

	statements := strings.Split(schema, ";")
	for _, stmt := range statements {
		stmt = strings.TrimSpace(stmt)
		if stmt == "" {
			continue
		}
		if _, err := d.conn.Exec(stmt); err != nil {
			return fmt.Errorf("failed to execute: %w", err)
		}
	}

	return nil
}

func (d *DB) Vacuum() error {
	d.writeMu.Lock()
	defer d.writeMu.Unlock()
	_, err := d.conn.Exec("VACUUM")
	return err
}

func (d *DB) Analyze() error {
	d.writeMu.Lock()
	defer d.writeMu.Unlock()
	_, err := d.conn.Exec("ANALYZE")
	return err
}

func (d *DB) GetStats() (*DBStats, error) {
	var eventCount, alertCount, importCount int64

	d.conn.QueryRow("SELECT COUNT(*) FROM events").Scan(&eventCount)
	d.conn.QueryRow("SELECT COUNT(*) FROM alerts").Scan(&alertCount)
	d.conn.QueryRow("SELECT COUNT(*) FROM import_log").Scan(&importCount)

	var dbSize int64
	if fi, err := os.Stat(d.path); err == nil {
		dbSize = fi.Size()
	}

	return &DBStats{
		EventCount:   eventCount,
		AlertCount:   alertCount,
		ImportCount:  importCount,
		DatabaseSize: dbSize,
	}, nil
}

type DBStats struct {
	EventCount   int64 `json:"event_count"`
	AlertCount   int64 `json:"alert_count"`
	ImportCount  int64 `json:"import_count"`
	DatabaseSize int64 `json:"database_size"`
}

func (d *DB) InsertImportLog(filePath, fileHash string, eventsCount int, duration int, status, errorMsg string) (int64, error) {
	result, err := d.Exec(`
		INSERT INTO import_log (file_path, file_hash, events_count, import_time, import_duration, status, error_message)
		VALUES (?, ?, ?, ?, ?, ?, ?)`,
		filePath, fileHash, eventsCount, time.Now(), duration, status, errorMsg)
	if err != nil {
		return 0, err
	}
	return result.LastInsertId()
}

func (d *DB) UpdateImportLog(id int64, eventsCount int, duration int, status, errorMsg string) error {
	_, err := d.Exec(`
		UPDATE import_log SET events_count = ?, import_duration = ?, status = ?, error_message = ?
		WHERE id = ?`,
		eventsCount, duration, status, errorMsg, id)
	return err
}

func (d *DB) BeginTx() (*sql.Tx, func(), error) {
	tx, err := d.Begin()
	if err != nil {
		return nil, nil, err
	}
	return tx, func() { tx.Rollback() }, nil
}

func (d *DB) GetLastImportTime(filePath string) *time.Time {
	var importTime time.Time
	err := d.QueryRow(`
		SELECT import_time FROM import_log 
		WHERE file_path = ? AND status = 'success'
		ORDER BY import_time DESC LIMIT 1`,
		filePath).Scan(&importTime)
	if err != nil {
		return nil
	}
	return &importTime
}

func (d *DB) GetImportLog(filePath string) (*ImportLogEntry, error) {
	row := d.QueryRow(`
		SELECT id, file_path, file_hash, events_count, import_time, import_duration, status, error_message
		FROM import_log WHERE file_path = ? ORDER BY import_time DESC LIMIT 1`,
		filePath)

	var entry ImportLogEntry
	err := row.Scan(&entry.ID, &entry.FilePath, &entry.FileHash, &entry.EventsCount,
		&entry.ImportTime, &entry.ImportDuration, &entry.Status, &entry.ErrorMessage)
	if err != nil {
		return nil, err
	}
	return &entry, nil
}

type ImportLogEntry struct {
	ID             int64
	FilePath       string
	FileHash       string
	EventsCount    int
	ImportTime     time.Time
	ImportDuration int
	Status         string
	ErrorMessage   string
}

type EventFilter struct {
	Limit     int
	Offset    int
	EventIDs  []int32
	Levels    []int
	LogNames  []string
	Computers []string
	StartTime *time.Time
	EndTime   *time.Time
}

func (d *DB) ListEvents(filter *EventFilter) ([]*types.Event, int64, error) {
	if filter == nil {
		filter = &EventFilter{Limit: 100}
	}

	eventRepo := NewEventRepo(d)

	req := &types.SearchRequest{
		PageSize: filter.Limit,
		Page:     1,
	}

	if filter.Offset > 0 {
		req.Page = (filter.Offset / filter.Limit) + 1
	}

	return eventRepo.Search(req)
}

func (d *DB) ListEventsFiltered(filter *EventFilter) ([]*types.Event, error) {
	if filter == nil {
		filter = &EventFilter{Limit: 100}
	}

	query := "SELECT id, timestamp, event_id, level, source, log_name, computer, user, user_sid, message, raw_xml, session_id, ip_address, import_time, import_id FROM events"

	var conditions []string
	var args []interface{}

	if len(filter.EventIDs) > 0 {
		placeholders := make([]string, len(filter.EventIDs))
		for i, id := range filter.EventIDs {
			placeholders[i] = "?"
			args = append(args, id)
		}
		conditions = append(conditions, fmt.Sprintf("event_id IN (%s)", strings.Join(placeholders, ",")))
	}

	if len(filter.Levels) > 0 {
		placeholders := make([]string, len(filter.Levels))
		for i, l := range filter.Levels {
			placeholders[i] = "?"
			args = append(args, l)
		}
		conditions = append(conditions, fmt.Sprintf("level IN (%s)", strings.Join(placeholders, ",")))
	}

	if len(filter.LogNames) > 0 {
		placeholders := make([]string, len(filter.LogNames))
		for i, name := range filter.LogNames {
			placeholders[i] = "?"
			args = append(args, name)
		}
		conditions = append(conditions, fmt.Sprintf("log_name IN (%s)", strings.Join(placeholders, ",")))
	}

	if filter.StartTime != nil {
		conditions = append(conditions, "timestamp >= ?")
		args = append(args, filter.StartTime.Format(time.RFC3339))
	}

	if filter.EndTime != nil {
		conditions = append(conditions, "timestamp <= ?")
		args = append(args, filter.EndTime.Format(time.RFC3339))
	}

	whereClause := ""
	if len(conditions) > 0 {
		whereClause = "WHERE " + strings.Join(conditions, " AND ")
	}

	query = fmt.Sprintf("%s %s ORDER BY timestamp DESC LIMIT ? OFFSET ?", query, whereClause)
	args = append(args, filter.Limit, filter.Offset)

	rows, err := d.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var events []*types.Event
	for rows.Next() {
		event, err := scanEventFromRows(rows)
		if err != nil {
			continue
		}
		events = append(events, event)
	}

	return events, nil
}

func (d *DB) GetEventByID(id int64) (*types.Event, error) {
	eventRepo := NewEventRepo(d)
	return eventRepo.GetByID(id)
}

func (d *DB) SearchEvents(keyword string, limit int) ([]*types.Event, int64, error) {
	eventRepo := NewEventRepo(d)
	req := &types.SearchRequest{
		Keywords: keyword,
		PageSize: limit,
		Page:     1,
	}
	return eventRepo.Search(req)
}

func (d *DB) AlertRepo() *AlertRepo {
	return NewAlertRepo(d)
}

func (d *DB) EventRepo() *EventRepo {
	return NewEventRepo(d)
}
