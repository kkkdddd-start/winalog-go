# AGENTS.md

## Repository Purpose

This repository contains **design documentation** for WinLogAnalyzer-Go, a Windows security forensics and log analysis tool being ported from Python to Go. The actual source code lives in a separate repo (https://github.com/kkkdddd-start/winalog-go).

## Design Documents

| File | Purpose |
|------|---------|
| `dev-pkg/design.md` | Architecture, directory structure, type definitions, CLI, API, TUI designs |
| `dev-pkg/requirements.md` | Product requirements, user stories |
| `dev-pkg/FEATURES.md` | Detailed feature清单 (~450+ features) |
| `dev-pkg/MODULES_COMPARISON.md` | Python→Go module mapping |
| `dev-pkg/ISSUES_FIX.md` | Known issues and fixes from v2.3.0→v2.4.0 |

## Key Technical Decisions

### SQLite Driver
- **MUST use `modernc.org/sqlite`** (pure Go, no CGO)
- **NOT** `github.com/mattn/go-sqlite3` (requires CGO, breaks single-binary goal)

### Frontend Strategy
- **TUI (Bubble Tea)** = P0, **Web UI (React+Vite)** = P1
- TUI is the primary interface for emergency response scenarios

### Concurrency
- Use goroutine + channel for event pipeline (avoids Python GIL issues)
- Worker pool pattern for parallel EVTX parsing

### Type System
- All types in `internal/types/` - no type scattering across modules
- Unified `AlertRule` + `CorrelationRule` implementing common `Rule` interface

## Development Phases

```
Phase 1 (MVP): parsers → storage → collectors → CLI
Phase 2:       alerts → correlation → rules → analyzers
Phase 3:       TUI → API → Web UI
Phase 4:       forensics → reports → multi-machine
```

## Directory Structure (Target)

```
winalog-go/
├── cmd/winalog/commands/    # 19 CLI commands (Cobra)
├── internal/
│   ├── engine/              # Core engine + pipeline
│   ├── parsers/             # EVTX/ETL/CSV/IIS/Sysmon
│   ├── collectors/           # live/ + persistence/
│   ├── alerts/               # 7 modules (engine, dedup, evaluator, stats, trend, upgrade, suppress)
│   ├── storage/              # db.go, schema.go, repository.go, events.go, alerts.go
│   ├── api/                  # Gin HTTP API
│   ├── tui/                  # Bubble Tea
│   └── ...
└── pkg/evtx/                # Standalone EVTX library
```

## Performance Targets

| Metric | Target |
|--------|--------|
| EVTX parse speed | ≥150万 events/min |
| Memory (1GB EVTX) | ≤200MB |
| Startup time | ≤100ms |

## When Implementing Features

1. Read relevant section in `dev-pkg/design.md` first
2. Cross-reference with `dev-pkg/MODULES_COMPARISON.md` for Python→Go mapping
3. Check `dev-pkg/FEATURES.md` for detailed requirements
4. Use `dev-pkg/requirements.md` for acceptance criteria
