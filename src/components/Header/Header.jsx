import logoBuild from '../../assets/logoBuild.png'

import styles from './Header.module.css'

export function Header() {
    return (
       
        <header className={styles.header}>
           <img src={logoBuild} alt="Logo builddbox" />
        </header>
    );
}