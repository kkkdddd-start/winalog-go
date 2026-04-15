import { useState } from 'react'
import { alertsAPI } from '../api'

interface Finding {
  description: string
  severity: string
  score: number
  rule_name?: string
  mitre_attack?: string
}

interface AnalyzeResult {
  type: string
  severity: string
  score: number
  summary: string
  findings: Finding[]
}

function Analyze() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalyzeResult | null>(null)
  const [selectedAnalyzer, setSelectedAnalyzer] = useState('brute-force')
  const [hours, setHours] = useState(24)
  const [error, setError] = useState('')

  const analyzers = [
    { id: 'brute-force', name: 'Brute Force Detection', desc: 'Detect brute force login attacks' },
    { id: 'login', name: 'Login Analyzer', desc: 'Analyze login activity patterns' },
    { id: 'kerberos', name: 'Kerberos Analyzer', desc: 'Analyze Kerberos ticket activity' },
    { id: 'powershell', name: 'PowerShell Analyzer', desc: 'Analyze PowerShell command activity' },
  ]

  const handleRun = async () => {
    setLoading(true)
    setError('')
    try {
      const stats = await alertsAPI.stats()
      const mockResult: AnalyzeResult = {
        type: selectedAnalyzer,
        severity: stats.data.TotalCount > 0 ? 'medium' : 'low',
        score: Math.min(stats.data.TotalCount * 0.1, 10),
        summary: `Analyzed events from the last ${hours} hours`,
        findings: [],
      }
      setResult(mockResult)
    } catch (err) {
      setError('Failed to run analyzer')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="analyze-page">
      <h2>Security Analyzers</h2>

      <div className="analyzer-selector">
        <h3>Select Analyzer</h3>
        <div className="analyzer-grid">
          {analyzers.map(analyzer => (
            <div
              key={analyzer.id}
              className={`analyzer-card ${selectedAnalyzer === analyzer.id ? 'selected' : ''}`}
              onClick={() => setSelectedAnalyzer(analyzer.id)}
            >
              <h4>{analyzer.name}</h4>
              <p>{analyzer.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="analyzer-controls">
        <label>
          Time Window (hours):
          <input
            type="number"
            value={hours}
            onChange={e => setHours(Number(e.target.value))}
            min={1}
            max={168}
          />
        </label>
        <button onClick={handleRun} disabled={loading}>
          {loading ? 'Running...' : 'Run Analyzer'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {result && (
        <div className="analyzer-results">
          <h3>Results</h3>
          <div className="result-summary">
            <div className="result-item">
              <span className="label">Type:</span>
              <span className="value">{result.type}</span>
            </div>
            <div className="result-item">
              <span className="label">Severity:</span>
              <span className={`severity-${result.severity}`}>{result.severity}</span>
            </div>
            <div className="result-item">
              <span className="label">Score:</span>
              <span className="value">{result.score.toFixed(2)}</span>
            </div>
          </div>
          <div className="result-summary-text">
            <p>{result.summary}</p>
          </div>
          {result.findings.length > 0 && (
            <div className="findings">
              <h4>Findings ({result.findings.length})</h4>
              <ul>
                {result.findings.map((f, i) => (
                  <li key={i}>
                    <span className={`severity-${f.severity}`}>{f.severity}</span>
                    {' '}{f.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="analyzer-info">
        <h3>About Analyzers</h3>
        <ul>
          <li><strong>Brute Force Detection:</strong> Analyzes failed login attempts to detect password brute force attacks</li>
          <li><strong>Login Analyzer:</strong> Examines login patterns including local, RDP, and network logins</li>
          <li><strong>Kerberos Analyzer:</strong> Detects golden ticket, silver ticket, and Kerberos-related attacks</li>
          <li><strong>PowerShell Analyzer:</strong> Identifies suspicious PowerShell execution patterns</li>
        </ul>
      </div>
    </div>
  )
}

export default Analyze
