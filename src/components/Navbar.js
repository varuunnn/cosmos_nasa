import React from 'react'
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import Logout from './Logout';

const Navbar = ({ isLoggedIn }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Cosmos Nasa
          </Link>
          <ul className='nav-menu'>
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
            <li className='nav-item'>
              <Link to='/natural-events' className='nav-links'>
                Natural Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/calender' className='nav-links'>
                Calender
              </Link>
            </li>
          </ul>
          {isLoggedIn ? <Logout /> : <SignIn />}
        </div>
      </nav>
    </>
  )
}

export default Navbar
