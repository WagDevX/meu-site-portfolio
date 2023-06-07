import React from 'react'
import Fade from 'react-reveal'

const Scrolldown = () => {
  return (
    
    <div>
      <Fade right cascade delay={150}>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </Fade>
    </div>
  )
}

export default Scrolldown