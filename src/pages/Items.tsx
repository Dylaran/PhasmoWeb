import randomItem from 'random-item'
import React, { useState } from 'react'
import { ChallengeLine } from './Challenges'

export const PHASMO_ITEMS = [
  'Spirit box',
  'Ghost Writing Book',
  'EMF Reader',
  'UV Flashlight',
  'Flashlight',
  'Video Camera',
  'Photo Camera',
  'D.O.T.S. Projector',
  'Candle',
  'Glowstick',
  'Head Mounted Camera',
  'Lighter',
  'Motion Sensor',
  'Parabolic Microphone',
  'Salt Shaker',
  'Sanity Pills',
  'Smudge Sticks',
  'Sound Sensor',
  'Strong Flashlight',
  'Thermometer',
  'Tripod',
]

export default function PhasmoItems() {
  const [currentItems, setCurrentItems] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<string>('Start by clicking roll')

  const handleItemRoll = () => {
    const item = randomItem(PHASMO_ITEMS)
    currentItems.push(item)
    setSelectedItem(item)
  }

  const handleRemoveItem = (index: number) => {
    const temp = currentItems.filter((item, idx) => idx !== index)
    setCurrentItems(temp)
  }

  return (
    <div className="centered">
      <h2>Phasmo Items</h2>=
      <div>
        <div className="split left" style={{ background: 'black' }}>
          <div className="centered">
            <div style={{ textAlign: 'left' }}>
              <div>Photo Randomizer</div>
              <div>---------------------------</div>
              <div>- Start with photo camera only</div>
              <div>- If there's a 4th person, </div>
              <div> 4th can use a flashlight</div>
              <div>- 1 objective done = 1 roll</div>
              <div>- 1 named photo = 1 roll</div>
              <div>- Ghost photo counts as 2</div>
              <div>- Max of 2 photos for each type</div>
              <div>(Footstep, Fingerprint, Interaction, etc..)</div>
              <div>- If no more of an item, reroll</div>
            </div>
            <h2>Roll</h2>
            <div style={{ height: 'auto', color: 'red' }}>{selectedItem}</div>
            <div>
              <button onClick={handleItemRoll} style={{ width: 100, fontSize: 20, marginTop: 20 }}>
                Roll
              </button>
            </div>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div style={{ textAlign: 'left' }}>
              <div>Item Randomizer</div>
              <div>---------------------------</div>
              <div>- Roll for 3 starter items</div>
              <div>- 1 objective done = 1 roll</div>
              <div>- 1 confirmed evidence = 1 roll</div>
              <div>- 1 death = 1 roll</div>
              <div>- If no more of an item, reroll</div>
              <div></div>
            </div>
            <h2>Items</h2>
            <ul
              style={{
                overflowX: 'hidden',
                overflowY: 'auto',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                minWidth: 350,
                maxHeight: 250,
                marginTop: 1,
              }}
            >
              {currentItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 10,
                    marginBottom: 5,
                    // float: 'left',
                  }}
                >
                  <ChallengeLine challenge={item} />
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    style={{ width: 60, fontSize: 12 }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
