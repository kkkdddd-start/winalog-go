package config

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
)

type Loader struct {
	configPath string
	viper      *viper.Viper
}

func NewLoader() *Loader {
	return &Loader{
		viper: viper.New(),
	}
}

func (l *Loader) Load(configPath string) (*Config, error) {
	l.configPath = configPath

	if configPath != "" {
		dir := filepath.Dir(configPath)
		file := filepath.Base(configPath)
		ext := filepath.Ext(file)
		name := strings.TrimSuffix(file, ext)

		l.viper.SetConfigType(strings.TrimPrefix(ext, "."))
		l.viper.SetConfigName(name)

		if dir != "" && dir != "." {
			l.viper.AddConfigPath(dir)
		}
	}

	l.viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	l.viper.AutomaticEnv()

	if configPath == "" {
		l.viper.AddConfigPath(".")
		l.viper.AddConfigPath("$HOME/.winalog")
		l.viper.AddConfigPath("/etc/winalog")
	}

	cfg := DefaultConfig()

	l.bindEnv("database.path", "WINALOG_DATABASE_PATH")
	l.bindEnv("database.wal_mode", "WINALOG_DATABASE_WAL_MODE")
	l.bindEnv("import.workers", "WINALOG_IMPORT_WORKERS")
	l.bindEnv("import.batch_size", "WINALOG_IMPORT_BATCH_SIZE")
	l.bindEnv("alerts.enabled", "WINALOG_ALERTS_ENABLED")
	l.bindEnv("alerts.dedup_window", "WINALOG_ALERTS_DEDUP_WINDOW")
	l.bindEnv("api.host", "WINALOG_API_HOST")
	l.bindEnv("api.port", "WINALOG_API_PORT")
	l.bindEnv("log.level", "WINALOG_LOG_LEVEL")

	if err := l.viper.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); !ok {
			return nil, fmt.Errorf("failed to read config: %w", err)
		}
	}

	if err := l.viper.Unmarshal(cfg); err != nil {
		return nil, fmt.Errorf("failed to unmarshal config: %w", err)
	}

	expandPaths(cfg)

	return cfg, nil
}

func (l *Loader) bindEnv(key, envKey string) {
	if val := os.Getenv(envKey); val != "" {
		l.viper.Set(key, val)
	}
}

func (l *Loader) Watch(onChange func(*Config)) error {
	l.viper.WatchConfig()
	l.viper.OnConfigChange(func(e fsnotify.Event) {
		cfg := DefaultConfig()
		if err := l.viper.Unmarshal(cfg); err != nil {
			return
		}
		onChange(cfg)
	})
	return nil
}

func (l *Loader) Save(cfg *Config, path string) error {
	v := viper.New()
	v.Set("database", cfg.Database)
	v.Set("import", cfg.Import)
	v.Set("search", cfg.Search)
	v.Set("alerts", cfg.Alerts)
	v.Set("correlation", cfg.Correlation)
	v.Set("report", cfg.Report)
	v.Set("forensics", cfg.Forensics)
	v.Set("api", cfg.API)
	v.Set("log", cfg.Log)
	v.Set("tui", cfg.TUI)

	dir := filepath.Dir(path)
	if dir != "" && dir != "." {
		if err := os.MkdirAll(dir, 0755); err != nil {
			return fmt.Errorf("failed to create config directory: %w", err)
		}
	}

	ext := filepath.Ext(path)
	v.SetConfigType(strings.TrimPrefix(ext, "."))
	return v.WriteConfigAs(path)
}

func expandPaths(cfg *Config) {
	if strings.HasPrefix(cfg.Database.Path, "~") {
		home, _ := os.UserHomeDir()
		cfg.Database.Path = filepath.Join(home, strings.TrimPrefix(cfg.Database.Path, "~"))
	}
}

func (c *Config) Validate() error {
	if c.Database.Path == "" {
		return fmt.Errorf("database.path is required")
	}
	if c.Import.Workers <= 0 {
		c.Import.Workers = 1
	}
	if c.Import.Workers > 32 {
		c.Import.Workers = 32
	}
	if c.Import.BatchSize <= 0 {
		c.Import.BatchSize = 1000
	}
	if c.API.Port <= 0 || c.API.Port > 65535 {
		return fmt.Errorf("invalid api.port: %d", c.API.Port)
	}
	return nil
}
