import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'

import imgCracha from './assets/cracha.png'
import imgPerfil from './assets/perfil.jpeg'
import imgPlanilha from './assets/planilha.png'
import imgCurso from './assets/painelCurso.png'
import imgPainel from './assets/painelAdm.png'
import imgldr from './assets/ldr.png'
import imgProjetos from './assets/projetos.png'
import imgQgr from './assets/qgr.png'
import imgQgrkids from './assets/qgrkids.png'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'CRACHA VIRTUAL'},
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Esse foi meu primeiro projeto, foi um projeto bem simples com o foco em dispositvo mobile, nele é possivel acessar as minhas redes apenas com um click. As tecnologias usadas foram, HTML, CSS E JS! '},
      {type: 'photo', content: imgCracha},
      {type: 'link', content:'https://macedonia20.github.io/Cracha-nlw/'}, 
    ],
    publishedAt: new Date('2021-11-22 21:00:00')
  },

  {
    id: 2,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'PLANILHA ONLINE'},

      {type: 'paragraph', content: 'Esse foi meu segundo projeto, esse foi um pouco mais complexo. É uma planilha online com entrada e saida e tráz um resultado final negativo ou positivo. Usei a biblioteca do Mirage como api, as tecnologias usadas foram, HTML, CSS (styled-components), JS (React e TypeScript).'},
      {type: 'photo', content: imgPlanilha},
      {type: 'link', content:'http://planilhasonline.s3-website-sa-east-1.amazonaws.com/'}, 
    ],
    publishedAt: new Date('2021-12-12 21:00:00') 
  },

  {
    id: 3,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'PAINEL ADMINISTRATIVO'},
      {type: 'paragraph', content: 'Esse projeto foi desenvolvido com, Nextjs e Chakra UI. É um sistema administrativo, com tela de login, usei a biblioteca do ApexCharts para fazer os graficos e uma lista de usuários.'},
      {type: 'photo', content:  imgPainel},
      {type: 'link', content:'https://d24wfkhx4iz0js.cloudfront.net'}, 
    ],
    publishedAt: new Date('2022-04-12 21:00:00') 
  },

  {
    id: 4,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'PAINEL DE CURSOS'},
      {type: 'paragraph', content: 'Esse foi um dos projetos que eu mais gostei, nesse projeto eu conheci a biblioteca do Tailwind e achei incrivel a maneira de estilazação dessa biblioteca, usei também essas duas bibliotecas, GraphQL e Apollo. Foi meu primeiro contato com elas, gostei muito da perfomace de ambas. Tecnologias usadas foram, Tailwind, (React e TypeScript), GraphQL e Apollo.'},
      {type: 'photo', content: imgCurso},
      {type: 'link', content:'http://paineldecurso.com.s3-website-sa-east-1.amazonaws.com/'}, 
    ],
    publishedAt: new Date('2022-05-12 21:00:00') 
  },

  {
    id: 5,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'MOVIMENTO LDR'},
      {type: 'paragraph', content: 'Esse projeto foi criado para captção de votos e para quem quisesse participar da campanha como um multiplicador. Participei da criaçao desse projeto desde a concepção até a publicação podendo contribuir no, banco de dados, Back-end e Front-end. Existia uma página de checkin que, ao fazer checkin era disparado um email e senha para o usuario loga na plataforma. As tecnologias usadas foram, Mysql Workbench, Nodejs e Reactjs'},
      {type: 'photo', content: imgldr},
      {type: 'link', content:'https://app.movimentoldr.com.br/login'}, 
      ],
    publishedAt: new Date('2022-06-12 21:00:00') 
  },

  {
    id: 6,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'PLATAFORMA QGR'},
      {type: 'paragraph', content: 'Esse foi o maior projeto que eu participei. Essa é a plataforma QGR que alcançou mais de 60 paises e tem mais de 5mil acesso diarios. É uma rede social bem completa, atráves dela vc tem acesso a outras pessoas, pode acompanhar de perto videos de um dos maiores influenciadores (Pablo Marçal) e pode também se conectar com diversar pessoas ao redor do mundo. Basta criar uma conta e aproveitar muito! As tecnologias usadas foram, Mysql Workbench, Nodejs e React'},
      {type: 'photo', content: imgQgr},
      {type: 'link', content:'https://app.plataformaqgr.com.br/'}
    ],
    publishedAt: new Date('2022-01-12 21:00:00') 
  },

  {
    id: 7,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'PROJETOS MARÇAL'},
      {type: 'paragraph', content: 'Esse foi um projeto bem simples feito para, captar melhorias nas cidades de São Paulo. As tecnologias usadas foram, Mysql Workbench, Nodejs e React '},
      {type: 'photo', content: imgProjetos},
      {type: 'link', content:'https://governantesdanacao.com.br/'}, 
    ],
    publishedAt: new Date('2022-06-12 21:00:00') 
  },

  {
    id: 8,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'PLATAFORMA DE GAMIFICAÇÃO INFANTIL'},
      {type: 'paragraph', content: 'Esse projeto é uma replica do QGR, porém para crianças. Foi solicitado uma plataforma para interação e diversão das crianças , então pensei em uma plataforma de fácil acesso e dinâmica, fazendo com que as crianças se sintam atraídas e motivadas para avançar para o próximo nível. Há cada desafio concluído uma pontuação é acrescentada e novas fases são apresentadas, o mais legal dessa plataforma são os códigos secretos que são gerados fazendo com que a criança fique curiosa e almeje o próximo nível. ESSE É O PASSA A PASSO PARA A REALIZAÇÃO DO PROJETO:'},
      {type: 'paragraph', content: ' 1- Criei as tabelas e colunas, fiz os schemas no banco de dados (MYSQLWORKBENCH)'},
      {type: 'paragraph', content: ' 2- Desenvolvi as querys, Regra de negócio no Back-end e fiz a ligação com o BD (NODE.JS)'},
      {type: 'paragraph', content: ' 3- Desenvolvi a logica no Front-end e fiz ligação com o Back-end (REACT.JS)'},
      {type: 'photo', content: imgQgrkids},
      {type: 'link', content:'https://kids.plataformaqgr.com.br/'}, 
    ],
    publishedAt: new Date('2022-06-12 21:00:00') 
  }
  
]

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.id}
              />
            )
          })}
        </main>
      </div>
    </div>
    
  )
}

  

