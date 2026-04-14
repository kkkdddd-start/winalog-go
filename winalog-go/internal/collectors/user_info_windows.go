//go:build windows
// +build windows

package collectors

import (
	"context"
	"fmt"
	"time"
	"unsafe"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"golang.org/x/sys/windows"
)

func (c *UserInfoCollector) collectUserInfo() ([]*types.UserAccount, error) {
	users := make([]*types.UserAccount, 0)

	var buffer *byte
	var bufferSize uint32 = 0

	err := windows.NetUserEnum(nil, 0, windows.FILTER_NORMAL_ACCOUNT, &buffer, windows.MAX_PREFERRED_LENGTH, &bufferSize, nil, nil)
	if err != nil && err != windows.ERROR_MORE_DATA {
		return nil, err
	}
	defer windows.NetApiBufferFree(buffer)

	if bufferSize == 0 {
		return users, nil
	}

	var totalEntries uint32
	err = windows.NetUserEnum(nil, 0, windows.FILTER_NORMAL_ACCOUNT, &buffer, bufferSize, &bufferSize, &totalEntries, nil)
	if err != nil {
		return nil, err
	}
	defer windows.NetApiBufferFree(buffer)

	offset := uintptr(unsafe.Pointer(buffer))
	for i := uint32(0); i < totalEntries; i++ {
		user := (*windows.USER_INFO_0)(unsafe.Pointer(offset))

		userInfo := getUserInfoByName(windows.UTF16ToString((*[windows.NMAX_PATH]uint16)(unsafe.Pointer(user.Name))[:]))

		users = append(users, userInfo)
		offset += unsafe.Sizeof(user)
	}

	return users, nil
}

func getUserInfoByName(username string) *types.UserAccount {
	var userInfoPtr *windows.USER_INFO_10
	err := windows.NetUserGetInfo(nil, windows.StringToUTF16Ptr(username), 10, &userInfoPtr)
	if err != nil {
		return &types.UserAccount{
			Name: username,
			Type: "User",
			SID:  "S-1-0-0",
		}
	}
	defer windows.NetApiBufferFree((*byte)(unsafe.Pointer(userInfoPtr)))

	usr := &types.UserAccount{
		Name:     windows.UTF16ToString((*[windows.NMAX_PATH]uint16)(unsafe.Pointer(userInfoPtr.Name))[:]),
		FullName: windows.UTF16ToString((*[windows.NMAX_PATH]uint16)(unsafe.Pointer(userInfoPtr.FullName))[:]),
		Domain:   windows.UTF16ToString((*[windows.NMAX_PATH]uint16)(unsafe.Pointer(userInfoPtr.Domain))[:]),
		Comment:  windows.UTF16ToString((*[windows.NMAX_PATH]uint16)(unsafe.Pointer(userInfoPtr.Comment))[:]),
	}

	var ui4 *windows.USER_INFO_4
	err = windows.NetUserGetInfo(nil, windows.StringToUTF16Ptr(username), 4, &ui4)
	if err == nil {
		defer windows.NetApiBufferFree((*byte)(unsafe.Pointer(ui4)))

		usr.SID = getSIDFromUserInfo(ui4)
		usr.Flags = ui4.Flags
		usr.Privilege = ui4.Privilege

		if ui4.LastLogon.Nsec != 0 {
			usr.LastLogin = time.Date(1601, 1, 1, 0, 0, 0, 0, time.UTC).
				Add(time.Duration(ui4.LastLogon.Nsec) * time.Nanosecond)
		}
	}

	if usr.SID == "" {
		usr.SID = "S-1-0-0"
	}

	if usr.Type == "" {
		usr.Type = "User"
	}

	return usr
}

func getSIDFromUserInfo(ui4 *windows.USER_INFO_4) string {
	var sid *windows.SID
	domain, _, _, err := ui4.UserSid.LookupAccount("")
	if err != nil {
		return ""
	}

	sid, _, err = windows.AllocateAndInitializeSid(windows.SECURITY_NT_AUTHORITY, 1, 0, 0, 0, 0, 0, 0, 0, 0)
	if err != nil {
		return ""
	}
	defer windows.FreeSid(sid)

	return fmt.Sprintf("S-1-%d-%s", sid.SubAuthority[0], domain)
}

