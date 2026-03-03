import styles2 from "./Header.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from "@/components/Logo"

export default function Header(){
    return(
        
            <header className={`${styles2.container} container-fluid`}>
                <Logo/>
                <nav className={styles2.nav}>
                    <ul className={styles2.list}>
                        <li>Sobre</li>
                        <li>FAQ</li>
                        <li>Home</li>
                        <li>Sobre</li>
                    </ul>
                </nav>
            </header>

    )
}

const styles = {
    container: {
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
    },
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        listStyleType: "none",
        gap: 20
    }
}