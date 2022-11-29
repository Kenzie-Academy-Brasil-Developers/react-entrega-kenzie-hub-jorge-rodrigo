import { Link } from "react-router-dom"
import Button from "../Button"
import { FormStyled,FormDivStyled,Container } from "./style"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import Loading from '../../assets/loading-gif-transparent-background.gif'

const Form = ( { page } ) => {

  const [loadingOn, setLoadingOn ] = useState(false)
  const [ user, setUser ] = useState('')

  useEffect(()=> {
    console.log(user)
    
  }, [ user ])
    
  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatorio").email("Coloque um email Valido"),
    password: yup.string().required("Senha Obrigatoria")
  }) 
  const { register,handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const onHandleSubmit = (data) => { 
    setUser(data)
    setLoadingOn(true)
  }

    return (
       <>
         {page === 'Login'?
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
          </Container>
         :
           <form>
              <input type="text" />
              <input type="text" /> 
              <input type="text" /> 
           </form>
        }
       </>
    )
}


export default Form