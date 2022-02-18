import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {

  const history = useHistory();

  let links = [{ path: 'login', text: 'Log In' }]

  if (props.user) {
    links = [{
      onClick: () => {
        history.replace('/')
        props.logOut()
      }, path: '/', text: 'Log Out'
    }];
  }

  return (
    <nav className='NavbarItems'>
      <ul>
        <Link className='navbar-logo' to="/">
          <h1>MentorOn</h1>
        </Link>
      </ul>
      <div className='nav-menu'>
        <ul>
          <Link className='nav-links' to="mentors">
            Find Mentors
          </Link>
          {links.map((link) => { return <Link onClick={link.onClick} className='nav-links' to={link.path}>{link.text}</Link> })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
