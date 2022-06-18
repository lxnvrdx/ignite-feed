import { useState } from 'react'
import styles from './Comments.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { profileImage } from '../../data'
import { Avatar } from '../avatar/Avatar'

export function Comments({content, onDeleteComment}){
  const [countLikes, setCountLikes] = useState(0)
  
  function handleDeleteComment(){
    //funcao onDleteComment passa content(commentToDelete no component Posts)
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setCountLikes((state) => {return state + 1})
  }

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
          <button onClick={handleDeleteComment} title='Deletar comentário'>
            <Trash size={24}/>
          </button>
        </header>
        <p>{content}</p>
        </div>
        <footer>
         <button onClick={handleLikeComment}>
          <ThumbsUp/>
          Aplaudir<span>{countLikes}</span>
         </button>
        </footer>
      </div>
    </div>
  )
}