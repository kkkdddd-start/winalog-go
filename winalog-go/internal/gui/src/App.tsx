import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import Alerts from './pages/Alerts'
import Timeline from './pages/Timeline'
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
        </ul>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
