import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'
import Fade from 'react-reveal/Fade';
import Scrolldown from './Scrolldown'


const Header = () => {

  return (
    <section id='home'>
    <header>
    <Fade bottom cascade delay={150}>
      <div className="container header__container">
        <h5 id="helloWorld" data-value="print('Olá, mundo!')">print("Hello, world!")</h5>
        <h1 data-value='"WAGNER_ARAUJO"'>"WAGNER ARAUJO"</h1>
        <h5 className="text-light">Desenvolvedor Fullstack</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <Scrolldown/>
      </div>
      </Fade>
    </header>
    </section>
  )
}

export default Header