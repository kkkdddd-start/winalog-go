import { useState } from 'react'
import { useI18n } from '../locales/I18n'

function Reports() {
  const { t } = useI18n()
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
      <h2>{t('reports.title')}</h2>
      
      <div className="detail-panel">
        <h3>{t('reports.generateReport')}</h3>
        <p>{t('reports.generateDesc')}</p>
        
        <div className="report-options">
          <div className="option-group">
            <label>{t('reports.reportType')}:</label>
            <select>
              <option value="security">{t('reports.securitySummary')}</option>
              <option value="alert">{t('reports.alertAnalysis')}</option>
              <option value="timeline">{t('reports.eventTimeline')}</option>
              <option value="compliance">{t('reports.complianceReport')}</option>
            </select>
          </div>

          <div className="option-group">
            <label>{t('reports.format')}:</label>
            <select>
              <option value="json">JSON</option>
              <option value="html">HTML</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          <div className="option-group">
            <label>{t('reports.dateRange')}:</label>
            <input type="date" /> to <input type="date" />
          </div>
        </div>

        <button onClick={handleGenerate} disabled={generating}>
          {generating ? t('reports.generating') : t('reports.generate')}
        </button>
      </div>

      <div className="detail-panel">
        <h3>{t('reports.recentReports')}</h3>
        <p>{t('reports.noReports')}</p>
      </div>
    </div>
  )
}

export default Reports