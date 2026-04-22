//go:build windows

package api

import (
	"log"
	"net/http"
	"strconv"
	"time"
	"unsafe"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/collectors"
	"github.com/kkkdddd-start/winalog-go/internal/config"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"golang.org/x/sys/windows"
)

// GetProcesses godoc
// @Summary 获取进程列表
// @Description 返回系统进程列表(Windows)
// @Tags system
// @Produce json
// @Param enabled query string false "是否启用" default(true)
// @Param limit query int false "返回数量限制" default(100)
// @Success 200 {object} ProcessResponse
// @Failure 500 {object} ErrorResponse
// @Router /api/system/processes [get]
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

// GetUsers godoc
// @Summary 获取用户列表
// @Description 返回系统本地用户列表(Windows)
// @Tags system
// @Produce json
// @Param enabled query string false "是否启用" default(true)
// @Success 200 {object} UserResponse
// @Failure 500 {object} ErrorResponse
// @Router /api/system/users [get]
func (h *SystemHandler) GetUsers(c *gin.Context) {
	enabledStr := c.DefaultQuery("enabled", "true")
	enabled := enabledStr == "true" || enabledStr == "1"

	log.Printf("[INFO] GetUsers called with enabled=%v", enabled)

	if !enabled {
		log.Printf("[INFO] GetUsers skipped - module disabled")
		c.JSON(http.StatusOK, UserResponse{
			Users: []*UserInfo{},
			Total: 0,
		})
		return
	}

	users, err := collectors.ListLocalUsers()
	if err != nil {
		log.Printf("[ERROR] GetUsers failed: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	log.Printf("[INFO] GetUsers returned %d users", len(users))

	result := make([]*UserInfo, 0, len(users))
	for _, u := range users {
		result = append(result, &UserInfo{
			Name:     u.Name,
			SID:      u.SID,
			Enabled:  u.Enabled,
			FullName: u.FullName,
			Type:     u.Type,
		})
	}

	c.JSON(http.StatusOK, UserResponse{
		Users: result,
		Total: len(result),
	})
}

// GetScheduledTasks godoc
// @Summary 获取计划任务列表
// @Description 返回系统计划任务列表(Windows)
// @Tags system
// @Produce json
// @Param enabled query string false "是否启用" default(true)
// @Success 200 {object} TaskResponse
// @Failure 500 {object} ErrorResponse
// @Router /api/system/tasks [get]
func (h *SystemHandler) GetScheduledTasks(c *gin.Context) {
	enabledStr := c.DefaultQuery("enabled", "true")
	enabled := enabledStr == "true" || enabledStr == "1"

	log.Printf("[INFO] GetScheduledTasks called with enabled=%v", enabled)

	if !enabled {
		log.Printf("[INFO] GetScheduledTasks skipped - module disabled")
		c.JSON(http.StatusOK, TaskResponse{
			Tasks: []*TaskInfo{},
			Total: 0,
		})
		return
	}

	tasks, err := collectors.ListScheduledTasks()
	if err != nil {
		log.Printf("[ERROR] GetScheduledTasks failed: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	log.Printf("[INFO] GetScheduledTasks returned %d tasks", len(tasks))

	result := make([]*TaskInfo, 0, len(tasks))
	for _, t := range tasks {
		result = append(result, &TaskInfo{
			Name:  t.TaskName,
			Path:  t.TaskPath,
			State: t.State,
		})
	}

	c.JSON(http.StatusOK, TaskResponse{
		Tasks: result,
		Total: len(result),
	})
}

func getWindowsSystemMemory() (totalGB float64, freeGB float64) {
	type memoryStatusEx struct {
		dwLength                uint32
		dwMemoryLoad            uint32
		ullTotalPhys            uint64
		ullAvailPhys            uint64
		ullTotalPageFile        uint64
		ullAvailPageFile        uint64
		ullTotalVirtual         uint64
		ullAvailVirtual         uint64
		ullAvailExtendedVirtual uint64
	}

	var msx memoryStatusEx
	msx.dwLength = uint32(unsafe.Sizeof(msx))

	ret, _, _ := windows.NewLazySystemDLL("kernel32.dll").NewProc("GlobalMemoryStatusEx").Call(
		uintptr(unsafe.Pointer(&msx)),
	)
	if ret == 0 {
		return 0, 0
	}

	return float64(msx.ullTotalPhys) / 1024 / 1024 / 1024, float64(msx.ullAvailPhys) / 1024 / 1024 / 1024
}
