//go:build !windows

package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *SystemHandler) GetProcesses(c *gin.Context) {
	c.JSON(http.StatusOK, ProcessResponse{
		Processes: []*ProcessInfo{},
		Total:     0,
	})
}