type LocalUser struct {
	Name       string
	SID        string
	Comment    string
	HomeDir    string
	Shell      string
	LastLogon  time.Time
	MaxStorage int
	Units      int
	AuthFlags  int
}

func ListLocalUsers() ([]LocalUser, error) {
	var buffer *byte
	var bufferSize uint32 = 0

	err := windows.NetUserEnum(nil, 0, windows.FILTER_NORMAL_ACCOUNT, &buffer, windows.MAX_PREFERRED_LENGTH, &bufferSize, nil, nil)
	if err != nil && err != windows.ERROR_MORE_DATA {
		return nil, err
	}
	defer windows.NetApiBufferFree(buffer)

	var totalEntries uint32
	err = windows.NetUserEnum(nil, 0, windows.FILTER_NORMAL_ACCOUNT, &buffer, bufferSize, &bufferSize, &totalEntries, nil)
	if err != nil {
		return nil, err
	}

	users := make([]LocalUser, 0, totalEntries)
	offset := uintptr(unsafe.Pointer(buffer))
	for i := uint32(0); i < totalEntries; i++ {
		user := (*windows.USER_INFO_0)(unsafe.Pointer(offset))
		users = append(users, LocalUser{
			Name: windows.UTF16ToString((*[windows.NMAX_PATH]uint16)(unsafe.Pointer(user.Name))[:]),
		})
		offset += unsafe.Sizeof(user)
	}

	return users, nil
}

func GetUserInfo(username string) (*LocalUser, error) {
	var ui10 *windows.USER_INFO_10
	err := windows.NetUserGetInfo(nil, windows.StringToUTF16Ptr(username), 10, &ui10)
	if err != nil {
		return nil, err
	}
	defer windows.NetApiBufferFree((*byte)(unsafe.Pointer(ui10)))

	return &LocalUser{
		Name:    windows.UTF16ToString((*[windows.NMAX_PATH]uint16)(unsafe.Pointer(ui10.Name))[:]),
		Comment: windows.UTF16ToString((*[windows.NMAX_PATH]uint16)(unsafe.Pointer(ui10.Comment))[:]),
	}, nil
}

func IsUserAdmin(username string) bool {
	sid, _, _, err := windows.LookupAccount("", username)
	if err != nil {
		return false
	}

	for _, adminSid := range []string{"S-1-5-32-544", "S-1-5-32-545"} {
		if strings.HasPrefix(sid.String(), adminSid) {
			return true
		}
	}

	return false
}

func GetUserSID(username string) (string, error) {
	sid, domain, _, err := windows.LookupAccount("", username)
	if err != nil {
		return "", err
	}
	return domain + "\\" + sid.String(), nil
}

func GetUserGroups(username string) ([]string, error) {
	var buffer *byte
	var bufferSize uint32 = 0

	err := windows.NetUserGetGroups(nil, windows.StringToUTF16Ptr(username), 0, &buffer, windows.MAX_PREFERRED_LENGTH, &bufferSize, nil)
	if err != nil && err != windows.ERROR_MORE_DATA {
		return nil, err
	}
	defer windows.NetApiBufferFree(buffer)

	var totalEntries uint32
	err = windows.NetUserGetGroups(nil, windows.StringToUTF16Ptr(username), 0, &buffer, bufferSize, &bufferSize, &totalEntries)
	if err != nil {
		return nil, err
	}

	groups := make([]string, 0, totalEntries)
	offset := uintptr(unsafe.Pointer(buffer))
	for i := uint32(0); i < totalEntries; i++ {
		group := (*windows.GROUP_USERS_INFO_0)(unsafe.Pointer(offset))
		groups = append(groups, windows.UTF16ToString((*[windows.NMAX_PATH]uint16)(unsafe.Pointer(group.Name))[:]))
		offset += unsafe.Sizeof(group)
	}

	return groups, nil
}
