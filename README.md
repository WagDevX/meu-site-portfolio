# Olá, seja bem vindo ao meu portfolio
## APP
Aqui iniciamos nosso app dentro de src importando os componentes da página e adicionando-os em nossa variável constante (App)
https://github.com/WagDevX/meu-site-portfolio/blob/60b3bb7932479ba8e3d8984679a74bee9d2c5a78/src/App.jsx#L1-L28

Ainda dentro de src temos um index.css onde definimos os estilos gerais e definimos algumas variáveis para serem reutilizadas ao longo do desenvolvimento
https://github.com/WagDevX/meu-site-portfolio/blob/989f08245c48d8ba5dbb06ebaa802fe95b96835f/src/index.css#L1-L142

E por último dentro de src temos o <u>index.js</u> onde é renderizado o componente App no elemento com id "#root", assim como é chamado no index.css acima
https://github.com/WagDevX/meu-site-portfolio/blob/c04b176f014945931a42c6d1ab76c90f5b4cd6d4/src/index.js#L1-L5

# Componentes da página
## NAV
Aqui temos nossa barra de navegação onde cada icone redireciona para uma seção específica, e utilizamos useEffect e useState para atualizarmos o estado de ativo dos botões quando eles são chamados ou quando o usuário rola para baixo os botões vão sendo atualizados como ativos se a seção está 80% visível na tela
https://github.com/WagDevX/meu-site-portfolio/blob/06c4143773663535452459c64ff365cc9fa40d24/src/components/nav/Nav.jsx#L1-L81

## Header
Aqui temos nosso Header onde definimos a estrutura e importamos os botões de download e menssagem, assim como os botões das redes sociais
https://github.com/WagDevX/meu-site-portfolio/blob/1babeeb75f95822305d95a4792127337c47bc771/src/components/header/Header.jsx#L1-L28

Aqui importamos nosso cv da da pasta assets e referenciamos ao nosso botão de download, e também o botão de enviar uma mensagem que se referencia e encaminha à nossa seção de contato
https://github.com/WagDevX/meu-site-portfolio/blob/ed89fde33774bf66f95f4de6a9c5c6f9f03c25fe/src/components/header/CTA.jsx#L1-L13

Aqui importamos três ícones e adicionamos à nossa const HeaderSocials para redirecionarmos o usuário às redes sociais em outra aba com taget="_blank"
https://github.com/WagDevX/meu-site-portfolio/blob/6e0077b555ee9bcf66bdc16ca4c852b1de36bc84/src/components/header/HeaderSocials.jsx#L1-L16

Por último temos nosso header.css para estilizarmos todos os items da nossa seção header referenciado-os pelo className e utilizando media queries para trazermos reponsividade à tablets e smartphone[
](https://github.com/WagDevX/meu-site-portfolio/blob/ab0a54ab26b82eb0e17c671abe15b5d272e92a8e/src/components/experience/experience.css#L1)
https://github.com/WagDevX/meu-site-portfolio/blob/4600cdb6bd7a929d4521aaba91aceed9428a392a/src/components/header/header.css#L1-L85


## About 
Aqui temos nossa seção about onde colocamos algumas informações dentro de cards, uma imagem e adicionamos um parágrafo e um botão para enviar mensagem que redireciona à nossa seção de contato
https://github.com/WagDevX/meu-site-portfolio/blob/b0c89685574d61fccd522b5637edd0651451f319/src/components/about/About.jsx#L1-L48

Aqui temos nosso about.css onde estilizamos todos os items referenciado-os pelo className declarados acima e utilizando media queries para trazermos reponsividade à tablets e smartphones
https://github.com/WagDevX/meu-site-portfolio/blob/e9a8df5d89635c125f43d775352869b31dc2834f/src/components/about/about.css#L1-L114

## Experience 
Aqui temos nossa seção sobre meus conhecimentos em tecnologias de FrontEnd e BackEnd onde cada tecnlogia é referenciada dentro de artigos dentro da div experience__content
https://github.com/WagDevX/meu-site-portfolio/blob/ab0a54ab26b82eb0e17c671abe15b5d272e92a8e/src/components/experience/Experience.jsx#L1-L96
  
Aqui temos nosso eperience.css onde estilizamos os artigos, títulos e divs e utilizando media queries para trazermos reponsividade à tablets e smartphones
https://github.com/WagDevX/meu-site-portfolio/blob/ab0a54ab26b82eb0e17c671abe15b5d272e92a8e/src/components/experience/experience.css#L1-L71
