package collectors

import (
	"context"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
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

	user := &types.UserAccount{
		Name:      "root",
		FullName:  "Root User",
		SID:       "S-1-5-21-root",
		Domain:    "LOCAL",
		Type:      "Admin",
		Enabled:   true,
		LastLogin: time.Now(),
	}

	users = append(users, user)

	return users, nil
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
	return []LocalUser{}, nil
}

func GetUserInfo(username string) (*LocalUser, error) {
	return &LocalUser{Name: username}, nil
}

func IsUserAdmin(username string) bool {
	return username == "root" || username == "Administrator"
}

func GetUserSID(username string) (string, error) {
	return "S-1-5-21-unknown", nil
}

func GetUserGroups(username string) ([]string, error) {
	return []string{"Administrators"}, nil
}

func CollectUserInfo(ctx context.Context) ([]*types.UserAccount, error) {
	collector := NewUserInfoCollector()
	results, err := collector.Collect(ctx)
	if err != nil {
		return nil, err
	}

	users := make([]*types.UserAccount, 0, len(results))
	for _, r := range results {
		if u, ok := r.(*types.UserAccount); ok {
			users = append(users, u)
		}
	}
	return users, nil
}
