import Form from "../../components/Form"
import { TitleStyled } from '../../styles/title'

const LoginPage = () => {

    return (
       <div>
         <TitleStyled>Kenzie Hub</TitleStyled>
          <Form page={ "Login" } />
       </div>
    )
}

export default LoginPage