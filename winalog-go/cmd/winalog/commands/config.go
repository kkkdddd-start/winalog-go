package commands

import (
	"github.com/kkkdddd-start/winalog-go/internal/config"
)

var globalConfigLoader = config.NewLoader()
var globalConfigPath string

func getConfig() *config.Config {
	cfg, err := globalConfigLoader.Load("")
	if err != nil {
		cfg = config.DefaultConfig()
	}
	return cfg
}

func getConfigPath() string {
	return globalConfigPath
}

func getConfigWithPath(path string) (*config.Config, error) {
	globalConfigPath = path
	return globalConfigLoader.Load(path)
}
