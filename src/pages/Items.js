import { RandomReveal } from 'react-random-reveal'
import React from 'react'

export default function PhasmoItems() {
  return (
    <div className="">
      <h1>Phasmo Items</h1>

      <RandomReveal
        isPlaying
        duration={1}
        revealDuration={0.5}
        // updateInterval={0}
        characters="Spin"
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      />
    </div>
  )
}
