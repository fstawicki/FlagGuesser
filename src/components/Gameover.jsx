import React from 'react'

const Gameover = () => {
  return (
    <div className="container">
        <p className="game_over_text">Game Over!</p>
        <p className="score">You scored: </p>
        <button className="next">Play Again</button>
    </div>
  )
}

export default Gameover