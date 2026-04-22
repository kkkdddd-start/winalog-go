import React, { useState } from 'react'
import { useI18n } from '../locales/I18n'
import { collectAPI, importAPI } from '../api'
import {
  Card,
  Tabs,
  Checkbox,
  Button,
  Input,
  Collapse,
  Row,
  Col,
  Space,
  Spin,
  message,
  Tooltip
} from 'antd'
import {
  ReloadOutlined,
  PlayCircleOutlined,
  UploadOutlined,
  FileOutlined,
  DeleteOutlined,
  WarningOutlined,
  InfoCircleOutlined
} from '@ant-design/icons'

const { TextArea } = Input
const { Panel } = Collapse

// ============ 类型定义 ============

type CollectMode = 'oneclick' | 'import' | 'evtx2csv'

interface LogChannel {
  id: string
  name: string
  category: string
  enabled: boolean
  log_path?: string
}

interface ExclusionPattern {
  id: string
  pattern: string
  type: 'channel' | 'path'
  enabled: boolean
  isCustom?: boolean
}

interface LogFormatOption {
  id: 'evtx' | 'etl' | 'csv' | 'log' | 'txt'
  name: string
  extension: string
  description: string
  defaultEnabled: boolean
  warning?: string
  forImport?: boolean
}

interface CollectOptions {
  includeSystemInfo: boolean
  includeProcesses: boolean
  includeNetwork: boolean
  includeDlls: boolean
  includeDrivers: boolean
  includeUsers: boolean

  includeRegistry: boolean
  includeTasks: boolean
  includePrefetch: boolean
  includeShimcache: boolean
  includeAmcache: boolean
  includeUserassist: boolean
  includeUSNJournal: boolean

  compress: boolean
  calculateHash: boolean
  workers: number
}

// ============ 常量 ============

const DEFAULT_CHANNELS: LogChannel[] = [
  { id: 'security', name: 'Security', category: 'Windows Event Logs', enabled: true },
  { id: 'system', name: 'System', category: 'Windows Event Logs', enabled: true },
  { id: 'application', name: 'Application', category: 'Windows Event Logs', enabled: true },
  { id: 'setup', name: 'Setup', category: 'Windows Event Logs', enabled: false },
  { id: 'sysmon', name: 'Microsoft-Windows-Sysmon/Operational', category: 'Sysmon', enabled: true },
  { id: 'powershell', name: 'Microsoft-Windows-PowerShell/Operational', category: 'PowerShell', enabled: false },
  { id: 'wmi', name: 'Microsoft-Windows-WMI-Activity/Operational', category: 'WMI', enabled: false },
  { id: 'taskscheduler', name: 'Microsoft-Windows-TaskScheduler/Operational', category: 'Task Scheduler', enabled: false },
  { id: 'sysmon-drivers', name: 'System', category: 'Drivers & Services', enabled: false },
  { id: 'services', name: 'Services', category: 'Drivers & Services', enabled: false },
]

const DEFAULT_EXCLUSIONS: ExclusionPattern[] = [
  { id: 'diag-perf', pattern: 'Microsoft-Windows-Diagnostics-Performance/*', type: 'channel', enabled: true },
  { id: 'kernel-power', pattern: 'Microsoft-Windows-Kernel-Power/*', type: 'channel', enabled: true },
  { id: 'diagnostics', pattern: '*Diagnostics*', type: 'path', enabled: true },
  { id: 'debug', pattern: '*Debug*', type: 'path', enabled: true },
  { id: 'whea', pattern: '*WHEA*', type: 'path', enabled: true },
  { id: 'livedump', pattern: '*LiveDump*', type: 'path', enabled: true },
]

// 日志格式配置
// 一键采集只支持 evtx 和 etl
// 导入支持所有格式
const LOG_FORMATS: LogFormatOption[] = [
  { id: 'evtx', name: '.evtx', extension: '.evtx', description: 'Windows Event Log 导出文件', defaultEnabled: true },
  { id: 'etl', name: '.etl', extension: '.etl', description: 'Event Trace Log', defaultEnabled: true },
  { id: 'csv', name: '.csv', extension: '.csv', description: '结构化日志（IIS、Sysmon、Windows Firewall 等）', defaultEnabled: false, warning: '需要内容分析', forImport: true },
  { id: 'log', name: '.log', extension: '.log', description: '文本日志', defaultEnabled: false, warning: '默认禁用', forImport: true },
  { id: 'txt', name: '.txt', extension: '.txt', description: '文本日志', defaultEnabled: false, warning: '默认禁用', forImport: true },
]

// ============ 工具函数 ============

const categorizeChannel = (name: string): string => {
  if (/^Security$|^System$|^Application$|^Setup$/i.test(name)) return 'Windows Event Logs'
  if (/Sysmon/i.test(name)) return 'Sysmon'
  if (/PowerShell/i.test(name)) return 'PowerShell'
  if (/WMI-Activity/i.test(name)) return 'WMI'
  if (/TaskScheduler/i.test(name)) return 'Task Scheduler'
  if (/^Microsoft-Windows-/.test(name)) return 'Microsoft Windows'
  if (/^(Security|System|Application)$/.test(name)) return 'Windows Event Logs'
  return 'Other'
}

const groupByCategory = (items: LogChannel[]): Record<string, LogChannel[]> => {
  return items.reduce((acc, item) => {
    const category = item.category || 'Other'
    if (!acc[category]) acc[category] = []
    acc[category].push(item)
    return acc
  }, {} as Record<string, LogChannel[]>)
}

const isDefaultChannel = (name: string): boolean => {
  const defaults = ['Security', 'System', 'Application', 'Microsoft-Windows-Sysmon/Operational']
  return defaults.includes(name)
}

// ============ 组件 ============

