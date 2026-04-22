//go:build windows

package poll

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os/exec"
	"strings"
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/monitor/types"
)

type DNSEventTracker struct {
	ctx         context.Context
	cancel      context.CancelFunc
	interval    time.Duration
	prevCache   map[string]*DNSEntry
	events      chan *types.MonitorEvent
	subscribers []chan *types.MonitorEvent
	subMu       sync.RWMutex
	running     bool
	mu          sync.RWMutex
	wg          sync.WaitGroup
}

type DNSEntry struct {
	Name        string
	Type        uint16
	TypeName    string
	Data        string
	TTL         uint32
	Section     string
	TimeSeen    time.Time
	IsIPv6      bool
	ProcessID   uint32
	ProcessName string
}

type DnsCacheRecord struct {
	Name     string `json:"Name"`
	Type     uint16 `json:"Type"`
	TypeName string `json:"TypeName"`
	Data     string `json:"Data"`
	TTL      uint32 `json:"TTL"`
	Section  string `json:"Section"`
	IPv6     bool   `json:"IPv6"`
}

type DnsProcessInfo struct {
	ProcessID   uint32 `json:"ProcessId"`
	ProcessName string `json:"ProcessName"`
}

func NewDNSPoller(interval time.Duration) *DNSEventTracker {
	if interval <= 0 {
		interval = 2 * time.Second
	}
	return &DNSEventTracker{
		interval:    interval,
		prevCache:   make(map[string]*DNSEntry),
		events:      make(chan *types.MonitorEvent, 100),
		subscribers: make([]chan *types.MonitorEvent, 0),
		running:     false,
	}
}

func (dp *DNSEventTracker) Start() error {
	dp.mu.Lock()
	if dp.running {
		dp.mu.Unlock()
		return nil
	}
	dp.ctx, dp.cancel = context.WithCancel(context.Background())
	dp.running = true
	dp.mu.Unlock()

	dp.wg.Add(1)
	go dp.run()
	return nil
}

func (dp *DNSEventTracker) Stop() error {
	dp.mu.Lock()
	if !dp.running {
		dp.mu.Unlock()
		return nil
	}

	dp.cancel()
	dp.running = false
	dp.mu.Unlock()

	dp.wg.Wait()

	dp.subMu.Lock()
	for _, ch := range dp.subscribers {
		close(ch)
	}
	dp.subscribers = make([]chan *types.MonitorEvent, 0)
	dp.subMu.Unlock()

	return nil
}

func (dp *DNSEventTracker) Subscribe(ch chan *types.MonitorEvent) func() {
	dp.subMu.Lock()
	defer dp.subMu.Unlock()
	dp.subscribers = append(dp.subscribers, ch)
	return func() {
		dp.subMu.Lock()
		defer dp.subMu.Unlock()
		for i, c := range dp.subscribers {
			if c == ch {
				dp.subscribers = append(dp.subscribers[:i], dp.subscribers[i+1:]...)
				break
			}
		}
	}
}

func (dp *DNSEventTracker) run() {
	defer dp.wg.Done()
	ticker := time.NewTicker(dp.interval)
	defer ticker.Stop()

	isFirstRun := true
	dp.pollDNS(isFirstRun)

	for {
		select {
		case <-dp.ctx.Done():
			return
		case <-ticker.C:
			dp.pollDNS(false)
			isFirstRun = false
		}
	}
}

func (dp *DNSEventTracker) pollDNS(isFirstRun bool) {
	select {
	case <-dp.ctx.Done():
		return
	default:
	}

	currentCache := dp.getDNSCache()

	dp.mu.Lock()
	for key, entry := range currentCache {
		_, exists := dp.prevCache[key]
		if isFirstRun || !exists {
			event := dp.createDNSEvent(entry, !isFirstRun && !exists)
			if event != nil {
				dp.publishEvent(event)
			}
		}
	}
	dp.prevCache = currentCache
	dp.mu.Unlock()
}

