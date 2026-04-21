import { useEffect, useState } from 'react'
import { useI18n } from '../locales/I18n'
import { systemAPI } from '../api'

interface SystemInfoData {
  hostname: string
  domain: string
  os_name: string
  os_version: string
  architecture: string
  is_admin: boolean
  timezone: string
  local_time: string
  uptime_seconds: number
  go_version: string
  cpu_count: number
  memory_total_gb: number
  memory_free_gb: number
}

interface ProcessInfo {
  pid: number
  ppid: number
  name: string
  exe: string
  args: string
  user: string
  status: string
  path: string
  command_line: string
  is_signed: boolean
  signature?: {
    status: string
    issuer: string
    subject: string
    valid_from: string
    valid_to: string
    thumbprint: string
  }
}

interface NetworkConnInfo {
  pid: number
  protocol: string
  local_addr: string
  local_port: number
  remote_addr: string
  remote_port: number
  state: string
  process_name: string
}

interface RegistryKeyInfo {
  path: string
  name: string
  value: string
  type: string
}

interface TaskInfo {
  name: string
  path: string
  state: string
}

function SystemInfo() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState<'system' | 'processes' | 'network' | 'env' | 'dlls' | 'drivers' | 'users' | 'registry' | 'tasks'>('system')
  const [info, setInfo] = useState<SystemInfoData | null>(null)
  const [processes, setProcesses] = useState<ProcessInfo[]>([])
  const [networkConnections, setNetworkConnections] = useState<NetworkConnInfo[]>([])
  const [envVars, setEnvVars] = useState<any[]>([])
  const [dlls, setDlls] = useState<any[]>([])
  const [drivers, setDrivers] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [registry, setRegistry] = useState<RegistryKeyInfo[]>([])
  const [tasks, setTasks] = useState<TaskInfo[]>([])
  const [selectedDllPid, setSelectedDllPid] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [moduleErrors, setModuleErrors] = useState<Record<string, string>>({})
  const [enabledModules, setEnabledModules] = useState<Record<string, boolean>>({
    processes: false,
    network: false,
    dlls: false,
    drivers: false,
    env: false,
    users: false,
    registry: false,
    tasks: false,
  })
  const [showUnsignedOnly, setShowUnsignedOnly] = useState(false)
  const [hoveredContent, setHoveredContent] = useState<{ text: string; x: number; y: number } | null>(null)

  useEffect(() => {
    fetchSystemInfo()
  }, [])

  const fetchSystemInfo = () => {
    setLoading(true)
    systemAPI.getInfo()
      .then(res => {
        setInfo(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || t('common.error'))
        setLoading(false)
      })
  }

  const fetchProcesses = () => {
    if (processes.length > 0) return
    setLoading(true)
    systemAPI.getProcesses(50)
      .then(res => {
        setProcesses(res.data.processes || [])
        setModuleErrors(m => ({ ...m, processes: '' }))
        setLoading(false)
      })
      .catch((err: any) => {
        const msg = err.response?.status === 404 
          ? '进程信息不可用（仅支持 Windows）' 
          : (err.message || '获取进程信息失败')
        setModuleErrors(m => ({ ...m, processes: msg }))
        setLoading(false)
      })
  }

  const fetchNetwork = () => {
    if (networkConnections.length > 0) return
    setLoading(true)
    systemAPI.getNetwork(50)
      .then(res => {
        setNetworkConnections(res.data.connections || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const fetchEnvVars = () => {
    if (envVars.length > 0) return
    setLoading(true)
    systemAPI.getEnvVariables()
      .then(res => {
        setEnvVars(res.data.variables || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const fetchDlls = (pid?: number) => {
    setLoading(true)
    if (pid) {
      setSelectedDllPid(pid)
      systemAPI.getProcessDLLs(pid)
        .then(res => {
          setDlls(res.data.dlls || [])
          setLoading(false)
        })
        .catch(() => setLoading(false))
    } else {
      systemAPI.getLoadedDLLs(100)
        .then(res => {
          setDlls(res.data.modules || [])
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }

  const fetchDrivers = () => {
    if (drivers.length > 0) return
    setLoading(true)
    systemAPI.getDrivers()
      .then(res => {
        setDrivers(res.data.drivers || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const fetchUsers = () => {
    if (users.length > 0) return
    setLoading(true)
    systemAPI.getUsers()
      .then(res => {
        setUsers(res.data.users || [])
        setModuleErrors(m => ({ ...m, users: '' }))
        setLoading(false)
      })
      .catch((err: any) => {
        const msg = err.response?.status === 404 
          ? '用户信息不可用（仅支持 Windows）' 
          : (err.message || '获取用户信息失败')
        setModuleErrors(m => ({ ...m, users: msg }))
        setLoading(false)
      })
  }

  const fetchRegistry = () => {
    if (registry.length > 0) return
    setLoading(true)
    systemAPI.getRegistry()
      .then(res => {
        setRegistry(res.data.run_keys || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const fetchTasks = () => {
    if (tasks.length > 0) return
    setLoading(true)
    systemAPI.getTasks()
      .then(res => {
        setTasks(res.data.tasks || [])
        setModuleErrors(m => ({ ...m, tasks: '' }))
        setLoading(false)
      })
      .catch((err: any) => {
        const msg = err.response?.status === 404 
          ? '计划任务信息不可用（仅支持 Windows）' 
          : (err.message || '获取计划任务失败')
        setModuleErrors(m => ({ ...m, tasks: msg }))
        setLoading(false)
      })
  }

  const handleTabChange = (tab: 'system' | 'processes' | 'network' | 'env' | 'dlls' | 'drivers' | 'users' | 'registry' | 'tasks') => {
    setActiveTab(tab)
    if (tab === 'processes') fetchProcesses()
    if (tab === 'network') fetchNetwork()
    if (tab === 'env') fetchEnvVars()
    if (tab === 'dlls') {
      if (processes.length > 0 && !selectedDllPid) {
      } else if (selectedDllPid) {
        fetchDlls(selectedDllPid)
      } else {
        fetchDlls()
      }
    }
    if (tab === 'drivers') fetchDrivers()
    if (tab === 'users') fetchUsers()
    if (tab === 'registry') fetchRegistry()
    if (tab === 'tasks') fetchTasks()
  }

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    if (days > 0) return `${days}d ${hours}h ${mins}m`
    if (hours > 0) return `${hours}h ${mins}m`
    return `${mins}m`
  }

  const getStateColor = (state: string) => {
    switch (state?.toUpperCase()) {
      case 'ESTABLISHED': return '#22c55e'
      case 'LISTEN': return '#3b82f6'
      case 'TIME_WAIT': return '#f59e0b'
      case 'CLOSE_WAIT': return '#ef4444'
      default: return '#888'
    }
  }

  if (loading && !info) return (
    <div className="systeminfo-page">
      <div className="loading-state">
        <div className="spinner"></div>
        <div>{t('common.loading')}</div>
      </div>
    </div>
  )

  if (error) return (
    <div className="systeminfo-page">
      <div className="error-state">Error: {error}</div>
    </div>
  )

  return (
    <div className="systeminfo-page">
      <div className="page-header">
        <h2>{t('systemInfo.title')}</h2>
        <div className="header-actions">
          <button className="btn-refresh" onClick={fetchSystemInfo}>
            {t('common.refresh') || '刷新'}
          </button>
        </div>
      </div>

      <div className="tab-nav">
        <button
          className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`}
          onClick={() => handleTabChange('system')}
        >
          {t('systemInfo.system') || '系统'}
        </button>
        <button
          className={`tab-btn ${activeTab === 'processes' ? 'active' : ''}`}
          onClick={() => handleTabChange('processes')}
        >
          <span className="tab-label">{t('systemInfo.processes') || '进程'} ({processes.length || '...'})</span>
          <label className="module-toggle" onClick={e => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={enabledModules.processes}
              onChange={() => setEnabledModules(m => ({...m, processes: !m.processes}))}
            />
            <span className="toggle-slider"></span>
          </label>
        </button>
        <button
          className={`tab-btn ${activeTab === 'network' ? 'active' : ''}`}
          onClick={() => handleTabChange('network')}
        >
          <span className="tab-label">{t('systemInfo.network') || '网络'} ({networkConnections.length || '...'})</span>
          <label className="module-toggle" onClick={e => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={enabledModules.network}
              onChange={() => setEnabledModules(m => ({...m, network: !m.network}))}
            />
            <span className="toggle-slider"></span>
          </label>
        </button>
        <button
          className={`tab-btn ${activeTab === 'env' ? 'active' : ''}`}
          onClick={() => handleTabChange('env')}
        >
          <span className="tab-label">{t('systemInfo.env') || '环境变量'} ({envVars.length || '...'})</span>
          <label className="module-toggle" onClick={e => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={enabledModules.env}
              onChange={() => setEnabledModules(m => ({...m, env: !m.env}))}
            />
            <span className="toggle-slider"></span>
          </label>
        </button>
        <button
          className={`tab-btn ${activeTab === 'dlls' ? 'active' : ''}`}
          onClick={() => handleTabChange('dlls')}
        >
          <span className="tab-label">{t('systemInfo.dlls') || '动态链接库'} ({dlls.length || '...'})</span>
          <label className="module-toggle" onClick={e => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={enabledModules.dlls}
              onChange={() => setEnabledModules(m => ({...m, dlls: !m.dlls}))}
            />
            <span className="toggle-slider"></span>
          </label>
        </button>
        <button
          className={`tab-btn ${activeTab === 'drivers' ? 'active' : ''}`}
          onClick={() => handleTabChange('drivers')}
        >
          <span className="tab-label">{t('systemInfo.drivers') || '驱动'} ({drivers.length || '...'})</span>
          <label className="module-toggle" onClick={e => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={enabledModules.drivers}
              onChange={() => setEnabledModules(m => ({...m, drivers: !m.drivers}))}
            />
            <span className="toggle-slider"></span>
          </label>
        </button>
<button
          className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => handleTabChange('users')}
        >
          <span className="tab-label">{t('systemInfo.users') || '用户'} ({users.length || '...'})</span>
          <label className="module-toggle" onClick={e => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={enabledModules.users}
              onChange={() => setEnabledModules(m => ({...m, users: !m.users}))}
            />
            <span className="toggle-slider"></span>
          </label>
        </button>
        <button
          className={`tab-btn ${activeTab === 'registry' ? 'active' : ''}`}
          onClick={() => handleTabChange('registry')}
        >
          <span className="tab-label">{t('systemInfo.registry') || '注册表'} ({registry.length || '...'})</span>
          <label className="module-toggle" onClick={e => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={enabledModules.registry}
              onChange={() => setEnabledModules(m => ({...m, registry: !m.registry}))}
            />
            <span className="toggle-slider"></span>
          </label>
        </button>
        <button
          className={`tab-btn ${activeTab === 'tasks' ? 'active' : ''}`}
          onClick={() => handleTabChange('tasks')}
        >
          <span className="tab-label">{t('systemInfo.tasks') || '任务'} ({tasks.length || '...'})</span>
          <label className="module-toggle" onClick={e => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={enabledModules.tasks}
              onChange={() => setEnabledModules(m => ({...m, tasks: !m.tasks}))}
            />
            <span className="toggle-slider"></span>
          </label>
        </button>
      </div>

      {activeTab === 'system' && info && (
        <div className="system-grid">
          <div className="system-card os-card">
            <div className="card-header">
              <div className="card-icon">OS</div>
              <h3>{t('systemInfo.operatingSystem')}</h3>
            </div>
            
            <div className="system-status">
              <div className="status-indicator online"></div>
              <span>{t('systemInfo.systemOnline') || '系统在线'}</span>
            </div>
            
            <div className="info-list">
              <div className="info-row">
                <span className="info-label">{t('systemInfo.hostname')}</span>
                <span className="info-value highlight">{info.hostname || t('common.notAvailable') || 'N/A'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.domain')}</span>
                <span className="info-value">{info.domain || 'WORKGROUP'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.osName')}</span>
                <span className="info-value">{info.os_name || t('common.unknown') || 'Unknown'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.osVersion')}</span>
                <span className="info-value">{info.os_version || t('common.unknown') || 'Unknown'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.architecture')}</span>
                <span className="info-value badge">{info.architecture || 'x64'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.timezone')}</span>
                <span className="info-value">{info.timezone || 'UTC'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.admin')}</span>
                <span className={`info-value badge ${info.is_admin ? 'admin' : 'user'}`}>
                  {info.is_admin ? (t('systemInfo.adminUser') || '管理员') : (t('systemInfo.standardUser') || '标准用户')}
                </span>
              </div>
            </div>
          </div>

          <div className="system-card runtime-card">
            <div className="card-header">
              <div className="card-icon">{t('systemInfo.runtime') || '运行时'}</div>
              <h3>{t('systemInfo.runtimeInfo')}</h3>
            </div>
            
            <div className="info-list">
              <div className="info-row">
                <span className="info-label">{t('systemInfo.goVersion')}</span>
                <span className="info-value mono">{info.go_version || t('common.unknown') || 'Unknown'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.cpuCount')}</span>
                <span className="info-value">{info.cpu_count || 0} {t('systemInfo.cores') || '核心'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('systemInfo.uptime')}</span>
                <span className="info-value">{formatUptime(info.uptime_seconds || 0)}</span>
              </div>
            </div>
          </div>

          <div className="system-card resources-card">
            <div className="card-header">
              <div className="card-icon">{t('systemInfo.resources') || '资源'}</div>
              <h3>{t('systemInfo.systemResources') || '系统资源'}</h3>
            </div>
            
            <div className="resource-bars">
              <div className="resource-item">
                <div className="resource-header">
                  <span className="resource-name">{t('systemInfo.memory') || '内存'}</span>
                  <span className="resource-value">
                    {info.memory_free_gb ? (info.memory_total_gb - info.memory_free_gb).toFixed(1) : '0'} / {info.memory_total_gb?.toFixed(1) || '0'} GB
                  </span>
                </div>
                <div className="resource-bar">
                  <div className="resource-fill" style={{
                    width: info.memory_total_gb ? `${((info.memory_total_gb - info.memory_free_gb) / info.memory_total_gb * 100)}%` : '0%'
                  }}></div>
                </div>
              </div>
              
              <div className="resource-item">
                <div className="resource-header">
                  <span className="resource-name">{t('systemInfo.freeMemory') || '可用内存'}</span>
                  <span className="resource-value">{info.memory_free_gb?.toFixed(1) || '0'} GB</span>
                </div>
                <div className="resource-bar">
                  <div className="resource-fill memory" style={{
                    width: info.memory_total_gb ? `${(info.memory_free_gb / info.memory_total_gb * 100)}%` : '0%'
                  }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="system-card time-card">
            <div className="card-header">
              <div className="card-icon">{t('systemInfo.time') || '时间'}</div>
              <h3>{t('systemInfo.timeInfo') || '时间信息'}</h3>
            </div>
            
            <div className="time-display">
              <div className="current-time">
                {info?.local_time ? new Date(info.local_time).toLocaleTimeString() : new Date().toLocaleTimeString()}
              </div>
              <div className="current-date">
                {info?.local_time ? new Date(info.local_time).toLocaleDateString() : new Date().toLocaleDateString()}
              </div>
            </div>
            
            <div className="info-list">
              <div className="info-row">
                <span className="info-label">UTC {t('systemInfo.time') || '时间'}</span>
                <span className="info-value mono">{new Date().toISOString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'processes' && (
        <div className="data-table-container">
          <div className="table-toolbar">
            <label className="unsigned-filter">
              <input
                type="checkbox"
                checked={showUnsignedOnly}
                onChange={() => setShowUnsignedOnly(!showUnsignedOnly)}
              />
              <span>{t('systemInfo.showUnsignedOnly') || '仅显示未签名（黄色高亮）'}</span>
            </label>
            <span className="process-count">
              {showUnsignedOnly 
                ? processes.filter(p => !p.is_signed).length 
                : processes.length} {t('systemInfo.processes') || '进程'}
              {!showUnsignedOnly && processes.filter(p => !p.is_signed).length > 0 && (
                <span className="unsigned-count">
                  ({processes.filter(p => !p.is_signed).length} {t('systemInfo.unsigned') || '未签名'})
                </span>
              )}
            </span>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('systemInfo.pid') || 'PID'}</th>
                <th>{t('systemInfo.ppid') || 'PPID'}</th>
                <th>{t('systemInfo.name') || '名称'}</th>
                <th>{t('systemInfo.user') || '用户'}</th>
                <th>{t('systemInfo.signature') || '签名'}</th>
                <th>{t('systemInfo.path') || '路径'}</th>
                <th>{t('systemInfo.commandLine') || '命令行'}</th>
              </tr>
            </thead>
            <tbody>
              {(showUnsignedOnly ? processes.filter(p => !p.is_signed) : processes).map((proc, idx) => (
                <tr key={`${proc.pid}-${idx}`} className={!proc.is_signed ? 'unsigned-process' : ''}>
                  <td className="mono">{proc.pid}</td>
                  <td className="mono">{proc.ppid}</td>
                  <td className="highlight">{proc.name}</td>
                  <td>{proc.user || '-'}</td>
                  <td>
                    {proc.is_signed ? (
                      <span className="signature-badge valid" title={`Issuer: ${proc.signature?.issuer || 'N/A'}\nThumbprint: ${proc.signature?.thumbprint || 'N/A'}`}>
                        ✓ {t('systemInfo.signed') || '已签名'}
                      </span>
                    ) : (
                      <span className="signature-badge unsigned">
                        ✗ {t('systemInfo.unsigned') || '未签名'}
                      </span>
                    )}
                  </td>
                  <td className="truncate mono" 
                      onMouseEnter={(e) => {
                        const text = proc.exe || proc.path
                        if (text && text.length > 50) {
                          setHoveredContent({ text, x: e.clientX, y: e.clientY })
                        }
                      }}
                      onMouseLeave={() => setHoveredContent(null)}
                  >{proc.exe || proc.path || '-'}</td>
                  <td className="truncate" 
                      onMouseEnter={(e) => {
                        const text = proc.args || proc.command_line
                        if (text && text.length > 50) {
                          setHoveredContent({ text, x: e.clientX, y: e.clientY })
                        }
                      }}
                      onMouseLeave={() => setHoveredContent(null)}
                  >{(proc.args || proc.command_line) || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {processes.length === 0 && !loading && (
            <div className="empty-state">
              {moduleErrors.processes ? (
                <span className="error-message">{moduleErrors.processes}</span>
              ) : (
                t('systemInfo.noProcessData') || '暂无进程数据'
              )}
            </div>
          )}
        </div>
      )}

      {activeTab === 'network' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('systemInfo.protocol') || '协议'}</th>
                <th>{t('systemInfo.localAddress') || '本地地址'}</th>
                <th>{t('systemInfo.port') || '端口'}</th>
                <th>{t('systemInfo.remoteAddress') || '远程地址'}</th>
                <th>{t('systemInfo.port') || '端口'}</th>
                <th>{t('systemInfo.state') || '状态'}</th>
                <th>{t('systemInfo.process') || '进程'}</th>
              </tr>
            </thead>
            <tbody>
              {networkConnections.map((conn, idx) => (
                <tr key={`${conn.protocol}-${conn.local_addr}-${conn.local_port}-${idx}`}>
                  <td><span className="protocol-badge">{conn.protocol}</span></td>
                  <td className="mono">{conn.local_addr}</td>
                  <td className="mono">{conn.local_port}</td>
                  <td className="mono">{conn.remote_addr || '-'}</td>
                  <td className="mono">{conn.remote_port || '-'}</td>
                  <td>
                    <span className="state-badge" style={{color: getStateColor(conn.state)}}>
                      {conn.state}
                    </span>
                  </td>
                  <td>{conn.process_name || conn.pid || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {networkConnections.length === 0 && !loading && (
            <div className="empty-state">{t('systemInfo.noNetworkData') || '暂无网络连接数据'}</div>
          )}
        </div>
      )}

      {activeTab === 'env' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('systemInfo.varName') || '变量名'}</th>
                <th>{t('systemInfo.value') || '值'}</th>
                <th>{t('systemInfo.type') || '类型'}</th>
              </tr>
            </thead>
            <tbody>
              {envVars.map((v, idx) => (
                <tr key={`${v.name}-${idx}`}>
                  <td className="mono highlight">{v.name}</td>
                  <td className="truncate" title={v.value}>{v.value}</td>
                  <td><span className="type-badge">{v.type}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          {envVars.length === 0 && !loading && (
            <div className="empty-state">{t('systemInfo.noEnvVars') || '暂无环境变量'}</div>
          )}
        </div>
      )}

      {activeTab === 'dlls' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('systemInfo.pid') || 'PID'}</th>
                <th>{t('systemInfo.process') || '进程'}</th>
                <th>{t('systemInfo.dllName') || 'DLL名称'}</th>
                <th>{t('systemInfo.version') || '版本'}</th>
                <th>{t('systemInfo.signed') || '签名'}</th>
                <th>{t('systemInfo.path') || '路径'}</th>
                <th>{t('systemInfo.size') || '大小'}</th>
              </tr>
            </thead>
            <tbody>
              {dlls.map((dll, idx) => (
                <tr key={`${dll.process_id}-${dll.name}-${idx}`}>
                  <td className="mono">{dll.process_id}</td>
                  <td>{dll.process_name}</td>
                  <td className="mono highlight">{dll.name}</td>
                  <td className="mono">{dll.version || '-'}</td>
                  <td>
                    <span className={`signature-badge ${dll.is_signed ? 'signed' : 'unsigned'}`}>
                      {dll.is_signed ? (t('systemInfo.signed') || '已签名') : (t('systemInfo.unsigned') || '未签名')}
                    </span>
                  </td>
                  <td className="truncate" title={dll.path}>{dll.path}</td>
                  <td className="mono">{(dll.size / 1024).toFixed(1)} KB</td>
                </tr>
              ))}
            </tbody>
          </table>
          {dlls.length === 0 && !loading && (
            <div className="empty-state">{t('systemInfo.noDllData') || '暂无DLL信息'}</div>
          )}
        </div>
      )}

      {activeTab === 'drivers' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('systemInfo.name') || '名称'}</th>
                <th>{t('systemInfo.displayName') || '显示名称'}</th>
                <th>{t('systemInfo.description') || '描述'}</th>
                <th>{t('systemInfo.status') || '状态'}</th>
                <th>{t('systemInfo.path') || '路径'}</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver, idx) => (
                <tr key={`${driver.name}-${idx}`}>
                  <td className="mono highlight">{driver.name}</td>
                  <td>{driver.display_name || driver.name}</td>
                  <td className="truncate">{driver.description || '-'}</td>
                  <td>
                    <span className={`status-badge ${driver.status?.toLowerCase() === 'running' ? 'running' : 'stopped'}`}>
                      {driver.status || t('common.unknown')}
                    </span>
                  </td>
                  <td className="truncate mono" title={driver.path}>{driver.path || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {drivers.length === 0 && !loading && (
            <div className="empty-state">{t('systemInfo.noDriverData') || '暂无驱动信息'}</div>
          )}
        </div>
      )}

      {activeTab === 'users' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('systemInfo.name') || '名称'}</th>
                <th>{t('systemInfo.fullName') || '全名'}</th>
                <th>{t('systemInfo.sid') || 'SID'}</th>
                <th>{t('systemInfo.type') || '类型'}</th>
                <th>{t('systemInfo.enabled') || '已启用'}</th>
                <th>{t('systemInfo.homeDir') || '主目录'}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={`${user.name}-${idx}`}>
                  <td className="highlight">{user.name}</td>
                  <td>{user.full_name || '-'}</td>
                  <td className="mono">{user.sid || '-'}</td>
                  <td>{user.type || t('systemInfo.user') || '用户'}</td>
                  <td>
                    <span className={`status-badge ${user.enabled ? 'running' : 'stopped'}`}>
                      {user.enabled ? (t('systemInfo.enabled') || '已启用') : (t('systemInfo.disabled') || '已禁用')}
                    </span>
                  </td>
                  <td className="truncate">{user.home_dir || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && !loading && (
            <div className="empty-state">
              {moduleErrors.users ? (
                <span className="error-message">{moduleErrors.users}</span>
              ) : (
                t('systemInfo.noUserData') || '暂无用户信息'
              )}
            </div>
          )}
        </div>
      )}

      {activeTab === 'registry' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('systemInfo.keyPath') || '注册表路径'}</th>
                <th>{t('systemInfo.name') || '名称'}</th>
                <th>{t('systemInfo.value') || '值'}</th>
                <th>{t('systemInfo.type') || '类型'}</th>
              </tr>
            </thead>
            <tbody>
              {registry.map((key, idx) => (
                <tr key={`${key.path}-${idx}`}>
                  <td className="truncate mono" title={key.path}>{key.path}</td>
                  <td className="highlight">{key.name}</td>
                  <td className="truncate" title={key.value}>{key.value || '-'}</td>
                  <td><span className="type-badge">{key.type}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          {registry.length === 0 && !loading && (
            <div className="empty-state">{t('systemInfo.noRegistryData') || '暂无注册表持久化键'}</div>
          )}
        </div>
      )}

      {activeTab === 'tasks' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('systemInfo.taskName') || '任务名称'}</th>
                <th>{t('systemInfo.path') || '路径'}</th>
                <th>{t('systemInfo.state') || '状态'}</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, idx) => (
                <tr key={`${task.name}-${idx}`}>
                  <td className="highlight">{task.name}</td>
                  <td className="truncate mono" title={task.path}>{task.path || '-'}</td>
                  <td>
                    <span className={`status-badge ${task.state?.toLowerCase() === 'running' ? 'running' : 'stopped'}`}>
                      {task.state || t('common.unknown')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {tasks.length === 0 && !loading && (
            <div className="empty-state">
              {moduleErrors.tasks ? (
                <span className="error-message">{moduleErrors.tasks}</span>
              ) : (
                t('systemInfo.noTasksData') || '暂无计划任务'
              )}
            </div>
          )}
        </div>
      )}

      {hoveredContent && (
        <div 
          className="content-float-panel"
          style={{ 
            left: hoveredContent.x + 10, 
            top: hoveredContent.y + 10,
            position: 'fixed',
            zIndex: 9999
          }}
        >
          <div className="float-panel-content">{hoveredContent.text}</div>
        </div>
      )}

      <style>{`
        .systeminfo-page {
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
        
        .systeminfo-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .btn-refresh {
          padding: 8px 16px;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid #00d9ff;
          border-radius: 6px;
          color: #00d9ff;
          cursor: pointer;
        }
        
        .btn-refresh:hover {
          background: rgba(0, 217, 255, 0.2);
        }
        
        .tab-nav {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
          background: rgba(255,255,255,0.05);
          padding: 4px;
          border-radius: 8px;
        }
        
        .tab-btn {
          padding: 10px 20px;
          background: transparent;
          border: none;
          color: #888;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
        }
        
        .tab-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        
        .tab-btn.active {
          background: #00d9ff;
          color: #000;
        }
        
        .system-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .system-card {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #333;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .card-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 217, 255, 0.1);
          border-radius: 8px;
          color: #00d9ff;
          font-weight: bold;
        }
        
        .card-header h3 {
          color: #00d9ff;
          font-size: 1.1rem;
          margin: 0;
        }
        
        .system-status {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          padding: 8px 12px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 6px;
          color: #22c55e;
          font-size: 0.9rem;
        }
        
        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .status-indicator.online {
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }
        
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .info-label {
          color: #888;
          font-size: 0.9rem;
        }
        
        .info-value {
          color: #eee;
          font-weight: 500;
        }
        
        .info-value.highlight {
          color: #00d9ff;
          font-size: 1.1rem;
        }
        
        .info-value.mono {
          font-family: monospace;
          font-size: 0.85rem;
        }
        
        .info-value.badge {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.85rem;
        }
        
        .info-value.badge.admin {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }
        
        .info-value.badge.user {
          background: rgba(255, 255, 255, 0.1);
          color: #888;
        }
        
        .resource-bars {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .resource-item {}
        
        .resource-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
        }
        
        .resource-name {
          color: #888;
          font-size: 0.85rem;
        }
        
        .resource-value {
          color: #eee;
          font-size: 0.85rem;
          font-family: monospace;
        }
        
        .resource-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .resource-fill {
          height: 100%;
          background: linear-gradient(90deg, #00d9ff, #0099cc);
          border-radius: 4px;
          transition: width 0.3s;
        }
        
        .resource-fill.memory {
          background: linear-gradient(90deg, #22c55e, #16a34a);
        }
        
        .time-display {
          text-align: center;
          padding: 20px 0;
        }
        
        .current-time {
          font-size: 2.5rem;
          font-weight: bold;
          color: #fff;
          font-family: monospace;
        }
        
        .current-date {
          font-size: 1rem;
          color: #888;
          margin-top: 4px;
        }
        
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
          gap: 16px;
          color: #888;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #16213e;
          border-top: 3px solid #00d9ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .error-state {
          padding: 40px;
          text-align: center;
          color: #ef4444;
        }
        
        .data-table-container {
          flex: 1;
          overflow: auto;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .data-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .data-table th {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          position: sticky;
          top: 0;
        }
        
        .data-table td {
          padding: 10px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #ddd;
        }
        
        .data-table tr:hover td {
          background: rgba(255,255,255,0.02);
        }
        
        .data-table .mono {
          font-family: monospace;
          color: #888;
        }
        
        .data-table .truncate {
          max-width: 300px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .protocol-badge {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .state-badge {
          font-weight: 600;
          font-size: 0.85rem;
        }

        .state-badge.running {
          color: #22c55e;
        }

        .state-badge.stopped {
          color: #ef4444;
        }
        
        .empty-state {
          padding: 40px;
          text-align: center;
          color: #888;
        }

        .empty-state .error-message {
          color: #ef4444;
          display: block;
          padding: 10px;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 6px;
          margin: 10px auto;
          max-width: 400px;
        }

        .data-table .highlight {
          color: #00d9ff;
        }

        .type-badge {
          background: rgba(168, 85, 247, 0.2);
          color: #a855f7;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
        }

        .signature-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .signature-badge.signed {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .signature-badge.unsigned {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .content-float-panel {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 1px solid #00d9ff;
          border-radius: 8px;
          padding: 12px 16px;
          max-width: 600px;
          max-height: 300px;
          overflow: auto;
          box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);
        }

        .content-float-panel .float-panel-content {
          color: #eee;
          font-family: monospace;
          font-size: 0.9rem;
          white-space: pre-wrap;
          word-break: break-all;
        }
      `}</style>
    </div>
  )
}

export default SystemInfo
