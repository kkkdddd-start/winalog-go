//go:build windows

package collectors

import (
	"context"
	"encoding/json"
	"log"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type TaskInfoCollector struct {
	BaseCollector
}

type ScheduledTaskInfo struct {
	TaskName    string
	TaskPath    string
	State       string
	Description string
	Author      string
}

func NewTaskInfoCollector() *TaskInfoCollector {
	return &TaskInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "task_info",
				Description:   "Collect scheduled task information",
				RequiresAdmin: true,
				Version:       "1.0.0",
			},
		},
	}
}

func (c *TaskInfoCollector) Collect(ctx context.Context) ([]interface{}, error) {
	tasks, err := c.collectTaskInfo()
	if err != nil {
		return nil, err
	}
	interfaces := make([]interface{}, len(tasks))
	for i, t := range tasks {
		interfaces[i] = t
	}
	return interfaces, nil
}

func (c *TaskInfoCollector) collectTaskInfo() ([]*types.ScheduledTask, error) {
	tasks := make([]*types.ScheduledTask, 0)

	cmd := `Get-ScheduledTask | Select-Object TaskName,TaskPath,State,Description,Author | ForEach-Object { $_ | ConvertTo-Json -Compress }`

	result := utils.RunPowerShell(cmd)
	if !result.Success() || result.Output == "" {
		log.Printf("[WARN] Get-ScheduledTask failed or returned empty: %v, trying alternative method", result.Error)
		return c.collectTaskInfoAlternative()
	}

	output := strings.TrimSpace(result.Output)
	if output == "" || output == "null" || output == "[]" {
		log.Printf("[WARN] Get-ScheduledTask returned empty result, trying alternative method")
		return c.collectTaskInfoAlternative()
	}

	lines := strings.Split(output, "\n")
	parseCount := 0
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" {
			continue
		}

		var taskRaw struct {
			TaskName    string `json:"TaskName"`
			TaskPath    string `json:"TaskPath"`
			State       string `json:"State"`
			Description string `json:"Description"`
			Author      string `json:"Author"`
		}

		if err := json.Unmarshal([]byte(line), &taskRaw); err != nil {
			log.Printf("[WARN] Failed to parse task JSON: %v", err)
			continue
		}

		if taskRaw.TaskName == "" {
			continue
		}

		task := &types.ScheduledTask{
			Name:        taskRaw.TaskName,
			Path:        taskRaw.TaskPath,
			State:       taskRaw.State,
			Description: taskRaw.Description,
			Author:      taskRaw.Author,
			LastRun:     c.getTaskLastRunTime(taskRaw.TaskName, taskRaw.TaskPath),
			NextRun:     c.getTaskNextRunTime(taskRaw.TaskName, taskRaw.TaskPath),
		}

		tasks = append(tasks, task)
		parseCount++
	}

	log.Printf("[INFO] Get-ScheduledTask parsed %d tasks", parseCount)

	if parseCount == 0 {
		log.Printf("[WARN] Get-ScheduledTask parsed 0 tasks, trying alternative method")
		return c.collectTaskInfoAlternative()
	}

	return tasks, nil
}

func (c *TaskInfoCollector) collectTaskInfoAlternative() ([]*types.ScheduledTask, error) {
	tasks := make([]*types.ScheduledTask, 0)

	cmd := `Get-WmiObject -Namespace "root\Microsoft\SqlServer\ComputerManagement11" -Class ScheduledTasks -ErrorAction SilentlyContinue | Select-Object TaskName, TaskPath, Status, Description | ForEach-Object { $_ | ConvertTo-Json -Compress }`

	log.Printf("[INFO] Collecting tasks with alternative command")

	result := utils.RunPowerShell(cmd)
	if !result.Success() || result.Output == "" {
		log.Printf("[INFO] Alternative scheduled task method also failed, trying schtasks")
		return c.collectTaskInfoSchtasks()
	}

	output := strings.TrimSpace(result.Output)
	if output == "" || output == "null" || strings.HasPrefix(output, "null") {
		return c.collectTaskInfoSchtasks()
	}

	lines := strings.Split(output, "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" {
			continue
		}

		var taskRaw struct {
			TaskName    string `json:"TaskName"`
			TaskPath    string `json:"TaskPath"`
			Status      string `json:"Status"`
			Description string `json:"Description"`
		}

		if err := json.Unmarshal([]byte(line), &taskRaw); err != nil {
			continue
		}

		if taskRaw.TaskName == "" {
			continue
		}

		tasks = append(tasks, &types.ScheduledTask{
			Name:        taskRaw.TaskName,
			Path:        taskRaw.TaskPath,
			State:       taskRaw.Status,
			Description: taskRaw.Description,
		})
	}

	return tasks, nil
}

