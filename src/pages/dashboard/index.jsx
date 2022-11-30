import { useEffect, useState } from "react"
import Header from "../../components/Header"
import { api } from "../../services/api"
import { Container, HeaderDivStyled, InfoDivStyled } from "./style"

const DashboardPage = () => {

    const [userLogged, setUserLogged ] = useState('')
    const token = JSON.parse(localStorage.getItem("@TOKEN"))   
    useEffect(()=>{
        async function getApi() {
            const response = await api.get("/profile", {
                headers: {
                    'Authorization': `token ${token}`
                  }
            })
            setUserLogged(response.data)
        }
        getApi()
    }, [token,userLogged])

    return (
        <div>
            <HeaderDivStyled>
                <Header route="/" page="dashboard">
                    Sair
                </Header> 
            </HeaderDivStyled>
            <InfoDivStyled>
               <Container>
                  <h2>Olá, {userLogged.name}</h2>
                  <p>{userLogged.course_module}</p>
               </Container>
            </InfoDivStyled>
        </div>
    )
} 

export default DashboardPage