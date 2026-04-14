import { useEffect, useState } from 'react'
// import { systemAPI } from '../api'

interface SystemInfo {
  hostname: string
  domain: string
  os_name: string
  os_version: string
  architecture: string
  is_admin: boolean
  timezone: string
  local_time: string
}

function SystemInfo() {
  const [info, setInfo] = useState<SystemInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    setInfo({
      hostname: 'WORKSTATION',
      domain: 'WORKGROUP',
      os_name: 'Windows 11 Pro',
      os_version: '22H2',
      architecture: 'x64',
      is_admin: true,
      timezone: 'UTC+8',
      local_time: new Date().toISOString(),
    })
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="systeminfo-page">
      <h2>System Information</h2>
      
      <div className="detail-panel">
        <h3>Operating System</h3>
        <div className="info-grid">
          <div className="info-item">
            <label>Hostname:</label>
            <span>{info?.hostname}</span>
          </div>
          <div className="info-item">
            <label>Domain:</label>
            <span>{info?.domain}</span>
          </div>
          <div className="info-item">
            <label>OS Name:</label>
            <span>{info?.os_name}</span>
          </div>
          <div className="info-item">
            <label>OS Version:</label>
            <span>{info?.os_version}</span>
          </div>
          <div className="info-item">
            <label>Architecture:</label>
            <span>{info?.architecture}</span>
          </div>
          <div className="info-item">
            <label>Timezone:</label>
            <span>{info?.timezone}</span>
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
        <h3>Collection Status</h3>
        <p>Last system information collection: Never</p>
        <button>Collect Now</button>
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
