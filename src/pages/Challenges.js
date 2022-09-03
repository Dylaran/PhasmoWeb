import { RandomReveal } from 'react-random-reveal'
import React, { useState, useEffect } from 'react'

const DEFAULT_CHALLENGES = [
  'No EMF Reader',
  'No Video Camera',
  'No Ghost Writing',
  'No Spirit Box',
  'No Thermometer',
  'No UV Light/Glowsticks',
  'No DOTS Projector',
  'No Photo Camera',
  'No Smudge Sticks',
  'No Candles',
  'No Pills',
  'No Crucifix',
  'No hiding in designated hiding spots (closets, lockers, stacked boxes)',
  'No Sprinting',
  'Crouch only',
  'Open Mic',
  'No Breaker',
  'Maximum Brightness',
  'Minimum Brightness',
  'Can only communicate during hunts (3 games small, 2 games medium, 1 game hard)',
  'Nightmare mode',
  'Highest FOV',
  'Lowest FOV',
  'No W Key (No forward movement)',
  'No Sound',
  'Close All Doors Behind You (1 Game)',
  'Headset On Backwards',
  'Roll 2 Challenges',
  'Roll 3 Challenges',
  'Always Have Sound Sensor In Inventory',
  'No Strong/Weak Flashlight',
  'Finish Optional Objective 1',
  'Finish Optional Objective 2',
  'Finish Optional Objective 3',
  'Asylum (1 game)',
  'Prison (1 game)',
  'Medium map (2 games)',
  'Over and out (1 game)',
  'Speedrun (7 mins small, 10 mins medium, 14 mins large)',
  'Maximum Sensitivity (1 game)',
  'Lowest Sensitivity (1 game)',
  'Delete 1 Challenge (Choose 1)',
  'Invert WASD (Choose if 1 game or permanent)',
  'Close all doors behind you (1 game)',
  'Ignore everything until you find the cursed possession and exhaust it',
  'Photo Randomizer',
  'Initial Item Randomizer',
  'Use in-game voice only (no discord)',
  'Listen to Minecraft/Fortnite parody music (use a music bot)',
  'Remove Previous Challenge and Roll 1',
  'Remove Previous Challenge and Roll 2',
  'Remove Previous Challenge and Roll 2',
  'Remove Previous Challenge and Roll 3',
  'Remove Challenge of Choice and Roll 1',
  'Remove Challenge of Choice and Roll 2',
  'Remove Challenge of Choice and Roll 2',
  'Remove Challenge of Choice and Roll 3',
  'Pick a hiding spot once you open door. That is the only spot you can hide',
  'ASMR (1 game)',
]

export default function PhasmoChallenge() {
  const [data, setData] = useState(DEFAULT_CHALLENGES)
  const [selected, setSelected] = useState('Challenge')
  const [rollClicked, setRollClicked] = useState(false)
  // const [spunNumber, setSpunNumber] = useState(0)

  const handleRoll = () => {
    setRollClicked(true)
    const newSpunNumber = Math.floor(Math.random() * data.length)
    setSelected(data[newSpunNumber])
  }

  return (
    <>
      <div className="split left">
        <div className="centered">
          <h2>Phasmo Challenges</h2>

          <div style={{ marginBottom: 20, fontSize: 20 }}>
            <div>Rules</div>
            <div>---------------------------</div>
            <div>Start on professional.</div>
            <div style={{ marginTop: 10 }}>Rotate through small houses/farmhouses</div>
            <div>(unless you roll medium/large maps)</div>
            <div style={{ marginTop: 10 }}>New challenge rolls will over-rule old ones.</div>
            <div>(Photo randomizer will over-rule no photo cam)</div>
          </div>

          <div style={{ height: 80, color: 'cyan' }}>{selected}</div>
          <div>
            <button onClick={handleRoll} style={{ width: 100, fontSize: 20, marginTop: 20 }}>
              ROLL
            </button>
          </div>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <h2>Temp</h2>
        </div>
      </div>
    </>
  )
}
