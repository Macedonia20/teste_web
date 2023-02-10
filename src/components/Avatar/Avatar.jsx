import styles from './Avatar.module.css'

export function Avatar(props) {

    const propertyPhoto = props.propertyPhoto != false;
    return (
        <img 
            className={propertyPhoto ? styles.stylePropertyPhoto : styles.photo}
            src={props.src} 
         />
    )
}