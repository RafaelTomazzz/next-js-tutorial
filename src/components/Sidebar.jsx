import global from '../app/page.module.css'
import styles from './Sidebar.module.css'

export default function Sidebar(){
    return(
        <aside className={`${global.parent} col-4`}>
            <div className={`${global.child} ${styles.sidebar}`}></div>
        </aside>
    )
}