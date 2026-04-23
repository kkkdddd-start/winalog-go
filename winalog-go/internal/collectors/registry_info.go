//go:build windows

package collectors

import (
	"context"
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type RegistryInfoCollector struct {
	BaseCollector
}

type RegistryKey struct {
	Path  string
	Name  string
	Type  string
	Value string
}

func NewRegistryInfoCollector() *RegistryInfoCollector {
	return &RegistryInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "registry_info",
				Description:   "Collect registry persistence information",
				RequiresAdmin: true,
				Version:       "1.0.0",
			},
		},
	}
}

func (c *RegistryInfoCollector) Collect(ctx context.Context) ([]interface{}, error) {
	entries, err := c.collectRegistryInfo()
	if err != nil {
		return nil, err
	}
	interfaces := make([]interface{}, len(entries))
	for i, e := range entries {
		interfaces[i] = e
	}
	return interfaces, nil
}

func (c *RegistryInfoCollector) collectRegistryInfo() ([]*types.RegistryPersistence, error) {
	runKeys := c.collectRunKeys()
	userInit := c.collectUserInitKeys()
	taskScheduler := c.collectScheduledTaskKeys()
	services := c.collectServices()
	ifeo := c.collectIFEO()
	appInitDLLs := c.collectAppInitDLLs()
	knownDLLs := c.collectKnownDLLs()
	bootExecute := c.collectBootExecute()
	appCertDLLs := c.collectAppCertDlls()
	lsaSettings := c.collectLSASettings()
	shellExts := c.collectShellExtensions()
	browserHelpers := c.collectBrowserHelpers()
	startupFolders := c.collectStartupFolders()

	total := len(runKeys) + len(userInit) + len(taskScheduler) + len(services) +
		len(ifeo) + len(appInitDLLs) + len(knownDLLs) + len(bootExecute) +
		len(appCertDLLs) + len(lsaSettings) + len(shellExts) + len(browserHelpers) +
		len(startupFolders)

	log.Printf("[INFO] [REGISTRY] collectRegistryInfo: total=%d, runkeys=%d, userinit=%d, tasks=%d, services=%d, ifeo=%d, appinit=%d, known=%d, boot=%d, appcert=%d, lsa=%d, shellext=%d, browser=%d, startup=%d",
		total, len(runKeys), len(userInit), len(taskScheduler), len(services),
		len(ifeo), len(appInitDLLs), len(knownDLLs), len(bootExecute),
		len(appCertDLLs), len(lsaSettings), len(shellExts), len(browserHelpers),
		len(startupFolders))

	entry := &types.RegistryPersistence{
		RunKeys:          runKeys,
		UserInit:         userInit,
		TaskScheduler:    taskScheduler,
		Services:         services,
		IFEO:             ifeo,
		AppInitDLLs:      appInitDLLs,
		KnownDLLs:        knownDLLs,
		BootExecute:      bootExecute,
		AppCertDlls:      appCertDLLs,
		LSASSettings:     lsaSettings,
		ShellExtensions:  shellExts,
		BrowserHelpers:   browserHelpers,
		StartupFolders:   startupFolders,
	}

	return []*types.RegistryPersistence{entry}, nil
}

func (c *RegistryInfoCollector) collectRunKeys() []*types.RegistryInfo {
	runKeyPaths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`,
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce`,
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnceEx`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnceEx`,
		`HKLM\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Run`,
		`HKLM\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\RunOnce`,
		`HKCU\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Run`,
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServices`,
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServicesOnce`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServices`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServicesOnce`,
	}

	return c.collectRegistryValues(runKeyPaths, "RunKeys")
}

func (c *RegistryInfoCollector) collectRegistryValues(paths []string, source string) []*types.RegistryInfo {
	items := make([]*types.RegistryInfo, 0)

	for _, keyPath := range paths {
		if !utils.RegistryKeyExists(keyPath) {
			continue
		}

		values, err := utils.ListRegistryValues(keyPath)
		if err != nil {
			log.Printf("[WARN] [REGISTRY] ListRegistryValues failed for %s: %v", keyPath, err)
			continue
		}

		for _, valueName := range values {
			value, err := utils.GetRegistryValue(keyPath, valueName)
			if err != nil || value == "" {
				continue
			}

			info := &types.RegistryInfo{
				Path:   keyPath,
				Name:   valueName,
				Value:  value,
				Type:   "REG_SZ",
				Source: source,
			}

			items = append(items, info)
		}
	}

	return items
}

