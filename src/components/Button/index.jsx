import { ButtonStyled } from "./styles"

const Button = ( {children,type,disable} ) => {

    return (
        <ButtonStyled type={type} disabled={disable} >{ children }</ButtonStyled>
    )
}

export default Button