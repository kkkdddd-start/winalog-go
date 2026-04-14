//go:build windows
// +build windows

package utils

import (
	"os"
	"runtime"
	"unsafe"

	"golang.org/x/sys/windows"
)

func GetComputerName() (string, error) {
	var name [windows.MAX_COMPUTERNAME_LENGTH + 1]uint16
	size := uint32(len(name))

	err := windows.GetComputerName(&name[0], &size)
	if err != nil {
		return "", err
	}

	return windows.UTF16ToString(name[:size]), nil
}

func IsAdmin() bool {
	return isAdminImpl()
}

func isAdminImpl() bool {
	if runtime.GOOS != "windows" {
		return false
	}

	var token windows.Token
	err := windows.OpenProcessToken(windows.GetCurrentProcess(), windows.TOKEN_QUERY, &token)
	if err != nil {
		return false
	}
	defer token.Close()

	var elevation windows.TOKEN_ELEVATION
	var returnedLen uint32
	err = windows.GetTokenInformation(token, windows.TokenElevation, (*byte)(unsafe.Pointer(&elevation)), uint32(unsafe.Sizeof(elevation)), &returnedLen)
	if err != nil {
		return false
	}

	return elevation.Elevated != 0
}

func IsWindows() bool {
	return runtime.GOOS == "windows"
}

func GetHostname() (string, error) {
	if runtime.GOOS == "windows" {
		return GetComputerName()
	}
	return os.Hostname()
}

func GetDomain() string {
	if runtime.GOOS != "windows" {
		return ""
	}

	var domain [windows.MAX_PATH]uint16
	var size uint32 = windows.MAX_PATH

	err := windows.GetComputerNameEx(windows.NameUnknown, &domain[0], &size)
	if err != nil {
		return ""
	}

	return windows.UTF16ToString(domain[:size])
}

func GetUserName() (string, error) {
	var name [windows.UNLEN + 1]uint16
	size := uint32(len(name))

	err := windows.GetUserName(&name[0], &size)
	if err != nil {
		return "", err
	}

	return windows.UTF16ToString(name[:size-1]), nil
}

func GetEnvironmentVariable(name string) string {
	if runtime.GOOS != "windows" {
		return os.Getenv(name)
	}

	var value [windows.MAX_PATH]uint16
	var size uint32 = windows.MAX_PATH

	err := windows.GetEnvironmentVariable(&windows.StringToUTF16(name)[0], &value[0], size)
	if err != nil {
		return ""
	}

	return windows.UTF16ToString(value[:size])
}

func SetEnvironmentVariable(name, value string) error {
	if runtime.GOOS != "windows" {
		return os.Setenv(name, value)
	}

	name16 := windows.StringToUTF16Ptr(name)
	value16 := windows.StringToUTF16Ptr(value)

	return windows.SetEnvironmentVariable(name16, value16)
}

func GetLastError() (int, string) {
	if runtime.GOOS != "windows" {
		return 0, ""
	}

	err := windows.GetLastError()
	return int(err), err.Error()
}

type WindowsVersion struct {
	Major      uint32
	Minor      uint32
	Build      uint32
	Platform   uint32
	CSDVersion string
}

func GetWindowsVersion() (*WindowsVersion, error) {
	if runtime.GOOS != "windows" {
		return nil, nil
	}

	var osinfo windows.OSVERSIONINFOEXW
	osinfo.OSVersionInfoSize = uint32(unsafe.Sizeof(osinfo))

	err := windows.GetVersionEx(&osinfo)
	if err != nil {
		return nil, err
	}

	return &WindowsVersion{
		Major:      osinfo.MajorVersion,
		Minor:      osinfo.MinorVersion,
		Build:      osinfo.BuildNumber,
		Platform:   osinfo.PlatformId,
		CSDVersion: windows.UTF16ToString((*[128]uint16)(unsafe.Pointer(&osinfo.CSDVersion))[:]),
	}, nil
}

func GetProcessToken(pid uint32) (windows.Token, error) {
	if runtime.GOOS != "windows" {
		return 0, nil
	}

	handle, err := windows.OpenProcess(windows.PROCESS_QUERY_INFORMATION, false, pid)
	if err != nil {
		return 0, err
	}
	defer windows.CloseHandle(handle)

	var token windows.Token
	err = windows.OpenProcessToken(handle, windows.TOKEN_QUERY, &token)
	if err != nil {
		return 0, err
	}

	return token, nil
}
