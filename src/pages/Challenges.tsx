import React, { useState, useEffect, useRef, useCallback } from 'react'
import randomItem from 'random-item'
import Modal from 'react-modal'
import TextareaAutosize from 'react-textarea-autosize'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const DEFAULT_CHALLENGES = [
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
  'Maximum Brightness',
  'Minimum Brightness',
  'Can only communicate during hunts (3 games small, 2 games medium, 1 game hard)',
  'Highest FOV',
  'Lowest FOV',
  'No W Key (No forward movement)',
  'No Sound',
  'Headset On Backwards',
  'Roll 2 Challenges',
  'Roll 3 Challenges',
  'Finish Optional Objective 1',
  'Finish Optional Objective 2',
  'Finish Optional Objective 3',
  'Map Randomizer',
  'Asylum (1 game)',
  'Prison (1 game)',
  'Medium map (2 games)',
  'Speedrun (7 mins small, 10 mins medium, 14 mins large)',
  'Maximum Sensitivity (1 game)',
  'Lowest Sensitivity (1 game)',
  'Delete 1 Challenge (Choose 1)',
  'Ignore everything until you find the cursed possession and exhaust it',
  'Photo Randomizer',
  'Initial Item Randomizer',
  'Use in-game voice only (no discord)',
  'Listen to Minecraft/Fortnite parody music (use a music bot)',
  'Remove Previous Challenge and Roll 1',
  'Remove Previous Challenge and Roll 2',
  'Remove Previous Challenge and Roll 3',
  'Remove Challenge of Choice and Roll 1',
  'Remove Challenge of Choice and Roll 2',
  'Remove Challenge of Choice and Roll 3',
  'Reset Custom Difficulty Mods and Roll 5',
  'Hit Random Custom Difficulty and Roll 2. Remove Any Mods That Make 0x Multi',
  'Reset Custom to Amateur and Roll 15 (Ignore reset/randomizer mods)',
  'Reset Custom to Intermediate and Roll 10 (Ignore reset/randomizer mods)',
  'Reset Custom to Professional and Roll 7 (Ignore reset/randomizer mods)',
  'Reset Custom to Nightmare and Roll 5 (Ignore reset/randomizer mods)',
  'Starting Sanity -25',
  'Sanity Pill Restore -5%',
  'Sanity Drain Speed +0.5x',
  'Sprint Off and Remove Previous Mod',
  'Sprint Duration -1s',
  'Sprint Recharge Time +1s',
  'Player Speed -25%',
  'Flashlights Off and Remove Previous Mod',
  'Ghost Speed +25%',
  'Roaming Frequency +',
  'Change Favorite Room +',
  'Interaction Amount -',
  'Event Frequency -',
  'Grace Period -1s',
  'Hunt Duration +',
  'Kills extend hunts on',
  'Evidence given -1 and Remove Previous Mod',
  'Fingerprint chance -25%',
  'Fingerprint duration -30s',
  'Setup time -30s',
  'Pick Your Weather and Roll +2',
  'Doors Start Open +',
  'Number of Hiding Places -',
  'Sanity Monitor Off',
  'Activity Monitor Off',
  'Fusebox at Start Off',
  'Fusebox Visible Off',
  'Cursed Possession #1 and Roll 1',
  'Cursed Possession #2 and Roll 1',
  'Cursed Possession #3 and Roll 1',
  'Cursed Possession #4 and Roll 1',
  'Cursed Possession #5 and Roll 1',
  'Cursed Possession #6 and Roll 1',
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
}
interface ChallengeLineProps {
  challenge: string
}

export const ChallengeLine = (props: ChallengeLineProps) => {
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
      {props.challenge}
    </label>
  )
}

interface ChallengesProps {
  customChallenges: string[]
  setCustomChallenges: React.Dispatch<React.SetStateAction<string[]>>
  currentChallenges: string[]
  setCurrentChallenges: React.Dispatch<React.SetStateAction<string[]>>
}

export default function PhasmoChallenge(props: ChallengesProps) {
  const { customChallenges, setCustomChallenges, currentChallenges, setCurrentChallenges } = props
  const [selected, setSelected] = useState<string>('Start by clicking roll')

  // Modal
  const [showModal, setShowModal] = useState<boolean>(false)
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  // Rolling challenges
  const handleRoll = () => {
    const item = randomItem(customChallenges)
    currentChallenges.push(item)
    setSelected(item)
  }

  const handleChange = useCallback((e: any) => {
    const temp = e.target.value.split('\n')
    const result = temp.filter((e: any) => e)
    if (result.length > 0) {
      setCustomChallenges(result)
    } else {
      setCustomChallenges(DEFAULT_CHALLENGES)
    }
  }, [])

  const handleRemoveChallenge = (index: any) => {
    const temp = currentChallenges.filter((item, idx) => idx !== index)
    setCurrentChallenges(temp)

    // setCurrentChallenges(newList)
  }

  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <h2>Challenges</h2>
        <TextareaAutosize
          maxRows={50}
          minRows={10}
          style={{ minWidth: 500 }}
          defaultValue={customChallenges.join('\r\n')}
          onBlur={handleChange}
          placeholder="Enter challenges here... Click default for default challenges"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={() => {
              setCustomChallenges(DEFAULT_CHALLENGES)
              closeModal()
            }}
            style={{ width: 100, marginTop: 20 }}
          >
            Set Default
          </button>
          <button onClick={closeModal} style={{ width: 70, marginTop: 20 }}>
            Close
          </button>
        </div>
      </Modal>
      <div className="split left">
        <div className="centered">
          <h2>Phasmo Challenges</h2>

          <div style={{ marginBottom: 20, fontSize: 20 }}>
            <div>Rules</div>
            <div>---------------------------</div>
            <div>Start on professional.</div>
            <div style={{ marginTop: 10 }}>Rotate through small houses/farmhouses</div>
            <div>unless you roll medium/large maps</div>
            <div style={{ marginTop: 10 }}>New challenge rolls will over-rule old ones.</div>
            <div>(Ex: Photo randomizer will over-rule no photo cam)</div>
          </div>

          <div>
            <button
              onClick={handleRoll}
              style={{ width: 100, fontSize: 20, marginTop: 20, marginBottom: 20 }}
            >
              Roll
            </button>
          </div>
          <div style={{ height: 'auto', color: 'red' }}>{selected}</div>
          <div>
            <button onClick={openModal} style={{ width: 140, fontSize: 20, marginTop: 20 }}>
              Edit Challenges
            </button>
          </div>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <h2>Rolls</h2>
          <ul
            style={{
              overflowX: 'hidden',
              overflowY: 'auto',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              minWidth: 350,
              maxHeight: 500,
              marginTop: 1,
            }}
          >
            {currentChallenges.map((challenge, index) => (
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
                <ChallengeLine challenge={challenge} />
                <button
                  type="button"
                  onClick={() => handleRemoveChallenge(index)}
                  style={{ width: 60, fontSize: 12 }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div>
            <div style={{ marginTop: 20, fontSize: 20 }}>
              <div>
                Click on a challenge to <span style={{ color: 'red' }}>highlight</span> them.
              </div>
            </div>
            <CopyToClipboard text={currentChallenges.join('\r\n')}>
              <button style={{ width: 200 }}>Copy Challenges to Clipboard</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  )
}
