//go:build !windows

package api

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *SystemHandler) GetUsers(c *gin.Context) {
	log.Printf("[INFO] GetUsers called - not supported on this platform")

	c.JSON(http.StatusOK, UserResponse{
		Users: []*UserInfo{},
		Total: 0,
	})
}

func (h *SystemHandler) GetScheduledTasks(c *gin.Context) {
	log.Printf("[INFO] GetScheduledTasks called - not supported on this platform")

	c.JSON(http.StatusOK, TaskResponse{
		Tasks: []*TaskInfo{},
		Total: 0,
	})
}

func getWindowsSystemMemory() (totalGB float64, freeGB float64) {
	return 0, 0
}
