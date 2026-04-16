import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 30000,
})

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

export const eventsAPI = {
  list: (page = 1, pageSize = 100) =>
    api.get(`/events?page=${page}&page_size=${pageSize}`),
  get: (id: number) =>
    api.get(`/events/${id}`),
  search: (params: SearchParams) =>
    api.post('/events/search', params),
  export: (params: ExportParams) =>
    api.post('/events/export', params, {
      responseType: params.format === 'json' ? 'json' : 'blob',
    }),
}

export interface ExportParams {
  format?: 'json' | 'csv' | 'excel'
  filters?: {
    event_ids?: number[]
    levels?: number[]
    log_names?: string[]
    computers?: string[]
    users?: string[]
    start_time?: string
    end_time?: string
    keywords?: string
    limit?: number
  }
}

export const alertsAPI = {
  list: (page = 1, pageSize = 100, severity?: string) =>
    api.get(`/alerts?page=${page}&page_size=${pageSize}${severity ? `&severity=${severity}` : ''}`),
  get: (id: number) =>
    api.get(`/alerts/${id}`),
  stats: () =>
    api.get('/alerts/stats'),
  trend: (days = 7) =>
    api.get(`/alerts/trend?days=${days}`),
  resolve: (id: number, notes: string) =>
    api.post(`/alerts/${id}/resolve`, { notes }),
  markFalsePositive: (id: number, reason: string) =>
    api.post(`/alerts/${id}/false-positive`, { reason }),
  delete: (id: number) =>
    api.delete(`/alerts/${id}`),
  batchAction: (ids: number[], action: string, notes?: string) =>
    api.post('/alerts/batch', { ids, action, notes }),
}

export interface CollectParams {
  sources?: string[]
  excludes?: string[]
  options?: {
    compress?: boolean
    calculate_hash?: boolean
  }
}

export const collectAPI = {
  collect: (params: CollectParams) =>
    api.post('/collect', params),
  getStatus: () =>
    api.get('/collect/status'),
}

export const importAPI = {
  importLogs: (filePaths: string[]) =>
    api.post('/import/logs', { files: filePaths }),
  getStatus: () =>
    api.get('/import/status'),
}

export const liveAPI = {
  getStats: () =>
    api.get('/live/stats'),
  streamEvents: (onEvent: (data: any) => void, onStats: (data: any) => void, onError?: (err: any) => void) => {
    const eventSource = new EventSource('/api/live/events')
    
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        if (data.type === 'event') {
          onEvent(data.data)
        } else if (data.type === 'stats') {
          onStats(data)
        }
      } catch (e) {
        console.error('Failed to parse SSE data:', e)
      }
    }
    
    eventSource.onerror = (err) => {
      console.error('SSE error:', err)
      onError?.(err)
    }
    
    return eventSource
  },
}

export const systemAPI = {
  health: () =>
    api.get('/health'),
  getInfo: () =>
    api.get('/system/info'),
  getMetrics: () =>
    api.get('/system/metrics'),
  getProcesses: (limit = 100) =>
    api.get(`/system/processes?limit=${limit}`),
  getNetwork: (limit = 100, protocol?: string) =>
    api.get(`/system/network?limit=${limit}${protocol ? `&protocol=${protocol}` : ''}`),
  getEnvVariables: () =>
    api.get('/system/env'),
  getLoadedDLLs: (limit = 100) =>
    api.get(`/system/dlls?limit=${limit}`),
  getDrivers: () =>
    api.get('/system/drivers'),
}

export const rulesAPI = {
  list: () =>
    api.get('/rules'),
  get: (name: string) =>
    api.get(`/rules/${name}`),
  toggle: (name: string, enabled: boolean) =>
    api.post(`/rules/${name}/toggle?enabled=${enabled}`),
  save: (rule: Partial<RuleInfo> & { name: string }) =>
    api.post('/rules/save', rule),
  validate: (rule: Partial<RuleInfo> & { name: string }, content?: string) =>
    api.post('/rules/validate', { rule, content }),
  import: (rules: RuleInfo[]) =>
    api.post('/rules/import', { rules }),
  export: (format: 'json' | 'yaml' = 'json') =>
    api.get(`/rules/export?format=${format}`, { responseType: 'blob' }),
}

