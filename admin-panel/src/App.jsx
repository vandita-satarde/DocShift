import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
