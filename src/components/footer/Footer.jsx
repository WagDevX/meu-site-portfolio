import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import Fade from 'react-reveal'

const Footer = ({translations, currentLanguage}) => {
  const footTranslations = translations[currentLanguage];
  return (
    <footer>
      <a href="#" className='footer__logo'>WAGNER</a>
      <Fade bottom cascade delay={150}>
      <ul className='permalinks'>
        <li> <a href="#">{footTranslations.footer_home_link}</a></li>
        <li> <a href="#about">{footTranslations.footer_about_link}</a></li>
        <li> <a href="#experience">{footTranslations.footer_exp_link}</a></li>
        <li> <a href="#services">{footTranslations.footer_serv_link}</a></li>
        <li> <a href="#portfolio">{footTranslations.footer_port_link}</a></li>
        <li> <a href="#projects">{footTranslations.footer_pro_link}</a></li>
        <li> <a href="#contact">{footTranslations.footer_cont_link}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100089638257035"><FaFacebook/></a>
        <a href="https://www.instagram.com/wagner.araujooo/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/wagner-de-araujo-7b2854118/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {footTranslations.footer_copyright}</small>
      </div>
      </Fade>
    </footer>
  )
}

export default Footer