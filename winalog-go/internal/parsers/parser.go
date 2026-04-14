package parsers

import (
	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type Parser interface {
	CanParse(path string) bool
	Parse(path string) <-chan *types.Event
	ParseBatch(path string) ([]*types.Event, error)
	GetType() string
}

type ParserRegistry struct {
	parsers map[string]Parser
}

func NewParserRegistry() *ParserRegistry {
	return &ParserRegistry{
		parsers: make(map[string]Parser),
	}
}

func (r *ParserRegistry) Register(p Parser) {
	r.parsers[p.GetType()] = p
}

func (r *ParserRegistry) Get(path string) Parser {
	for _, p := range r.parsers {
		if p.CanParse(path) {
			return p
		}
	}
	return nil
}

func (r *ParserRegistry) GetByType(parserType string) Parser {
	return r.parsers[parserType]
}

func (r *ParserRegistry) List() []Parser {
	result := make([]Parser, 0, len(r.parsers))
	for _, p := range r.parsers {
		result = append(result, p)
	}
	return result
}

func (r *ParserRegistry) ListTypes() []string {
	types := make([]string, 0, len(r.parsers))
	for t := range r.parsers {
		types = append(types, t)
	}
	return types
}
