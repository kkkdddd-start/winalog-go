//go:build !windows

package collectors

type Process struct {
	PID  int
	Name string
}

type NetConnection struct {
	PID         int
	Protocol    string
	LocalAddr   string
	LocalPort   int
	RemoteAddr  string
	RemotePort  int
	State       string
	ProcessName string
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

type DLLModuleInfo struct {
	ProcessID   int32
	ProcessName string
	Name        string
	Path        string
	Size        uint32
	Version     string
}

type Driver struct {
	Name        string
	DisplayName string
	Description string
	Path        string
	Status      string
}

type UserAccount struct {
	SID         string
	Name        string
	Domain      string
	FullName    string
	Type        string
	Enabled     bool
	HomeDir     string
	ProfilePath string
}

type RegistryPersistence struct {
	RunKeys       []*RegistryInfo
	UserInit      []*RegistryInfo
	TaskScheduler []*RegistryInfo
}

type RegistryInfo struct {
	Path    string
	Name    string
	Value   string
	Type    string
	Source  string
	Enabled bool
}
