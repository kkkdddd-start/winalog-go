import { useState, useEffect } from 'react'
import { useI18n } from '../locales/I18n'
import { suppressAPI } from '../api'

interface SuppressRule {
  id: number
  name: string
  conditions: SuppressCondition[]
  duration: number
  scope: string
  enabled: boolean
  expires_at: string
  created_at: string
}

interface SuppressCondition {
  field: string
  operator: string
  value: any
}

function Suppress() {
  const { t } = useI18n()
  const [rules, setRules] = useState<SuppressRule[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    duration: 60,
    scope: 'global',
    expires_at: '',
  })

  useEffect(() => {
    loadRules()
  }, [])

  const loadRules = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await suppressAPI.list()
      const data = res.data
      setRules(data.rules || [])
    } catch (err: any) {
      setError(err.message || 'Failed to load suppress rules')
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async () => {
    setLoading(true)
    setError('')
    try {
      await suppressAPI.create({
        name: formData.name,
        duration: formData.duration,
        scope: formData.scope,
        expires_at: formData.expires_at,
        conditions: [],
        enabled: true,
      })
      setShowModal(false)
      setFormData({ name: '', duration: 60, scope: 'global', expires_at: '' })
      loadRules()
    } catch (err: any) {
      setError(err.message || 'Failed to create rule')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm(t('suppress.confirmDelete'))) return

    setLoading(true)
    setError('')
    try {
      await suppressAPI.delete(id)
      loadRules()
    } catch (err: any) {
      setError(err.message || 'Failed to delete rule')
    } finally {
      setLoading(false)
    }
  }

  const handleToggle = async (id: number, enabled: boolean) => {
    setLoading(true)
    setError('')
    try {
      await suppressAPI.toggle(id, !enabled)
      loadRules()
    } catch (err: any) {
      setError(err.message || 'Failed to toggle rule')
    } finally {
      setLoading(false)
    }
  }

  const getScopeLabel = (scope: string) => {
    const labels: Record<string, string> = {
      global: t('suppress.scopeGlobal'),
      user: t('suppress.scopeUser'),
      computer: t('suppress.scopeComputer'),
    }
    return labels[scope] || scope
  }

  const getDurationLabel = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`
    if (minutes < 1440) return `${Math.floor(minutes / 60)}h`
    return `${Math.floor(minutes / 1440)}d`
  }

  return (
    <div className="suppress-page">
      <div className="page-header">
        <h2>{t('suppress.title')}</h2>
        <p className="page-desc">{t('suppress.pageDesc')}</p>
      </div>

      <div className="suppress-toolbar">
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          {t('suppress.addRule')}
        </button>
      </div>

      {error && (
        <div className="error-panel">
          <span className="error-icon">⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {loading && rules.length === 0 ? (
        <div className="loading-state">
          <span className="spinner"></span>
          <span>{t('common.loading')}</span>
        </div>
      ) : rules.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h3>{t('suppress.noRules')}</h3>
          <p>{t('suppress.noRulesDesc')}</p>
        </div>
      ) : (
        <div className="rules-list">
          <table className="rules-table">
            <thead>
              <tr>
                <th>{t('suppress.name')}</th>
                <th>{t('suppress.scope')}</th>
                <th>{t('suppress.duration')}</th>
                <th>{t('suppress.expiresAt')}</th>
                <th>{t('suppress.status')}</th>
                <th>{t('suppress.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {rules.map(rule => (
                <tr key={rule.id} className={!rule.enabled ? 'disabled' : ''}>
                  <td className="name-cell">
                    <span className="rule-name">{rule.name}</span>
                  </td>
                  <td>
                    <span className="scope-badge">{getScopeLabel(rule.scope)}</span>
                  </td>
                  <td>{getDurationLabel(rule.duration)}</td>
                  <td>
                    {rule.expires_at ? new Date(rule.expires_at).toLocaleString() : '-'}
                  </td>
                  <td>
                    <button
                      className={`toggle-btn ${rule.enabled ? 'enabled' : 'disabled'}`}
                      onClick={() => handleToggle(rule.id, rule.enabled)}
                    >
                      {rule.enabled ? t('suppress.enabled') : t('suppress.disabled')}
                    </button>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn-icon delete"
                        onClick={() => handleDelete(rule.id)}
                        title={t('suppress.delete')}
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{t('suppress.addRule')}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>{t('suppress.name')}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('suppress.namePlaceholder')}
                />
              </div>
              <div className="form-group">
                <label>{t('suppress.scope')}</label>
                <select
                  value={formData.scope}
                  onChange={e => setFormData({ ...formData, scope: e.target.value })}
                >
                  <option value="global">{t('suppress.scopeGlobal')}</option>
                  <option value="user">{t('suppress.scopeUser')}</option>
                  <option value="computer">{t('suppress.scopeComputer')}</option>
                </select>
              </div>
              <div className="form-group">
                <label>{t('suppress.duration')}</label>
                <select
                  value={formData.duration}
                  onChange={e => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                >
                  <option value="60">1 hour</option>
                  <option value="360">6 hours</option>
                  <option value="1440">24 hours</option>
                  <option value="10080">7 days</option>
                  <option value="43200">30 days</option>
                </select>
              </div>
              <div className="form-group">
                <label>{t('suppress.expiresAt')}</label>
                <input
                  type="datetime-local"
                  value={formData.expires_at}
                  onChange={e => setFormData({ ...formData, expires_at: e.target.value })}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowModal(false)}>
                {t('common.cancel')}
              </button>
              <button
                className="btn-primary"
                onClick={handleCreate}
                disabled={!formData.name || loading}
              >
                {t('suppress.create')}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="suppress-info">
        <div className="section-header">
          <h3>{t('suppress.about')}</h3>
        </div>
        <div className="info-content">
          <p>{t('suppress.aboutDesc')}</p>
        </div>
      </div>
    </div>
  )
}

export default Suppress
