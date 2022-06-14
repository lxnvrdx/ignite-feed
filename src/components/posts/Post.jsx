import styles from './Posts.module.css'
import {profileImage} from '../../data'
import { Comments } from '../comments/Comments'
import { Avatar } from '../avatar/Avatar'

export function Post({author, content}){
  return(
    <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src={profileImage}/>
        <div className={styles.authorInfo}>
          <strong>Diego Fernandes</strong>
          <span>Web Developer</span>
        </div>
     </div>
      <time title='11 de maio às 08h13' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
    </header>

    <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>


      <p>👉  <a href="">jane.design/doctorcare</a></p>

      <p>
        <a href="">#novoprojeto</a>{" "}
        <a href="">#nlw</a>{" "}
        <a href="">#rocketseat</a>{" "}
      </p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea
      placeholder='Deixe um comentário'
      />
      <div className={styles.footer}>
      <button type='submit'>Publicar comentário</button>
      </div>
    
    </form>

    <div className={styles.commentsList}>
      <Comments/>
      <Comments/>
    </div>
    </article>
  )
}