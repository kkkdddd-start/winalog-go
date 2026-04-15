import { useState } from 'react'

function Settings() {
  const [activeTab, setActiveTab] = useState('general')
  const [saved, setSaved] = useState(false)
  
  const [settings, setSettings] = useState({
    databasePath: './winalog.db',
    logLevel: 'info',
    maxEvents: 1000000,
    retentionDays: 90,
    enableAlerting: true,
    enableLiveCollection: false,
    enableAutoUpdate: false,
    apiPort: 8080,
    apiHost: '0.0.0.0',
    corsEnabled: true,
    maxImportFileSize: 1024,
    exportDirectory: './exports',
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleChange = (key: string, value: any) => {
    setSettings({...settings, [key]: value})
  }

  return (
    <div className="settings-page">
      <div className="page-header">
        <h2>Settings</h2>
        {saved && <span className="save-indicator">✓ Saved</span>}
      </div>

      <div className="settings-layout">
        <div className="settings-nav">
          <button 
            className={`nav-item ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            <span className="nav-icon">⚙️</span>
            General
          </button>
          <button 
            className={`nav-item ${activeTab === 'database' ? 'active' : ''}`}
            onClick={() => setActiveTab('database')}
          >
            <span className="nav-icon">💾</span>
            Database
          </button>
          <button 
            className={`nav-item ${activeTab === 'api' ? 'active' : ''}`}
            onClick={() => setActiveTab('api')}
          >
            <span className="nav-icon">🔌</span>
            API Server
          </button>
          <button 
            className={`nav-item ${activeTab === 'collection' ? 'active' : ''}`}
            onClick={() => setActiveTab('collection')}
          >
            <span className="nav-icon">📡</span>
            Collection
          </button>
          <button 
            className={`nav-item ${activeTab === 'advanced' ? 'active' : ''}`}
            onClick={() => setActiveTab('advanced')}
          >
            <span className="nav-icon">🔧</span>
            Advanced
          </button>
        </div>

        <div className="settings-content">
          {activeTab === 'general' && (
            <div className="settings-section">
              <div className="section-header">
                <h3>General Settings</h3>
                <p>Configure basic application settings</p>
              </div>
              
              <div className="setting-card">
                <div className="setting-info">
                  <label>Log Level</label>
                  <p>Minimum severity level for logging</p>
                </div>
                <select 
                  value={settings.logLevel}
                  onChange={e => handleChange('logLevel', e.target.value)}
                >
                  <option value="debug">Debug</option>
                  <option value="info">Info</option>
                  <option value="warn">Warning</option>
                  <option value="error">Error</option>
                </select>
              </div>

              <div className="setting-card">
                <div className="setting-info">
                  <label>Export Directory</label>
                  <p>Default directory for exported files</p>
                </div>
                <input
                  type="text"
                  value={settings.exportDirectory}
                  onChange={e => handleChange('exportDirectory', e.target.value)}
                  className="text-input"
                />
              </div>

              <div className="setting-card">
                <div className="setting-info">
                  <label>Auto Update Rules</label>
                  <p>Automatically update detection rules</p>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={settings.enableAutoUpdate}
                    onChange={e => handleChange('enableAutoUpdate', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="settings-section">
              <div className="section-header">
                <h3>Database Settings</h3>
                <p>Configure database storage and retention</p>
              </div>
              
              <div className="setting-card">
                <div className="setting-info">
                  <label>Database Path</label>
                  <p>Path to SQLite database file</p>
                </div>
                <input
                  type="text"
                  value={settings.databasePath}
                  onChange={e => handleChange('databasePath', e.target.value)}
                  className="text-input"
                />
              </div>

              <div className="setting-card">
                <div className="setting-info">
                  <label>Event Retention (days)</label>
                  <p>Automatically delete events older than this</p>
                </div>
                <input
                  type="number"
                  value={settings.retentionDays}
                  onChange={e => handleChange('retentionDays', Number(e.target.value))}
                  className="number-input"
                  min="1"
                  max="365"
                />
              </div>

              <div className="setting-card">
                <div className="setting-info">
                  <label>Maximum Events</label>
                  <p>Maximum number of events to store</p>
                </div>
                <input
                  type="number"
                  value={settings.maxEvents}
                  onChange={e => handleChange('maxEvents', Number(e.target.value))}
                  className="number-input"
                  min="1000"
                  step="1000"
                />
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="settings-section">
              <div className="section-header">
                <h3>API Server Settings</h3>
                <p>Configure the HTTP API server</p>
              </div>
              
              <div className="setting-card">
                <div className="setting-info">
                  <label>API Host</label>
                  <p>Host address to bind the API server</p>
                </div>
                <input
                  type="text"
                  value={settings.apiHost}
                  onChange={e => handleChange('apiHost', e.target.value)}
                  className="text-input"
                />
              </div>

              <div className="setting-card">
                <div className="setting-info">
                  <label>API Port</label>
                  <p>Port number for the API server</p>
                </div>
                <input
                  type="number"
                  value={settings.apiPort}
                  onChange={e => handleChange('apiPort', Number(e.target.value))}
                  className="number-input"
                  min="1"
                  max="65535"
                />
              </div>

              <div className="setting-card">
                <div className="setting-info">
                  <label>Enable CORS</label>
                  <p>Allow cross-origin requests</p>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={settings.corsEnabled}
                    onChange={e => handleChange('corsEnabled', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'collection' && (
            <div className="settings-section">
              <div className="section-header">
                <h3>Collection Settings</h3>
                <p>Configure event collection behavior</p>
              </div>
              
              <div className="setting-card">
                <div className="setting-info">
                  <label>Enable Alerting</label>
                  <p>Generate alerts when rules match</p>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={settings.enableAlerting}
                    onChange={e => handleChange('enableAlerting', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-card">
                <div className="setting-info">
                  <label>Enable Live Collection</label>
                  <p>Continuously monitor Windows Event Logs</p>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={settings.enableLiveCollection}
                    onChange={e => handleChange('enableLiveCollection', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-card">
                <div className="setting-info">
                  <label>Max Import File Size (MB)</label>
                  <p>Maximum size for imported files</p>
                </div>
                <input
                  type="number"
                  value={settings.maxImportFileSize}
                  onChange={e => handleChange('maxImportFileSize', Number(e.target.value))}
                  className="number-input"
                  min="1"
                  max="10240"
                />
              </div>
            </div>
          )}

          {activeTab === 'advanced' && (
            <div className="settings-section">
              <div className="section-header">
                <h3>Advanced Settings</h3>
                <p>Expert configuration options</p>
              </div>
              
              <div className="info-card">
                <h4>⚠️ Warning</h4>
                <p>Advanced settings may affect performance and stability. Only modify if you know what you're doing.</p>
              </div>

              <div className="setting-card">
                <div className="setting-info">
                  <label>Parser Workers</label>
                  <p>Number of parallel parsing workers</p>
                </div>
                <input
                  type="number"
                  value="4"
                  className="number-input"
                  min="1"
                  max="32"
                />
              </div>

              <div className="setting-card">
                <div className="setting-info">
                  <label>Memory Limit (MB)</label>
                  <p>Maximum memory usage for event processing</p>
                </div>
                <input
                  type="number"
                  value="2048"
                  className="number-input"
                  min="256"
                  max="16384"
                />
              </div>
            </div>
          )}

          <div className="settings-actions">
            <button onClick={handleSave} className="btn-primary">
              Save Changes
            </button>
            <button onClick={() => window.location.reload()} className="btn-secondary">
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .settings-page {
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
        
        .settings-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .save-indicator {
          color: #22c55e;
          font-size: 14px;
          animation: fadeIn 0.3s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .settings-layout {
          display: flex;
          gap: 20px;
          flex: 1;
        }
        
        .settings-nav {
          width: 220px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: rgba(255, 255, 255, 0.02);
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: transparent;
          border: none;
          border-radius: 8px;
          color: #888;
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }
        
        .nav-item.active {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
        }
        
        .nav-icon {
          font-size: 18px;
        }
        
        .settings-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
        }
        
        .settings-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .section-header {
          margin-bottom: 8px;
        }
        
        .section-header h3 {
          color: #fff;
          font-size: 1.1rem;
          margin: 0 0 4px 0;
        }
        
        .section-header p {
          color: #888;
          font-size: 13px;
          margin: 0;
        }
        
        .setting-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 10px;
          border: 1px solid #333;
        }
        
        .setting-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .setting-info label {
          color: #fff;
          font-weight: 500;
        }
        
        .setting-info p {
          color: #888;
          font-size: 12px;
          margin: 0;
        }
        
        .text-input {
          width: 250px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
        }
        
        .text-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .number-input {
          width: 120px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          text-align: center;
        }
        
        .number-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        select {
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          min-width: 120px;
        }
        
        .toggle {
          position: relative;
          width: 48px;
          height: 26px;
        }
        
        .toggle input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .toggle-slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background: #333;
          border-radius: 26px;
          transition: 0.3s;
        }
        
        .toggle-slider:before {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          left: 3px;
          bottom: 3px;
          background: #fff;
          border-radius: 50%;
          transition: 0.3s;
        }
        
        .toggle input:checked + .toggle-slider {
          background: #00d9ff;
        }
        
        .toggle input:checked + .toggle-slider:before {
          transform: translateX(22px);
        }
        
        .info-card {
          padding: 16px 20px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 10px;
        }
        
        .info-card h4 {
          color: #f59e0b;
          margin: 0 0 8px 0;
          font-size: 14px;
        }
        
        .info-card p {
          color: #888;
          font-size: 13px;
          margin: 0;
          line-height: 1.5;
        }
        
        .settings-actions {
          display: flex;
          gap: 12px;
          padding: 16px 0;
          margin-top: auto;
          border-top: 1px solid #333;
        }
        
        .btn-primary {
          padding: 12px 28px;
          background: #00d9ff;
          border: none;
          border-radius: 8px;
          color: #000;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-primary:hover {
          background: #00c4e6;
          transform: translateY(-1px);
        }
        
        .btn-secondary {
          padding: 12px 28px;
          background: transparent;
          border: 1px solid #333;
          border-radius: 8px;
          color: #888;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          border-color: #fff;
          color: #fff;
        }
      `}</style>
    </div>
  )
}

export default Settings
