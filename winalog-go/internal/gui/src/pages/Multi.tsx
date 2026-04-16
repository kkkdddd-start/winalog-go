import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../locales/I18n'

interface MachineInfo {
  id: string
  name: string
  ip: string
  domain: string
  role: string
  os_version: string
  last_seen: string
}

interface CrossMachineActivity {
  user: string
  machine_count: number
  machines: string[]
  login_count: number
  suspicious: boolean
  severity: string
  recommendation: string
}

interface LateralMovement {
  source_machine: string
  target_machine: string
  user: string
  event_id: number
  timestamp: string
  ip_address: string
  severity: string
  description: string
  mitre_attack: string[]
}

interface MultiAnalyzeResponse {
  machines: MachineInfo[]
  cross_machine_activity: CrossMachineActivity[]
  lateral_movement: LateralMovement[]
  summary: string
  suspicious_count: number
  analysis_id: string
}

function Multi() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<MultiAnalyzeResponse | null>(null)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'overview' | 'crossmachine' | 'lateral'>('overview')

  const handleAnalyze = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/multi/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      })
      const data = await res.json()
      setResult(data)
    } catch (err: any) {
      setError(err.message || 'Failed to run multi-machine analysis')
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
    return colors[severity.toLowerCase()] || colors.info
  }

  return (
    <div className="multi-page">
      <div className="page-header">
        <h2>{t('multi.title')}</h2>
        <p className="page-desc">{t('multi.pageDesc')}</p>
      </div>

      <div className="multi-toolbar">
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="btn-primary"
        >
          {loading ? (
            <>
              <span className="btn-spinner"></span>
              {t('multi.analyzing')}
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              {t('multi.runAnalysis')}
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
        <>
          <div className="analysis-summary">
            <div className="summary-card">
              <h4>{t('multi.analysisId')}</h4>
              <p className="analysis-id">{result.analysis_id}</p>
            </div>
            <div className="summary-card">
              <h4>{t('multi.machinesFound')}</h4>
              <p className="summary-value">{result.machines.length}</p>
            </div>
            <div className="summary-card">
              <h4>{t('multi.suspiciousActivities')}</h4>
              <p className="summary-value" style={{ color: result.suspicious_count > 0 ? '#dc2626' : '#16a34a' }}>
                {result.suspicious_count}
              </p>
            </div>
            <div className="summary-card">
              <h4>{t('multi.lateralMovements')}</h4>
              <p className="summary-value">{result.lateral_movement.length}</p>
            </div>
          </div>

          <p className="summary-text">{result.summary}</p>

          <div className="tabs">
            <button
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              {t('multi.machineOverview')}
            </button>
            <button
              className={`tab ${activeTab === 'crossmachine' ? 'active' : ''}`}
              onClick={() => setActiveTab('crossmachine')}
            >
              {t('multi.crossMachine')}
            </button>
            <button
              className={`tab ${activeTab === 'lateral' ? 'active' : ''}`}
              onClick={() => setActiveTab('lateral')}
            >
              {t('multi.lateralMovement')}
            </button>
          </div>

          {activeTab === 'overview' && (
            <div className="tab-content">
              {result.machines.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">🖥️</div>
                  <h3>{t('multi.noMachines')}</h3>
                  <p>{t('multi.noMachinesDesc')}</p>
                </div>
              ) : (
                <div className="machines-grid">
                  {result.machines.map((machine, index) => (
                    <div key={index} className="machine-card">
                      <div className="machine-header">
                        <span className="machine-icon">🖥️</span>
                        <h4>{machine.name}</h4>
                      </div>
                      <div className="machine-details">
                        <div className="detail-row">
                          <span className="label">IP:</span>
                          <span className="value">{machine.ip || 'N/A'}</span>
                        </div>
                        <div className="detail-row">
                          <span className="label">{t('multi.domain')}:</span>
                          <span className="value">{machine.domain || 'N/A'}</span>
                        </div>
                        <div className="detail-row">
                          <span className="label">{t('multi.role')}:</span>
                          <span className="value">{machine.role || 'Unknown'}</span>
                        </div>
                        <div className="detail-row">
                          <span className="label">OS:</span>
                          <span className="value">{machine.os_version || 'Unknown'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'crossmachine' && (
            <div className="tab-content">
              {result.cross_machine_activity.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">✅</div>
                  <h3>{t('multi.noSuspiciousActivity')}</h3>
                  <p>{t('multi.noSuspiciousActivityDesc')}</p>
                </div>
              ) : (
                <div className="activity-list">
                  {result.cross_machine_activity.map((activity, index) => (
                    <div key={index} className={`activity-card ${activity.suspicious ? 'suspicious' : ''}`}>
                      <div className="activity-header">
                        <div className="user-info">
                          <span className="user-icon">👤</span>
                          <span className="user-name">{activity.user}</span>
                        </div>
                        <span
                          className="severity-badge"
                          style={{ backgroundColor: getSeverityColor(activity.severity) }}
                        >
                          {activity.severity.toUpperCase()}
                        </span>
                      </div>
                      <div className="activity-body">
                        <p className="activity-desc">
                          {t('multi.loggedInto')} {activity.machine_count} {t('multi.machines')}:
                        </p>
                        <div className="machine-tags">
                          {activity.machines.map((machine, i) => (
                            <span key={i} className="machine-tag">{machine}</span>
                          ))}
                        </div>
                        <p className="login-count">
                          {t('multi.totalLogins')}: {activity.login_count}
                        </p>
                        <div className="recommendation">
                          <span className="rec-icon">💡</span>
                          <span>{activity.recommendation}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'lateral' && (
            <div className="tab-content">
              {result.lateral_movement.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">✅</div>
                  <h3>{t('multi.noLateralMovement')}</h3>
                  <p>{t('multi.noLateralMovementDesc')}</p>
                </div>
              ) : (
                <div className="lateral-table">
                  <table>
                    <thead>
                      <tr>
                        <th>{t('multi.time')}</th>
                        <th>{t('multi.source')}</th>
                        <th>{t('multi.user')}</th>
                        <th>{t('multi.event')}</th>
                        <th>{t('multi.description')}</th>
                        <th>{t('multi.severity')}</th>
                        <th>MITRE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.lateral_movement.map((movement, index) => (
                        <tr key={index}>
                          <td>{new Date(movement.timestamp).toLocaleString()}</td>
                          <td>{movement.source_machine}</td>
                          <td>{movement.user}</td>
                          <td>{movement.event_id}</td>
                          <td>{movement.description}</td>
                          <td>
                            <span
                              className="severity-badge"
                              style={{ backgroundColor: getSeverityColor(movement.severity) }}
                            >
                              {movement.severity.toUpperCase()}
                            </span>
                          </td>
                          <td>{movement.mitre_attack.join(', ')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </>
      )}

      <div className="quick-actions">
        <h4>{t('multi.quickActions')}</h4>
        <div className="quick-buttons">
          <button className="quick-btn" onClick={() => navigate('/correlation')}>
            🔗 {t('multi.viewCorrelation')}
          </button>
          <button className="quick-btn" onClick={() => navigate('/timeline')}>
            📊 {t('multi.viewTimeline')}
          </button>
          <button className="quick-btn" onClick={() => navigate('/alerts')}>
            🔔 {t('multi.viewAlerts')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Multi
