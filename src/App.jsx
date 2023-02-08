import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import { Newpost } from './components/Newpost/Newpost'

import imgPerfil from './assets/perfil.jpeg'

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
      // {type: 'photo', content: imgCracha},
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
      {type: 'paragraph', content: 'CRACHA VIRTUAL'},
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Esse foi meu primeiro projeto, foi um projeto bem simples com o foco em dispositvo mobile, nele é possivel acessar as minhas redes apenas com um click. As tecnologias usadas foram, HTML, CSS E JS! '},
      // {type: 'photo', content: imgCracha},
      {type: 'link', content:'https://macedonia20.github.io/Cracha-nlw/'}, 
    ],

    publishedAt: new Date('2021-11-22 21:00:00')
  },

  
]

export function App() {

  return (
    <div>
      <Header />
      <Newpost />

      <div className={styles.wrapper}>
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

  

