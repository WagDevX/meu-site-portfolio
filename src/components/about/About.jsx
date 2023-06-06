import React from "react";
import "./about.css";
import ME from '../../assets/me-about3.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
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
            <h5>Experience</h5>
            <small>Seeking</small>
          </article>
          <article className="about__card">
            <FaUniversity className="about__icon"/>
            <h5>Courses</h5>
            <small>3+ courses</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>Projects</h5>
            <small>5+ projects</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quam quae modi consectetur nostrum expedita corporis numquam exercitationem nam sint.
        </p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
      
    </section>
  );
};

export default About;
