import { useState } from 'react'
import { useI18n } from '../locales/I18n'

function Forensics() {
  const { t } = useI18n()
  const [collecting, setCollecting] = useState(false)
  const [hashInput, setHashInput] = useState('')
  const [verifyResult, setVerifyResult] = useState<{match: boolean; hash: string} | null>(null)

  const handleCollect = async () => {
    setCollecting(true)
    setTimeout(() => {
      alert(t('collect.collectionNote'))
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
      <h2>{t('forensics.title')}</h2>
      
      <div className="detail-panel">
        <h3>{t('forensics.evidenceCollection')}</h3>
        <p>{t('forensics.evidenceCollectionDesc')}</p>
        
        <div className="collect-options">
          <label><input type="checkbox" defaultChecked /> {t('forensics.eventLogs')}</label>
          <label><input type="checkbox" defaultChecked /> {t('forensics.registry')}</label>
          <label><input type="checkbox" /> {t('forensics.memoryDump')}</label>
          <label><input type="checkbox" defaultChecked /> {t('forensics.prefetch')}</label>
          <label><input type="checkbox" /> {t('forensics.shimcache')}</label>
          <label><input type="checkbox" /> {t('forensics.userassist')}</label>
        </div>

        <button onClick={handleCollect} disabled={collecting}>
          {collecting ? t('collect.importing') : t('forensics.startCollection')}
        </button>
      </div>

      <div className="detail-panel">
        <h3>{t('forensics.hashVerification')}</h3>
        <p>{t('forensics.hashVerificationDesc')}</p>
        
        <div className="verify-form">
          <input
            type="text"
            placeholder={t('forensics.enterHash')}
            value={hashInput}
            onChange={e => setHashInput(e.target.value)}
          />
          <button onClick={handleVerify}>{t('forensics.verify')}</button>
        </div>

        {verifyResult && (
          <div className={`verify-result ${verifyResult.match ? 'match' : 'no-match'}`}>
            {verifyResult.match ? t('forensics.hashMatch') : t('forensics.hashNoMatch')}
          </div>
        )}
      </div>

      <div className="detail-panel">
        <h3>{t('forensics.chainOfCustody')}</h3>
        <p>{t('forensics.chainOfCustodyDesc')}</p>
        <p className="muted">{t('forensics.noEvidence')}</p>
      </div>
    </div>
  )
}

export default Forensics