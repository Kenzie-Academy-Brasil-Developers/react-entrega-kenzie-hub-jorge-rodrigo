import { FormsStyled } from "./style"

const Forms = ({children,onSub} ) => {

    return (
        <FormsStyled onSubmit={onSub}>
            {children}
        </FormsStyled>
    )
}

export default Forms