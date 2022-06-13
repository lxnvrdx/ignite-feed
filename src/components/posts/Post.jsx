import styles from './Posts.module.css'
import {profileImage} from '../sidebar/Sidebar'

export function Post({author, content}){
  return(
    <article className={styles.post}>
    <header>
      <div className={styles.author}>
       <img className={styles.avatar} src={profileImage} alt="" />
      </div>

      <div className={styles.authorInfo}>
        <strong>Diego Fernandes</strong>
        <span>Web Developer</span>
      </div>

      <time title='11 de maio às 08h13' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
    </header>

    <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>


      <p>👉 <a href="">jane.design/doctorcare</a></p>

      <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
    </div>
    </article>
  )
}