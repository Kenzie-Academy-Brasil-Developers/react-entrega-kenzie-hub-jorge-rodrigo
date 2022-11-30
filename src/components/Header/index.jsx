import { Link } from "react-router-dom"
import { TitleHeader } from "./style"

const Header = ( { route,children,page } ) => {

    return (
        <TitleHeader page={page}>
            <h2>Kenzie Hub</h2>
            <Link to={route} onClick={() => localStorage.clear()}>{children}</Link>
        </TitleHeader>
    )
}

export default Header