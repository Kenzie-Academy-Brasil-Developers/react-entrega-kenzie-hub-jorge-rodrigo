import { InputStyled } from "./style"



const Input = ( {label,type,placeholder,id,register} ) => {



    return (
        <InputStyled>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} id={id} {...register} />
        </InputStyled>
    )
}


export default Input