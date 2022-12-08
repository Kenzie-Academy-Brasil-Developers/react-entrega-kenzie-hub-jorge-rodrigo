import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"



const ProtectedRoutes = () => {
    const { user,loadingPage } = useContext(UserContext)

    if(loadingPage){
          return null
    }
    return (
        <>
         {user ? <Outlet /> : <Navigate to="/"/>}
        </>
    )
}


export default ProtectedRoutes