function Collect() {
  const { t } = useI18n()

  // 采集模式
  const [collectMode, setCollectMode] = useState<CollectMode>('oneclick')

  // EVTX 转 CSV 专用状态
  const [evtx2csvOutputDir, setEvtx2csvOutputDir] = useState('')
  const [evtx2csvIncludeXml, setEvtx2csvIncludeXml] = useState(false)
  const [evtx2csvCalculateHash, setEvtx2csvCalculateHash] = useState(true)

  // 采集选项 - 默认全部关闭，用户手动开启
  const [collectOptions, setCollectOptions] = useState<CollectOptions>({
    includeSystemInfo: false,
    includeProcesses: false,
    includeNetwork: false,
    includeDlls: false,
    includeDrivers: false,
    includeUsers: false,
    includeRegistry: false,
    includeTasks: false,
    includePrefetch: false,
    includeShimcache: false,
    includeAmcache: false,
    includeUserassist: false,
    includeUSNJournal: false,
    compress: true,
    calculateHash: true,
    workers: 4,
  })

  // 日志源通道
  const [channels, setChannels] = useState<LogChannel[]>(DEFAULT_CHANNELS)
  const [isLoadingChannels, setIsLoadingChannels] = useState(false)
  const [lastFetched, setLastFetched] = useState<Date | null>(null)

  // 排除选项
  const [exclusions, setExclusions] = useState<ExclusionPattern[]>(DEFAULT_EXCLUSIONS)
  const [customExclude, setCustomExclude] = useState('')

  // 日志格式 - 一键采集和导入日志共用，但默认值不同
  const [oneClickFormats, setOneClickFormats] = useState<Record<string, boolean>>(() => {
    const formats: Record<string, boolean> = {}
    LOG_FORMATS.filter(f => !f.forImport).forEach(f => { formats[f.id] = f.defaultEnabled })
    return formats
  })

  const [importFormats, setImportFormats] = useState<Record<string, boolean>>(() => {
    const formats: Record<string, boolean> = {}
    LOG_FORMATS.forEach(f => { formats[f.id] = f.defaultEnabled })
    return formats
  })

  // 自定义路径
  const [customPaths, setCustomPaths] = useState('')
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  // 状态
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  // ============ 处理函数 ============

  // 刷新通道列表
  const fetchChannels = async () => {
    setIsLoadingChannels(true)
    try {
      const res = await collectAPI.getChannels()
      const serverChannels = res.data.channels || []

      const merged = serverChannels.map((ch: any) => {
        const existing = channels.find(c => c.name === ch.name)
        return {
          id: ch.name,
          name: ch.name,
          category: ch.category || categorizeChannel(ch.name),
          enabled: existing?.enabled ?? isDefaultChannel(ch.name),
          log_path: ch.log_path || channelToFilePath(ch.name),
        }
      })

      setChannels(merged)
      setLastFetched(new Date())
      message.success(`已获取 ${merged.length} 个日志通道`)
    } catch (err) {
      message.error('获取通道列表失败，使用默认列表')
    } finally {
      setIsLoadingChannels(false)
    }
  }

  // 切换选项
  const toggleOption = (key: keyof CollectOptions) => {
    setCollectOptions(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // 全选/取消全选
  const selectAllChannels = (category?: string) => {
    setChannels(prev => prev.map(ch =>
      category
        ? (ch.category === category ? { ...ch, enabled: true } : ch)
        : { ...ch, enabled: true }
    ))
  }

  const deselectAllChannels = (category?: string) => {
    setChannels(prev => prev.map(ch =>
      category
        ? (ch.category === category ? { ...ch, enabled: false } : ch)
        : { ...ch, enabled: false }
    ))
  }

  // 切换排除项
  const toggleExclusion = (id: string) => {
    setExclusions(prev => prev.map(e =>
      e.id === id ? { ...e, enabled: !e.enabled } : e
    ))
  }

  // 添加自定义排除
  const addCustomExclusion = () => {
    if (!customExclude.trim()) return
    setExclusions(prev => [
      ...prev,
      { id: `custom-${Date.now()}`, pattern: customExclude, type: 'path', enabled: true, isCustom: true }
    ])
    setCustomExclude('')
  }

  // 删除自定义排除
  const removeExclusion = (id: string) => {
    setExclusions(prev => prev.filter(e => e.id !== id))
  }

  // 切换日志格式 (一键采集)
  const toggleOneClickFormat = (formatId: string) => {
    setOneClickFormats(prev => ({ ...prev, [formatId]: !prev[formatId] }))
  }

  // 切换日志格式 (导入)
  const toggleImportFormat = (formatId: string) => {
    setImportFormats(prev => ({ ...prev, [formatId]: !prev[formatId] }))
  }

  // 文件选择 - 上传到服务器
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const files = Array.from(e.target.files)
      const newPaths: string[] = []
      
      setLoading(true)
      
      for (const file of files) {
        try {
          const response = await collectAPI.uploadFile(file)
          if (response.data.success) {
            newPaths.push(response.data.path)
          }
        } catch (err) {
          console.error('Failed to upload file:', file.name, err)
          message.error(`上传文件失败: ${file.name}`)
        }
      }
      
      if (newPaths.length > 0) {
        setSelectedFiles(prev => [...prev, ...files])
        setCustomPaths(prev => prev ? prev + '\n' + newPaths.join('\n') : newPaths.join('\n'))
        message.success(`成功上传 ${newPaths.length} 个文件`)
      }
      
      setLoading(false)
    }
  }

  const handleRemoveFile = (index: number) => {
    setSelectedFiles(prev => {
      const newFiles = [...prev]
      newFiles.splice(index, 1)

      const keptPaths = new Set()
      newFiles.forEach(f => keptPaths.add((f as any).path || f.name))
      setCustomPaths(prev => prev.split('\n').filter(p => keptPaths.has(p)).join('\n'))

      return newFiles
    })
  }

  const handleClearFiles = () => {
    setSelectedFiles([])
    setCustomPaths('')
  }

  // 将通道名称转换为文件路径
  const channelToFilePath = (channelName: string): string => {
    const basePath = 'C:\\Windows\\System32\\winevt\\Logs\\'
    const normalizedName = channelName.replace(/\//g, '%2F')
    return `${basePath}${normalizedName}.evtx`
  }

  // 获取选中通道对应的文件路径（使用后端返回的真实路径）
  const getSelectedChannelPaths = (): string[] => {
    return channels
      .filter(ch => ch.enabled && ch.log_path)
      .map(ch => ch.log_path!)
  }

  // 导入选中通道的日志
  const handleImportChannels = async () => {
    const paths = getSelectedChannelPaths()
    if (paths.length === 0) {
      message.warning('请先选择要导入的日志通道')
      return
    }

    const enabledFormats = Object.entries(importFormats)
      .filter(([, enabled]) => enabled)
      .map(([format]) => format)

    if (enabledFormats.length === 0) {
      message.warning('请至少选择一种日志格式')
      return
    }

    setLoading(true)
    setStatus(`正在导入 ${paths.length} 个通道的日志...`)

    try {
      const response = await importAPI.importLogs(paths, {
        enabled_formats: enabledFormats,
        skip_patterns: exclusions.filter(e => e.type === 'path' && e.enabled).map(e => e.pattern),
      })

      if (response.data.success) {
        const stats = `
导入完成!
- 成功: ${response.data.files_imported} 个文件
- 失败: ${response.data.files_failed} 个文件
- 事件: ${response.data.events_imported} 条
${response.data.errors?.length > 0 ? `- 错误: ${response.data.errors.length} 个` : ''}`
        setStatus(stats)
        message.success('导入完成')
      } else {
        setStatus(`导入失败: ${response.data.errors?.join(', ')}`)
        message.error('导入失败')
      }
    } catch (error: any) {
      setStatus(`导入失败: ${error.message}`)
      message.error('导入失败')
    } finally {
      setLoading(false)
    }
  }

  // ============ 采集操作 ============

  const handleCollect = async () => {
    const enabledChannels = channels.filter(ch => ch.enabled)

    if (enabledChannels.length === 0) {
      message.warning('请至少选择一个日志源')
      return
    }

    const enabledFormats = Object.entries(oneClickFormats)
      .filter(([, enabled]) => enabled)
      .map(([format]) => format)

    setLoading(true)
    setStatus('正在采集...')

    try {
      const response = await collectAPI.collect({
        sources: enabledChannels.map(ch => ch.name),
        formats: enabledFormats,
        options: {
          workers: collectOptions.workers,
          include_system_info: collectOptions.includeSystemInfo,
          include_processes: collectOptions.includeProcesses,
          include_network: collectOptions.includeNetwork,
          include_dlls: collectOptions.includeDlls,
          include_drivers: collectOptions.includeDrivers,
          include_users: collectOptions.includeUsers,
          include_registry: collectOptions.includeRegistry,
          include_tasks: collectOptions.includeTasks,
          include_prefetch: collectOptions.includePrefetch,
          include_shimcache: collectOptions.includeShimcache,
          include_amcache: collectOptions.includeAmcache,
          include_userassist: collectOptions.includeUserassist,
          include_usn_journal: collectOptions.includeUSNJournal,
          include_logs: true,
          compress: collectOptions.compress,
          calculate_hash: collectOptions.calculateHash,
        },
      })

      if (response.data.status === 'completed') {
        setStatus(`采集完成!\n输出路径: ${response.data.output_path}\n耗时: ${response.data.duration}`)
        message.success('采集完成')
      } else if (response.data.status === 'error') {
        setStatus(`采集失败: ${response.data.message}`)
        message.error('采集失败')
      }
    } catch (error: any) {
      setStatus(`采集失败: ${error.message}`)
      message.error('采集失败')
    } finally {
      setLoading(false)
    }
  }

  const handleImport = async () => {
    const customPathsList = customPaths.split('\n').filter(p => p.trim())

    if (customPathsList.length === 0) {
      message.warning('请选择要导入的文件或输入路径')
      return
    }

    const enabledFormats = Object.entries(importFormats)
      .filter(([, enabled]) => enabled)
      .map(([format]) => format)

    if (enabledFormats.length === 0) {
      message.warning('请至少选择一种日志格式')
      return
    }

    setLoading(true)
    setStatus('正在导入...')

    try {
      const response = await importAPI.importLogs(customPathsList, {
        enabled_formats: enabledFormats,
        skip_patterns: exclusions.filter(e => e.type === 'path' && e.enabled).map(e => e.pattern),
      })

      if (response.data.success) {
        const stats = `
导入完成!
- 成功: ${response.data.files_imported} 个文件
- 失败: ${response.data.files_failed} 个文件
- 事件: ${response.data.events_imported} 条
${response.data.errors?.length > 0 ? `- 错误: ${response.data.errors.length} 个` : ''}`
        setStatus(stats)
        message.success('导入完成')
      } else {
        setStatus(`导入失败: ${response.data.errors?.join(', ')}`)
        message.error('导入失败')
      }
    } catch (error: any) {
      setStatus(`导入失败: ${error.message}`)
      message.error('导入失败')
    } finally {
      setLoading(false)
    }
  }

  const handleImportWithAlert = async () => {
    const customPathsList = customPaths.split('\n').filter(p => p.trim())

    if (customPathsList.length === 0) {
      message.warning('请选择要导入的文件或输入路径')
      return
    }

    setLoading(true)
    setStatus('正在导入并分析...')

    try {
      const response = await importAPI.importLogsWithAlert(customPathsList)

      if (response.data.status === 'completed') {
        const stats = `
导入并分析完成!
- 导入: ${response.data.imported} 个文件
- 失败: ${response.data.failed} 个文件
- 事件: ${response.data.total_events} 条
- 告警: ${response.data.alerts_generated || 0} 条
${response.data.alert_error ? `- 告警错误: ${response.data.alert_error}` : ''}`
        setStatus(stats)
        message.success('导入并分析完成')
      } else {
        setStatus(`操作失败: ${response.data.message}`)
        message.error('操作失败')
      }
    } catch (error: any) {
      setStatus(`操作失败: ${error.message}`)
      message.error('操作失败')
    } finally {
      setLoading(false)
    }
  }

  // EVTX 转 CSV
  const handleEvtx2Csv = async () => {
    const customPathsList = customPaths.split('\n').filter(p => p.trim())

    if (customPathsList.length === 0) {
      message.warning('请选择要转换的文件或输入路径')
      return
    }

    setLoading(true)
    setStatus('正在转换...')

    try {
      const response = await collectAPI.evtx2csv(customPathsList, {
        output_dir: evtx2csvOutputDir || undefined,
        include_xml: evtx2csvIncludeXml,
        calculate_hash: evtx2csvCalculateHash,
      })

      if (response.data) {
        let stats = `
转换完成!
- 总事件数: ${response.data.total_events}
- 成功: ${response.data.total_files - response.data.failed_files} 个文件
- 失败: ${response.data.failed_files} 个文件`

        if (response.data.results?.length > 0) {
          stats += '\n\n转换结果:'
          response.data.results.forEach((r: any) => {
            if (r.error) {
              stats += `\n- ${r.input_path}: 失败 - ${r.error}`
            } else {
              stats += `\n- ${r.input_path} -> ${r.output_path} (${r.event_count} 条事件)`
            }
          })
        }

        if (response.data.errors?.length > 0) {
          stats += '\n\n错误:\n' + response.data.errors.join('\n')
        }

        setStatus(stats)
        message.success('转换完成')
      } else {
        setStatus('转换失败')
        message.error('转换失败')
      }
    } catch (error: any) {
      setStatus(`转换失败: ${error.message}`)
      message.error('转换失败')
    } finally {
      setLoading(false)
    }
  }

  // ============ 渲染函数 ============

  const renderSystemInfo = () => (
    <div className="option-group">
      <div className="option-row">
        <Checkbox checked={collectOptions.includeSystemInfo} onChange={() => toggleOption('includeSystemInfo')}>
          系统信息
        </Checkbox>
        <Checkbox checked={collectOptions.includeProcesses} onChange={() => toggleOption('includeProcesses')}>
          进程信息
        </Checkbox>
        <Checkbox checked={collectOptions.includeNetwork} onChange={() => toggleOption('includeNetwork')}>
          网络连接
        </Checkbox>
        <Checkbox checked={collectOptions.includeDlls} onChange={() => toggleOption('includeDlls')}>
          DLL
        </Checkbox>
      </div>
      <div className="option-row">
        <Checkbox checked={collectOptions.includeDrivers} onChange={() => toggleOption('includeDrivers')}>
          驱动程序
        </Checkbox>
        <Checkbox checked={collectOptions.includeUsers} onChange={() => toggleOption('includeUsers')}>
          本地用户
        </Checkbox>
      </div>
    </div>
  )

  const renderForensicArtifacts = () => (
    <div className="artifacts-grid">
      <div className="artifact-item">
        <Checkbox checked={collectOptions.includePrefetch} onChange={() => toggleOption('includePrefetch')}>
          <span className="artifact-icon">📁</span>
          <span className="artifact-name">预读取文件</span>
        </Checkbox>
        <Tooltip title="分析程序执行历史">
          <InfoCircleOutlined style={{ marginLeft: 4, color: '#999' }} />
        </Tooltip>
      </div>

      <div className="artifact-item">
        <Checkbox checked={collectOptions.includeShimcache} onChange={() => toggleOption('includeShimcache')}>
          <span className="artifact-icon">🔧</span>
          <span className="artifact-name">ShimCache</span>
        </Checkbox>
        <Tooltip title="应用程序兼容性缓存">
          <InfoCircleOutlined style={{ marginLeft: 4, color: '#999' }} />
        </Tooltip>
      </div>

      <div className="artifact-item">
        <Checkbox checked={collectOptions.includeAmcache} onChange={() => toggleOption('includeAmcache')}>
          <span className="artifact-icon">📝</span>
          <span className="artifact-name">Amcache</span>
        </Checkbox>
        <Tooltip title="程序执行痕迹">
          <InfoCircleOutlined style={{ marginLeft: 4, color: '#999' }} />
        </Tooltip>
      </div>

      <div className="artifact-item">
        <Checkbox checked={collectOptions.includeUserassist} onChange={() => toggleOption('includeUserassist')}>
          <span className="artifact-icon">🎯</span>
          <span className="artifact-name">UserAssist</span>
        </Checkbox>
        <Tooltip title="用户活动统计">
          <InfoCircleOutlined style={{ marginLeft: 4, color: '#999' }} />
        </Tooltip>
      </div>

      <div className="artifact-item">
        <Checkbox checked={collectOptions.includeRegistry} onChange={() => toggleOption('includeRegistry')}>
          <span className="artifact-icon">🗄️</span>
          <span className="artifact-name">注册表</span>
        </Checkbox>
        <Tooltip title="注册表持久化点">
          <InfoCircleOutlined style={{ marginLeft: 4, color: '#999' }} />
        </Tooltip>
      </div>

      <div className="artifact-item">
        <Checkbox checked={collectOptions.includeTasks} onChange={() => toggleOption('includeTasks')}>
          <span className="artifact-icon">📅</span>
          <span className="artifact-name">计划任务</span>
        </Checkbox>
        <Tooltip title="Windows 计划任务">
          <InfoCircleOutlined style={{ marginLeft: 4, color: '#999' }} />
        </Tooltip>
      </div>

      <div className="artifact-item">
        <Checkbox checked={collectOptions.includeUSNJournal} onChange={() => toggleOption('includeUSNJournal')}>
          <span className="artifact-icon">📄</span>
          <span className="artifact-name">USN Journal</span>
        </Checkbox>
        <Tooltip title="更新序列号日志">
          <InfoCircleOutlined style={{ marginLeft: 4, color: '#999' }} />
        </Tooltip>
      </div>
    </div>
  )

  const renderChannels = () => (
    <div className="channels-section">
      <div className="channels-header">
        <span className="channels-title">日志源</span>
        <Space>
          <Button type="link" size="small" onClick={() => selectAllChannels()}>全选</Button>
          <Button type="link" size="small" onClick={() => deselectAllChannels()}>取消全选</Button>
          <Button type="link" size="small" icon={<ReloadOutlined />} loading={isLoadingChannels} onClick={fetchChannels}>
            {lastFetched ? '刷新' : '获取'}
          </Button>
          {lastFetched && <span className="last-fetched">{lastFetched.toLocaleTimeString()}</span>}
        </Space>
      </div>

      <Spin spinning={isLoadingChannels} tip="正在获取日志通道...">
        <Collapse defaultActiveKey={['Windows Event Logs']}>
          {Object.entries(groupByCategory(channels)).map(([category, chs]) => (
            <Panel
              key={category}
              header={
                <Space>
                  <span>{category}</span>
                  <span className="channel-count">({chs.filter(c => c.enabled).length}/{chs.length})</span>
                </Space>
              }
              extra={
                <Space size="small" onClick={e => e.stopPropagation()}>
                  <Button type="link" size="small" onClick={() => selectAllChannels(category)}>全选</Button>
                  <Button type="link" size="small" onClick={() => deselectAllChannels(category)}>取消</Button>
                </Space>
              }
            >
              <Checkbox.Group value={chs.filter(c => c.enabled).map(c => c.id)} onChange={(values) => {
                setChannels(prev => prev.map(ch =>
                  ch.category === category ? { ...ch, enabled: values.includes(ch.id) } : ch
                ))
              }}>
                <Row gutter={[16, 8]}>
                  {chs.map(ch => (
                    <Col span={8} key={ch.id}>
                      <Checkbox value={ch.id}>
                        <span className="channel-name" title={ch.name}>{ch.name}</span>
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Panel>
          ))}
        </Collapse>
      </Spin>
    </div>
  )

  const renderLogFormats = (mode: 'oneclick' | 'import') => {
    const formats = mode === 'oneclick' ? oneClickFormats : importFormats
    const toggleFormat = mode === 'oneclick' ? toggleOneClickFormat : toggleImportFormat

    return (
      <div className="formats-grid">
        {LOG_FORMATS.filter(f => mode === 'import' || !f.forImport).map(format => (
          <div
            key={format.id}
            className={`format-item ${formats[format.id] ? 'enabled' : ''}`}
            onClick={() => toggleFormat(format.id)}
          >
            <Checkbox checked={formats[format.id]} />
            <div className="format-info">
              <span className="format-name">{format.name}</span>
              <span className="format-desc">{format.description}</span>
              {format.warning && formats[format.id] && (
                <span className="format-warning">
                  <WarningOutlined /> {format.warning}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderExclusions = () => (
    <div className="exclusion-section">
      <Row gutter={16}>
        <Col span={12}>
          <div className="exclusion-group">
            <div className="exclusion-title">
              <span>排除通道</span>
              <span className="exclusion-hint">（采集时生效）</span>
            </div>
            {exclusions.filter(e => e.type === 'channel').map(e => (
              <Checkbox key={e.id} checked={e.enabled} onChange={() => toggleExclusion(e.id)}>
                {e.pattern}
              </Checkbox>
            ))}
          </div>
        </Col>
        <Col span={12}>
          <div className="exclusion-group">
            <div className="exclusion-title">
              <span>排除文件模式</span>
              <span className="exclusion-hint">（导入时生效）</span>
            </div>
            {exclusions.filter(e => e.type === 'path').map(e => (
              <div key={e.id} className="exclusion-item">
                <Checkbox checked={e.enabled} onChange={() => toggleExclusion(e.id)}>
                  {e.pattern}
                </Checkbox>
                {e.isCustom && (
                  <Button type="link" size="small" danger onClick={() => removeExclusion(e.id)}>
                    删除
                  </Button>
                )}
              </div>
            ))}
            <div className="custom-exclusion">
              <Input
                placeholder="输入自定义排除模式"
                value={customExclude}
                onChange={e => setCustomExclude(e.target.value)}
                onPressEnter={addCustomExclusion}
                style={{ width: 200, marginRight: 8 }}
              />
              <Button onClick={addCustomExclusion}>添加</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )

  const renderCustomPaths = () => (
    <div className="paths-section">
      <div className="file-selector">
        <input
          type="file"
          id="file-input"
          multiple
          accept=".evtx,.etl,.csv,.log,.txt"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        <label htmlFor="file-input" className="file-select-btn">
          <UploadOutlined /> 选择文件
        </label>
        <span className="file-hint">支持 .evtx, .etl, .csv, .log, .txt 格式</span>
      </div>

      <div className="paths-input">
        <TextArea
          value={customPaths}
          onChange={e => setCustomPaths(e.target.value)}
          placeholder="或输入路径（每行一个，支持通配符）&#10;例如:&#10;C:\Logs\*.evtx&#10;C:\Windows\System32\winevt\Logs\*.evtx"
          rows={4}
        />
      </div>

      {selectedFiles.length > 0 && (
        <div className="selected-files">
          <div className="selected-files-header">
            <span>已选择: {selectedFiles.length} 个文件</span>
            <Button type="link" size="small" danger onClick={handleClearFiles}>清除全部</Button>
          </div>
          <div className="file-list">
            {selectedFiles.map((file, index) => (
              <div key={index} className="file-item">
                <FileOutlined />
                <span className="file-name">{file.name}</span>
                <span className="file-size">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                <Button type="link" size="small" danger onClick={() => handleRemoveFile(index)}>
                  <DeleteOutlined />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  // ============ 主渲染 ============

  return (
    <div className="collect-page">
      <div className="page-header">
        <h2>{t('collect.title') || '日志采集'}</h2>
        <p className="page-desc">
          {collectMode === 'oneclick'
            ? '自动发现并采集 Windows 系统上的所有日志源'
            : collectMode === 'import'
            ? '将日志文件解析后存入数据库，支持查询、分析、告警'
            : '将 Windows Event Log (.evtx) 文件转换为 CSV 格式'}
        </p>
      </div>

      {/* 采集模式选择 */}
      <Card className="mode-selector">
        <Tabs activeKey={collectMode} onChange={(key) => setCollectMode(key as CollectMode)} centered>
          <Tabs.TabPane tab={<span className="tab-title"><PlayCircleOutlined />一键采集</span>} key="oneclick" />
          <Tabs.TabPane tab={<span className="tab-title"><UploadOutlined />导入日志</span>} key="import" />
          <Tabs.TabPane tab={<span className="tab-title"><FileOutlined />EVTX 转 CSV</span>} key="evtx2csv" />
        </Tabs>
      </Card>

      {/* 一键采集模式 */}
      {collectMode === 'oneclick' && (
        <Card className="collect-card">
          {/* 系统信息 */}
          <div className="section">
            <div className="section-header">
              <h4>系统信息</h4>
            </div>
            {renderSystemInfo()}
          </div>

          {/* 取证Artifacts */}
          <div className="section">
            <div className="section-header">
              <h4>取证Artifacts</h4>
              <span className="section-hint">用于分析系统使用痕迹和持久化行为</span>
            </div>
            {renderForensicArtifacts()}
          </div>

          {/* 日志格式 */}
          <div className="section">
            <div className="section-header">
              <h4>日志格式</h4>
              <span className="section-hint">一键采集只支持 .evtx 和 .etl 格式</span>
            </div>
            {renderLogFormats('oneclick')}
          </div>

          {/* 日志源 */}
          <div className="section">
            {renderChannels()}
          </div>

          {/* 性能设置 */}
          <div className="section">
            <div className="section-header"><h4>性能设置</h4></div>
            <div className="performance-settings">
              <div className="setting-item">
                <span className="setting-label">并行线程:</span>
                <Space>
                  {[1, 2, 4, 8].map(n => (
                    <Button
                      key={n}
                      type={collectOptions.workers === n ? 'primary' : 'default'}
                      onClick={() => setCollectOptions(prev => ({ ...prev, workers: n }))}
                    >
                      {n}
                    </Button>
                  ))}
                </Space>
              </div>
              <div className="setting-hint">
                <InfoCircleOutlined />
                <span>SSD 建议 4 线程, HDD 建议 2 线程</span>
              </div>
            </div>
          </div>

          {/* 输出选项 */}
          <div className="section">
            <div className="section-header"><h4>输出选项</h4></div>
            <div className="output-options">
              <Checkbox checked={collectOptions.compress} onChange={() => toggleOption('compress')}>
                压缩输出 (ZIP)
              </Checkbox>
              <Checkbox checked={collectOptions.calculateHash} onChange={() => toggleOption('calculateHash')}>
                计算 SHA256 哈希
              </Checkbox>
            </div>
          </div>

          {/* 开始采集 */}
          <div className="action-section">
            <Button type="primary" size="large" icon={<PlayCircleOutlined />} onClick={handleCollect} loading={loading} block>
              开始采集
            </Button>
          </div>
        </Card>
      )}

      {/* 导入日志模式 */}
      {collectMode === 'import' && (
        <Card className="collect-card">
          {/* 日志格式 */}
          <div className="section">
            <div className="section-header">
              <h4>选择日志格式</h4>
              <span className="section-hint">默认只启用 .evtx 和 .etl 格式</span>
            </div>
            {renderLogFormats('import')}
          </div>

          {/* 日志源 */}
          <div className="section">
            <div className="section-header">
              <h4>日志源</h4>
              <Space>
                <Button type="link" size="small" icon={<ReloadOutlined />} onClick={fetchChannels}>刷新</Button>
                <Button type="primary" size="small" icon={<UploadOutlined />} onClick={handleImportChannels} loading={loading} disabled={channels.filter(c => c.enabled).length === 0}>
                  导入选中通道
                </Button>
              </Space>
            </div>
            <Checkbox.Group value={channels.filter(c => c.enabled).map(c => c.id)} onChange={(values) => {
              setChannels(prev => prev.map(ch => ({ ...ch, enabled: values.includes(ch.id) })))
            }}>
              <Row gutter={[16, 8]}>
                {channels.map(ch => (
                  <Col span={8} key={ch.id}>
                    <Checkbox value={ch.id}>{ch.name}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
            <div className="channel-import-hint">
              <InfoCircleOutlined />
              <span>选择日志源后点击"导入选中通道"直接导入，或在下方输入自定义路径</span>
            </div>
          </div>

          {/* 排除选项 */}
          <div className="section">
            <Collapse defaultActiveKey={['exclusion']}>
              <Panel header="排除选项" key="exclusion">
                {renderExclusions()}
              </Panel>
            </Collapse>
          </div>

          {/* 自定义路径 */}
          <div className="section">
            <div className="section-header"><h4>选择文件</h4></div>
            {renderCustomPaths()}
          </div>

          {/* 操作按钮 */}
          <div className="action-section">
            <Space size="large">
              <Button type="primary" size="large" icon={<UploadOutlined />} onClick={handleImport} loading={loading}>
                导入日志
              </Button>
              <Button size="large" icon={<WarningOutlined />} onClick={handleImportWithAlert} loading={loading}>
                导入并分析（触发告警）
              </Button>
            </Space>
            <div className="action-hint">
              <InfoCircleOutlined />
              <span>导入日志: 仅解析并存入数据库 | 导入分析: 导入同时触发告警引擎</span>
            </div>
          </div>
        </Card>
      )}

      {/* EVTX 转 CSV 模式 */}
      {collectMode === 'evtx2csv' && (
        <Card className="collect-card">
          {/* 说明 */}
          <div className="section">
            <p className="section-desc">
              将 Windows Event Log (.evtx) 文件转换为 CSV 格式，方便第三方工具分析
            </p>
          </div>

          {/* 选择文件 */}
          <div className="section">
            <div className="section-header"><h4>选择文件</h4></div>
            <div className="paths-section">
              <div className="file-selector">
                <input
                  type="file"
                  id="evtx-file-input"
                  multiple
                  accept=".evtx"
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
                <label htmlFor="evtx-file-input" className="file-select-btn">
                  <UploadOutlined /> 选择 EVTX 文件
                </label>
                <span className="file-hint">支持 .evtx 格式</span>
              </div>

              <div className="paths-input">
                <TextArea
                  value={customPaths}
                  onChange={e => setCustomPaths(e.target.value)}
                  placeholder="或输入路径（每行一个，支持通配符）&#10;例如:&#10;C:\Logs\*.evtx&#10;C:\Windows\System32\winevt\Logs\Security.evtx"
                  rows={4}
                />
              </div>

              {selectedFiles.length > 0 && (
                <div className="selected-files">
                  <div className="selected-files-header">
                    <span>已选择: {selectedFiles.length} 个文件</span>
                    <Button type="link" size="small" danger onClick={handleClearFiles}>清除全部</Button>
                  </div>
                  <div className="file-list">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="file-item">
                        <FileOutlined />
                        <span className="file-name">{file.name}</span>
                        <span className="file-size">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        <Button type="link" size="small" danger onClick={() => handleRemoveFile(index)}>
                          <DeleteOutlined />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 输出选项 */}
          <div className="section">
            <div className="section-header"><h4>输出选项</h4></div>
            <div className="output-options">
              <div className="output-dir-input">
                <span className="output-dir-label">输出目录:</span>
                <Input
                  value={evtx2csvOutputDir}
                  onChange={e => setEvtx2csvOutputDir(e.target.value)}
                  placeholder="默认保存在原文件目录"
                  style={{ width: 300 }}
                />
                <Button>浏览</Button>
              </div>
              <Checkbox checked={evtx2csvIncludeXml} onChange={() => setEvtx2csvIncludeXml(!evtx2csvIncludeXml)}>
                保留原始 XML 列
              </Checkbox>
              <Checkbox checked={evtx2csvCalculateHash} onChange={() => setEvtx2csvCalculateHash(!evtx2csvCalculateHash)}>
                计算 SHA256 哈希
              </Checkbox>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="action-section">
            <Button type="primary" size="large" icon={<FileOutlined />} onClick={handleEvtx2Csv} loading={loading} block>
              开始转换
            </Button>
          </div>
        </Card>
      )}

      {/* 状态输出 */}
      {status && (
        <Card className="status-card">
          <div className="status-header">
            <span>执行结果</span>
            <Button type="link" size="small" onClick={() => setStatus('')}>清除</Button>
          </div>
          <pre className="status-content">{status}</pre>
        </Card>
      )}

      {/* CLI 参考 */}
      <Card className="cli-card">
        <div className="section-header"><h4>CLI 参考</h4></div>
        <pre className="cli-code">{`# 一键采集
winalog collect --output ./evidence.zip --compress --threads ${collectOptions.workers}

# 导入日志
winalog import /path/to/logs --format evtx

# 导入并分析（带告警）
winalog import /path/to/logs --format evtx --alert

# EVTX 转 CSV
winalog convert /path/to/logs --output-dir ./csv_output`}</pre>
      </Card>

      {/* 样式 */}
      <style>{`
        .collect-page { padding: 24px; max-width: 1200px; margin: 0 auto; background: #1a1a2e; min-height: 100vh; }
        .page-header { margin-bottom: 24px; }
        .page-header h2 { margin: 0 0 8px 0; font-size: 24px; font-weight: 600; color: #00d9ff; }
        .page-desc { color: #aaa; margin: 0; }
        
        /* Mode Selector Card */
        .mode-selector { margin-bottom: 16px; background: #16213e !important; border: 1px solid #333; }
        .mode-selector .ant-card-body { background: #16213e !important; }
        .mode-selector .ant-tabs { background: #16213e; }
        .mode-selector .ant-tabs-nav { background: #16213e; padding: 0; margin-bottom: 0; }
        .mode-selector .ant-tabs-nav::before { border-bottom: 1px solid #333; }
        .mode-selector .ant-tabs-tab { color: #aaa; padding: 12px 24px; }
        .mode-selector .ant-tabs-tab-active .ant-tabs-tab { color: #00d9ff; }
        .mode-selector .ant-tabs-ink-bar { background: #00d9ff; }
        .mode-selector .ant-tabs-tab:hover { color: #00d9ff; }
        .tab-title { font-size: 16px; padding: 0 16px; color: #eee; }
        
        /* Collect Card */
        .collect-card { margin-bottom: 16px; background: #16213e !important; border: 1px solid #333; }
        .collect-card .ant-card-body { background: #16213e !important; }
        
        /* Section */
        .section { margin-bottom: 24px; }
        .section:last-child { margin-bottom: 0; }
        .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
        .section-header h4 { margin: 0; font-size: 14px; font-weight: 600; color: #eee; }
        .section-hint { font-size: 12px; color: #888; }
        
        /* Option Group */
        .option-group { display: flex; flex-direction: column; gap: 8px; }
        .option-row { display: flex; gap: 16px; flex-wrap: wrap; }
        
        /* Artifacts Grid */
        .artifacts-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .artifact-item { display: flex; align-items: center; padding: 10px 12px; border: 1px solid #333; border-radius: 6px; cursor: pointer; transition: all 0.2s; background: #1a1a2e; }
        .artifact-item:hover { border-color: #00d9ff; background: #1f4068; }
        .artifact-icon { font-size: 16px; margin-right: 8px; }
        .artifact-name { font-size: 13px; color: #eee; }
        
        /* Formats Grid */
        .formats-grid { display: flex; flex-direction: column; gap: 8px; }
        .format-item { display: flex; align-items: flex-start; padding: 12px; border: 1px solid #333; border-radius: 6px; cursor: pointer; transition: all 0.2s; background: #1a1a2e; }
        .format-item:hover { border-color: #00d9ff; }
        .format-item.enabled { border-color: #00d9ff; background: #1f4068; }
        .format-info { display: flex; flex-direction: column; margin-left: 8px; }
        .format-name { font-weight: 600; font-family: monospace; color: #00d9ff; }
        .format-desc { font-size: 12px; color: #aaa; }
        .format-warning { font-size: 12px; color: #faad14; margin-top: 4px; }
        
        /* Channels Section */
        .channels-section { background: #1a1a2e; border: 1px solid #333; border-radius: 8px; padding: 12px; }
        .channels-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
        .channels-title { font-weight: 600; color: #eee; }
        .last-fetched { font-size: 12px; color: #888; }
        .channel-count { font-size: 12px; color: #00d9ff; font-weight: normal; }
        .channel-name { font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px; display: inline-block; color: #eee; }
        .channel-import-hint { font-size: 12px; color: #888; margin-top: 8px; display: flex; align-items: center; gap: 4px; }
        
        /* Collapse Override */
        .channels-section .ant-collapse { background: transparent !important; border: none !important; }
        .channels-section .ant-collapse-item { border: 1px solid #333 !important; margin-bottom: 8px; border-radius: 6px; overflow: hidden; background: #1a1a2e !important; }
        .channels-section .ant-collapse-header { background: #1a1a2e !important; color: #eee !important; padding: 12px 16px !important; }
        .channels-section .ant-collapse-header > * { color: #eee !important; }
        .channels-section .ant-collapse-header span { color: #eee !important; }
        .channels-section .ant-collapse-header:hover { background: #1f4068 !important; }
        .channels-section .ant-collapse-content { background: #1a1a2e !important; border-top: 1px solid #333 !important; }
        .channels-section .ant-collapse-content-active .ant-collapse-content-box { background: #1a1a2e !important; }
        .channels-section .ant-collapse-content-box { background: #1a1a2e !important; padding: 16px !important; color: #eee !important; }
        .channels-section .ant-collapse-content-box > * { color: #eee !important; }
        .channels-section .ant-collapse-expand-icon { color: #888 !important; }
        .channels-section .ant-collapse-expand-icon > * { color: #888 !important; }
        .channels-section .ant-collapse>.ant-collapse-item>.ant-collapse-header { background: #1a1a2e !important; color: #eee !important; }
        .channels-section .ant-collapse>.ant-collapse-item { background: #1a1a2e; border-color: #333; }
        .channels-section .ant-collapse .ant-collapse-content { background: #1a1a2e; }
        .channels-section .channel-count { color: #00d9ff !important; font-size: 12px; font-weight: normal; }
        .channels-section .ant-space { color: #eee; }
        
        /* Performance Settings */
        .performance-settings { display: flex; flex-direction: column; gap: 8px; }
        .setting-item { display: flex; align-items: center; gap: 12px; }
        .setting-label { font-weight: 500; color: #eee; }
        .setting-hint { font-size: 12px; color: #888; display: flex; align-items: center; gap: 4px; }
        
        /* Output Options */
        .output-options { display: flex; gap: 24px; flex-wrap: wrap; }
        
        /* Exclusion Section */
        .exclusion-section { padding: 12px; background: #1a1a2e; border: 1px solid #333; border-radius: 6px; }
        .exclusion-group { display: flex; flex-direction: column; gap: 8px; }
        .exclusion-title { font-weight: 500; margin-bottom: 4px; color: #eee; }
        .exclusion-hint { font-size: 12px; color: #888; font-weight: normal; }
        .exclusion-item { display: flex; align-items: center; justify-content: space-between; }
        .custom-exclusion { display: flex; align-items: center; margin-top: 8px; }
        
        /* Paths Section */
        .paths-section { display: flex; flex-direction: column; gap: 12px; }
        .file-selector { display: flex; align-items: center; gap: 12px; }
        .file-select-btn { display: inline-flex; align-items: center; gap: 4px; padding: 8px 16px; background: #00d9ff; color: #1a1a2e; border-radius: 4px; cursor: pointer; transition: background 0.2s; font-weight: 500; }
        .file-select-btn:hover { background: #00b8d9; }
        .file-hint { font-size: 12px; color: #888; }
        .paths-input { margin-top: 8px; }
        
        /* Selected Files */
        .selected-files { background: #1a1a2e; border: 1px solid #333; border-radius: 6px; padding: 12px; }
        .selected-files-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; color: #eee; }
        .file-list { max-height: 200px; overflow-y: auto; }
        .file-item { display: flex; align-items: center; gap: 8px; padding: 4px 0; border-bottom: 1px solid #333; color: #eee; }
        .file-item:last-child { border-bottom: none; }
        .file-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .file-size { font-size: 12px; color: #888; }
        
        /* Action Section */
        .action-section { margin-top: 24px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .action-hint { font-size: 12px; color: #888; display: flex; align-items: center; gap: 4px; }
        
        /* Status Card */
        .status-card { margin-bottom: 16px; background: #16213e !important; border: 1px solid #333; }
        .status-card .ant-card-head { background: #16213e !important; border-bottom: 1px solid #333; color: #eee; }
        .status-card .ant-card-body { background: #16213e !important; }
        .status-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-weight: 500; color: #eee; }
        .status-content { background: #1a1a2e; padding: 12px; border-radius: 4px; white-space: pre-wrap; font-size: 12px; max-height: 300px; overflow-y: auto; margin: 0; color: #eee; border: 1px solid #333; }
        
        /* CLI Card */
        .cli-card { background: #16213e !important; border: 1px solid #333; }
        .cli-card .ant-card-head { background: #16213e !important; border-bottom: 1px solid #333; color: #eee; }
        .cli-card .ant-card-body { background: #16213e !important; }
        .cli-card pre { background: #1a1a2e; padding: 12px; border-radius: 4px; font-size: 12px; margin: 0; color: #eee; border: 1px solid #333; }
        
        /* Ant Design Checkbox Override */
        .collect-page .ant-checkbox-wrapper { color: #eee; }
        .collect-page .ant-checkbox-inner { background: #1a1a2e; border-color: #333; }
        .collect-page .ant-checkbox-checked .ant-checkbox-inner { background: #00d9ff; border-color: #00d9ff; }
        .collect-page .ant-checkbox-group-item { color: #eee; }
        
        /* Ant Design Button Override */
        .collect-page .ant-btn-primary { background: #00d9ff; border-color: #00d9ff; color: #1a1a2e; }
        .collect-page .ant-btn-primary:hover { background: #00b8d9; border-color: #00b8d9; color: #1a1a2e; }
        .collect-page .ant-btn-link { color: #00d9ff; }
        .collect-page .ant-btn-link:hover { color: #00b8d9; }
        .collect-page .ant-btn-default { background: #1a1a2e; border-color: #333; color: #eee; }
        .collect-page .ant-btn-default:hover { border-color: #00d9ff; color: #00d9ff; }
        
        /* Ant Design Input Override */
        .collect-page .ant-input { background: #1a1a2e; border: 1px solid #333; color: #eee; }
        .collect-page .ant-input:hover { border-color: #00d9ff; }
        .collect-page .ant-input:focus { border-color: #00d9ff; box-shadow: 0 0 0 2px rgba(0, 217, 255, 0.2); }
        .collect-page textarea.ant-input { background: #1a1a2e; }
        
        /* Ant Design Row/Col Override */
        .collect-page .ant-row { color: #eee; }
        .collect-page .ant-col { color: #eee; }
        
        /* Ant Design Spin Override */
        .collect-page .ant-spin-dot-item { background: #00d9ff; }
        .collect-page .ant-spin-text { color: #eee; }
        .collect-page .ant-spin-dot-item { background-color: #00d9ff; }
        
        /* Ant Design Message Override */
        .collect-page .ant-message-notice-content { background: #16213e; color: #eee; border: 1px solid #333; }
        
        /* Ant Design Tooltip Override */
        .collect-page .ant-tooltip-inner { background: #16213e; color: #eee; border: 1px solid #333; }
        .collect-page .ant-tooltip-arrow-content { background: #16213e; }
        
        /* Ant Design Collapse Extra */
        .collect-page .ant-collapse-extra { color: #888; }
        
        /* Ant Design Space Override */
        .collect-page .ant-space { color: #eee; }
        .collect-page .ant-space-item { color: #eee; }
        
        @media (max-width: 768px) { .artifacts-grid { grid-template-columns: repeat(2, 1fr); } .option-row { flex-direction: column; gap: 8px; } }
      `}</style>
    </div>
  )
}

export default Collect