func (c *RegistryInfoCollector) collectUserInitKeys() []*types.RegistryInfo {
	paths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Userinit`,
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Shell`,
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify`,
		`HKCU\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Userinit`,
		`HKCU\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Shell`,
		`HKCU\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify`,
	}

	userInitKeys := make([]*types.RegistryInfo, 0)

	for _, keyPath := range paths {
		if !utils.RegistryKeyExists(keyPath) {
			continue
		}

		value, _ := utils.GetRegistryValue(keyPath, "")
		if value != "" {
			name := keyPath[strings.LastIndex(keyPath, "\\")+1:]
			userInitKeys = append(userInitKeys, &types.RegistryInfo{
				Path:   keyPath,
				Name:   name,
				Type:   "REG_SZ",
				Value:  value,
				Source: "UserInit",
			})
		}
	}

	return userInitKeys
}

func (c *RegistryInfoCollector) collectScheduledTaskKeys() []*types.RegistryInfo {
	tasksPaths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tasks`,
		`HKCU\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tasks`,
	}
	treePaths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tree`,
		`HKCU\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tree`,
	}

	items := make([]*types.RegistryInfo, 0)

	for _, basePath := range tasksPaths {
		if !utils.RegistryKeyExists(basePath) {
			continue
		}

		subkeys, _ := utils.ListRegistrySubkeys(basePath)
		for _, guid := range subkeys {
			fullPath := basePath + "\\" + guid
			if !utils.RegistryKeyExists(fullPath) {
				continue
			}

			taskPath, _ := utils.GetRegistryValue(fullPath, "Path")
			state, _ := utils.GetRegistryValue(fullPath, "State")
			author, _ := utils.GetRegistryValue(fullPath, "Author")
			description, _ := utils.GetRegistryValue(fullPath, "Description")

			info := &types.RegistryInfo{
				Path:        fullPath,
				Name:        guid,
				DisplayName: taskPath,
				Value:       state,
				Description: description,
				Source:      "TaskScheduler",
			}

			if author != "" {
				info.Type = author
			}
			if taskPath != "" {
				items = append(items, info)
			}
		}
	}

	for _, treePath := range treePaths {
		if !utils.RegistryKeyExists(treePath) {
			continue
		}

		subkeys, _ := utils.ListRegistrySubkeys(treePath)
		for _, taskName := range subkeys {
			fullPath := treePath + "\\" + taskName
			value, _ := utils.GetRegistryValue(fullPath, "")

			info := &types.RegistryInfo{
				Path:   fullPath,
				Name:   taskName,
				Value:  value,
				Source: "TaskScheduler",
			}

			if value != "" {
				items = append(items, info)
			}
		}
	}

	return items
}

func (c *RegistryInfoCollector) collectServices() []*types.RegistryInfo {
	servicePaths := []string{
		`HKLM\SYSTEM\CurrentControlSet\Services`,
		`HKLM\SYSTEM\CurrentControlSet\Control\ServiceGroupOrder`,
	}

	services := make([]*types.RegistryInfo, 0)

	for _, basePath := range servicePaths {
		if !utils.RegistryKeyExists(basePath) {
			continue
		}

		subkeys, _ := utils.ListRegistrySubkeys(basePath)
		for _, subkey := range subkeys {
			fullPath := basePath + "\\" + subkey

			imagePath, _ := utils.GetRegistryValue(fullPath, "ImagePath")
			displayName, _ := utils.GetRegistryValue(fullPath, "DisplayName")
			description, _ := utils.GetRegistryValue(fullPath, "Description")
			startType, _ := utils.GetRegistryValue(fullPath, "Start")
			serviceType, _ := utils.GetRegistryValue(fullPath, "Type")

			if imagePath == "" && displayName == "" {
				continue
			}

			info := &types.RegistryInfo{
				Path:        fullPath,
				Name:        subkey,
				DisplayName: displayName,
				ImagePath:   imagePath,
				Description: description,
				StartType:   startType,
				ServiceType: serviceType,
				Source:      "Services",
			}

			if imagePath != "" {
				info.Type = "Service"
			}

			services = append(services, info)
		}
	}

	return services
}

func (c *RegistryInfoCollector) collectIFEO() []*types.RegistryInfo {
	paths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options`,
		`HKLM\SOFTWARE\Wow6432Node\Microsoft\Windows NT\CurrentVersion\Image File Execution Options`,
		`HKCU\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options`,
	}

	ifeo := make([]*types.RegistryInfo, 0)

	for _, basePath := range paths {
		if !utils.RegistryKeyExists(basePath) {
			continue
		}

		subkeys, _ := utils.ListRegistrySubkeys(basePath)
		for _, subkey := range subkeys {
			fullPath := basePath + "\\" + subkey

			if !utils.RegistryKeyExists(fullPath) {
				continue
			}

			debugger, _ := utils.GetRegistryValue(fullPath, "Debugger")
			globalFlag, _ := utils.GetRegistryValue(fullPath, "GlobalFlag")
			verifierDlls, _ := utils.GetRegistryValue(fullPath, "VerifierDlls")
			filterFullPath, _ := utils.GetRegistryValue(fullPath, "FilterFullPath")

			if debugger != "" {
				ifeo = append(ifeo, &types.RegistryInfo{
					Path:           fullPath,
					Name:           subkey,
					Debugger:       debugger,
					GlobalFlag:     globalFlag,
					VerifierDlls:    verifierDlls,
					FilterFullPath: filterFullPath,
					Type:           "IFEO",
					Value:          debugger,
					Source:         "IFEO",
				})
			} else if globalFlag != "" || verifierDlls != "" || filterFullPath != "" {
				ifeo = append(ifeo, &types.RegistryInfo{
					Path:           fullPath,
					Name:           subkey,
					Debugger:       debugger,
					GlobalFlag:     globalFlag,
					VerifierDlls:    verifierDlls,
					FilterFullPath: filterFullPath,
					Type:           "IFEO",
					Value:          globalFlag,
					Source:         "IFEO",
				})
			}
		}
	}

	return ifeo
}

