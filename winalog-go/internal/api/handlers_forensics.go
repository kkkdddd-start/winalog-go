package api

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"runtime"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/forensics"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type ForensicsHandler struct {
	db *storage.DB
}

type HashRequest struct {
	Path string `json:"path" binding:"required"`
}

type SignatureRequest struct {
	Path string `json:"path" binding:"required"`
}

type CollectRequest struct {
	Type              string `json:"type" binding:"required"`
	OutputPath        string `json:"output_path"`
	CollectRegistry   bool   `json:"collect_registry"`
	CollectPrefetch   bool   `json:"collect_prefetch"`
	CollectShimcache  bool   `json:"collect_shimcache"`
	CollectAmcache    bool   `json:"collect_amcache"`
	CollectUserAssist bool   `json:"collect_userassist"`
	CollectTasks      bool   `json:"collect_tasks"`
	CollectLogs       bool   `json:"collect_logs"`
}

type HashResponse struct {
	Status   string `json:"status,omitempty"`
	Error    string `json:"error,omitempty"`
	FilePath string `json:"file_path,omitempty"`
	SHA256   string `json:"sha256,omitempty"`
	MD5      string `json:"md5,omitempty"`
	SHA1     string `json:"sha1,omitempty"`
	Size     int64  `json:"size,omitempty"`
}

type SignatureResponse struct {
	Status     string     `json:"status,omitempty"`
	Error      string     `json:"error,omitempty"`
	Signed     bool       `json:"signed"`
	Signer     string     `json:"signer,omitempty"`
	Issuer     string     `json:"issuer,omitempty"`
	Thumbprint string     `json:"thumbprint,omitempty"`
	NotBefore  *time.Time `json:"not_before,omitempty"`
	NotAfter   *time.Time `json:"not_after,omitempty"`
}

type CollectResponse struct {
	ID          string    `json:"id"`
	Type        string    `json:"type"`
	Status      string    `json:"status"`
	OutputPath  string    `json:"output_path"`
	CollectedAt time.Time `json:"collected_at"`
	Message     string    `json:"message"`
}

func NewForensicsHandler(db *storage.DB) *ForensicsHandler {
	return &ForensicsHandler{db: db}
}

func (h *ForensicsHandler) CalculateHash(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusNotImplemented, ErrorResponse{
			Error: "forensics is only supported on Windows",
			Code:  types.ErrCodeNotSupported,
		})
		return
	}

	var req HashRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: err.Error(),
			Code:  types.ErrCodeInvalidRequest,
		})
		return
	}

	result, err := forensics.CalculateFileHash(req.Path)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, HashResponse{
		FilePath: result.FilePath,
		SHA256:   result.SHA256,
		MD5:      result.MD5,
		SHA1:     result.SHA1,
		Size:     result.Size,
	})
}

func (h *ForensicsHandler) VerifyHash(c *gin.Context) {
	path := c.Query("path")
	expected := c.Query("expected")

	if path == "" || expected == "" {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "path and expected hash are required",
			Code:  types.ErrCodeInvalidRequest,
		})
		return
	}

	match, result, err := forensics.VerifyFileHash(path, expected)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"match":  match,
		"hash":   result.SHA256,
		"path":   path,
		"sha256": result.SHA256,
		"md5":    result.MD5,
		"sha1":   result.SHA1,
		"size":   result.Size,
	})
}

func (h *ForensicsHandler) VerifySignature(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusNotImplemented, ErrorResponse{
			Error: "signature verification is only supported on Windows",
			Code:  types.ErrCodeNotSupported,
		})
		return
	}

	path := c.Query("path")

	if path == "" {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "path is required",
			Code:  types.ErrCodeInvalidRequest,
		})
		return
	}

	result, err := forensics.VerifySignature(path)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, SignatureResponse{
		Status:     result.Status,
		Signer:     result.Signer,
		Issuer:     result.Issuer,
		Thumbprint: result.Thumbprint,
		NotBefore:  result.NotBefore,
		NotAfter:   result.NotAfter,
	})
}

func (h *ForensicsHandler) IsSigned(c *gin.Context) {
	path := c.Query("path")

	if path == "" {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "path is required",
			Code:  types.ErrCodeInvalidRequest,
		})
		return
	}

	signed, result, err := forensics.IsSigned(path)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"is_signed": signed,
		"details":   result,
	})
}

