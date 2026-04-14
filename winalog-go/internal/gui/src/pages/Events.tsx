import { useEffect, useState } from 'react'
import { eventsAPI } from '../api'

interface Event {
  id: number
  timestamp: string
  event_id: number
  level: number
  source: string
  log_name: string
  computer: string
  message: string
}

interface ListResponse {
  events: Event[]
  total: number
  page: number
  page_size: number
  total_pages: number
}

function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setLoading(true)
    eventsAPI.list(page, 50)
      .then(res => {
        const data = res.data as ListResponse
        setEvents(data.events || [])
        setTotalPages(data.total_pages || 1)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [page])

  return (
    <div className="events-page">
      <h2>Event Viewer</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="events-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Timestamp</th>
                <th>Event ID</th>
                <th>Level</th>
                <th>Source</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{new Date(event.timestamp).toLocaleString()}</td>
                  <td>{event.event_id}</td>
                  <td>{event.level}</td>
                  <td>{event.source}</td>
                  <td>{event.message?.substring(0, 100)}...</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button disabled={page <= 1} onClick={() => setPage(p => p - 1)}>
              Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Events
