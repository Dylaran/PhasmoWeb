import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home.tsx'
import PhasmoChallenge from './pages/Challenges.tsx'
import PhasmoItems from './pages/Items.tsx'
import React, { useState, useEffect } from 'react'
import { DEFAULT_CHALLENGES } from './pages/Challenges.tsx'

function App() {
  const [customChallenges, setCustomChallenges] = useState(DEFAULT_CHALLENGES)
  const [currentChallenges, setCurrentChallenges] = useState([])
  const [currentItems, setCurrentItems] = useState([])
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/challenges"
          element={
            <PhasmoChallenge
              customChallenges={customChallenges}
              setCustomChallenges={setCustomChallenges}
              currentChallenges={currentChallenges}
              setCurrentChallenges={setCurrentChallenges}
            />
          }
        />
        <Route
          path="/items"
          element={<PhasmoItems currentItems={currentItems} setCurrentItems={setCurrentItems} />}
        />
      </Routes>
    </div>
  )
}

export default App
