import { useEffect, useState } from 'react'

interface Metrics {
  totalEvents: number
  totalAlerts: number
  eventsPerMinute: number
  alertsPerHour: number
  uptime: string
}

function Metrics() {
  const [metrics, setMetrics] = useState<Metrics>({
    totalEvents: 0,
    totalAlerts: 0,
    eventsPerMinute: 0,
    alertsPerHour: 0,
    uptime: '0h',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        totalEvents: 125847,
        totalAlerts: 342,
        eventsPerMinute: Math.floor(Math.random() * 1000),
        alertsPerHour: Math.floor(Math.random() * 50),
        uptime: '24h 15m',
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="metrics-page">
      <h2>Prometheus Metrics</h2>
      
      <div className="detail-panel">
        <h3>Application Metrics</h3>
        <pre className="metrics-output">
{`# HELP winalog_events_total Total number of events
# TYPE winalog_events_total counter
winalog_events_total ${metrics.totalEvents}

# HELP winalog_alerts_total Total number of alerts
# TYPE winalog_alerts_total counter
winalog_alerts_total ${metrics.totalAlerts}

# HELP winalog_events_per_minute Event ingestion rate
# TYPE winalog_events_per_minute gauge
winalog_events_per_minute ${metrics.eventsPerMinute}

# HELP winalog_alerts_per_hour Alert generation rate
# TYPE winalog_alerts_per_hour gauge
winalog_alerts_per_hour ${metrics.alertsPerHour}

# HELP winalog_uptime_seconds Application uptime in seconds
# TYPE winalog_uptime_seconds counter
winalog_uptime_seconds 87150

# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 125.67

# HELP process_memory_bytes Process memory usage in bytes
# TYPE process_memory_bytes gauge
process_memory_bytes 134217728`}
        </pre>
      </div>

      <div className="detail-panel">
        <h3>Real-time Preview</h3>
        <div className="metrics-grid">
          <div className="metric-card">
            <label>Total Events</label>
            <span className="metric-value">{metrics.totalEvents.toLocaleString()}</span>
          </div>
          <div className="metric-card">
            <label>Total Alerts</label>
            <span className="metric-value">{metrics.totalAlerts.toLocaleString()}</span>
          </div>
          <div className="metric-card">
            <label>Events/min</label>
            <span className="metric-value">{metrics.eventsPerMinute.toLocaleString()}</span>
          </div>
          <div className="metric-card">
            <label>Alerts/hr</label>
            <span className="metric-value">{metrics.alertsPerHour.toLocaleString()}</span>
          </div>
        </div>
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
          grid-template-columns: repeat(4, 1fr);
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
