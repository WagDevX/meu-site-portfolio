import React from "react";
import "./projects.css";
import AVTR1 from "../../assets/wsol-favicon.png";
import AVTR2 from "../../assets/wsol-av.png";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.png";
import AVTR5 from "../../assets/avatar5.png";
import Fade from "react-reveal";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = ({translations, currentLanguage}) => {
  const proTranslations = translations[currentLanguage];
  const projects_info = [
    {
      id: 1,
      image: AVTR1,
      title: "WorkTasks",
      description: proTranslations.project_1_description,
    },
    {
      id: 2,
      image: AVTR2,
      title: "Invent 1.0",
      description: proTranslations.project_2_description,
    },
    {
      id: 3,
      image: AVTR3,
      title: "TikTok Clone",
      description: proTranslations.project_3_description,
    },
    {
      id: 4,
      image: AVTR4,
      title: "Exercícios Python",
      description: proTranslations.project_4_description,
    },
    {
      id: 5,
      image: AVTR5,
      title: "Portfolio Site",
      description: proTranslations.project_5_description,
    },
  ];
  return (
    <section id="projects">
      <Fade bottom cascade delay={150}>
        <h5>Detalhes dos projetos</h5>
        <h2>Projetos</h2>
        <Swiper
          className="container details__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {projects_info.map(({ image, title, description }) => {
            return (
              <SwiperSlide className="detail">
                <div className="project__avatar">
                  <img src={image} alt="Avatar one" />
                </div>
                <h5>{title}</h5>
                <small className="project__detail">{description}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Fade>
    </section>
  );
};

export default Projects;
