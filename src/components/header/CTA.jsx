import React from 'react'
import CV from '../../assets/cv.pdf'
import Fade from 'react-reveal'

const CTA = ({ translations, currentLanguage }) => {
  const ctaTranslations = translations[currentLanguage];
  return (
    <Fade bottom cascade delay={150}>
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>{ctaTranslations.lets_talk}</a>
    </div>
    </Fade>
  )
}

export default CTA