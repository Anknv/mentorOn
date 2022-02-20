import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import {SiFrontendmentor} from 'react-icons/si';
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

  // if(props.user) {
  //   links = [{ path: 'dashboard', text: 'Dashboard'}];
  // }

  return (
    <nav className='NavbarItems'>
      <ul>
        <Link className='navbar-logo' to='/'  aria-label='MentorOn'>
          <h1>MentorOn</h1>
          <SiFrontendmentor />
        </Link>
      </ul>
      <div className='nav-menu'>
        <ul>
          <Link className='nav-links' to="mentors">
            Find Mentors
          </Link>
          {props.user ? <Link className='nav-links'to='dashboard'>Dashboard</Link> : ''}
          {props.user ? <span className='nav-link-welcome'>Welcome, {props.user.name} {props.user.mentor_id ? '(Mentor)' : '(Mentee)'}</span> : ''}
          {links.map((link) => { return <Link onClick={link.onClick} className='nav-links' to={link.path}>{link.text}</Link> })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
