import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import { Comment } from './components/Comments/Comment'


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
      role: 'Enviado por'
    },
  

    content: [
      {type: 'paragraph', content: 'Esse foi meu primeiro projeto, foi um projeto bem simples com o foco em dispositvo mobile, nele é possivel acessar as minhas redes apenas com um click. As tecnologias usadas foram, HTML, CSS E JS! '},
      {type: 'link', content:'https://macedonia20.github.io/Cracha-nlw/'}, 
    ],
    publishedAt: new Date('2021-11-22 21:00:00')
  },
 

]

export function App({ content }) {

  function deleteComment(commentToDeletele) {
    const commentsWithoutDeleteOne = posts.filter(comment => {
    return comment != commentToDeletele
    })
    setCreateComment(commentsWithoutDeleteOne);
  }

  return (
    <div>
      <div className={styles.wrapper}>
      
        <main>
          {<Header /> }
          
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

          {/* <div className={styles.commentList}>
              
              {posts.map(comment => {
                  return (
                      <Comment 
                          key={comment} 
                          content={comment}
                          deleteComment={deleteComment}
                      />
                  )
              })}
          </div> */}
        </main>
      </div>
    </div>
    
  )
}

  

