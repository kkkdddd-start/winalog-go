package collectors

type CollectOptions struct {
	Workers            int
	IncludePrefetch    bool
	IncludeRegistry    bool
	IncludeSystemInfo  bool
	IncludeProcessSig  bool
	IncludeProcessDLLs bool
	IncludeAmcache     bool
	IncludeUserassist  bool
	IncludeUSNJournal  bool
	IncludeShimCache   bool
	IncludeTasks       bool
	IncludeLogs        bool
	IncludeNetwork     bool
	IncludeDrivers     bool
	IncludeUsers       bool
	DLLCollectionMode  string
	SelectedPIDs       []int
	SelectedSources    []string
	Formats            []string
	OutputPath         string
	Compress           bool
	CalculateHash      bool
}