export const reportsAPI = {
  list: () =>
    api.get('/reports'),
  generate: (params: ReportParams) =>
    api.post('/reports', params),
  get: (id: string) =>
    api.get(`/reports/${id}`),
  export: (format: 'json' | 'csv' | 'excel' | 'pdf') =>
    api.get(`/reports/export?format=${format}`, { responseType: 'blob' }),
}

export interface ReportParams {
  type: string
  format: string
  start_time?: string
  end_time?: string
}

export const forensicsAPI = {
  calculateHash: (path: string) =>
    api.post('/forensics/hash', { path }),
  verifyHash: (path: string, expected: string) =>
    api.get(`/forensics/verify-hash?path=${path}&expected=${expected}`),
  verifySignature: (path: string) =>
    api.get(`/forensics/signature?path=${path}`),
  isSigned: (path: string) =>
    api.get(`/forensics/is-signed?path=${path}`),
  collect: (type: string, outputPath?: string) =>
    api.post('/forensics/collect', { type, output_path: outputPath }),
  listEvidence: () =>
    api.get('/forensics/evidence'),
  getEvidence: (id: string) =>
    api.get(`/forensics/evidence/${id}`),
  exportEvidence: (id: string, format: string) =>
    api.get(`/forensics/evidence/${id}/export?format=${format}`, { responseType: 'blob' }),
  chainOfCustody: () =>
    api.get('/forensics/chain-of-custody'),
  memoryDump: (pid?: number) =>
    api.get(`/forensics/memory-dump${pid ? `?pid=${pid}` : ''}`),
}

export interface TimelineEntry {
  id: number
  timestamp: string
  type: 'event' | 'alert'
  event_id?: number
  alert_id?: number
  level?: string
  source?: string
  message: string
  severity?: string
  rule_name?: string
  mitre_attack?: string[]
}

export interface TimelineResponse {
  entries: TimelineEntry[]
  total_count: number
  event_count: number
  alert_count: number
}

export const timelineAPI = {
  get: (limit = 200, startTime?: string, endTime?: string) => {
    let url = `/timeline?limit=${limit}`
    if (startTime) url += `&start_time=${startTime}`
    if (endTime) url += `&end_time=${endTime}`
    return api.get(url)
  },
  deleteAlert: (id: number) =>
    api.delete(`/timeline/alerts/${id}`),
}

export interface CollectionStats {
  total_events: number
  total_size: string
  sources: Record<string, number>
  last_import: string
}

export const dashboardAPI = {
  getCollectionStats: () =>
    api.get('/dashboard/collection-stats'),
}

export interface AnalyzeParams {
  type: string
  hours?: number
  start_time?: string
  end_time?: string
}

export interface AnalyzeResult {
  type: string
  severity: string
  score: number
  summary: string
  findings: Array<{
    description: string
    severity: string
    score: number
    rule_name?: string
    mitre_attack?: string[]
    metadata?: Record<string, any>
  }>
  timestamp: number
}

export const analyzeAPI = {
  run: (analyzerType: string, params?: { hours?: number }) =>
    api.post(`/analyze/${analyzerType}`, params || {}),
  list: () =>
    api.get('/analyzers'),
  info: (analyzerType: string) =>
    api.get(`/analyzers/${analyzerType}`),
}

export interface Settings {
  database_path: string
  log_level: string
  max_events: number
  retention_days: number
  enable_alerting: boolean
  enable_live_collection: boolean
  enable_auto_update: boolean
  api_port: number
  api_host: string
  cors_enabled: boolean
  max_import_file_size: number
  export_directory: string
  parser_workers: number
  memory_limit: number
}

