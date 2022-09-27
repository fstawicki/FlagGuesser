import React from 'react';

import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar_left">
            <h1>Flag Guesser</h1>
        </div>
        <div className="navbar_right">
            <ul className='navbar_right_list'>
                <li>Options</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar