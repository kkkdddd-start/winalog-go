import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../locales/I18n'
import { analyzeAPI } from '../api'

interface Finding {
  description: string
  severity: string
  score: number
  rule_name?: string
  mitre_attack?: string[]
  evidence?: EvidenceItem[]
}

interface EvidenceItem {
  event_id: number
  timestamp: string
  user: string
  computer: string
  message: string
}

interface AnalyzeResult {
  type: string
  severity: string
  score: number
  summary: string
  findings: Finding[]
}

interface Analyzer {
  id: string
  name: string
  desc: string
  icon: string
  category: string
  recommended: boolean
}

const analyzerIcons: Record<string, string> = {
  'brute-force': '🔐',
  'login': '🔑',
  'kerberos': '🎭',
  'powershell': '⚡',
  'lateral-movement': '🚀',
  'data-exfil': '📤',
  'persistence': '🎯',
  'privilege-escalation': '⬆️',
  'malware': '🦠',
  'anomaly': '🔍',
}

const findingDescMap: Record<string, Record<string, string>> = {
  'en': {
    'Possible compromised account due to successful login after multiple failures': '可能因多次登录失败后成功登录而导致账户被盗',
    'High number of failed login attempts': '大量登录失败尝试',
    'Suspicious IP with high failed login count targeting multiple users': '可疑IP大量登录失败尝试并针对多个用户',
  },
  'zh': {
    'Possible compromised account due to successful login after multiple failures': '可能因多次登录失败后成功登录而导致账户被盗',
    'High number of failed login attempts': '大量登录失败尝试',
    'Suspicious IP with high failed login count targeting multiple users': '可疑IP大量登录失败尝试并针对多个用户',
  },
}

const getLocalizedFindingDesc = (desc: string, locale: string = 'zh'): string => {
  const lang = locale.startsWith('zh') ? 'zh' : 'en'
  return findingDescMap[lang][desc] || desc
}

const analyzerCategories = [
  { id: 'authentication', name: 'Authentication' },
  { id: 'execution', name: 'Execution' },
  { id: 'lateral-movement', name: 'Lateral Movement' },
  { id: 'persistence', name: 'Persistence' },
  { id: 'collection', name: 'Collection' },
]

