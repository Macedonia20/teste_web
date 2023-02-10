import { Feed } from '../Comments/Comment'
import { Avatar } from '../Avatar/Avatar'

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content, deleteFeed }) {

    const [feed, setCreateFeed] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus."])

    const [newFeed, setNewFeed] = useState('')

    function CreateNewFeed() {
        event.preventDefault()

        setCreateFeed([...feed, newFeed])
        setNewFeed('')
    }

    function newFeedChenge() {
        event.target.setCustomValidity('');
        setNewFeed(event.target.value);
    }

    function deleteFeed(commentToDeletele) {
       const commentsWithoutDeleteOne = feed.filter(feed => {
        return feed != commentToDeletele
       })
       setCreateFeed(commentsWithoutDeleteOne);
    }

    function handleNewFeedtInvalid() {
        event.target.setCustomValidity('É preciso fazer um comentario')
    }
    
    const isNewCommentEmpty = newFeed.length === 0;
    
    return (
        <article className={styles.post}>
            <form onSubmit={CreateNewFeed} className={styles.feedForm}>
             <Avatar src={author.avatar} />

                <input
                    placeholder="Matheus Macedo"
                    disabled
                />

                <textarea 
                    name="comment"
                    placeholder="Mensagem"
                    onChange={newFeedChenge}
                    value={newFeed}
                    onInvalid={handleNewFeedtInvalid}
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
                
                {feed.map(comment => {
                    return (
                        <Feed 
                            key={comment} 
                            content={comment}
                            deleteFeed={deleteFeed}
                        />
                    )
                })}
            </div>
           
            <div className={styles.feedForm}>
               
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