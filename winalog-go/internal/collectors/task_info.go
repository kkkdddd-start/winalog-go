package collectors

import (
	"context"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type TaskInfoCollector struct {
	BaseCollector
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

	task := &types.ScheduledTask{
		Name:        "SampleTask",
		State:       "Ready",
		Description: "Sample scheduled task",
	}

	tasks = append(tasks, task)

	return tasks, nil
}

type ScheduledTaskInfo struct {
	Name        string
	State       string
	LastRunTime time.Time
	NextRunTime time.Time
	Path        string
	Command     string
	Trigger     string
}

func ListScheduledTasks() ([]ScheduledTaskInfo, error) {
	return []ScheduledTaskInfo{}, nil
}

func GetTaskInfo(taskName string) (*ScheduledTaskInfo, error) {
	return &ScheduledTaskInfo{Name: taskName}, nil
}

func IsTaskRunning(taskName string) bool {
	return false
}

func GetTaskLastRunTime(taskName string) (time.Time, error) {
	return time.Now(), nil
}

func GetTaskNextRunTime(taskName string) (time.Time, error) {
	return time.Now(), nil
}

func CollectScheduledTasks(ctx context.Context) ([]*types.ScheduledTask, error) {
	collector := NewTaskInfoCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	tasks := make([]*types.ScheduledTask, 0, len(results))
	for _, r := range results {
		if t, ok := r.(*types.ScheduledTask); ok {
			tasks = append(tasks, t)
		}
	}
	return tasks, nil
}
