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
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="sidebar">
        <h1>WinLogAnalyzer</h1>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/alerts">Alerts</Link></li>
          <li><Link to="/timeline">Timeline</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/forensics">Forensics</Link></li>
          <li><Link to="/system-info">System Info</Link></li>
          <li><Link to="/rules">Rules</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/metrics">Metrics</Link></li>
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
