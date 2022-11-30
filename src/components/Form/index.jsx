import { Link, useNavigate } from "react-router-dom"
import Button from "../Button"
import { FormStyled,FormDivStyled,Container} from "./style"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import Loading from '../../assets/loading-gif-transparent-background.gif'
import { api } from "../../services/api";
import { apiErrorLogin, apiSucessLogin } from "../../services/toastfy";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {

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
      <Container>
      <FormDivStyled>
        <h2>Login</h2>
        <FormStyled onSubmit={handleSubmit(onHandleSubmit)} >
          <label htmlFor="email">Email</label>
          <input type="email"  placeholder="Digite seu email" id="email" {...register("email")} />
          {errors.email? <span>{errors.email.message}</span>: <></>}
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Digite sua senha" id="password" {...register("password")}/> 
          {errors.password? <span>{errors.password.message}</span>: <></>}
          {loadingOn && <Button><img src={Loading} alt="Loading" /></Button>}
          {!loadingOn && <Button>Entrar</Button>}
        </FormStyled>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </FormDivStyled>
      <ToastContainer/>
    </Container>
    )
}


export default Form