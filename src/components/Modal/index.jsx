import { ModalBackground, ModalDivStyled } from "./style"
 

const Modal = ({ setOn,title,children }) => {


    return (
        <ModalBackground>
            <ModalDivStyled>
              <div>
                 <h1>{title}</h1>
                 <button onClick={() => setOn(false)}>X</button>
              </div>
                 {children}
            </ModalDivStyled>
        </ModalBackground>
    )
}


export default Modal