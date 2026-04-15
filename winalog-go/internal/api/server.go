package api

import (
	"fmt"
	"log"
	"net/http"
	"path/filepath"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type Server struct {
	engine         *gin.Engine
	db             *storage.DB
	addr           string
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
}

func NewServer(db *storage.DB, addr string) *Server {
	gin.SetMode(gin.ReleaseMode)
	engine := gin.New()

	engine.Use(gin.Recovery())
	engine.Use(requestLogger())
	engine.Use(corsMiddleware())

	server := &Server{
		engine: engine,
		db:     db,
		addr:   addr,
	}

	server.setupHandlers()
	server.setupRoutes()

	return server
}

func (s *Server) setupHandlers() {
	s.alertEng = &AlertHandler{
		db: s.db,
	}
	s.importEng = &ImportHandler{
		db: s.db,
	}
	s.liveEng = &LiveHandler{}
	s.persistenceEng = NewPersistenceHandler()
	s.timelineEng = &TimelineHandler{
		db: s.db,
	}
	s.systemEng = NewSystemHandler(s.db)
	s.rulesEng = NewRulesHandler()
	s.reportsEng = NewReportsHandler(s.db)
	s.forensicsEng = NewForensicsHandler(s.db)
	s.dashboardEng = NewDashboardHandler(s.db)
}

func (s *Server) setupRoutes() {
	SetupRoutes(s.engine, s.alertEng, s.importEng, s.liveEng, s.timelineEng, s.dashboardEng)
	SetupPersistenceRoutes(s.engine, s.persistenceEng)
	SetupSystemRoutes(s.engine, s.systemEng)
	SetupRulesRoutes(s.engine, s.rulesEng)
	SetupReportsRoutes(s.engine, s.reportsEng)
	SetupForensicsRoutes(s.engine, s.forensicsEng)

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

	server := &http.Server{
		Addr:         s.addr,
		Handler:      s.engine,
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		return fmt.Errorf("failed to start server: %w", err)
	}

	return nil
}

func (s *Server) Stop() error {
	return nil
}