func (c *TaskInfoCollector) collectTaskInfoSchtasks() ([]*types.ScheduledTask, error) {
	tasks := make([]*types.ScheduledTask, 0)

	cmd := `schtasks /query /fo CSV /nh | ForEach-Object { $_ -replace '"', '' } | ForEach-Object { $parts = $_ -split ','; if ($parts.Length -ge 3) { [PSCustomObject]@{ TaskName = $parts[1]; TaskPath = $parts[0]; State = $parts[2] } | ConvertTo-Json -Compress } }`

	log.Printf("[INFO] Collecting tasks with schtasks command")

	result := utils.RunPowerShell(cmd)
	if !result.Success() || result.Output == "" {
		log.Printf("[WARN] schtasks method also failed: %v", result.Error)
		return tasks, nil
	}

	output := strings.TrimSpace(result.Output)
	if output == "" || output == "null" {
		return tasks, nil
	}

	lines := strings.Split(output, "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" || !strings.Contains(line, "TaskName") {
			continue
		}

		var taskRaw struct {
			TaskName string `json:"TaskName"`
			TaskPath string `json:"TaskPath"`
			State    string `json:"State"`
		}

		if err := json.Unmarshal([]byte(line), &taskRaw); err != nil {
			continue
		}

		if taskRaw.TaskName == "" {
			continue
		}

		tasks = append(tasks, &types.ScheduledTask{
			Name:  taskRaw.TaskName,
			Path:  taskRaw.TaskPath,
			State: taskRaw.State,
		})
	}

	log.Printf("[INFO] schtasks method parsed %d tasks", len(tasks))
	return tasks, nil
}

func (c *TaskInfoCollector) getTaskActions(taskName, taskPath string) []string {
	cmd := `Get-ScheduledTask -TaskName '%s' -TaskPath '%s' | Get-ScheduledTaskInfo | Select-Object -ExpandProperty Actions | ConvertTo-Json -Compress`

	result := utils.RunPowerShell(strings.Fields(cmd)[0])
	if !result.Success() {
		return []string{}
	}

	var actions []struct {
		Execute string `json:"Execute"`
	}

	if err := json.Unmarshal([]byte(result.Output), &actions); err != nil {
		return []string{}
	}

	cmds := make([]string, 0, len(actions))
	for _, a := range actions {
		if a.Execute != "" {
			cmds = append(cmds, a.Execute)
		}
	}

	return cmds
}

func (c *TaskInfoCollector) getTaskLastRunTime(taskName, taskPath string) time.Time {
	cmd := `(Get-ScheduledTask -TaskName '%s' -TaskPath '%s' -ErrorAction SilentlyContinue | Get-ScheduledTaskInfo -ErrorAction SilentlyContinue).LastRunTime`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		if t, err := time.Parse("2006-01-02 15:04:05", strings.TrimSpace(result.Output)); err == nil {
			return t
		}
	}

	return time.Time{}
}

func (c *TaskInfoCollector) getTaskNextRunTime(taskName, taskPath string) time.Time {
	cmd := `(Get-ScheduledTask -TaskName '%s' -TaskPath '%s' -ErrorAction SilentlyContinue | Get-ScheduledTaskInfo -ErrorAction SilentlyContinue).NextRunTime`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		if t, err := time.Parse("2006-01-02 15:04:05", strings.TrimSpace(result.Output)); err == nil {
			return t
		}
	}

	return time.Time{}
}

