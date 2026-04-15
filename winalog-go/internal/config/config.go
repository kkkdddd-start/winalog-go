package config

import (
	"time"
)

type Config struct {
	Database    DatabaseConfig    `yaml:"database"`
	Import      ImportConfig      `yaml:"import"`
	Parser      ParserConfig      `yaml:"parser"`
	Search      SearchConfig      `yaml:"search"`
	Alerts      AlertsConfig      `yaml:"alerts"`
	Correlation CorrelationConfig `yaml:"correlation"`
	Report      ReportConfig      `yaml:"report"`
	Forensics   ForensicsConfig   `yaml:"forensics"`
	API         APIConfig         `yaml:"api"`
	Log         LogConfig         `yaml:"log"`
	TUI         TUIConfig         `yaml:"tui"`
}

type DatabaseConfig struct {
	Path         string `yaml:"path"`
	WALMode      bool   `yaml:"wal_mode"`
	PoolSize     int    `yaml:"pool_size"`
	MaxOpenConns int    `yaml:"max_open_conns"`
}

type ImportConfig struct {
	Workers          int      `yaml:"workers"`
	BatchSize        int      `yaml:"batch_size"`
	SkipPatterns     []string `yaml:"skip_patterns"`
	Incremental      bool     `yaml:"incremental"`
	CalculateHash    bool     `yaml:"calculate_hash"`
	ProgressCallback bool     `yaml:"progress_callback"`
}

type ParserConfig struct {
	Workers     int `yaml:"workers"`
	MemoryLimit int `yaml:"memory_limit"` // in MB
}

type SearchConfig struct {
	MaxResults         int           `yaml:"max_results"`
	Timeout            time.Duration `yaml:"timeout"`
	HighlightMaxLength int           `yaml:"highlight_max_length"`
	DefaultPageSize    int           `yaml:"default_page_size"`
}

type AlertsConfig struct {
	Enabled        bool                `yaml:"enabled"`
	DedupWindow    time.Duration       `yaml:"dedup_window"`
	UpgradeRules   []*AlertUpgradeRule `yaml:"upgrade_rules,omitempty"`
	SuppressRules  []*SuppressRule     `yaml:"suppress_rules,omitempty"`
	StatsRetention time.Duration       `yaml:"stats_retention"`
}

type AlertUpgradeRule struct {
	ID          int64  `yaml:"id"`
	Name        string `yaml:"name"`
	Condition   string `yaml:"condition"`
	Threshold   int    `yaml:"threshold"`
	NewSeverity string `yaml:"new_severity"`
	Notify      bool   `yaml:"notify"`
	Enabled     bool   `yaml:"enabled"`
}

type SuppressRule struct {
	ID         int64         `yaml:"id"`
	Name       string        `yaml:"name"`
	Conditions []Condition   `yaml:"conditions"`
	Duration   time.Duration `yaml:"duration"`
	Scope      string        `yaml:"scope"`
	Enabled    bool          `yaml:"enabled"`
	ExpiresAt  time.Time     `yaml:"expires_at,omitempty"`
}

type Condition struct {
	Field    string      `yaml:"field"`
	Operator string      `yaml:"operator"`
	Value    interface{} `yaml:"value"`
}

type CorrelationConfig struct {
	Enabled    bool          `yaml:"enabled"`
	TimeWindow time.Duration `yaml:"time_window"`
	MaxEvents  int           `yaml:"max_events"`
}

type ReportConfig struct {
	OutputDir   string `yaml:"output_dir"`
	TemplateDir string `yaml:"template_dir"`
	DefaultFmt  string `yaml:"default_format"`
}

type ForensicsConfig struct {
	HashAlgorithm string `yaml:"hash_algorithm"`
	SignReports   bool   `yaml:"sign_reports"`
}

type APIConfig struct {
	Host string     `yaml:"host"`
	Port int        `yaml:"port"`
	Mode string     `yaml:"mode"`
	CORS CORSConfig `yaml:"cors"`
	Auth AuthConfig `yaml:"auth"`
}

type CORSConfig struct {
	AllowedOrigins []string `yaml:"allowed_origins"`
	AllowedMethods []string `yaml:"allowed_methods"`
	AllowedHeaders []string `yaml:"allowed_headers"`
}

type AuthConfig struct {
	Enabled   bool   `yaml:"enabled"`
	JWTSecret string `yaml:"jwt_secret"`
}

type LogConfig struct {
	Level      string `yaml:"level"`
	Format     string `yaml:"format"`
	Output     string `yaml:"output"`
	FilePath   string `yaml:"file_path"`
	MaxSize    int    `yaml:"max_size"`
	MaxBackups int    `yaml:"max_backups"`
	MaxAge     int    `yaml:"max_age"`
}

type TUIConfig struct {
	Theme      string `yaml:"theme"`
	KeyMode    string `yaml:"key_mode"`
	AutoUpdate bool   `yaml:"auto_update"`
}

func DefaultConfig() *Config {
	return &Config{
		Database: DatabaseConfig{
			Path:         "~/.winalog/winalog.db",
			WALMode:      true,
			PoolSize:     10,
			MaxOpenConns: 25,
		},
		Import: ImportConfig{
			Workers:          4,
			BatchSize:        10000,
			SkipPatterns:     []string{"Diagnostics", "Debug"},
			Incremental:      true,
			CalculateHash:    true,
			ProgressCallback: true,
		},
		Parser: ParserConfig{
			Workers:     4,
			MemoryLimit: 2048,
		},
		Search: SearchConfig{
			MaxResults:         100000,
			Timeout:            30 * time.Second,
			HighlightMaxLength: 200,
			DefaultPageSize:    100,
		},
		Alerts: AlertsConfig{
			Enabled:        true,
			DedupWindow:    5 * time.Minute,
			StatsRetention: 30 * 24 * time.Hour,
		},
		Correlation: CorrelationConfig{
			Enabled:    true,
			TimeWindow: 24 * time.Hour,
			MaxEvents:  10000,
		},
		Report: ReportConfig{
			OutputDir:   "./reports",
			TemplateDir: "./templates",
			DefaultFmt:  "html",
		},
		Forensics: ForensicsConfig{
			HashAlgorithm: "sha256",
			SignReports:   false,
		},
		API: APIConfig{
			Host: "127.0.0.1",
			Port: 8080,
			Mode: "debug",
			CORS: CORSConfig{
				AllowedOrigins: []string{"*"},
				AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
				AllowedHeaders: []string{"*"},
			},
			Auth: AuthConfig{
				Enabled: false,
			},
		},
		Log: LogConfig{
			Level:      "info",
			Format:     "json",
			Output:     "stdout",
			MaxSize:    100,
			MaxBackups: 7,
			MaxAge:     30,
		},
		TUI: TUIConfig{
			Theme:      "dark",
			KeyMode:    "vi",
			AutoUpdate: true,
		},
	}
}
