import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../locales/I18n'

interface AnomalyResult {
  type: string
  user?: string
  severity: string
  score: number
  description: string
  details?: Record<string, any>
  event_ids?: number[]
}

interface UEBAResponse {
  type: string
  anomalies: AnomalyResult[]
  total_anomaly: number
  high_risk_count: number
  medium_risk_count: number
  duration: string
}

interface UserProfile {
  user: string
  login_count: number
  last_updated: string
  avg_events_per_day: number
}

function UEBA() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<UEBAResponse | null>(null)
  const [profiles, setProfiles] = useState<UserProfile[]>([])
  const [activeTab, setActiveTab] = useState<'analyze' | 'profiles'>('analyze')
  const [hours, setHours] = useState(24)
  const [error, setError] = useState('')

  const handleAnalyze = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/ueba/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hours }),
      })
      const data = await res.json()
      setResult(data)
    } catch (err: any) {
      setError(err.message || 'Failed to run UEBA analysis')
    } finally {
      setLoading(false)
    }
  }

  const handleLoadProfiles = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/ueba/profiles')
      const data = await res.json()
      setProfiles(data.profiles || [])
    } catch (err: any) {
      setError(err.message || 'Failed to load profiles')
    } finally {
      setLoading(false)
    }
  }

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      critical: '#dc2626',
      high: '#ea580c',
      medium: '#ca8a04',
      low: '#16a34a',
    }
    return colors[severity.toLowerCase()] || '#2563eb'
  }

  const getAnomalyTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      impossible_travel: t('ueba.impossibleTravel'),
      abnormal_behavior: t('ueba.abnormalBehavior'),
      abnormal_hours: t('ueba.abnormalHours'),
      unusual_hours: t('ueba.unusualHours'),
      new_location: t('ueba.newLocation'),
      privilege_escalation: t('ueba.privilegeEscalation'),
      brute_force: t('ueba.bruteForce'),
      data_exfiltration: t('ueba.dataExfiltration'),
    }
    return labels[type] || type
  }

  const timeWindows = [
    { value: 1, label: '1h' },
    { value: 6, label: '6h' },
    { value: 24, label: '24h' },
    { value: 72, label: '72h' },
    { value: 168, label: '7d' },
  ]

  return (
    <div className="ueba-page">
      <div className="page-header">
        <h2>{t('ueba.title')}</h2>
        <p className="page-desc">{t('ueba.pageDesc')}</p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'analyze' ? 'active' : ''}`}
          onClick={() => setActiveTab('analyze')}
        >
          {t('ueba.analyze')}
        </button>
        <button
          className={`tab ${activeTab === 'profiles' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('profiles')
            handleLoadProfiles()
          }}
        >
          {t('ueba.profiles')}
        </button>
      </div>

      {activeTab === 'analyze' && (
        <div className="tab-content">
          <div className="ueba-toolbar">
            <div className="toolbar-section">
              <label>{t('ueba.timeWindow')}</label>
              <div className="time-selector">
                {timeWindows.map(tw => (
                  <button
                    key={tw.value}
                    className={hours === tw.value ? 'active' : ''}
                    onClick={() => setHours(tw.value)}
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
                  {t('ueba.analyzing')}
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                  </svg>
                  {t('ueba.runAnalysis')}
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
            <div className="ueba-results">
              <div className="results-summary">
                <div className="summary-card">
                  <h4>{t('ueba.totalAnomalies')}</h4>
                  <p className="summary-value">{result.total_anomaly}</p>
                </div>
                <div className="summary-card critical">
                  <h4>{t('ueba.highRisk')}</h4>
                  <p className="summary-value">{result.high_risk_count}</p>
                </div>
                <div className="summary-card warning">
                  <h4>{t('ueba.mediumRisk')}</h4>
                  <p className="summary-value">{result.medium_risk_count}</p>
                </div>
                <div className="summary-card">
                  <h4>{t('ueba.duration')}</h4>
                  <p className="summary-value small">{result.duration}</p>
                </div>
              </div>

              {result.anomalies.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">✅</div>
                  <h3>{t('ueba.noAnomalies')}</h3>
                  <p>{t('ueba.noAnomaliesDesc')}</p>
                </div>
              ) : (
                <div className="anomalies-list">
                  <h3>{t('ueba.detectedAnomalies')}</h3>
                  {result.anomalies.map((anomaly, index) => (
                    <div key={index} className="anomaly-card">
                      <div className="anomaly-header">
                        <div className="anomaly-type">
                          <span className="type-icon">⚠️</span>
                          <span className="type-label">{getAnomalyTypeLabel(anomaly.type)}</span>
                        </div>
                        <div className="anomaly-severity">
                          <span
                            className="severity-badge"
                            style={{ backgroundColor: getSeverityColor(anomaly.severity) }}
                          >
                            {anomaly.severity.toUpperCase()}
                          </span>
                          <span className="score">Score: {anomaly.score}</span>
                        </div>
                      </div>
                      <div className="anomaly-body">
                        {anomaly.user && (
                          <div className="anomaly-user">
                            <span className="label">{t('ueba.user')}:</span>
                            <span className="value">{anomaly.user}</span>
                          </div>
                        )}
                        <p className="anomaly-description">{anomaly.description}</p>
                        {anomaly.details && Object.keys(anomaly.details).length > 0 && (
                          <div className="anomaly-details">
                            <span className="details-label">{t('ueba.details')}:</span>
                            <div className="details-grid">
                              {Object.entries(anomaly.details).map(([key, value]) => (
                                <div key={key} className="detail-item">
                                  <span className="detail-key">{key}:</span>
                                  <span className="detail-value">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {activeTab === 'profiles' && (
        <div className="tab-content">
          {profiles.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">👤</div>
              <h3>{t('ueba.noProfiles')}</h3>
              <p>{t('ueba.noProfilesDesc')}</p>
            </div>
          ) : (
            <div className="profiles-list">
              <h3>{t('ueba.userProfiles')}</h3>
              <table className="profiles-table">
                <thead>
                  <tr>
                    <th>{t('ueba.user')}</th>
                    <th>{t('ueba.loginCount')}</th>
                    <th>{t('ueba.avgEventsPerDay')}</th>
                    <th>{t('ueba.lastUpdated')}</th>
                  </tr>
                </thead>
                <tbody>
                  {profiles.map((profile, index) => (
                    <tr key={index}>
                      <td className="user-cell">
                        <span className="user-icon">👤</span>
                        {profile.user}
                      </td>
                      <td>{profile.login_count}</td>
                      <td>{profile.avg_events_per_day.toFixed(1)}</td>
                      <td>{new Date(profile.last_updated).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <div className="quick-actions">
        <h4>{t('ueba.quickActions')}</h4>
        <div className="quick-buttons">
          <button className="quick-btn" onClick={() => navigate('/correlation')}>
            🔗 {t('ueba.viewCorrelation')}
          </button>
          <button className="quick-btn" onClick={() => navigate('/alerts')}>
            🔔 {t('ueba.viewAlerts')}
          </button>
          <button className="quick-btn" onClick={() => navigate('/timeline')}>
            📊 {t('ueba.viewTimeline')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default UEBA
