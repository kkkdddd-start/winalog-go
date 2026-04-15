import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import Alerts from './pages/Alerts'
import AlertDetail from './pages/AlertDetail'
import Timeline from './pages/Timeline'
import Reports from './pages/Reports'
import Forensics from './pages/Forensics'
import SystemInfo from './pages/SystemInfo'
import Rules from './pages/Rules'
import Settings from './pages/Settings'
import Metrics from './pages/Metrics'
import Persistence from './pages/Persistence'
import Analyze from './pages/Analyze'
import Collect from './pages/Collect'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="sidebar">
        <h1>WinLogAnalyzer</h1>
        <ul>
          <li><Link to="/">仪表盘</Link></li>
          <li><Link to="/events">事件</Link></li>
          <li><Link to="/alerts">告警</Link></li>
          <li><Link to="/timeline">时间线</Link></li>
          <li><Link to="/collect">采集</Link></li>
          <li><Link to="/analyze">分析</Link></li>
          <li><Link to="/persistence">持久化检测</Link></li>
          <li><Link to="/reports">报告</Link></li>
          <li><Link to="/forensics">取证</Link></li>
          <li><Link to="/system-info">系统信息</Link></li>
          <li><Link to="/rules">规则</Link></li>
          <li><Link to="/metrics">指标</Link></li>
          <li><Link to="/settings">设置</Link></li>
        </ul>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/alerts/:id" element={<AlertDetail />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/collect" element={<Collect />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/persistence" element={<Persistence />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/forensics" element={<Forensics />} />
          <Route path="/system-info" element={<SystemInfo />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