func (dp *DNSEventTracker) getDNSCache() map[string]*DNSEntry {
	cache := make(map[string]*DNSEntry)

	entries, err := dp.queryDNSCache()
	if err != nil {
		log.Printf("[DNS] Failed to query DNS cache: %v", err)
		return cache
	}

	for _, entry := range entries {
		key := fmt.Sprintf("%s-%d-%s", entry.Name, entry.Type, entry.Data)
		cache[key] = entry
	}

	return cache
}

func (dp *DNSEventTracker) queryDNSCache() ([]*DNSEntry, error) {
	dnsCmd := `Get-DnsClientCache -ErrorAction SilentlyContinue | Select-Object Entry, RecordType, TimeToLive, Data, Section | ConvertTo-Json -Compress`

	connCmd := `Get-NetTCPConnection -State Established -ErrorAction SilentlyContinue | Select-Object OwningProcess | ConvertTo-Json -Compress`

	cmd := exec.Command("powershell", "-NoProfile", "-NonInteractive", "-Command", fmt.Sprintf(`
		[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
		
		$dnsResults = @()
		$cache = %s
		if ($cache) {
			foreach ($entry in $cache) {
				$typeName = switch ($entry.RecordType) {
					1 { "A" }
					28 { "AAAA" }
					5 { "CNAME" }
					15 { "MX" }
					2 { "NS" }
					12 { "PTR" }
					6 { "SOA" }
					16 { "TXT" }
					33 { "SRV" }
					35 { "NAPTR" }
					32768 { "TA" }
					32769 { "DLV" }
					default { [string]$entry.RecordType }
				}
				$ipv6 = $entry.Data -match ':'
				$dnsResults += [PSCustomObject]@{
					Name = $entry.Entry
					Type = $entry.RecordType
					TypeName = $typeName
					Data = $entry.Data
					TTL = $entry.TimeToLive
					Section = $entry.Section.ToString()
					IPv6 = $ipv6
				}
			}
		}

		$connResults = @()
		$conns = %s
		if ($conns) {
			$connMap = @{}
			foreach ($c in $conns) {
				$connMap[$c.OwningProcess] = $true
			}
		}

		foreach ($r in $dnsResults) {
			$procId = 0
			$procName = "Unknown"
			$matched = $false
			foreach ($pid in $connMap.Keys) {
				$conns = Get-NetTCPConnection -OwningProcess $pid -State Established -ErrorAction SilentlyContinue | Select-Object -First 1
				if ($conns) {
					$localIP = $conns.LocalAddress
					$remoteIP = $conns.RemoteAddress
					if ($r.Data -eq $remoteIP -or $r.Name.Length -gt 0) {
						$procId = $pid
						try {
							$proc = Get-Process -Id $pid -ErrorAction SilentlyContinue
							if ($proc) { $procName = $proc.ProcessName }
						} catch {}
						$matched = $true
						break
					}
				}
			}
			[PSCustomObject]@{
				Name = $r.Name
				Type = $r.Type
				TypeName = $r.TypeName
				Data = $r.Data
				TTL = $r.TTL
				Section = $r.Section
				IPv6 = $r.IPv6
				ProcessID = $procId
				ProcessName = $procName
			}
		}
	`, dnsCmd, connCmd))

	var out bytes.Buffer
	cmd.Stdout = &out
	cmd.Stderr = nil

	if err := cmd.Run(); err != nil {
		return nil, fmt.Errorf("failed to execute DNS query: %w", err)
	}

	return dp.parseDNSOutput(out.String()), nil
}

