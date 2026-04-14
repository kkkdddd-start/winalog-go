import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
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

const severityColors: Record<string, string> = {
  critical: '#dc2626',
  high: '#ea580c',
  medium: '#ca8a04',
  low: '#65a30d',
  info: '#3b82f6',
}

const severityLabels: Record<string, string> = {
  critical: '严重',
  high: '高危',
  medium: '中危',
  low: '低危',
  info: '信息',
}

const categoryLabels: Record<string, string> = {
  Registry: '注册表',
  Accessibility: '辅助功能',
  COM: 'COM劫持',
  IFEO: 'IFEO劫持',
  WMI: 'WMI持久化',
  Service: '服务持久化',
  ScheduledTask: '计划任务',
  Startup: '启动项',
  BITS: 'BITS作业',
}

const techniqueLabels: Record<string, string> = {
  'T1546.001': '辅助功能后门',
  'T1546.002': 'SCM',
  'T1546.003': 'WMI事件订阅',
  'T1546.007': 'Netsh Helper DLL',
  'T1546.008': 'LSASS',
  'T1546.010': 'AppInit_DLLs',
  'T1546.012': 'IFEO调试器劫持',
  'T1546.015': 'COM劫持',
  'T1546.016': '启动项',
  'T1053': '计划任务/作业',
  'T1053.020': 'Cron',
  'T1543.003': 'Windows服务',
  'T1197': 'BITS作业',
  'T1098': '账户操作/SID History',
}

