import { useState } from 'react'
import { useI18n } from '../locales/I18n'
import { collectAPI, importAPI } from '../api'

interface CollectOptions {
  includeLogs: boolean
  includePrefetch: boolean
  includeShimcache: boolean
  includeAmcache: boolean
  includeUserassist: boolean
  includeRegistry: boolean
  includeTasks: boolean
  includeSystemInfo: boolean
  includeProcesses: boolean
  includeNetwork: boolean
  includeDlls: boolean
  includeDrivers: boolean
  includeUsers: boolean
  includeSysInfo: boolean
  compress: boolean
  calculateHash: boolean
}

interface LogSource {
  id: string
  name: string
  enabled: boolean
  category: string
}

interface ExcludedLog {
  id: string
  name: string
  enabled: boolean
  category: string
}

function Collect() {
  const { t } = useI18n()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [threads, setThreads] = useState(2)
  const [customPaths, setCustomPaths] = useState('')
  const [customExclude, setCustomExclude] = useState('')

  const [logSources, setLogSources] = useState<LogSource[]>([
    { id: 'security', name: 'Security', enabled: true, category: 'Windows Event Logs' },
    { id: 'system', name: 'System', enabled: true, category: 'Windows Event Logs' },
    { id: 'application', name: 'Application', enabled: true, category: 'Windows Event Logs' },
    { id: 'setup', name: 'Setup', enabled: false, category: 'Windows Event Logs' },
    { id: 'sysmon', name: 'Microsoft-Windows-Sysmon/Operational', enabled: true, category: 'Windows Event Logs' },
    { id: 'powershell', name: 'Microsoft-Windows-PowerShell/Operational', enabled: false, category: 'Windows Event Logs' },
    { id: 'wmi', name: 'Microsoft-Windows-WMI-Activity/Operational', enabled: false, category: 'Windows Event Logs' },
    { id: 'taskscheduler', name: 'Microsoft-Windows-TaskScheduler/Operational', enabled: false, category: 'Windows Event Logs' },
    { id: 'sysmon-drivers', name: 'System', enabled: false, category: 'Drivers & Services' },
    { id: 'services', name: 'Services', enabled: false, category: 'Drivers & Services' },
  ])

  const [excludedLogs, setExcludedLogs] = useState<ExcludedLog[]>([
    { id: 'diagnostics', name: 'Diagnostics', enabled: true, category: 'Common Excludes' },
    { id: 'whea', name: 'WHEA Errors', enabled: true, category: 'Common Excludes' },
    { id: 'debug', name: 'Debug', enabled: true, category: 'Common Excludes' },
    { id: 'uac', name: 'UAC Prompts', enabled: true, category: 'Common Excludes' },
    { id: 'driverframe', name: 'Driver Frameworks', enabled: true, category: 'Common Excludes' },
    { id: 'hardware', name: 'Hardware (Camera/Intel/Synced)', enabled: true, category: 'Common Excludes' },
    { id: 'livedump', name: 'LiveDump', enabled: true, category: 'Common Excludes' },
    { id: 'compat', name: 'Program Compatibility', enabled: true, category: 'Common Excludes' },
    { id: 'modern-deploy', name: 'Modern Deployment', enabled: true, category: 'Common Excludes' },
  ])

  const [options, setOptions] = useState<CollectOptions>({
    includeLogs: true,
    includePrefetch: false,
    includeShimcache: false,
    includeAmcache: false,
    includeUserassist: false,
    includeRegistry: false,
    includeTasks: false,
    includeSystemInfo: true,
    includeProcesses: true,
    includeNetwork: true,
    includeDlls: false,
    includeDrivers: false,
    includeUsers: true,
    includeSysInfo: true,
    compress: true,
    calculateHash: true,
  })

  const handleLogSourceToggle = (id: string) => {
    setLogSources(prev => prev.map(src => 
      src.id === id ? { ...src, enabled: !src.enabled } : src
    ))
  }

  const handleExcludeToggle = (id: string) => {
    setExcludedLogs(prev => prev.map(log => 
      log.id === id ? { ...log, enabled: !log.enabled } : log
    ))
  }

  const handleOptionChange = (key: keyof CollectOptions) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleCollect = async () => {
    setLoading(true)
    setStatus(t('collect.starting'))
    const enabledSources = logSources.filter(s => s.enabled).map(s => s.name)
    
    try {
      const response = await collectAPI.collect({
        sources: enabledSources,
        options: {
          workers: threads,
          include_prefetch: options.includePrefetch,
          include_registry: options.includeRegistry,
          include_system_info: options.includeSystemInfo,
          include_shimcache: options.includeShimcache,
          include_amcache: options.includeAmcache,
          include_userassist: options.includeUserassist,
          include_tasks: options.includeTasks,
          include_logs: options.includeLogs,
          include_processes: options.includeProcesses,
          include_network: options.includeNetwork,
          include_dlls: options.includeDlls,
          include_drivers: options.includeDrivers,
          include_users: options.includeUsers,
          compress: options.compress,
          calculate_hash: options.calculateHash,
        },
      })
      
      if (response.data.status === 'completed') {
        setStatus(`${t('collect.completed')}\n${response.data.output_path}\nDuration: ${response.data.duration}`)
      } else if (response.data.status === 'error') {
        setStatus(`${t('collect.failed')}: ${response.data.message}`)
      } else {
        setStatus(`${t('collect.collecting')}...\n${t('collect.sources')}: ${enabledSources.join(', ')}`)
      }
    } catch (error) {
      setStatus(`${t('collect.failed')}: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
    
    setLoading(false)
  }

  const handleImport = async () => {
    setLoading(true)
    setStatus(t('collect.importing'))
    
    try {
      const customPathsList = customPaths
        .split('\n')
        .map(p => p.trim())
        .filter(p => p.length > 0)
      
      if (customPathsList.length === 0) {
        setStatus(t('collect.noFilesSelected'))
        setLoading(false)
        return
      }
      
      const response = await importAPI.importLogs(customPathsList)
      
      if (response.data.success) {
        setStatus(`${t('collect.importDone')}\nImported: ${response.data.files_imported}\nFailed: ${response.data.files_failed}\nEvents: ${response.data.events_imported}`)
      } else {
        setStatus(`${t('collect.failed')}: ${response.data.errors?.join(', ') || 'Unknown error'}`)
      }
    } catch (error) {
      setStatus(`${t('collect.failed')}: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
    
    setLoading(false)
  }

  const handleImportWithAlert = async () => {
    setLoading(true)
    setStatus(t('collect.importing') + ' ' + t('collect.withAlert'))
    
    try {
      const customPathsList = customPaths
        .split('\n')
        .map(p => p.trim())
        .filter(p => p.length > 0)
      
      if (customPathsList.length === 0) {
        setStatus(t('collect.noFilesSelected'))
        setLoading(false)
        return
      }
      
      const response = await importAPI.importLogsWithAlert(customPathsList)
      
      if (response.data.status === 'completed') {
        let statusMsg = `${t('collect.importDone')}\nImported: ${response.data.imported}\nFailed: ${response.data.failed}\nEvents: ${response.data.total_events}`
        if (response.data.alerts_generated !== undefined) {
          statusMsg += `\nAlerts: ${response.data.alerts_generated}`
        }
        if (response.data.alert_error) {
          statusMsg += `\nAlert Error: ${response.data.alert_error}`
        }
        setStatus(statusMsg)
      } else {
        setStatus(`${t('collect.failed')}: ${response.data.message || 'Unknown error'}`)
      }
    } catch (error) {
      setStatus(`${t('collect.failed')}: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
    
    setLoading(false)
  }

  const handleEvtx2Csv = async () => {
    setLoading(true)
    setStatus(t('collect.evtx2csvConverting') || 'Converting EVTX to CSV...')
    
    try {
      const customPathsList = customPaths
        .split('\n')
        .map(p => p.trim())
        .filter(p => p.length > 0)
      
      if (customPathsList.length === 0) {
        setStatus(t('collect.noFilesSelected'))
        setLoading(false)
        return
      }
      
      const response = await collectAPI.evtx2csv(customPathsList)
      
      if (response.data) {
        let statusMsg = `${t('collect.evtx2csvDone') || 'Conversion completed'}\n`
        statusMsg += `Total Events: ${response.data.total_events}\n`
        statusMsg += `Successful: ${response.data.total_files - response.data.failed_files}\n`
        statusMsg += `Failed: ${response.data.failed_files}\n`
        if (response.data.results && response.data.results.length > 0) {
          statusMsg += '\nFiles:\n'
          response.data.results.forEach((r: any) => {
            if (r.error) {
              statusMsg += `- ${r.input_path}: ERROR - ${r.error}\n`
            } else {
              statusMsg += `- ${r.input_path} -> ${r.output_path} (${r.event_count} events)\n`
            }
          })
        }
        if (response.data.errors && response.data.errors.length > 0) {
          statusMsg += '\nErrors:\n' + response.data.errors.join('\n')
        }
        setStatus(statusMsg)
      } else {
        setStatus(`${t('collect.failed')}: Unknown error`)
      }
    } catch (error) {
      setStatus(`${t('collect.failed')}: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
    
    setLoading(false)
  }

  const groupedSources = logSources.reduce((acc, src) => {
    if (!acc[src.category]) acc[src.category] = []
    acc[src.category].push(src)
    return acc
  }, {} as Record<string, LogSource[]>)

  const groupedExcludes = excludedLogs.reduce((acc, log) => {
    if (!acc[log.category]) acc[log.category] = []
    acc[log.category].push(log)
    return acc
  }, {} as Record<string, ExcludedLog[]>)

  return (
    <div className="collect-page">
      <div className="page-header">
        <h2>{t('collect.title')}</h2>
      </div>

      <div className="collect-grid">
        <div className="collect-section main-options">
          <div className="section-header">
            <h3>{t('collect.oneClickCollection')}</h3>
            <p>{t('collect.oneClickDesc')}</p>
          </div>

          <div className="options-group">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={options.includeSystemInfo}
                onChange={() => handleOptionChange('includeSystemInfo')}
              />
              <span className="toggle-text">{t('collect.systemInfo')}</span>
            </label>
            {options.includeSystemInfo && (
              <div className="sub-options">
                <label className="toggle-label sub">
                  <input
                    type="checkbox"
                    checked={options.includeSysInfo}
                    onChange={() => handleOptionChange('includeSysInfo')}
                  />
                  <span className="toggle-text">{t('collect.systemInfo')}</span>
                </label>
                <label className="toggle-label sub">
                  <input
                    type="checkbox"
                    checked={options.includeProcesses}
                    onChange={() => handleOptionChange('includeProcesses')}
                  />
                  <span className="toggle-text">{t('collect.systemProcesses')}</span>
                </label>
                <label className="toggle-label sub">
                  <input
                    type="checkbox"
                    checked={options.includeNetwork}
                    onChange={() => handleOptionChange('includeNetwork')}
                  />
                  <span className="toggle-text">{t('collect.systemNetwork')}</span>
                </label>
                <label className="toggle-label sub">
                  <input
                    type="checkbox"
                    checked={options.includeDlls}
                    onChange={() => handleOptionChange('includeDlls')}
                  />
                  <span className="toggle-text">{t('collect.systemDlls')}</span>
                </label>
                <label className="toggle-label sub">
                  <input
                    type="checkbox"
                    checked={options.includeDrivers}
                    onChange={() => handleOptionChange('includeDrivers')}
                  />
                  <span className="toggle-text">{t('collect.systemDrivers')}</span>
                </label>
                <label className="toggle-label sub">
                  <input
                    type="checkbox"
                    checked={options.includeUsers}
                    onChange={() => handleOptionChange('includeUsers')}
                  />
                  <span className="toggle-text">{t('collect.systemUsers')}</span>
                </label>
                <label className="toggle-label sub">
                  <input
                    type="checkbox"
                    checked={options.includeRegistry}
                    onChange={() => handleOptionChange('includeRegistry')}
                  />
                  <span className="toggle-text">{t('collect.systemRegistry')}</span>
                </label>
                <label className="toggle-label sub">
                  <input
                    type="checkbox"
                    checked={options.includeTasks}
                    onChange={() => handleOptionChange('includeTasks')}
                  />
                  <span className="toggle-text">{t('collect.systemTasks')}</span>
                </label>
              </div>
            )}
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={options.includeLogs}
                onChange={() => handleOptionChange('includeLogs')}
              />
              <span className="toggle-text">{t('collect.windowsEventLogs')}</span>
            </label>
          </div>

          <div className="performance-section">
            <h4>{t('collect.performanceSettings')}</h4>
            <div className="performance-grid">
              <div className="performance-item">
                <label>{t('collect.threads')}</label>
                <div className="thread-selector">
                  {[1, 2, 4, 8].map(n => (
                    <button
                      key={n}
                      className={threads === n ? 'active' : ''}
                      onClick={() => setThreads(n)}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <div className="performance-hint">
                <span className="hint-icon">💡</span>
                <span>{t('collect.threadHint')}</span>
              </div>
            </div>
          </div>

          <div className="compression-options">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={options.compress}
                onChange={() => handleOptionChange('compress')}
              />
              <span className="toggle-text">{t('collect.compressOutput')}</span>
            </label>
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={options.calculateHash}
                onChange={() => handleOptionChange('calculateHash')}
              />
              <span className="toggle-text">{t('collect.calculateHash')}</span>
            </label>
          </div>

          <div className="action-buttons">
            <button 
              onClick={handleCollect} 
              disabled={loading} 
              className="btn-primary btn-collect"
            >
              {loading ? (
                <><span className="btn-spinner"></span>{t('collect.collecting')}</>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {t('collect.startCollection')}
                </>
              )}
            </button>
            <button 
              onClick={handleImport} 
              disabled={loading} 
              className="btn-secondary"
            >
              {t('collect.importLogsBtn')}
            </button>
            <button 
              onClick={handleImportWithAlert} 
              disabled={loading} 
              className="btn-secondary btn-import-alert"
            >
              {t('collect.importWithAlertBtn')}
            </button>
            <button 
              onClick={handleEvtx2Csv} 
              disabled={loading} 
              className="btn-secondary btn-evtx2csv"
            >
              {t('collect.evtx2csvBtn')}
            </button>
          </div>
        </div>

        <div className="collect-section">
          <div className="section-header collapsible" onClick={() => {}}>
            <h3>{t('collect.logSources')}</h3>
            <span className="collapse-icon">▼</span>
          </div>
          
          {Object.entries(groupedSources).map(([category, sources]) => (
            <div key={category} className="log-group">
              <div className="group-header">{category}</div>
              {sources.map(source => (
                <label key={source.id} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={source.enabled}
                    onChange={() => handleLogSourceToggle(source.id)}
                  />
                  <span className="checkbox-text">{source.name}</span>
                </label>
              ))}
            </div>
          ))}
        </div>

        <div className="collect-section">
          <div className="section-header collapsible">
            <h3>{t('collect.excludedLogs')}</h3>
            <span className="collapse-icon">▼</span>
          </div>

          {Object.entries(groupedExcludes).map(([category, logs]) => (
            <div key={category} className="log-group">
              <div className="group-header">{t('collect.commonExcludes')}</div>
              {logs.map(log => (
                <label key={log.id} className="checkbox-label exclude">
                  <input
                    type="checkbox"
                    checked={log.enabled}
                    onChange={() => handleExcludeToggle(log.id)}
                  />
                  <span className="checkbox-text">{log.name}</span>
                </label>
              ))}
            </div>
          ))}

          <div className="custom-exclude">
            <label>{t('collect.customExclude')}</label>
            <input
              type="text"
              value={customExclude}
              onChange={e => setCustomExclude(e.target.value)}
              placeholder={t('collect.customExcludePlaceholder')}
            />
          </div>
        </div>

        <div className="collect-section">
          <div className="section-header collapsible">
            <h3>{t('collect.customPaths')}</h3>
            <span className="collapse-icon">▼</span>
          </div>
          
          <div className="custom-path-section">
            <label>{t('collect.customPathsLabel')}</label>
            <textarea
              value={customPaths}
              onChange={e => setCustomPaths(e.target.value)}
              placeholder={t('collect.customPathsPlaceholder')}
              rows={4}
            />
          </div>
        </div>
      </div>

      <div className="additional-options">
        <div className="section-header">
          <h3>{t('collect.additionalArtifacts')}</h3>
        </div>
        
        <div className="artifacts-grid">
          <label className="artifact-card">
            <input
              type="checkbox"
              checked={options.includePrefetch}
              onChange={() => handleOptionChange('includePrefetch')}
            />
            <div className="artifact-icon">📁</div>
            <div className="artifact-info">
              <span className="artifact-name">{t('collect.prefetch')}</span>
              <span className="artifact-desc">{t('collect.prefetchDesc')}</span>
            </div>
          </label>

          <label className="artifact-card">
            <input
              type="checkbox"
              checked={options.includeShimcache}
              onChange={() => handleOptionChange('includeShimcache')}
            />
            <div className="artifact-icon">🔧</div>
            <div className="artifact-info">
              <span className="artifact-name">{t('collect.shimcache')}</span>
              <span className="artifact-desc">{t('collect.shimcacheDesc')}</span>
            </div>
          </label>

          <label className="artifact-card">
            <input
              type="checkbox"
              checked={options.includeAmcache}
              onChange={() => handleOptionChange('includeAmcache')}
            />
            <div className="artifact-icon">📝</div>
            <div className="artifact-info">
              <span className="artifact-name">{t('collect.amcache')}</span>
              <span className="artifact-desc">{t('collect.amcacheDesc')}</span>
            </div>
          </label>

          <label className="artifact-card">
            <input
              type="checkbox"
              checked={options.includeUserassist}
              onChange={() => handleOptionChange('includeUserassist')}
            />
            <div className="artifact-icon">🎯</div>
            <div className="artifact-info">
              <span className="artifact-name">{t('collect.userassist')}</span>
              <span className="artifact-desc">{t('collect.userassistDesc')}</span>
            </div>
          </label>

          <label className="artifact-card">
            <input
              type="checkbox"
              checked={options.includeRegistry}
              onChange={() => handleOptionChange('includeRegistry')}
            />
            <div className="artifact-icon">🗄️</div>
            <div className="artifact-info">
              <span className="artifact-name">{t('collect.registry')}</span>
              <span className="artifact-desc">{t('collect.registryDesc')}</span>
            </div>
          </label>

          <label className="artifact-card">
            <input
              type="checkbox"
              checked={options.includeTasks}
              onChange={() => handleOptionChange('includeTasks')}
            />
            <div className="artifact-icon">📅</div>
            <div className="artifact-info">
              <span className="artifact-name">{t('collect.scheduledTasks')}</span>
              <span className="artifact-desc">{t('collect.tasksDesc')}</span>
            </div>
          </label>
        </div>
      </div>

      {status && (
        <div className="status-panel">
          <div className="status-header">
            <span className="status-icon">📊</span>
            <span>{t('collect.status')}</span>
            <button className="status-close" onClick={() => setStatus('')}>×</button>
          </div>
          <pre className="status-content">{status}</pre>
        </div>
      )}

      <div className="cli-reference">
        <div className="section-header">
          <h3>{t('collect.cliReference')}</h3>
        </div>
        <pre className="cli-code">
{`# ${t('collect.oneClickCollection')}
winalog collect --output ./evidence.zip --compress --threads ${threads}

# ${t('collect.importLogs')}
winalog import /path/to/logs --format evtx

# ${t('collect.liveCollection')}
winalog live collect --duration 1h`}
        </pre>
      </div>
    </div>
  )
}

export default Collect