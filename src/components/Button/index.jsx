import { ButtonStyled } from "./styles"



const Button = ( {children,color} ) => {


    return (
        <ButtonStyled>{ children }</ButtonStyled>
    )
}


export default Button