import { useEffect, useState } from 'react'
import { eventsAPI, ExportParams } from '../api'

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
  const [exportLoading, setExportLoading] = useState(false)

  const [filters, setFilters] = useState<ExportParams['filters']>({
    event_ids: [],
    levels: [],
    log_names: [],
    start_time: '',
    end_time: '',
    keywords: '',
    limit: 10000,
  })

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

  const handleExport = async (format: 'csv' | 'excel' | 'json') => {
    setExportLoading(true)
    try {
      const response = await eventsAPI.export({ format, filters })
      
      if (format === 'json') {
        const blob = new Blob([JSON.stringify(response.data, null, 2)], { type: 'application/json' })
        downloadBlob(blob, `events_export.${format}`)
      } else {
        const blob = new Blob([response.data], { type: format === 'csv' ? 'text/csv' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        downloadBlob(blob, `events_export.${format === 'excel' ? 'xlsx' : format}`)
      }
    } catch (error) {
      console.error('Export failed:', error)
    } finally {
      setExportLoading(false)
    }
  }

  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="events-page">
      <h2>Event Viewer</h2>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Search keywords..."
          value={filters.keywords || ''}
          onChange={e => setFilters({...filters, keywords: e.target.value})}
        />
        <input
          type="datetime-local"
          placeholder="Start time"
          value={filters.start_time || ''}
          onChange={e => setFilters({...filters, start_time: e.target.value})}
        />
        <input
          type="datetime-local"
          placeholder="End time"
          value={filters.end_time || ''}
          onChange={e => setFilters({...filters, end_time: e.target.value})}
        />
      </div>

      <div className="actions">
        <button onClick={() => handleExport('csv')} disabled={exportLoading}>
          {exportLoading ? 'Exporting...' : 'Export CSV'}
        </button>
        <button onClick={() => handleExport('excel')} disabled={exportLoading}>
          {exportLoading ? 'Exporting...' : 'Export Excel'}
        </button>
      </div>

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
