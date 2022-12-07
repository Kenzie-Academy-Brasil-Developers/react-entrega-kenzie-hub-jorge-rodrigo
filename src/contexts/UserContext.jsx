import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { notifyErrorLogin, notifyErrorRegister, notifySucessLogin, notifySucessRegister } from "../services/toastfy";

export const UserContext = createContext({})  

export const UserProvider = ({ children }) => {
     const [ user, setUser ] = useState(null)
     const [ loading, setLoading ] = useState(false)
     const [loadingPage, setLoadingPage] = useState(true)
     const navigate = useNavigate()
      
     useEffect(()=>{
        async function getApi() {
          const token = JSON.parse(localStorage.getItem("@TOKEN"))  
          if(!token){
            setLoadingPage(false)
            return;
          }
          try{
            const { data } = await api.get("/profile", {
               headers: {
               'Authorization': `token ${token}`
              }
            })
            setUser(data)
          }catch(err){
            localStorage.clear()
            console.error(err)
          }finally{
            setLoadingPage(false)
          }
          }
          getApi()
     },[])
 
     async function getApiRegister(userRegister,setLoading) {
        try{
           const response = await api.post("/users",userRegister)
           notifySucessRegister()
           navigate("/")
           setLoading(false)
           setUser(null)
        }catch(err){
          notifyErrorRegister()
          setLoading(false)
        }
      }

      async function getApiLogin(user,setLoadind) {

        try{
           
          const response = await api.post("/sessions",user)
          const userFound = response.data
          notifySucessLogin()
          localStorage.setItem("@TOKEN",JSON.stringify(userFound.token))
          localStorage.setItem("@USERID",JSON.stringify(userFound.user.id))
          setUser(userFound.user)
          navigate(`/dashboard/${userFound.user.id}`)
        }catch(err){
          notifyErrorLogin()
          setLoadind(false)
        }
      }

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            loading,
            setLoading,
            getApiRegister,
            getApiLogin,
            loadingPage,
            navigate
            }}>
            { children }
        </UserContext.Provider>
    )
}
