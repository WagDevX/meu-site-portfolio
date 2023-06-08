import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'
import Fade from 'react-reveal/Fade';
import Scrolldown from './Scrolldown'


const Header = ({ translations, currentLanguage }) => {
  const headerTranslations = translations[currentLanguage];
  return (
    <section id='home'>
    <header>
    <Fade bottom cascade delay={150}>
      <div className="container header__container">
        <h5 id="helloWorld">{headerTranslations.print}</h5>
        <h1 data-value="WAGNER_ARAUJO">WAGNER ARAUJO</h1>
        <h5 className="text-light">{headerTranslations.speciality}</h5>
        <CTA translations={translations} currentLanguage={currentLanguage}/>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <Scrolldown translations={translations} currentLanguage={currentLanguage}/>
      </div>
      </Fade>
    </header>
    </section>
  )
}

export default Header