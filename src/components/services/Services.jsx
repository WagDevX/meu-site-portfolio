import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>O que eu ofereço</h5>
    <h2>Serviços</h2>
    <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>Automação</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>WebScrapping para coleta de dados úteis.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Automação de processos repetitivos.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Automação para enviar mensagens em lote.</p>
          </li>
        </ul>
      </article>
      {/*END OF UI/UX */}
      <article className='service'>
        <div className="service__head">
          <h3>Deselvolvimento Web</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Web apps completos com React e NodeJS.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Designs elegantes e inovadores.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Web apps reponsivos para todas as plataformas.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Sistemas ingtegrados com banco de dados pupulares como Firebase e MongoDB.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Sites dinâmicos ou estáticos.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Totalmente aberto a críticas construtivas.</p>
          </li>
        </ul>
      </article>
      {/*END OF WEB DEVELOPMENT */}
      <article className='service'>
        <div className="service__head">
          <h3>Densenvolvimento de Aplicativos</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Desenvolvimento com Python KivyMD.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Integração com banco de dados Firebase ou PostgreeSQL.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>UI Design com widgets do KivyMD.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Sistemas completo com login e registro de usuário.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Desenvolvimento rápido com kivy.</p>
          </li>
        </ul>
      </article>
      {/*END OF APP DEVELOPMENT */}
    </div>
    </section>
  )
}

export default Services