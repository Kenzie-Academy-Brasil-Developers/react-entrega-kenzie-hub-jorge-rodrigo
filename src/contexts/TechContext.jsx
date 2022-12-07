import { createContext,useState,useContext,useEffect } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";


export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const { setUser,setLoadingPage,user} = useContext(UserContext)
    const [tech, setTech] = useState(null) 

    useEffect(()=>{
        async function getApi() {
          const id = JSON.parse(localStorage.getItem("@USERID"))  
          if(!id){
            return;
          }
          try{
            const { data } = await api.get(`/users/${id}`)
            setUser(data)
            setTech(user.techs)
          }catch(err){
            localStorage.clear()
            console.error(err)
          }
          }
          getApi()
     },[setLoadingPage,setUser,user.techs])

    async function getTech(tech){
        const token = JSON.parse(localStorage.getItem("@TOKEN"))  
        if(!token){
            return;
        }
        try{
           const { data } = await api.post("/users/techs",tech,{
            headers: {
                'Authorization': `token ${token}`
            }
           })
           localStorage.setItem("@USERID",JSON.stringify(data.user.id))
        }catch(err){
           console.log(err)
        }
    }
  
    return (
        <TechContext.Provider value={{tech,getTech}}>
            { children }
        </TechContext.Provider>
    )
}