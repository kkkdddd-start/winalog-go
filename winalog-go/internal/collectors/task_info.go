package collectors

import (
	"context"
	"encoding/json"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

func (c *TaskInfoCollector) collectTaskInfo() ([]*types.ScheduledTask, error) {
	tasks := make([]*types.ScheduledTask, 0)

	cmd := `Get-ScheduledTask | Select-Object TaskName,TaskPath,State,Description,Author | ForEach-Object { $_ | ConvertTo-Json -Compress }`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return tasks, result.Error
	}

	output := strings.TrimSpace(result.Output)
	if output == "" {
		return tasks, nil
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
			State       string `json:"State"`
			Description string `json:"Description"`
			Author      string `json:"Author"`
		}

		if err := json.Unmarshal([]byte(line), &taskRaw); err != nil {
			continue
		}

		task := &types.ScheduledTask{
			Name:        taskRaw.TaskName,
			Path:        taskRaw.TaskPath,
			State:       taskRaw.State,
			Description: taskRaw.Description,
			Author:      taskRaw.Author,
			Actions:     c.getTaskActions(taskRaw.TaskName, taskRaw.TaskPath),
			LastRunTime: c.getTaskLastRunTime(taskRaw.TaskName, taskRaw.TaskPath),
			NextRunTime: c.getTaskNextRunTime(taskRaw.TaskName, taskRaw.TaskPath),
		}

		tasks = append(tasks, task)
	}

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

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return tasks, result.Error
	}

	output := strings.TrimSpace(result.Output)
	if output == "" {
		return tasks, nil
	}

	lines := strings.Split(output, "\n")
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
			continue
		}

		tasks = append(tasks, ScheduledTaskInfo{
			Name:  taskRaw.TaskName,
			Path:  taskRaw.TaskPath,
			State: taskRaw.State,
		})
	}

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
		Name:        taskRaw.TaskName,
		Path:        taskRaw.TaskPath,
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
