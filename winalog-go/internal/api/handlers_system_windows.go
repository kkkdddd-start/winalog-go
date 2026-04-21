//go:build windows

package api

import (
	"log"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/collectors"
	"github.com/kkkdddd-start/winalog-go/internal/config"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
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

	enabledStr := c.DefaultQuery("enabled", "true")
	enabled := enabledStr == "true" || enabledStr == "1"

	log.Printf("[INFO] GetProcesses called with enabled=%v, limit=%d", enabled, limit)

	if !enabled {
		log.Printf("[INFO] GetProcesses skipped - module disabled")
		c.JSON(200, ProcessResponse{
			Processes: []*ProcessInfo{},
			Total:     0,
		})
		return
	}

	collector := collectors.NewProcessInfoCollector()
	processes, err := collector.CollectProcessInfoWithSignature()
	if err != nil {
		log.Printf("[ERROR] GetProcesses failed: %v", err)
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	log.Printf("[INFO] GetProcesses returned %d processes", len(processes))

	result := make([]*ProcessInfo, 0, len(processes))
	for _, p := range processes {
		var sigInfo *SignatureInfo
		if p.Signature != nil {
			sigInfo = &SignatureInfo{
				Status:     p.Signature.Status,
				Issuer:     p.Signature.Issuer,
				Subject:    p.Signature.Subject,
				ValidFrom:  p.Signature.ValidFrom,
				ValidTo:    p.Signature.ValidTo,
				Thumbprint: p.Signature.Thumbprint,
			}
		}
		result = append(result, &ProcessInfo{
			PID:         p.PID,
			PPID:        p.PPID,
			Name:        p.Name,
			Exe:         p.Path,
			Args:        p.CommandLine,
			User:        p.User,
			Status:      "",
			Path:        p.Path,
			CommandLine: p.CommandLine,
			IsSigned:    p.IsSigned,
			Signature:   sigInfo,
		})
		if len(result) >= limit {
			break
		}
	}

	if h.db != nil {
		systemRepo := storage.NewSystemRepo(h.db)
		storageProcesses := make([]*storage.ProcessInfo, 0, len(processes))
		for _, p := range processes {
			var startedAt *time.Time
			if !p.StartTime.IsZero() {
				startedAt = &p.StartTime
			}
			storageProcesses = append(storageProcesses, &storage.ProcessInfo{
				PID:         int(p.PID),
				Name:        p.Name,
				Exe:         p.Path,
				CommandLine: p.CommandLine,
				Username:    p.User,
				ParentPID:   int(p.PPID),
				StartedAt:   startedAt,
				MemoryMB:    p.MemoryMB,
				CPUPercent:  p.CPUPercent,
				CollectedAt: time.Now(),
			})
		}
		if err := systemRepo.SaveProcesses(storageProcesses); err != nil {
			log.Printf("[ERROR] Failed to save processes to database: %v", err)
		} else {
			log.Printf("[INFO] Saved %d processes to database", len(storageProcesses))
		}
	}

	c.JSON(200, ProcessResponse{
		Processes: result,
		Total:     len(processes),
	})
}
