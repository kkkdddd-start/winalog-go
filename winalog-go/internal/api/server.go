package api

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"path/filepath"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/alerts"
	"github.com/kkkdddd-start/winalog-go/internal/analyzers"
	"github.com/kkkdddd-start/winalog-go/internal/config"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type Server struct {
	engine         *gin.Engine
	httpServer     *http.Server
	db             *storage.DB
	cfg            *config.Config
	configPath     string
	addr           string
	alertEngine    *alerts.Engine
	alertEng       *AlertHandler
	importEng      *ImportHandler
	liveEng        *LiveHandler
	persistenceEng *PersistenceHandler
	timelineEng    *TimelineHandler
	systemEng      *SystemHandler
	rulesEng       *RulesHandler
	reportsEng     *ReportsHandler
	forensicsEng   *ForensicsHandler
	dashboardEng   *DashboardHandler
	settingsEng    *SettingsHandler
	analyzeEng     *AnalyzeHandler
	collectEng     *CollectHandler
	suppressEng    *SuppressHandler
	uebaEng        *UEBAHandler
	correlationEng *CorrelationHandler
	multiEng       *MultiHandler
	queryEng       *QueryHandler
	policyEng      *PolicyHandler
	uiEng          *UIHandler
}

func NewServer(db *storage.DB, cfg *config.Config, configPath, addr string) *Server {
	gin.SetMode(gin.ReleaseMode)
	engine := gin.New()

	engine.Use(recoveryMiddleware())
	engine.Use(requestLogger())
	engine.Use(corsMiddleware())

	server := &Server{
		engine:     engine,
		db:         db,
		cfg:        cfg,
		configPath: configPath,
		addr:       addr,
	}

	server.setupHandlers()
	server.setupRoutes()

	return server
}

func (s *Server) setupHandlers() {
	s.alertEngine = alerts.NewEngine(s.db, alerts.EngineConfig{
		DedupWindow: 5 * time.Minute,
		StatsWindow: 24 * time.Hour,
	})
	s.alertEng = &AlertHandler{
		db:          s.db,
		alertEngine: s.alertEngine,
	}
	s.importEng = &ImportHandler{
		db:          s.db,
		alertEngine: s.alertEngine,
	}
	s.liveEng = NewLiveHandler(s.db)
	s.persistenceEng = NewPersistenceHandler()
	s.timelineEng = &TimelineHandler{
		db: s.db,
	}
	s.systemEng = NewSystemHandler(s.db)
	s.rulesEng = NewRulesHandler()
	s.reportsEng = NewReportsHandler(s.db)
	s.forensicsEng = NewForensicsHandler(s.db)
	s.dashboardEng = NewDashboardHandler(s.db)
	s.settingsEng = NewSettingsHandler(s.cfg, s.configPath)

	analyzerManager := s.createAnalyzerManager()
	s.analyzeEng = NewAnalyzeHandler(s.db, analyzerManager)

	s.collectEng = NewCollectHandler(s.db)
	s.suppressEng = NewSuppressHandler(s.db, s.alertEngine)
	s.uebaEng = NewUEBAHandler(s.db)
	s.correlationEng = NewCorrelationHandler(s.db)
	s.multiEng = NewMultiHandler(s.db)
	s.queryEng = NewQueryHandler(s.db)
	s.policyEng = NewPolicyHandler(s.alertEngine)
	s.uiEng = NewUIHandler(s.db)
}

func (s *Server) createAnalyzerManager() *analyzers.AnalyzerManager {
	mgr := analyzers.NewAnalyzerManager()
	mgr.Register(analyzers.NewBruteForceAnalyzer())
	mgr.Register(analyzers.NewLoginAnalyzer())
	mgr.Register(analyzers.NewKerberosAnalyzer())
	mgr.Register(analyzers.NewPowerShellAnalyzer())
	mgr.Register(analyzers.NewDataExfiltrationAnalyzer())
	mgr.Register(analyzers.NewLateralMovementAnalyzer())
	mgr.Register(analyzers.NewPersistenceAnalyzer())
	mgr.Register(analyzers.NewPrivilegeEscalationAnalyzer())
	return mgr
}

func (s *Server) setupRoutes() {
	SetupRoutes(s.engine, s.alertEng, s.importEng, s.liveEng, s.timelineEng, s.dashboardEng)
	SetupPersistenceRoutes(s.engine, s.persistenceEng)
	SetupSystemRoutes(s.engine, s.systemEng)
	SetupRulesRoutes(s.engine, s.rulesEng)
	SetupReportsRoutes(s.engine, s.reportsEng)
	SetupForensicsRoutes(s.engine, s.forensicsEng)
	SetupSettingsRoutes(s.engine, s.settingsEng)
	SetupAnalyzeRoutes(s.engine, s.analyzeEng)
	SetupCollectRoutes(s.engine, s.collectEng)
	SetupSuppressRoutes(s.engine, s.suppressEng)
	SetupUEBARoutes(s.engine, s.uebaEng)
	SetupCorrelationRoutes(s.engine, s.correlationEng)
	SetupMultiRoutes(s.engine, s.multiEng)
	SetupQueryRoutes(s.engine, s.queryEng)
	SetupPolicyRoutes(s.engine, s.policyEng)
	SetupUIRoutes(s.engine, s.uiEng)

	staticDir := filepath.Join("internal", "gui", "dist")
	staticFs := http.Dir(staticDir)

	s.engine.NoRoute(func(c *gin.Context) {
		path := c.Request.URL.Path
		if path == "/" {
			path = "/index.html"
		}
		file, err := staticFs.Open(path)
		if err != nil {
			c.Data(404, "text/plain", []byte("Not found"))
			return
		}
		file.Close()
		http.ServeFile(c.Writer, c.Request, filepath.Join(staticDir, path))
	})
}

func (s *Server) Start() error {
	log.Printf("Starting HTTP API server on %s", s.addr)

	s.httpServer = &http.Server{
		Addr:         s.addr,
		Handler:      s.engine,
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	if err := s.httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		return fmt.Errorf("failed to start server: %w", err)
	}

	return nil
}

func (s *Server) Stop() error {
	if s.httpServer == nil {
		return nil
	}

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	log.Println("Shutting down HTTP server gracefully...")
	if err := s.httpServer.Shutdown(ctx); err != nil {
		return fmt.Errorf("server shutdown error: %w", err)
	}
	log.Println("HTTP server gracefully stopped")
	return nil
}
