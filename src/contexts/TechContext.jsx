import { createContext,useState,useContext,useEffect } from "react";
import { api } from "../services/api";
import { notifyErrorTech, notifySucessTech} from "../services/toastfy";
import { UserContext } from "./UserContext";


export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const { user} = useContext(UserContext)
    const [tech, setTech] = useState(null) 

    useEffect(()=>{
      setTech(user.techs)
     },[user.techs])

    async function getTech(techValue){
        const token = JSON.parse(localStorage.getItem("@TOKEN"))  
        if(!token){
            return
        }
        try{
           const { data } = await api.post("/users/techs",techValue)
           localStorage.setItem("@USERID",JSON.stringify(data.user.id))
           setTech([...tech,data])
           notifySucessTech("Tecnologia criada com Sucesso!")
        }catch(err){
          notifyErrorTech(err.response.data.message)
        }
    }
    const remove = (id) => {

      const filterTech = tech.filter((item) => item.id !== id )


      setTech(filterTech)
    }

    async function updateTech(data,id) {
      const token = JSON.parse(localStorage.getItem("@TOKEN"))  
      if(!token){
          return
      }
      try{
         const response = await api.put(`/users/techs/${id}`, data)
         const newTechs = tech.map((tec) => {
           if(tec.id === id){
              const tecValue = {
                ...tec,
                status: response.data.status
              }
              return tecValue
           }
           return tec
         })
         remove(id)
         setTech(newTechs)
         notifySucessTech("Tecnologia Alterada com Sucesso!")
      }catch(err){
        notifyErrorTech(err.response.data.message)
      }
    }
    async function removeTech(id) {
      const token = JSON.parse(localStorage.getItem("@TOKEN"))  
      if(!token){
          return
      }
      try{
         const { data } = await api.delete(`/users/techs/${id}`)
         remove(id)
         notifySucessTech("Tecnologia Deletada com Sucesso!")
      }catch(err){
        notifyErrorTech(err.response.data.message)
      }
    }
  
    return (
        <TechContext.Provider value={{tech,getTech,removeTech,updateTech}}>
            { children }
        </TechContext.Provider>
    )
}