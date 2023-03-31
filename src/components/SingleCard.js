import React from 'react'
import './SingleCard.css'

const SingleCard = ({card , handleChoice , flipped , disabled}) => {

  const handleClick=()=>{
    if(!disabled) handleChoice(card)
  }

  return (
          <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img src={card.src} alt="front card" className='front' />
              <img src="/img/cover.png" alt="back card" onClick={handleClick}/>
            </div>
          </div>
       )
}

export default SingleCard