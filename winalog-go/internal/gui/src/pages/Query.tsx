import { useState } from 'react'
import { useI18n } from '../locales/I18n'

interface QueryResponse {
  columns: string[]
  rows: Record<string, any>[]
  count: number
  total: number
}

function Query() {
  const { t } = useI18n()
  const [sql, setSql] = useState('SELECT * FROM events LIMIT 10')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<QueryResponse | null>(null)
  const [error, setError] = useState('')

  const handleExecute = async () => {
    if (!sql.trim()) {
      setError(t('query.sqlRequired'))
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch('/api/query/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sql, limit: 100 }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Query failed')
      } else {
        setResult(data)
      }
    } catch (err: any) {
      setError(err.message || 'Failed to execute query')
    } finally {
      setLoading(false)
    }
  }

  const presetQueries = [
    { label: t('query.presetEvents'), sql: 'SELECT * FROM events LIMIT 10' },
    { label: t('query.presetAlerts'), sql: 'SELECT * FROM alerts LIMIT 10' },
    { label: t('query.presetAuth'), sql: "SELECT * FROM events WHERE event_id IN (4624, 4625) LIMIT 20" },
    { label: t('query.presetPowerShell'), sql: "SELECT * FROM events WHERE message LIKE '%PowerShell%' LIMIT 10" },
    { label: t('query.presetSchema'), sql: "SELECT name, type FROM sqlite_master WHERE type='table'" },
  ]

  return (
    <div className="query-page">
      <div className="page-header">
        <h2>{t('query.title')}</h2>
        <p className="page-desc">{t('query.pageDesc')}</p>
      </div>

      <div className="query-toolbar">
        <div className="preset-queries">
          <label>{t('query.presets')}</label>
          <div className="preset-buttons">
            {presetQueries.map((query, index) => (
              <button
                key={index}
                className="preset-btn"
                onClick={() => setSql(query.sql)}
                title={query.sql}
              >
                {query.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="query-editor">
        <div className="editor-header">
          <label>{t('query.sqlQuery')}</label>
        </div>
        <textarea
          className="sql-input"
          value={sql}
          onChange={(e) => setSql(e.target.value)}
          placeholder={t('query.enterSQL')}
          rows={6}
          spellCheck={false}
        />
      </div>

      <div className="query-actions">
        <button
          onClick={handleExecute}
          disabled={loading}
          className="btn-primary"
        >
          {loading ? (
            <>
              <span className="btn-spinner"></span>
              {t('query.executing')}
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {t('query.execute')}
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="error-panel">
          <span className="error-icon">⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {result && (
        <div className="query-results">
          <div className="results-header">
            <h3>{t('query.results')}</h3>
            <span className="results-count">
              {result.count} {t('query.rowsReturned')}
            </span>
          </div>

          {result.columns.length > 0 && result.rows.length > 0 ? (
            <div className="results-table-wrapper">
              <table className="results-table">
                <thead>
                  <tr>
                    {result.columns.map((col, index) => (
                      <th key={index}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {result.columns.map((col, colIndex) => (
                        <td key={colIndex}>
                          {formatCellValue(row[col])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <h3>{t('query.noResults')}</h3>
              <p>{t('query.noResultsDesc')}</p>
            </div>
          )}
        </div>
      )}

      <div className="query-info">
        <div className="section-header">
          <h3>{t('query.aboutQuery')}</h3>
        </div>
        <div className="info-content">
          <p>{t('query.aboutDesc')}</p>
          <div className="example-queries">
            <h4>{t('query.exampleQueries')}</h4>
            <div className="example-item">
              <code>SELECT * FROM events WHERE event_id = 4624</code>
              <p>{t('query.example1Desc')}</p>
            </div>
            <div className="example-item">
              <code>SELECT computer, COUNT(*) as count FROM events GROUP BY computer</code>
              <p>{t('query.example2Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatCellValue(value: any): string {
  if (value === null || value === undefined) {
    return 'NULL'
  }
  if (typeof value === 'object') {
    return JSON.stringify(value)
  }
  const str = String(value)
  if (str.length > 100) {
    return str.substring(0, 100) + '...'
  }
  return str
}

export default Query
