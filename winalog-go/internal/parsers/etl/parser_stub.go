//go:build !windows
// +build !windows

package etl

import (
	"fmt"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type EtlParser struct{}

func NewEtlParser() *EtlParser {
	return &EtlParser{}
}

func (p *EtlParser) CanParse(path string) bool {
	return false
}

func (p *EtlParser) GetType() string {
	return "etl"
}

func (p *EtlParser) Parse(path string) <-chan *types.Event {
	ch := make(chan *types.Event, 1)
	ch <- &types.Event{
		Level:   types.EventLevelError,
		Message: "ETL parsing is only supported on Windows",
	}
	close(ch)
	return ch
}

func (p *EtlParser) ParseBatch(path string) ([]*types.Event, error) {
	return nil, fmt.Errorf("ETL parsing is only supported on Windows")
}
