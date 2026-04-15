import { Routes, Route, Link } from 'react-router-dom'
import { I18nProvider, useI18n } from './locales/I18n'
import LangSwitcher from './components/LangSwitcher'
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
import Live from './pages/Live'
import Collect from './pages/Collect'
import './App.css'

function Navigation() {
  const { t } = useI18n()
  
  return (
    <nav className="sidebar">
      <h1>{t('app.title')}</h1>
      <ul>
        <li><Link to="/">{t('nav.dashboard')}</Link></li>
        <li><Link to="/events">{t('nav.events')}</Link></li>
        <li><Link to="/alerts">{t('nav.alerts')}</Link></li>
        <li><Link to="/timeline">{t('nav.timeline')}</Link></li>
        <li><Link to="/collect">{t('nav.collect')}</Link></li>
        <li><Link to="/analyze">{t('nav.analyze')}</Link></li>
        <li><Link to="/live">{t('nav.live')}</Link></li>
        <li><Link to="/persistence">{t('nav.persistence')}</Link></li>
        <li><Link to="/reports">{t('nav.reports')}</Link></li>
        <li><Link to="/forensics">{t('nav.forensics')}</Link></li>
        <li><Link to="/system-info">{t('nav.systemInfo')}</Link></li>
        <li><Link to="/rules">{t('nav.rules')}</Link></li>
        <li><Link to="/metrics">{t('nav.metrics')}</Link></li>
        <li><Link to="/settings">{t('nav.settings')}</Link></li>
      </ul>
    </nav>
  )
}

function AppContent() {
  return (
    <>
      <LangSwitcher />
      <Navigation />
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
          <Route path="/live" element={<Live />} />
          <Route path="/persistence" element={<Persistence />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/forensics" element={<Forensics />} />
          <Route path="/system-info" element={<SystemInfo />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </main>
    </>
  )
}

function App() {
  return (
    <I18nProvider>
      <div className="app">
        <AppContent />
      </div>
    </I18nProvider>
  )
}

export default App