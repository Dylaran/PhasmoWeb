import React from 'react'

export const PHASMO_ITEMS = ['Spirit box', 'Ghost Writing Book', 'EMF Reader', 'UV Flashlight']
interface PhasmoItemsProps {
  currentItems: string[]
  setCuRrentItems: React.Dispatch<React.SetStateAction<string[]>>
}

export default function PhasmoItems(props: PhasmoItemsProps) {
  return (
    <div className="centered">
      <h2>Phasmo Items</h2>

      <div
        style={{
          marginBottom: 20,
          fontSize: 20,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 100,
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <div>Photo Randomizer</div>
          <div>---------------------------</div>
          <div>- Start with photo camera only</div>
          <div>- If there's a 4th person, </div>
          <div> 4th can use a flashlight</div>
          <div>- 1 objective done = 1 roll</div>
          <div>- 1 named photo = 1 roll</div>
          <div>- Ghost photo counts as 2</div>
          <div>- If no more of an item, reroll</div>
        </div>
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
      </div>

      <div>
        <div className="split left" style={{ background: 'black' }}>
          <div className="centered">
            <h2>Roll</h2>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <h2>Items</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
