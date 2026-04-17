package storage

import (
	"database/sql"
	"time"
)

type ProcessInfo struct {
	ID          int64
	PID         int
	Name        string
	Exe         string
	CommandLine string
	Username    string
	ParentPID   int
	StartedAt   *time.Time
	MemoryMB    float64
	CPUPercent  float64
	CollectedAt time.Time
}

type NetworkConnection struct {
	ID          int64
	PID         int
	ProcessName string
	Protocol    string
	LocalAddr   string
	LocalPort   int
	RemoteAddr  string
	RemotePort  int
	State       string
	CollectedAt time.Time
}

type SystemSnapshot struct {
	ID            int64
	Hostname      string
	Domain        string
	OSName        string
	OSVersion     string
	Architecture  string
	IsAdmin       bool
	UptimeSeconds int64
	CPUCount      int
	CPUModel      string
	MemoryTotalGB float64
	MemoryFreeGB  float64
	DiskTotalGB   float64
	DiskFreeGB    float64
	CollectedAt   time.Time
}

type SystemRepo struct {
	db *DB
}

func NewSystemRepo(db *DB) *SystemRepo {
	return &SystemRepo{db: db}
}

func (r *SystemRepo) SaveSnapshot(snapshot *SystemSnapshot) error {
	query := `
		INSERT INTO system_info (hostname, domain, os_name, os_version, architecture, is_admin, uptime_seconds, cpu_count, cpu_model, memory_total_gb, memory_free_gb, disk_total_gb, disk_free_gb, collected_at)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

	_, err := r.db.Exec(query,
		snapshot.Hostname,
		snapshot.Domain,
		snapshot.OSName,
		snapshot.OSVersion,
		snapshot.Architecture,
		snapshot.IsAdmin,
		snapshot.UptimeSeconds,
		snapshot.CPUCount,
		snapshot.CPUModel,
		snapshot.MemoryTotalGB,
		snapshot.MemoryFreeGB,
		snapshot.DiskTotalGB,
		snapshot.DiskFreeGB,
		snapshot.CollectedAt.Format(time.RFC3339),
	)
	return err
}

func (r *SystemRepo) GetLatestSnapshot() (*SystemSnapshot, error) {
	query := `
		SELECT id, hostname, domain, os_name, os_version, architecture, is_admin, uptime_seconds, cpu_count, cpu_model, memory_total_gb, memory_free_gb, disk_total_gb, disk_free_gb, collected_at
		FROM system_info ORDER BY collected_at DESC LIMIT 1`

	row := r.db.QueryRow(query)
	return scanSystemSnapshot(row)
}

func (r *SystemRepo) SaveProcesses(processes []*ProcessInfo) error {
	if len(processes) == 0 {
		return nil
	}

	tx, unlock, err := r.db.Begin()
	if err != nil {
		return err
	}
	defer unlock()

	stmt, err := tx.Prepare(`
		INSERT INTO processes (pid, name, exe, command_line, username, parent_pid, started_at, memory_mb, cpu_percent, collected_at)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
	if err != nil {
		return err
	}
	defer stmt.Close()

	for _, p := range processes {
		var startedAt *time.Time
		if p.StartedAt != nil {
			startedAt = p.StartedAt
		}
		startedAtStr := ""
		if startedAt != nil {
			startedAtStr = startedAt.Format(time.RFC3339)
		}

		_, err := stmt.Exec(p.PID, p.Name, p.Exe, p.CommandLine, p.Username, p.ParentPID, startedAtStr, p.MemoryMB, p.CPUPercent, p.CollectedAt.Format(time.RFC3339))
		if err != nil {
			return err
		}
	}

	return tx.Commit()
}

func (r *SystemRepo) SaveNetworkConnections(connections []*NetworkConnection) error {
	if len(connections) == 0 {
		return nil
	}

	tx, unlock, err := r.db.Begin()
	if err != nil {
		return err
	}
	defer unlock()

	stmt, err := tx.Prepare(`
		INSERT INTO network_connections (pid, process_name, protocol, local_addr, local_port, remote_addr, remote_port, state, collected_at)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`)
	if err != nil {
		return err
	}
	defer stmt.Close()

	for _, c := range connections {
		_, err := stmt.Exec(c.PID, c.ProcessName, c.Protocol, c.LocalAddr, c.LocalPort, c.RemoteAddr, c.RemotePort, c.State, c.CollectedAt.Format(time.RFC3339))
		if err != nil {
			return err
		}
	}

	return tx.Commit()
}

