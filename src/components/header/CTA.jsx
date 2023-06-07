import React from 'react'
import CV from '../../assets/cv.pdf'
import Fade from 'react-reveal'

const CTA = () => {
  return (
    <Fade bottom cascade delay={150}>
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Mensagem</a>
    </div>
    </Fade>
  )
}

export default CTA