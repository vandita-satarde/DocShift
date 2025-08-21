import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import ContactUs from './pages/ContactPage'
import Features from './pages/FeaturesPage'
import UsecasesPage from './pages/UsecasesPage'
import SecurityPage from './pages/SecurityPage'


import ToolsDetails from './components/featurespage/ToolsDetails'
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
import Usecase1page from './pages/usecasepages/usecase1page'
import Usecase2page from './pages/usecasepages/usecase2page'
import Usecase3page from './pages/usecasepages/usecase3page'
import Usecase4page from './pages/usecasepages/usecase4page'
import Usecase5page from './pages/usecasepages/usecase5page'
import Security1page from './pages/securitypages/security1page'
import Security2page from './pages/securitypages/security2page'
import Security3page from './pages/securitypages/security3page'
import Security4page from './pages/securitypages/security4page'
import Security5page from './pages/securitypages/security5page'



function App() {
  return (
    <Router>
      <div className='font-[roboto] '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/features' element={<Features />} />
          <Route path='/use-cases' element={<UsecasesPage />} />
          <Route path='/security' element={<SecurityPage/>} />

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

          <Route path='/usecase1page' element={<Usecase1page />} />
          <Route path='/usecase2page' element={<Usecase2page />} />
          <Route path='/usecase3page' element={<Usecase3page />} />
          <Route path='/usecase4page' element={<Usecase4page />} />
          <Route path='/usecase5page' element={<Usecase5page />} />

          <Route path='/security1page' element={<Security1page />} />
          <Route path='/security2page' element={<Security2page />} />
          <Route path='/security3page' element={<Security3page />} />
          <Route path='/security4page' element={<Security4page />} />
          <Route path='/security5page' element={<Security5page />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
