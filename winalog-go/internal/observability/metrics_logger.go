package observability

import (
	"bytes"
	"encoding/json"
	"io"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"sync"
	"time"
)

type MetricsLogger struct {
	mu       sync.RWMutex
	file     *os.File
	interval time.Duration
	stopCh   chan struct{}
	ticker   *time.Ticker
}

var metricsLogger *MetricsLogger
var metricsOnce sync.Once

type MetricsEntry struct {
	Timestamp    string  `json:"timestamp"`
	Level        string  `json:"level"`
	Message      string  `json:"message"`
	MemAllocMB   float64 `json:"mem_alloc_mb"`
	MemTotalMB   float64 `json:"mem_total_mb"`
	MemSysMB     float64 `json:"mem_sys_mb"`
	NumGoroutine int     `json:"num_goroutine"`
	NumCPU       int     `json:"num_cpu"`
	MemPauseUs   uint64  `json:"mem_pause_us"`
	HeapObjects  int64   `json:"heap_objects"`
}

func GetMetricsLogger() *MetricsLogger {
	metricsOnce.Do(func() {
		exePath, err := os.Executable()
		if err != nil {
			exePath, _ = os.Getwd()
		}
		exeDir := filepath.Dir(exePath)
		logDir := filepath.Join(exeDir, "logs")

		if err := os.MkdirAll(logDir, 0755); err != nil {
			logDir = os.TempDir()
		}

		metricsPath := filepath.Join(logDir, "winalog_metrics.log")
		file, err := os.OpenFile(metricsPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
		if err != nil {
			return
		}

		metricsLogger = &MetricsLogger{
			file:     file,
			interval: 60 * time.Second,
			stopCh:   make(chan struct{}),
		}
	})
	return metricsLogger
}

func (m *MetricsLogger) Start() {
	if m == nil || m.file == nil {
		return
	}

	m.ticker = time.NewTicker(m.interval)
	go func() {
		m.logMetrics()
		for {
			select {
			case <-m.ticker.C:
				m.logMetrics()
			case <-m.stopCh:
				return
			}
		}
	}()
}

func (m *MetricsLogger) Stop() {
	if m == nil {
		return
	}
	close(m.stopCh)
	if m.ticker != nil {
		m.ticker.Stop()
	}
}

func (m *MetricsLogger) logMetrics() {
	if m == nil || m.file == nil {
		return
	}

	var memStats runtime.MemStats
	runtime.ReadMemStats(&memStats)

	metrics := MetricsEntry{
		Timestamp:    time.Now().Format(time.RFC3339),
		Level:        "info",
		Message:      "[METRICS]",
		MemAllocMB:   float64(memStats.Alloc) / 1024 / 1024,
		MemTotalMB:   float64(memStats.TotalAlloc) / 1024 / 1024,
		MemSysMB:     float64(memStats.Sys) / 1024 / 1024,
		NumGoroutine: runtime.NumGoroutine(),
		NumCPU:       runtime.NumCPU(),
		MemPauseUs:   memStats.PauseTotalNs / 1000,
		HeapObjects:  int64(memStats.HeapObjects),
	}

	jsonBytes, err := json.Marshal(metrics)
	if err != nil {
		return
	}
	jsonBytes = append(jsonBytes, '\n')

	m.mu.Lock()
	m.file.Write(jsonBytes)
	m.mu.Unlock()
}

func (m *MetricsLogger) LogStartup(reason string) {
	if m == nil || m.file == nil {
		return
	}

	entry := struct {
		Timestamp string `json:"timestamp"`
		Level     string `json:"level"`
		Message   string `json:"message"`
		Reason    string `json:"reason"`
	}{
		Timestamp: time.Now().Format(time.RFC3339),
		Level:     "info",
		Message:   "[STARTUP]",
		Reason:    reason,
	}

	jsonBytes, _ := json.Marshal(entry)
	jsonBytes = append(jsonBytes, '\n')

	m.mu.Lock()
	m.file.Write(jsonBytes)
	m.mu.Unlock()
}

func (m *MetricsLogger) LogError(module, errMsg string) {
	if m == nil || m.file == nil {
		return
	}

	entry := struct {
		Timestamp string `json:"timestamp"`
		Level     string `json:"level"`
		Message   string `json:"message"`
		Module    string `json:"module"`
		Error     string `json:"error"`
	}{
		Timestamp: time.Now().Format(time.RFC3339),
		Level:     "error",
		Message:   "[ERROR]",
		Module:    module,
		Error:     errMsg,
	}

	jsonBytes, _ := json.Marshal(entry)
	jsonBytes = append(jsonBytes, '\n')

	m.mu.Lock()
	m.file.Write(jsonBytes)
	m.mu.Unlock()
}

func (m *MetricsLogger) Close() error {
	if m == nil {
		return nil
	}
	m.Stop()
	return m.file.Close()
}

func (m *MetricsLogger) Path() string {
	if m == nil {
		return ""
	}
	return m.file.Name()
}

func (m *MetricsLogger) ReadLines(offset, limit int) ([]LogFileEntry, int, error) {
	if m == nil {
		return nil, 0, nil
	}

	m.mu.RLock()
	filePath := m.file.Name()
	m.mu.RUnlock()

	file, err := os.Open(filePath)
	if err != nil {
		return nil, 0, err
	}
	defer file.Close()

	var buf bytes.Buffer
	if _, err := io.Copy(&buf, file); err != nil {
		return nil, 0, err
	}
	content := buf.String()

	lines := strings.Split(content, "\n")
	var totalLines int
	for _, line := range lines {
		if strings.TrimSpace(line) != "" {
			totalLines++
		}
	}

	startLine := totalLines - offset - limit
	if startLine < 0 {
		startLine = 0
	}

	var entries []LogFileEntry
	lineNum := 0
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}
		lineNum++
		if lineNum <= startLine {
			continue
		}
		if len(entries) >= limit {
			break
		}

		var entry LogFileEntry
		if err := json.Unmarshal([]byte(line), &entry); err != nil {
			entry = LogFileEntry{
				Timestamp: time.Now().Format(time.RFC3339),
				Level:     "info",
				Message:   line,
			}
		}
		entries = append(entries, entry)
	}

	return entries, totalLines, nil
}

