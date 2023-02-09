import { logoBuild } from '../../assets/logoBuild'

import styles from './Header.module.css'

export function Header() {
    return (
       
        <header className={styles.header}>
           <img src={logoBuild} alt="Logo builddbox" />

           {/* <AppleLogo size={52}  style={{backgroundColor: 'purple'}}/> */}
        </header>
    );
}