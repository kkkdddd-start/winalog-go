import { useEffect, useState } from 'react'
import { useI18n } from '../locales/I18n'
import { systemAPI } from '../api'

interface SystemInfoData {
  hostname: string
  domain: string
  os_name: string
  os_version: string
  architecture: string
  is_admin: boolean
  timezone: string
  local_time: string
  uptime_seconds: number
  go_version: string
  cpu_count: number
  memory_total_gb: number
  memory_free_gb: number
}

interface ProcessInfo {
  pid: number
  ppid: number
  name: string
  exe: string
  args: string
  user: string
  status: string
}

interface NetworkConnInfo {
  pid: number
  protocol: string
  local_addr: string
  local_port: number
  remote_addr: string
  remote_port: number
  state: string
  process_name: string
}

function SystemInfo() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState<'system' | 'processes' | 'network' | 'env' | 'dlls' | 'drivers'>('system')
  const [info, setInfo] = useState<SystemInfoData | null>(null)
  const [processes, setProcesses] = useState<ProcessInfo[]>([])
  const [networkConnections, setNetworkConnections] = useState<NetworkConnInfo[]>([])
  const [envVars, setEnvVars] = useState<any[]>([])
  const [dlls, setDlls] = useState<any[]>([])
  const [drivers, setDrivers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSystemInfo()
  }, [])

  const fetchSystemInfo = () => {
    setLoading(true)
    systemAPI.getInfo()
      .then(res => {
        setInfo(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || t('common.error'))
        setLoading(false)
      })
  }

  const fetchProcesses = () => {
    if (processes.length > 0) return
    setLoading(true)
    systemAPI.getProcesses(50)
      .then(res => {
        setProcesses(res.data.processes || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const fetchNetwork = () => {
    if (networkConnections.length > 0) return
    setLoading(true)
    systemAPI.getNetwork(50)
      .then(res => {
        setNetworkConnections(res.data.connections || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const fetchEnvVars = () => {
    if (envVars.length > 0) return
    setLoading(true)
    systemAPI.getEnvVariables()
      .then(res => {
        setEnvVars(res.data.variables || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const fetchDlls = () => {
    if (dlls.length > 0) return
    setLoading(true)
    systemAPI.getLoadedDLLs(100)
      .then(res => {
        setDlls(res.data.modules || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const fetchDrivers = () => {
    if (drivers.length > 0) return
    setLoading(true)
    systemAPI.getDrivers()
      .then(res => {
        setDrivers(res.data.drivers || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const handleTabChange = (tab: 'system' | 'processes' | 'network' | 'env' | 'dlls' | 'drivers') => {
    setActiveTab(tab)
    if (tab === 'processes') fetchProcesses()
    if (tab === 'network') fetchNetwork()
    if (tab === 'env') fetchEnvVars()
    if (tab === 'dlls') fetchDlls()
    if (tab === 'drivers') fetchDrivers()
  }

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    if (days > 0) return `${days}d ${hours}h ${mins}m`
    if (hours > 0) return `${hours}h ${mins}m`
    return `${mins}m`
  }

  const getStateColor = (state: string) => {
    switch (state?.toUpperCase()) {
      case 'ESTABLISHED': return '#22c55e'
      case 'LISTEN': return '#3b82f6'
      case 'TIME_WAIT': return '#f59e0b'
      case 'CLOSE_WAIT': return '#ef4444'
      default: return '#888'
    }
  }

  if (loading && !info) return (
    <div className="systeminfo-page">
      <div className="loading-state">
        <div className="spinner"></div>
        <div>{t('common.loading')}</div>
      </div>
    </div>
  )

  if (error) return (
    <div className="systeminfo-page">
      <div className="error-state">Error: {error}</div>
    </div>
  )

  return (
    <div className="systeminfo-page">
      <div className="page-header">
        <h2>{t('systemInfo.title')}</h2>
        <div className="header-actions">
          <button className="btn-refresh" onClick={fetchSystemInfo}>
            Refresh
          </button>
        </div>
      </div>

      <div className="tab-nav">
        <button
          className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`}
          onClick={() => handleTabChange('system')}
        >
          System
        </button>
        <button
          className={`tab-btn ${activeTab === 'processes' ? 'active' : ''}`}
          onClick={() => handleTabChange('processes')}
        >
          Processes ({processes.length || '...'})
        </button>
        <button
          className={`tab-btn ${activeTab === 'network' ? 'active' : ''}`}
          onClick={() => handleTabChange('network')}
        >
          Network ({networkConnections.length || '...'})
        </button>
        <button
          className={`tab-btn ${activeTab === 'env' ? 'active' : ''}`}
          onClick={() => handleTabChange('env')}
        >
          Env ({envVars.length || '...'})
        </button>
        <button
          className={`tab-btn ${activeTab === 'dlls' ? 'active' : ''}`}
          onClick={() => handleTabChange('dlls')}
        >
          DLLs ({dlls.length || '...'})
        </button>
        <button
          className={`tab-btn ${activeTab === 'drivers' ? 'active' : ''}`}
          onClick={() => handleTabChange('drivers')}
        >
          Drivers ({drivers.length || '...'})
        </button>
      </div>

      {activeTab === 'system' && info && (
        <div className="system-grid">
          <div className="system-card os-card">
            <div className="card-header">
              <div className="card-icon">OS</div>
              <h3>{t('systemInfo.operatingSystem')}</h3>
            </div>
            
            <div className="system-status">
              <div className="status-indicator online"></div>
              <span>System Online</span>
            </div>
            
            <div className="info-list">
              <div className="info-row">
                <span className="info-label">{t('systemInfo.hostname')}</span>
                <span className="info-value highlight">{info.hostname || 'N/A'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.domain')}</span>
                <span className="info-value">{info.domain || 'WORKGROUP'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.osName')}</span>
                <span className="info-value">{info.os_name || 'Unknown'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.osVersion')}</span>
                <span className="info-value">{info.os_version || 'Unknown'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.architecture')}</span>
                <span className="info-value badge">{info.architecture || 'x64'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.timezone')}</span>
                <span className="info-value">{info.timezone || 'UTC'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.admin')}</span>
                <span className={`info-value badge ${info.is_admin ? 'admin' : 'user'}`}>
                  {info.is_admin ? 'Root/Admin' : 'Standard User'}
                </span>
              </div>
            </div>
          </div>

          <div className="system-card runtime-card">
            <div className="card-header">
              <div className="card-icon">Runtime</div>
              <h3>{t('systemInfo.runtimeInfo')}</h3>
            </div>
            
            <div className="info-list">
              <div className="info-row">
                <span className="info-label">{t('systemInfo.goVersion')}</span>
                <span className="info-value mono">{info.go_version || 'Unknown'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.cpuCount')}</span>
                <span className="info-value">{info.cpu_count || 0} Cores</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.uptime')}</span>
                <span className="info-value">{formatUptime(info.uptime_seconds || 0)}</span>
              </div>
            </div>
          </div>

          <div className="system-card resources-card">
            <div className="card-header">
              <div className="card-icon">Resources</div>
              <h3>System Resources</h3>
            </div>
            
            <div className="resource-bars">
              <div className="resource-item">
                <div className="resource-header">
                  <span className="resource-name">Memory</span>
                  <span className="resource-value">
                    {info.memory_free_gb ? (info.memory_total_gb - info.memory_free_gb).toFixed(1) : '0'} / {info.memory_total_gb?.toFixed(1) || '0'} GB
                  </span>
                </div>
                <div className="resource-bar">
                  <div className="resource-fill" style={{
                    width: info.memory_total_gb ? `${((info.memory_total_gb - info.memory_free_gb) / info.memory_total_gb * 100)}%` : '0%'
                  }}></div>
                </div>
              </div>
              
              <div className="resource-item">
                <div className="resource-header">
                  <span className="resource-name">Free Memory</span>
                  <span className="resource-value">{info.memory_free_gb?.toFixed(1) || '0'} GB</span>
                </div>
                <div className="resource-bar">
                  <div className="resource-fill memory" style={{
                    width: info.memory_total_gb ? `${(info.memory_free_gb / info.memory_total_gb * 100)}%` : '0%'
                  }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="system-card time-card">
            <div className="card-header">
              <div className="card-icon">Time</div>
              <h3>Time Information</h3>
            </div>
            
            <div className="time-display">
              <div className="current-time">
                {info?.local_time ? new Date(info.local_time).toLocaleTimeString() : new Date().toLocaleTimeString()}
              </div>
              <div className="current-date">
                {info?.local_time ? new Date(info.local_time).toLocaleDateString() : new Date().toLocaleDateString()}
              </div>
            </div>
            
            <div className="info-list">
              <div className="info-row">
                <span className="info-label">UTC Time</span>
                <span className="info-value mono">{new Date().toISOString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'processes' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>PID</th>
                <th>PPID</th>
                <th>Name</th>
                <th>User</th>
                <th>Path</th>
                <th>Command Line</th>
              </tr>
            </thead>
            <tbody>
              {processes.map((proc, idx) => (
                <tr key={`${proc.pid}-${idx}`}>
                  <td className="mono">{proc.pid}</td>
                  <td className="mono">{proc.ppid}</td>
                  <td className="highlight">{proc.name}</td>
                  <td>{proc.user || '-'}</td>
                  <td className="truncate mono" title={proc.exe}>{proc.exe || '-'}</td>
                  <td className="truncate" title={proc.args}>{proc.args || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {processes.length === 0 && !loading && (
            <div className="empty-state">No process data available</div>
          )}
        </div>
      )}

      {activeTab === 'network' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Protocol</th>
                <th>Local Address</th>
                <th>Port</th>
                <th>Remote Address</th>
                <th>Port</th>
                <th>State</th>
                <th>Process</th>
              </tr>
            </thead>
            <tbody>
              {networkConnections.map((conn, idx) => (
                <tr key={`${conn.protocol}-${conn.local_addr}-${conn.local_port}-${idx}`}>
                  <td><span className="protocol-badge">{conn.protocol}</span></td>
                  <td className="mono">{conn.local_addr}</td>
                  <td className="mono">{conn.local_port}</td>
                  <td className="mono">{conn.remote_addr || '-'}</td>
                  <td className="mono">{conn.remote_port || '-'}</td>
                  <td>
                    <span className="state-badge" style={{color: getStateColor(conn.state)}}>
                      {conn.state}
                    </span>
                  </td>
                  <td>{conn.process_name || conn.pid || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {networkConnections.length === 0 && !loading && (
            <div className="empty-state">No network connection data available</div>
          )}
        </div>
      )}

      {activeTab === 'env' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Variable Name</th>
                <th>Value</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {envVars.map((v, idx) => (
                <tr key={`${v.name}-${idx}`}>
                  <td className="mono highlight">{v.name}</td>
                  <td className="truncate" title={v.value}>{v.value}</td>
                  <td><span className="type-badge">{v.type}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          {envVars.length === 0 && !loading && (
            <div className="empty-state">No environment variables available</div>
          )}
        </div>
      )}

      {activeTab === 'dlls' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>PID</th>
                <th>Process</th>
                <th>DLL Name</th>
                <th>Version</th>
                <th>Signed</th>
                <th>Path</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {dlls.map((dll, idx) => (
                <tr key={`${dll.process_id}-${dll.name}-${idx}`}>
                  <td className="mono">{dll.process_id}</td>
                  <td>{dll.process_name}</td>
                  <td className="mono highlight">{dll.name}</td>
                  <td className="mono">{dll.version || '-'}</td>
                  <td>
                    <span className={`signature-badge ${dll.is_signed ? 'signed' : 'unsigned'}`}>
                      {dll.is_signed ? 'Signed' : 'Unsigned'}
                    </span>
                  </td>
                  <td className="truncate" title={dll.path}>{dll.path}</td>
                  <td className="mono">{(dll.size / 1024).toFixed(1)} KB</td>
                </tr>
              ))}
            </tbody>
          </table>
          {dlls.length === 0 && !loading && (
            <div className="empty-state">No DLL information available</div>
          )}
        </div>
      )}

      {activeTab === 'drivers' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Display Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Path</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver, idx) => (
                <tr key={`${driver.name}-${idx}`}>
                  <td className="mono highlight">{driver.name}</td>
                  <td>{driver.display_name || driver.name}</td>
                  <td className="truncate" title={driver.description}>{driver.description || '-'}</td>
                  <td>
                    <span className={`status-badge ${driver.status?.toLowerCase()}`}>
                      {driver.status}
                    </span>
                  </td>
                  <td className="truncate mono" title={driver.path}>{driver.path || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {drivers.length === 0 && !loading && (
            <div className="empty-state">No driver information available</div>
          )}
        </div>
      )}

      <style>{`
        .systeminfo-page {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .systeminfo-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .btn-refresh {
          padding: 8px 16px;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid #00d9ff;
          border-radius: 6px;
          color: #00d9ff;
          cursor: pointer;
        }
        
        .btn-refresh:hover {
          background: rgba(0, 217, 255, 0.2);
        }
        
        .tab-nav {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
          background: rgba(255,255,255,0.05);
          padding: 4px;
          border-radius: 8px;
        }
        
        .tab-btn {
          padding: 10px 20px;
          background: transparent;
          border: none;
          color: #888;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
        }
        
        .tab-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        
        .tab-btn.active {
          background: #00d9ff;
          color: #000;
        }
        
        .system-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .system-card {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #333;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .card-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 217, 255, 0.1);
          border-radius: 8px;
          color: #00d9ff;
          font-weight: bold;
        }
        
        .card-header h3 {
          color: #00d9ff;
          font-size: 1.1rem;
          margin: 0;
        }
        
        .system-status {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          padding: 8px 12px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 6px;
          color: #22c55e;
          font-size: 0.9rem;
        }
        
        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .status-indicator.online {
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }
        
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .info-label {
          color: #888;
          font-size: 0.9rem;
        }
        
        .info-value {
          color: #eee;
          font-weight: 500;
        }
        
        .info-value.highlight {
          color: #00d9ff;
          font-size: 1.1rem;
        }
        
        .info-value.mono {
          font-family: monospace;
          font-size: 0.85rem;
        }
        
        .info-value.badge {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.85rem;
        }
        
        .info-value.badge.admin {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }
        
        .info-value.badge.user {
          background: rgba(255, 255, 255, 0.1);
          color: #888;
        }
        
        .resource-bars {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .resource-item {}
        
        .resource-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
        }
        
        .resource-name {
          color: #888;
          font-size: 0.85rem;
        }
        
        .resource-value {
          color: #eee;
          font-size: 0.85rem;
          font-family: monospace;
        }
        
        .resource-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .resource-fill {
          height: 100%;
          background: linear-gradient(90deg, #00d9ff, #0099cc);
          border-radius: 4px;
          transition: width 0.3s;
        }
        
        .resource-fill.memory {
          background: linear-gradient(90deg, #22c55e, #16a34a);
        }
        
        .time-display {
          text-align: center;
          padding: 20px 0;
        }
        
        .current-time {
          font-size: 2.5rem;
          font-weight: bold;
          color: #fff;
          font-family: monospace;
        }
        
        .current-date {
          font-size: 1rem;
          color: #888;
          margin-top: 4px;
        }
        
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
          gap: 16px;
          color: #888;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #16213e;
          border-top: 3px solid #00d9ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .error-state {
          padding: 40px;
          text-align: center;
          color: #ef4444;
        }
        
        .data-table-container {
          flex: 1;
          overflow: auto;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .data-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .data-table th {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          position: sticky;
          top: 0;
        }
        
        .data-table td {
          padding: 10px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #ddd;
        }
        
        .data-table tr:hover td {
          background: rgba(255,255,255,0.02);
        }
        
        .data-table .mono {
          font-family: monospace;
          color: #888;
        }
        
        .data-table .truncate {
          max-width: 300px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .protocol-badge {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .state-badge {
          font-weight: 600;
          font-size: 0.85rem;
        }

        .state-badge.running {
          color: #22c55e;
        }

        .state-badge.stopped {
          color: #ef4444;
        }
        
        .empty-state {
          padding: 40px;
          text-align: center;
          color: #888;
        }

        .data-table .highlight {
          color: #00d9ff;
        }

        .type-badge {
          background: rgba(168, 85, 247, 0.2);
          color: #a855f7;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
        }

        .signature-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .signature-badge.signed {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .signature-badge.unsigned {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
      `}</style>
    </div>
  )
}

export default SystemInfo
