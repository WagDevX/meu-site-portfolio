# Olá, seja bem vindo ao meu portfolio
### Atualizações
07/02/2023 - Adicionado um efeito de revelação em cascata com a biblioteca react-revals à todos os componentes
https://github.com/WagDevX/meu-site-portfolio/blob/97b59db091820a07c64e636bffe44b8fd3121866/src/components/header/Header.jsx#L6
## APP
Aqui iniciamos nosso app dentro de src importando os componentes da página e adicionando-os em nossa variável constante <b>(App)</b>
https://github.com/WagDevX/meu-site-portfolio/blob/60b3bb7932479ba8e3d8984679a74bee9d2c5a78/src/App.jsx#L1-L28

Ainda dentro de src temos um <b>index.css</b> onde definimos os estilos gerais e definimos algumas variáveis para serem reutilizadas ao longo do desenvolvimento
https://github.com/WagDevX/meu-site-portfolio/blob/989f08245c48d8ba5dbb06ebaa802fe95b96835f/src/index.css#L1-L142

E por último dentro de src temos o <b>index.js</b> onde é renderizado o componente App no elemento com id <b>"#root"</b>, e adicionamos também uma função para animar o texto com efeito "hacking" h1 do nosso header
https://github.com/WagDevX/meu-site-portfolio/blob/0ae543c1d669cb84b5f72e1d962bbcd95c3b44db/src/index.js#L1-L40

# Componentes da página
## NAV
Aqui temos nossa barra de navegação onde cada icone redireciona para uma seção específica, e utilizamos <b>useEffect</b> e <b>useState</b> para atualizarmos o estado de ativo dos botões quando eles são chamados ou quando o usuário rola para baixo os botões vão sendo atualizados como ativos se a seção estiver <b>80%</b> visível na tela
https://github.com/WagDevX/meu-site-portfolio/blob/06c4143773663535452459c64ff365cc9fa40d24/src/components/nav/Nav.jsx#L1-L81

## Header
Aqui temos nosso <b>Header</b> onde definimos a estrutura e importamos os botões de download e menssagem, assim como os botões das redes sociais
https://github.com/WagDevX/meu-site-portfolio/blob/1babeeb75f95822305d95a4792127337c47bc771/src/components/header/Header.jsx#L1-L28

Aqui importamos nosso cv da da pasta assets e referenciamos ao nosso botão de download, e também o botão de enviar uma mensagem que se referencia e encaminha à nossa seção de <b>contato</b>
https://github.com/WagDevX/meu-site-portfolio/blob/ed89fde33774bf66f95f4de6a9c5c6f9f03c25fe/src/components/header/CTA.jsx#L1-L13

Aqui importamos três ícones e adicionamos à nossa const <b>HeaderSocials</b> para redirecionarmos o usuário às redes sociais em outra aba com <b>taget="_blank"</b>
https://github.com/WagDevX/meu-site-portfolio/blob/6e0077b555ee9bcf66bdc16ca4c852b1de36bc84/src/components/header/HeaderSocials.jsx#L1-L16

Por último temos nosso <b>header.css</b> para estilizarmos todos os items da nossa seção header referenciado-os pelo <b>className</b> e utilizando <b>media queries</b> para trazermos reponsividade à tablets e smartphone
https://github.com/WagDevX/meu-site-portfolio/blob/4600cdb6bd7a929d4521aaba91aceed9428a392a/src/components/header/header.css#L1-L85


## About 
Aqui temos nossa seção <b>about</b> onde colocamos algumas informações dentro de <b>cards</b>, uma imagem e adicionamos um <b>parágrafo</b> e um botão para <b>enviar mensagem</b> que redireciona à nossa seção de <b>contato</b>
https://github.com/WagDevX/meu-site-portfolio/blob/b0c89685574d61fccd522b5637edd0651451f319/src/components/about/About.jsx#L1-L48

Aqui temos nosso <b>about.css</b> onde estilizamos todos os items referenciado-os pelo <b>className</b> declarados acima e utilizando <b>media queries</b> para trazermos reponsividade à tablets e smartphones
https://github.com/WagDevX/meu-site-portfolio/blob/e9a8df5d89635c125f43d775352869b31dc2834f/src/components/about/about.css#L1-L114

