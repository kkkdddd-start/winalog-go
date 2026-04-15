//go:build !windows

package collectors

import (
	"context"
	"errors"
)

var ErrNotSupported = errors.New("this feature requires Windows")

func ListProcesses() ([]Process, error) {
	return nil, ErrNotSupported
}

func ListNetworkConnections() ([]NetworkConnection, error) {
	return nil, ErrNotSupported
}

func RunOneClickCollection(ctx context.Context, opts interface{}) (interface{}, error) {
	return nil, ErrNotSupported
}

func VerifySignature(path string) (*SignatureResult, error) {
	return nil, ErrNotSupported
}

func RunPersistenceCollection(ctx context.Context) (string, error) {
	return "", ErrNotSupported
}
