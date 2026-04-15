import { useEffect, useState } from 'react'
import { useI18n } from '../locales/I18n'
import { rulesAPI, RuleInfo } from '../api'

function Rules() {
  const { t } = useI18n()
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
        setError(err.message || t('common.error'))
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

  if (loading) return <div className="rules-page"><div className="loading">{t('common.loading')}</div></div>

  if (error) return <div className="rules-page"><div className="error">{t('common.error')}: {error}</div></div>

  return (
    <div className="rules-page">
      <h2>{t('rules.title')}</h2>
      
      <div className="detail-panel">
        <h3>{t('rules.alertRules', { enabled: enabledCount, total: totalCount })}</h3>
        <p>{t('rules.alertRulesDesc')}</p>
        
        <table className="rules-table">
          <thead>
            <tr>
              <th>{t('rules.name')}</th>
              <th>{t('rules.severity')}</th>
              <th>{t('rules.score')}</th>
              <th>{t('rules.description')}</th>
              <th>{t('rules.mitre')}</th>
              <th>{t('rules.status')}</th>
              <th>{t('rules.actions')}</th>
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
                  <button className="small">{t('rules.edit')}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="detail-panel">
        <h3>{t('rules.correlationRules')}</h3>
        <p>{t('rules.correlationRulesDesc')}</p>
        <button>{t('rules.addCorrelationRule')}</button>
      </div>
    </div>
  )
}

export default Rules