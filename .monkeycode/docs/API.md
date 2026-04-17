# WinLogAnalyzer-Go API Documentation

**Version**: v2.4.0  
**Last Updated**: 2026-04-17

---

## Table of Contents

1. [Overview](#1-overview)
2. [Events API](#2-events-api)
3. [Alerts API](#3-alerts-api)
4. [Timeline API](#4-timeline-api)
5. [Import API](#5-import-api)
6. [Live Events API](#6-live-events-api)
7. [Reports API](#7-reports-api)
8. [Dashboard API](#8-dashboard-api)
9. [Error Codes](#9-error-codes)

---

## 1. Overview

### Base URL
```
http://localhost:8080/api
```

### Authentication
No built-in authentication. Access controlled via CORS middleware.

### Common Response Format

**Success Response (200/201):**
```json
{
  "message": "Success message",
  "data": { ... }
}
```

**Error Response (400/404/500):**
```json
{
  "error": "Error description",
  "code": "ErrorCode"
}
```

### Pagination
Query parameters:
- `page` - Page number (default: 1)
- `page_size` - Items per page (default: 100, max: 10000)

---

## 2. Events API

### GET /api/events
List events with pagination.

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | int | 1 | Page number |
| page_size | int | 100 | Items per page |

**Response (200):**
```json
{
  "events": [
    {
      "id": 1,
      "timestamp": "2026-01-01T00:00:00Z",
      "event_id": 4624,
      "level": "Info",
      "source": "Microsoft-Windows-Security-Auditing",
      "log_name": "Security",
      "computer": "DESKTOP-XXX",
      "user": "username",
      "message": "An account was successfully logged on",
      "ip_address": "192.168.1.1"
    }
  ],
  "total": 1000,
  "page": 1,
  "page_size": 100,
  "total_pages": 10
}
```

**Example Request:**
```bash
curl http://localhost:8080/api/events?page=1&page_size=50
```

---

### GET /api/events/:id
Get a single event by ID.

**Path Parameters:**
- `id` - Event ID (integer)

**Response (200):**
```json
{
  "id": 1,
  "timestamp": "2026-01-01T00:00:00Z",
  "event_id": 4624,
  "level": "Info",
  "source": "Microsoft-Windows-Security-Auditing",
  "log_name": "Security",
  "computer": "DESKTOP-XXX",
  "user": "username",
  "message": "An account was successfully logged on",
  "ip_address": "192.168.1.1",
  "raw_xml": "<?xml version="1.0"..."
}
```

**Response (404):**
```json
{
  "error": "event not found",
  "code": "ErrCodeEventNotFound"
}
```

**Example Request:**
```bash
curl http://localhost:8080/api/events/12345
```

---

### POST /api/events/search
Search events with filters.

**Request Body:**
```json
{
  "keywords": "login failed",
  "regex": false,
  "event_ids": [4625, 4624],
  "levels": [1, 2, 3],
  "log_names": ["Security", "System"],
  "sources": ["Microsoft-Windows-Security-Auditing"],
  "users": ["Administrator", "SYSTEM"],
  "computers": ["DC01", "FILE01"],
  "start_time": "2026-04-01T00:00:00Z",
  "end_time": "2026-04-17T23:59:59Z",
  "page": 1,
  "page_size": 100,
  "sort_by": "timestamp",
  "sort_order": "desc",
  "highlight": false
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| keywords | string | No | Search keywords |
| regex | bool | No | Enable regex matching |
| event_ids | []int32 | No | Filter by event IDs |
| levels | []int | No | Filter by levels (1=Critical, 2=Error, 3=Warning, 4=Info) |
| log_names | []string | No | Filter by log names |
| sources | []string | No | Filter by sources |
| users | []string | No | Filter by users |
| computers | []string | No | Filter by computers |
| start_time | string | No | Start time (RFC3339) |
| end_time | string | No | End time (RFC3339) |
| page | int | No | Page number |
| page_size | int | No | Page size (max 10000) |
| sort_by | string | No | Sort field (default: timestamp) |
| sort_order | string | No | Sort order: asc or desc |
| highlight | bool | No | Enable highlight |

**Response (200):**
```json
{
  "events": [...],
  "total": 500,
  "page": 1,
  "page_size": 100,
  "total_pages": 5,
  "query_time": 45
}
```

**Example Request:**
```bash
curl -X POST http://localhost:8080/api/events/search   -H "Content-Type: application/json"   -d '{"keywords": "login", "levels": [4], "page_size": 50}'
```

---

### POST /api/events/export
Export events in various formats.

**Request Body:**
```json
{
  "format": "csv",
  "filters": {
    "event_ids": [4624, 4625],
    "levels": [1, 2],
    "log_names": ["Security"],
    "computers": ["DESKTOP-XXX"],
    "users": ["Administrator"],
    "start_time": "2026-04-01T00:00:00Z",
    "end_time": "2026-04-17T23:59:59Z",
    "keywords": "login",
    "limit": 10000
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| format | string | Yes | Export format: json, csv, excel |
| filters | object | No | Filter criteria |
| filters.limit | int | No | Max events to export (default: 10000, max: 100000) |

**Response:**
- For `csv`/`excel`: Returns file download
- For `json`: Returns JSON object

**Example Request:**
```bash
curl -X POST http://localhost:8080/api/events/export   -H "Content-Type: application/json"   -d '{"format": "csv", "filters": {"limit": 1000}}'   -o events_export.csv
```

---

## 3. Alerts API

### GET /api/alerts
List alerts with pagination and filters.

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | int | 1 | Page number |
| page_size | int | 100 | Items per page |
| severity | string | "" | Filter by severity (critical, high, medium, low) |
| resolved | bool | null | Filter by resolved status |

**Response (200):**
```json
{
  "alerts": [
    {
      "id": 1,
      "rule_name": "BruteForceDetection",
      "severity": "high",
      "message": "Multiple failed login attempts detected",
      "count": 10,
      "first_seen": "2026-04-17T10:30:00Z",
      "last_seen": "2026-04-17T10:45:00Z",
      "resolved": false,
      "mitre_attack": ["T1110"]
    }
  ],
  "total": 50,
  "page": 1,
  "page_size": 100,
  "total_pages": 1
}
```

**Example Requests:**
```bash
# Get all alerts
curl http://localhost:8080/api/alerts

# Get critical alerts
curl http://localhost:8080/api/alerts?severity=critical

# Get unresolved alerts
curl http://localhost:8080/api/alerts?resolved=false
```

---

### GET /api/alerts/stats
Get alert statistics.

**Response (200):**
```json
{
  "total": 150,
  "by_severity": {
    "critical": 5,
    "high": 20,
    "medium": 45,
    "low": 80
  },
  "by_status": {
    "resolved": 100,
    "unresolved": 50
  },
  "by_rule": {
    "BruteForceDetection": 30,
    "SuspiciousProcessCreation": 25
  },
  "avg_per_day": 7.5
}
```

**Example Request:**
```bash
curl http://localhost:8080/api/alerts/stats
```

---

### GET /api/alerts/trend
Get alert trend over time.

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| days | int | 7 | Number of days to analyze (max 90) |

**Response (200):**
```json
{
  "trend": [
    {"date": "2026-04-11", "count": 5},
    {"date": "2026-04-12", "count": 8},
    {"date": "2026-04-13", "count": 3}
  ],
  "total": 50,
  "avg_per_day": 7.1
}
```

**Example Request:**
```bash
curl http://localhost:8080/api/alerts/trend?days=30
```

---

### POST /api/alerts/run-analysis
Run alert analysis on all stored events.

**Response (200):**
```json
{
  "success": true,
  "alerts_created": 15,
  "events_analyzed": 5000,
  "rules_executed": 60,
  "duration": "2.5s",
  "errors": []
}
```

**Example Request:**
```bash
curl -X POST http://localhost:8080/api/alerts/run-analysis
```

---

### GET /api/alerts/:id
Get a single alert by ID.

**Response (200):**
```json
{
  "id": 1,
  "rule_name": "BruteForceDetection",
  "severity": "high",
  "message": "Multiple failed login attempts detected",
  "count": 10,
  "first_seen": "2026-04-17T10:30:00Z",
  "last_seen": "2026-04-17T10:45:00Z",
  "resolved": false,
  "resolved_time": null,
  "notes": "",
  "mitre_attack": ["T1110"],
  "event_ids": [1, 2, 3, 4, 5]
}
```

**Example Request:**
```bash
curl http://localhost:8080/api/alerts/12345
```

---

### POST /api/alerts/:id/resolve
Mark an alert as resolved.

**Request Body:**
```json
{
  "notes": "Confirmed as legitimate user behavior"
}
```

**Response (200):**
```json
{
  "message": "Alert resolved"
}
```

**Example Request:**
```bash
curl -X POST http://localhost:8080/api/alerts/12345/resolve   -H "Content-Type: application/json"   -d '{"notes": "User confirmed legitimate"}'
```

---

### POST /api/alerts/:id/false-positive
Mark an alert as false positive.

**Request Body:**
```json
{
  "reason": "This is a regular maintenance task"
}
```

**Response (200):**
```json
{
  "message": "Alert marked as false positive"
}
```

**Example Request:**
```bash
curl -X POST http://localhost:8080/api/alerts/12345/false-positive   -H "Content-Type: application/json"   -d '{"reason": "Known maintenance window"}'
```

---

### DELETE /api/alerts/:id
Delete an alert.

**Response (200):**
```json
{
  "message": "Alert deleted"
}
```

**Example Request:**
```bash
curl -X DELETE http://localhost:8080/api/alerts/12345
```

---

### POST /api/alerts/batch
Batch operation on multiple alerts.

**Request Body:**
```json
{
  "ids": [1, 2, 3, 4, 5],
  "action": "resolve",
  "notes": "Batch resolved",
  "reason": "Not applicable"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| ids | []int64 | Yes | Alert IDs |
| action | string | Yes | Action: resolve, false-positive, delete |
| notes | string | No | Notes for resolve action |
| reason | string | No | Reason for false-positive action |

**Response (200):**
```json
{
  "message": "Batch action completed",
  "data": {
    "affected": 5,
    "failed": 0,
    "errors": []
  }
}
```

**Example Request:**
```bash
curl -X POST http://localhost:8080/api/alerts/batch   -H "Content-Type: application/json"   -d '{"ids": [1, 2, 3], "action": "resolve", "notes": "Bulk resolved"}'
```

---

## 4. Timeline API

### GET /api/timeline
Get combined event and alert timeline.

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| limit | int | 200 | Max entries (max 1000) |
| offset | int | 0 | Offset for pagination |
| start_time | string | "" | Start time (RFC3339) |
| end_time | string | "" | End time (RFC3339) |

**Response (200):**
```json
{
  "entries": [
    {
      "id": 1,
      "timestamp": "2026-04-17T10:30:00Z",
      "type": "event",
      "event_id": 4624,
      "level": "Info",
      "source": "Microsoft-Windows-Security-Auditing",
      "message": "Account logon successful"
    },
    {
      "id": 2,
      "timestamp": "2026-04-17T10:31:00Z",
      "type": "alert",
      "alert_id": 1,
      "severity": "high",
      "rule_name": "BruteForceDetection",
      "message": "Multiple failed login attempts"
    }
  ],
  "total_count": 500,
  "event_count": 450,
  "alert_count": 50,
  "has_more": true,
  "next_offset": 200
}
```

**Example Request:**
```bash
curl "http://localhost:8080/api/timeline?limit=100&start_time=2026-04-01T00:00:00Z"
```

---

### GET /api/timeline/stats
Get timeline statistics.

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| start_time | string | "" | Start time (RFC3339) |
| end_time | string | "" | End time (RFC3339) |

**Response (200):**
```json
{
  "total_events": 5000,
  "total_alerts": 150,
  "by_level": {
    "Critical": 10,
    "Error": 50,
    "Warning": 200,
    "Info": 4740
  },
  "by_category": {
    "Authentication": 1000,
    "Process": 800,
    "Account": 600
  },
  "by_source": {
    "Microsoft-Windows-Security-Auditing": 3000,
    "Microsoft-Windows-Sysmon": 1500
  },
  "top_event_ids": {
    "4624": 500,
    "4625": 200,
    "4688": 150
  },
  "time_range": "48.5 hours",
  "attack_chains": 3
}
```

**Example Request:**
```bash
curl "http://localhost:8080/api/timeline/stats?start_time=2026-04-01T00:00:00Z"
```

---

### GET /api/timeline/chains
Get detected attack chains.

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| start_time | string | "" | Start time (RFC3339) |
| end_time | string | "" | End time (RFC3339) |

**Response (200):**
```json
{
  "chains": [
    {
      "id": "brute-force",
      "name": "Brute Force Attack",
      "technique": "T1110",
      "tactic": "Credential Access",
      "severity": "high",
      "event_count": 25,
      "start_time": "2026-04-17T10:00:00Z",
      "end_time": "2026-04-17T10:30:00Z"
    }
  ],
  "total": 1
}
```

**Example Request:**
```bash
curl "http://localhost:8080/api/timeline/chains"
```

---

### GET /api/timeline/export
Export timeline in various formats.

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| format | string | "json" | Export format: json, csv, html |
| start_time | string | "" | Start time (RFC3339) |
| end_time | string | "" | End time (RFC3339) |

**Response:**
- For `csv`: Returns CSV file download
- For `html`: Returns HTML timeline visualization
- For `json`: Returns JSON object

**Example Request:**
```bash
curl "http://localhost:8080/api/timeline/export?format=html" -o timeline.html
```

---

### DELETE /api/timeline/alerts/:id
Delete an alert from timeline.

**Response (200):**
```json
{
  "message": "Alert deleted"
}
```

**Example Request:**
```bash
curl -X DELETE http://localhost:8080/api/timeline/alerts/12345
```

---

## 5. Import API

### POST /api/import/logs
Import log files.

**Request Body:**
```json
{
  "files": ["/path/to/security.evtx", "/path/to/system.etl"],
  "alert_on_import": true
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| files | []string | Yes | Array of file paths to import |
| alert_on_import | bool | No | Run alert analysis after import |

**Response (200):**
```json
{
  "success": true,
  "total_files": 2,
  "files_imported": 2,
  "files_failed": 0,
  "events_imported": 5000,
  "alert_on_import": true,
  "duration": "5.2s",
  "errors": []
}
```

**Example Request:**
```bash
curl -X POST http://localhost:8080/api/import/logs   -H "Content-Type: application/json"   -d '{"files": ["/var/logs/security.evtx"], "alert_on_import": true}'
```

---

### GET /api/import/status
Get import status for a file.

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| path | string | Yes | File path |

**Response (200):**
```json
{
  "file_path": "/var/logs/security.evtx",
  "status": "completed",
  "events_imported": 2500,
  "import_time": "2026-04-17T10:30:00Z",
  "import_id": "import_12345"
}
```

**Example Request:**
```bash
curl "http://localhost:8080/api/import/status?path=/var/logs/security.evtx"
```

---

## 6. Live Events API

### GET /api/live/events
Server-Sent Events stream for live event monitoring.

**Response:**
Server-Sent Events stream with event types:
- `connected` - Initial connection confirmation
- `event` - New event data
- `stats` - Current statistics

**Event Data Format:**
```json
{
  "type": "event",
  "data": {
    "id": 1,
    "timestamp": "2026-04-17T10:30:00Z",
    "event_id": 4624,
    "level": "Info",
    "source": "Microsoft-Windows-Security-Auditing",
    "log_name": "Security",
    "computer": "DESKTOP-XXX",
    "user": "username",
    "message": "An account was successfully logged on",
    "ip_address": "192.168.1.1"
  }
}
```

**Stats Format:**
```json
{
  "type": "stats",
  "data": {
    "total_events": 50000,
    "alerts": 150,
    "timestamp": "2026-04-17T10:30:00Z"
  }
}
```

**Example Request:**
```bash
curl -N http://localhost:8080/api/live/events
```

---

### GET /api/live/stats
Get live monitoring statistics.

**Response (200):**
```json
{
  "total_events": 50000,
  "events_per_sec": 2.5,
  "uptime": "6h15m30s",
  "timestamp": "2026-04-17T10:30:00Z"
}
```

**Example Request:**
```bash
curl http://localhost:8080/api/live/stats
```

---

## 7. Reports API

### GET /api/reports
List generated reports.

**Response (200):**
```json
{
  "reports": [
    {
      "id": "report_security_summary_1234567890",
      "type": "security_summary",
      "format": "html",
      "title": "Daily Security Report",
      "description": "",
      "status": "completed",
      "generated_at": "2026-04-17T10:00:00Z",
      "completed_at": "2026-04-17T10:01:30Z",
      "file_path": "/tmp/winalog_reports/report_security_summary_1234567890.html",
      "file_size": 45678
    }
  ],
  "total": 1
}
```

**Example Request:**
```bash
curl http://localhost:8080/api/reports
```

---

### POST /api/reports
Generate a new report.

**Request Body:**
```json
{
  "type": "security_summary",
  "format": "html",
  "start_time": "2026-04-01T00:00:00Z",
  "end_time": "2026-04-17T23:59:59Z",
  "include_raw": false,
  "include_ioc": true,
  "include_mitre": true,
  "title": "Weekly Security Report",
  "description": "Report for week of April 2026"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| type | string | Yes | Report type: security_summary, alert_report, event_report, timeline_report |
| format | string | Yes | Output format: html, json, pdf |
| start_time | string | No | Report start time (RFC3339) |
| end_time | string | No | Report end time (RFC3339) |
| include_raw | bool | No | Include raw events |
| include_ioc | bool | No | Include IOC summary |
| include_mitre | bool | No | Include MITRE ATT&CK distribution |
| title | string | No | Report title |
| description | string | No | Report description |

**Response (200):**
```json
{
  "id": "report_security_summary_1234567890",
  "type": "security_summary",
  "format": "html",
  "status": "generating",
  "generated_at": "2026-04-17T10:00:00Z",
  "message": "Report generation started",
  "download_url": "/api/reports/report_security_summary_1234567890/download"
}
```

**Example Request:**
```bash
curl -X POST http://localhost:8080/api/reports   -H "Content-Type: application/json"   -d '{"type": "security_summary", "format": "html", "title": "April Report"}'
```

---

### GET /api/reports/:id
Get report details.

**Response (200):**
```json
{
  "id": "report_security_summary_1234567890",
  "type": "security_summary",
  "format": "html",
  "title": "Daily Security Report",
  "description": "",
  "status": "completed",
  "generated_at": "2026-04-17T10:00:00Z",
  "completed_at": "2026-04-17T10:01:30Z",
  "file_path": "/tmp/winalog_reports/report_security_summary_1234567890.html",
  "file_size": 45678
}
```

**Example Request:**
```bash
curl http://localhost:8080/api/reports/report_security_summary_1234567890
```

---

### GET /api/reports/export
Export data in various formats.

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| format | string | "json" | Export format: json, csv, excel |

**Response:**
- Returns file download

**Example Request:**
```bash
curl "http://localhost:8080/api/reports/export?format=csv" -o export.csv
```

---

## Report Templates API

### GET /api/report-templates
List available report templates.

**Response (200):**
```json
{
  "templates": [
    {
      "name": "security_summary",
      "description": "Comprehensive security summary report"
    },
    {
      "name": "alert_details",
      "description": "Detailed alert analysis report"
    }
  ],
  "total": 2
}
```

---

### GET /api/report-templates/:name
Get template details.

**Response (200):**
```json
{
  "name": "security_summary",
  "content": "",
  "template": "<!DOCTYPE html>...",
  "is_custom": false
}
```

---

### POST /api/report-templates
Create a custom template.

**Request Body:**
```json
{
  "name": "custom_report",
  "content": "<!DOCTYPE html>...",
  "description": "My custom report template"
}
```

---

### PUT /api/report-templates/:name
Update a custom template.

---

### DELETE /api/report-templates/:name
Delete a custom template.

---

## 8. Dashboard API

### GET /api/dashboard/collection-stats
Get collection statistics for dashboard.

**Response (200):**
```json
{
  "total_events": 50000,
  "total_alerts": 150,
  "events_today": 500,
  "alerts_today": 5,
  "top_event_ids": [
    {"event_id": 4624, "count": 5000},
    {"event_id": 4625, "count": 2000}
  ],
  "events_by_level": {
    "Critical": 10,
    "Error": 100,
    "Warning": 500,
    "Info": 44390
  },
  "imports_today": 3
}
```

**Example Request:**
```bash
curl http://localhost:8080/api/dashboard/collection-stats
```

---

## 9. Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| ErrCodeInvalidRequest | 400 | Invalid request parameters |
| ErrCodeInternalError | 500 | Internal server error |
| ErrCodeEventNotFound | 404 | Event not found |
| ErrCodeAlertNotFound | 404 | Alert not found |
| ErrCodeInvalidQuery | 400 | Invalid SQL query |
| ErrCodeAlertAlreadyResolved | 400 | Alert already resolved |

---

## Appendix A: Event Levels

| Level | Value | Description |
|-------|-------|-------------|
| Critical | 1 | Critical event |
| Error | 2 | Error event |
| Warning | 3 | Warning event |
| Info | 4 | Information event |
| Verbose | 5 | Verbose event |

---

## Appendix B: Report Types

| Type | Description |
|------|-------------|
| security_summary | Comprehensive security summary |
| alert_report | Alert details report |
| event_report | Raw events report |
| timeline_report | Timeline visualization |

---

## Appendix C: Example Use Cases

### Use Case 1: Search for Failed Logins

```bash
# Find all failed login events (EventID 4625)
curl -X POST http://localhost:8080/api/events/search \
  -H "Content-Type: application/json" \
  -d '{
    "event_ids": [4625],
    "levels": [2],
    "start_time": "2026-04-01T00:00:00Z",
    "page_size": 100
  }'
```

### Use Case 2: Monitor Real-time Events

```bash
# Stream live events
curl -N http://localhost:8080/api/live/events

# Get live stats
curl http://localhost:8080/api/live/stats
```

### Use Case 3: Generate and Download Report

```bash
# 1. Generate report
REPORT_ID=$(curl -s -X POST http://localhost:8080/api/reports \
  -H "Content-Type: application/json" \
  -d '{"type": "security_summary", "format": "html"}' | jq -r '.id')

# 2. Wait for completion
sleep 5

# 3. Get report details
curl http://localhost:8080/api/reports/$REPORT_ID
```

### Use Case 4: Batch Resolve Alerts

```bash
# Resolve multiple alerts
curl -X POST http://localhost:8080/api/alerts/batch \
  -H "Content-Type: application/json" \
  -d '{
    "ids": [1, 2, 3, 4, 5],
    "action": "resolve",
    "notes": "Resolved after investigation"
  }'
```

---

**Document Version**: v2.4.0  
**Last Updated**: 2026-04-17