func (h *ForensicsHandler) CollectEvidence(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusNotImplemented, ErrorResponse{
			Error: "evidence collection is only supported on Windows",
			Code:  types.ErrCodeNotSupported,
		})
		return
	}

	var req CollectRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: err.Error(),
			Code:  types.ErrCodeInvalidRequest,
		})
		return
	}

	evidenceID := fmt.Sprintf("ev_%d", time.Now().UnixNano())

	outputPath := req.OutputPath
	if outputPath == "" {
		outputPath = filepath.Join(os.TempDir(), fmt.Sprintf("evidence_%s.zip", evidenceID))
	}

	collector := forensics.NewEvidenceCollector(evidenceID, outputPath)
	collector.CollectRegistry = req.CollectRegistry
	collector.CollectPrefetch = req.CollectPrefetch
	collector.CollectShimcache = req.CollectShimcache
	collector.CollectAmcache = req.CollectAmcache
	collector.CollectUserAssist = req.CollectUserAssist
	collector.CollectTasks = req.CollectTasks
	collector.CollectLogs = req.CollectLogs

	manifest, err := collector.Collect()
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: fmt.Sprintf("collection failed: %v", err),
		})
		return
	}

	if err := h.saveEvidenceManifest(manifest); err != nil {
		log.Printf("[ERROR] failed to save manifest: %v", err)
	}

	c.JSON(http.StatusOK, CollectResponse{
		ID:          evidenceID,
		Type:        req.Type,
		Status:      "completed",
		OutputPath:  outputPath,
		CollectedAt: manifest.CreatedAt,
		Message:     fmt.Sprintf("Collected %d files, total %d bytes", len(manifest.Files), manifest.TotalSize),
	})
}

func (h *ForensicsHandler) saveEvidenceManifest(manifest *forensics.EvidenceManifest) error {
	_, err := h.db.Exec(`
		INSERT INTO evidence_chain (evidence_id, timestamp, operator, action, input_hash, output_hash, previous_hash)
		VALUES (?, ?, ?, ?, ?, ?, ?)
	`, manifest.ID, manifest.CreatedAt.Format(time.RFC3339),
		manifest.CollectedBy, "manifest_created", "", manifest.Hash, "")

	for _, f := range manifest.Files {
		_, err := h.db.Exec(`
			INSERT INTO evidence_file (file_path, file_hash, evidence_id, collected_at, collector)
			VALUES (?, ?, ?, ?, ?)
		`, f.FilePath, f.FileHash, manifest.ID, f.CollectedAt.Format(time.RFC3339), f.Collector)
		if err != nil {
			log.Printf("[ERROR] failed to save evidence file: %v", err)
		}
	}

	return err
}

func (h *ForensicsHandler) ListEvidence(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusNotImplemented, ErrorResponse{
			Error: "evidence listing is only supported on Windows",
			Code:  types.ErrCodeNotSupported,
		})
		return
	}

	limitStr := c.DefaultQuery("limit", "50")
	offsetStr := c.DefaultQuery("offset", "0")

	limit, err := strconv.Atoi(limitStr)
	if err != nil || limit <= 0 {
		limit = 50
	}
	if limit > 1000 {
		limit = 1000
	}

	offset, err := strconv.Atoi(offsetStr)
	if err != nil || offset < 0 {
		offset = 0
	}

	rows, err := h.db.Query(`
		SELECT 
			ec.evidence_id,
			ec.timestamp,
			ec.operator,
			ec.action,
			COUNT(ef.id) as file_count
		FROM evidence_chain ec
		LEFT JOIN evidence_file ef ON ec.evidence_id = ef.evidence_id
		GROUP BY ec.evidence_id
		ORDER BY ec.timestamp DESC
		LIMIT ? OFFSET ?
	`, limit, offset)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: fmt.Sprintf("query failed: %v", err),
		})
		return
	}
	defer rows.Close()

	evidenceList := make([]map[string]interface{}, 0)
	for rows.Next() {
		var evidenceID, timestamp, operator, action sql.NullString
		var fileCount int

		if err := rows.Scan(&evidenceID, &timestamp, &operator, &action, &fileCount); err != nil {
			continue
		}

		item := map[string]interface{}{
			"evidence_id": evidenceID.String,
			"timestamp":   timestamp.String,
			"operator":    operator.String,
			"action":      action.String,
			"file_count":  fileCount,
		}
		evidenceList = append(evidenceList, item)
	}

	var total int
	h.db.QueryRow("SELECT COUNT(DISTINCT evidence_id) FROM evidence_chain").Scan(&total)

	c.JSON(http.StatusOK, gin.H{
		"evidence": evidenceList,
		"total":    total,
		"limit":    limit,
		"offset":   offset,
	})
}

