import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Main from "@/components/Main"
import Footer from "@/components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './page.module.css'

export default function Home(){
  return(
    <div className={styles.body}>
      <Header/>
      
      <div className="row">
        <Sidebar/>
        <Main/>
      </div>
      
      <Footer/>
    </div>
  )
}