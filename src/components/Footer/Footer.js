import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__nav">
          <a className='footer__nav-item' href="#">Home</a>
          <a className='footer__nav-item' href="menu.html">Menu</a>
          <a className='footer__nav-item' href="coffee.html">Coffee</a>
          <a className='footer__nav-item' href="story.html">Our Story</a>
        </div>
        <div className="footer__social">
          <span>#HIPSTERSMAKECOFFEE</span><br/>
          <p>Follow us on <a className='footer__social-link' href="https://www.twitter.com">Twitter</a> and <a className='footer__social-link' href="https://www.facebook.com/">Facebook</a></p>
        </div>
      </div>
    </footer>
  )
}
