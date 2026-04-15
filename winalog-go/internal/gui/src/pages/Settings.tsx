import { useState } from 'react'
import { useI18n } from '../locales/I18n'

function Settings() {
  const { t } = useI18n()
  const [settings, setSettings] = useState({
    databasePath: './winalog.db',
    logLevel: 'info',
    maxEvents: 1000000,
    retentionDays: 90,
    enableAlerting: true,
    enableLiveCollection: false,
  })

  const handleSave = () => {
    alert(t('settings.saved'))
  }

  return (
    <div className="settings-page">
      <h2>{t('settings.title')}</h2>
      
      <div className="detail-panel">
        <h3>{t('settings.database')}</h3>
        <div className="setting-group">
          <label>{t('settings.databasePath')}:</label>
          <input 
            type="text" 
            value={settings.databasePath}
            onChange={e => setSettings({...settings, databasePath: e.target.value})}
          />
        </div>
        <div className="setting-group">
          <label>{t('settings.eventRetention')}:</label>
          <input 
            type="number" 
            value={settings.retentionDays}
            onChange={e => setSettings({...settings, retentionDays: Number(e.target.value)})}
          />
        </div>
        <div className="setting-group">
          <label>{t('settings.maxEvents')}:</label>
          <input 
            type="number" 
            value={settings.maxEvents}
            onChange={e => setSettings({...settings, maxEvents: Number(e.target.value)})}
          />
        </div>
      </div>

      <div className="detail-panel">
        <h3>{t('settings.alerts')}</h3>
        <div className="setting-group checkbox">
          <label>
            <input 
              type="checkbox" 
              checked={settings.enableAlerting}
              onChange={e => setSettings({...settings, enableAlerting: e.target.checked})}
            />
            {t('settings.enableAlerting')}
          </label>
        </div>
      </div>

      <div className="detail-panel">
        <h3>{t('settings.collection')}</h3>
        <div className="setting-group checkbox">
          <label>
            <input 
              type="checkbox" 
              checked={settings.enableLiveCollection}
              onChange={e => setSettings({...settings, enableLiveCollection: e.target.checked})}
            />
            {t('settings.enableLiveCollection')}
          </label>
        </div>
      </div>

      <div className="detail-panel">
        <h3>{t('settings.logging')}</h3>
        <div className="setting-group">
          <label>{t('settings.logLevel')}:</label>
          <select 
            value={settings.logLevel}
            onChange={e => setSettings({...settings, logLevel: e.target.value})}
          >
            <option value="debug">{t('settings.debug')}</option>
            <option value="info">{t('settings.info')}</option>
            <option value="warn">{t('settings.warn')}</option>
            <option value="error">{t('settings.error')}</option>
          </select>
        </div>
      </div>

      <div className="actions">
        <button onClick={handleSave} className="btn-primary">{t('settings.save')}</button>
      </div>
    </div>
  )
}

export default Settings