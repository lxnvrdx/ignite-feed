import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import styles from './Posts.module.css'
import {Comments} from '../comments/Comments'
import ptBr from 'date-fns/locale/pt-Br'
import { Avatar } from '../avatar/Avatar'


export function Post({author, publishedAt, content}){
  const [ comments, setComments ] = useState(['Post bem legal, hein?!'])
  const [ newCommentText, setNewCommentText] = useState('')

    const publishedDateFormat = format(publishedAt,"d 'de' LLLL 'às' HH:mm",{locale: ptBr} )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
    { locale: ptBr,
    addSuffix: true}
    )

    function handleCreateNewComment() {
      event.preventDefault()

      setComments([...comments, newCommentText])

      setNewCommentText('')
    }

    function handleNewCommentChange() {
      event.target.setCustomValidity('')
      setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(){
      event.target.setCustomValidity('Esse campo é obrigatório')

    }
    
    function deleteComment(commentToDelete) {
      //funcao a ser chamada pelo componente Comments, para deletar um comentario passando commentToDelete(content no component Comments)
      const commentsWithoutDeleted = comments.filter(comment => 
        { return comment !== commentToDelete}) 

      setComments(commentsWithoutDeleted)
      } 
    
    const isNewCommentEmpty = newCommentText.length===0

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
      <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
    </header>

    <div className={styles.content}>
      {content.map(line => {
        if (line.type === 'paragraph'){
          return <p key={line.content}>{line.content}</p>
        } else if(line.type ==='link'){
          return <p key={line.content}><a href="">{line.content}</a></p>
        }

      })}
    </div>

    <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea
      name='comment'
      placeholder='Deixe um comentário'
      onChange={handleNewCommentChange}
      value={newCommentText}
      onInvalid={handleNewCommentInvalid}
      required
      />
      <div className={styles.footer}>
      <button type='submit'
      disabled={isNewCommentEmpty}
       >Publicar comentário</button>
      </div>
    
    </form>

    <div className={styles.commentsList}>
      {comments.map( comment => {
        return <Comments  key={comment} content={comment} onDeleteComment={deleteComment}/>
      })
}
    </div>
    </article>
  )
}