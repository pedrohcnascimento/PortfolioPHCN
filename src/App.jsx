import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Dashboard from './pages/dashboard/Dashboard'

function AppContent(){
  return(
    <div className="AppContent">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return(
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
