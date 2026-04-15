//go:build windows

package collectors

import (
	"context"
	"encoding/json"
	"strings"

	"github.com/kkkdddd-start/winalog-go/internal/forensics"
	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type DriverInfoCollector struct {
	BaseCollector
}

type Driver struct {
	Name        string
	DisplayName string
	Description string
	Path        string
	Status      string
}

func NewDriverInfoCollector() *DriverInfoCollector {
	return &DriverInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "driver_info",
				Description:   "Collect driver information",
				RequiresAdmin: true,
				Version:       "1.0.0",
			},
		},
	}
}

func (c *DriverInfoCollector) Collect(ctx context.Context) ([]interface{}, error) {
	drivers, err := c.collectDriverInfo()
	if err != nil {
		return nil, err
	}
	interfaces := make([]interface{}, len(drivers))
	for i, d := range drivers {
		interfaces[i] = d
	}
	return interfaces, nil
}

func (c *DriverInfoCollector) collectDriverInfo() ([]*types.DriverInfo, error) {
	drivers := make([]*types.DriverInfo, 0)

	driverList, err := ListDrivers()
	if err != nil {
		return drivers, err
	}

	for _, driver := range driverList {
		drivers = append(drivers, &types.DriverInfo{
			Name:        driver.Name,
			Description: driver.Description,
			Type:        "Kernel",
			Status:      driver.Status,
			Started:     driver.Status == "Running",
			FilePath:    driver.Path,
		})
	}

	return drivers, nil
}

func ListDrivers() ([]Driver, error) {
	drivers := make([]Driver, 0)

	cmd := `Get-WmiObject -Class Win32_SystemDriver | Select-Object Name,DisplayName,Description,PathName,State,StartMode | ForEach-Object { $_ | ConvertTo-Json -Compress }`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return drivers, result.Error
	}

	output := strings.TrimSpace(result.Output)
	if output == "" {
		return drivers, nil
	}

	lines := strings.Split(output, "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" {
			continue
		}

		var driverRaw struct {
			Name        string `json:"Name"`
			DisplayName string `json:"DisplayName"`
			Description string `json:"Description"`
			PathName    string `json:"PathName"`
			State       string `json:"State"`
			StartMode   string `json:"StartMode"`
		}

		if err := json.Unmarshal([]byte(line), &driverRaw); err != nil {
			continue
		}

		drivers = append(drivers, Driver{
			Name:        driverRaw.Name,
			DisplayName: driverRaw.DisplayName,
			Description: driverRaw.Description,
			Path:        driverRaw.PathName,
			Status:      driverRaw.State,
		})
	}

	return drivers, nil
}

func GetDriverInfo(driverName string) (*Driver, error) {
	cmd := `Get-WmiObject -Class Win32_SystemDriver -Filter "Name='%s'" | Select-Object Name,DisplayName,Description,PathName,State,StartMode | ConvertTo-Json -Compress`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return nil, result.Error
	}

	var driverRaw struct {
		Name        string `json:"Name"`
		DisplayName string `json:"DisplayName"`
		Description string `json:"Description"`
		PathName    string `json:"PathName"`
		State       string `json:"State"`
		StartMode   string `json:"StartMode"`
	}

	if err := json.Unmarshal([]byte(result.Output), &driverRaw); err != nil {
		return nil, err
	}

	return &Driver{
		Name:        driverRaw.Name,
		DisplayName: driverRaw.DisplayName,
		Description: driverRaw.Description,
		Path:        driverRaw.PathName,
		Status:      driverRaw.State,
	}, nil
}

func IsDriverLoaded(driverName string) bool {
	cmd := `(Get-WmiObject -Class Win32_SystemDriver -Filter "Name='%s'" -ErrorAction SilentlyContinue).State -eq 'Running'`

	result := utils.RunPowerShell(cmd)
	return result.Success() && strings.Contains(strings.ToLower(result.Output), "true")
}

func CollectDriverInfo(ctx context.Context) ([]*types.DriverInfo, error) {
	collector := NewDriverInfoCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	drivers := make([]*types.DriverInfo, 0, len(results))
	for _, r := range results {
		if d, ok := r.(*types.DriverInfo); ok {
			drivers = append(drivers, d)
		}
	}
	return drivers, nil
}

func GetDriverFileHash(driverPath string) (string, error) {
	result, err := forensics.CalculateFileHash(driverPath)
	if err != nil {
		return "", err
	}
	return result.SHA256, nil
}

func IsDriverSigned(driverPath string) (bool, string, error) {
	cmd := `(Get-AuthenticodeSignature '%s').Status`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return false, "", result.Error
	}

	signatureStatus := strings.TrimSpace(result.Output)
	isSigned := signatureStatus == "Valid"

	var signer string
	cmd2 := `(Get-AuthenticodeSignature '%s').SignerCertificate.Subject`

	result2 := utils.RunPowerShell(cmd2)
	if result2.Success() {
		signer = strings.TrimSpace(result2.Output)
	}

	return isSigned, signer, nil
}

func GetDriverCompanyName(driverPath string) string {
	cmd := `(Get-AuthenticodeSignature '%s').SignerCertificate.Corporation`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		return strings.TrimSpace(result.Output)
	}

	return ""
}

func GetDriverDescription(driverPath string) string {
	cmd := `(Get-Item '%s').VersionInfo.FileDescription`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		return strings.TrimSpace(result.Output)
	}

	return ""
}

func IsDriverLoadedAtBoot(driverName string) bool {
	cmd := `(Get-WmiObject -Class Win32_SystemDriver -Filter "Name='%s'" -ErrorAction SilentlyContinue).StartMode -eq 'Boot'`

	result := utils.RunPowerShell(cmd)
	return result.Success() && strings.Contains(strings.ToLower(result.Output), "true")
}

func GetDriverDependancies(driverName string) ([]string, error) {
	cmd := `(Get-WmiObject -Class Win32_SystemDriver -Filter "Name='%s'" -ErrorAction SilentlyContinue).DependentServices | ConvertTo-Json -Compress`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return []string{}, nil
	}

	var services []struct {
		Name string `json:"Name"`
	}

	if err := json.Unmarshal([]byte(result.Output), &services); err != nil {
		return []string{}, nil
	}

	dependancies := make([]string, 0, len(services))
	for _, s := range services {
		dependancies = append(dependancies, s.Name)
	}

	return dependancies, nil
}

func GetDriverServiceType(driverName string) string {
	cmd := `(Get-WmiObject -Class Win32_SystemDriver -Filter "Name='%s'" -ErrorAction SilentlyContinue).ServiceType`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		return strings.TrimSpace(result.Output)
	}

	return ""
}

func GetDriverStartType(driverName string) string {
	cmd := `(Get-WmiObject -Class Win32_SystemDriver -Filter "Name='%s'" -ErrorAction SilentlyContinue).StartMode`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		return strings.TrimSpace(result.Output)
	}

	return ""
}

func GetDriverProcessID(driverName string) int {
	cmd := `(Get-WmiObject -Class Win32_SystemDriver -Filter "Name='%s'" -ErrorAction SilentlyContinue).ProcessId`

	result := utils.RunPowerShell(cmd)
	if result.Success() {
		if pid, err := parseInt(strings.TrimSpace(result.Output)); err == nil {
			return pid
		}
	}

	return 0
}

func parseInt(s string) (int, error) {
	var n int
	for _, c := range s {
		if c < '0' || c > '9' {
			return 0, nil
		}
		n = n*10 + int(c-'0')
	}
	return n, nil
}