export const settingsAPI = {
  get: () =>
    api.get('/settings'),
  save: (settings: Partial<Settings>) =>
    api.post('/settings', settings),
  reset: () =>
    api.post('/settings/reset'),
}

export const persistenceAPI = {
  detect: () =>
    api.get('/persistence/detect'),
  listCategories: () =>
    api.get('/persistence/categories'),
  listTechniques: () =>
    api.get('/persistence/techniques'),
}

export interface SearchParams {
  keywords?: string
  regex?: boolean
  event_ids?: number[]
  levels?: number[]
  log_names?: string[]
  sources?: string[]
  users?: string[]
  computers?: string[]
  start_time?: string
  end_time?: string
  page?: number
  page_size?: number
  sort_by?: string
  sort_order?: string
}

export interface RuleInfo {
  id: string
  name: string
  description: string
  enabled: boolean
  severity: string
  score: number
  mitre_attack?: string[]
  tags?: string[]
}

export interface CorrelationParams {
  time_window?: string
  rules?: string[]
}

export interface CorrelationResult {
  rule_name: string
  severity: string
  event_count: number
  start_time: string
  end_time: string
  description: string
}

export interface CorrelationResponse {
  results: CorrelationResult[]
  count: number
}

export const correlationAPI = {
  analyze: (params?: CorrelationParams) =>
    api.post('/correlation/analyze', params || {}),
}

export interface MultiParams {
  time_window?: string
}

export interface MultiResponse {
  machines: Array<{
    id: string
    name: string
    ip: string
    domain: string
    role: string
    os_version: string
    last_seen: string
  }>
  cross_machine_activity: Array<{
    user: string
    machine_count: number
    machines: string[]
    login_count: number
    suspicious: boolean
    severity: string
    recommendation: string
  }>
  lateral_movement: Array<{
    source_machine: string
    target_machine: string
    user: string
    event_id: number
    timestamp: string
    ip_address: string
    severity: string
    description: string
    mitre_attack: string[]
  }>
  summary: string
  suspicious_count: number
  analysis_id: string
}

export const multiAPI = {
  analyze: (params?: MultiParams) =>
    api.post('/multi/analyze', params || {}),
  lateral: () =>
    api.get('/multi/lateral'),
}

export interface QueryParams {
  sql: string
  limit?: number
  offset?: number
}

export interface QueryResponse {
  columns: string[]
  rows: Record<string, any>[]
  count: number
  total: number
}

export const queryAPI = {
  execute: (params: QueryParams) =>
    api.post('/query/execute', params),
}

export interface SuppressRule {
  id: number
  name: string
  conditions: any[]
  duration: number
  scope: string
  enabled: boolean
  expires_at: string
  created_at: string
}

export const suppressAPI = {
  list: () => api.get('/suppress'),
  create: (rule: Partial<SuppressRule>) => api.post('/suppress', rule),
  update: (id: number, rule: Partial<SuppressRule>) => api.put(`/suppress/${id}`, rule),
  delete: (id: number) => api.delete(`/suppress/${id}`),
  toggle: (id: number, enabled: boolean) => api.post(`/suppress/${id}/toggle`, { enabled }),
}

export interface UEBAAnomaly {
  type: string
  user?: string
  severity: string
  score: number
  description: string
  details?: Record<string, any>
  event_ids?: number[]
}

export interface UEBAResponse {
  type: string
  anomalies: UEBAAnomaly[]
  total_anomaly: number
  high_risk_count: number
  medium_risk_count: number
  duration: string
}

export interface UserProfile {
  user: string
  login_count: number
  last_updated: string
  avg_events_per_day: number
}

export const uebaAPI = {
  analyze: (params?: { hours?: number }) => api.post('/ueba/analyze', params || {}),
  profiles: () => api.get('/ueba/profiles'),
}

export default api
