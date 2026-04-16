import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../locales/I18n'
import { correlationAPI, CorrelationResult } from '../api'

const severityColors: Record<string, string> = {
  critical: '#dc2626',
  high: '#ea580c',
  medium: '#ca8a04',
  low: '#16a34a',
  info: '#2563eb',
}

function Correlation() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<CorrelationResult[]>([])
  const [timeWindow, setTimeWindow] = useState('24h')
  const [error, setError] = useState('')
  const [hasRun, setHasRun] = useState(false)

  const timeWindows = [
    { value: '1h', label: '1h' },
    { value: '6h', label: '6h' },
    { value: '24h', label: '24h' },
    { value: '72h', label: '72h' },
    { value: '168h', label: '7d' },
  ]

  const handleAnalyze = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await correlationAPI.analyze({ time_window: timeWindow })
      setResults(res.data.results || [])
      setHasRun(true)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to run correlation analysis')
    } finally {
      setLoading(false)
    }
  }

  const getSeverityColor = (severity: string) => {
    return severityColors[severity.toLowerCase()] || severityColors.info
  }

  const formatTime = (timeStr: string) => {
    try {
      return new Date(timeStr).toLocaleString()
    } catch {
      return timeStr
    }
  }

  return (
    <div className="correlation-page">
      <div className="page-header">
        <h2>{t('correlation.title')}</h2>
        <p className="page-desc">{t('correlation.pageDesc')}</p>
      </div>

      <div className="correlation-toolbar">
        <div className="toolbar-section">
          <label>{t('correlation.timeWindow')}</label>
          <div className="time-selector">
            {timeWindows.map(tw => (
              <button
                key={tw.value}
                className={timeWindow === tw.value ? 'active' : ''}
                onClick={() => setTimeWindow(tw.value)}
              >
                {tw.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="btn-primary"
        >
          {loading ? (
            <>
              <span className="btn-spinner"></span>
              {t('correlation.analyzing')}
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              {t('correlation.runAnalysis')}
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

      {hasRun && !loading && results.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>{t('correlation.noResults')}</h3>
          <p>{t('correlation.noResultsDesc')}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="correlation-results">
          <div className="results-header">
            <h3>{t('correlation.results')}</h3>
            <span className="results-count">{results.length} {t('correlation.rulesTriggered')}</span>
          </div>

          <div className="results-grid">
            {results.map((result, index) => (
              <div key={index} className="correlation-card">
                <div className="card-header">
                  <div className="rule-info">
                    <span 
                      className="severity-badge"
                      style={{ backgroundColor: getSeverityColor(result.severity) }}
                    >
                      {result.severity.toUpperCase()}
                    </span>
                    <h4>{result.rule_name}</h4>
                  </div>
                  <div className="event-count">
                    <span className="count-value">{result.event_count}</span>
                    <span className="count-label">{t('correlation.events')}</span>
                  </div>
                </div>

                <p className="rule-description">{result.description}</p>

                <div className="card-footer">
                  <div className="time-range">
                    <span className="time-label">{t('correlation.startTime')}:</span>
                    <span className="time-value">{formatTime(result.start_time)}</span>
                  </div>
                  <div className="time-range">
                    <span className="time-label">{t('correlation.endTime')}:</span>
                    <span className="time-value">{formatTime(result.end_time)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="correlation-info">
        <div className="section-header">
          <h3>{t('correlation.aboutCorrelation')}</h3>
        </div>
        <div className="info-content">
          <p>{t('correlation.aboutDesc')}</p>
        </div>
      </div>

      <div className="quick-actions">
        <h4>{t('correlation.quickActions')}</h4>
        <div className="quick-buttons">
          <button 
            className="quick-btn"
            onClick={() => navigate('/timeline')}
          >
            📊 {t('correlation.viewTimeline')}
          </button>
          <button 
            className="quick-btn"
            onClick={() => navigate('/alerts')}
          >
            🔔 {t('correlation.viewAlerts')}
          </button>
          <button 
            className="quick-btn"
            onClick={() => navigate('/analyze')}
          >
            ⚡ {t('correlation.runAnalyzers')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Correlation
