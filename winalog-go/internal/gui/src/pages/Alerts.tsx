import { useEffect, useState } from 'react'
import { alertsAPI } from '../api'

interface Alert {
  id: number
  rule_name: string
  severity: string
  message: string
  count: number
  resolved: boolean
  first_seen: string
  last_seen: string
}

interface ListResponse {
  alerts: Alert[]
  total: number
  page: number
  page_size: number
  total_pages: number
}

function Alerts() {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)
  const [page, _setPage] = useState(1)
  const [severityFilter, setSeverityFilter] = useState('')

  useEffect(() => {
    setLoading(true)
    alertsAPI.list(page, 50, severityFilter || undefined)
      .then(res => {
        const data = res.data as ListResponse
        setAlerts(data.alerts || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [page, severityFilter])

  const handleResolve = (id: number) => {
    alertsAPI.resolve(id, 'Resolved via Web UI')
      .then(() => {
        setAlerts(alerts.map(a => 
          a.id === id ? { ...a, resolved: true } : a
        ))
      })
  }

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'critical': return 'severity-critical'
      case 'high': return 'severity-high'
      case 'medium': return 'severity-medium'
      default: return ''
    }
  }

  return (
    <div className="alerts-page">
      <h2>Alert Management</h2>

      <div className="filters">
        <select 
          value={severityFilter} 
          onChange={e => setSeverityFilter(e.target.value)}
        >
          <option value="">All Severities</option>
          <option value="critical">Critical</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="alerts-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Severity</th>
              <th>Rule</th>
              <th>Message</th>
              <th>Count</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map(alert => (
              <tr key={alert.id}>
                <td>{alert.id}</td>
                <td>
                  <span className={`badge ${getSeverityClass(alert.severity)}`}>
                    {alert.severity}
                  </span>
                </td>
                <td>{alert.rule_name}</td>
                <td>{alert.message?.substring(0, 80)}...</td>
                <td>{alert.count}</td>
                <td>{alert.resolved ? 'Resolved' : 'Active'}</td>
                <td>
                  {!alert.resolved && (
                    <button onClick={() => handleResolve(alert.id)}>
                      Resolve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Alerts
