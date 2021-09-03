import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/apod' className='nav-links'>
                APOD
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/marsrover' className='nav-links'>
                Mars Rover
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/star' className='nav-links'>
                Stars
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
