package persistence

import (
	"context"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type COMHijackDetector struct{}

func NewCOMHijackDetector() *COMHijackDetector {
	return &COMHijackDetector{}
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
