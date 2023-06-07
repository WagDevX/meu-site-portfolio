import React from 'react'
import Fade from 'react-reveal'

const Scrolldown = ({ translations, currentLanguage }) => {
  const Translations = translations[currentLanguage];
  return (
    
    <div>
      <Fade right cascade delay={150}>
        <a href='#contact' className='scroll__down'>{Translations.scroll_text}</a>
      </Fade>
    </div>
  )
}

export default Scrolldown