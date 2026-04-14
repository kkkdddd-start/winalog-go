package forensics

import (
	"fmt"
	"os"
	"time"
)

type SignatureResult struct {
	Status      string     `json:"status"`
	Signer      string     `json:"signer,omitempty"`
	Issuer      string     `json:"issuer,omitempty"`
	Thumbprint  string     `json:"thumbprint,omitempty"`
	NotBefore   *time.Time `json:"not_before,omitempty"`
	NotAfter    *time.Time `json:"not_after,omitempty"`
	Description string     `json:"description,omitempty"`
}

func VerifySignature(path string) (*SignatureResult, error) {
	result := &SignatureResult{
		Status:      "None",
		Description: "Signature verification not supported on this platform",
	}

	fileInfo, err := os.Stat(path)
	if err != nil {
		return nil, fmt.Errorf("failed to stat file: %w", err)
	}

	if fileInfo.IsDir() {
		result.Description = "Path is a directory"
		return result, nil
	}

	result.Description = "Windows Authenticode verification requires Windows API"
	return result, nil
}

func IsSigned(path string) (bool, *SignatureResult, error) {
	result, err := VerifySignature(path)
	if err != nil {
		return false, nil, err
	}
	return result.Status != "None", result, nil
}
