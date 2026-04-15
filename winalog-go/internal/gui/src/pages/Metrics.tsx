import { useEffect, useState } from 'react'
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
        setError(err.message || 'Failed to load metrics')
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

  if (loading) return <div className="metrics-page"><div className="loading">Loading...</div></div>

  if (error) return <div className="metrics-page"><div className="error">Error: {error}</div></div>

  return (
    <div className="metrics-page">
      <h2>Prometheus Metrics</h2>
      
      <div className="detail-panel">
        <h3>Real-time Preview</h3>
        <div className="metrics-grid">
          <div className="metric-card">
            <label>Total Events</label>
            <span className="metric-value">{(metrics?.total_events || 0).toLocaleString()}</span>
          </div>
          <div className="metric-card">
            <label>Total Alerts</label>
            <span className="metric-value">{(metrics?.total_alerts || 0).toLocaleString()}</span>
          </div>
          <div className="metric-card">
            <label>Events/min</label>
            <span className="metric-value">{(metrics?.events_per_minute || 0).toFixed(1)}</span>
          </div>
          <div className="metric-card">
            <label>Alerts/hr</label>
            <span className="metric-value">{(metrics?.alerts_per_hour || 0).toFixed(1)}</span>
          </div>
          <div className="metric-card">
            <label>Memory (MB)</label>
            <span className="metric-value">{(metrics?.memory_usage_mb || 0).toFixed(2)}</span>
          </div>
          <div className="metric-card">
            <label>Uptime</label>
            <span className="metric-value">{metrics?.uptime_seconds ? formatUptime(metrics.uptime_seconds) : 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="detail-panel">
        <h3>Prometheus Format</h3>
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

      <style>{`
        .metrics-output {
          background: #0a0a1a;
          padding: 15px;
          border-radius: 4px;
          overflow-x: auto;
          font-family: monospace;
          font-size: 0.9em;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 15px;
        }
        .metric-card {
          background: #0a0a1a;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
        }
        .metric-card label {
          display: block;
          color: #888;
          font-size: 0.85em;
          margin-bottom: 5px;
        }
        .metric-card .metric-value {
          font-size: 1.5em;
          font-weight: bold;
          color: #00d9ff;
        }
      `}</style>
    </div>
  )
}

export default Metrics