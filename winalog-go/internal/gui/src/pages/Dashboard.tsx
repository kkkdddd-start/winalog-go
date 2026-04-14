import { useEffect, useState } from 'react'
import { alertsAPI, eventsAPI } from '../api'

interface AlertStats {
  total: number
  by_severity: Record<string, number>
  by_status: Record<string, number>
}

function Dashboard() {
  const [stats, setStats] = useState<AlertStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    alertsAPI.stats()
      .then(res => {
        setStats(res.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="dashboard">
      <h2>Security Dashboard</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Alerts</h3>
          <p className="stat-value">{stats?.total || 0}</p>
        </div>
        <div className="stat-card critical">
          <h3>Critical</h3>
          <p className="stat-value">{stats?.by_severity?.critical || 0}</p>
        </div>
        <div className="stat-card high">
          <h3>High</h3>
          <p className="stat-value">{stats?.by_severity?.high || 0}</p>
        </div>
        <div className="stat-card medium">
          <h3>Medium</h3>
          <p className="stat-value">{stats?.by_severity?.medium || 0}</p>
        </div>
      </div>

      <div className="section">
        <h3>Recent Alerts</h3>
        <p>View alerts page for details</p>
      </div>
    </div>
  )
}

export default Dashboard
