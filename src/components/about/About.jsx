import React from "react";
import "./about.css";
import ME from '../../assets/me-about3.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Saiba</h5>
      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
      </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experiência</h5>
            <small>Projetos pessoais</small>
          </article>
          <article className="about__card">
            <FaUniversity className="about__icon"/>
            <h5>Cursos</h5>
            <small>3+ Cursos</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>Projetos</h5>
            <small>5+ projetos</small>
          </article>
        </div>
        <p>
        Venho estudando programação de software há quase um ano. Minha primeira linguagem foi Python, na qual passei a maior parte do tempo aprendendo. Isso me levou ao meu primeiro projeto, o Invent1.0, que visava aumentar a produtividade no meu cargo atual como líder de equipe. Atualmente, estou aprendendo CSS, NodeJS e React. Adoro solucionar problemas, otimizar processos e estou buscando uma transição de carreira.
        </p>

        <a href="#contact" className="btn btn-primary">Mensagem</a>
      </div>
      </div>
      
    </section>
  );
};

export default About;