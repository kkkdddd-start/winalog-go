package analyzers

func NewDefaultManager() *AnalyzerManager {
	mgr := NewAnalyzerManager()
	mgr.Register(NewBruteForceAnalyzer())
	mgr.Register(NewLoginAnalyzer())
	mgr.Register(NewKerberosAnalyzer())
	mgr.Register(NewPowerShellAnalyzer())
	mgr.Register(NewDataExfiltrationAnalyzer())
	mgr.Register(NewLateralMovementAnalyzer())
	mgr.Register(NewPersistenceAnalyzer())
	mgr.Register(NewPrivilegeEscalationAnalyzer())
	return mgr
}
