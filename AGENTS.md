# WinLogAnalyzer-Go

**Repository structure**: Design docs live at repo root. Go source code is in `winalog-go/` subdirectory.

```
/workspace/winalog-go/
├── winalog-go/           # Go source (actual project)
│   ├── cmd/winalog/     # CLI entrypoint
│   ├── internal/        # Core packages
│   ├── pkg/             # Public packages (evtx, mitre)
│   ├── Makefile         # Build commands
│   └── go.mod           # Go 1.25.6
├── dev-pkg/             # Design documents (~90KB design.md)
└── .monkeycode/specs/   # Implementation plans (phase1-5 tasklists)
```

## Build & Test

```bash
cd winalog-go/winalog-go

make build               # Build binary (outputs ./winalog)
make test                # Run tests with race detection
make lint                # vet + golangci-lint if installed
make deps                # Download and tidy dependencies
```

## Critical Constraints

- **SQLite**: Must use `modernc.org/sqlite` (pure Go, no CGO). Never use `github.com/mattn/go-sqlite3`.
- **Go version**: 1.25.6 (minimum 1.22+ stated in README, but actual mod says 1.25.6)
- **Windows-focused**: Event log analysis tool; some code is platform-specific (`*_windows.go` files)
- **Web UI is P1**: TUI (Bubble Tea) is primary interface for emergency response

## Key Directories

| Path | Purpose |
|------|---------|
| `internal/types/` | All type definitions (Event, Alert, Rule, etc.) |
| `internal/parsers/` | EVTX/ETL/CSV/IIS/Sysmon parsers |
| `internal/storage/` | SQLite WAL mode storage |
| `internal/alerts/` | 7 modules: engine, dedup, evaluator, stats, trend, upgrade, suppress |
| `internal/rules/builtin/` | 60+ built-in rules with MITRE ATT&CK mapping |
| `internal/collectors/` | Live + persistence collectors |
| `internal/api/` | Gin HTTP API handlers |
| `internal/tui/` | Bubble Tea TUI (11 views) |
| `cmd/winalog/commands/` | 19 CLI commands (Cobra) |

## Implementation Tracking

Implementation plans are in `.monkeycode/specs/`:
- `phase1-core-modules/tasklist.md` - MVP: parsers, storage, collectors, CLI
- `phase2-analysis/tasklist.md` - Alerts, correlation, rules, analyzers
- `phase3-ui/tasklist.md` - TUI, HTTP API, Web UI
- `phase4-enhancement/tasklist.md` - Forensics, reports, exporters, timeline
- `phase5-persistence-detection/tasklist.md` - Windows persistence detection

## Design Docs Reference

Before implementing features, read:
1. `dev-pkg/design.md` - Architecture, CLI, API, TUI designs
2. `dev-pkg/MODULES_COMPARISON.md` - Python→Go module mapping
3. `dev-pkg/FEATURES.md` - Detailed feature requirements (~450+)
4. `dev-pkg/requirements.md` - Acceptance criteria
