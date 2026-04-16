package api

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
)

func init() {
	gin.SetMode(gin.TestMode)
}

func TestHealthCheck(t *testing.T) {
	t.Helper()
	router := gin.New()
	router.GET("/api/health", healthCheck)

	req, _ := http.NewRequest("GET", "/api/health", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("healthCheck() status = %v, want %v", w.Code, http.StatusOK)
	}

	var response map[string]interface{}
	if err := json.Unmarshal(w.Body.Bytes(), &response); err != nil {
		t.Fatalf("Failed to parse response: %v", err)
	}

	if response["status"] != "ok" {
		t.Errorf("healthCheck() status = %v, want ok", response["status"])
	}
	if response["service"] != "winalog-api" {
		t.Errorf("healthCheck() service = %v, want winalog-api", response["service"])
	}
}

func TestQueryHandler_Execute_EmptySQL(t *testing.T) {
	t.Helper()
	router := gin.New()

	handler := &QueryHandler{db: nil}
	router.POST("/api/query/execute", handler.Execute)

	body := bytes.NewBufferString(`{"sql": ""}`)
	req, _ := http.NewRequest("POST", "/api/query/execute", body)
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()

	router.ServeHTTP(w, req)

	if w.Code != http.StatusBadRequest {
		t.Errorf("Execute() status = %v, want %v", w.Code, http.StatusBadRequest)
	}
}

func TestQueryHandler_Execute_InvalidJSON(t *testing.T) {
	t.Helper()
	router := gin.New()

	handler := &QueryHandler{db: nil}
	router.POST("/api/query/execute", handler.Execute)

	body := bytes.NewBufferString(`invalid json`)
	req, _ := http.NewRequest("POST", "/api/query/execute", body)
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusBadRequest {
		t.Errorf("Execute() status = %v, want %v", w.Code, http.StatusBadRequest)
	}
}

func TestSetupCorrelationRoutes(t *testing.T) {
	t.Helper()
	router := gin.New()
	handler := &CorrelationHandler{db: nil}
	SetupCorrelationRoutes(router, handler)

	routes := router.Routes()
	found := false
	for _, r := range routes {
		if r.Method == "POST" && r.Path == "/api/correlation/analyze" {
			found = true
			break
		}
	}
	if !found {
		t.Error("SetupCorrelationRoutes() did not register /api/correlation/analyze")
	}
}

func TestSetupMultiRoutes(t *testing.T) {
	t.Helper()
	router := gin.New()
	handler := &MultiHandler{db: nil}
	SetupMultiRoutes(router, handler)

	routes := router.Routes()
	foundAnalyze := false
	foundLateral := false
	for _, r := range routes {
		if r.Method == "POST" && r.Path == "/api/multi/analyze" {
			foundAnalyze = true
		}
		if r.Method == "GET" && r.Path == "/api/multi/lateral" {
			foundLateral = true
		}
	}
	if !foundAnalyze {
		t.Error("SetupMultiRoutes() did not register POST /api/multi/analyze")
	}
	if !foundLateral {
		t.Error("SetupMultiRoutes() did not register GET /api/multi/lateral")
	}
}

func TestSetupQueryRoutes(t *testing.T) {
	t.Helper()
	router := gin.New()
	handler := &QueryHandler{db: nil}
	SetupQueryRoutes(router, handler)

	routes := router.Routes()
	found := false
	for _, r := range routes {
		if r.Method == "POST" && r.Path == "/api/query/execute" {
			found = true
			break
		}
	}
	if !found {
		t.Error("SetupQueryRoutes() did not register /api/query/execute")
	}
}

func TestSetupSuppressRoutes(t *testing.T) {
	t.Helper()
	router := gin.New()
	handler := &SuppressHandler{db: nil}
	SetupSuppressRoutes(router, handler)

	routes := router.Routes()
	methods := make(map[string]bool)
	for _, r := range routes {
		methods[r.Method+r.Path] = true
	}

	expected := []string{"GET/api/suppress", "POST/api/suppress", "GET/api/suppress/:id", "PUT/api/suppress/:id", "DELETE/api/suppress/:id", "POST/api/suppress/:id/toggle"}
	for _, exp := range expected {
		if !methods[exp] {
			t.Errorf("SetupSuppressRoutes() missing route: %s", exp)
		}
	}
}

