import React from 'react'
import Fade from 'react-reveal'
import {BsLinkedin} from 'react-icons/bs'

const CTA = ({ translations, currentLanguage }) => {
  const ctaTranslations = translations[currentLanguage];
  return (
    <Fade bottom cascade delay={150}>
    <div className='cta'>
        <a href="https://www.linkedin.com/in/wagner-de-araujo-7b2854118/" className='btn' target='_blank'><BsLinkedin/> LinkedIn</a>
        <a href='#contact' className='btn btn-primary'>{ctaTranslations.lets_talk}</a>
    </div>
    </Fade>
  )
}

export default CTA