import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../locales/I18n'
import { alertsAPI } from '../api'

interface Alert {
  id: number
  rule_name: string
  severity: string
  message: string
  count: number
  resolved: boolean
  first_seen: string
  last_seen: string
}

interface ListResponse {
  alerts: Alert[]
  total: number
  page: number
  page_size: number
  total_pages: number
}

function Alerts() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)
  const [page, _setPage] = useState(1)
  const [severityFilter, setSeverityFilter] = useState('')
  const [selectedAlerts, setSelectedAlerts] = useState<number[]>([])
  const [selectedAnalyzer, setSelectedAnalyzer] = useState('brute-force')
  const [showAnalyzeModal, setShowAnalyzeModal] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)

  useEffect(() => {
    setLoading(true)
    alertsAPI.list(page, 50, severityFilter || undefined)
      .then(res => {
        const data = res.data as ListResponse
        setAlerts(data.alerts || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [page, severityFilter])

  const handleResolve = (id: number) => {
    alertsAPI.resolve(id, 'Resolved via Web UI')
      .then(() => {
        setAlerts(alerts.map(a => 
          a.id === id ? { ...a, resolved: true } : a
        ))
      })
  }

  const handleSelectAlert = (id: number) => {
    setSelectedAlerts(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    if (selectedAlerts.length === alerts.length) {
      setSelectedAlerts([])
    } else {
      setSelectedAlerts(alerts.map(a => a.id))
    }
  }

  const handleBatchResolve = () => {
    selectedAlerts.forEach(id => {
      alertsAPI.resolve(id, 'Batch resolved via Web UI')
    })
    setAlerts(alerts.map(a => 
      selectedAlerts.includes(a.id) ? { ...a, resolved: true } : a
    ))
    setSelectedAlerts([])
  }

  const handleRunAnalysis = () => {
    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      setShowAnalyzeModal(false)
      navigate('/analyze')
    }, 1500)
  }

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'critical': return 'severity-critical'
      case 'high': return 'severity-high'
      case 'medium': return 'severity-medium'
      case 'low': return 'severity-low'
      default: return ''
    }
  }

  const stats = {
    total: alerts.length,
    critical: alerts.filter(a => a.severity === 'critical').length,
    high: alerts.filter(a => a.severity === 'high').length,
    medium: alerts.filter(a => a.severity === 'medium').length,
    low: alerts.filter(a => a.severity === 'low').length,
  }

  return (
    <div className="alerts-page">
      <div className="page-header">
        <div className="header-left">
          <h2>{t('alerts.title')}</h2>
          <p className="header-desc">{t('alerts.pageDesc')}</p>
        </div>
        <div className="header-actions">
          <button 
            className="btn-analyze"
            onClick={() => setShowAnalyzeModal(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
              <path d="M11 8v6M8 11h6"/>
            </svg>
            {t('alerts.runAnalysis')}
          </button>
        </div>
      </div>

      <div className="alerts-stats-grid">
        <div className="stat-card" onClick={() => setSeverityFilter('')}>
          <span className="stat-icon">📊</span>
          <div className="stat-info">
            <span className="stat-value">{stats.total}</span>
            <span className="stat-label">{t('alerts.total')}</span>
          </div>
        </div>
        <div className="stat-card critical" onClick={() => setSeverityFilter('critical')}>
          <span className="stat-icon">🔴</span>
          <div className="stat-info">
            <span className="stat-value">{stats.critical}</span>
            <span className="stat-label">{t('dashboard.critical')}</span>
          </div>
        </div>
        <div className="stat-card high" onClick={() => setSeverityFilter('high')}>
          <span className="stat-icon">🟠</span>
          <div className="stat-info">
            <span className="stat-value">{stats.high}</span>
            <span className="stat-label">{t('dashboard.high')}</span>
          </div>
        </div>
        <div className="stat-card medium" onClick={() => setSeverityFilter('medium')}>
          <span className="stat-icon">🟡</span>
          <div className="stat-info">
            <span className="stat-value">{stats.medium}</span>
            <span className="stat-label">{t('dashboard.medium')}</span>
          </div>
        </div>
        <div className="stat-card low" onClick={() => setSeverityFilter('low')}>
          <span className="stat-icon">🟢</span>
          <div className="stat-info">
            <span className="stat-value">{stats.low}</span>
            <span className="stat-label">{t('dashboard.low')}</span>
          </div>
        </div>
      </div>

      <div className="alerts-toolbar">
        <div className="toolbar-left">
          <select 
            className="severity-select"
            value={severityFilter} 
            onChange={e => setSeverityFilter(e.target.value)}
          >
            <option value="">{t('alerts.allSeverities')}</option>
            <option value="critical">{t('dashboard.critical')}</option>
            <option value="high">{t('dashboard.high')}</option>
            <option value="medium">{t('dashboard.medium')}</option>
            <option value="low">{t('dashboard.low')}</option>
          </select>
        </div>
        <div className="toolbar-right">
          {selectedAlerts.length > 0 && (
            <div className="batch-actions">
              <span className="selected-count">{selectedAlerts.length} selected</span>
              <button className="btn-batch-resolve" onClick={handleBatchResolve}>
                {t('alerts.resolveSelected')}
              </button>
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>{t('common.loading')}</p>
        </div>
      ) : (
        <div className="alerts-table-container">
          <table className="alerts-table">
            <thead>
              <tr>
                <th className="checkbox-col">
                  <input 
                    type="checkbox" 
                    checked={selectedAlerts.length === alerts.length && alerts.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>ID</th>
                <th>{t('alerts.severity')}</th>
                <th>{t('alerts.rule')}</th>
                <th>{t('alerts.message')}</th>
                <th>{t('alerts.count')}</th>
                <th>{t('alerts.status')}</th>
                <th>{t('alerts.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map(alert => (
                <tr key={alert.id} className={selectedAlerts.includes(alert.id) ? 'selected' : ''}>
                  <td className="checkbox-col">
                    <input 
                      type="checkbox" 
                      checked={selectedAlerts.includes(alert.id)}
                      onChange={() => handleSelectAlert(alert.id)}
                    />
                  </td>
                  <td className="id-col">{alert.id}</td>
                  <td>
                    <span className={`badge ${getSeverityClass(alert.severity)}`}>
                      {alert.severity}
                    </span>
                  </td>
                  <td className="rule-col">{alert.rule_name}</td>
                  <td className="message-col">{alert.message?.substring(0, 100)}...</td>
                  <td className="count-col">{alert.count}</td>
                  <td>
                    <span className={`status-badge ${alert.resolved ? 'resolved' : 'active'}`}>
                      {alert.resolved ? t('alerts.resolved') : t('alerts.active')}
                    </span>
                  </td>
                  <td className="actions-col">
                    {!alert.resolved && (
                      <button 
                        className="btn-resolve"
                        onClick={() => handleResolve(alert.id)}
                      >
                        {t('alerts.resolve')}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {alerts.length === 0 && (
            <div className="empty-state">
              <span className="empty-icon">🛡️</span>
              <p>{t('alerts.noAlerts')}</p>
            </div>
          )}
        </div>
      )}

      {showAnalyzeModal && (
        <div className="modal-overlay" onClick={() => setShowAnalyzeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{t('alerts.runAnalysis')}</h3>
              <button className="close-btn" onClick={() => setShowAnalyzeModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p className="modal-desc">{t('alerts.analysisDesc')}</p>
              
              <div className="analyzer-select-group">
                <label>{t('alerts.selectAnalyzer')}</label>
                <div className="analyzer-options">
                  {[
                    { id: 'brute-force', icon: '🔐', name: t('analyze.bruteForce') },
                    { id: 'login', icon: '🔑', name: t('analyze.login') },
                    { id: 'kerberos', icon: '🎭', name: t('analyze.kerberos') },
                    { id: 'powershell', icon: '⚡', name: t('analyze.powershell') },
                  ].map(analyzer => (
                    <div 
                      key={analyzer.id}
                      className={`analyzer-option ${selectedAnalyzer === analyzer.id ? 'selected' : ''}`}
                      onClick={() => setSelectedAnalyzer(analyzer.id)}
                    >
                      <span className="analyzer-icon">{analyzer.icon}</span>
                      <span className="analyzer-name">{analyzer.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="analysis-summary">
                <h4>{t('alerts.analysisSummary')}</h4>
                <ul>
                  <li>{t('alerts.analysisTarget')}: {selectedAlerts.length > 0 ? `${selectedAlerts.length} ${t('alerts.selectedAlerts')}` : t('alerts.allAlerts')}</li>
                  <li>{t('alerts.analysisScope')}: {severityFilter || t('alerts.allSeverities')}</li>
                </ul>
              </div>

              <div className="modal-actions">
                <button className="btn-cancel" onClick={() => setShowAnalyzeModal(false)}>
                  {t('common.cancel')}
                </button>
                <button className="btn-primary" onClick={handleRunAnalysis} disabled={analyzing}>
                  {analyzing ? (
                    <>
                      <span className="btn-spinner"></span>
                      {t('alerts.analyzing')}
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                      {t('alerts.startAnalysis')}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Alerts