function Persistence() {
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

  useEffect(() => {
    fetchDetections()
  }, [])

  const fetchDetections = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/persistence/detect')
      if (!response.ok) {
        throw new Error('获取检测结果失败')
      }
      const data = await response.json()
      setDetections(data.detections || [])
      setStats(calculateStats(data.detections || []))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : '未知错误')
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
        stats.by_severity[sev as keyof typeof stats.by_severity]++
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
    labels: Object.keys(stats?.by_severity || {}).map(k => severityLabels[k] || k),
    datasets: [
      {
        label: '按严重级别',
        data: Object.values(stats?.by_severity || {}),
        backgroundColor: Object.keys(stats?.by_severity || {}).map(
          k => severityColors[k] || '#6b7280'
        ),
      },
    ],
  }

  const categoryChartData = {
    labels: Object.keys(stats?.by_category || {}).map(
      k => categoryLabels[k] || k
    ),
    datasets: [
      {
        label: '按类别',
        data: Object.values(stats?.by_category || {}),
        backgroundColor: [
          '#3b82f6',
          '#10b981',
          '#f59e0b',
          '#ef4444',
          '#8b5cf6',
          '#ec4899',
          '#06b6d4',
          '#84cc16',
        ],
      },
    ],
  }

  if (loading) {
    return (
      <div className="persistence-page">
        <div className="loading">正在加载持久化检测数据...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="persistence-page">
        <div className="error">错误: {error}</div>
        <button onClick={fetchDetections} className="btn btn-primary">
          重试
        </button>
      </div>
    )
  }

  return (
    <div className="persistence-page">
      <div className="page-header">
        <h1>持久化机制检测</h1>
        <button onClick={fetchDetections} className="btn btn-primary">
          重新扫描
        </button>
      </div>

      {stats && (
        <div className="stats-grid">
          <div className="stat-card stat-total">
            <div className="stat-value">{stats.total_detections}</div>
            <div className="stat-label">检测总数</div>
          </div>
          <div className="stat-card stat-critical">
            <div className="stat-value">{stats.by_severity.critical}</div>
            <div className="stat-label">严重</div>
          </div>
          <div className="stat-card stat-high">
            <div className="stat-value">{stats.by_severity.high}</div>
            <div className="stat-label">高危</div>
          </div>
          <div className="stat-card stat-medium">
            <div className="stat-value">{stats.by_severity.medium}</div>
            <div className="stat-label">中危</div>
          </div>
          <div className="stat-card stat-low">
            <div className="stat-value">{stats.by_severity.low}</div>
            <div className="stat-label">低危</div>
          </div>
        </div>
      )}

      <div className="charts-grid">
        <div className="chart-card">
          <h3>按严重级别分布</h3>
          <div className="chart-container">
            <Line
              data={severityChartData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>
        <div className="chart-card">
          <h3>按类别分布</h3>
          <div className="chart-container">
            <Line
              data={categoryChartData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>
      </div>

      <div className="filters">
        <select
          value={filter.severity || ''}
          onChange={e => setFilter({ ...filter, severity: e.target.value || undefined })}
        >
          <option value="">全部严重级别</option>
          <option value="critical">严重</option>
          <option value="high">高危</option>
          <option value="medium">中危</option>
          <option value="low">低危</option>
          <option value="info">信息</option>
        </select>
        <select
          value={filter.category || ''}
          onChange={e => setFilter({ ...filter, category: e.target.value || undefined })}
        >
          <option value="">全部类别</option>
          {Object.entries(categoryLabels).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
      </div>

      <div className="detections-table-container">
        <table className="detections-table">
          <thead>
            <tr>
              <th>严重级别</th>
              <th>技术</th>
              <th>类别</th>
              <th>标题</th>
              <th>注册表键/文件路径</th>
              <th>误报风险</th>
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
                  <span
                    className="severity-badge"
                    style={{ backgroundColor: severityColors[detection.severity?.toLowerCase()] || '#6b7280' }}
                  >
                    {severityLabels[detection.severity?.toLowerCase()] || detection.severity}
                  </span>
                </td>
                <td>
                  <span className="technique-tag">
                    {techniqueLabels[detection.technique] || detection.technique}
                  </span>
                  <br />
                  <small className="technique-id">{detection.technique}</small>
                </td>
                <td>{categoryLabels[detection.category] || detection.category}</td>
                <td>{detection.title}</td>
                <td className="evidence-cell">
                  {detection.evidence?.key && (
                    <div className="evidence-key">{detection.evidence.key}</div>
                  )}
                  {detection.evidence?.value && (
                    <div className="evidence-value">{detection.evidence.value}</div>
                  )}
                  {detection.evidence?.file_path && (
                    <div className="evidence-file">{detection.evidence.file_path}</div>
                  )}
                </td>
                <td>
                  <span className={`fp-risk fp-${detection.false_positive_risk?.toLowerCase()}`}>
                    {detection.false_positive_risk === 'Low' ? '低' :
                     detection.false_positive_risk === 'Medium' ? '中' :
                     detection.false_positive_risk === 'High' ? '高' :
                     detection.false_positive_risk || '未知'}
                  </span>
                </td>
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
              <button className="close-btn" onClick={() => setSelectedDetection(null)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="detail-section">
                <h4>基本信息</h4>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">严重级别:</span>
                    <span
                      className="severity-badge"
                      style={{
                        backgroundColor: severityColors[selectedDetection.severity?.toLowerCase()] || '#6b7280',
                      }}
                    >
                      {severityLabels[selectedDetection.severity?.toLowerCase()] || selectedDetection.severity}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">MITRE ATT&CK:</span>
                    <span>{techniqueLabels[selectedDetection.technique] || selectedDetection.technique}</span>
                    <code className="technique-id">{selectedDetection.technique}</code>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">类别:</span>
                    <span>{categoryLabels[selectedDetection.category] || selectedDetection.category}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">时间:</span>
                    <span>{new Date(selectedDetection.time).toLocaleString('zh-CN')}</span>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h4>描述</h4>
                <p>{selectedDetection.description}</p>
              </div>

              <div className="detail-section">
                <h4>证据</h4>
                <div className="evidence-details">
                  {selectedDetection.evidence?.key && (
                    <div className="evidence-row">
                      <span className="evidence-label">注册表键:</span>
                      <code className="evidence-value">{selectedDetection.evidence.key}</code>
                    </div>
                  )}
                  {selectedDetection.evidence?.value && (
                    <div className="evidence-row">
                      <span className="evidence-label">注册表值:</span>
                      <code className="evidence-value">{selectedDetection.evidence.value}</code>
                    </div>
                  )}
                  {selectedDetection.evidence?.file_path && (
                    <div className="evidence-row">
                      <span className="evidence-label">文件路径:</span>
                      <code className="evidence-value">{selectedDetection.evidence.file_path}</code>
                    </div>
                  )}
                </div>
              </div>

              <div className="detail-section recommended-action">
                <h4>建议操作</h4>
                <p>{selectedDetection.recommended_action}</p>
              </div>

              <div className="detail-section">
                <h4>误报风险</h4>
                <span className={`fp-risk fp-${selectedDetection.false_positive_risk?.toLowerCase()}`}>
                  {selectedDetection.false_positive_risk === 'Low' ? '低风险' :
                   selectedDetection.false_positive_risk === 'Medium' ? '中风险' :
                   selectedDetection.false_positive_risk === 'High' ? '高风险' :
                   selectedDetection.false_positive_risk || '未知'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Persistence