func (dp *DNSEventTracker) parseDNSOutput(output string) []*DNSEntry {
	entries := make([]*DNSEntry, 0)
	if output == "" || output == "null" || output == " " {
		return entries
	}

	output = strings.TrimSpace(output)

	var records []DnsCacheRecord

	if strings.HasPrefix(output, "[") {
		if err := json.Unmarshal([]byte(output), &records); err != nil {
			log.Printf("[DNS] Failed to parse DNS JSON array: %v", err)
			return entries
		}
	} else if strings.HasPrefix(output, "{") {
		var record DnsCacheRecord
		if err := json.Unmarshal([]byte(output), &record); err != nil {
			log.Printf("[DNS] Failed to parse DNS JSON object: %v", err)
			return entries
		}
		records = append(records, record)
	} else {
		log.Printf("[DNS] Unexpected DNS output format")
		return entries
	}

	for _, r := range records {
		if r.Name == "" || r.Data == "" {
			continue
		}
		entries = append(entries, &DNSEntry{
			Name:     r.Name,
			Type:     r.Type,
			TypeName: r.TypeName,
			Data:     r.Data,
			TTL:      r.TTL,
			Section:  r.Section,
			TimeSeen: time.Now(),
			IsIPv6:   r.IPv6,
		})
	}

	return entries
}

func (dp *DNSEventTracker) createDNSEvent(entry *DNSEntry, isNew bool) *types.MonitorEvent {
	severity := types.SeverityInfo

	for _, indicator := range types.SuspiciousDNSIndicators {
		if strings.Contains(strings.ToLower(entry.Name), strings.ToLower(indicator)) {
			severity = types.SeverityMedium
			break
		}
	}

	isPrivate := false
	if strings.HasPrefix(entry.Data, "127.") ||
		strings.HasPrefix(entry.Data, "192.168.") ||
		strings.HasPrefix(entry.Data, "10.") ||
		strings.HasPrefix(entry.Data, "172.") {
		isPrivate = true
	}

	if isPrivate && severity == types.SeverityInfo {
		severity = types.SeverityLow
	}

	if entry.TypeName == "AAAA" && !strings.Contains(entry.Data, ":") {
		severity = types.SeverityLow
	}

	data := make(map[string]interface{})
	data["query_name"] = entry.Name
	data["query_type"] = entry.Type
	data["query_type_name"] = entry.TypeName
	data["results"] = []string{entry.Data}
	data["ttl"] = entry.TTL
	data["is_new"] = isNew
	data["is_ipv6"] = entry.IsIPv6
	data["section"] = entry.Section
	data["process_id"] = entry.ProcessID
	data["process_name"] = entry.ProcessName

	return &types.MonitorEvent{
		ID:        fmt.Sprintf("dns-%s-%d-%d", entry.Name, entry.Type, time.Now().UnixNano()),
		Type:      types.EventTypeDNS,
		Timestamp: time.Now(),
		Severity:  severity,
		Data:      data,
	}
}

func (dp *DNSEventTracker) publishEvent(event *types.MonitorEvent) {
	dp.subMu.RLock()
	defer dp.subMu.RUnlock()

	for _, ch := range dp.subscribers {
		select {
		case ch <- event:
		default:
		}
	}
}

type DNSEntry struct {
	Name     string
	Type     uint16
	TypeName string
	Data     string
	TTL      uint32
	Section  string
	TimeSeen time.Time
	IsIPv6   bool
}

type DnsCacheRecord struct {
	Name     string `json:"Name"`
	Type     uint16 `json:"Type"`
	TypeName string `json:"TypeName"`
	Data     string `json:"Data"`
	TTL      uint32 `json:"TTL"`
	Section  string `json:"Section"`
	IPv6     bool   `json:"IPv6"`
}

func NewDNSPoller(interval time.Duration) *DNSEventTracker {
	if interval <= 0 {
		interval = 5 * time.Second
	}
	return &DNSEventTracker{
		interval:    interval,
		prevCache:   make(map[string]*DNSEntry),
		events:      make(chan *types.MonitorEvent, 100),
		subscribers: make([]chan *types.MonitorEvent, 0),
		running:     false,
	}
}

