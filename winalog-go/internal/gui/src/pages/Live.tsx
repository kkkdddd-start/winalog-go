import { useEffect, useState, useRef } from 'react'
import { useI18n } from '../locales/I18n'
import { liveAPI } from '../api'

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
  alerts: number
}

function Live() {
  const { t } = useI18n()
  const [events, setEvents] = useState<LiveEvent[]>([])
  const [stats, setStats] = useState<LiveStats | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const eventSourceRef = useRef<EventSource | null>(null)
  const eventsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    connectToStream()
    
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close()
      }
    }
  }, [])

  useEffect(() => {
    if (eventsContainerRef.current) {
      eventsContainerRef.current.scrollTop = 0
    }
  }, [events])

  const connectToStream = () => {
    setError(null)
    
    const eventSource = liveAPI.streamEvents(
      (event) => {
        setEvents(prev => {
          const newEvents = [event, ...prev]
          if (newEvents.length > 100) {
            newEvents.pop()
          }
          return newEvents
        })
      },
      (statsData) => {
        setStats({
          total_events: statsData.total_events || 0,
          events_per_sec: statsData.events_per_sec || 0,
          uptime: statsData.uptime || '0s',
          alerts: statsData.alerts || 0,
        })
      },
      (err) => {
        console.error('Stream error:', err)
        setIsConnected(false)
        if (err.type === 'error') {
          setError('Connection lost. Reconnecting...')
        }
      }
    )
    
    eventSource.onopen = () => {
      setIsConnected(true)
      setError(null)
    }
    
    eventSourceRef.current = eventSource
  }

  const disconnect = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close()
      eventSourceRef.current = null
    }
    setIsConnected(false)
  }

  const reconnect = () => {
    disconnect()
    connectToStream()
  }

  const clearEvents = () => {
    setEvents([])
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
          <div className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
            <span className="status-dot"></span>
            {isConnected ? 'Connected' : 'Disconnected'}
          </div>
        </div>
        <div className="header-actions">
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
          <button className="btn-secondary" onClick={clearEvents}>
            Clear
          </button>
          {isConnected ? (
            <button className="btn-danger" onClick={disconnect}>
              Disconnect
            </button>
          ) : (
            <button className="btn-primary" onClick={reconnect}>
              Connect
            </button>
          )}
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
          <span className="stat-label">Alerts</span>
          <span className="stat-value alerts">{stats?.alerts || 0}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Uptime</span>
          <span className="stat-value mono">{stats?.uptime || '0s'}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Buffered</span>
          <span className="stat-value">{events.length}/100</span>
        </div>
      </div>

      <div className="events-container" ref={eventsContainerRef}>
        {filteredEvents.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📡</div>
            <div className="empty-text">
              {isConnected ? 'Waiting for events...' : 'Click Connect to start monitoring'}
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

      <style>{`
        .live-page {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .live-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .connection-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .connection-status.connected {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }
        
        .connection-status.disconnected {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .connection-status.connected .status-dot {
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }
        
        .connection-status.disconnected .status-dot {
          background: #ef4444;
        }
        
        .header-actions {
          display: flex;
          gap: 12px;
        }
        
        .filter-select {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
        }
        
        .btn-secondary {
          padding: 8px 16px;
          background: transparent;
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          cursor: pointer;
        }
        
        .btn-secondary:hover {
          border-color: #00d9ff;
          color: #00d9ff;
        }
        
        .btn-primary {
          padding: 8px 16px;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid #00d9ff;
          border-radius: 6px;
          color: #00d9ff;
          cursor: pointer;
        }
        
        .btn-primary:hover {
          background: rgba(0, 217, 255, 0.2);
        }
        
        .btn-danger {
          padding: 8px 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #ef4444;
          cursor: pointer;
        }
        
        .btn-danger:hover {
          background: rgba(239, 68, 68, 0.2);
        }
        
        .error-banner {
          padding: 12px 20px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #ef4444;
          margin-bottom: 16px;
          text-align: center;
        }
        
        .stats-bar {
          display: flex;
          gap: 24px;
          padding: 16px 20px;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
          margin-bottom: 20px;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: #888;
          text-transform: uppercase;
        }
        
        .stat-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
        }
        
        .stat-value.alerts {
          color: #f59e0b;
        }
        
        .stat-value.mono {
          font-family: monospace;
          font-size: 1.1rem;
        }
        
        .events-container {
          flex: 1;
          overflow-y: auto;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 16px;
          color: #888;
        }
        
        .empty-icon {
          font-size: 4rem;
        }
        
        .empty-text {
          font-size: 1.1rem;
        }
        
        .events-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 16px;
        }
        
        .event-card {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          border-left: 3px solid #888;
          padding: 12px 16px;
          transition: all 0.2s;
        }
        
        .event-card:hover {
          background: rgba(0, 217, 255, 0.05);
        }
        
        .event-header {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 8px;
          font-size: 0.85rem;
        }
        
        .event-time {
          color: #888;
          font-family: monospace;
        }
        
        .event-level {
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.75rem;
        }
        
        .event-id {
          color: #00d9ff;
          font-family: monospace;
        }
        
        .event-source {
          color: #6b7280;
        }
        
        .event-body {
          margin-bottom: 8px;
        }
        
        .event-message {
          color: #ddd;
          font-size: 0.9rem;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        
        .event-footer {
          display: flex;
          gap: 16px;
          font-size: 0.75rem;
          color: #666;
        }
        
        .event-computer {
          color: #22c55e;
        }
        
        .event-user {
          color: #a855f7;
        }
        
        .event-ip {
          color: #f59e0b;
        }
      `}</style>
    </div>
  )
}

export default Live
