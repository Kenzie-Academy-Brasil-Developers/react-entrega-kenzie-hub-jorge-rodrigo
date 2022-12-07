import { createContext,useState } from "react";
import { api } from "../services/api";


export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const [tech, setTech] = useState(null) 

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
           setTech(data)
           
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