func (dp *DNSEventTracker) Start() error {
	dp.mu.Lock()
	if dp.running {
		dp.mu.Unlock()
		return nil
	}
	dp.ctx, dp.cancel = context.WithCancel(context.Background())
	dp.running = true
	dp.mu.Unlock()

	dp.wg.Add(1)
	go dp.run()
	return nil
}

func (dp *DNSEventTracker) Stop() error {
	dp.mu.Lock()
	if !dp.running {
		dp.mu.Unlock()
		return nil
	}

	dp.cancel()
	dp.running = false
	dp.mu.Unlock()

	dp.wg.Wait()

	dp.subMu.Lock()
	for _, ch := range dp.subscribers {
		close(ch)
	}
	dp.subscribers = make([]chan *types.MonitorEvent, 0)
	dp.subMu.Unlock()

	return nil
}

func (dp *DNSEventTracker) Subscribe(ch chan *types.MonitorEvent) func() {
	dp.subMu.Lock()
	defer dp.subMu.Unlock()
	dp.subscribers = append(dp.subscribers, ch)
	return func() {
		dp.subMu.Lock()
		defer dp.subMu.Unlock()
		for i, c := range dp.subscribers {
			if c == ch {
				dp.subscribers = append(dp.subscribers[:i], dp.subscribers[i+1:]...)
				break
			}
		}
	}
}

func (dp *DNSEventTracker) run() {
	defer dp.wg.Done()
	ticker := time.NewTicker(dp.interval)
	defer ticker.Stop()

	isFirstRun := true
	dp.pollDNS(isFirstRun)

	for {
		select {
		case <-dp.ctx.Done():
			return
		case <-ticker.C:
			dp.pollDNS(false)
			isFirstRun = false
		}
	}
}

func (dp *DNSEventTracker) pollDNS(isFirstRun bool) {
	select {
	case <-dp.ctx.Done():
		return
	default:
	}

	currentCache := dp.getDNSCache()

	dp.mu.Lock()
	for key, entry := range currentCache {
		_, exists := dp.prevCache[key]
		if isFirstRun || !exists {
			event := dp.createDNSEvent(entry, !isFirstRun && !exists)
			if event != nil {
				dp.publishEvent(event)
			}
		}
	}
	dp.prevCache = currentCache
	dp.mu.Unlock()
}

func (dp *DNSEventTracker) getDNSCache() map[string]*DNSEntry {
	cache := make(map[string]*DNSEntry)

	entries, err := dp.queryDNSCache()
	if err != nil {
		log.Printf("[DNS] Failed to query DNS cache: %v", err)
		return cache
	}

	log.Printf("[DNS] DNS cache query returned %d entries", len(entries))

	for _, entry := range entries {
		key := fmt.Sprintf("%s-%d-%s", entry.Name, entry.Type, entry.Data)
		cache[key] = entry
	}

	return cache
}

func (dp *DNSEventTracker) queryDNSCache() ([]*DNSEntry, error) {
	cmd := exec.Command("powershell", "-NoProfile", "-NonInteractive", "-Command", `
		[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
		$cache = Get-DnsClientCache -ErrorAction SilentlyContinue
		if ($cache) {
			$results = @()
			foreach ($entry in $cache) {
				$typeName = switch ($entry.Type) {
					1 { "A" }
					28 { "AAAA" }
					5 { "CNAME" }
					15 { "MX" }
					2 { "NS" }
					12 { "PTR" }
					6 { "SOA" }
					16 { "TXT" }
					33 { "SRV" }
					35 { "NAPTR" }
					31 { "RRSIG" }
					24 { "IPSECKEY" }
					39 { "DS" }
					40 { "NSEC" }
					41 { "DNSKEY" }
					46 { "RRSIG" }
					47 { "NSEC" }
					48 { "DNSKEY" }
					50 { "NSEC3" }
					51 { "NSEC3PARAM" }
					52 { "TLSA" }
					53 { "CDS" }
					55 { "CDNSKEY" }
					32768 { "TA" }
					32769 { "DLV" }
					default { [string]$entry.Type }
				}
				$ipv6 = $entry.Data -match ':'
				$results += [PSCustomObject]@{
					Name = $entry.Entry
					Type = $entry.Type
					TypeName = $typeName
					Data = $entry.Data
					TTL = $entry.TimeToLive
					Section = $entry.Section.ToString()
					IPv6 = $ipv6
				}
			}
			$results | ConvertTo-Json -Compress
		}
	`)

	var out bytes.Buffer
	cmd.Stdout = &out
	cmd.Stderr = nil

	if err := cmd.Run(); err != nil {
		return nil, fmt.Errorf("failed to execute DNS query: %w", err)
	}

	return dp.parseDNSOutput(out.String()), nil
}