func (r *SystemRepo) GetProcesses(limit int) ([]*ProcessInfo, error) {
	if limit <= 0 {
		limit = 100
	}

	query := `
		SELECT id, pid, name, exe, command_line, username, parent_pid, started_at, memory_mb, cpu_percent, collected_at
		FROM processes ORDER BY pid LIMIT ?`

	rows, err := r.db.Query(query, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var processes []*ProcessInfo
	for rows.Next() {
		p, err := scanProcess(rows)
		if err != nil {
			return nil, err
		}
		processes = append(processes, p)
	}

	return processes, nil
}

func (r *SystemRepo) GetNetworkConnections(limit int) ([]*NetworkConnection, error) {
	if limit <= 0 {
		limit = 100
	}

	query := `
		SELECT id, pid, process_name, protocol, local_addr, local_port, remote_addr, remote_port, state, collected_at
		FROM network_connections ORDER BY local_port LIMIT ?`

	rows, err := r.db.Query(query, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var connections []*NetworkConnection
	for rows.Next() {
		c, err := scanNetworkConnection(rows)
		if err != nil {
			return nil, err
		}
		connections = append(connections, c)
	}

	return connections, nil
}

func scanSystemSnapshot(row interface{ Scan(...interface{}) error }) (*SystemSnapshot, error) {
	var s SystemSnapshot
	var hostname, domain, osName, osVersion, architecture, cpuModel sql.NullString
	var isAdmin sql.NullBool
	var uptimeSeconds, cpuCount sql.NullInt64
	var memoryTotalGB, memoryFreeGB, diskTotalGB, diskFreeGB sql.NullFloat64
	var collectedAtStr string

	err := row.Scan(&s.ID, &hostname, &domain, &osName, &osVersion, &architecture, &isAdmin, &uptimeSeconds, &cpuCount, &cpuModel, &memoryTotalGB, &memoryFreeGB, &diskTotalGB, &diskFreeGB, &collectedAtStr)
	if err != nil {
		return nil, err
	}

	if hostname.Valid {
		s.Hostname = hostname.String
	}
	if domain.Valid {
		s.Domain = domain.String
	}
	if osName.Valid {
		s.OSName = osName.String
	}
	if osVersion.Valid {
		s.OSVersion = osVersion.String
	}
	if architecture.Valid {
		s.Architecture = architecture.String
	}
	if isAdmin.Valid {
		s.IsAdmin = isAdmin.Bool
	}
	if uptimeSeconds.Valid {
		s.UptimeSeconds = uptimeSeconds.Int64
	}
	if cpuCount.Valid {
		s.CPUCount = int(cpuCount.Int64)
	}
	if cpuModel.Valid {
		s.CPUModel = cpuModel.String
	}
	if memoryTotalGB.Valid {
		s.MemoryTotalGB = memoryTotalGB.Float64
	}
	if memoryFreeGB.Valid {
		s.MemoryFreeGB = memoryFreeGB.Float64
	}
	if diskTotalGB.Valid {
		s.DiskTotalGB = diskTotalGB.Float64
	}
	if diskFreeGB.Valid {
		s.DiskFreeGB = diskFreeGB.Float64
	}
	if collectedAtStr != "" {
		s.CollectedAt, _ = time.Parse(time.RFC3339, collectedAtStr)
	}

	return &s, nil
}

func scanProcess(row interface{ Scan(...interface{}) error }) (*ProcessInfo, error) {
	var p ProcessInfo
	var pid, parentPID sql.NullInt64
	var name, exe, commandLine, username, startedAtStr sql.NullString
	var memoryMB, cpuPercent sql.NullFloat64
	var collectedAt string

	err := row.Scan(&p.ID, &pid, &name, &exe, &commandLine, &username, &parentPID, &startedAtStr, &memoryMB, &cpuPercent, &collectedAt)
	if err != nil {
		return nil, err
	}

	if pid.Valid {
		p.PID = int(pid.Int64)
	}
	if name.Valid {
		p.Name = name.String
	}
	if exe.Valid {
		p.Exe = exe.String
	}
	if commandLine.Valid {
		p.CommandLine = commandLine.String
	}
	if username.Valid {
		p.Username = username.String
	}
	if parentPID.Valid {
		p.ParentPID = int(parentPID.Int64)
	}
	if startedAtStr.Valid && startedAtStr.String != "" {
		t, _ := time.Parse(time.RFC3339, startedAtStr.String)
		p.StartedAt = &t
	}
	if memoryMB.Valid {
		p.MemoryMB = memoryMB.Float64
	}
	if cpuPercent.Valid {
		p.CPUPercent = cpuPercent.Float64
	}
	if collectedAt != "" {
		p.CollectedAt, _ = time.Parse(time.RFC3339, collectedAt)
	}

	return &p, nil
}

func scanNetworkConnection(row interface{ Scan(...interface{}) error }) (*NetworkConnection, error) {
	var c NetworkConnection
	var pid, localPort, remotePort sql.NullInt64
	var processName, protocol, localAddr, remoteAddr, state sql.NullString
	var collectedAt string

	err := row.Scan(&c.ID, &pid, &processName, &protocol, &localAddr, &localPort, &remoteAddr, &remotePort, &state, &collectedAt)
	if err != nil {
		return nil, err
	}

	if pid.Valid {
		c.PID = int(pid.Int64)
	}
	if processName.Valid {
		c.ProcessName = processName.String
	}
	if protocol.Valid {
		c.Protocol = protocol.String
	}
	if localAddr.Valid {
		c.LocalAddr = localAddr.String
	}
	if localPort.Valid {
		c.LocalPort = int(localPort.Int64)
	}
	if remoteAddr.Valid {
		c.RemoteAddr = remoteAddr.String
	}
	if remotePort.Valid {
		c.RemotePort = int(remotePort.Int64)
	}
	if state.Valid {
		c.State = state.String
	}
	if collectedAt != "" {
		c.CollectedAt, _ = time.Parse(time.RFC3339, collectedAt)
	}

	return &c, nil
}
