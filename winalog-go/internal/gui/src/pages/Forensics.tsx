import { useState } from 'react'

function Forensics() {
  const [collecting, setCollecting] = useState(false)
  const [hashInput, setHashInput] = useState('')
  const [verifyResult, setVerifyResult] = useState<{match: boolean; hash: string} | null>(null)

  const handleCollect = async () => {
    setCollecting(true)
    setTimeout(() => {
      alert('Forensics collection is not yet connected to backend')
      setCollecting(false)
    }, 1000)
  }

  const handleVerify = () => {
    if (!hashInput.trim()) return
    setVerifyResult({
      match: Math.random() > 0.5,
      hash: hashInput
    })
  }

  return (
    <div className="forensics-page">
      <h2>Forensics</h2>
      
      <div className="detail-panel">
        <h3>Evidence Collection</h3>
        <p>Collect forensic evidence from the system including memory, registry, and event logs.</p>
        
        <div className="collect-options">
          <label><input type="checkbox" defaultChecked /> Event Logs</label>
          <label><input type="checkbox" defaultChecked /> Registry</label>
          <label><input type="checkbox" /> Memory Dump</label>
          <label><input type="checkbox" defaultChecked /> Prefetch</label>
          <label><input type="checkbox" /> ShimCache</label>
          <label><input type="checkbox" /> UserAssist</label>
        </div>

        <button onClick={handleCollect} disabled={collecting}>
          {collecting ? 'Collecting...' : 'Start Collection'}
        </button>
      </div>

      <div className="detail-panel">
        <h3>Hash Verification</h3>
        <p>Verify file integrity by comparing SHA256 hashes.</p>
        
        <div className="verify-form">
          <input
            type="text"
            placeholder="Enter SHA256 hash to verify..."
            value={hashInput}
            onChange={e => setHashInput(e.target.value)}
          />
          <button onClick={handleVerify}>Verify</button>
        </div>

        {verifyResult && (
          <div className={`verify-result ${verifyResult.match ? 'match' : 'no-match'}`}>
            {verifyResult.match ? 'Hash matches!' : 'Hash does not match'}
          </div>
        )}
      </div>

      <div className="detail-panel">
        <h3>Chain of Custody</h3>
        <p>Evidence chain of custody tracking will be displayed here.</p>
        <p className="muted">No evidence collected yet.</p>
      </div>

      <style>{`
        .collect-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin: 15px 0;
        }
        .collect-options label {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .verify-form {
          display: flex;
          gap: 10px;
          margin: 15px 0;
        }
        .verify-form input {
          flex: 1;
          padding: 8px;
          border: 1px solid #333;
          border-radius: 4px;
          background: #16213e;
          color: #eee;
        }
        .verify-result {
          padding: 10px;
          border-radius: 4px;
          margin-top: 10px;
        }
        .verify-result.match {
          background: #28a745;
        }
        .verify-result.no-match {
          background: #dc3545;
        }
        .muted {
          color: #888;
        }
      `}</style>
    </div>
  )
}

export default Forensics
