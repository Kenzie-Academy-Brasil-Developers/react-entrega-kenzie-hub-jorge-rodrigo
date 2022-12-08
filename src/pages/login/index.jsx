import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Forms from "../../components/Forms"
import { TitleStyled } from '../../styles/title'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect,useContext } from "react";
import Loading from '../../assets/loading-gif-transparent-background.gif'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FormDivStyled } from "../../components/Forms/style";
import { Container } from "../../styles/Container";
import Input from "../../components/Input";
import { formSchema } from "./loginSchema";
import { motion } from "framer-motion";
import { UserContext } from "../../contexts/UserContext";

const LoginPage = () => {

  const { loading,setLoading,getApiLogin,navigate } = useContext(UserContext)
  const token = JSON.parse(localStorage.getItem("@TOKEN"))  
  const id = JSON.parse(localStorage.getItem("@USERID"))  

   useEffect(()=> {
    if(token){
      navigate(`/dashboard/${id}`, { replace: true})
    } 

   }, [id,navigate,token])
   const { register,handleSubmit,formState: { errors }, reset } = useForm({
     resolver: yupResolver(formSchema)
   })
   const onHandleSubmit = (data) => { 
    getApiLogin(data)
     setLoading(true)
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

              {loading && <Button><img src={Loading} alt="Loading" /></Button>}
              {!loading && <Button type={"submit"} disable={loading}>Entrar</Button>}
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