function Analyze() {
  const { t, locale } = useI18n()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalyzeResult | null>(null)
  const [selectedAnalyzer, setSelectedAnalyzer] = useState('brute-force')
  const [hours, setHours] = useState(24)
  const [error, setError] = useState('')

  const analyzers: Analyzer[] = [
    { id: 'brute_force', name: t('analyze.bruteForce'), desc: t('analyze.bruteForceDesc'), icon: analyzerIcons['brute-force'], category: 'authentication', recommended: true },
    { id: 'login', name: t('analyze.login'), desc: t('analyze.loginDesc'), icon: analyzerIcons['login'], category: 'authentication', recommended: false },
    { id: 'kerberos', name: t('analyze.kerberos'), desc: t('analyze.kerberosDesc'), icon: analyzerIcons['kerberos'], category: 'authentication', recommended: false },
    { id: 'powershell', name: t('analyze.powershell'), desc: t('analyze.powershellDesc'), icon: analyzerIcons['powershell'], category: 'execution', recommended: true },
    { id: 'lateral_movement', name: t('analyze.lateralMovement'), desc: t('analyze.lateralMovementDesc'), icon: analyzerIcons['lateral-movement'], category: 'lateral-movement', recommended: false },
    { id: 'data_exfiltration', name: t('analyze.dataExfil'), desc: t('analyze.dataExfilDesc'), icon: analyzerIcons['data-exfil'], category: 'collection', recommended: false },
    { id: 'persistence', name: t('analyze.persistence'), desc: t('analyze.persistenceDesc'), icon: analyzerIcons['persistence'], category: 'persistence', recommended: false },
    { id: 'privilege_escalation', name: t('analyze.privilegeEscalation'), desc: t('analyze.privilegeEscalationDesc'), icon: analyzerIcons['privilege-escalation'], category: 'privilege-escalation', recommended: false },
  ]

  const handleRun = async () => {
    setLoading(true)
    setError('')
    try {
      const analyzerType = selectedAnalyzer.replace(/_/g, '-')
      const res = await analyzeAPI.run(analyzerType, { hours })
      setResult(res.data)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to run analyzer')
    } finally {
      setLoading(false)
    }
  }

  const groupedAnalyzers = analyzers.reduce((acc, analyzer) => {
    if (!acc[analyzer.category]) acc[analyzer.category] = []
    acc[analyzer.category].push(analyzer)
    return acc
  }, {} as Record<string, Analyzer[]>)

  return (
    <div className="analyze-page">
      <div className="page-header">
        <h2>{t('analyze.title')}</h2>
        <p className="page-desc">{t('analyze.pageDesc')}</p>
      </div>

      <div className="analyze-grid">
        <div className="analyzer-section">
          <div className="section-header">
            <h3>{t('analyze.selectAnalyzer')}</h3>
          </div>

          {Object.entries(groupedAnalyzers).map(([category, items]) => (
            <div key={category} className="analyzer-category">
              <div className="category-header">
                {analyzerCategories.find(c => c.id === category)?.name || category}
              </div>
              <div className="analyzer-list">
                {items.map(analyzer => (
                  <div
                    key={analyzer.id}
                    className={`analyzer-card ${selectedAnalyzer === analyzer.id ? 'selected' : ''}`}
                    onClick={() => setSelectedAnalyzer(analyzer.id)}
                  >
                    <div className="analyzer-icon">{analyzer.icon}</div>
                    <div className="analyzer-content">
                      <div className="analyzer-header">
                        <span className="analyzer-name">{analyzer.name}</span>
                        {analyzer.recommended && (
                          <span className="recommended-badge">{t('analyze.recommended')}</span>
                        )}
                      </div>
                      <p className="analyzer-desc">{analyzer.desc}</p>
                    </div>
                    <div className="select-indicator">
                      {selectedAnalyzer === analyzer.id && '✓'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="config-section">
          <div className="section-header">
            <h3>{t('analyze.configuration')}</h3>
          </div>

          <div className="config-card">
            <div className="config-item">
              <label>{t('analyze.selectedAnalyzer')}</label>
              <div className="selected-analyzer-display">
                <span className="analyzer-icon">{analyzerIcons[selectedAnalyzer]}</span>
                <span>{analyzers.find(a => a.id === selectedAnalyzer)?.name}</span>
              </div>
            </div>

            <div className="config-item">
              <label>{t('analyze.timeWindow')}</label>
              <div className="time-selector">
                <button
                  className={hours === 1 ? 'active' : ''}
                  onClick={() => setHours(1)}
                >1h</button>
                <button
                  className={hours === 6 ? 'active' : ''}
                  onClick={() => setHours(6)}
                >6h</button>
                <button
                  className={hours === 24 ? 'active' : ''}
                  onClick={() => setHours(24)}
                >24h</button>
                <button
                  className={hours === 72 ? 'active' : ''}
                  onClick={() => setHours(72)}
                >72h</button>
                <button
                  className={hours === 168 ? 'active' : ''}
                  onClick={() => setHours(168)}
                >7d</button>
              </div>
            </div>

            <button
              onClick={handleRun}
              disabled={loading}
              className="btn-primary btn-run"
            >
              {loading ? (
                <>
                  <span className="btn-spinner"></span>
                  {t('analyze.running')}
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  {t('analyze.runAnalyzer')}
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

          <div className="quick-actions">
            <h4>{t('analyze.quickActions')}</h4>
            <div className="quick-buttons">
              <button 
                className="quick-btn"
                onClick={() => navigate('/timeline')}
              >
                📊 {t('analyze.viewTimeline')}
              </button>
              <button 
                className="quick-btn"
                onClick={() => navigate('/alerts')}
              >
                🔔 {t('analyze.viewAlerts')}
              </button>
              <button 
                className="quick-btn"
                onClick={() => navigate('/persistence')}
              >
                🎯 {t('analyze.detectPersistence')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {result && (
        <div className="results-section">
          <div className="section-header">
            <h3>{t('analyze.results')}</h3>
          </div>

          <div className="results-grid">
            <div className="result-summary-card">
              <div className="result-header">
                <span className="result-icon">{analyzerIcons[result.type]}</span>
                <span className="result-type">{analyzers.find(a => a.id === result.type)?.name}</span>
              </div>
              <div className="result-stats">
                <div className="stat-item">
                  <span className="stat-label">{t('analyze.severity')}</span>
                  <span className={`severity-badge severity-${result.severity}`}>
                    {result.severity.toUpperCase()}
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">{t('analyze.score')}</span>
                  <span className="score-value">{result.score.toFixed(1)}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">{t('analyze.findings')}</span>
                  <span className="findings-count">{result.findings.length}</span>
                </div>
              </div>
              <p className="result-summary">{result.summary}</p>
            </div>

            {result.findings.length > 0 && (
              <div className="findings-card">
                <h4>{t('analyze.findingsList')}</h4>
                <div className="findings-list">
                  {result.findings.map((f, i) => (
                    <div key={i} className="finding-item">
                      <div className="finding-header">
                        <span className={`severity-indicator severity-${f.severity}`}></span>
                        <span className="finding-desc">{getLocalizedFindingDesc(f.description, locale)}</span>
                      </div>
                      <div className="finding-meta">
                        {f.rule_name && <span className="rule-name">{f.rule_name}</span>}
                        <span className="finding-score">Score: {f.score.toFixed(1)}</span>
                        {f.evidence && f.evidence.length > 0 && (
                          <span className="evidence-count">{f.evidence.length} events</span>
                        )}
                      </div>
                      {f.evidence && f.evidence.length > 0 && (
                        <div className="evidence-list">
                          <div className="evidence-header">{t('analyze.relatedEvents')}</div>
                          {f.evidence.slice(0, 5).map((e, j) => (
                            <div key={j} className="evidence-item">
                              <span className="evidence-time">{new Date(e.timestamp).toLocaleString()}</span>
                              <span className="evidence-user">{e.user || '-'}</span>
                              <span className="evidence-computer">{e.computer || '-'}</span>
                              <span className="evidence-msg" title={e.message}>
                                {e.message?.substring(0, 80)}{e.message && e.message.length > 80 ? '...' : ''}
                              </span>
                            </div>
                          ))}
                          {f.evidence.length > 5 && (
                            <div className="evidence-more">+{f.evidence.length - 5} more events</div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="analyzer-info">
        <div className="section-header">
          <h3>{t('analyze.aboutAnalyzers')}</h3>
        </div>
        <div className="info-grid">
          {analyzers.slice(0, 4).map(analyzer => (
            <div key={analyzer.id} className="info-card">
              <div className="info-icon">{analyzer.icon}</div>
              <div className="info-content">
                <h4>{analyzer.name}</h4>
                <p>{analyzer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Analyze