import styles from './Footer.module.css'
import Logo from './Logo'

export default function Footer(){
    return(
        <footer className={`container-fluid ${styles.footer}`}>
            <Logo/>
        </footer>
    )
}