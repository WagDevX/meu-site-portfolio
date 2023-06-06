import React from "react";
import "./projects.css";
import AVTR1 from "../../assets/wsol-favicon.png";
import AVTR2 from "../../assets/wsol-av.png";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.png";
import AVTR5 from "../../assets/avatar5.png";

// import Swiper core and required modules
import { Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects_info = [
  {
    id: 1,
    image: AVTR1,
    title: "Worktasks",
    description:
      "App feito para organizar e distribuir tarefas, bem como auxilar no processo de precificação e validade na empresa onde trabalho, com sistema de login, cadastro de usuário e setor integrado ao firebase.",
  },
  {
    id: 2,
    image: AVTR2,
    title: "Invent 1.0",
    description:
      "Programa desktop Windows feito com python e biblioteca customtkinter com intenção de auxiliar na realização de inventários visando maior precisão e agilidade na contagem.",
  },
  {
    id: 3,
    image: AVTR3,
    title: "TikTok Clone",
    description:
      "Clone do TikTok realizado juntamente com a Escola Britânica de Tecnologia(EBAC) em um hackathon de 7 dias, utilizando Firebase, React, NodeJS.. etc.",
  },
  {
    id: 4,
    image: AVTR4,
    title: "Exercícios Python",
    description:
      "Mais de 100 exercícios realizados durante o curso de Python do CursoEmVideo do professor Guanabara.",
  },
  {
    id: 4,
    image: AVTR5,
    title: "Portfolio Site",
    description:
      "Site portfolio construído com React e Node com intuito de divulgação dos meus projetos e captação de vagas e clientes.",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>Detalhes dos projetos</h5>
      <h2>Projetos</h2>
      <Swiper className="container details__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {projects_info.map(({ image, title, description }) => {
          return (
            <SwiperSlide className="detail">
              <div className="project__avatar">
                <img src={image} alt="Avatar one" />
              </div>
              <h5>{title}</h5>
              <small className="project__detail">
                {description}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
