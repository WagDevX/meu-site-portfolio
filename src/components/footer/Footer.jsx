import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>WAGNER</a>
      <ul className='permalinks'>
        <li> <a href="#">Principal</a></li>
        <li> <a href="#about">Sobre</a></li>
        <li> <a href="#experience">Conhecimentos</a></li>
        <li> <a href="#services">Serviços</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#projects">Projetos</a></li>
        <li> <a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100089638257035"><FaFacebook/></a>
        <a href="https://www.instagram.com/wagner.araujooo/"><FiInstagram/></a>
        <a href="https://twitter.com/AdbHeLL"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 Wagner Solutions. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer