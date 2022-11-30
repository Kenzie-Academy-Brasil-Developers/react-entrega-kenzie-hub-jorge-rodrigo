import { Link } from "react-router-dom"
import { Container } from "../../components/Form/style"
import FormRegister from "../../components/FormRegister"
import { TitleDiv } from "../../styles/title"



const RegisterPage = () => {


    return (
      <Container>
        <TitleDiv>
          <h2>Kenzie Hub</h2>
           <Link to="/" >Voltar</Link>
        </TitleDiv>
        <FormRegister />
      </Container>
    )
}


export default RegisterPage