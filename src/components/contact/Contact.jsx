import { useRef } from 'react';
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Fade from 'react-reveal/Fade';
const MySwal = withReactContent(Swal);

const Contact = ({translations, currentLanguage}) => {
  const contTranslations = translations[currentLanguage];
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_596xxlp', 'template_aq8fr1y', form.current, 'wWUPhSl43Yd0iaRmp')
    MySwal.fire({
      title: 'Email enviado!',
      text: 'O seu email foi enviado com sucesso.',
      icon: 'success',
    });
    e.target.reset()  
  };
  return (
    <section id='contact'>
      <Fade bottom cascade delay={150}>
        <h5>{contTranslations.contact_h5}</h5>
        <h2>{contTranslations.contact_h2}</h2>
      </Fade>
      <div className="container contact__container">
        <Fade bottom cascade delay={150}>
          <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>waguinbk@gmail.com</h5>
            <a href="mailto:waguinbk@gmail.com">{contTranslations.contact_whisper}</a>
            </article>
          <article className='contact__option'>
            <FiInstagram className='contact__option-icon'/>
              <h4>Instagram</h4>
              <h5>Wagner Araujo</h5>
            <a href="https://ig.me/m/wagner.araujooo" target='_blank'>{contTranslations.contact_whisper}</a>
            </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>DD 41 123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=5541984990858" target='_blank'>{contTranslations.contact_whisper}</a>
            </article>
          </div>
        </Fade>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={contTranslations.contact_form_l1} required/>
          <input type="email" name='email' placeholder={contTranslations.contact_form_l2} required/>
          <textarea name="message" rows="7" placeholder={contTranslations.contact_form_l3} required></textarea>
          <button type='submit' className='btn btn-primary'>{contTranslations.contact_whisper}</button>
          </form>
      </div>
      
    </section>
  )
}

export default Contact