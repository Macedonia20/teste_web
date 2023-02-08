import styles from './Avatar.module.css'

export function Avatar(props) {
    // Essa é a logica usada na variavel abaixo
    // Se a  EuEscolhoaPropiedade for diferente de false quer dizer que ele tem borda
      
    const EuEscolhoaPropiedade = props.EuEscolhoaPropiedade != false;

    return (
        <img 
            // Se as minhas props contem EuEscolhoaPropiedade eu vou mostrar 
            // estiloDaEuEscolhoaPropiedade se nao eu mostro styles.photo
            
            className={EuEscolhoaPropiedade ? styles.estiloDaEuEscolhoaPropiedade : styles.photo}
            src={props.src} 
         />

    )
}