import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <section id='home'>
    <header>
      <div className="container header__container">
        <h5>Olá, sou</h5>
        <h1 data-value="WAGNER_ARAUJO">WAGNER_ARAUJO</h1>
        <h5 className="text-light">Desenvolvedor Fullstack</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    </section>
  )
}

export default Header