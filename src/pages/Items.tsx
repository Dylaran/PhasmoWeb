import randomItem from 'random-item'
import React, { useState } from 'react'
import { ChallengeLine } from './Challenges'

export const DEFAULT_PHASMO_ITEMS = [
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
  const [customItems, setCustomItems] = useState<string[]>(DEFAULT_PHASMO_ITEMS)
  const [currentItems, setCurrentItems] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<string>('Start by clicking roll')

  const handleItemRoll = () => {
    const item = randomItem(customItems)
    currentItems.push(item)
    setSelectedItem(item)
  }

  const handleRemoveItem = (index: number) => {
    const temp = currentItems.filter((item, idx) => idx !== index)
    setCurrentItems(temp)
  }

  return (
    <>
      <div className="split left">
        <div className="centered">
          <h2>Phasmo Items</h2>
          <div
            style={{
              fontSize: 20,
              marginLeft: 20,
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <div>Photo Randomizer</div>
              <div>------------------</div>
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
            <div style={{ textAlign: 'left', marginTop: 50 }}>
              <div>Item Randomizer</div>
              <div>------------------</div>
              <div>- Roll for 3 starter items</div>
              <div>- 1 objective done = 1 roll</div>
              <div>- 1 confirmed evidence = 1 roll</div>
              <div>- 1 death = 1 roll</div>
              <div>- If no more of an item, reroll</div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="split right">
        <div className="leftItem" style={{ width: '100%' }}>
          <h3>Roll</h3>
          <div style={{ height: 'auto', color: 'red' }}>{selectedItem}</div>
          <div>
            <button onClick={handleItemRoll} style={{ width: 100, fontSize: 20, marginTop: 20 }}>
              Roll
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="column">
              <h5>Item List (doesn't work yet)</h5>
              <ul
                style={{
                  overflowX: 'hidden',
                  overflowY: 'auto',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  maxHeight: 600,
                  marginTop: 1,
                }}
              >
                {DEFAULT_PHASMO_ITEMS.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 10,
                      marginBottom: 5,
                    }}
                  >
                    <ChallengeItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h5>Your Items</h5>
              <ul
                style={{
                  overflowX: 'hidden',
                  overflowY: 'auto',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  maxHeight: 600,
                  minWidth: 100,
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
    </>
  )
}
interface ChallengeItemProps {
  item: string
}

export const ChallengeItem = (props: ChallengeItemProps) => {
  const [clicked, setClicked] = useState<boolean>(false)
  return (
    <label
      style={{
        overflow: 'hidden',
        fontSize: 18,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        color: clicked ? 'red' : '',
        userSelect: 'none',
      }}
      onClick={() => {
        setClicked(!clicked)
      }}
    >
      {props.item}
    </label>
  )
}
