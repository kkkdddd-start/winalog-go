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
}

function SystemInfo() {
  const { t } = useI18n()
  const [info, setInfo] = useState<SystemInfoData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    systemAPI.getInfo()
      .then(res => {
        setInfo(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || t('common.error'))
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

  if (loading) return <div className="systeminfo-page"><div className="loading">{t('common.loading')}</div></div>

  if (error) return <div className="systeminfo-page"><div className="error">{t('common.error')}: {error}</div></div>

  return (
    <div className="systeminfo-page">
      <h2>{t('systemInfo.title')}</h2>
      
      <div className="detail-panel">
        <h3>{t('systemInfo.operatingSystem')}</h3>
        <div className="info-grid">
          <div className="info-item">
            <label>{t('systemInfo.hostname')}:</label>
            <span>{info?.hostname || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>{t('systemInfo.domain')}:</label>
            <span>{info?.domain || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>{t('systemInfo.osName')}:</label>
            <span>{info?.os_name || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>{t('systemInfo.osVersion')}:</label>
            <span>{info?.os_version || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>{t('systemInfo.architecture')}:</label>
            <span>{info?.architecture || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>{t('systemInfo.timezone')}:</label>
            <span>{info?.timezone || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>{t('systemInfo.admin')}:</label>
            <span>{info?.is_admin ? t('systemInfo.yes') : t('systemInfo.no')}</span>
          </div>
          <div className="info-item">
            <label>{t('systemInfo.localTime')}:</label>
            <span>{info?.local_time ? new Date(info.local_time).toLocaleString() : 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="detail-panel">
        <h3>{t('systemInfo.runtimeInfo')}</h3>
        <div className="info-grid">
          <div className="info-item">
            <label>{t('systemInfo.goVersion')}:</label>
            <span>{info?.go_version || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>{t('systemInfo.cpuCount')}:</label>
            <span>{info?.cpu_count || 'N/A'}</span>
          </div>
          <div className="info-item">
            <label>{t('systemInfo.uptime')}:</label>
            <span>{info?.uptime_seconds ? formatUptime(info.uptime_seconds) : 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="detail-panel">
        <h3>{t('systemInfo.collectionStatus')}</h3>
        <p>{t('systemInfo.lastCollection')}: {info?.local_time ? new Date(info.local_time).toLocaleString() : t('systemInfo.never')}</p>
      </div>
    </div>
  )
}

export default SystemInfo