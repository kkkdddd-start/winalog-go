//go:build windows

package collectors

import (
	"context"
	"encoding/json"
	"os"
	"strings"
	"time"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
	"golang.org/x/sys/windows"
)

func (c *USNJournalCollector) collectUSNJournal() ([]*types.USNJournalEntry, error) {
	entries := make([]*types.USNJournalEntry, 0)

	usnEntries, err := GetUSNJournal("C")
	if err != nil {
		return entries, err
	}

	for _, entry := range usnEntries {
		entries = append(entries, &types.USNJournalEntry{
			Name:           entry.FileName,
			Path:           entry.Path,
			Reason:         decodeUSNReason(entry.Reason),
			Timestamp:      entry.TimeStamp,
			FileAttributes: getFileAttributesString(entry.FileAttributes),
			CollectedAt:    time.Now(),
		})
	}

	return entries, nil
}

func GetUSNJournal(driveLetter string) ([]USNEntry, error) {
	entries := make([]USNEntry, 0)

	if !strings.HasSuffix(driveLetter, ":") {
		driveLetter = driveLetter + ":"
	}

	volumePath := `\\.\` + driveLetter

	hFile, err := windows.CreateFile(
		windows.StringToUTF16Ptr(volumePath),
		windows.GENERIC_READ,
		windows.FILE_SHARE_READ|windows.FILE_SHARE_WRITE,
		nil,
		windows.OPEN_EXISTING,
		windows.FILE_FLAG_BACKUP_SEMANTICS,
		0,
	)
	if err != nil {
		return entries, err
	}
	defer windows.CloseHandle(hFile)

	var bytesReturned uint32
	var usnRecordSize uint32 = 100
	buffer := make([]byte, usnRecordSize)

	for {
		err = windows.DeviceIoControl(
			hFile,
			windows.FSCTL_READ_USN_JOURNAL,
			nil,
			0,
			unsafe.Pointer(&buffer[0]),
			uint32(len(buffer)),
			&bytesReturned,
			nil,
		)
		if err != nil {
			break
		}

		if bytesReturned < 8 {
			break
		}

		offset := uint32(0)
		for offset < bytesReturned-8 {
			record := (*USN_JOURNAL_DATA)(unsafe.Pointer(&buffer[offset]))
			offset += 8

			if offset >= bytesReturned {
				break
			}

			fileNameLength := *(*uint16)(unsafe.Pointer(&buffer[offset+4]))
			fileNameOffset := *(*uint16)(unsafe.Pointer(&buffer[offset+6]))

			if int(fileNameOffset)+int(fileNameLength) > int(bytesReturned) {
				break
			}

			fileName := windows.UTF16ToString(
				(*[windows.MAX_PATH]uint16)(unsafe.Pointer(&buffer[offset+uint32(fileNameOffset)]))[:fileNameLength/2],
			)

			reason := *(*uint32)(unsafe.Pointer(&buffer[offset+8]))

			fileAttributes := *(*uint32)(unsafe.Pointer(&buffer[offset+12]))

			entries = append(entries, USNEntry{
				RecordLength:    record.RecordLength,
				USN:             record.Usn,
				TimeStamp:       time.Date(1601, 1, 1, 0, 0, 0, 0, time.UTC).Add(time.Duration(record.Timestamp) * 100 * time.Nanosecond),
				Reason:          reason,
				FileName:        fileName,
				FileReference:   record.FileReferenceNumber,
				ParentReference: record.ParentFileReferenceNumber,
				FileAttributes:  fileAttributes,
			})

			recordLength := *(*uint32)(unsafe.Pointer(&buffer[offset]))
			if recordLength <= 0 {
				break
			}
			offset += recordLength
		}

		if bytesReturned < usnRecordSize {
			break
		}
	}

	return entries, nil
}

type USN_JOURNAL_DATA struct {
	Usn                       int64
	TimeOfFirstRecord         int64
	TimeOfLastRecord          int64
	MaxRecordSize             uint32
	AllocationSize            uint32
	UniqueSessionID           uint32
	UniqueSessionID2          uint32
	RootFileReference         uint64
	FreeRegionsLow            uint32
	FreeRegionsHigh           uint32
	RecordLength              uint32
	FileReferenceNumber       uint64
	ParentFileReferenceNumber uint64
}

func decodeUSNReason(reason uint32) string {
	reasons := []struct {
		bit  uint32
		name string
	}{
		{0x00000001, "DATA_OVERWRITE"},
		{0x00000002, "DATA_EXTEND"},
		{0x00000004, "DATA_TRUNCATION"},
		{0x00000010, "FILE_CREATE"},
		{0x00000020, "FILE_DELETE"},
		{0x00000040, "EA_CHANGE"},
		{0x00000080, "SECURITY_CHANGE"},
		{0x00000100, "RENAME_OLD_NAME"},
		{0x00000200, "RENAME_NEW_NAME"},
		{0x00000400, "INDEXABLE_CHANGE"},
		{0x00004000, "FILE_PIPE_CHANGE"},
		{0x00008000, "FILE_PRINT_CHANGE"},
		{0x00010000, "CONTENT_CHANGE"},
		{0x00020000, "PROPERTIES_CHANGE"},
	}

	reasonStrings := make([]string, 0)
	for _, r := range reasons {
		if reason&r.bit != 0 {
			reasonStrings = append(reasonStrings, r.name)
		}
	}

	if len(reasonStrings) == 0 {
		return "UNKNOWN"
	}

	return strings.Join(reasonStrings, ", ")
}

func getFileAttributesString(attrs uint32) string {
	var attrsList []string

	if attrs&windows.FILE_ATTRIBUTE_ARCHIVE != 0 {
		attrsList = append(attrsList, "ARCHIVE")
	}
	if attrs&windows.FILE_ATTRIBUTE_DIRECTORY != 0 {
		attrsList = append(attrsList, "DIRECTORY")
	}
	if attrs&windows.FILE_ATTRIBUTE_HIDDEN != 0 {
		attrsList = append(attrsList, "HIDDEN")
	}
	if attrs&windows.FILE_ATTRIBUTE_READONLY != 0 {
		attrsList = append(attrsList, "READONLY")
	}
	if attrs&windows.FILE_ATTRIBUTE_SYSTEM != 0 {
		attrsList = append(attrsList, "SYSTEM")
	}
	if attrs&windows.FILE_ATTRIBUTE_TEMPORARY != 0 {
		attrsList = append(attrsList, "TEMPORARY")
	}

	if len(attrsList) == 0 {
		return "NORMAL"
	}

	return strings.Join(attrsList, ", ")
}

func ParseUSNJournal(volumePath string) ([]*types.USNJournalEntry, error) {
	entries := make([]*types.USNJournalEntry, 0)

	usnEntries, err := GetUSNJournal(volumePath)
	if err != nil {
		return entries, err
	}

	for _, entry := range usnEntries {
		entries = append(entries, &types.USNJournalEntry{
			Name:           entry.FileName,
			Path:           entry.Path,
			Reason:         decodeUSNReason(entry.Reason),
			Timestamp:      entry.TimeStamp,
			FileAttributes: getFileAttributesString(entry.FileAttributes),
			CollectedAt:    time.Now(),
		})
	}

	return entries, nil
}

func GetUSNJournalInfo(driveLetter string) (map[string]interface{}, error) {
	info := make(map[string]interface{})

	if !strings.HasSuffix(driveLetter, ":") {
		driveLetter = driveLetter + ":"
	}

	volumePath := `\\.\` + driveLetter

	hFile, err := windows.CreateFile(
		windows.StringToUTF16Ptr(volumePath),
		windows.GENERIC_READ,
		windows.FILE_SHARE_READ|windows.FILE_SHARE_WRITE,
		nil,
		windows.OPEN_EXISTING,
		windows.FILE_FLAG_BACKUP_SEMANTICS,
		0,
	)
	if err != nil {
		return info, err
	}
	defer windows.CloseHandle(hFile)

	var bytesReturned uint32
	var usnJournalData USN_JOURNAL_DATA
	buffer := make([]byte, unsafe.Sizeof(usnJournalData))

	err = windows.DeviceIoControl(
		hFile,
		windows.FSCTL_QUERY_USN_JOURNAL,
		nil,
		0,
		unsafe.Pointer(&buffer[0]),
		uint32(len(buffer)),
		&bytesReturned,
		nil,
	)
	if err != nil {
		return info, err
	}

	journalData := (*USN_JOURNAL_DATA)(unsafe.Pointer(&buffer[0]))

	info["Usn"] = journalData.Usn
	info["FirstRecord"] = time.Date(1601, 1, 1, 0, 0, 0, 0, time.UTC).Add(time.Duration(journalData.TimeOfFirstRecord) * 100 * time.Nanosecond)
	info["LastRecord"] = time.Date(1601, 1, 1, 0, 0, 0, 0, time.UTC).Add(time.Duration(journalData.TimeOfLastRecord) * 100 * time.Nanosecond)
	info["MaxRecordSize"] = journalData.MaxRecordSize
	info["AllocationSize"] = journalData.AllocationSize

	return info, nil
}

func IsUSNJournalAvailable(driveLetter string) bool {
	_, err := GetUSNJournalInfo(driveLetter)
	return err == nil
}

func GetRecentUSNEntries(driveLetter string, since time.Time, limit int) ([]USNEntry, error) {
	entries, err := GetUSNJournal(driveLetter)
	if err != nil {
		return []USNEntry{}, err
	}

	recent := make([]USNEntry, 0)
	for _, entry := range entries {
		if entry.TimeStamp.After(since) {
			recent = append(recent, entry)
			if len(recent) >= limit {
				break
			}
		}
	}

	return recent, nil
}

func GetUSNEntriesByReason(driveLetter string, reason string) ([]USNEntry, error) {
	entries, err := GetUSNJournal(driveLetter)
	if err != nil {
		return []USNEntry{}, err
	}

	matches := make([]USNEntry, 0)
	reasonUpper := strings.ToUpper(reason)

	for _, entry := range entries {
		if strings.Contains(strings.ToUpper(decodeUSNReason(entry.Reason)), reasonUpper) {
			matches = append(matches, entry)
		}
	}

	return matches, nil
}

func GetDeletedFiles(driveLetter string) ([]USNEntry, error) {
	return GetUSNEntriesByReason(driveLetter, "FILE_DELETE")
}

func GetNewFiles(driveLetter string, since time.Time) ([]USNEntry, error) {
	entries, err := GetUSNJournal(driveLetter)
	if err != nil {
		return []USNEntry{}, err
	}

	newFiles := make([]USNEntry, 0)
	for _, entry := range entries {
		if entry.TimeStamp.After(since) && entry.Reason&0x00010000 != 0 {
			newFiles = append(newFiles, entry)
		}
	}

	return newFiles, nil
}

func TrackFileChanges(driveLetter, filePath string) ([]USNEntry, error) {
	entries, err := GetUSNJournal(driveLetter)
	if err != nil {
		return []USNEntry{}, err
	}

	fileName := strings.ToLower(filePath)
	if idx := strings.LastIndex(fileName, "\\"); idx >= 0 {
		fileName = fileName[idx+1:]
	}

	changes := make([]USNEntry, 0)
	for _, entry := range entries {
		if strings.ToLower(entry.FileName) == fileName {
			changes = append(changes, entry)
		}
	}

	return changes, nil
}
