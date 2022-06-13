import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import {Post} from  './components/posts/Post'
import { Sidebar } from './components/sidebar/Sidebar'
function App() {

  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
    <Sidebar/>
    <main>
    <Post author="Diego Fernandes" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat sunt quibusdam officia illo ducimus perferendis aliquam tempore a error alias voluptates voluptatibus, adipisci repellendus totam fuga soluta delectus! Nostrum."/>
    <Post author="Diego Lima" content="A new post."/>
    </main>
    </div>
    </>
 
  )
}

export default App
