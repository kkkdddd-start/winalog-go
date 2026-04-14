package forensics

import (
	"fmt"
	"os"
	"runtime"
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

var (
	ErrPlatformNotSupported = fmt.Errorf("signature verification is only supported on Windows")
	ErrPathIsDirectory      = fmt.Errorf("path is a directory")
)

func VerifySignature(path string) (*SignatureResult, error) {
	if runtime.GOOS != "windows" {
		return &SignatureResult{
			Status:      "Unsupported",
			Description: ErrPlatformNotSupported.Error(),
		}, nil
	}

	fileInfo, err := os.Stat(path)
	if err != nil {
		return nil, fmt.Errorf("failed to stat file: %w", err)
	}

	if fileInfo.IsDir() {
		return &SignatureResult{
			Status:      "Invalid",
			Description: ErrPathIsDirectory.Error(),
		}, nil
	}

	return &SignatureResult{
		Status:      "Unsupported",
		Description: "Windows Authenticode verification requires Windows API calls (not yet implemented)",
	}, nil
}

func IsSigned(path string) (bool, *SignatureResult, error) {
	result, err := VerifySignature(path)
	if err != nil {
		return false, nil, err
	}
	return result.Status == "Valid", result, nil
}
