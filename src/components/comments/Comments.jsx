import styles from './Comments.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { profileImage } from '../../data'
import { Avatar } from '../avatar/Avatar'
export function Comments(){
  return(
    <div className={styles.Comments}>
        <Avatar src={profileImage} hasBorder={false} />

      <div className={styles.CommentsBox}>
        <div className={styles.CommentsContent}>
        <header>
          <div className={styles.AuthorAndTime}>
            <strong>Diego Fernandes</strong>
            <time title='11 de maio às 08h13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
          </div>
          <button title='Deletar comentário'>
            <Trash size={24}/>
          </button>
        </header>
        <p>Muito bom Devon, parabéns</p>
        </div>
        <footer>
         <button>
          <ThumbsUp/>
          Aplaudir<span>20</span>
         </button>
        </footer>
      </div>
    </div>
  )
}