func (h *ForensicsHandler) GetEvidence(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusNotImplemented, ErrorResponse{
			Error: "evidence retrieval is only supported on Windows",
			Code:  types.ErrCodeNotSupported,
		})
		return
	}

	evidenceID := c.Param("id")
	if evidenceID == "" {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "evidence ID is required",
			Code:  types.ErrCodeInvalidRequest,
		})
		return
	}

	chainRows, err := h.db.Query(`
		SELECT id, evidence_id, timestamp, operator, action, input_hash, output_hash, previous_hash
		FROM evidence_chain
		WHERE evidence_id = ?
		ORDER BY timestamp ASC
	`, evidenceID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: fmt.Sprintf("query failed: %v", err),
		})
		return
	}
	defer chainRows.Close()

	chain := make([]map[string]interface{}, 0)
	for chainRows.Next() {
		var id int64
		var evID, timestamp, operator, action, inputHash, outputHash, previousHash sql.NullString

		if err := chainRows.Scan(&id, &evID, &timestamp, &operator, &action, &inputHash, &outputHash, &previousHash); err != nil {
			continue
		}

		entry := map[string]interface{}{
			"id":          id,
			"evidence_id": evID.String,
			"timestamp":   timestamp.String,
			"operator":    operator.String,
			"action":      action.String,
		}
		if inputHash.Valid {
			entry["input_hash"] = inputHash.String
		}
		if outputHash.Valid {
			entry["output_hash"] = outputHash.String
		}
		if previousHash.Valid {
			entry["previous_hash"] = previousHash.String
		}
		chain = append(chain, entry)
	}

	if len(chain) == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"id":      evidenceID,
			"status":  "not_found",
			"message": "Evidence not found",
		})
		return
	}

	fileRows, err := h.db.Query(`
		SELECT id, file_path, file_hash, collected_at, collector
		FROM evidence_file
		WHERE evidence_id = ?
		ORDER BY collected_at ASC
	`, evidenceID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: fmt.Sprintf("query failed: %v", err),
		})
		return
	}
	defer fileRows.Close()

	files := make([]map[string]interface{}, 0)
	for fileRows.Next() {
		var id int64
		var filePath, fileHash, collectedAt, collector sql.NullString

		if err := fileRows.Scan(&id, &filePath, &fileHash, &collectedAt, &collector); err != nil {
			continue
		}

		files = append(files, map[string]interface{}{
			"id":           id,
			"file_path":    filePath.String,
			"file_hash":    fileHash.String,
			"collected_at": collectedAt.String,
			"collector":    collector.String,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"id":     evidenceID,
		"status": "found",
		"chain":  chain,
		"files":  files,
		"summary": map[string]interface{}{
			"chain_length": len(chain),
			"file_count":   len(files),
		},
	})
}

func (h *ForensicsHandler) GenerateManifest(c *gin.Context) {
	manifest := forensics.GenerateManifest(nil, "web-ui", "unknown")
	c.JSON(http.StatusOK, manifest)
}