func (m *MetricsLogger) GetLogFiles() []LogFileInfo {
	if m == nil {
		return nil
	}

	info, _ := os.Stat(m.file.Name())
	if info == nil {
		return nil
	}

	return []LogFileInfo{
		{
			Name:    filepath.Base(m.file.Name()),
			Path:    m.file.Name(),
			Size:    info.Size(),
			ModTime: info.ModTime(),
			IsMain:  true,
		},
	}
}

func InitMetricsLogger() {
	logger := GetMetricsLogger()
	if logger != nil {
		logger.Start()
		logger.LogStartup("service started")
	}
}

func LogServiceError(module, errMsg string) {
	logger := GetMetricsLogger()
	if logger != nil {
		logger.LogError(module, errMsg)
	}
}

type APILogEntry struct {
	Timestamp string `json:"timestamp"`
	Level     string `json:"level"`
	Message   string `json:"message"`
	Status    int    `json:"status"`
	Latency   string `json:"latency"`
	ClientIP  string `json:"client_ip"`
	Method    string `json:"method"`
	Path      string `json:"path"`
}

func LogAPIRequest(entry APILogEntry) {
	logger := GetMetricsLogger()
	if logger != nil {
		logger.LogAPI(entry)
	}
}

func (m *MetricsLogger) LogAPI(entry APILogEntry) {
	if m == nil || m.file == nil {
		return
	}

	jsonBytes, _ := json.Marshal(entry)
	jsonBytes = append(jsonBytes, '\n')

	m.mu.Lock()
	m.file.Write(jsonBytes)
	m.mu.Unlock()
}
