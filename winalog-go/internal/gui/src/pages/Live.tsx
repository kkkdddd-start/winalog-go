import { useEffect, useState, useRef, useCallback } from 'react'
import { useI18n } from '../locales/I18n'
import { monitorAPI, MonitorEvent } from '../api'

interface LiveEvent {
  id: number
  timestamp: string
  event_id: number
  level: string
  source: string
  log_name: string
  computer: string
  user: string
  message: string
  ip_address: string
}

interface LiveStats {
  total_events: number
  events_per_sec: number
  uptime: string
  process_count: number
  network_count: number
}

const LIVE_STORAGE_KEY = 'winalog_live_monitoring_enabled'
const POLL_INTERVAL_MS = 2000

function Live() {
  const { t } = useI18n()
  const [events, setEvents] = useState<LiveEvent[]>([])
  const [stats, setStats] = useState<LiveStats | null>(null)
  const [isEnabled, setIsEnabled] = useState(() => {
    try {
      return localStorage.getItem(LIVE_STORAGE_KEY) === 'true'
    } catch {
      return false
    }
  })
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const eventsContainerRef = useRef<HTMLDivElement>(null)
  const pollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const eventIdCounter = useRef(0)

  const mapMonitorLevel = (type: string): string => {
    switch (type?.toLowerCase()) {
      case 'process':
      case 'process_start':
      case 'process_stop':
        return 'info'
      case 'network':
        return 'info'
      case 'alert':
      case 'critical':
        return 'critical'
      case 'error':
        return 'error'
      case 'warning':
        return 'warning'
      default:
        return 'info'
    }
  }

  const formatMonitorMessage = (data: MonitorEvent): string => {
    const parts: string[] = []
    if (data.type) parts.push(data.type)
    if (data.data?.process_name) parts.push(`Process: ${data.data.process_name}`)
    if (data.data?.command_line) parts.push(`Cmd: ${data.data.command_line}`)
    if (data.data?.dest_ip) parts.push(`Dst: ${data.data.dest_ip}:${data.data.dest_port}`)
    return parts.length > 0 ? parts.join(' | ') : `${data.type || 'event'} detected`
  }

  useEffect(() => {
    if (eventsContainerRef.current) {
      eventsContainerRef.current.scrollTop = 0
    }
  }, [events])

  const startRealTimeMonitoring = useCallback(async () => {
    try {
      await monitorAPI.startStop('start')
    } catch (err) {
      console.error('Failed to start monitor:', err)
      setError('Failed to start monitoring. Monitor may not be available on this platform.')
      return
    }

    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current)
    }

    const pollData = async () => {
      try {
        const [statsRes, eventsRes] = await Promise.all([
          monitorAPI.getStats(),
          monitorAPI.getEvents({ limit: 10 })
        ])

        if (statsRes.data?.stats) {
          const s = statsRes.data.stats
          setStats({
            total_events: (s.process_count || 0) + (s.network_count || 0),
            events_per_sec: 0,
            uptime: s.uptime || '0s',
            process_count: s.process_count || 0,
            network_count: s.network_count || 0,
          })
        } else if (statsRes.data) {
          const s = statsRes.data
          setStats({
            total_events: (s.total_events || 0),
            events_per_sec: s.events_per_sec || 0,
            uptime: s.uptime || '0s',
            process_count: 0,
            network_count: 0,
          })
        }

        if (eventsRes.data?.events && Array.isArray(eventsRes.data.events)) {
          const newEvents: LiveEvent[] = eventsRes.data.events.slice(0, 10).map((data: MonitorEvent) => ({
            id: eventIdCounter.current++,
            timestamp: data.timestamp || new Date().toISOString(),
            event_id: 0,
            level: mapMonitorLevel(data.type),
            source: data.type || 'monitor',
            log_name: data.type || 'monitor',
            computer: 'local',
            user: '',
            message: formatMonitorMessage(data),
            ip_address: '',
          }))
          setEvents(prev => [...newEvents, ...prev].slice(0, 100))
        }

        setError(null)
      } catch (err: any) {
        console.error('Poll error:', err)
        setError('Connection lost. Retrying...')
      }
    }

    pollData()

    pollIntervalRef.current = setInterval(pollData, POLL_INTERVAL_MS)
  }, [])

  useEffect(() => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current)
      pollIntervalRef.current = null
    }
    if (isEnabled) {
      startRealTimeMonitoring()
    }
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current)
        pollIntervalRef.current = null
      }
    }
  }, [isEnabled, startRealTimeMonitoring])

  const toggleMonitoring = () => {
    setIsEnabled(prev => {
      const newValue = !prev
      try {
        localStorage.setItem(LIVE_STORAGE_KEY, newValue ? 'true' : 'false')
      } catch {}
      return newValue
    })
  }

  const getLevelColor = (level: string) => {
    switch (level?.toLowerCase()) {
      case 'critical': return '#ef4444'
      case 'error': return '#f97316'
      case 'warning': return '#eab308'
      case 'info': return '#3b82f6'
      case 'verbose': return '#6b7280'
      default: return '#888'
    }
  }

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true
    return event.level?.toLowerCase() === filter
  })

  const getLogSourceStats = () => {
    const stats: Record<string, number> = {}
    filteredEvents.forEach(event => {
      const source = event.log_name || 'Unknown'
      stats[source] = (stats[source] || 0) + 1
    })
    return stats
  }

  const logSourceStats = getLogSourceStats()
  const logSourceEntries = Object.entries(logSourceStats).sort((a, b) => b[1] - a[1])

  const exportToCSV = () => {
    if (events.length === 0) return
    const headers = ['ID', 'Timestamp', 'Level', 'Event ID', 'Source', 'Log Name', 'Computer', 'User', 'Message']
    const csvContent = [
      headers.join(','),
      ...filteredEvents.map(event => [
        event.id,
        event.timestamp,
        event.level,
        event.event_id,
        `"${(event.source || '').replace(/"/g, '""')}"`,
        `"${(event.log_name || '').replace(/"/g, '""')}"`,
        `"${(event.computer || '').replace(/"/g, '""')}"`,
        `"${(event.user || '').replace(/"/g, '""')}"`,
        `"${(event.message || '').replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `live_events_${new Date().toISOString().slice(0,10)}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  const formatTime = (timestamp: string) => {
    try {
      return new Date(timestamp).toLocaleTimeString()
    } catch {
      return timestamp
    }
  }

  return (
    <div className="live-page">
      <div className="page-header">
        <div className="header-left">
          <h2>{t('live.title')}</h2>
          <div className={`connection-status ${isEnabled ? 'connected' : 'disconnected'}`}>
            <span className="status-dot"></span>
            {isEnabled ? 'Monitoring' : 'Stopped'}
          </div>
        </div>
        <div className="header-actions">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={isEnabled}
              onChange={toggleMonitoring}
            />
            <span className="toggle-slider"></span>
          </label>
          <span style={{ marginRight: '12px', fontSize: '14px' }}>
            {isEnabled ? 'Live Monitoring ON' : 'Live Monitoring OFF'}
          </span>
          <select 
            className="filter-select"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="critical">Critical</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
            <option value="verbose">Verbose</option>
          </select>
          <button className="btn-secondary" onClick={() => setEvents([])}>
            Clear
          </button>
          <button className="btn-secondary" onClick={exportToCSV} disabled={events.length === 0}>
            Export CSV ({events.length})
          </button>
        </div>
      </div>

      {error && (
        <div className="error-banner">
          {error}
        </div>
      )}

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-label">Total Events</span>
          <span className="stat-value">{stats?.total_events?.toLocaleString() || '0'}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Events/sec</span>
          <span className="stat-value">{stats?.events_per_sec?.toFixed(2) || '0.00'}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Process</span>
          <span className="stat-value process">{stats?.process_count || 0}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Network</span>
          <span className="stat-value network">{stats?.network_count || 0}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Uptime</span>
          <span className="stat-value mono">{stats?.uptime || '0s'}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Buffered</span>
          <span className="stat-value">{events.length}/100</span>
        </div>
        <div className="stat-item log-sources">
          <span className="stat-label">Sources</span>
          <div className="log-source-list">
            {logSourceEntries.slice(0, 3).map(([source, count]) => (
              <span key={source} className="log-source-badge">
                {source}: {count}
              </span>
            ))}
            {logSourceEntries.length > 3 && (
              <span className="log-source-more">+{logSourceEntries.length - 3} more</span>
            )}
          </div>
        </div>
      </div>

      <div className="events-container" ref={eventsContainerRef}>
        {filteredEvents.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📡</div>
            <div className="empty-text">
              {isEnabled ? 'Waiting for events...' : 'Enable monitoring to start collecting events'}
            </div>
          </div>
        ) : (
          <div className="events-list">
            {filteredEvents.map((event, index) => (
              <div 
                key={`${event.id}-${index}`} 
                className="event-card"
                style={{ borderLeftColor: getLevelColor(event.level) }}
              >
                <div className="event-header">
                  <span className="event-time">{formatTime(event.timestamp)}</span>
                  <span 
                    className="event-level"
                    style={{ color: getLevelColor(event.level) }}
                  >
                    {event.level || 'UNKNOWN'}
                  </span>
                  <span className="event-id">Event #{event.event_id}</span>
                  <span className="event-source">{event.source || event.log_name}</span>
                </div>
                <div className="event-body">
                  <div className="event-message">{event.message || '(No message)'}</div>
                </div>
                <div className="event-footer">
                  <span className="event-computer">{event.computer}</span>
                  {event.user && <span className="event-user">{event.user}</span>}
                  {event.ip_address && <span className="event-ip">{event.ip_address}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Live
