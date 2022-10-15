import React from 'react'
import logo from '../../img/logo.svg'
import './Header.scss'


export default function Header() {
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="Generic Hipster Coffee logo" />
        <div className="header__nav">
          <a className="header__nav-item" href="index.html">Home</a>
          <a className="header__nav-item" href="menu.html">Menu</a>
          <a className="header__nav-item" href="coffee.html">Coffee</a>
          <a className="header__nav-item" href="story.html">Our Story</a>
        </div>
    </header>
  )
}
