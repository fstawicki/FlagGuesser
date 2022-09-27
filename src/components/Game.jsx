import React from 'react'
import '../styles/Game.scss'

import albania from '../assets/albania.png'

const Game = () => {
  return (
    <div className='game'>
        <div className="container">
            <img src={albania} alt="flag" className="image" />
            <p className="countryname">Country: Albania</p>
            <p className="city">Capital City: Tirana</p>
            <button className="answer">1</button>
            <button className="answer">2</button>
            <button className="answer">3</button>
            <button className="answer">4</button>
            <button className="next">Next</button>
        </div>
    </div>
  )
}

export default Game