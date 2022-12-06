import Header from "../../components/Header"
import { Container } from "../../styles/Container"
import Forms from "../../components/Forms"
import { FormDivStyledRegister } from "../../components/Forms/style"
import { useEffect,useContext } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "../../components/Button"
import Loading from '../../assets/loading-gif-transparent-background.gif'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Input from "../../components/Input"
import { formSchema } from "./registerSchema"
import { motion } from "framer-motion"
import { UserContext } from "../../contexts/UserContext"

const RegisterPage = () => {

  const {loading,setLoading,user,setUser,getApiRegister } = useContext(UserContext)

 
  useEffect(()=> {
      if(user !== null){
        getApiRegister(user,setLoading)
      }
  }, [getApiRegister,user,setLoading])

   
    const { register,handleSubmit,formState: { errors } } = useForm({
      resolver: yupResolver(formSchema)
    })

  const onHandleSubmitRegister = (data) => {
      const body = {
          name: data.name,
          password: data.password,
          email: data.email,
          bio: data.bio,
          contact: data.contact,
          course_module: data.course_module,
      }
      setUser(body)
      setLoading(true)
    } 

    return (
      <Container>
        <Header route="/" page="register">
            Voltar
        </Header>
        <Container>
         <motion.div animate={{x:0,scale:1}} initial={{x: -100,scale:0.5}} >
          <FormDivStyledRegister>
           <h2>Crie sua conta!</h2>
           <p>Rapido e grátis, vamos nessa</p>
           <Forms onSub={handleSubmit(onHandleSubmitRegister)}>
           
            <Input label={"Nome"} type={"text"} placeholder={"Digite seu name"} id={"name"} register={register("name")} />
            {errors.name?.message && <span aria-errormessage={errors.name.message}>{errors.name.message}</span>}

            <Input label={"Email"} type={"email"} placeholder={"Digite seu email"} id={"email"} register={register("email")} />
            {errors.email?.message && <span aria-errormessage={errors.email.message} >{errors.email.message}</span>}

            <Input label={"Senha"} type={"password"} placeholder={"Digite sua senha"} id={"password"} register={register("password")} />
            {errors.password?.message && <span aria-errormessage={errors.password.message}>{errors.password.message}</span>}

            <Input label={"Confirme sua senha"} type={"password"} placeholder={"Digite sua senha novamente"} id={"passwordValidate"} register={register("passwordValidate")} />
            {errors.passwordValidate?.message && <span aria-errormessage={errors.passwordValidate.message} >{errors.passwordValidate.message}</span>}

            <Input label={"Escreva sobre voce"} type={"text"} placeholder={"Digite um pouco sobre voce"} id={"bio"} register={register("bio")} />
            {errors.bio?.message  &&<span aria-errormessage={errors.bio.message} >{errors.bio.message}</span>}

            <Input label={"Contato"} type={"text"} placeholder={"Coloque uma opção de contato"} id={"contact"} register={register("contact")} />
            {errors.contact?.message && <span aria-errormessage={errors.contact.message} >{errors.contact.message}</span>}

             <label htmlFor="course_module">Módulo</label>
             <select id="course_module" {...register("course_module")}>
               <option value="null" defaultValue hidden>Selecione o Módulo</option>
               <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
               <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
               <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
               <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
             </select>
             {errors.course_module?.message &&<span aria-errormessage={errors.course_module.message} >{errors.course_module.message}</span>}

             {loading && <Button><img src={Loading} alt="Loading" /></Button>}
             {!loading && <Button type={"submit"} disable={loading}>Cadastrar</Button>}
            </Forms>
           </FormDivStyledRegister>
         </motion.div>
        <ToastContainer />
      </Container>
      </Container>
    )
}

export default RegisterPage