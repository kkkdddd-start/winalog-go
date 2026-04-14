package types

import (
	"database/sql"
	"encoding/json"
	"time"
)

type EventLevel int

const (
	EventLevelCritical EventLevel = 1
	EventLevelError    EventLevel = 2
	EventLevelWarning  EventLevel = 3
	EventLevelInfo     EventLevel = 4
	EventLevelVerbose  EventLevel = 5
)

func (l EventLevel) String() string {
	switch l {
	case EventLevelCritical:
		return "Critical"
	case EventLevelError:
		return "Error"
	case EventLevelWarning:
		return "Warning"
	case EventLevelInfo:
		return "Info"
	case EventLevelVerbose:
		return "Verbose"
	default:
		return "Unknown"
	}
}

func (l EventLevel) MarshalJSON() ([]byte, error) {
	return json.Marshal(l.String())
}

func (l *EventLevel) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "Critical":
		*l = EventLevelCritical
	case "Error":
		*l = EventLevelError
	case "Warning":
		*l = EventLevelWarning
	case "Info":
		*l = EventLevelInfo
	case "Verbose":
		*l = EventLevelVerbose
	default:
		*l = 0
	}
	return nil
}

type Event struct {
	ID         int64      `json:"id" db:"id"`
	Timestamp  time.Time  `json:"timestamp" db:"timestamp"`
	EventID    int32      `json:"event_id" db:"event_id"`
	Level      EventLevel `json:"level" db:"level"`
	Source     string     `json:"source" db:"source"`
	LogName    string     `json:"log_name" db:"log_name"`
	Computer   string     `json:"computer" db:"computer"`
	User       *string    `json:"user,omitempty" db:"user"`
	UserSID    *string    `json:"user_sid,omitempty" db:"user_sid"`
	Message    string     `json:"message" db:"message"`
	RawXML     *string    `json:"raw_xml,omitempty" db:"raw_xml"`
	SessionID  *string    `json:"session_id,omitempty" db:"session_id"`
	IPAddress  *string    `json:"ip_address,omitempty" db:"ip_address"`
	ImportTime time.Time  `json:"import_time" db:"import_time"`
	ImportID   int64      `json:"import_id,omitempty" db:"import_id"`
}

func (e *Event) ToMap() map[string]interface{} {
	m := map[string]interface{}{
		"timestamp":   e.Timestamp,
		"event_id":    e.EventID,
		"level":       int(e.Level),
		"source":      e.Source,
		"log_name":    e.LogName,
		"computer":    e.Computer,
		"message":     e.Message,
		"import_time": e.ImportTime,
	}
	if e.User != nil {
		m["user"] = *e.User
	}
	if e.UserSID != nil {
		m["user_sid"] = *e.UserSID
	}
	if e.RawXML != nil {
		m["raw_xml"] = *e.RawXML
	}
	if e.SessionID != nil {
		m["session_id"] = *e.SessionID
	}
	if e.IPAddress != nil {
		m["ip_address"] = *e.IPAddress
	}
	if e.ImportID > 0 {
		m["import_id"] = e.ImportID
	}
	return m
}

func (e *Event) ToSlice() []interface{} {
	return []interface{}{
		e.ID,
		e.Timestamp,
		e.EventID,
		int(e.Level),
		e.Source,
		e.LogName,
		e.Computer,
		e.User,
		e.UserSID,
		e.Message,
		e.RawXML,
		e.SessionID,
		e.IPAddress,
		e.ImportTime,
		e.ImportID,
	}
}

var EventColumns = []string{
	"id",
	"timestamp",
	"event_id",
	"level",
	"source",
	"log_name",
	"computer",
	"user",
	"user_sid",
	"message",
	"raw_xml",
	"session_id",
	"ip_address",
	"import_time",
	"import_id",
}

func ScanEvent(row interface{ Scan(...interface{}) error }) (*Event, error) {
	var e Event
	var user, userSID, rawXML, sessionID, ipAddress sql.NullString
	var importID sql.NullInt64

	err := row.Scan(
		&e.ID,
		&e.Timestamp,
		&e.EventID,
		&e.Level,
		&e.Source,
		&e.LogName,
		&e.Computer,
		&user,
		&userSID,
		&e.Message,
		&rawXML,
		&sessionID,
		&ipAddress,
		&e.ImportTime,
		&importID,
	)
	if err != nil {
		return nil, err
	}

	if user.Valid {
		e.User = &user.String
	}
	if userSID.Valid {
		e.UserSID = &userSID.String
	}
	if rawXML.Valid {
		e.RawXML = &rawXML.String
	}
	if sessionID.Valid {
		e.SessionID = &sessionID.String
	}
	if ipAddress.Valid {
		e.IPAddress = &ipAddress.String
	}
	if importID.Valid {
		e.ImportID = importID.Int64
	}

	return &e, nil
}

type EventIDCount struct {
	EventID int32 `json:"event_id" db:"event_id"`
	Count   int64 `json:"count" db:"count"`
}

type LevelDistribution struct {
	Level EventLevel `json:"level" db:"level"`
	Count int64      `json:"count" db:"count"`
}

type LogNameDistribution struct {
	LogName string `json:"log_name" db:"log_name"`
	Count   int64  `json:"count" db:"count"`
}
