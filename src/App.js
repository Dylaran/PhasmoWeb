import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home.js'
import PhasmoChallenge from './pages/Challenges.js'
import PhasmoItems from './pages/Items.js'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<PhasmoChallenge />} />
        <Route path="/items" element={<PhasmoItems />} />
      </Routes>
    </div>
  )
}

export default App
