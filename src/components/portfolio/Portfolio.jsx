import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/My project-1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "WorkTasks - Python KivyMD App with firebase",
    github: "https://github.com/WagDevX/kivy_venv",
    demo: "https://github.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: "TikTok Clone with react",
    github: "https://github.com/WagDevX/TikTok-Clone",
    demo: "https://github.com/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Invent 1.0 - Python desktop app with customtkinter",
    github: "https://github.com/WagDevX/InventarioV1.0",
    demo: "https://github.com/"
  },
  {
    id: 4,
    image: IMG4,
    title: "100+ Python Exercises ",
    github: "https://github.com/WagDevX/pythonexerc-cios",
    demo: "https://github.com/"
  },
  {
    id: 5,
    image: IMG5,
    title: "This portfolio",
    github: "https://github.com/",
    demo: "https://github.com/"
  },
  {
    id: 6,
    image: IMG6,
    title: "This portfolio admin system",
    github: "https://github.com/",
    demo: "https://github.com/"
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recebt Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn' target='_blank'>Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>  
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio