import * as yup from 'yup';


export const formSchema = yup.object().shape({
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
    course_module :yup.string()
    .oneOf(["Primeiro módulo (Introdução ao Frontend)","Segundo módulo (Frontend Avançado)","Terceiro módulo (Introdução ao Backend)","Quarto módulo (Backend Avançado)"],"Escolha uma opção")
    .required("Módulo Obrigatorio"), 
  }) 