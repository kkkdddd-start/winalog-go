package collectors

type CollectOptions struct {
	Workers           int
	IncludePrefetch   bool
	IncludeRegistry   bool
	IncludeSystemInfo bool
	OutputPath        string
	Compress          bool
	CalculateHash     bool
}
