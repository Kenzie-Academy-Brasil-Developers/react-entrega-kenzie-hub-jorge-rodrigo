import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Forms from "../../components/Forms"
import { TitleStyled } from '../../styles/title'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import Loading from '../../assets/loading-gif-transparent-background.gif'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FormDivStyled } from "../../components/Forms/style";
import { Container } from "../../styles/Container";
import Input from "../../components/Input";
import { formSchema } from "./loginSchema";
import { getApi } from "./loginRequest";
import { motion } from "framer-motion";

const LoginPage = () => {

   const [loadingOn, setLoadingOn ] = useState(false)
   const [ user, setUser ] = useState(null)
   const navigate = useNavigate()
 
   useEffect(()=> {
     if(user !== null){
       getApi(user,setLoadingOn,navigate)
     }
   }, [ user,navigate ])
   const { register,handleSubmit,formState: { errors }, reset } = useForm({
     resolver: yupResolver(formSchema)
   })
   const onHandleSubmit = (data) => { 
     setUser(data)
     setLoadingOn(true)
     reset()
   }
  
    return (
       <div>
         <TitleStyled>Kenzie Hub</TitleStyled>
         <Container>
           <motion.div  animate={{x:0,scale:1}} initial={{x: -100,scale:0.5}}> 
            <FormDivStyled>
            <h2>Login</h2>
            <Forms onSub={handleSubmit(onHandleSubmit)} >

              <Input label={"Email"} type={"email"} placeholder={"Digite seu email"} id={"email"} register={register("email")} />
              {errors.email? <span>{errors.email.message}</span>: <></>}

              <Input label={"Senha"} type={"password"} placeholder={"Digite sua senha"} id={"password"} register={register("password")} />
              {errors.password? <span>{errors.password.message}</span>: <></>}

              {loadingOn && <Button><img src={Loading} alt="Loading" /></Button>}
              {!loadingOn && <Button type={"submit"} disable={loadingOn}>Entrar</Button>}
            </Forms>
            <p>Ainda não possui uma conta?</p>
            <Link to="/register">Cadastre-se</Link>
            </FormDivStyled>
            <ToastContainer/>
           </motion.div>
         </Container>
       </div>
    )
}

export default LoginPage