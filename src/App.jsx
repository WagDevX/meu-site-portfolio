import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Translation from "./components/translation/Translation";
import { useState } from "react";

const translations = {
  en: {
    get_to_know: "Get to know",
    aboutMe: "About Me",
    about_experience_h5: "Experience",
    about_experience_sm: "Personal projects",
    courses_h5: "Courses",
    courses_sm: "5+ Courses",
    projects_h5: "Projects",
    projects_sm: "10+ Projects",
    lets_talk: "Let's Talk",
    print: 'print("Hello, world!")',
    speciality: "Fullstack Developer",
    scroll_text: "Scroll down",
    description_about:
      "I have been studying programming for almost a year. My first language was Python, in which I spent most of my time learning. This led me to my first project, Invent1.0, which aimed to increase productivity in my current role as a team leader. Currently, I am learning CSS, NodeJS, and React. I love problem-solving, process optimization, and I am seeking a career transition.",
    experience_h5: "What skills i have",
    experience_h2: "My Experience",
    experience_front: "Fontend Development",
    experience_back: "Backend Development",
    front_html: "Experienced",
    front_js: "Experienced",
    front_react: "Experienced",
    front_css: "Experienced",
    front_tailwind: "Experienced",
    back_python: "Intermediate",
    back_node: "Intermediate",
    back_kivy: "Intermediate",
    back_firebase: "Experienced",
    back_post: "Experienced",
    services_h5: "What i offer",
    services_h2: "Services",
    services_aut: "Automation",
    services_autl1: "WebScrapping for colecting useful datas.",
    services_autl2: "Automation for repetitive processes.",
    services_autl3: "Automation to send messages in bulk.",
    services_web_h3: "Web Development",
    services_webl1: "Complete wep apps with React and NodeJS.",
    services_webl2: "Elegant and innovative design.",
    services_webl3: "Responsive apps on all platforms.",
    services_webl4: "Integrated system with databases.",
    services_webl5: "Static or dynamic websites.",
    services_webl6: "Totally open to constructive feedbacks.",
    services_apps_h3: "App Development",
    services_appsl1: "Devepelopment with Flutter.",
    services_appsl2: "Integration with databases/API.",
    services_appsl3: "UI Designs with Flutter Widgets.",
    services_appsl4: "Complete systems with login a register.",
    services_appsl5: "Agile development.",
    portfolio_h5: "My recent works",
    portfolio_h2: "Portfolio",
    portfolio_1_title: "WorkTasks - Python KivyMD App with firebase",
    portfolio_2_title: "TikTok Clone - React, NodeJS, Firebase, Firestore",
    portfolio_3_title: "Invent 1.0 - Python desktop app with customtkinter",
    portfolio_4_title: "Admin System of Pet Family E-Commerce",
    portfolio_5_title: "This Portfolio",
    portfolio_6_title:
      "Fully functional e-commerce made with React, NextJS, MongoDB, StyledComponents",
    portfolio_7_title:
      "Web version of APP Worktasks made w/ React, NextJS, TailwindCSS, Firebase, Firestore, MongoDB",
    project_h2: "Projects",
    project_1_description:
      "An app designed to organize and distribute tasks, as well as assist in the pricing and validity process at the company where I work, with a login system, user registration, and sector integration using Firebase.",
    project_2_description:
      "A Windows desktop program developed using Python and the customtkinter library, aimed at assisting in inventory management to achieve greater accuracy and efficiency in counting.",
    project_3_description:
      "A TikTok clone developed in collaboration with the British School of Technology (EBAC) during a 7-day hackathon, utilizing Firebase, React, NodeJS, and other technologies.",
    project_4_description:
      "Over 100 exercises completed during the Python course offered by CursoEmVideo, taught by Professor Guanabara.",
    project_4_title: "Python Exercises",
    project_5_description:
      "A portfolio website built with React and Node, aimed at showcasing my projects and attracting job opportunities and clients.",
    contact_h5: "Get in touch",
    contact_h2: "Contact",
    contact_whisper: "Send message",
    contact_form_l1: "Your full name",
    contact_form_l2: "Your e-mail",
    contact_form_l3: "Your message",
    footer_home_link: "Home",
    footer_about_link: "About",
    footer_exp_link: "Experience",
    footer_serv_link: "Services",
    footer_port_link: "Portfolio",
    footer_pro_link: "Projects",
    footer_cont_link: "Contact",
    footer_copyright: "Wagner Solutions. All rights reserved.",
  },
  pt: {
    get_to_know: "Saiba",
    aboutMe: "Sobre mim",
    about_experience_h5: "Experiência",
    about_experience_sm: "Projetos pessoais",
    courses_h5: "Cursos",
    courses_sm: "5+ Cursos",
    projects_h5: "Projetos",
    projects_sm: "10+ Projetos",
    lets_talk: "Mensagem",
    print: 'print("Olá, mundo!")',
    speciality: "Desenvolvedor Fullstack",
    scroll_text: "Rolar para baixo",
    description_about:
      "Venho estudando programação há quase um ano. Minha primeira linguagem foi Python, na qual passei a maior parte do tempo aprendendo. Isso me levou ao meu primeiro projeto, o Invent1.0, que visava aumentar a produtividade no meu cargo atual como líder de equipe. Atualmente, estou aprendendo CSS, NodeJS e React. Adoro solucionar problemas, otimizar processos e estou buscando uma transição de carreira.",
    experience_h5: "Habilidades",
    experience_h2: "Experiência",
    experience_front: "Desenvolvimento Fontend",
    experience_back: "Desenvolvimento Backend",
    front_html: "Experiente",
    front_js: "Experiente",
    front_react: "Experiente",
    front_css: "Experiente",
    front_kvlang: "Itermediário",
    back_python: "Itermediário",
    back_node: "Intermediário",
    back_kivy: "Itermediário",
    back_firebase: "Experiente",
    back_post: "Experiente",
    services_h5: "O que eu ofereço",
    services_h2: "Serviços",
    services_aut: "Automação",
    services_autl1: "WebScrapping para coleta de dados úteis.",
    services_autl2: "Automação de processos repetitivos.",
    services_autl3: "Automação para enviar mensagens em lote.",
    services_web_h3: "Desenvolvimento Web",
    services_webl1: "Web apps completos com React e NodeJS.",
    services_webl2: "Designs elegantes e inovadores.",
    services_webl3: "Apps reponsivos para todas as plataformas.",
    services_webl4: "Sistemas ingtegrados com banco de dados.",
    services_webl5: "Sites dinâmicos ou estáticos.",
    services_webl6: "Totalmente aberto a críticas construtivas.",
    services_apps_h3: "Desenvolvimento de Aplicativos",
    services_appsl1: "Desenvolvimento com Flutter SDK.",
    services_appsl2: "Integração com banco de dados/API.",
    services_appsl3: "Desing UI com Widgets Flutter",
    services_appsl4: "Sistemas completos com login e cadastro",
    services_appsl5: "Desenvolvimento ágil com Flutter",
    portfolio_h5: "Trabalhos recentes",
    portfolio_h2: "Portfólio",
    portfolio_1_title: "WorkTasks - Python KivyMD App com firebase",
    portfolio_2_title: "TikTok Clone - React, NodeJS, Firebase, Firestore",
    portfolio_3_title: "Invent 1.0 - Python desktop app com customtkinter",
    portfolio_4_title: "Sistema Admin do E-Commerce Pet Family",
    portfolio_5_title: "Este portfólio",
    portfolio_6_title:
      "E-Commerce completamente funcional feito com React, NextJS, MongoDB, Styled Components",
    portfolio_7_title:
      "Versão Web do APP Worktasks feito c/ React, NextJS, TailwindCSS, Firebase, Firestore, MongoDB",
    project_h5: "Detalhes dos projetos",
    project_h2: "Projetos",
    project_1_description:
      "App feito para organizar e distribuir tarefas, bem como auxilar no processo de precificação e validade na empresa onde trabalho, com sistema de login, cadastro de usuário e setor integrado ao firebase.",
    project_2_description:
      "Programa desktop Windows feito com python e biblioteca customtkinter com intenção de auxiliar na realização de inventários visando maior precisão e agilidade na contagem.",
    project_3_description:
      "Clone do TikTok realizado juntamente com a Escola Britânica de Tecnologia(EBAC) em um hackathon de 7 dias, utilizando Firebase, React, NodeJS.. etc.",
    project_4_description:
      "Mais de 100 exercícios realizados durante o curso de Python do CursoEmVideo do professor Guanabara.",
    project_4_title: "Exercícios Python",
    project_5_description:
      "Site portfolio construído com React e Node com intuito de divulgação dos meus projetos e captação de vagas e clientes.",
    contact_h5: "Entre em contato",
    contact_h2: "Contatos",
    contact_whisper: "Enviar mensagem",
    contact_form_l1: "Seu nome completo",
    contact_form_l2: "Seu e-mail",
    contact_form_l3: "Sua mensagem",
    footer_home_link: "Início",
    footer_about_link: "Sobre",
    footer_exp_link: "Experiência",
    footer_serv_link: "Serviços",
    footer_port_link: "Portfólio",
    footer_pro_link: "Projetos",
    footer_cont_link: "Contato",
    footer_copyright: "Wagner Solutions. Todos os direitos reservados.",
  },
};

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <Header translations={translations} currentLanguage={currentLanguage} />
      <Translation
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <Nav />
      <About translations={translations} currentLanguage={currentLanguage} />
      <Experience
        translations={translations}
        currentLanguage={currentLanguage}
      />
      <Services translations={translations} currentLanguage={currentLanguage} />
      <Portfolio
        translations={translations}
        currentLanguage={currentLanguage}
      />
      <Projects translations={translations} currentLanguage={currentLanguage} />
      <Contact translations={translations} currentLanguage={currentLanguage} />
      <Footer translations={translations} currentLanguage={currentLanguage} />
    </>
  );
};

export default App;
