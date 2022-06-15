import { format, formatDistanceToNow } from 'date-fns'
import styles from './Posts.module.css'
import ptBr from 'date-fns/locale/pt-Br'
import {profileImage} from '../../data'
import { Comments } from '../comments/Comments'
import { Avatar } from '../avatar/Avatar'
export function Post({author, publishedAt, content}){
 
  const publishedDateFormat = format(publishedAt,"d 'de' LLLL 'às' HH:mm",{locale: ptBr} )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
    { locale: ptBr,
    addSuffix: true}
    )
  return(
    <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src={author.avatarUrl}/>
        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
     </div>
      <time title='11 de maio às 08h13' dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
    </header>

    <div className={styles.content}>
      {content.map(line => {
        if (line.type === 'paragraph'){
          return <p>{line.content}</p>
        } else if(line.type ==='link'){
          return <p><a href="">{line.content}</a></p>
        }

      })}
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