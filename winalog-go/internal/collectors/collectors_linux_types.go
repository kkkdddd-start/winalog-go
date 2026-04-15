//go:build !windows

package collectors

type Process struct {
	PID  int
	Name string
}

type NetworkConnection struct {
	PID         int
	ProcessName string
	Protocol    string
	LocalAddr   string
	LocalPort   uint16
	RemoteAddr  string
	RemotePort  uint16
	State       string
}

type SignatureResult struct {
	Status       string
	Signer       string
	Issuer       string
	SerialNumber string
	Verified     bool
	Thumbprint   string
	HashMismatch bool
}

type OneClickResult struct {
	OutputPath string
	Duration   interface{}
	Success    bool
	Errors     []string
	FileCount  int
}
