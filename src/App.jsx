import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joeyanovich.png',
      name: 'Joey Dias',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-09-05 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/nandahn.png',
      name: 'Maria Fernanda',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-09-07 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/lucas-tolotosilva.png',
      name: 'Lucas Toloto',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-09-14 20:00:00'),
  },
]

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wraper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
