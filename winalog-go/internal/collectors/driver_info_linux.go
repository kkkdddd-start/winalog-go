//go:build !windows

package collectors

func ListDrivers() ([]Driver, error) {
	return nil, ErrNotSupported
}
