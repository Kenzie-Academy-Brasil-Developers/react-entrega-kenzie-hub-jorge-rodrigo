import { InputStyled } from "./style"



const Input = ( {label,type,placeholder,id,register,disable,value} ) => {

 

    return (
        <InputStyled>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} id={id} {...register} disabled={disable} value={value} />
        </InputStyled>
    )
}


export default Input