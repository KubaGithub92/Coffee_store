import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../components/Header/Header.scss'
import logo from '../img/logo.svg'


export default function Navbar() {
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="Generic Hipster Coffee logo"/>
        <div className="header__nav">
          <Link to="/" className="header__nav-item">Home</Link>
          <Link to="/Menu" className="header__nav-item">Menu</Link>
          <Link to="/Coffee" className="header__nav-item">Coffee</Link>
          <Link to="/Story" className="header__nav-item">Our Story</Link>
        </div>
    </header>
  )
}
