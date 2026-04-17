//go:build windows

package collectors

import (
	"context"
	"encoding/json"
	"strings"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
	"github.com/kkkdddd-start/winalog-go/internal/utils"
)

type UserInfoCollector struct {
	BaseCollector
}

func NewUserInfoCollector() *UserInfoCollector {
	return &UserInfoCollector{
		BaseCollector: BaseCollector{
			info: CollectorInfo{
				Name:          "user_info",
				Description:   "Collect user account information",
				RequiresAdmin: true,
				Version:       "1.0.0",
			},
		},
	}
}

func (c *UserInfoCollector) Collect(ctx context.Context) ([]interface{}, error) {
	users, err := c.collectUserInfo()
	if err != nil {
		return nil, err
	}
	interfaces := make([]interface{}, len(users))
	for i, u := range users {
		interfaces[i] = u
	}
	return interfaces, nil
}

func (c *UserInfoCollector) collectUserInfo() ([]*types.UserAccount, error) {
	users := make([]*types.UserAccount, 0)

	cmd := `Get-LocalUser | Select-Object Name, SID, Enabled, LastLogon, PasswordRequired, PasswordAge, PasswordExpires, FullName, Description, HomeDirectory, ProfilePath | ForEach-Object { $_ | ConvertTo-Json -Compress }`

	result := utils.RunPowerShell(cmd)
	if !result.Success() {
		return users, result.Error
	}

	output := strings.TrimSpace(result.Output)
	if output == "" || output == "null" {
		return users, nil
	}

	lines := strings.Split(output, "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" || line == "null" {
			continue
		}

		var userRaw struct {
			Name             string `json:"Name"`
			SID              string `json:"SID"`
			Enabled          bool   `json:"Enabled"`
			LastLogon        string `json:"LastLogon"`
			PasswordRequired bool   `json:"PasswordRequired"`
			PasswordAge      int64  `json:"PasswordAge"`
			PasswordExpires  string `json:"PasswordExpires"`
			FullName         string `json:"FullName"`
			Description      string `json:"Description"`
			HomeDirectory    string `json:"HomeDirectory"`
			ProfilePath      string `json:"ProfilePath"`
		}

		if err := json.Unmarshal([]byte(line), &userRaw); err != nil {
			continue
		}

		user := &types.UserAccount{
			Name:        userRaw.Name,
			SID:         userRaw.SID,
			Enabled:     userRaw.Enabled,
			Type:        "Local",
			LastLogin:   parseLastLogon(userRaw.LastLogon),
			PasswordExp: userRaw.PasswordExpires != "" && userRaw.PasswordExpires != "Never",
			HomeDir:     userRaw.HomeDirectory,
			ProfilePath: userRaw.ProfilePath,
		}

		if userRaw.FullName != "" {
			user.FullName = userRaw.FullName
		} else {
			user.FullName = userRaw.Description
		}

		if userRaw.PasswordAge > 0 {
			user.PasswordAge = time.Duration(userRaw.PasswordAge) * time.Hour * 24
		}

		users = append(users, user)
	}

	return users, nil
}

func parseLastLogon(lastLogon string) time.Time {
	if lastLogon == "" || lastLogon == "N/A" || lastLogon == "Never" {
		return time.Time{}
	}

	lastLogon = strings.TrimSpace(lastLogon)

	formats := []string{
		"2006-01-02 15:04:05",
		"2006-01-02T15:04:05",
		time.RFC3339,
		"1/2/2006 3:04:05 PM",
	}

	for _, format := range formats {
		if t, err := time.Parse(format, lastLogon); err == nil {
			return t
		}
	}
	return time.Time{}
}

func ListLocalUsers() ([]*types.UserAccount, error) {
	collector := NewUserInfoCollector()
	return collector.collectUserInfo()
}
