import { useEffect } from "react"
import { useContext,useState } from "react"
import Header from "../../components/Header"
import Modal from "../../components/Modal"
import TechList from "../../components/TechList"
import {  TechProvider } from "../../contexts/TechContext"
import { UserContext } from "../../contexts/UserContext"
import { Container, HeaderDivStyled, InfoDivStyled, TechDivStyled } from "./style"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const DashboardPage = () => {
    
   const { user,navigate,setLoading} = useContext(UserContext)
   const [modalOn,setModalOn] = useState(false)
   const token = JSON.parse(localStorage.getItem("@TOKEN")) 

   useEffect(()=> {
      if(!token){
         setLoading(false)
         navigate('/')
      }
   },[navigate,token,setLoading])
   

   return (
     <TechProvider>    
      <div>
        <HeaderDivStyled>
            <Header route="/" page="dashboard">
                Sair
            </Header> 
        </HeaderDivStyled>
        <InfoDivStyled>
           <Container>
              <h2>Olá, {user!== null && user.name}</h2>
              <p>{user!== null && user.course_module}</p>
           </Container>
        </InfoDivStyled>
        <div>
            <TechDivStyled>
                <h2>Tecnologias</h2>
                <button onClick={ ()=> setModalOn(true)}>+</button>
            </TechDivStyled>
            {modalOn &&  <Modal setOn={ setModalOn } title={"Cadastrar Tecnologia"}/>}
            <TechList />
        </div>
        <ToastContainer />
      </div>
     </TechProvider> 
)

   
} 

export default DashboardPage