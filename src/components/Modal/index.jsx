import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../contexts/TechContext"
import { techSchema } from "../../pages/dashboard/TechSchema"
import Button from "../Button"
import Forms from "../Forms"
import Input from "../Input"
import { ModalBackground, ModalDivStyled } from "./style"
 

const Modal = ({ setOn,title,children }) => {

    const {getTech } = useContext(TechContext) 

    const { register,handleSubmit,formState: { errors } } = useForm({
        resolver: yupResolver(techSchema)
       })
    
    
      const onHandleSubmitTech = (data) => {
          getTech(data)
      } 

    
    return (
        <ModalBackground>
            <ModalDivStyled>
              <div>
                 <h1>{title}</h1>
                 <button onClick={() => setOn(false)}>X</button>
              </div>
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
            </ModalDivStyled>
        </ModalBackground>
    )
}


export default Modal