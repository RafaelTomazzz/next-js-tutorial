import global from '../app/page.module.css'
import styles from './Main.module.css'

export default function Main(){
    return(
        <main className={`${global.parent} col-8`}>
            <div className={`${global.child} ${styles.main}`}></div>
        </main>
    )
} 