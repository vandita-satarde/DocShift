import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Login from './pages/Login'


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
