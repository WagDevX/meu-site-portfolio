import React from "react";
import "./experience.css";
import { BsPatchCheckFill} from "react-icons/bs";
import Fade from 'react-reveal/Fade';


const Experience = () => {
  return (
    <section id="experience">
      <Fade bottom cascade delay={150}>
      <h5>Habilidades</h5>
      <h2>Conhecimentos</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvimento Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Estudando</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>KVLang</h4>
                <small className="text-light">Itermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desenvolvimento Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Estudando</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Kivy</h4>
                <small className="text-light">Intermediário</small>
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
