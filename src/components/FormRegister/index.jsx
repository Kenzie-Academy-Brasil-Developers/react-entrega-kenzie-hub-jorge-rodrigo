import { useNavigate } from "react-router-dom"
import Button from "../Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import Loading from '../../assets/loading-gif-transparent-background.gif'
import { api } from "../../services/api";
import { apiErrorRegister, apiSucessRegister } from "../../services/toastfy";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FormDivStyledRegister,FormStyled,Container } from "../Form/style";

const FormRegister = () => {

    const [loadingOn, setLoadingOn ] = useState(false)
    const [userRegister, setUserRegister ] = useState('')
    const navigate = useNavigate()
    useEffect(()=> {
        async function getApi() {
          try{
             const response = await api.post("/users",userRegister)
             apiSucessRegister()
             setTimeout(() => {
               navigate("/")
             },3000)
          }catch(err){
            apiErrorRegister()
            setLoadingOn(false)
          }
        }
        if(userRegister !== ''){
            getApi()
        }
    }, [userRegister,navigate])

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome Obrigatorio"),
        email: yup.string().required("Email Obrigatorio").email("Coloque um email Valido"),
        password: yup.string().required("Senha Obrigatoria")
        .min(8,"Precisa ter no Minino 8 Caracteres")
        .matches(/(?=.*?[A-Z])/,"Precisa ter pelo menos 1 letra Maiúscula")
        .matches(/(?=.*?[a-z])/,"Precisa ter pelo menos 1 letra Minúscula" )
        .matches(/(?=.*?[0-9])/, "Precisa ter pelo menos 1 Número")
        .matches(/(?=.*?[#?!@$%^&*-])/, "Precisa ter pelo menos 1 Caracter especial"),
        passwordValidate: yup.string().oneOf([yup.ref('password'),null], 'Senha precisa ser igual').required("Campo Obrigatorio"),
        bio: yup.string().required("Bio Obrigatorio"),
        contact: yup.string().required("Contato Obrigatorio"),
        course_module :yup.string().required("Módulo Obrigatorio"),
      }) 
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
        setUserRegister(body)
        setLoadingOn(true)
      }
    
    return(
        <Container>
        <FormDivStyledRegister>
          <h2>Crie sua conta!</h2>
          <p>Rapido e grátis, vamos nessa</p>
          <FormStyled onSubmit={handleSubmit(onHandleSubmitRegister)}>
            <label htmlFor="name">Nome</label>
            <input type="text"  placeholder="Digite seu name" id="name" {...register("name")} />
            {errors.name?.message && <span aria-errormessage={errors.name.message}>{errors.name.message}</span>}

            <label htmlFor="email">Email</label>
            <input type="email"  placeholder="Digite seu email" id="email" {...register("email")} />
            {errors.email?.message && <span aria-errormessage={errors.email.message} >{errors.email.message}</span>}

            <label htmlFor="password">Senha</label>
            <input type="password"  placeholder="Digite sua senha" id="password" {...register("password")} />
            {errors.password?.message && <span aria-errormessage={errors.password.message}>{errors.password.message}</span>}

            <label htmlFor="passwordValidate">Confirme sua senha</label>
            <input type="password"  placeholder="Digite seu password" id="passwordValidate" {...register("passwordValidate")} />
            {errors.passwordValidate?.message && <span aria-errormessage={errors.passwordValidate.message} >{errors.passwordValidate.message}</span>}

            <label htmlFor="bio">Escreva sobre voce</label>
            <input type="text"  placeholder="Digite um pouco sobre voce" id="bio" {...register("bio")} />
            {errors.bio?.message  &&<span aria-errormessage={errors.bio.message} >{errors.bio.message}</span>}

            <label htmlFor="contact">Contato</label>
            <input type="text"  placeholder="Coloque uma opção de contato" id="contact" {...register("contact")} />
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

            {loadingOn && <Button><img src={Loading} alt="Loading" /></Button>}
            {!loadingOn && <Button>Cadastrar</Button>}
          </FormStyled>
        </FormDivStyledRegister>
        <ToastContainer />
      </Container>
    )
}


export default FormRegister