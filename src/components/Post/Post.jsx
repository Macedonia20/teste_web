import { Feed } from '../Comments/Comment'
import { Avatar } from '../Avatar/Avatar'

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content, deleteComment }) {

    const [comment, setCreateComment] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus."])

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
            <form onSubmit={CreateNewComment} className={styles.commentForm}>
             <Avatar src={author.avatar} />

                <input
                    placeholder="Matheus Macedo"
                    disabled
                />

                <textarea 
                    name="comment"
                    placeholder="Mensagem"
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
                        <Feed 
                            key={comment} 
                            content={comment}
                            deleteComment={deleteComment}
                        />
                    )
                })}
            </div>
           
            <div className={styles.commentForm}>
               
                 <Avatar src={author.avatar} />

                    <div className={styles.authorInfo}>
                        <span>{author.role}</span>
                        <strong>{author.name}</strong>
                    </div>
            
                {content.map(line => {

                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;

                    }else if (line.type === 'link') {
                        return <p key={line.content}><a target="blank" href={line.content}>{line.content}</a></p>
                    }
                })}
           </div>
           
        </article>
    )
}