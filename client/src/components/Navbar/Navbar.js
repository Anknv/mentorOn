import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  return (
    <nav className='NavbarItems'>

      <h1 className='navbar-logo'>MentorOn</h1>
      <div className='nav-menu'>
        <ul>
          <Link className='nav-links' to="mentors">
            Find Mentors
          </Link>
          <Link className='nav-links' exact="true" to="login">
            Log in
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
