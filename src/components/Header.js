import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/logo.png'
import './Header.scss'

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/spaceships'>
        <div className='Header__LogoWrapper'>
          <img src={logo} />
        </div>
      </Link>
    </header>
  )
}

export default Header
