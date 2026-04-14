package collectors

import (
	"context"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type DriverInfoCollector struct {
	BaseCollector
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

	driver := &types.DriverInfo{
		Name:        "SampleDriver",
		Description: "Sample Driver",
		Type:        "Kernel",
		Status:      "Running",
		Started:     true,
		FilePath:    "C:\\Windows\\System32\\drivers\\sample.sys",
	}

	drivers = append(drivers, driver)

	return drivers, nil
}

type Driver struct {
	Name        string
	DisplayName string
	Path        string
	Description string
	StartMode   string
	Status      string
}

func ListDrivers() ([]Driver, error) {
	return []Driver{}, nil
}

func GetDriverInfo(driverName string) (*Driver, error) {
	return &Driver{Name: driverName}, nil
}

func IsDriverLoaded(driverName string) bool {
	return false
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
