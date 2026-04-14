import { useState } from 'react'

function Settings() {
  const [settings, setSettings] = useState({
    databasePath: './winalog.db',
    logLevel: 'info',
    maxEvents: 1000000,
    retentionDays: 90,
    enableAlerting: true,
    enableLiveCollection: false,
  })

  const handleSave = () => {
    alert('Settings saved (not connected to backend)')
  }

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      
      <div className="detail-panel">
        <h3>Database</h3>
        <div className="setting-group">
          <label>Database Path:</label>
          <input 
            type="text" 
            value={settings.databasePath}
            onChange={e => setSettings({...settings, databasePath: e.target.value})}
          />
        </div>
        <div className="setting-group">
          <label>Event Retention (days):</label>
          <input 
            type="number" 
            value={settings.retentionDays}
            onChange={e => setSettings({...settings, retentionDays: Number(e.target.value)})}
          />
        </div>
        <div className="setting-group">
          <label>Max Events:</label>
          <input 
            type="number" 
            value={settings.maxEvents}
            onChange={e => setSettings({...settings, maxEvents: Number(e.target.value)})}
          />
        </div>
      </div>

      <div className="detail-panel">
        <h3>Alerts</h3>
        <div className="setting-group checkbox">
          <label>
            <input 
              type="checkbox" 
              checked={settings.enableAlerting}
              onChange={e => setSettings({...settings, enableAlerting: e.target.checked})}
            />
            Enable Alerting
          </label>
        </div>
      </div>

      <div className="detail-panel">
        <h3>Collection</h3>
        <div className="setting-group checkbox">
          <label>
            <input 
              type="checkbox" 
              checked={settings.enableLiveCollection}
              onChange={e => setSettings({...settings, enableLiveCollection: e.target.checked})}
            />
            Enable Live Collection
          </label>
        </div>
      </div>

      <div className="detail-panel">
        <h3>Logging</h3>
        <div className="setting-group">
          <label>Log Level:</label>
          <select 
            value={settings.logLevel}
            onChange={e => setSettings({...settings, logLevel: e.target.value})}
          >
            <option value="debug">Debug</option>
            <option value="info">Info</option>
            <option value="warn">Warning</option>
            <option value="error">Error</option>
          </select>
        </div>
      </div>

      <div className="actions">
        <button onClick={handleSave}>Save Settings</button>
      </div>

      <style>{`
        .setting-group {
          margin-bottom: 15px;
        }
        .setting-group label {
          display: block;
          margin-bottom: 5px;
          color: #888;
        }
        .setting-group input[type="text"],
        .setting-group input[type="number"],
        .setting-group select {
          width: 100%;
          max-width: 400px;
          padding: 8px;
          border: 1px solid #333;
          border-radius: 4px;
          background: #16213e;
          color: #eee;
        }
        .setting-group.checkbox label {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }
        .actions {
          margin-top: 20px;
        }
      `}</style>
    </div>
  )
}

export default Settings
