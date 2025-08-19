import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import ContactUs from './pages/ContactPage'
import Features from './pages/FeaturesPage'

import Feature1 from './pages/featurespage/feature1'
import Feature2 from './pages/featurespage/feature2'
import Feature3page from './pages/featurespage/feature3page'
import Feature4page from './pages/featurespage/feature4page'
import Feature5page from './pages/featurespage/feature5page'
import Feature6page from './pages/featurespage/feature6page'
import Feature7page from './pages/featurespage/feature7page'
import Feature8page from './pages/featurespage/feature8page'
import Feature9page from './pages/featurespage/feature9page'
import Feature10page from './pages/featurespage/feature10page'
import ToolsDetails from './components/featurespage/ToolsDetails'



function App() {
  return (
    <Router>
      <div className='font-[roboto] '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/features' element={<Features />} />

          <Route path='/toolsdetails' element={<ToolsDetails />} />

          <Route path='/feature1-details' element={<Feature1/>} />
          <Route path='/feature2-details' element={<Feature2/>} />
          <Route path='/feature3page' element={<Feature3page />} />
          <Route path='/feature4page' element={<Feature4page />} />
          <Route path='/feature5page' element={<Feature5page />} />
          <Route path='/feature6page' element={<Feature6page />} />
          <Route path='/feature7page' element={<Feature7page />} />
          <Route path='/feature8page' element={<Feature8page />} />
          <Route path='/feature9page' element={<Feature9page />} />
          <Route path='/feature10page' element={<Feature10page />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
