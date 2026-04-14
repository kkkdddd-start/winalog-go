package api

import (
	"time"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine, alertHandler *AlertHandler, liveHandler *LiveHandler) {
	r.GET("/api/health", healthCheck)

	api := r.Group("/api")
	{
		events := api.Group("/events")
		{
			events.GET("", alertHandler.ListEvents)
			events.GET("/:id", alertHandler.GetEvent)
			events.POST("/search", alertHandler.SearchEvents)
			events.GET("/export", alertHandler.ExportEvents)
		}

		alerts := api.Group("/alerts")
		{
			alerts.GET("", alertHandler.ListAlerts)
			alerts.GET("/stats", alertHandler.GetAlertStats)
			alerts.GET("/trend", alertHandler.GetAlertTrend)
			alerts.GET("/:id", alertHandler.GetAlert)
			alerts.POST("/:id/resolve", alertHandler.ResolveAlert)
			alerts.POST("/:id/false-positive", alertHandler.MarkFalsePositive)
			alerts.DELETE("/:id", alertHandler.DeleteAlert)
			alerts.POST("/batch", alertHandler.BatchAlertAction)
		}

		live := api.Group("/live")
		{
			live.GET("/events", liveHandler.StreamEventsSSE)
			live.GET("/stats", liveHandler.GetLiveStats)
		}
	}
}

func healthCheck(c *gin.Context) {
	c.JSON(200, gin.H{
		"status":    "ok",
		"service":   "winalog-api",
		"timestamp": time.Now().Format(time.RFC3339),
	})
}
