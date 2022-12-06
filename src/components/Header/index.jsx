import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { TitleHeader } from "./style"


const Header = ( { route,children,page } ) => {

    const { setUser,setLoading } = useContext(UserContext)

    const cleanStorage = () => {
        localStorage.clear()
        setLoading(false)
        setUser(null)
    }

    return (
        <TitleHeader page={page}>
            <h2>Kenzie Hub</h2>
            <Link to={route} onClick={cleanStorage}>{children}</Link>
        </TitleHeader>
    )
}

export default Header