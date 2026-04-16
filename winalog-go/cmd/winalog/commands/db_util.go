package commands

import (
	"fmt"

	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

func openDB() (*storage.DB, func(), error) {
	cfg := getConfig()
	db, err := storage.NewDB(cfg.Database.Path)
	if err != nil {
		return nil, nil, fmt.Errorf("failed to open database: %w", err)
	}
	return db, func() { db.Close() }, nil
}
