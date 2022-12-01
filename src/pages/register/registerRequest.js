import { api } from "../../services/api"
import { notifyErrorRegister, notifySucessRegister } from "../../services/toastfy"
 

export async function getApi(userRegister,setLoading,navigate) {
    try{
       const response = await api.post("/users",userRegister)
       notifySucessRegister()
       navigate("/")
    }catch(err){
      notifyErrorRegister()
      setLoading(false)
    }
  }