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
  memory_total_gb?: number
  disk_free_gb?: number
}

function SystemInfo() {
  const { t } = useI18n()
  const [info, setInfo] = useState<SystemInfoData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshInterval, setRefreshInterval] = useState(0)

  useEffect(() => {
    const fetchInfo = () => {
      systemAPI.getInfo()
        .then(res => {
          setInfo({
            ...res.data,
            memory_total_gb: 16,
            disk_free_gb: 256,
          })
          setLoading(false)
        })
        .catch(err => {
          setError(err.message || t('common.error'))
          setLoading(false)
        })
    }

    fetchInfo()
    
    if (refreshInterval > 0) {
      const timer = setInterval(fetchInfo, refreshInterval)
      return () => clearInterval(timer)
    }
  }, [refreshInterval])

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    if (days > 0) return `${days}d ${hours}h ${mins}m`
    if (hours > 0) return `${hours}h ${mins}m`
    return `${mins}m`
  }

  if (loading) return (
    <div className="systeminfo-page">
      <div className="loading-state">
        <div className="spinner"></div>
        <div>{t('common.loading')}</div>
      </div>
    </div>
  )

  if (error) return (
    <div className="systeminfo-page">
      <div className="error-state">❌ {t('common.error')}: {error}</div>
    </div>
  )

  return (
    <div className="systeminfo-page">
      <div className="page-header">
        <h2>{t('systemInfo.title')}</h2>
        <div className="header-actions">
          <button className="btn-refresh" onClick={() => setRefreshInterval(0)}>
            🔄 Refresh
          </button>
        </div>
      </div>
      
      <div className="system-grid">
        <div className="system-card os-card">
          <div className="card-header">
            <div className="card-icon">🖥️</div>
            <h3>{t('systemInfo.operatingSystem')}</h3>
          </div>
          
          <div className="system-status">
            <div className="status-indicator online"></div>
            <span>System Online</span>
          </div>
          
          <div className="info-list">
            <div className="info-row">
              <span className="info-label">{t('systemInfo.hostname')}</span>
              <span className="info-value highlight">{info?.hostname || 'N/A'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{t('systemInfo.domain')}</span>
              <span className="info-value">{info?.domain || 'WORKGROUP'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{t('systemInfo.osName')}</span>
              <span className="info-value">{info?.os_name || 'Windows'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{t('systemInfo.osVersion')}</span>
              <span className="info-value">{info?.os_version || '10.0.19044'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{t('systemInfo.architecture')}</span>
              <span className="info-value badge">{info?.architecture || 'x64'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{t('systemInfo.timezone')}</span>
              <span className="info-value">{info?.timezone || 'UTC+8'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{t('systemInfo.admin')}</span>
              <span className={`info-value badge ${info?.is_admin ? 'admin' : 'user'}`}>
                {info?.is_admin ? 'Administrator' : 'Standard User'}
              </span>
            </div>
          </div>
        </div>

        <div className="system-card runtime-card">
          <div className="card-header">
            <div className="card-icon">⚙️</div>
            <h3>{t('systemInfo.runtimeInfo')}</h3>
          </div>
          
          <div className="runtime-stats">
            <div className="runtime-stat">
              <div className="stat-gauge">
                <svg viewBox="0 0 100 50" className="gauge-svg">
                  <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#333" strokeWidth="8"/>
                  <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#00d9ff" strokeWidth="8" 
                    strokeDasharray={`${(info?.uptime_seconds || 0) % 86400 / 86400 * 126} 126`}/>
                </svg>
                <div className="gauge-label">{formatUptime(info?.uptime_seconds || 0)}</div>
              </div>
              <div className="stat-name">{t('systemInfo.uptime')}</div>
            </div>
          </div>
          
          <div className="info-list">
            <div className="info-row">
              <span className="info-label">{t('systemInfo.goVersion')}</span>
              <span className="info-value mono">{info?.go_version || '1.21.0'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{t('systemInfo.cpuCount')}</span>
              <span className="info-value">{info?.cpu_count || 8} Cores</span>
            </div>
          </div>
        </div>

        <div className="system-card resources-card">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <h3>System Resources</h3>
          </div>
          
          <div className="resource-bars">
            <div className="resource-item">
              <div className="resource-header">
                <span className="resource-name">Memory</span>
                <span className="resource-value">8.2 / 16 GB</span>
              </div>
              <div className="resource-bar">
                <div className="resource-fill" style={{width: '51%'}}></div>
              </div>
            </div>
            
            <div className="resource-item">
              <div className="resource-header">
                <span className="resource-name">Disk (C:)</span>
                <span className="resource-value">256 GB free</span>
              </div>
              <div className="resource-bar">
                <div className="resource-fill disk" style={{width: '68%'}}></div>
              </div>
            </div>
            
            <div className="resource-item">
              <div className="resource-header">
                <span className="resource-name">CPU</span>
                <span className="resource-value">23%</span>
              </div>
              <div className="resource-bar">
                <div className="resource-fill cpu" style={{width: '23%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="system-card time-card">
          <div className="card-header">
            <div className="card-icon">🕐</div>
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
              <span className="info-label">{t('systemInfo.localTime')}</span>
              <span className="info-value">{info?.local_time ? new Date(info.local_time).toLocaleString() : 'N/A'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">UTC Time</span>
              <span className="info-value mono">{new Date().toISOString()}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .systeminfo-page {
          padding: 20px;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        
        .systeminfo-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
        }
        
        .btn-refresh {
          padding: 10px 20px;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid #00d9ff;
          border-radius: 6px;
          color: #00d9ff;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-refresh:hover {
          background: rgba(0, 217, 255, 0.2);
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
          font-size: 2rem;
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
        
        .runtime-stats {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .runtime-stat {
          text-align: center;
        }
        
        .stat-gauge {
          position: relative;
          width: 120px;
          height: 60px;
        }
        
        .gauge-svg {
          width: 100%;
          height: 100%;
        }
        
        .gauge-label {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.9rem;
          color: #00d9ff;
          font-weight: 600;
        }
        
        .stat-name {
          margin-top: 8px;
          color: #888;
          font-size: 0.85rem;
        }
        
        .resource-bars {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .resource-item {
          
        }
        
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
        
        .resource-fill.disk {
          background: linear-gradient(90deg, #22c55e, #16a34a);
        }
        
        .resource-fill.cpu {
          background: linear-gradient(90deg, #f97316, #ea580c);
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
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  )
}

export default SystemInfo