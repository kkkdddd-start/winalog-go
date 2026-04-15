package api

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"
	"runtime"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kkkdddd-start/winalog-go/internal/forensics"
	"github.com/kkkdddd-start/winalog-go/internal/storage"
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
	Type       string `json:"type" binding:"required"`
	OutputPath string `json:"output_path"`
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
		c.JSON(http.StatusOK, HashResponse{
			Status: "unavailable",
			Error:  "forensics is only supported on Windows",
		})
		return
	}

	var req HashRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: err.Error(),
			Code:  ErrCodeInvalidRequest,
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
			Code:  ErrCodeInvalidRequest,
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
		c.JSON(http.StatusOK, SignatureResponse{
			Status: "unavailable",
			Error:  "signature verification is only supported on Windows",
		})
		return
	}

	path := c.Query("path")

	if path == "" {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: "path is required",
			Code:  ErrCodeInvalidRequest,
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
			Code:  ErrCodeInvalidRequest,
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
	var req CollectRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{
			Error: err.Error(),
			Code:  ErrCodeInvalidRequest,
		})
		return
	}

	collectID := fmt.Sprintf("collect_%d", time.Now().Unix())

	outputPath := req.OutputPath
	if outputPath == "" {
		outputPath = fmt.Sprintf("/tmp/evidence_%d.zip", time.Now().Unix())
	}

	c.JSON(http.StatusOK, CollectResponse{
		ID:          collectID,
		Type:        req.Type,
		Status:      "completed",
		OutputPath:  outputPath,
		CollectedAt: time.Now(),
		Message:     "Evidence collection requires Windows environment",
	})
}

func (h *ForensicsHandler) ListEvidence(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"evidence": []interface{}{},
		"total":    0,
	})
}

func (h *ForensicsHandler) GetEvidence(c *gin.Context) {
	evidenceID := c.Param("id")

	c.JSON(http.StatusOK, gin.H{
		"id":      evidenceID,
		"status":  "not_found",
		"message": "Evidence not found",
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
	pidStr := c.Query("pid")

	if pidStr != "" {
		var pid uint32
		fmt.Sscanf(pidStr, "%d", &pid)
		c.JSON(http.StatusOK, gin.H{
			"status":  "error",
			"message": "Memory dump requires Windows environment",
			"process": pid,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "error",
		"message": "Memory dump requires Windows environment",
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
