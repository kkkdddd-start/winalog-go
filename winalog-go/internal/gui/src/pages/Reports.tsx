import { useState } from 'react'

function Reports() {
  const [generating, setGenerating] = useState(false)

  const handleGenerate = async () => {
    setGenerating(true)
    setTimeout(() => {
      alert('Report generation is not yet connected to backend')
      setGenerating(false)
    }, 1000)
  }

  return (
    <div className="reports-page">
      <h2>Reports</h2>
      
      <div className="detail-panel">
        <h3>Generate Security Report</h3>
        <p>Generate comprehensive security analysis reports in various formats.</p>
        
        <div className="report-options">
          <div className="option-group">
            <label>Report Type:</label>
            <select>
              <option value="security">Security Summary</option>
              <option value="alert">Alert Analysis</option>
              <option value="timeline">Event Timeline</option>
              <option value="compliance">Compliance Report</option>
            </select>
          </div>

          <div className="option-group">
            <label>Format:</label>
            <select>
              <option value="json">JSON</option>
              <option value="html">HTML</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          <div className="option-group">
            <label>Date Range:</label>
            <input type="date" /> to <input type="date" />
          </div>
        </div>

        <button onClick={handleGenerate} disabled={generating}>
          {generating ? 'Generating...' : 'Generate Report'}
        </button>
      </div>

      <div className="detail-panel">
        <h3>Recent Reports</h3>
        <p>No reports generated yet.</p>
      </div>

      <style>{`
        .report-options {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin: 20px 0;
        }
        .option-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .option-group label {
          width: 120px;
          font-weight: bold;
        }
        .option-group select, .option-group input {
          padding: 8px;
          border: 1px solid #333;
          border-radius: 4px;
          background: #16213e;
          color: #eee;
        }
      `}</style>
    </div>
  )
}

export default Reports
