import { useState } from 'react';

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from '../Avatar/Avatar'

import styles from './Feed.module.css'
import imgProfile from '../../assets/nasa.webp'

export function Feed({ content, deleteFeed }) {

    const [countLike, setCountLike] = useState(0)

    function handleDeleteFeed() {
        deleteFeed(content)
    };

    function handleLikeFeed() {
        setCountLike((state) => {
            return state + 1
        });
    };

    return (
        <div className={styles.feed}>
            <Avatar propertyPhoto={false} src={imgProfile} />

            <div className={styles.feedBox}>
                <div className={styles.feedContent}>
                    <header>
                        <div className={styles.authorAndTime}>

                            <strong>Matheus Macedo</strong>

                            <time title="" dateTime="">Publicado cerca de 2h</time>

                        </div>

                        <button onClick={handleDeleteFeed} title="Deletar comentário">
                            <Trash  size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                    
                </div>
                <footer>
                    <button onClick={handleLikeFeed}>
                        <ThumbsUp />
                        Like <span>{countLike}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}