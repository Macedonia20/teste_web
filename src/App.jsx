import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'

import imgPerfil from './assets/nasa.webp'
import styles from './App.module.css'

import './global.css'

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatar: imgPerfil,
        name: 'Matheus Macedo',
        role: 'Publicado cerca de 2h',
      },
    
  
      content: [
        {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.'},
      ],
      publishedAt: new Date('2021-11-22 21:00:00'),
    }
  ];

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
         
        </main>
      </div>
    </div>
  )
}

  

