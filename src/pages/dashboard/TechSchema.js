import * as yup from 'yup';

export const techSchema = yup.object().shape({
    title: yup.string().required("Tecnologia Obrigatoria"),
    status: yup.string()
    .oneOf(["Iniciante","Intermediário","Avançado"],"Escolha uma opção")
    .required("Status Obrigatorio"),
  }) 

  export const techSchemaUpdate = yup.object().shape({
    status: yup.string()
    .oneOf(["Iniciante","Intermediário","Avançado"],"Escolha uma opção")
    .required("Status Obrigatorio"),
  }) 