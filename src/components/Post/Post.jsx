import { Trash } from "phosphor-react";
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


import { Comment } from '../Comments/Comment'
import { Avatar } from '../Avatar/Avatar'

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content, deleteComment }) {

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

    function handleDeleteComment() {
        deleteComment(content)
    }

    const isNewCommentEmpty = newComment.length === 0;
    
    return (
        <article className={styles.post}>
            <form onSubmit={CreateNewComment} className={styles.commentForm}>
             <Avatar src={author.avatar} />

                <input
                    name="comment"
                    placeholder="Digite seu nome"
                    onChange={newCommentChenge}
                    value={newComment}
                    onInvalid={handleNewCommentInvalid}
                    required
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
                        <Comment 
                            key={comment} 
                            content={comment}
                            deleteComment={deleteComment}
                        />
                    )
                })}
            </div>
           
            <div className={styles.commentForm}>
                <header>
                    <button onClick={handleDeleteComment} title="Deletar post">
                        <Trash  size={20} />
                    </button>
                </header>
               
                 <Avatar src={author.avatar} />
            
                {content.map(line => {

                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;

                    }else if (line.type === 'link') {
                        return <p key={line.content}><a target="blank" href={line.content}>{line.content}</a></p>
                    }
                })}

                    

                    <div className={styles.authorInfo}>
                        <span>{author.role}</span>
                        <strong>{author.name}</strong>
                    </div>
           </div>
            

           
        </article>
    )
}