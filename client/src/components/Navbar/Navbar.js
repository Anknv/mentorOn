import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>MentorOn</h1>
      <div className='nav-menu'>
        <ul>
          <a className='nav-links' href="http://localhost:3002/mentors">Find Mentors</a>
          <a className='nav-links' href="http://localhost:3002/login" >Log in</a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar