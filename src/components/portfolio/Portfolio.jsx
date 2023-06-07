import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/My project-1.png'
import IMG2 from '../../assets/portfolio7.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio1.jpg'
import Fade from 'react-reveal'


const Portfolio = ({translations, currentLanguage}) => {
  const portTranslations = translations[currentLanguage];
  const data = [
    {
      id: 1,
      image: IMG1,
      title: portTranslations.portfolio_1_title,
      github: "https://github.com/WagDevX/kivy_venv",
      demo: "https://github.com/WagDevX/kivy_venv"
    },
    {
      id: 2,
      image: IMG2,
      title: portTranslations.portfolio_2_title,
      github: "https://github.com/WagDevX/TikTok-Clone",
      demo: "https://tiktok---jornada-770ff.web.app/"
    },
    {
      id: 3,
      image: IMG3,
      title: portTranslations.portfolio_3_title,
      github: "https://github.com/WagDevX/InventarioV1.0",
      demo: "https://github.com/WagDevX/InventarioV1.0"
    },
    {
      id: 4,
      image: IMG4,
      title: portTranslations.portfolio_4_title,
      github: "https://github.com/WagDevX/pythonexerc-cios",
      demo: "https://github.com/WagDevX/pythonexerc-cios"
    },
    {
      id: 5,
      image: IMG5,
      title: portTranslations.portfolio_5_title,
      github: "https://github.com/WagDevX/meu-site-portfolio",
      demo: "https://github.com/WagDevX/meu-site-portfolio"
    },
    {
      id: 6,
      image: IMG6,
      title: portTranslations.portfolio_6_title,
      github: "https://github.com/",
      demo: "https://github.com/"
    }
  ];
  return (
    <section id='portfolio'>
      <h5>{portTranslations.portfolio_h5}</h5>
      <h2>{portTranslations.portfolio_h2}</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <Fade bottom cascade delay={150}>
              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn' target='_blank'>Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                    </div>
              </article>
              </Fade> 
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio