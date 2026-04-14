import { useEffect, useState } from 'react'
import { timelineAPI, TimelineEntry, TimelineResponse } from '../api'

function Timeline() {
  const [entries, setEntries] = useState<TimelineEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ eventCount: 0, alertCount: 0 })
  const [filter, setFilter] = useState<'all' | 'events' | 'alerts'>('all')

  useEffect(() => {
    setLoading(true)
    timelineAPI.get(300)
      .then(res => {
        const data = res.data as TimelineResponse
        setEntries(data.entries || [])
        setStats({ eventCount: data.event_count, alertCount: data.alert_count })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const getTypeIcon = (type_: string, severity?: string) => {
    if (type_ === 'alert') {
      switch (severity) {
        case 'critical': return '🔴'
        case 'high': return '🟠'
        case 'medium': return '🟡'
        case 'low': return '🟢'
        default: return '⚪'
      }
    }
    return '📋'
  }

  const getTypeLabel = (type_: string) => {
    return type_ === 'alert' ? 'ALERT' : 'EVENT'
  }

  const filteredEntries = entries.filter(entry => {
    if (filter === 'all') return true
    if (filter === 'events') return entry.type === 'event'
    if (filter === 'alerts') return entry.type === 'alert'
    return true
  })

  const handleDeleteAlert = (id: number) => {
    if (confirm('Delete this alert?')) {
      timelineAPI.deleteAlert(id)
        .then(() => {
          setEntries(entries.filter(e => !(e.type === 'alert' && e.alert_id === id)))
        })
        .catch(err => console.error('Failed to delete alert:', err))
    }
  }

  if (loading) return <div className="timeline-page"><div className="loading">Loading...</div></div>

  return (
    <div className="timeline-page">
      <h2>Event & Alert Timeline</h2>
      
      <div className="timeline-stats">
        <span className="stat events">📋 Events: {stats.eventCount}</span>
        <span className="stat alerts">🚨 Alerts: {stats.alertCount}</span>
      </div>

      <div className="timeline-filters">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'events' ? 'active' : ''} 
          onClick={() => setFilter('events')}
        >
          Events Only
        </button>
        <button 
          className={filter === 'alerts' ? 'active' : ''} 
          onClick={() => setFilter('alerts')}
        >
          Alerts Only
        </button>
      </div>
      
      <div className="timeline">
        {filteredEntries.map((entry, idx) => (
          <div key={`${entry.type}-${entry.id}-${idx}`} className={`timeline-item ${entry.type}`}>
            <div className="timeline-marker">
              {getTypeIcon(entry.type, entry.severity)}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className={`timeline-type ${entry.type}`}>
                  {getTypeLabel(entry.type)}
                </span>
                <span className="timeline-time">
                  {new Date(entry.timestamp).toLocaleString()}
                </span>
                {entry.type === 'event' && entry.event_id && (
                  <span className="timeline-event-id">Event {entry.event_id}</span>
                )}
                {entry.type === 'alert' && entry.severity && (
                  <span className={`timeline-severity ${entry.severity}`}>{entry.severity.toUpperCase()}</span>
                )}
              </div>
              <p className="timeline-message">{entry.message?.substring(0, 200)}</p>
              {entry.type === 'alert' && entry.rule_name && (
                <div className="timeline-meta">
                  <span className="rule-name">Rule: {entry.rule_name}</span>
                  {entry.mitre_attack && entry.mitre_attack.length > 0 && (
                    <span className="mitre">MITRE: {entry.mitre_attack.join(', ')}</span>
                  )}
                </div>
              )}
              {entry.type === 'alert' && (
                <button 
                  className="delete-btn"
                  onClick={() => entry.alert_id && handleDeleteAlert(entry.alert_id)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
