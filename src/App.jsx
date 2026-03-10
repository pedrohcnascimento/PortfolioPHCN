import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Dashboard from './pages/dashboard/Dashboard'
import MenuHamburguer from './components/MenuHamburguer/MenuHamburguer'
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import LanguageSwitcher from "./components/languageSwitchers/LanguageSwitcher";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations/translations";


function AppContent(){
  const { language } = useLanguage();
  return(
    <div className="AppContent">
      <MenuHamburguer />
      <ThemeSwitcher />
      <LanguageSwitcher />
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
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