func (c *RegistryInfoCollector) collectAppInitDLLs() []*types.RegistryInfo {
	paths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Windows`,
		`HKLM\SOFTWARE\Wow6432Node\Microsoft\Windows NT\CurrentVersion\Windows`,
		`HKCU\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Windows`,
	}

	appInit := make([]*types.RegistryInfo, 0)

	for _, keyPath := range paths {
		if !utils.RegistryKeyExists(keyPath) {
			continue
		}

		dllName, _ := utils.GetRegistryValue(keyPath, "AppInit_DLLs")
		loadAppInitDLLs, _ := utils.GetRegistryValue(keyPath, "LoadAppInit_DLLs")

		if dllName != "" || loadAppInitDLLs == "1" {
			info := &types.RegistryInfo{
				Path:     keyPath,
				Name:     "AppInit_DLLs",
				DllName:  dllName,
				Value:    loadAppInitDLLs,
				Source:   "AppInit",
			}

			if dllName != "" {
				info.Type = "AppInit"
			}

			appInit = append(appInit, info)
		}
	}

	return appInit
}

func (c *RegistryInfoCollector) collectKnownDLLs() []*types.RegistryInfo {
	paths := []string{
		`HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\KnownDLLs`,
		`HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\KnownDLLs32`,
	}

	return c.collectRegistryPaths(paths, "KnownDLLs")
}

func (c *RegistryInfoCollector) collectBootExecute() []*types.RegistryInfo {
	paths := []string{
		`HKLM\SYSTEM\CurrentControlSet\Control\Session Manager`,
		`HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Executive`,
		`HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Compatibility`,
	}

	bootExecute := make([]*types.RegistryInfo, 0)

	for _, keyPath := range paths {
		if !utils.RegistryKeyExists(keyPath) {
			continue
		}

		valueNames := []string{"BootExecute", "BootVerificationProgram", "GlobalFlag", "SetupExecute", "EarlyLaunch", "SafeBoot"}

		for _, valueName := range valueNames {
			value, err := utils.GetRegistryValue(keyPath, valueName)
			if err == nil && value != "" {
				bootExecute = append(bootExecute, &types.RegistryInfo{
					Path:   keyPath,
					Name:   valueName,
					Type:   "REG_MULTI_SZ",
					Value:  value,
					Source: "BootExecute",
				})
			}
		}
	}

	return bootExecute
}

func (c *RegistryInfoCollector) collectAppCertDlls() []*types.RegistryInfo {
	paths := []string{
		`HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\AppCertDlls`,
		`HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\AppCertDlls32`,
	}

	return c.collectRegistryPaths(paths, "AppCertDlls")
}

func (c *RegistryInfoCollector) collectLSASettings() []*types.RegistryInfo {
	paths := []string{
		`HKLM\SYSTEM\CurrentControlSet\Control\Lsa`,
		`HKLM\SYSTEM\CurrentControlSet\Control\Lsa\Authentication Packages`,
		`HKLM\SYSTEM\CurrentControlSet\Control\Lsa\Notification Packages`,
		`HKLM\SYSTEM\CurrentControlSet\Control\Lsa\Security Packages`,
		`HKLM\SYSTEM\CurrentControlSet\Control\Lsa\OSConfig`,
		`HKLM\SYSTEM\CurrentControlSet\Control\Lsa\Scope`,
	}

	lsaSettings := make([]*types.RegistryInfo, 0)

	for _, keyPath := range paths {
		if !utils.RegistryKeyExists(keyPath) {
			continue
		}

		valueNames, _ := utils.ListRegistryValues(keyPath)
		if len(valueNames) > 0 {
			for _, valueName := range valueNames {
				value, _ := utils.GetRegistryValue(keyPath, valueName)
				if value != "" {
					lsaSettings = append(lsaSettings, &types.RegistryInfo{
						Path:   keyPath,
						Name:   valueName,
						Type:   "REG_SZ",
						Value:  value,
						Source: "LSA",
					})
				}
			}
		} else {
			defaultValue, _ := utils.GetRegistryValue(keyPath, "")
			if defaultValue != "" {
				name := keyPath[strings.LastIndex(keyPath, "\\")+1:]
				lsaSettings = append(lsaSettings, &types.RegistryInfo{
					Path:   keyPath,
					Name:   name,
					Type:   "REG_SZ",
					Value:  defaultValue,
					Source: "LSA",
				})
			}
		}
	}

	return lsaSettings
}

func (c *RegistryInfoCollector) collectShellExtensions() []*types.RegistryInfo {
	shellExtPaths := []string{
		`HKLM\SOFTWARE\Classes\*\shellex\ContextMenuHandlers`,
		`HKLM\SOFTWARE\Classes\Directory\shellex\ContextMenuHandlers`,
		`HKLM\SOFTWARE\Classes\Directory\Background\SHELLEX\ContextMenuHandlers`,
		`HKLM\SOFTWARE\Classes\Folder\Shellex\ColumnHandler`,
		`HKLM\SOFTWARE\Classes\Folder\Shellex\ContextMenuHandlers`,
		`HKLM\SOFTWARE\Classes\AllFilesystemObjects\Shellex\ContextMenuHandlers`,
		`HKCU\SOFTWARE\Classes\*\shellex\ContextMenuHandlers`,
		`HKCU\SOFTWARE\Classes\Directory\shellex\ContextMenuHandlers`,
		`HKCU\SOFTWARE\Classes\Directory\Background\SHELLEX\ContextMenuHandlers`,
	}
	approvedPaths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\Approved`,
	}

	shellExts := make([]*types.RegistryInfo, 0)

	for _, basePath := range shellExtPaths {
		if !utils.RegistryKeyExists(basePath) {
			continue
		}

		subkeys, _ := utils.ListRegistrySubkeys(basePath)
		for _, clsid := range subkeys {
			fullPath := basePath + "\\" + clsid
			value, _ := utils.GetRegistryValue(fullPath, "")

			info := &types.RegistryInfo{
				Path:   fullPath,
				Name:   clsid,
				Value:  value,
				Source: "ShellExtensions",
			}

			if value != "" {
				info.Type = "ShellExt"
				shellExts = append(shellExts, info)
			}
		}
	}

	for _, approvedPath := range approvedPaths {
		if !utils.RegistryKeyExists(approvedPath) {
			continue
		}

		subkeys, _ := utils.ListRegistrySubkeys(approvedPath)
		for _, name := range subkeys {
			fullPath := approvedPath + "\\" + name
			value, _ := utils.GetRegistryValue(fullPath, "")

			info := &types.RegistryInfo{
				Path:        fullPath,
				Name:        name,
				Value:       value,
				Description: "Approved Shell Extension",
				Source:      "ShellExtensions",
			}

			if value != "" {
				info.Type = "ApprovedExt"
				shellExts = append(shellExts, info)
			}
		}
	}

	return shellExts
}

