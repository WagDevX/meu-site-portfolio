import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import Fade from 'react-reveal'

const Services = ({translations, currentLanguage}) => {
  const servTranstlations = translations[currentLanguage];
  return (
    <section id='services'>
    <Fade bottom cascade delay={150}>
    <h5>{servTranstlations.services_h5}</h5>
    <h2>{servTranstlations.services_h2}</h2>
    <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>{servTranstlations.services_aut}</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_autl1}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_autl2}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_autl3}</p>
          </li>
        </ul>
      </article>
      {/*END OF AUTOMATION */}
      <article className='service'>
        <div className="service__head">
          <h3>{servTranstlations.services_web_h3}</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_webl1}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_webl2}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_webl3}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_webl4}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_webl5}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_webl6}</p>
          </li>
        </ul>
      </article>
      {/*END OF WEB DEVELOPMENT */}
      <article className='service'>
        <div className="service__head">
          <h3>{servTranstlations.services_apps_h3}</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_appsl1}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_appsl2}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_appsl3}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_appsl4}</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>{servTranstlations.services_appsl5}</p>
          </li>
        </ul>
      </article>
      {/*END OF APP DEVELOPMENT */}
    </div>
    </Fade>
    </section>
  )
}

export default Services