func (h *ForensicsHandler) ChainOfCustody(c *gin.Context) {
	evidenceID := c.Query("evidence_id")

	if evidenceID == "" {
		rows, err := h.db.Query(`
			SELECT id, evidence_id, timestamp, operator, action, input_hash, output_hash, previous_hash
			FROM evidence_chain
			ORDER BY timestamp DESC
			LIMIT 100
		`)
		if err != nil {
			c.JSON(http.StatusInternalServerError, ErrorResponse{
				Error: err.Error(),
			})
			return
		}
		defer rows.Close()

		chain := []map[string]interface{}{}
		for rows.Next() {
			var id int64
			var evidenceID, timestamp, operator, action, inputHash, outputHash, previousHash sql.NullString
			if err := rows.Scan(&id, &evidenceID, &timestamp, &operator, &action, &inputHash, &outputHash, &previousHash); err != nil {
				continue
			}
			entry := map[string]interface{}{
				"id":          id,
				"evidence_id": evidenceID.String,
				"timestamp":   timestamp.String,
				"operator":    operator.String,
				"action":      action.String,
			}
			if inputHash.Valid {
				entry["input_hash"] = inputHash.String
			}
			if outputHash.Valid {
				entry["output_hash"] = outputHash.String
			}
			if previousHash.Valid {
				entry["previous_hash"] = previousHash.String
			}
			chain = append(chain, entry)
		}

		c.JSON(http.StatusOK, gin.H{
			"chain": chain,
			"total": len(chain),
		})
		return
	}

	rows, err := h.db.Query(`
		SELECT id, evidence_id, timestamp, operator, action, input_hash, output_hash, previous_hash
		FROM evidence_chain
		WHERE evidence_id = ?
		ORDER BY timestamp DESC
	`, evidenceID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{
			Error: err.Error(),
		})
		return
	}
	defer rows.Close()

	chain := []map[string]interface{}{}
	for rows.Next() {
		var id int64
		var evID, timestamp, operator, action, inputHash, outputHash, previousHash sql.NullString
		if err := rows.Scan(&id, &evID, &timestamp, &operator, &action, &inputHash, &outputHash, &previousHash); err != nil {
			continue
		}
		entry := map[string]interface{}{
			"id":          id,
			"evidence_id": evID.String,
			"timestamp":   timestamp.String,
			"operator":    operator.String,
			"action":      action.String,
		}
		if inputHash.Valid {
			entry["input_hash"] = inputHash.String
		}
		if outputHash.Valid {
			entry["output_hash"] = outputHash.String
		}
		if previousHash.Valid {
			entry["previous_hash"] = previousHash.String
		}
		chain = append(chain, entry)
	}

	c.JSON(http.StatusOK, gin.H{
		"chain":       chain,
		"total":       len(chain),
		"evidence_id": evidenceID,
	})
}

func (h *ForensicsHandler) MemoryDump(c *gin.Context) {
	if runtime.GOOS != "windows" {
		c.JSON(http.StatusNotImplemented, ErrorResponse{
			Error: "memory dump is only supported on Windows",
			Code:  types.ErrCodeNotSupported,
		})
		return
	}

	pidStr := c.Query("pid")
	outputPath := c.Query("output")

	if outputPath == "" {
		outputPath = filepath.Join(os.TempDir(), "winalog_memory")
		os.MkdirAll(outputPath, 0755)
	}

	collector := forensics.NewMemoryCollector(outputPath)

	if pidStr != "" {
		var pid uint32
		if _, err := fmt.Sscanf(pidStr, "%d", &pid); err != nil {
			c.JSON(http.StatusBadRequest, ErrorResponse{
				Error: "invalid PID format",
			})
			return
		}

		result, err := collector.CollectProcessMemory(pid)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"status":  "error",
				"message": err.Error(),
				"pid":     pid,
			})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"status": "success",
			"result": result,
		})
		return
	}

	result, err := collector.CollectSystemMemory()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  "error",
			"message": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"result": result,
	})
}

func SetupForensicsRoutes(r *gin.Engine, forensicsHandler *ForensicsHandler) {
	forensicsGroup := r.Group("/api/forensics")
	{
		forensicsGroup.POST("/hash", forensicsHandler.CalculateHash)
		forensicsGroup.GET("/verify-hash", forensicsHandler.VerifyHash)
		forensicsGroup.GET("/signature", forensicsHandler.VerifySignature)
		forensicsGroup.GET("/is-signed", forensicsHandler.IsSigned)
		forensicsGroup.POST("/collect", forensicsHandler.CollectEvidence)
		forensicsGroup.GET("/evidence", forensicsHandler.ListEvidence)
		forensicsGroup.GET("/evidence/:id", forensicsHandler.GetEvidence)
		forensicsGroup.POST("/manifest", forensicsHandler.GenerateManifest)
		forensicsGroup.GET("/chain-of-custody", forensicsHandler.ChainOfCustody)
		forensicsGroup.GET("/memory-dump", forensicsHandler.MemoryDump)
	}
}

func init() {
	os.Unsetenv("WER_SUPPORT_MODE")
}
