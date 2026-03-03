import styles from "./Logo.module.css"

export default function Logo(){
    return(
        <div className={styles.logo}>
            <h1 className={styles.logo__title}>Minha<span>Logo</span></h1>
        </div>
    )
}