func (c *RegistryInfoCollector) collectBrowserHelpers() []*types.RegistryInfo {
	paths := []string{
		`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Browser Helper Objects`,
		`HKLM\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\Browser Helper Objects`,
		`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Browser Helper Objects`,
	}

	browserHelpers := make([]*types.RegistryInfo, 0)

	for _, basePath := range paths {
		if !utils.RegistryKeyExists(basePath) {
			continue
		}

		subkeys, _ := utils.ListRegistrySubkeys(basePath)
		for _, subkey := range subkeys {
			fullPath := basePath + "\\" + subkey
			value, _ := utils.GetRegistryValue(fullPath, "")

			info := &types.RegistryInfo{
				Path:   fullPath,
				Name:   subkey,
				Value:  value,
				Source: "BrowserHelper",
			}

			if value != "" {
				info.Type = "BHO"
			}

			browserHelpers = append(browserHelpers, info)
		}
	}

	return browserHelpers
}

func (c *RegistryInfoCollector) collectRegistryPaths(paths []string, source string) []*types.RegistryInfo {
	items := make([]*types.RegistryInfo, 0)

	for _, keyPath := range paths {
		if !utils.RegistryKeyExists(keyPath) {
			continue
		}

		subkeys, _ := utils.ListRegistrySubkeys(keyPath)
		for _, subkey := range subkeys {
			fullPath := keyPath + "\\" + subkey
			value, err := utils.GetRegistryValue(keyPath, subkey)

			info := &types.RegistryInfo{
				Path:   fullPath,
				Name:   subkey,
				Source: source,
			}

			if err == nil && value != "" {
				info.Type = "REG_SZ"
				info.Value = value
			}

			items = append(items, info)
		}

		if len(subkeys) == 0 {
			value, _ := utils.GetRegistryValue(keyPath, "")
			if value != "" {
				name := keyPath[strings.LastIndex(keyPath, "\\")+1:]
				items = append(items, &types.RegistryInfo{
					Path:   keyPath,
					Name:   name,
					Type:   "REG_SZ",
					Value:  value,
					Source: source,
				})
			}
		}
	}

	return items
}

