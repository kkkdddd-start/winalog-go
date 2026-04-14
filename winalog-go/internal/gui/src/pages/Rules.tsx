import { useState } from 'react'

interface Rule {
  id: string
  name: string
  enabled: boolean
  severity: string
  description: string
}

function Rules() {
  const [rules] = useState<Rule[]>([
    { id: '1', name: 'Brute Force Detection', enabled: true, severity: 'high', description: 'Detect brute force login attempts' },
    { id: '2', name: 'Suspicious PowerShell', enabled: true, severity: 'medium', description: 'Detect suspicious PowerShell execution' },
    { id: '3', name: 'Privilege Escalation', enabled: true, severity: 'critical', description: 'Detect privilege escalation attempts' },
  ])

  return (
    <div className="rules-page">
      <h2>Rule Management</h2>
      
      <div className="detail-panel">
        <h3>Alert Rules</h3>
        <p>Configure and manage alert rules for security event detection.</p>
        
        <table className="rules-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Severity</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rules.map(rule => (
              <tr key={rule.id}>
                <td>{rule.name}</td>
                <td>
                  <span className={`badge severity-${rule.severity}`}>
                    {rule.severity}
                  </span>
                </td>
                <td>{rule.description}</td>
                <td>
                  <label className="switch">
                    <input type="checkbox" defaultChecked={rule.enabled} />
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
