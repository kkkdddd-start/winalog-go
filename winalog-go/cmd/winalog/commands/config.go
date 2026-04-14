package commands

import (
	"github.com/kkkdddd-start/winalog-go/internal/config"
)

var globalConfigLoader = config.NewLoader()

func getConfig() *config.Config {
	cfg, err := globalConfigLoader.Load("")
	if err != nil {
		cfg = config.DefaultConfig()
	}
	return cfg
}

func getConfigWithPath(path string) (*config.Config, error) {
	return globalConfigLoader.Load(path)
}
