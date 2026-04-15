import { useEffect, useState } from 'react'
import { rulesAPI, RuleInfo } from '../api'

function Rules() {
  const [rules, setRules] = useState<RuleInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalCount, setTotalCount] = useState(0)
  const [enabledCount, setEnabledCount] = useState(0)

  const fetchRules = () => {
    rulesAPI.list()
      .then(res => {
        setRules(res.data.rules || [])
        setTotalCount(res.data.total_count || 0)
        setEnabledCount(res.data.enabled_count || 0)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || 'Failed to load rules')
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchRules()
  }, [])

  const handleToggle = (name: string, enabled: boolean) => {
    rulesAPI.toggle(name, enabled)
      .then(() => {
        setRules(rules.map(r => 
          r.name === name ? { ...r, enabled: !enabled } : r
        ))
        setEnabledCount(prev => enabled ? prev - 1 : prev + 1)
      })
      .catch(err => {
        console.error('Failed to toggle rule:', err)
      })
  }

  const getSeverityClass = (severity: string) => {
    switch (severity?.toLowerCase()) {
      case 'critical': return 'severity-critical'
      case 'high': return 'severity-high'
      case 'medium': return 'severity-medium'
      case 'low': return 'severity-low'
      default: return ''
    }
  }

  if (loading) return <div className="rules-page"><div className="loading">Loading...</div></div>

  if (error) return <div className="rules-page"><div className="error">Error: {error}</div></div>

  return (
    <div className="rules-page">
      <h2>Rule Management</h2>
      
      <div className="detail-panel">
        <h3>Alert Rules ({enabledCount}/{totalCount} enabled)</h3>
        <p>Configure and manage alert rules for security event detection.</p>
        
        <table className="rules-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Severity</th>
              <th>Score</th>
              <th>Description</th>
              <th>MITRE</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rules.map(rule => (
              <tr key={rule.id}>
                <td>{rule.name}</td>
                <td>
                  <span className={`badge ${getSeverityClass(rule.severity)}`}>
                    {rule.severity}
                  </span>
                </td>
                <td>{rule.score}</td>
                <td>{rule.description?.substring(0, 50)}...</td>
                <td>
                  {rule.mitre_attack?.map(m => (
                    <code key={m} style={{marginRight: '4px'}}>{m}</code>
                  ))}
                </td>
                <td>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={rule.enabled}
                      onChange={() => handleToggle(rule.name, rule.enabled)}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <button className="small">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="detail-panel">
        <h3>Correlation Rules</h3>
        <p>Define rules to correlate events across multiple sources.</p>
        <button>Add Correlation Rule</button>
      </div>

      <style>{`
        .rules-table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
        }
        .rules-table th, .rules-table td {
          border: 1px solid #333;
          padding: 10px;
          text-align: left;
          font-size: 0.9em;
        }
        .rules-table th {
          background: #1a1a2e;
          font-weight: bold;
        }
        .switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 20px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #555;
          border-radius: 20px;
          transition: 0.3s;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 14px;
          width: 14px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: 0.3s;
        }
        input:checked + .slider {
          background-color: #00d9ff;
        }
        input:checked + .slider:before {
          transform: translateX(20px);
        }
        button.small {
          padding: 4px 8px;
          font-size: 0.85em;
        }
      `}</style>
    </div>
  )
}

export default Rules