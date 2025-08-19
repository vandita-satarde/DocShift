import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import ContactUs from './pages/ContactPage'
import Feature from './pages/FeaturesPage'

function App() {
  return (
    <Router>
      <div className='font-[roboto] '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/features' element={<Feature />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
