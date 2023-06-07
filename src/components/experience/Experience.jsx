import React from "react";
import "./experience.css";
import { BsPatchCheckFill} from "react-icons/bs";
import Fade from 'react-reveal/Fade';


const Experience = ({ translations, currentLanguage }) => {
  const expTranslations = translations[currentLanguage];
  return (
    <section id="experience">
      <Fade bottom cascade delay={150}>
      <h5>{expTranslations.experience_h5}</h5>
      <h2>{expTranslations.experience_h2}</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{expTranslations.experience_front}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">{expTranslations.front_html}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">{expTranslations.front_css}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">{expTranslations.front_js}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>KVLang</h4>
                <small className="text-light">{expTranslations.front_kvlang}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">{expTranslations.front_react}</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>{expTranslations.experience_back}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">{expTranslations.back_python}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">{expTranslations.back_firebase}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">{expTranslations.back_node}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">{expTranslations.back_post}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Kivy</h4>
                <small className="text-light">{expTranslations.back_kivy}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>KivyMD</h4>
                <small className="text-light">{expTranslations.back_kivy}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      </Fade>
    </section>
  );
};

export default Experience;
