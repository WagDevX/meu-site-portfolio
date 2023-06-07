import { useRef } from 'react';
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

import Fade from 'react-reveal/Fade';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_596xxlp', 'template_aq8fr1y', form.current, 'wWUPhSl43Yd0iaRmp')
    e.target.reset()  
  };
  return (
    <section id='contact'>
      <Fade bottom cascade delay={150}>
      <h5>Entre em contato</h5>
      <h2>Contatos</h2>
      </Fade>
      <div className="container contact__container">
      <Fade bottom cascade delay={150}>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>waguinbk@gmail.com</h5>
            <a href="mailto:waguinbk@gmail.com">Enviar mensagem</a>
          </article>
          <article className='contact__option'>
            <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Wagner Araujo</h5>
            <a href="https://ig.me/m/wagner.araujooo" target='_blank'>Enviar mensagem</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>DD 41 123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=5541984990858" target='_blank'>Enviar mensagem</a>
          </article> 
        </div>
        </Fade>
        {/*END OF CONTACT OPTIONS*/}
        <Fade bottom cascade delay={150}>
        <form ref={form} onSubmit={sendEmail}>
        
          <input type="text" name='name' placeholder='Seu nome completo' required/>
          <input type="email" name='email' placeholder='Seu email' required/>
          <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>
        </Fade>
      </div>
      
    </section>
  )
}

export default Contact