## Experience 
Aqui temos nossa seção sobre meus conhecimentos em tecnologias de <b>FrontEnd</b> e <b>BackEnd</b> onde cada tecnlogia é referenciada dentro de artigos dentro da div <b>experience__content</b>
https://github.com/WagDevX/meu-site-portfolio/blob/ab0a54ab26b82eb0e17c671abe15b5d272e92a8e/src/components/experience/Experience.jsx#L1-L96
  
Aqui temos nosso <b>eperience.css</b> onde estilizamos os <b>artigos</b>, <b>títulos</b> e <b>divs</b> e utilizando <b>media queries</b> para trazermos reponsividade à tablets e smartphones
https://github.com/WagDevX/meu-site-portfolio/blob/ab0a54ab26b82eb0e17c671abe15b5d272e92a8e/src/components/experience/experience.css#L1-L71

## Services
Aqui temos os <b>Serviços</b> oferecidos dentro de três artigos com listas e parágrafos dentro deles
https://github.com/WagDevX/meu-site-portfolio/blob/d47350713e5e1c9d891a70db34da9727b6c0c526/src/components/services/Services.jsx#L1-L96

Aqui temos nosso <b>services.css</b> onde estilizamos todos os itens acima pelo <b>className</b> e utilizando <b>media queries</b> para trazermos reponsividade à tablets e smartphones
https://github.com/WagDevX/meu-site-portfolio/blob/d47350713e5e1c9d891a70db34da9727b6c0c526/src/components/services/services.css#L1-L71

## Portfolio
Aqui temos nossa seção <b>Portfolio</b> onde importamos as imagens e utilizamos dentro da const data e utilizamos o método <b>.map</b> para gerarmos de forma diâmica os itens da seção
https://github.com/WagDevX/meu-site-portfolio/blob/ab46da1fe2a1cf6f4f57f0edc2ad192f81c881a3/src/components/portfolio/Portfolio.jsx#L1-L72
Aqui temos nosso <b>portfolio.css</b> onde estilizamos todos os itens acima pelo <b>className</b> e utilizando <b>media queries</b> para trazermos reponsividade à tablets e smartphones
https://github.com/WagDevX/meu-site-portfolio/blob/ab46da1fe2a1cf6f4f57f0edc2ad192f81c881a3/src/components/portfolio/portfolio.css#L1-L52

## Projects
Aqui onde mostramos os detalhes dos <b>projetos</b> da seção acima utilizando a biblioteca <bSwiperJS</b> para apresentaar slides de uma forma moderna, estilizada e fácil de se implementar
https://github.com/WagDevX/meu-site-portfolio/blob/ab46da1fe2a1cf6f4f57f0edc2ad192f81c881a3/src/components/projects/Projects.jsx#L1-L86
Aqui temos nosso <b>projects.css</b> onde estilizamos todos os itens acima pelo <b>className</b> e utilizando <b>media queries</b> para trazermos reponsividade à tablets e smartphones, dessa vez referenciando o <b>container.</b> do nosso <b>index.css</b> para alteramos o atributo <b>width</b> e <b>padding-botton</b>
https://github.com/WagDevX/meu-site-portfolio/blob/ab46da1fe2a1cf6f4f57f0edc2ad192f81c881a3/src/components/projects/projects.css#L1-L70

## Contact
Aqui temos nossa seção de <b>Contato</b> onde redirecionamos o usuário para enviar um email, mensagem no instagram, whatsapp ou enviar uma mensagem diretamente do formulário implementado utilizando a biblioteca <b>emailJS</b>, para utilizá-la é necessário criar uma conta no site e, serviço de email e template para receber os emails do formulário e em seguida pegando os as chaves e implementado no nosso <b>Contact.jsx</b>
https://github.com/WagDevX/meu-site-portfolio/blob/ab46da1fe2a1cf6f4f57f0edc2ad192f81c881a3/src/components/contact/Contact.jsx#L1-L56

