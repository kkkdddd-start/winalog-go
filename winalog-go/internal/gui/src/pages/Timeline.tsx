import { useEffect, useState } from 'react'
import { eventsAPI } from '../api'

interface TimelineEvent {
  id: number
  timestamp: string
  event_id: number
  level: number
  source: string
  message: string
}

function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    eventsAPI.list(1, 200)
      .then(res => {
        setEvents(res.data.events || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const getLevelIcon = (level: number) => {
    switch (level) {
      case 1: return '🔴'
      case 2: return '🟠'
      case 3: return '🟡'
      case 4: return '🟢'
      default: return '⚪'
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="timeline-page">
      <h2>Event Timeline</h2>
      
      <div className="timeline">
        {events.map(event => (
          <div key={event.id} className="timeline-item">
            <div className="timeline-marker">
              {getLevelIcon(event.level)}
            </div>
            <div className="timeline-content">
              <span className="timeline-time">
                {new Date(event.timestamp).toLocaleString()}
              </span>
              <span className="timeline-event-id">Event {event.event_id}</span>
              <p>{event.message?.substring(0, 150)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
