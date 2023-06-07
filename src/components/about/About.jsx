import React from "react";
import "./about.css";
import ME from '../../assets/me-about3.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import Fade from 'react-reveal'

const About = ({ translations, currentLanguage }) => {
  const aboutTranslations = translations[currentLanguage];
  return (
    <Fade bottom cascade delay={150}>
    <section id="about">
      <Fade bottom cascade delay={150}>
      <h5>{aboutTranslations.get_to_know}</h5>
      <h2 >{aboutTranslations.aboutMe}</h2>
      </Fade>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
      </div>
      </div>
      <div className="about__content">
      <Fade bottom cascade delay={150}>
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>{aboutTranslations.about_experience_h5}</h5>
            <small>{aboutTranslations.about_experience_sm}</small>
          </article>
          <article className="about__card">
            <FaUniversity className="about__icon"/>
            <h5>{aboutTranslations.courses_h5}</h5>
            <small>{aboutTranslations.courses_sm}</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>{aboutTranslations.projects_h5}</h5>
            <small>{aboutTranslations.projects_sm}</small>
          </article>
        </div>
        </Fade>
        <Fade bottom cascade delay={150}>
        <p>
        {aboutTranslations.description_about}
        </p>
        </Fade>
        <a href="#contact" className="btn btn-primary">{aboutTranslations.lets_talk}</a>
      </div>
      </div>
      
    </section>
    </Fade>
  );
};

export default About;
