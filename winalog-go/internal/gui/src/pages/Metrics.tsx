import { useEffect, useState } from 'react'
import { useI18n } from '../locales/I18n'
import { systemAPI } from '../api'

interface Metrics {
  total_events: number
  total_alerts: number
  events_per_minute: number
  alerts_per_hour: number
  uptime_seconds: number
  cpu_count: number
  go_version: string
  memory_usage_mb: number
}

function Metrics() {
  const { t } = useI18n()
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchMetrics = () => {
    systemAPI.getMetrics()
      .then(res => {
        setMetrics(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || t('common.error'))
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchMetrics()
    const interval = setInterval(fetchMetrics, 5000)
    return () => clearInterval(interval)
  }, [])

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    if (days > 0) return `${days}d ${hours}h ${mins}m`
    if (hours > 0) return `${hours}h ${mins}m`
    return `${mins}m`
  }

  if (loading) return <div className="metrics-page"><div className="loading">{t('common.loading')}</div></div>

  if (error) return <div className="metrics-page"><div className="error">{t('common.error')}: {error}</div></div>

  return (
    <div className="metrics-page">
      <h2>{t('metrics.title')}</h2>
      
      <div className="detail-panel">
        <h3>{t('metrics.realTimePreview')}</h3>
        <div className="metrics-grid">
          <div className="metric-card">
            <label>{t('metrics.totalEvents')}</label>
            <span className="metric-value">{(metrics?.total_events || 0).toLocaleString()}</span>
          </div>
          <div className="metric-card">
            <label>{t('metrics.totalAlerts')}</label>
            <span className="metric-value">{(metrics?.total_alerts || 0).toLocaleString()}</span>
          </div>
          <div className="metric-card">
            <label>{t('metrics.eventsPerMin')}</label>
            <span className="metric-value">{(metrics?.events_per_minute || 0).toFixed(1)}</span>
          </div>
          <div className="metric-card">
            <label>{t('metrics.alertsPerHour')}</label>
            <span className="metric-value">{(metrics?.alerts_per_hour || 0).toFixed(1)}</span>
          </div>
          <div className="metric-card">
            <label>{t('metrics.memory')}</label>
            <span className="metric-value">{(metrics?.memory_usage_mb || 0).toFixed(2)}</span>
          </div>
          <div className="metric-card">
            <label>{t('systemInfo.uptime')}</label>
            <span className="metric-value">{metrics?.uptime_seconds ? formatUptime(metrics.uptime_seconds) : 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="detail-panel">
        <h3>{t('metrics.prometheusFormat')}</h3>
        <pre className="metrics-output">{`# HELP winalog_events_total Total number of events
# TYPE winalog_events_total counter
winalog_events_total ${metrics?.total_events || 0}

# HELP winalog_alerts_total Total number of alerts
# TYPE winalog_alerts_total counter
winalog_alerts_total ${metrics?.total_alerts || 0}

# HELP winalog_events_per_minute Event ingestion rate
# TYPE winalog_events_per_minute gauge
winalog_events_per_minute ${metrics?.events_per_minute || 0}

# HELP winalog_alerts_per_hour Alert generation rate
# TYPE winalog_alerts_per_hour gauge
winalog_alerts_per_hour ${metrics?.alerts_per_hour || 0}

# HELP winalog_uptime_seconds Application uptime in seconds
# TYPE winalog_uptime_seconds counter
winalog_uptime_seconds ${metrics?.uptime_seconds || 0}

# HELP winalog_cpu_count Number of CPUs
# TYPE winalog_cpu_count gauge
winalog_cpu_count ${metrics?.cpu_count || 0}

# HELP winalog_memory_bytes Process memory usage in bytes
# TYPE winalog_memory_bytes gauge
winalog_memory_bytes ${((metrics?.memory_usage_mb || 0) * 1024 * 1024).toFixed(0)}

# HELP go_info Go version info
# TYPE go_info gauge
go_info{version="${metrics?.go_version || 'unknown'}"} 1`}</pre>
      </div>
    </div>
  )
}

export default Metrics