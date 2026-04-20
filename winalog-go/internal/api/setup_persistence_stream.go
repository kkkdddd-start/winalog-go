//go:build !windows

package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func setupPersistenceStreamRoutes(r *gin.Engine, persistenceHandler *PersistenceHandler) {
	persistenceGroup := r.Group("/api/persistence")
	persistenceGroup.GET("/detect/stream", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message":     "Persistence detection stream is only available on Windows",
			"detections":  []interface{}{},
			"summary":     map[string]interface{}{},
			"duration":    "0s",
			"total_count": 0,
		})
	})
}
