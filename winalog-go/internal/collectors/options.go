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
	DLLCollectionMode  string
	SelectedPIDs       []int
	OutputPath         string
	Compress           bool
	CalculateHash      bool
}
