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

export const importAPI = {
  importLogs: (files: string[]) =>
    api.post('/import/logs', { files }),
  getStatus: (path: string) =>
    api.get(`/import/status?path=${path}`),
}

export const liveAPI = {
  getStats: () =>
    api.get('/live/stats'),
}

export const systemAPI = {
  health: () =>
    api.get('/health'),
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

export default api
