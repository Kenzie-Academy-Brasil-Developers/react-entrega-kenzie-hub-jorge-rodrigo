import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Forms from "../../components/Forms"
import { TitleStyled } from '../../styles/title'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import Loading from '../../assets/loading-gif-transparent-background.gif'
import { api } from "../../services/api"
import { apiErrorLogin, apiSucessLogin } from "../../services/toastfy";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FormDivStyled } from "../../components/Forms/style";
import { Container } from "../../styles/Container";
import Input from "../../components/Input";
 

const LoginPage = () => {

   const [loadingOn, setLoadingOn ] = useState(false)
   const [ user, setUser ] = useState('')
   const navigate = useNavigate()
 
   useEffect(()=> {
     async function getApi() {
       try{
         const response = await api.post("/sessions",user)
         const userFound = response.data
         apiSucessLogin()
         localStorage.setItem("@TOKEN",JSON.stringify(userFound.token))
         localStorage.setItem("@USERID",JSON.stringify(userFound.user.id))
         setTimeout(()=>{
           navigate(`/dashboard/${userFound.user.id}`)
         },2000)
       }catch(err){
         apiErrorLogin()
         setLoadingOn(false)
       }
     }
     if(user !== ''){
       getApi()
     }
   }, [ user,navigate ])
   const formSchema = yup.object().shape({
     email: yup.string().required("Email Obrigatorio").email("Coloque um email Valido"),
     password: yup.string().required("Senha Obrigatoria"),
   }) 
   const { register,handleSubmit,formState: { errors } } = useForm({
     resolver: yupResolver(formSchema)
   })
   const onHandleSubmit = (data) => { 
     setUser(data)
     setLoadingOn(true)
   }

    return (
       <div>
         <TitleStyled>Kenzie Hub</TitleStyled>
         <Container>
            <FormDivStyled>
            <h2>Login</h2>
            <Forms onSub={handleSubmit(onHandleSubmit)} >

              <Input label={"Email"} type={"email"} placeholder={"Digite seu email"} id={"email"} register={register("email")} />
              {errors.email? <span>{errors.email.message}</span>: <></>}

              <Input label={"Senha"} type={"password"} placeholder={"Digite sua senha"} id={"password"} register={register("password")} />
              {errors.password? <span>{errors.password.message}</span>: <></>}

              {loadingOn && <Button><img src={Loading} alt="Loading" /></Button>}
              {!loadingOn && <Button>Entrar</Button>}
           </Forms>
           <p>Ainda não possui uma conta?</p>
           <Link to="/register">Cadastre-se</Link>
           </FormDivStyled>
           <ToastContainer/>
         </Container>
       </div>
    )
}

export default LoginPage