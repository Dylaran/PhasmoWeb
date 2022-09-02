import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import PhasmoChallenge from './pages/Pricing'
import PhasmoItems from './pages/About'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<PhasmoChallenge />} />
          <Route path="/items" element={<PhasmoItems />} />
        </Routes>
      </div>
    </>
  )
}

export default App
