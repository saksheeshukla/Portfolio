/* .me it is a div name */
import React from 'react'
import './header.css'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import headerImg from '../../assets/header-img.svg';
const Header = () => {
  return (
   <header>
    <div className="container header__container">
        <h5>Welcome to</h5>
        <h1>BLUEEAGLES</h1>
        <h5 className="text-light">Portfolio</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={headerImg} alt="me" />
        </div>


        <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header
