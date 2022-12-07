import { useContext,useState } from "react"
import { Navigate } from "react-router-dom"
import Header from "../../components/Header"
import Modal from "../../components/Modal"
import { TechProvider } from "../../contexts/TechContext"
import { UserContext } from "../../contexts/UserContext"
import { Container, HeaderDivStyled, InfoDivStyled, TechDivStyled } from "./style"


const DashboardPage = () => {
    
   const { user,loadingPage} = useContext(UserContext)
   const [modalOn,setModalOn] = useState(false)
  
   if(loadingPage){
     return null
   }
   return (
     <TechProvider>
      {user ?     
      <div>
        {modalOn &&  <Modal setOn={ setModalOn } title={"Cadastrar Tecnologia"}/>}
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
        </div>
      </div>
      :
       <Navigate to="/" />
      }
     </TechProvider> 
)

   
} 

export default DashboardPage