func (dp *DNSEventTracker) parseDNSOutput(output string) []*DNSEntry {
	entries := make([]*DNSEntry, 0)
	if output == "" || output == "null" {
		return entries
	}

	output = strings.TrimSpace(output)

	var records []DnsCacheRecord

	if strings.HasPrefix(output, "[") {
		if err := json.Unmarshal([]byte(output), &records); err != nil {
			log.Printf("[DNS] Failed to parse DNS JSON array: %v", err)
			return entries
		}
	} else if strings.HasPrefix(output, "{") {
		var record DnsCacheRecord
		if err := json.Unmarshal([]byte(output), &record); err != nil {
			log.Printf("[DNS] Failed to parse DNS JSON object: %v", err)
			return entries
		}
		records = append(records, record)
	} else {
		log.Printf("[DNS] Unexpected DNS output format")
		return entries
	}

	for _, r := range records {
		if r.Name == "" || r.Data == "" {
			continue
		}
		entries = append(entries, &DNSEntry{
			Name:     r.Name,
			Type:     r.Type,
			TypeName: r.TypeName,
			Data:     r.Data,
			TTL:      r.TTL,
			Section:  r.Section,
			TimeSeen: time.Now(),
			IsIPv6:   r.IPv6,
		})
	}

	return entries
}

func (dp *DNSEventTracker) createDNSEvent(entry *DNSEntry, isNew bool) *types.MonitorEvent {
	severity := types.SeverityInfo

	for _, indicator := range types.SuspiciousDNSIndicators {
		if strings.Contains(strings.ToLower(entry.Name), strings.ToLower(indicator)) {
			severity = types.SeverityMedium
			break
		}
	}

	isPrivate := false
	if strings.HasPrefix(entry.Data, "127.") ||
		strings.HasPrefix(entry.Data, "192.168.") ||
		strings.HasPrefix(entry.Data, "10.") ||
		strings.HasPrefix(entry.Data, "172.") {
		isPrivate = true
	}

	if isPrivate && severity == types.SeverityInfo {
		severity = types.SeverityLow
	}

	data := make(map[string]interface{})
	data["query_name"] = entry.Name
	data["query_type"] = entry.Type
	data["query_type_name"] = entry.TypeName
	data["results"] = []string{entry.Data}
	data["ttl"] = entry.TTL
	data["is_new"] = isNew
	data["is_ipv6"] = entry.IsIPv6
	data["section"] = entry.Section

	return &types.MonitorEvent{
		ID:        fmt.Sprintf("dns-%s-%d-%d", entry.Name, entry.Type, time.Now().UnixNano()),
		Type:      types.EventTypeDNS,
		Timestamp: time.Now(),
		Severity:  severity,
		Data:      data,
	}
}

func (dp *DNSEventTracker) publishEvent(event *types.MonitorEvent) {
	dp.subMu.RLock()
	defer dp.subMu.RUnlock()

	for _, ch := range dp.subscribers {
		select {
		case ch <- event:
		default:
		}
	}
}
