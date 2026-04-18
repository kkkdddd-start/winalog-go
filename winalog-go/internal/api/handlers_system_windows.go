//go:build windows

package api

import (
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/collectors"
	"github.com/kkkdddd-start/winalog-go/internal/config"
)

func (h *SystemHandler) GetProcesses(c *gin.Context) {
	cfg := config.DefaultConfig()
	defaultLimit := cfg.Search.DefaultProcessLimit
	maxLimit := cfg.Search.MaxProcessLimit

	limitStr := c.DefaultQuery("limit", strconv.Itoa(defaultLimit))
	limit, _ := strconv.Atoi(limitStr)
	if limit <= 0 || limit > maxLimit {
		limit = defaultLimit
	}

	processes, err := collectors.ListProcesses()
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	result := make([]*ProcessInfo, 0, len(processes))
	for _, p := range processes {
		result = append(result, &ProcessInfo{
			PID:    p.PID,
			PPID:   p.PPID,
			Name:   p.Name,
			Exe:    p.Path,
			Args:   p.Command,
			User:   p.User,
			Status: "",
		})
		if len(result) >= limit {
			break
		}
	}

	c.JSON(200, ProcessResponse{
		Processes: result,
		Total:     len(processes),
	})
}
