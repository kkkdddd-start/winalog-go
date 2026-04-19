import { useState, useEffect } from 'react'
import { useI18n } from '../locales/I18n'
import { Line } from 'react-chartjs-2'
import { persistenceAPI } from '../api'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface Detection {
  id: string
  time: string
  technique: string
  category: string
  severity: string
  title: string
  description: string
  evidence: {
    type: string
    key?: string
    value?: string
    file_path?: string
  }
  recommended_action: string
  false_positive_risk: string
  explanation?: string
  recommendation?: string
  real_case?: string
}

interface DetectionStats {
  total_detections: number
  duration_ms: number
  error_count: number
  by_severity: {
    critical: number
    high: number
    medium: number
    low: number
    info: number
  }
  by_category: Record<string, number>
  by_technique: Record<string, number>
}

interface Detector {
  name: string
  enabled: boolean
  description: string
  technique: string
  category: string
}

function Persistence() {
  const { t } = useI18n()
  const [detections, setDetections] = useState<Detection[]>([])
  const [stats, setStats] = useState<DetectionStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedDetection, setSelectedDetection] = useState<Detection | null>(null)
  const [filter, setFilter] = useState<{
    severity?: string
    category?: string
    technique?: string
  }>({})
  const [showDetectorConfig, setShowDetectorConfig] = useState(false)
  const [detectors, setDetectors] = useState<Detector[]>([])
  const [detectorLoading, setDetectorLoading] = useState(false)

  useEffect(() => {
    fetchDetections()
  }, [])

  const fetchDetectors = async () => {
    try {
      setDetectorLoading(true)
      const response = await persistenceAPI.listDetectors()
      setDetectors(response.data.detectors || [])
    } catch (err) {
      console.error('Failed to fetch detectors:', err)
    } finally {
      setDetectorLoading(false)
    }
  }

  const toggleDetector = (name: string) => {
    setDetectors(detectors.map(d => 
      d.name === name ? { ...d, enabled: !d.enabled } : d
    ))
  }

  const saveDetectorConfig = async () => {
    try {
      await persistenceAPI.updateDetectors(
        detectors.map(d => ({ name: d.name, enabled: d.enabled }))
      )
      setShowDetectorConfig(false)
    } catch (err) {
      console.error('Failed to save detector config:', err)
      alert('Failed to save configuration')
    }
  }

  const handleShowDetectorConfig = () => {
    fetchDetectors()
    setShowDetectorConfig(true)
  }

  const fetchDetections = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (filter.category) params.append('category', filter.category)
      if (filter.technique) params.append('technique', filter.technique)
      const response = await persistenceAPI.detect(params.toString() ? `?${params.toString()}` : '')
      const data = response.data
      setDetections(data.detections || [])
      setStats(calculateStats(data.detections || []))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = (dets: Detection[]): DetectionStats => {
    const stats: DetectionStats = {
      total_detections: dets.length,
      duration_ms: 0,
      error_count: 0,
      by_severity: { critical: 0, high: 0, medium: 0, low: 0, info: 0 },
      by_category: {},
      by_technique: {},
    }

    dets.forEach(d => {
      const sev = d.severity?.toLowerCase() || 'info'
      if (sev in stats.by_severity) {
        (stats.by_severity as any)[sev]++
      }
      stats.by_category[d.category] = (stats.by_category[d.category] || 0) + 1
      stats.by_technique[d.technique] = (stats.by_technique[d.technique] || 0) + 1
    })

    return stats
  }

  const filteredDetections = detections.filter(d => {
    if (filter.severity && d.severity?.toLowerCase() !== filter.severity) return false
    if (filter.category && d.category !== filter.category) return false
    if (filter.technique && d.technique !== filter.technique) return false
    return true
  })

  const severityChartData = {
    labels: Object.keys(stats?.by_severity || {}),
    datasets: [
      {
        label: t('persistence.bySeverity'),
        data: Object.values(stats?.by_severity || {}),
        backgroundColor: ['#dc2626', '#ea580c', '#ca8a04', '#65a30d', '#3b82f6'],
      },
    ],
  }

  const categoryChartData = {
    labels: Object.keys(stats?.by_category || {}),
    datasets: [
      {
        label: t('persistence.byCategory'),
        data: Object.values(stats?.by_category || {}),
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'],
      },
    ],
  }

  if (loading) {
    return (
      <div className="persistence-page">
        <div className="loading">{t('common.loading')}</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="persistence-page">
        <div className="error">{t('common.error')}: {error}</div>
        <button onClick={fetchDetections} className="btn btn-primary">
          {t('common.confirm')}
        </button>
      </div>
    )
  }

  return (
    <div className="persistence-page">
      <div className="page-header">
        <h1>{t('persistence.title')}</h1>
        <button onClick={fetchDetections} className="btn btn-primary">
          {t('persistence.rescan')}
        </button>
        <button onClick={handleShowDetectorConfig} className="btn btn-secondary">
          {t('persistence.detectorConfig') || 'Detector Config'}
        </button>
      </div>

      {showDetectorConfig && (
        <div className="modal-overlay" onClick={() => setShowDetectorConfig(false)}>
          <div className="modal-content detector-config-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{t('persistence.detectorConfig') || 'Detector Configuration'}</h2>
              <button className="close-btn" onClick={() => setShowDetectorConfig(false)}>×</button>
            </div>
            <div className="modal-body">
              <p className="config-description">
                {t('persistence.detectorConfigDesc') || 'Enable or disable individual detectors. Changes will take effect on next scan.'}
              </p>
              {detectorLoading ? (
                <div className="loading">{t('common.loading')}</div>
              ) : (
                <div className="detectors-list">
                  {detectors.map(detector => (
                    <div key={detector.name} className="detector-item">
                      <label className="detector-checkbox">
                        <input
                          type="checkbox"
                          checked={detector.enabled}
                          onChange={() => toggleDetector(detector.name)}
                        />
                        <span className="detector-name">{detector.name.replace(/_/g, ' ')}</span>
                      </label>
                      <span className="detector-technique">{detector.technique}</span>
                      <span className="detector-description">{detector.description}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="modal-actions">
                <button onClick={saveDetectorConfig} className="btn btn-primary">
                  {t('common.save') || 'Save'}
                </button>
                <button onClick={() => setShowDetectorConfig(false)} className="btn btn-secondary">
                  {t('common.cancel') || 'Cancel'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {stats && (
        <div className="stats-grid">
          <div className="stat-card stat-total">
            <div className="stat-value">{stats.total_detections}</div>
            <div className="stat-label">{t('persistence.total')}</div>
          </div>
          <div className="stat-card stat-critical">
            <div className="stat-value">{stats.by_severity.critical}</div>
            <div className="stat-label">{t('persistence.critical')}</div>
          </div>
          <div className="stat-card stat-high">
            <div className="stat-value">{stats.by_severity.high}</div>
            <div className="stat-label">{t('persistence.high')}</div>
          </div>
          <div className="stat-card stat-medium">
            <div className="stat-value">{stats.by_severity.medium}</div>
            <div className="stat-label">{t('persistence.medium')}</div>
          </div>
          <div className="stat-card stat-low">
            <div className="stat-value">{stats.by_severity.low}</div>
            <div className="stat-label">{t('persistence.low')}</div>
          </div>
        </div>
      )}

      <div className="charts-grid">
        <div className="chart-card">
          <h3>{t('persistence.bySeverity')}</h3>
          <div className="chart-container">
            <Line
              data={severityChartData}
              options={{ responsive: true, plugins: { legend: { display: false } } }}
            />
          </div>
        </div>
        <div className="chart-card">
          <h3>{t('persistence.byCategory')}</h3>
          <div className="chart-container">
            <Line
              data={categoryChartData}
              options={{ responsive: true, plugins: { legend: { display: false } } }}
            />
          </div>
        </div>
      </div>

      <div className="filters">
        <select
          value={filter.severity || ''}
          onChange={e => setFilter({ ...filter, severity: e.target.value || undefined })}
        >
          <option value="">{t('persistence.allSeverities')}</option>
          <option value="critical">{t('persistence.critical')}</option>
          <option value="high">{t('persistence.high')}</option>
          <option value="medium">{t('persistence.medium')}</option>
          <option value="low">{t('persistence.low')}</option>
        </select>
        <select
          value={filter.category || ''}
          onChange={e => setFilter({ ...filter, category: e.target.value || undefined })}
        >
          <option value="">{t('persistence.allCategories')}</option>
          <option value="Registry">注册表</option>
          <option value="ScheduledTask">计划任务</option>
          <option value="Service">服务</option>
          <option value="WMI">WMI</option>
          <option value="COM">COM</option>
          <option value="BITS">BITS</option>
          <option value="Accessibility">辅助功能</option>
        </select>
        <button onClick={fetchDetections} className="btn btn-secondary">
          {t('persistence.rescan')}
        </button>
      </div>

      <div className="detections-table-container">
        <table className="detections-table">
          <thead>
            <tr>
              <th>{t('persistence.severity')}</th>
              <th>{t('persistence.technique')}</th>
              <th>{t('persistence.category')}</th>
              <th>{t('persistence.title')}</th>
              <th>{t('persistence.evidence')}</th>
              <th>{t('persistence.falsePositiveRisk')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredDetections.map(detection => (
              <tr
                key={detection.id}
                onClick={() => setSelectedDetection(detection)}
                className="detection-row"
              >
                <td>
                  <span className={`severity-badge severity-${detection.severity?.toLowerCase()}`}>
                    {t(`persistence.${detection.severity?.toLowerCase()}`)}
                  </span>
                </td>
                <td>
                  <span className="technique-tag">{detection.technique}</span>
                </td>
                <td>{detection.category}</td>
                <td>{detection.title}</td>
                <td className="evidence-cell">
                  {detection.evidence?.key && <div className="evidence-key">{detection.evidence.key}</div>}
                </td>
                <td>{t(`persistence.${detection.false_positive_risk?.toLowerCase()}Risk`) || detection.false_positive_risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedDetection && (
        <div className="modal-overlay" onClick={() => setSelectedDetection(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedDetection.title}</h2>
              <button className="close-btn" onClick={() => setSelectedDetection(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="detail-section">
                <h4>{t('persistence.basicInfo')}</h4>
                <p><strong>{t('persistence.severity')}:</strong> {selectedDetection.severity}</p>
                <p><strong>{t('persistence.technique')}:</strong> {selectedDetection.technique}</p>
                <p><strong>{t('persistence.time')}:</strong> {new Date(selectedDetection.time).toLocaleString()}</p>
              </div>
              {selectedDetection.explanation && (
              <div className="detail-section">
                <h4>{t('persistence.explanation') || '规则解读'}</h4>
                <p>{selectedDetection.explanation}</p>
              </div>
              )}
              <div className="detail-section">
                <h4>{t('persistence.description')}</h4>
                <p>{selectedDetection.description}</p>
              </div>
              {selectedDetection.recommendation && (
              <div className="detail-section">
                <h4>{t('persistence.recommendation') || '处置建议'}</h4>
                <p style={{ whiteSpace: 'pre-wrap' }}>{selectedDetection.recommendation}</p>
              </div>
              )}
              {selectedDetection.real_case && selectedDetection.real_case !== '暂无真实案例' && (
              <div className="detail-section">
                <h4>{t('persistence.realCase') || '真实案例'}</h4>
                <p>{selectedDetection.real_case}</p>
              </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Persistence