func ListRegistryKeys(path string) ([]RegistryKey, error) {
	keys := make([]RegistryKey, 0)

	subkeys, err := utils.ListRegistrySubkeys(path)
	if err != nil {
		return keys, err
	}

	for _, subkey := range subkeys {
		value, err := utils.GetRegistryValue(path, subkey)
		if err != nil {
			continue
		}

		keys = append(keys, RegistryKey{
			Path:  path + "\\" + subkey,
			Name:  subkey,
			Type:  "REG_SZ",
			Value: value,
		})
	}

	return keys, nil
}

func GetRegistryValue(keyPath, valueName string) (string, error) {
	return utils.GetRegistryValue(keyPath, valueName)
}

func RegistryKeyExists(path string) bool {
	return utils.RegistryKeyExists(path)
}

func (c *RegistryInfoCollector) collectStartupFolders() []*types.RegistryInfo {
	items := make([]*types.RegistryInfo, 0)

	programdata := os.Getenv("PROGRAMDATA")
	appdata := os.Getenv("APPDATA")

	folderPaths := []string{
		programdata + "\\Microsoft\\Windows\\Start Menu\\Programs\\Startup",
		appdata + "\\Microsoft\\Windows\\Start Menu\\Programs\\Startup",
	}

	executableExtensions := map[string]string{
		".exe": "Executable",
		".bat": "Batch Script",
		".cmd": "Command Script",
		".ps1": "PowerShell Script",
		".vbs": "VBScript",
		".js":  "JavaScript",
		".lnk": "Shortcut",
	}

	for _, folderPath := range folderPaths {
		if folderPath == "" {
			continue
		}

		files, err := os.ReadDir(folderPath)
		if err != nil {
			continue
		}

		for _, file := range files {
			if file.IsDir() {
				continue
			}

			fileNameLower := strings.ToLower(file.Name())
			description := "File"
			for ext, desc := range executableExtensions {
				if strings.HasSuffix(fileNameLower, ext) {
					description = desc
					break
				}
			}

			item := &types.RegistryInfo{
				Path:        folderPath,
				Name:        file.Name(),
				Value:       folderPath + "\\" + file.Name(),
				Type:        "StartupFolder",
				Source:      "StartupFolders",
				Description: description,
				Enabled:     true,
			}

			items = append(items, item)
		}
	}

	return items
}

func CollectRegistryPersistence(ctx context.Context) ([]*types.RegistryPersistence, error) {
	collector := NewRegistryInfoCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, fmt.Errorf("RegistryInfoCollector.Collect: %w", err)
	}

	entries := make([]*types.RegistryPersistence, 0, len(results))
	for _, r := range results {
		if e, ok := r.(*types.RegistryPersistence); ok {
			entries = append(entries, e)
		}
	}
	return entries, nil
}
