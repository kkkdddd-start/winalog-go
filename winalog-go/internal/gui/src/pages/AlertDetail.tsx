import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { alertsAPI } from '../api'

interface Alert {
  id: number
  rule_name: string
  severity: string
  message: string
  count: number
  resolved: boolean
  false_positive: boolean
  first_seen: string
  last_seen: string
  resolved_time?: string
  notes?: string
  mitre_attack?: string[]
  log_name: string
  rule_score: number
}

function AlertDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [alert, setAlert] = useState<Alert | null>(null)
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (id) {
      setLoading(true)
      alertsAPI.get(Number(id))
        .then(res => {
          setAlert(res.data as Alert)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [id])

  const handleResolve = async () => {
    if (!alert) return
    setSaving(true)
    try {
      await alertsAPI.resolve(alert.id, notes)
      setAlert({ ...alert, resolved: true, resolved_time: new Date().toISOString(), notes })
    } catch (error) {
      console.error('Failed to resolve:', error)
    } finally {
      setSaving(false)
    }
  }

  const handleMarkFalsePositive = async () => {
    if (!alert) return
    setSaving(true)
    try {
      await alertsAPI.markFalsePositive(alert.id, notes)
      setAlert({ ...alert, false_positive: true, notes })
    } catch (error) {
      console.error('Failed to mark false positive:', error)
    } finally {
      setSaving(false)
    }
  }

  const handleSearchRelatedEvents = () => {
    if (!alert) return
    const params = new URLSearchParams()
    if (alert.message) {
      params.set('keywords', alert.message.substring(0, 100))
    }
    if (alert.first_seen) {
      params.set('start_time', alert.first_seen)
    }
    if (alert.last_seen) {
      params.set('end_time', alert.last_seen)
    }
    if (alert.log_name) {
      params.set('log_names', alert.log_name)
    }
    navigate(`/events?${params.toString()}`)
  }

  if (loading) return <div>Loading...</div>
  if (!alert) return <div>Alert not found</div>

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'critical': return 'severity-critical'
      case 'high': return 'severity-high'
      case 'medium': return 'severity-medium'
      case 'low': return 'severity-low'
      default: return ''
    }
  }

  return (
    <div className="alert-detail">
      <Link to="/alerts">← Back to Alerts</Link>
      
      <div className="detail-panel">
        <h3>Alert #{alert.id}</h3>
        
        <div className="status-badges">
          <span className={`badge ${getSeverityClass(alert.severity)}`}>
            {alert.severity.toUpperCase()}
          </span>
          {alert.resolved && <span className="badge" style={{background: '#28a745'}}>Resolved</span>}
          {alert.false_positive && <span className="badge" style={{background: '#6c757d'}}>False Positive</span>}
        </div>

        <div className="detail-grid">
          <div className="detail-item">
            <label>Rule Name:</label>
            <span>{alert.rule_name}</span>
          </div>
          <div className="detail-item">
            <label>Score:</label>
            <span>{alert.rule_score.toFixed(2)}</span>
          </div>
          <div className="detail-item">
            <label>Log Name:</label>
            <span>{alert.log_name}</span>
          </div>
          <div className="detail-item">
            <label>Count:</label>
            <span>{alert.count}</span>
          </div>
          <div className="detail-item">
            <label>First Seen:</label>
            <span>{new Date(alert.first_seen).toLocaleString()}</span>
          </div>
          <div className="detail-item">
            <label>Last Seen:</label>
            <span>{new Date(alert.last_seen).toLocaleString()}</span>
          </div>
          {alert.resolved_time && (
            <div className="detail-item">
              <label>Resolved Time:</label>
              <span>{new Date(alert.resolved_time).toLocaleString()}</span>
            </div>
          )}
        </div>

        <div className="detail-section">
          <label>Message:</label>
          <pre className="message-box">{alert.message}</pre>
        </div>

        {alert.mitre_attack && alert.mitre_attack.length > 0 && (
          <div className="detail-section">
            <label>MITRE ATT&CK:</label>
            <div className="mitre-tags">
              {alert.mitre_attack.map((tactic, i) => (
                <span key={i} className="mitre-tag">{tactic}</span>
              ))}
            </div>
          </div>
        )}

        {!alert.resolved && !alert.false_positive && (
          <div className="actions-section">
            <h4>Actions</h4>
            <textarea
              placeholder="Add notes..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={3}
            />
            <div className="action-buttons">
              <button onClick={handleResolve} disabled={saving}>
                {saving ? 'Processing...' : 'Resolve'}
              </button>
              <button onClick={handleMarkFalsePositive} disabled={saving} style={{background: '#6c757d'}}>
                Mark as False Positive
              </button>
              <button onClick={handleSearchRelatedEvents} style={{background: '#00d9ff', color: '#000'}}>
                Search Related Events
              </button>
            </div>
          </div>
        )}

        {alert.notes && (
          <div className="detail-section">
            <label>Notes:</label>
            <pre className="notes-box">{alert.notes}</pre>
          </div>
        )}
      </div>

      <style>{`
        .status-badges {
          display: flex;
          gap: 10px;
          margin: 15px 0;
        }
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }
        .detail-item {
          display: flex;
          gap: 10px;
        }
        .detail-item label {
          font-weight: bold;
          color: #00d9ff;
        }
        .detail-section {
          margin-top: 15px;
        }
        .detail-section label {
          display: block;
          font-weight: bold;
          color: #00d9ff;
          margin-bottom: 5px;
        }
        .message-box, .notes-box {
          background: #0a0a1a;
          padding: 15px;
          border-radius: 4px;
          white-space: pre-wrap;
        }
        .mitre-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .mitre-tag {
          background: #1f4068;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.85em;
        }
        .actions-section {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #333;
        }
        .actions-section textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #333;
          border-radius: 4px;
          background: #16213e;
          color: #eee;
          margin-bottom: 10px;
        }
        .action-buttons {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </div>
  )
}

export default AlertDetail
