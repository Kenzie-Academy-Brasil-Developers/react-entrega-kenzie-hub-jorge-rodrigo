import { yupResolver } from "@hookform/resolvers/yup"
import { useContext,useState } from "react"
import { useForm } from "react-hook-form"
import { Navigate } from "react-router-dom"
import Button from "../../components/Button"
import Forms from "../../components/Forms"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Modal from "../../components/Modal"
import { UserContext } from "../../contexts/UserContext"
import { Container, HeaderDivStyled, InfoDivStyled, TechDivStyled } from "./style"
import { techSchema } from "./TechSchema"




const DashboardPage = () => {
    
   const { user,loadingPage} = useContext(UserContext)
   const [modalOn,setModalOn] = useState(false)

   const { register,handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(techSchema)
   })


  const onHandleSubmitTech = (data) => {
     console.log(data)
  } 

   if(loadingPage){
     return null
   }
   return (
     <>
      {user ?     
      <div>
        {modalOn &&  <Modal setOn={ setModalOn } title={"Cadastrar Tecnologia"}>
              <Forms onSub={handleSubmit(onHandleSubmitTech)}>
                <Input label={"Nome"} type={"text"} placeholder={"Digite o nome da tecnologia"} id={"title"} register={register("title")} />
                {errors.title?.message && <span aria-errormessage={errors.title.message}>{errors.title.message}</span>}

                <label htmlFor="status">Selecionar Status</label>
                <select id="status" {...register("status")}>
                 <option value="null" defaultValue hidden>Selecione o Status</option>
                 <option value="Iniciante">Iniciante</option>
                 <option value="Intermediário">Intermediário</option>
                 <option value="Avançado">Avançado</option>
                </select>
                {errors.status?.message &&<span aria-errormessage={errors.status.message} >{errors.status.message}</span>}
   
                 <Button type={"submit"}>
                    Cadastrar Tecnologia
                 </Button>
              </Forms>
          </Modal>}
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
     </> 
)

   
} 

export default DashboardPage