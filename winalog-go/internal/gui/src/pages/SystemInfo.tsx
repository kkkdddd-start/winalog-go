import { useEffect, useState } from 'react'
import { systemAPI } from '../api'

interface SystemInfo {
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
}

function SystemInfo() {
  const [info, setInfo] = useState<SystemInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    systemAPI.getInfo()
      .then(res => {
        setInfo(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || 'Failed to load system info')
        setLoading(false)
      })
  }, [])

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    if (days > 0) return `${days}d ${hours}h ${mins}m`
    if (hours > 0) return `${hours}h ${mins}m`
    return `${mins}m`
  }

  if (loading) return <div className="systeminfo-page"><div className="loading">Loading...</div></div>

  if (error) return <div className="systeminfo-page"><div className="error">Error: {error}</div></div>

  return (
    <div className="systeminfo-page">
      <h2>System Information</h2>
      
      <div className="detail-panel">
        <h3>Operating System</h3>
        <div className="info-grid">
          <div className="info-item">
            <label>Hostname:</label>
            <span>{info?.hostname || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>Domain:</label>
            <span>{info?.domain || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>OS Name:</label>
            <span>{info?.os_name || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>OS Version:</label>
            <span>{info?.os_version || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>Architecture:</label>
            <span>{info?.architecture || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>Timezone:</label>
            <span>{info?.timezone || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>Admin:</label>
            <span>{info?.is_admin ? 'Yes' : 'No'}</span>
          </div>
          <div className="info-item">
            <label>Local Time:</label>
            <span>{info?.local_time ? new Date(info.local_time).toLocaleString() : 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="detail-panel">
        <h3>Runtime Information</h3>
        <div className="info-grid">
          <div className="info-item">
            <label>Go Version:</label>
            <span>{info?.go_version || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>CPU Count:</label>
            <span>{info?.cpu_count || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>Uptime:</label>
            <span>{info?.uptime_seconds ? formatUptime(info.uptime_seconds) : 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="detail-panel">
        <h3>Collection Status</h3>
        <p>Last system information collection: {info?.local_time ? new Date(info.local_time).toLocaleString() : 'Never'}</p>
      </div>

      <style>{`
        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        .info-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .info-item label {
          font-size: 0.85em;
          color: #888;
        }
        .info-item span {
          font-size: 1.1em;
        }
      `}</style>
    </div>
  )
}

export default SystemInfo