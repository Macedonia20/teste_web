import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from '../Comments/Comment'
import { Avatar } from '../Avatar/Avatar'

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    })
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const [comment, setCreateComment] = useState(["Muito bom parabéns"])

    const [newComment, setNewComment] = useState('')

    function CreateNewComment() {
        event.preventDefault()

        setCreateComment([...comment, newComment])
        setNewComment('')
    }

    function newCommentChenge() {

        setNewComment(event.target.value)
        event.target.setCustomValidity('')
    }

    function deleteComment(commentToDeletele) {
       const commentsWithoutDeleteOne = comment.filter(comment => {
        return comment != commentToDeletele
       })
       setCreateComment(commentsWithoutDeleteOne);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('É preciso fazer um comentario')
    }

    const isNewCommentEmpty = newComment.length === 0;
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar src={author.avatar}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                        
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    console.log(content)
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'photo') {
                        return <img key={line.content} src={line.content} />
                    }else if (line.type === 'link') {
                        return <p key={line.content}><a target="blank" href={line.content}>{line.content}</a></p>
                    }
                })}
           </div>

            <form onSubmit={CreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                 name="comment"
                 placeholder="Deixe um comentário..."
                 onChange={newCommentChenge}
                 value={newComment}
                 onInvalid={handleNewCommentInvalid}
                 required
                />
                <footer>
                    <button 
                     type="submit"
                     disabled={isNewCommentEmpty}
                    >
                     Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comment.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment}
                            deleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}