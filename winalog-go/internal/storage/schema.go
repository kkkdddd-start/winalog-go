package storage

import "fmt"

const SchemaSQL = `
-- Events table
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
	import_id INTEGER DEFAULT 0
);

-- Alerts table
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
	rule_score REAL DEFAULT 0.0
);

-- Import log table
CREATE TABLE IF NOT EXISTS import_log (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	file_path TEXT NOT NULL,
	file_hash TEXT,
	events_count INTEGER DEFAULT 0,
	import_time TEXT NOT NULL,
	import_duration INTEGER DEFAULT 0,
	status TEXT DEFAULT 'success',
	error_message TEXT
);

-- Machine context table
CREATE TABLE IF NOT EXISTS machine_context (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	machine_id TEXT NOT NULL UNIQUE,
	machine_name TEXT,
	ip_address TEXT,
	domain TEXT,
	role TEXT,
	first_seen TEXT NOT NULL,
	last_seen TEXT NOT NULL,
	os_version TEXT
);

-- Multi-machine analysis table
CREATE TABLE IF NOT EXISTS multi_machine_analysis (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	analysis_id TEXT NOT NULL,
	rule_name TEXT NOT NULL,
	description TEXT,
	severity TEXT,
	start_time TEXT NOT NULL,
	end_time TEXT,
	events_count INTEGER DEFAULT 0,
	created_at TEXT NOT NULL
);

-- Global timeline table
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
	attack_chain_id TEXT
);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	session_id TEXT NOT NULL UNIQUE,
	start_time TEXT NOT NULL,
	end_time TEXT,
	duration INTEGER,
	events_count INTEGER DEFAULT 0,
	alerts_count INTEGER DEFAULT 0
);

-- Evidence chain table
CREATE TABLE IF NOT EXISTS evidence_chain (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	evidence_id TEXT NOT NULL UNIQUE,
	timestamp TEXT NOT NULL,
	operator TEXT,
	action TEXT,
	input_hash TEXT,
	output_hash TEXT,
	previous_hash TEXT
);

-- Evidence file table
CREATE TABLE IF NOT EXISTS evidence_file (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	file_path TEXT NOT NULL,
	file_hash TEXT NOT NULL,
	evidence_id TEXT,
	collected_at TEXT NOT NULL,
	collector TEXT
);
`

var TableDefinitions = map[string]TableDefinition{
	"events": {
		Name: "events",
		Columns: []ColumnDefinition{
			{Name: "id", Type: "INTEGER", PrimaryKey: true, AutoIncrement: true},
			{Name: "timestamp", Type: "TEXT", NotNull: true},
			{Name: "event_id", Type: "INTEGER", NotNull: true},
			{Name: "level", Type: "INTEGER", NotNull: true},
			{Name: "source", Type: "TEXT"},
			{Name: "log_name", Type: "TEXT", NotNull: true},
			{Name: "computer", Type: "TEXT"},
			{Name: "user", Type: "TEXT"},
			{Name: "user_sid", Type: "TEXT"},
			{Name: "message", Type: "TEXT"},
			{Name: "raw_xml", Type: "TEXT"},
			{Name: "session_id", Type: "TEXT"},
			{Name: "ip_address", Type: "TEXT"},
			{Name: "import_time", Type: "TEXT", NotNull: true},
			{Name: "import_id", Type: "INTEGER", Default: "0"},
		},
		Indexes: []IndexDefinition{
			{Name: "idx_timestamp", Columns: []string{"timestamp"}},
			{Name: "idx_event_id", Columns: []string{"event_id"}},
			{Name: "idx_level", Columns: []string{"level"}},
			{Name: "idx_log_name", Columns: []string{"log_name"}},
			{Name: "idx_import_id", Columns: []string{"import_id"}},
		},
	},
	"alerts": {
		Name: "alerts",
		Columns: []ColumnDefinition{
			{Name: "id", Type: "INTEGER", PrimaryKey: true, AutoIncrement: true},
			{Name: "rule_name", Type: "TEXT", NotNull: true},
			{Name: "severity", Type: "TEXT", NotNull: true},
			{Name: "message", Type: "TEXT", NotNull: true},
			{Name: "event_ids", Type: "TEXT"},
			{Name: "first_seen", Type: "TEXT", NotNull: true},
			{Name: "last_seen", Type: "TEXT", NotNull: true},
			{Name: "count", Type: "INTEGER", Default: "1"},
			{Name: "mitre_attack", Type: "TEXT"},
			{Name: "resolved", Type: "INTEGER", Default: "0"},
			{Name: "resolved_time", Type: "TEXT"},
			{Name: "notes", Type: "TEXT"},
			{Name: "false_positive", Type: "INTEGER", Default: "0"},
			{Name: "log_name", Type: "TEXT"},
			{Name: "rule_score", Type: "REAL", Default: "0.0"},
		},
		Indexes: []IndexDefinition{
			{Name: "idx_severity", Columns: []string{"severity"}},
			{Name: "idx_resolved", Columns: []string{"resolved"}},
			{Name: "idx_rule_name", Columns: []string{"rule_name"}},
			{Name: "idx_first_seen", Columns: []string{"first_seen"}},
		},
	},
	"import_log": {
		Name: "import_log",
		Columns: []ColumnDefinition{
			{Name: "id", Type: "INTEGER", PrimaryKey: true, AutoIncrement: true},
			{Name: "file_path", Type: "TEXT", NotNull: true},
			{Name: "file_hash", Type: "TEXT"},
			{Name: "events_count", Type: "INTEGER", Default: "0"},
			{Name: "import_time", Type: "TEXT", NotNull: true},
			{Name: "import_duration", Type: "INTEGER", Default: "0"},
			{Name: "status", Type: "TEXT", Default: "'success'"},
			{Name: "error_message", Type: "TEXT"},
		},
		Indexes: []IndexDefinition{
			{Name: "idx_import_time", Columns: []string{"import_time"}},
		},
	},
}

type TableDefinition struct {
	Name    string
	Columns []ColumnDefinition
	Indexes []IndexDefinition
}

type ColumnDefinition struct {
	Name          string
	Type          string
	NotNull       bool
	PrimaryKey    bool
	AutoIncrement bool
	Default       string
}

type IndexDefinition struct {
	Name    string
	Columns []string
	Unique  bool
}

func GenerateCreateTableSQL(table TableDefinition) string {
	var cols []string
	for _, col := range table.Columns {
		sql := fmt.Sprintf("  %s %s", col.Name, col.Type)
		if col.NotNull {
			sql += " NOT NULL"
		}
		if col.PrimaryKey {
			sql += " PRIMARY KEY"
		}
		if col.AutoIncrement {
			sql += " AUTOINCREMENT"
		}
		if col.Default != "" {
			sql += fmt.Sprintf(" DEFAULT %s", col.Default)
		}
		cols = append(cols, sql)
	}

	for _, idx := range table.Indexes {
		idxSQL := fmt.Sprintf("  INDEX %s (%s)", idx.Name, joinStrings(idx.Columns, ", "))
		cols = append(cols, idxSQL)
	}

	return fmt.Sprintf("CREATE TABLE IF NOT EXISTS %s (\n%s\n);", table.Name, joinStrings(cols, ",\n"))
}

func joinStrings(strs []string, sep string) string {
	if len(strs) == 0 {
		return ""
	}
	result := strs[0]
	for i := 1; i < len(strs); i++ {
		result += sep + strs[i]
	}
	return result
}
