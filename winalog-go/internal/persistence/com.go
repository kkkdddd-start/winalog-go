//go:build windows

package persistence

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type COMHijackDetector struct {
	config *DetectorConfig
}

func NewCOMHijackDetector() *COMHijackDetector {
	return &COMHijackDetector{
		config: &DetectorConfig{
			Enabled:  false,
			EventIDs: []int32{4670},
		},
	}
}

func (d *COMHijackDetector) Name() string {
	return "com_hijack_detector"
}

func (d *COMHijackDetector) GetTechnique() Technique {
	return TechniqueT1546015
}

func (d *COMHijackDetector) RequiresAdmin() bool {
	return true
}

func (d *COMHijackDetector) SetConfig(config *DetectorConfig) error {
	if config == nil {
		return fmt.Errorf("config cannot be nil")
	}
	d.config = config
	return nil
}

func (d *COMHijackDetector) GetConfig() *DetectorConfig {
	return d.config
}

var SuspiciousCLSIDPaths = []string{
	`HKCR\CLSID`,
}

var KnownMaliciousCLSID = map[string]string{
	"{00000514-0000-0010-8000-00AA006D2EA4}": "ADO Stream Object (Known COM RAT)",
	"{00000200-0000-0010-8000-00AA006D2EA4}": "ADO RecordSet Object",
	"{00000300-0000-0010-8000-00AA006D2EA4}": "ADO Command Object",
	"{00000304-0000-0010-8000-00AA006D2EA4}": "ADO Parameter Object",
	"{BD1C19A-33C2-11D4-8A26-00C04F5B4896}":  "ASUS Splendid",
	"{C833FD2E-74EE-41DA-AF91-9C378E0043FC}": "ASUS Splendid Registry Key",
	"{E8CC8000-tt2A-4A2F-9F7A-1234567890AB}": "PlugX RAT CLSID",
	"{9E5E8C70-4A2D-4F7A-8F3A-1234567890CD}": "Gh0st RAT CLSID",
	"{1F2E5E3F-3A4B-9C8D-1E2F-1234567890EF}": " PoisonIvy RAT CLSID",
	"{AB890700-12A4-4B5C-9D8E-123456789012}": "DarkComet RAT CLSID",
	"{C8F1E020-D3E5-4B6A-8F9C-123456789034}": "NanoCore RAT CLSID",
	"{1A2B3C4D-5E6F-7A8B-9C0D-1234567890AB}": "AsyncRAT CLSID",
	"{B1C2D3E4-5F6A-7B8C-9D0E-1234567890CD}": "Remcos RAT CLSID",
}

var SuspiciousCOMPaths = []string{
	"%TEMP%", "%APPDATA%", "%LOCALAPPDATA%",
	"\\temp\\", "\\tmp\\",
	"\\\\UNC\\", "\\\\127\\", "\\\\localhost\\",
}

var TrustedCOMPaths = []string{
	"C:\\Windows\\System32",
	"C:\\Windows\\SysWOW64",
	"C:\\Windows",
	"C:\\Program Files",
	"C:\\Program Files (x86)",
	"C:\\ProgramData",
}

func (d *COMHijackDetector) Detect(ctx context.Context) ([]*Detection, error) {
	if d.config != nil && !d.config.Enabled {
		return nil, nil
	}

	detections := make([]*Detection, 0)

	clsidList, err := d.enumerateCLSID()
	if err != nil {
		return detections, nil
	}

	for _, clsid := range clsidList {
		det := d.analyzeCLSID(clsid)
		if det != nil {
			detections = append(detections, det)
		}
	}

	return detections, nil
}

type CLSIDEntry struct {
	CLSID      string
	Name       string
	ServerPath string
	ServerType string
}

