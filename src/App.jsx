import { Header } from './components/Header'
import './global.css'

import styles from './App.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wraper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}
