import { useEffect, useState } from 'react'
import { eventsAPI, ExportParams, SearchParams } from '../api'

interface Event {
  id: number
  timestamp: string
  import_time?: string
  event_id: number
  level: string
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

interface SearchResponse {
  events: Event[]
  total: number
  page: number
  page_size: number
  total_pages: number
  query_time_ms: number
}

function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [exportLoading, setExportLoading] = useState(false)
  const [searchMode, setSearchMode] = useState(false)
  const [queryTime, setQueryTime] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [useRegex, setUseRegex] = useState(false)
  const [sortBy, setSortBy] = useState('timestamp')
  const [sortOrder, setSortOrder] = useState('desc')
  const [sources, setSources] = useState('')
  const [users, setUsers] = useState('')
  const [computers, setComputers] = useState('')
  const [eventIdsInput, setEventIdsInput] = useState('')
  const [logNamesInput, setLogNamesInput] = useState('')
  const [hoveredEvent, setHoveredEvent] = useState<Event | null>(null)
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 })
  const [hoveredField, setHoveredField] = useState<string | null>(null)
  const [showImportTime, setShowImportTime] = useState(false)

  const [filters, setFilters] = useState<ExportParams['filters']>({
    event_ids: [],
    levels: [],
    log_names: [],
    start_time: '',
    end_time: '',
    keywords: '',
    limit: 10000,
  })

  const doSearch = (pageNum: number = 1) => {
    setLoading(true)
    const levelMap: Record<string, number> = {
      'Critical': 1,
      'Error': 2,
      'Warning': 3,
      'Info': 4,
      'Debug': 5,
    }

    const eventIds = eventIdsInput
      .split(',')
      .map(s => parseInt(s.trim(), 10))
      .filter(n => !isNaN(n))

    const logNames = logNamesInput
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)

    const sourcesList = sources
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)

    const usersList = users
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)

    const computersList = computers
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)

    const searchParams: SearchParams = {
      keywords: filters?.keywords || '',
      regex: useRegex,
      page: pageNum,
      page_size: 50,
      sort_by: sortBy,
      sort_order: sortOrder,
      start_time: filters?.start_time || undefined,
      end_time: filters?.end_time || undefined,
      levels: selectedLevels.map(l => levelMap[l]).filter(l => l),
      event_ids: eventIds.length > 0 ? eventIds : undefined,
      log_names: logNames.length > 0 ? logNames : undefined,
      sources: sourcesList.length > 0 ? sourcesList : undefined,
      users: usersList.length > 0 ? usersList : undefined,
      computers: computersList.length > 0 ? computersList : undefined,
    }
    
    eventsAPI.search(searchParams)
      .then(res => {
        const data = res.data as SearchResponse
        setEvents(data.events || [])
        setTotalCount(data.total || 0)
        const pages = Math.ceil((data.total || 0) / 50)
        setTotalPages(pages || 1)
        setQueryTime(data.query_time_ms || 0)
        setSearchMode(true)
        setLoading(false)
      })
      .catch(() => {
        eventsAPI.list(pageNum, 50)
          .then(res => {
            const data = res.data as ListResponse
            setEvents(data.events || [])
            setTotalCount(data.total || 0)
            setTotalPages(data.total_pages || 1)
            setSearchMode(false)
            setLoading(false)
          })
          .catch(() => setLoading(false))
      })
  }

  const handleSearch = () => {
    setPage(1)
    doSearch(1)
  }

  const handleClearSearch = () => {
    setFilters({
      event_ids: [],
      levels: [],
      log_names: [],
      start_time: '',
      end_time: '',
      keywords: '',
      limit: 10000,
    })
    setSelectedLevels([])
    setUseRegex(false)
    setSortBy('timestamp')
    setSortOrder('desc')
    setSources('')
    setUsers('')
    setComputers('')
    setEventIdsInput('')
    setLogNamesInput('')
    setSearchMode(false)
    setPage(1)
  }

  useEffect(() => {
    setLoading(true)
    if (filters?.keywords && filters.keywords.trim() !== '') {
      doSearch(page)
    } else {
      eventsAPI.list(page, 50)
        .then(res => {
          const data = res.data as ListResponse
          setEvents(data.events || [])
          setTotalCount(data.total || 0)
          setTotalPages(data.total_pages || 1)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
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

  const getLevelClass = (level: string | number) => {
    const l = String(level).toLowerCase()
    if (l === '1' || l === 'critical' || l === 'crit') return 'level-critical'
    if (l === '2' || l === 'error') return 'level-error'
    if (l === '3' || l === 'warning' || l === 'warn') return 'level-warning'
    if (l === '4' || l === 'info') return 'level-info'
    if (l === '5' || l === 'debug') return 'level-debug'
    return ''
  }

  const getLevelLabel = (level: string | number) => {
    const l = String(level)
    if (l === '1' || l === 'critical') return 'Critical'
    if (l === '2' || l === 'error') return 'Error'
    if (l === '3' || l === 'warning' || l === 'warn') return 'Warning'
    if (l === '4' || l === 'info') return 'Info'
    if (l === '5' || l === 'debug') return 'Debug'
    return l
  }

  return (
    <div className="events-page">
      <div className="page-header">
        <h2>Events</h2>
        <div className="header-actions">
          <button className="btn-secondary" onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          <div className="export-dropdown">
            <button className="btn-secondary" disabled={exportLoading}>
              {exportLoading ? '...' : 'Export'}
            </button>
            <div className="export-menu">
              <button onClick={() => handleExport('csv')}>CSV</button>
              <button onClick={() => handleExport('json')}>JSON</button>
              <button onClick={() => handleExport('excel')}>Excel</button>
            </div>
          </div>
        </div>
      </div>

      <div className="search-bar">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search events by keyword..."
            value={filters?.keywords || ''}
            onChange={e => setFilters({...filters!, keywords: e.target.value})}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
      </div>

      {showFilters && (
        <div className="filters-panel">
          <div className="filter-row">
            <div className="filter-group">
              <label>Start Time</label>
              <input
                type="datetime-local"
                value={filters?.start_time || ''}
                onChange={e => setFilters({...filters!, start_time: e.target.value})}
              />
            </div>
            <div className="filter-group">
              <label>End Time</label>
              <input
                type="datetime-local"
                value={filters?.end_time || ''}
                onChange={e => setFilters({...filters!, end_time: e.target.value})}
              />
            </div>
            <div className="filter-group">
              <label>Event IDs</label>
              <input
                type="text"
                placeholder="4624,4625,4672"
                value={eventIdsInput}
                onChange={e => setEventIdsInput(e.target.value)}
                className="text-input"
              />
            </div>
            <div className="filter-group">
              <label>Log Names</label>
              <input
                type="text"
                placeholder="Security,System,Application"
                value={logNamesInput}
                onChange={e => setLogNamesInput(e.target.value)}
                className="text-input"
              />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>Sources</label>
              <input
                type="text"
                placeholder="Microsoft-Windows-Security-Auditing"
                value={sources}
                onChange={e => setSources(e.target.value)}
                className="text-input"
              />
            </div>
            <div className="filter-group">
              <label>Users</label>
              <input
                type="text"
                placeholder="DOMAIN\User1,DOMAIN\Admin"
                value={users}
                onChange={e => setUsers(e.target.value)}
                className="text-input"
              />
            </div>
            <div className="filter-group">
              <label>Computers</label>
              <input
                type="text"
                placeholder="WORKSTATION1,SRV01"
                value={computers}
                onChange={e => setComputers(e.target.value)}
                className="text-input"
              />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>Level</label>
              <div className="level-checkboxes">
                {['Critical', 'Error', 'Warning', 'Info', 'Debug'].map(level => (
                  <label key={level} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedLevels.includes(level)}
                      onChange={e => {
                        if (e.target.checked) {
                          setSelectedLevels([...selectedLevels, level])
                        } else {
                          setSelectedLevels(selectedLevels.filter(l => l !== level))
                        }
                      }}
                    />
                    {level}
                  </label>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <label>Sort By</label>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="select-input">
                <option value="timestamp">Timestamp</option>
                <option value="event_id">Event ID</option>
                <option value="level">Level</option>
                <option value="source">Source</option>
                <option value="log_name">Log Name</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Sort Order</label>
              <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="select-input">
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={useRegex}
                  onChange={e => setUseRegex(e.target.checked)}
                />
                Use Regex
              </label>
            </div>
          </div>
          <div className="filter-actions">
            <button onClick={handleSearch} className="btn-primary">Apply Filters</button>
            {searchMode && (
              <button onClick={handleClearSearch} className="btn-secondary">Clear All</button>
            )}
          </div>
        </div>
      )}

      {searchMode && (
        <div className="search-info">
          <span className="search-count">Found <strong>{totalCount.toLocaleString()}</strong> events</span>
          {queryTime > 0 && <span className="query-time">Query time: {queryTime}ms</span>}
        </div>
      )}

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-label">Total Events</span>
          <span className="stat-value">{totalCount.toLocaleString()}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Current Page</span>
          <span className="stat-value">{page} / {totalPages}</span>
        </div>
      </div>

      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <div>Loading events...</div>
        </div>
      ) : events.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <div>No events found</div>
        </div>
      ) : (
        <>
          <div className="table-container">
            <table className="events-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>
                    <span className="timestamp-header">
                      <span
                        className={`timestamp-toggle ${showImportTime ? '' : 'active'}`}
                        onClick={() => setShowImportTime(false)}
                        title="Log time"
                      >
                        Time
                      </span>
                      <span className="timestamp-separator">|</span>
                      <span
                        className={`timestamp-toggle ${showImportTime ? 'active' : ''}`}
                        onClick={() => setShowImportTime(true)}
                        title="Import time"
                      >
                        Import
                      </span>
                    </span>
                  </th>
                  <th>Level</th>
                  <th>Event ID</th>
                  <th>Source</th>
                  <th>Computer</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {events.map(event => (
                  <tr key={event.id}>
                    <td className="id-cell">{event.id}</td>
                    <td className="time-cell">
                      {showImportTime
                        ? (event.import_time ? new Date(event.import_time).toLocaleString() : '-')
                        : new Date(event.timestamp).toLocaleString()
                      }
                    </td>
                    <td>
                      <span className={`level-badge ${getLevelClass(event.level)}`}>
                        {getLevelLabel(event.level)}
                      </span>
                    </td>
                    <td className="event-id">{event.event_id}</td>
                    <td
                      className="source-cell"
                      onMouseEnter={(e) => {
                        if (event.source && event.source.length > 40) {
                          setHoveredEvent(event)
                          setHoveredField('source')
                          setHoverPosition({ x: e.clientX, y: e.clientY })
                        }
                      }}
                      onMouseMove={(e) => {
                        if (hoveredEvent?.id === event.id && hoveredField === 'source') {
                          setHoverPosition({ x: e.clientX, y: e.clientY })
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredEvent(null)
                        setHoveredField(null)
                      }}
                    >
                      {event.source?.substring(0, 40) || '-'}
                      {event.source && event.source.length > 40 ? '...' : ''}
                    </td>
                    <td className="computer-cell">{event.computer || '-'}</td>
                    <td 
                      className="message-cell"
                      onMouseEnter={(e) => {
                        if (event.message && event.message.length > 120) {
                          setHoveredEvent(event)
                          setHoveredField('message')
                          setHoverPosition({ x: e.clientX, y: e.clientY })
                        }
                      }}
                      onMouseMove={(e) => {
                        if (hoveredEvent?.id === event.id && hoveredField === 'message') {
                          setHoverPosition({ x: e.clientX, y: e.clientY })
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredEvent(null)
                        setHoveredField(null)
                      }}
                    >
                      {event.message?.substring(0, 120)}
                      {event.message && event.message.length > 120 ? '...' : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {hoveredEvent && (
            <div
              className="message-float-panel"
              style={{
                left: Math.min(hoverPosition.x + 10, window.innerWidth - 620),
                top: Math.min(hoverPosition.y + 10, window.innerHeight - 420),
              }}
              onMouseLeave={() => {
                setHoveredEvent(null)
                setHoveredField(null)
              }}
            >
              <div className="float-panel-header">
                <span>{hoveredField === 'source' ? 'Full Source' : 'Full Message'}</span>
                <button className="float-panel-close" onClick={() => {
                  setHoveredEvent(null)
                  setHoveredField(null)
                }}>x</button>
              </div>
              <pre className="float-panel-content">
                {hoveredField === 'source' ? hoveredEvent.source : hoveredEvent.message}
              </pre>
            </div>
          )}

          <div className="pagination">
            <button 
              className="page-btn" 
              disabled={page <= 1} 
              onClick={() => { setPage(1); window.scrollTo({top: 0, behavior: 'smooth'}) }}
            >
              First
            </button>
            <button 
              className="page-btn" 
              disabled={page <= 1} 
              onClick={() => { setPage(p => p - 1); window.scrollTo({top: 0, behavior: 'smooth'}) }}
            >
              Prev
            </button>
            <span className="page-info">
              Page <strong>{page}</strong> of <strong>{totalPages}</strong>
            </span>
            <button 
              className="page-btn" 
              disabled={page >= totalPages} 
              onClick={() => { setPage(p => p + 1); window.scrollTo({top: 0, behavior: 'smooth'}) }}
            >
              Next
            </button>
            <button 
              className="page-btn" 
              disabled={page >= totalPages} 
              onClick={() => { setPage(totalPages); window.scrollTo({top: 0, behavior: 'smooth'}) }}
            >
              Last
            </button>
          </div>
        </>
      )}

      <style>{`
        .events-page {
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
        
        .events-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .header-actions {
          display: flex;
          gap: 10px;
        }
        
        .btn-secondary {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #00d9ff;
        }
        
        .export-dropdown {
          position: relative;
        }
        
        .export-menu {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          background: #1a1a2e;
          border: 1px solid #333;
          border-radius: 6px;
          overflow: hidden;
          z-index: 100;
        }
        
        .export-dropdown:hover .export-menu {
          display: block;
        }
        
        .export-menu button {
          display: block;
          width: 100%;
          padding: 10px 20px;
          background: none;
          border: none;
          color: #fff;
          text-align: left;
          cursor: pointer;
        }
        
        .export-menu button:hover {
          background: rgba(0, 217, 255, 0.1);
        }
        
        .search-bar {
          margin-bottom: 16px;
        }
        
        .search-input-wrapper {
          display: flex;
          gap: 8px;
        }
        
        .search-input-wrapper input {
          flex: 1;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
        }
        
        .search-input-wrapper input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .search-btn {
          padding: 12px 24px;
          background: #00d9ff;
          border: none;
          border-radius: 8px;
          color: #000;
          font-weight: 600;
          cursor: pointer;
        }
        
        .filters-panel {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid #333;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }
        
        .filter-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .filter-group label {
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
        }
        
        .filter-group input[type="datetime-local"] {
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
        }
        
        .filter-group .text-input {
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 13px;
          min-width: 150px;
        }
        
        .filter-group .text-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .filter-group .select-input {
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 13px;
          cursor: pointer;
        }
        
        .filter-group .select-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .level-checkboxes {
          display: flex;
          gap: 12px;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          color: #ddd;
          cursor: pointer;
        }
        
        .filter-actions {
          display: flex;
          gap: 10px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #333;
        }
        
        .btn-primary {
          padding: 8px 20px;
          background: #00d9ff;
          border: none;
          border-radius: 6px;
          color: #000;
          font-weight: 600;
          cursor: pointer;
        }
        
        .search-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: rgba(0, 217, 255, 0.1);
          border-radius: 8px;
          margin-bottom: 16px;
        }
        
        .search-count {
          color: #00d9ff;
        }
        
        .query-time {
          color: #888;
          font-size: 13px;
        }
        
        .stats-bar {
          display: flex;
          gap: 20px;
          margin-bottom: 16px;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-label {
          font-size: 11px;
          color: #888;
          text-transform: uppercase;
        }
        
        .stat-value {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
        }
        
        .loading-state, .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          gap: 16px;
          color: #888;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #16213e;
          border-top: 3px solid #00d9ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .empty-icon {
          font-size: 48px;
        }
        
        .table-container {
          flex: 1;
          overflow: auto;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .events-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        
        .events-table th {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
          padding: 14px 12px;
          text-align: left;
          font-weight: 600;
          position: sticky;
          top: 0;
          white-space: nowrap;
        }
        
        .events-table td {
          padding: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          color: #ddd;
        }
        
        .events-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }
        
        .id-cell {
          color: #888;
          font-family: monospace;
          font-size: 12px;
        }
        
        .time-cell {
          white-space: nowrap;
          color: #888;
          font-size: 12px;
        }
        
        .level-badge {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .level-critical { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
        .level-error { background: rgba(239, 68, 68, 0.15); color: #f87171; }
        .level-warning { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
        .level-info { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
        .level-debug { background: rgba(107, 114, 128, 0.2); color: #9ca3af; }
        
        .event-id {
          font-family: monospace;
          color: #00d9ff;
        }
        
        .source-cell, .computer-cell {
          max-width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .message-cell {
          max-width: 400px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #aaa;
          cursor: default;
        }
        
        .message-float-panel {
          position: fixed;
          max-width: 600px;
          max-height: 400px;
          overflow: hidden;
          background: #0a0a1a;
          border: 1px solid #00d9ff;
          border-radius: 8px;
          padding: 0;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);
        }
        
        .float-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: rgba(0, 217, 255, 0.1);
          border-bottom: 1px solid #00d9ff;
        }
        
        .float-panel-header span {
          font-weight: bold;
          color: #00d9ff;
        }
        
        .float-panel-close {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          font-size: 16px;
          padding: 0 4px;
        }
        
        .float-panel-close:hover {
          color: #fff;
        }
        
        .float-panel-content {
          padding: 12px;
          max-height: 340px;
          overflow: auto;
          white-space: pre-wrap;
          word-break: break-all;
          margin: 0;
          font-size: 13px;
          color: #ccc;
        }
        
        .timestamp-header {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .timestamp-separator {
          color: #555;
        }
        
        .timestamp-toggle {
          cursor: pointer;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 0.85rem;
          color: #666;
          transition: all 0.2s;
        }
        
        .timestamp-toggle:hover {
          color: #00d9ff;
        }
        
        .timestamp-toggle.active {
          color: #00d9ff;
          background: rgba(0, 217, 255, 0.1);
        }
        
        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          margin-top: 16px;
        }
        
        .page-btn {
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .page-btn:hover:not(:disabled) {
          background: rgba(0, 217, 255, 0.1);
          border-color: #00d9ff;
        }
        
        .page-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .page-info {
          padding: 0 16px;
          color: #888;
        }
        
        .page-info strong {
          color: #00d9ff;
        }
      `}</style>
    </div>
  )
}

export default Events
