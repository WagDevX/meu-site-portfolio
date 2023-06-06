import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import {useState, useEffect, useRef} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const experienceSection = document.getElementById('experience');
      const servicesSection = document.getElementById('services');
      const contactSection = document.getElementById('contact');

      const isVisible = (element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          const visibleHeight = windowHeight * 0.8; 

          return (
            rect.top >= -visibleHeight &&
            rect.bottom <= windowHeight + visibleHeight
          );
        }
        return false;
      };

      if (
        isVisible(homeSection) ||
        isVisible(aboutSection) ||
        isVisible(experienceSection) ||
        isVisible(servicesSection) ||
        isVisible(contactSection)
      ) {
        if (isVisible(homeSection)) {
          setActiveNav('#');
        } else if (isVisible(aboutSection)) {
          setActiveNav('#about');
        } else if (isVisible(experienceSection)) {
          setActiveNav('#experience');
        } else if (isVisible(servicesSection)) {
          setActiveNav('#services');
        } else if (isVisible(contactSection)) {
          setActiveNav('#contact');
        }
      }
    };

    const handleTouchStart = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleTouchStart);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouchStart);
    };
  }, []);

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience'onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services' onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav