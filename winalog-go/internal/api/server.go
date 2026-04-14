package api

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
)

type Server struct {
	engine   *gin.Engine
	db       *storage.DB
	addr     string
	alertEng *AlertHandler
	liveEng  *LiveHandler
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
	s.liveEng = &LiveHandler{}
}

func (s *Server) setupRoutes() {
	SetupRoutes(s.engine, s.alertEng, s.liveEng)
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
