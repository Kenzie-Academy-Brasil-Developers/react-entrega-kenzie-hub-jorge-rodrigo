import { ButtonStyled } from "./styles"

const Button = ( {mode,children,type,disable} ) => {

    return (
        <ButtonStyled mode={mode} type={type} disabled={disable} >{ children }</ButtonStyled>
    )
}

export default Button