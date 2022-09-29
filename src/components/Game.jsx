import React, { useState } from 'react'
import '../styles/Game.scss'

import countries from '../data/countries';

const Game = () => {

  const [isOn, setIsOn] = useState(false);
  const [country, setCountry] = useState(countries[Math.floor(Math.random() * (20 - 0 + 1)) + 0]);
  const [flag, setFlag] = useState('');

  const getCountry = () => {

    setIsOn(true);
    setCountry((prevState) => countries[Math.floor(Math.random() * (20 - 0 + 1)) + 0]);
    setFlag(`https://countryflagsapi.com/png/${country.code}`);

  }


  return (
    <div className='game'>
        <div className="container">
          {!isOn && <button className="button next" onClick={getCountry}>Start</button>}
          {isOn && (
            <>
            <img src={flag} alt="flag" className="image" />
            <p className="countryname">{country.name}</p>
            <p className="city">{country.capital}</p>
            <button className="button">1</button>
            <button className="button">2</button>
            <button className="button">3</button>
            <button className="button">4</button>
            <button className="button next" onClick={getCountry}>Next</button>
            </>
          )}
        </div>
    </div>
  )
}

export default Game