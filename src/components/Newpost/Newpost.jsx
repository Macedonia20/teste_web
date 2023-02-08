import { useState } from 'react';

import { Comment } from '../Comments/Comment'


import styles from './Newpost.module.css'

export function Newpost() {

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
        <>
            <form onSubmit={CreateNewComment} className={styles.commentForm} >
                <strong>Deixe seu comentário</strong>

                <textarea
                  name="comment"
                  placeholder="Digite seu nome..."
                  onChange={newCommentChenge}
                  value={newComment}
                  onInvalid={handleNewCommentInvalid}
                  required
                />

                <textarea
                  name="comment"
                  placeholder="Digite seu nome..."
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
        </>
         
    )
}