func ListScheduledTasks() ([]ScheduledTaskInfo, error) {
	tasks := make([]ScheduledTaskInfo, 0)

	cmd := `Get-ScheduledTask | Select-Object TaskName,TaskPath,State | ForEach-Object { $_ | ConvertTo-Json -Compress }`

	log.Printf("[INFO] Collecting scheduled tasks with command: Get-ScheduledTask")

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		log.Printf("[ERROR] Get-ScheduledTask failed: %v", result.Error)
		return tasks, result.Error
	}

	output := strings.TrimSpace(result.Output)
	if output == "" {
		log.Printf("[WARN] Get-ScheduledTask returned empty result")
		return tasks, nil
	}

	log.Printf("[DEBUG] Get-ScheduledTask raw output length: %d", len(output))

	lines := strings.Split(output, "\n")
	parseCount := 0
	errorCount := 0
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" {
			continue
		}

		var taskRaw struct {
			TaskName string `json:"TaskName"`
			TaskPath string `json:"TaskPath"`
			State    string `json:"State"`
		}

		if err := json.Unmarshal([]byte(line), &taskRaw); err != nil {
			log.Printf("[WARN] Failed to parse task JSON: %v, line: %s", err, line)
			errorCount++
			continue
		}

		tasks = append(tasks, ScheduledTaskInfo{
			TaskName: taskRaw.TaskName,
			TaskPath: taskRaw.TaskPath,
			State:    taskRaw.State,
		})
		parseCount++
	}

	log.Printf("[INFO] Get-ScheduledTask parsed %d tasks, %d errors, total lines: %d", parseCount, errorCount, len(lines))

	return tasks, nil
}

func GetTaskInfo(taskName string) (*ScheduledTaskInfo, error) {
	cmd := `Get-ScheduledTask -TaskName '%s' -ErrorAction SilentlyContinue | Get-ScheduledTaskInfo -ErrorAction SilentlyContinue | ConvertTo-Json -Compress`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return nil, result.Error
	}

	var taskRaw struct {
		TaskName    string `json:"TaskName"`
		TaskPath    string `json:"TaskPath"`
		State       string `json:"State"`
		Description string `json:"Description"`
		Author      string `json:"Author"`
	}

	if err := json.Unmarshal([]byte(result.Output), &taskRaw); err != nil {
		return nil, err
	}

	return &ScheduledTaskInfo{
		TaskName:    taskRaw.TaskName,
		TaskPath:    taskRaw.TaskPath,
		State:       taskRaw.State,
		Description: taskRaw.Description,
	}, nil
}

func IsTaskRunning(taskName string) bool {
	cmd := `(Get-ScheduledTask -TaskName '%s' -ErrorAction SilentlyContinue | Get-ScheduledTaskInfo -ErrorAction SilentlyContinue).State -eq 'Running'`

	result := utils.RunPowerShell(cmd)
	return result.Success() && strings.Contains(strings.ToLower(result.Output), "true")
}

func GetTaskLastRunTime(taskName string) (time.Time, error) {
	cmd := `(Get-ScheduledTask -TaskName '%s' -ErrorAction SilentlyContinue | Get-ScheduledTaskInfo -ErrorAction SilentlyContinue).LastRunTime`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return time.Time{}, result.Error
	}

	return time.Parse("2006-01-02 15:04:05", strings.TrimSpace(result.Output))
}

func GetTaskNextRunTime(taskName string) (time.Time, error) {
	cmd := `(Get-ScheduledTask -TaskName '%s' -ErrorAction SilentlyContinue | Get-ScheduledTaskInfo -ErrorAction SilentlyContinue).NextRunTime`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return time.Time{}, result.Error
	}

	return time.Parse("2006-01-02 15:04:05", strings.TrimSpace(result.Output))
}
