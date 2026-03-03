import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Main from "@/components/Main"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home(){
  return(
    <div>
      <Header/>
      
      <div className="row">
        <Sidebar/>
        <Main/>
      </div>
      
    </div>
  )
}