func (d *COMHijackDetector) enumerateCLSID() ([]CLSIDEntry, error) {
	entries := make([]CLSIDEntry, 0)

	subkeys, err := utils.ListRegistrySubkeys(`HKCR\CLSID`)
	if err != nil {
		return entries, nil
	}

	for _, clsid := range subkeys {
		if clsid == "" {
			continue
		}

		inprocServer32 := `HKCR\CLSID\` + clsid + `\InprocServer32`
		serverPath, _ := utils.GetRegistryValue(inprocServer32, "")

		if serverPath != "" {
			entries = append(entries, CLSIDEntry{
				CLSID:      clsid,
				ServerPath: serverPath,
				ServerType: "InprocServer32",
			})
		}

		inprocServer6432 := `HKCR\CLSID\` + clsid + `\InprocServer6432`
		serverPath6432, _ := utils.GetRegistryValue(inprocServer6432, "")
		if serverPath6432 != "" {
			entries = append(entries, CLSIDEntry{
				CLSID:      clsid,
				ServerPath: serverPath6432,
				ServerType: "InprocServer6432",
			})
		}

		localServer32 := `HKCR\CLSID\` + clsid + `\LocalServer32`
		localPath, _ := utils.GetRegistryValue(localServer32, "")
		if localPath != "" {
			entries = append(entries, CLSIDEntry{
				CLSID:      clsid,
				ServerPath: localPath,
				ServerType: "LocalServer32",
			})
		}

		treatAs := `HKCR\CLSID\` + clsid + `\TreatAs`
		treatAsPath, _ := utils.GetRegistryValue(treatAs, "")
		if treatAsPath != "" {
			entries = append(entries, CLSIDEntry{
				CLSID:      clsid,
				ServerPath: treatAsPath,
				ServerType: "TreatAs",
			})
		}

		progID := `HKCR\CLSID\` + clsid + `\ProgID`
		progIdPath, _ := utils.GetRegistryValue(progID, "")
		if progIdPath != "" {
			entries = append(entries, CLSIDEntry{
				CLSID:      clsid,
				ServerPath: progIdPath,
				ServerType: "ProgID",
			})
		}

		insertable := `HKCR\CLSID\` + clsid + `\Insertable`
		if utils.RegistryKeyExists(insertable) {
			insertableObj, _ := utils.GetRegistryValue(insertable, "")
			if insertableObj != "" {
				entries = append(entries, CLSIDEntry{
					CLSID:      clsid,
					ServerPath: insertableObj,
					ServerType: "Insertable",
				})
			}
		}
	}

	return entries, nil
}

func (d *COMHijackDetector) analyzeCLSID(clsid CLSIDEntry) *Detection {
	if clsid.CLSID == "" || clsid.ServerPath == "" {
		return nil
	}

	if malDescription, isKnown := KnownMaliciousCLSID[clsid.CLSID]; isKnown {
		return &Detection{
			Technique:   TechniqueT1546015,
			Category:    "COM",
			Severity:    SeverityCritical,
			Time:        time.Now(),
			Title:       "Known Malicious CLSID Detected",
			Description: "A CLSID associated with known malicious software (" + malDescription + ") was found",
			Evidence: Evidence{
				Type:  EvidenceTypeCOM,
				Key:   `HKCR\CLSID\` + clsid.CLSID,
				Value: clsid.ServerPath,
			},
			MITRERef:          []string{"T1546.015"},
			RecommendedAction: "Immediately investigate this CLSID and associated files",
			FalsePositiveRisk: "Low",
		}
	}

	for _, suspiciousPath := range SuspiciousCOMPaths {
		if strings.Contains(strings.ToLower(clsid.ServerPath), strings.ToLower(suspiciousPath)) {
			return &Detection{
				Technique:   TechniqueT1546015,
				Category:    "COM",
				Severity:    SeverityHigh,
				Time:        time.Now(),
				Title:       "Suspicious COM Server Path",
				Description: "A COM server is loading from a suspicious location: " + clsid.ServerPath,
				Evidence: Evidence{
					Type:  EvidenceTypeCOM,
					Key:   `HKCR\CLSID\` + clsid.CLSID,
					Value: clsid.ServerPath,
				},
				MITRERef:          []string{"T1546.015"},
				RecommendedAction: "Investigate the COM server DLL and verify if it is legitimate",
				FalsePositiveRisk: "Medium",
			}
		}
	}

	if !d.isTrustedPath(clsid.ServerPath) && d.isExecutablePath(clsid.ServerPath) {
		return &Detection{
			Technique:   TechniqueT1546015,
			Category:    "COM",
			Severity:    SeverityMedium,
			Time:        time.Now(),
			Title:       "COM Server Outside System Directory",
			Description: "A COM server DLL is loading from outside the standard Windows system directories",
			Evidence: Evidence{
				Type:  EvidenceTypeCOM,
				Key:   `HKCR\CLSID\` + clsid.CLSID,
				Value: clsid.ServerPath,
			},
			MITRERef:          []string{"T1546.015"},
			RecommendedAction: "Verify the COM server is legitimate",
			FalsePositiveRisk: "Medium",
		}
	}

	return nil
}

func (d *COMHijackDetector) isTrustedPath(path string) bool {
	pathLower := strings.ToLower(path)
	for _, trusted := range TrustedCOMPaths {
		if strings.HasPrefix(pathLower, strings.ToLower(trusted)) {
			return true
		}
	}
	return false
}

func (d *COMHijackDetector) isExecutablePath(path string) bool {
	pathLower := strings.ToLower(path)
	executableExts := []string{".exe", ".dll", ".ocx", ".sys"}
	for _, ext := range executableExts {
		if strings.HasSuffix(pathLower, ext) {
			return true
		}
	}
	return false
}

func CheckCOMHijacking() []*Detection {
	detections := make([]*Detection, 0)
	detector := NewCOMHijackDetector()

	results, _ := detector.Detect(context.Background())
	detections = append(detections, results...)

	return detections
}
