import { Container } from "../../components/Form/style"
import FormRegister from "../../components/FormRegister"
import Header from "../../components/Header"

const RegisterPage = () => {

    return (
      <Container>
        <Header route="/" page="register">
            Voltar
        </Header>
        <FormRegister />
      </Container>
    )
}

export default RegisterPage