func TestSetupUEBARoutes(t *testing.T) {
	t.Helper()
	router := gin.New()
	handler := &UEBAHandler{db: nil}
	SetupUEBARoutes(router, handler)

	routes := router.Routes()
	foundAnalyze := false
	foundProfiles := false
	foundAnomaly := false
	for _, r := range routes {
		if r.Method == "POST" && r.Path == "/api/ueba/analyze" {
			foundAnalyze = true
		}
		if r.Method == "GET" && r.Path == "/api/ueba/profiles" {
			foundProfiles = true
		}
		if r.Method == "GET" && r.Path == "/api/ueba/anomaly/:type" {
			foundAnomaly = true
		}
	}
	if !foundAnalyze {
		t.Error("SetupUEBARoutes() missing POST /api/ueba/analyze")
	}
	if !foundProfiles {
		t.Error("SetupUEBARoutes() missing GET /api/ueba/profiles")
	}
	if !foundAnomaly {
		t.Error("SetupUEBARoutes() missing GET /api/ueba/anomaly/:type")
	}
}

func TestCorrelationRequest_Binding(t *testing.T) {
	t.Helper()
	tests := []struct {
		name    string
		json    string
		wantErr bool
	}{
		{"valid", `{"time_window": "24h", "rules": ["rule1"]}`, false},
		{"empty", `{}`, false},
		{"invalid json", `{invalid}`, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			var req CorrelationRequest
			err := json.Unmarshal([]byte(tt.json), &req)
			if (err != nil) != tt.wantErr {
				t.Errorf("Unmarshal() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestQueryRequest_Binding(t *testing.T) {
	t.Helper()
	tests := []struct {
		name    string
		json    string
		wantErr bool
	}{
		{"valid", `{"sql": "SELECT * FROM events", "limit": 100}`, false},
		{"empty", `{}`, false},
		{"invalid json", `{invalid}`, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			var req QueryRequest
			err := json.Unmarshal([]byte(tt.json), &req)
			if (err != nil) != tt.wantErr {
				t.Errorf("Unmarshal() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestSuppressRuleRequest_Binding(t *testing.T) {
	t.Helper()
	tests := []struct {
		name    string
		json    string
		wantErr bool
	}{
		{"valid", `{"name": "test", "conditions": [], "duration": 60}`, false},
		{"empty", `{}`, false},
		{"invalid json", `{invalid}`, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			var req SuppressRuleRequest
			err := json.Unmarshal([]byte(tt.json), &req)
			if (err != nil) != tt.wantErr {
				t.Errorf("Unmarshal() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestUEBARequest_Binding(t *testing.T) {
	t.Helper()
	tests := []struct {
		name    string
		json    string
		wantErr bool
	}{
		{"valid", `{"hours": 24, "start_time": "2024-01-01T00:00:00Z"}`, false},
		{"empty", `{}`, false},
		{"invalid json", `{invalid}`, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			var req UEBARequest
			err := json.Unmarshal([]byte(tt.json), &req)
			if (err != nil) != tt.wantErr {
				t.Errorf("Unmarshal() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func BenchmarkCorrelationHandler_Analyze(b *testing.B) {
	b.Helper()
	router := gin.New()
	handler := &CorrelationHandler{db: nil}
	router.POST("/api/correlation/analyze", handler.Analyze)

	body := bytes.NewBufferString(`{"time_window": "24h"}`)
	req, _ := http.NewRequest("POST", "/api/correlation/analyze", body)
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		router.ServeHTTP(w, req)
	}
}

func BenchmarkQueryHandler_Execute(b *testing.B) {
	b.Helper()
	router := gin.New()
	handler := &QueryHandler{db: nil}
	router.POST("/api/query/execute", handler.Execute)

	body := bytes.NewBufferString(`{"sql": "SELECT * FROM events LIMIT 100"}`)
	req, _ := http.NewRequest("POST", "/api/query/execute", body)
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		router.ServeHTTP(w, req)
	}
}
