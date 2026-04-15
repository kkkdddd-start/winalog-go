import { useState } from 'react'
import { importAPI } from '../api'

interface CollectOptions {
  includeLogs: boolean
  includePrefetch: boolean
  includeShimcache: boolean
  includeAmcache: boolean
  includeUserassist: boolean
  includeRegistry: boolean
  includeTasks: boolean
  includeSystemInfo: boolean
  compress: boolean
  calculateHash: boolean
}

function Collect() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [options, setOptions] = useState<CollectOptions>({
    includeLogs: true,
    includePrefetch: false,
    includeShimcache: false,
    includeAmcache: false,
    includeUserassist: false,
    includeRegistry: false,
    includeTasks: false,
    includeSystemInfo: true,
    compress: true,
    calculateHash: true,
  })

  const handleOptionChange = (key: keyof CollectOptions) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleCollect = async () => {
    setLoading(true)
    setStatus('Collection feature requires Windows environment...')
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setStatus('Note: One-click collection is available via CLI: winalog collect')
    setLoading(false)
  }

  const handleImport = async () => {
    setLoading(true)
    setStatus('Import feature requires file path...')
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setStatus('Note: Import logs via CLI: winalog import <path>')
    setLoading(false)
  }

  return (
    <div className="collect-page">
      <h2>Data Collection</h2>

      <div className="collect-section">
        <h3>One-Click Collection</h3>
        <p>Automatically discover and collect all log sources from the local Windows system.</p>
        
        <div className="collection-options">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={options.includeLogs}
              onChange={() => handleOptionChange('includeLogs')}
            />
            Windows Event Logs (Security, System, Application)
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={options.includeSystemInfo}
              onChange={() => handleOptionChange('includeSystemInfo')}
            />
            System Information
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={options.includePrefetch}
              onChange={() => handleOptionChange('includePrefetch')}
            />
            Prefetch Files
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={options.includeShimcache}
              onChange={() => handleOptionChange('includeShimcache')}
            />
            ShimCache
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={options.includeAmcache}
              onChange={() => handleOptionChange('includeAmcache')}
            />
            Amcache
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={options.includeUserassist}
              onChange={() => handleOptionChange('includeUserassist')}
            />
            UserAssist
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={options.includeRegistry}
              onChange={() => handleOptionChange('includeRegistry')}
            />
            Registry Persistence Points
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={options.includeTasks}
              onChange={() => handleOptionChange('includeTasks')}
            />
            Scheduled Tasks
          </label>
        </div>

        <div className="compression-options">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={options.compress}
              onChange={() => handleOptionChange('compress')}
            />
            Compress output (ZIP)
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={options.calculateHash}
              onChange={() => handleOptionChange('calculateHash')}
            />
            Calculate SHA256 hash
          </label>
        </div>

        <button onClick={handleCollect} disabled={loading} className="btn-primary">
          {loading ? 'Collecting...' : 'Start Collection'}
        </button>
      </div>

      <div className="import-section">
        <h3>Import Logs</h3>
        <p>Import previously collected logs or external event files.</p>
        <button onClick={handleImport} disabled={loading} className="btn-secondary">
          {loading ? 'Importing...' : 'Import Logs'}
        </button>
      </div>

      {status && (
        <div className="status-message">
          <pre>{status}</pre>
        </div>
      )}

      <div className="cli-reference">
        <h3>CLI Reference</h3>
        <p>For full functionality, use the CLI commands:</p>
        <pre>
# One-click collection
winalog collect --output ./evidence.zip --compress

# Import logs
winalog import /path/to/logs

# Live monitoring
winalog live collect
        </pre>
      </div>
    </div>
  )
}

export default Collect
