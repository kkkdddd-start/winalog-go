import { useEffect, useState } from 'react'
import { rulesAPI, RuleInfo } from '../api'

function Rules() {
  const [rules, setRules] = useState<RuleInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalCount, setTotalCount] = useState(0)
  const [enabledCount, setEnabledCount] = useState(0)
  const [filterSeverity, setFilterSeverity] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

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

  const handleToggle = (name: string, currentEnabled: boolean) => {
    rulesAPI.toggle(name, !currentEnabled)
      .then(() => {
        setRules(rules.map(r => 
          r.name === name ? { ...r, enabled: !currentEnabled } : r
        ))
        setEnabledCount(prev => currentEnabled ? prev - 1 : prev + 1)
      })
      .catch(err => {
        console.error('Failed to toggle rule:', err)
      })
  }

  const handleEditRule = (rule: RuleInfo) => {
    const newDescription = prompt('Edit rule description:', rule.description)
    if (newDescription !== null && newDescription !== rule.description) {
      rulesAPI.save({ ...rule, description: newDescription })
        .then(() => {
          setRules(rules.map(r => r.name === rule.name ? { ...r, description: newDescription } : r))
        })
        .catch(err => {
          console.error('Failed to update rule:', err)
        })
    }
  }

  const handleAddRule = () => {
    const name = prompt('Enter rule name:')
    if (!name) return
    const description = prompt('Enter rule description:') || ''
    const severity = prompt('Enter severity (critical/high/medium/low):', 'medium') || 'medium'
    rulesAPI.save({ name, description, severity, enabled: true, score: 50 })
      .then(() => {
        fetchRules()
      })
      .catch(err => {
        console.error('Failed to add rule:', err)
      })
  }

  const getSeverityClass = (severity: string) => {
    switch (severity?.toLowerCase()) {
      case 'critical': return 'severity-critical'
      case 'high': return 'severity-high'
      case 'medium': return 'severity-medium'
      case 'low': return 'severity-low'
      default: return 'severity-info'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity?.toLowerCase()) {
      case 'critical': return '🔴'
      case 'high': return '🟠'
      case 'medium': return '🟡'
      case 'low': return '🟢'
      default: return '⚪'
    }
  }

  const filteredRules = rules.filter(rule => {
    if (filterSeverity !== 'all' && rule.severity?.toLowerCase() !== filterSeverity) return false
    if (filterStatus === 'enabled' && !rule.enabled) return false
    if (filterStatus === 'disabled' && rule.enabled) return false
    if (searchQuery && !rule.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  if (loading) return (
    <div className="rules-page">
      <div className="loading-state">
        <div className="spinner"></div>
        <div>Loading rules...</div>
      </div>
    </div>
  )

  if (error) return (
    <div className="rules-page">
      <div className="error-state">{error}</div>
    </div>
  )

  return (
    <div className="rules-page">
      <div className="page-header">
        <h2>Detection Rules</h2>
        <div className="header-actions">
          <button className="btn-secondary" onClick={handleAddRule}>Add Rule</button>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <div className="stat-value">{totalCount}</div>
            <div className="stat-label">Total Rules</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon enabled">✓</div>
          <div className="stat-content">
            <div className="stat-value enabled">{enabledCount}</div>
            <div className="stat-label">Enabled</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon disabled">✗</div>
          <div className="stat-content">
            <div className="stat-value disabled">{totalCount - enabledCount}</div>
            <div className="stat-label">Disabled</div>
          </div>
        </div>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search rules..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <select 
          value={filterSeverity} 
          onChange={e => setFilterSeverity(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Severities</option>
          <option value="critical">Critical</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select 
          value={filterStatus} 
          onChange={e => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Status</option>
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>

      <div className="rules-grid">
        {filteredRules.map(rule => (
          <div key={rule.id} className={`rule-card ${rule.enabled ? '' : 'disabled'}`}>
            <div className="rule-header">
              <div className="rule-title">
                <span className={`severity-dot ${getSeverityClass(rule.severity)}`}></span>
                <span className="rule-name">{rule.name}</span>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={rule.enabled}
                  onChange={() => handleToggle(rule.name, rule.enabled)}
                />
                <span className="slider"></span>
              </label>
            </div>
            
            <div className="rule-meta">
              <span className={`severity-badge ${getSeverityClass(rule.severity)}`}>
                {getSeverityIcon(rule.severity)} {rule.severity}
              </span>
              <span className="score-badge">Score: {rule.score}</span>
            </div>
            
            <p className="rule-description">{rule.description}</p>
            
            <div className="rule-footer">
              <div className="mitre-tags">
                {rule.mitre_attack?.map(m => (
                  <span key={m} className="mitre-tag">{m}</span>
                ))}
              </div>
              <button className="rule-action" onClick={() => handleEditRule(rule)}>Edit</button>
            </div>
          </div>
        ))}
      </div>

      {filteredRules.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🛡️</div>
          <div>No rules match your filters</div>
        </div>
      )}

      <style>{`
        .rules-page {
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
        
        .rules-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .btn-secondary {
          padding: 10px 20px;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid #00d9ff;
          border-radius: 6px;
          color: #00d9ff;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          background: rgba(0, 217, 255, 0.2);
        }
        
        .stats-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .stat-icon {
          font-size: 24px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        .stat-icon.enabled {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }
        
        .stat-icon.disabled {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
        }
        
        .stat-value.enabled { color: #22c55e; }
        .stat-value.disabled { color: #ef4444; }
        
        .stat-label {
          font-size: 13px;
          color: #888;
          margin-top: 4px;
        }
        
        .filter-bar {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .search-input {
          flex: 1;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .filter-select {
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
        }
        
        .rules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 16px;
          flex: 1;
          overflow-y: auto;
        }
        
        .rule-card {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.2s;
        }
        
        .rule-card:hover {
          border-color: #00d9ff;
          transform: translateY(-2px);
        }
        
        .rule-card.disabled {
          opacity: 0.6;
        }
        
        .rule-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .rule-title {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .severity-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        .severity-dot.severity-critical { background: #ef4444; box-shadow: 0 0 8px #ef4444; }
        .severity-dot.severity-high { background: #f97316; box-shadow: 0 0 8px #f97316; }
        .severity-dot.severity-medium { background: #eab308; box-shadow: 0 0 8px #eab308; }
        .severity-dot.severity-low { background: #22c55e; box-shadow: 0 0 8px #22c55e; }
        .severity-dot.severity-info { background: #6b7280; }
        
        .rule-name {
          font-weight: 600;
          color: #fff;
          font-size: 15px;
        }
        
        .switch {
          position: relative;
          width: 44px;
          height: 24px;
        }
        
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background: #333;
          border-radius: 24px;
          transition: 0.3s;
        }
        
        .slider:before {
          content: "";
          position: absolute;
          width: 18px;
          height: 18px;
          left: 3px;
          bottom: 3px;
          background: #fff;
          border-radius: 50%;
          transition: 0.3s;
        }
        
        input:checked + .slider {
          background: #22c55e;
        }
        
        input:checked + .slider:before {
          transform: translateX(20px);
        }
        
        .rule-meta {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        
        .severity-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .severity-badge.severity-critical { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
        .severity-badge.severity-high { background: rgba(249, 115, 22, 0.2); color: #f97316; }
        .severity-badge.severity-medium { background: rgba(234, 179, 8, 0.2); color: #eab308; }
        .severity-badge.severity-low { background: rgba(34, 197, 94, 0.2); color: #22c55e; }
        .severity-badge.severity-info { background: rgba(107, 114, 128, 0.2); color: #9ca3af; }
        
        .score-badge {
          font-size: 12px;
          color: #888;
          padding: 4px 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        .rule-description {
          color: #888;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }
        
        .rule-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid #333;
        }
        
        .mitre-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        
        .mitre-tag {
          font-size: 11px;
          padding: 3px 8px;
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border-radius: 4px;
          font-family: monospace;
        }
        
        .rule-action {
          padding: 6px 12px;
          background: transparent;
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .rule-action:hover {
          border-color: #00d9ff;
          color: #00d9ff;
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
        
        .error-state {
          padding: 40px;
          text-align: center;
          color: #ef4444;
        }
        
        .empty-icon {
          font-size: 48px;
        }
      `}</style>
    </div>
  )
}

export default Rules
