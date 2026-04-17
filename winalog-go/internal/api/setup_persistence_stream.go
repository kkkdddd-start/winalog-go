//go:build !windows

package api

import "github.com/gin-gonic/gin"

func setupPersistenceStreamRoutes(r *gin.Engine, persistenceHandler *PersistenceHandler) {
}
