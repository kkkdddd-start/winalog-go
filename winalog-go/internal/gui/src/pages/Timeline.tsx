import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../locales/I18n'
import { timelineAPI, TimelineEntry, TimelineResponse } from '../api'

function Timeline() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [entries, setEntries] = useState<TimelineEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ eventCount: 0, alertCount: 0 })
  const [filter, setFilter] = useState<'all' | 'events' | 'alerts'>('all')
  const [timeRange, setTimeRange] = useState('24h')

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

  const getTypeColor = (type_: string, severity?: string) => {
    if (type_ === 'alert') {
      switch (severity) {
        case 'critical': return '#ef4444'
        case 'high': return '#f97316'
        case 'medium': return '#eab308'
        case 'low': return '#22c55e'
        default: return '#888'
      }
    }
    return '#00d9ff'
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
    timelineAPI.deleteAlert(id)
      .then(() => {
        setEntries(entries.filter(e => !(e.type === 'alert' && e.alert_id === id)))
      })
      .catch(err => console.error('Failed to delete alert:', err))
  }

  if (loading) {
    return (
      <div className="timeline-page">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>{t('common.loading')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="timeline-page">
      <div className="page-header">
        <div className="header-left">
          <h2>{t('timeline.title')}</h2>
          <p className="header-desc">{t('timeline.pageDesc')}</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary" onClick={() => navigate('/analyze')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            {t('timeline.runAnalysis')}
          </button>
        </div>
      </div>

      <div className="timeline-stats-cards">
        <div className="stat-card events">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <span className="stat-value">{stats.eventCount}</span>
            <span className="stat-label">{t('timeline.totalEvents')}</span>
          </div>
          <div className="stat-bar">
            <div 
              className="stat-bar-fill events" 
              style={{ width: `${stats.eventCount > 0 ? (stats.eventCount / (stats.eventCount + stats.alertCount)) * 100 : 0}%` }}
            />
          </div>
        </div>
        <div className="stat-card alerts">
          <div className="stat-icon">🚨</div>
          <div className="stat-content">
            <span className="stat-value">{stats.alertCount}</span>
            <span className="stat-label">{t('timeline.totalAlerts')}</span>
          </div>
          <div className="stat-bar">
            <div 
              className="stat-bar-fill alerts" 
              style={{ width: `${stats.alertCount > 0 ? (stats.alertCount / (stats.eventCount + stats.alertCount)) * 100 : 0}%` }}
            />
          </div>
        </div>
        <div className="stat-card ratio">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <span className="stat-value">
              {stats.eventCount + stats.alertCount > 0 
                ? ((stats.alertCount / (stats.eventCount + stats.alertCount)) * 100).toFixed(1)
                : 0}%
            </span>
            <span className="stat-label">{t('timeline.alertRatio')}</span>
          </div>
        </div>
      </div>

      <div className="timeline-toolbar">
        <div className="toolbar-left">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t('timeline.all')}
              <span className="count">{stats.eventCount + stats.alertCount}</span>
            </button>
            <button 
              className={`filter-tab ${filter === 'events' ? 'active' : ''}`}
              onClick={() => setFilter('events')}
            >
              {t('timeline.eventsOnly')}
              <span className="count events">{stats.eventCount}</span>
            </button>
            <button 
              className={`filter-tab ${filter === 'alerts' ? 'active' : ''}`}
              onClick={() => setFilter('alerts')}
            >
              {t('timeline.alertsOnly')}
              <span className="count alerts">{stats.alertCount}</span>
            </button>
          </div>
        </div>
        <div className="toolbar-right">
          <select 
            className="time-range-select"
            value={timeRange}
            onChange={e => setTimeRange(e.target.value)}
          >
            <option value="1h">{t('timeline.last1h')}</option>
            <option value="6h">{t('timeline.last6h')}</option>
            <option value="24h">{t('timeline.last24h')}</option>
            <option value="7d">{t('timeline.last7d')}</option>
            <option value="30d">{t('timeline.last30d')}</option>
          </select>
        </div>
      </div>

      <div className="timeline-container">
        {filteredEntries.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <p>{t('timeline.noEntries')}</p>
          </div>
        ) : (
          <div className="timeline">
            {filteredEntries.map((entry, idx) => (
              <div 
                key={`${entry.type}-${entry.id}-${idx}`} 
                className={`timeline-item ${entry.type}`}
              >
                <div className="timeline-marker" style={{ '--marker-color': getTypeColor(entry.type, entry.severity) } as React.CSSProperties}>
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="timeline-card">
                  <div className="card-header">
                    <div className="card-left">
                      <span className="card-icon">{getTypeIcon(entry.type, entry.severity)}</span>
                      <span 
                        className={`timeline-type ${entry.type}`}
                        style={{ color: getTypeColor(entry.type, entry.severity) }}
                      >
                        {getTypeLabel(entry.type)}
                      </span>
                      {entry.type === 'event' && entry.event_id && (
                        <span className="event-id-badge">Event {entry.event_id}</span>
                      )}
                      {entry.type === 'alert' && entry.severity && (
                        <span 
                          className={`severity-badge ${entry.severity}`}
                          style={{ background: `${getTypeColor(entry.type, entry.severity)}20`, color: getTypeColor(entry.type, entry.severity) }}
                        >
                          {entry.severity.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <span className="card-time">
                      {new Date(entry.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="card-message">{entry.message}</p>
                  {entry.type === 'alert' && entry.rule_name && (
                    <div className="card-meta">
                      <span className="rule-badge">
                        <span className="rule-icon">📌</span>
                        {entry.rule_name}
                      </span>
                      {entry.mitre_attack && entry.mitre_attack.length > 0 && (
                        <span className="mitre-badge">
                          <span className="mitre-icon">🎯</span>
                          {entry.mitre_attack.join(', ')}
                        </span>
                      )}
                    </div>
                  )}
                  {entry.type === 'alert' && entry.alert_id && (
                    <div className="card-actions">
                      <button 
                        className="btn-detail"
                        onClick={() => navigate(`/alerts/${entry.alert_id}`)}
                      >
                        {t('timeline.viewDetails')}
                      </button>
                      <button 
                        className="btn-delete"
                        onClick={() => entry.alert_id && handleDeleteAlert(entry.alert_id)}
                      >
                        {t('timeline.delete')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Timeline