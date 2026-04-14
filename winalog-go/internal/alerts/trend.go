package alerts

import (
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type AlertTrend struct {
	mu         sync.RWMutex
	window     time.Duration
	hourly     map[int]int64
	daily      map[string]int64
	weekly     map[int]map[int]int64
	bySeverity map[string][]int64
	byHour     []int64
	byDay      []int64
}

func NewAlertTrend(window time.Duration) *AlertTrend {
	if window == 0 {
		window = 24 * time.Hour
	}

	return &AlertTrend{
		window:     window,
		hourly:     make(map[int]int64),
		daily:      make(map[string]int64),
		weekly:     make(map[int]map[int]int64),
		bySeverity: make(map[string][]int64),
		byHour:     make([]int64, 24),
		byDay:      make([]int64, 7),
	}
}

func (t *AlertTrend) Record(alert *types.Alert) {
	t.mu.Lock()
	defer t.mu.Unlock()

	now := time.Now()
	hour := now.Hour()
	day := now.Weekday().String()

	t.hourly[hour]++
	t.daily[day]++
	t.byHour[hour]++

	dayIndex := int(now.Weekday())
	if t.weekly[dayIndex] == nil {
		t.weekly[dayIndex] = make(map[int]int64)
	}
	if t.weekly[dayIndex][hour] == 0 {
		t.weekly[dayIndex] = make(map[int]int64)
	}
	t.weekly[dayIndex][hour]++

	severityKey := string(alert.Severity)
	if t.bySeverity[severityKey] == nil {
		t.bySeverity[severityKey] = make([]int64, 24)
	}
	t.bySeverity[severityKey][hour]++
}

func (t *AlertTrend) GetHourlyDistribution() map[int]int64 {
	t.mu.RLock()
	defer t.mu.RUnlock()

	result := make(map[int]int64)
	for k, v := range t.hourly {
		result[k] = v
	}
	return result
}

func (t *AlertTrend) GetDailyDistribution() map[string]int64 {
	t.mu.RLock()
	defer t.mu.RUnlock()

	result := make(map[string]int64)
	for k, v := range t.daily {
		result[k] = v
	}
	return result
}

func (t *AlertTrend) GetWeeklyDistribution() map[int]map[int]int64 {
	t.mu.RLock()
	defer t.mu.RUnlock()

	result := make(map[int]map[int]int64)
	for day, hours := range t.weekly {
		result[day] = make(map[int]int64)
		for hour, count := range hours {
			result[day][hour] = count
		}
	}
	return result
}

func (t *AlertTrend) GetBySeverity() map[string][]int64 {
	t.mu.RLock()
	defer t.mu.RUnlock()

	result := make(map[string][]int64)
	for severity, hours := range t.bySeverity {
		result[severity] = make([]int64, len(hours))
		copy(result[severity], hours)
	}
	return result
}

func (t *AlertTrend) CalculateTrend(days int) ([]*TrendPoint, error) {
	t.mu.RLock()
	defer t.mu.RUnlock()

	points := make([]*TrendPoint, 0, days)
	now := time.Now()

	for i := days - 1; i >= 0; i-- {
		date := now.AddDate(0, 0, -i)
		dateStr := date.Format("2006-01-02")

		count := t.daily[date.Weekday().String()]
		if day, ok := t.daily[dateStr]; ok {
			count = day
		}

		points = append(points, &TrendPoint{
			Date:  date,
			Count: count,
		})
	}

	return points, nil
}

type TrendPoint struct {
	Date  time.Time
	Count int64
}

func (t *AlertTrend) Reset() {
	t.mu.Lock()
	defer t.mu.Unlock()

	t.hourly = make(map[int]int64)
	t.daily = make(map[string]int64)
	t.weekly = make(map[int]map[int]int64)
	t.bySeverity = make(map[string][]int64)
	t.byHour = make([]int64, 24)
	t.byDay = make([]int64, 7)
}
