import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { eventsAPI } from '../api'

interface Event {
  id: number
  timestamp: string
  event_id: number
  level: number
  source: string
  log_name: string
  computer: string
  user?: string
  user_sid?: string
  message: string
  raw_xml?: string
  session_id?: string
  ip_address?: string
  import_time: string
}

function EventDetail() {
  const { id } = useParams<{ id: string }>()
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      setLoading(true)
      eventsAPI.get(Number(id))
        .then(res => {
          setEvent(res.data as Event)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [id])

  if (loading) return <div>Loading...</div>
  if (!event) return <div>Event not found</div>

  return (
    <div className="event-detail">
      <Link to="/events">← Back to Events</Link>
      
      <div className="detail-panel">
        <h3>Event #{event.id}</h3>
        
        <div className="detail-grid">
          <div className="detail-item">
            <label>Timestamp:</label>
            <span>{new Date(event.timestamp).toLocaleString()}</span>
          </div>
          <div className="detail-item">
            <label>Event ID:</label>
            <span>{event.event_id}</span>
          </div>
          <div className="detail-item">
            <label>Level:</label>
            <span>{event.level}</span>
          </div>
          <div className="detail-item">
            <label>Source:</label>
            <span>{event.source}</span>
          </div>
          <div className="detail-item">
            <label>Log Name:</label>
            <span>{event.log_name}</span>
          </div>
          <div className="detail-item">
            <label>Computer:</label>
            <span>{event.computer}</span>
          </div>
          <div className="detail-item">
            <label>User:</label>
            <span>{event.user || 'N/A'}</span>
          </div>
          <div className="detail-item">
            <label>User SID:</label>
            <span>{event.user_sid || 'N/A'}</span>
          </div>
          <div className="detail-item">
            <label>Session ID:</label>
            <span>{event.session_id || 'N/A'}</span>
          </div>
          <div className="detail-item">
            <label>IP Address:</label>
            <span>{event.ip_address || 'N/A'}</span>
          </div>
        </div>

        <div className="detail-section">
          <label>Message:</label>
          <pre className="message-box">{event.message}</pre>
        </div>

        {event.raw_xml && (
          <div className="detail-section">
            <label>Raw XML:</label>
            <pre className="xml-box">{event.raw_xml}</pre>
          </div>
        )}
      </div>

      <style>{`
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
        .message-box, .xml-box {
          background: #0a0a1a;
          padding: 15px;
          border-radius: 4px;
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: break-all;
        }
        .xml-box {
          max-height: 400px;
        }
      `}</style>
    </div>
  )
}

export default EventDetail
