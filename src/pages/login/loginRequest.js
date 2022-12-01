
import { api } from "../../services/api"
import { notifyErrorLogin, notifySucessLogin } from "../../services/toastfy"


export async function getApi(user,setLoadind,navigate) {

    try{
       
      const response = await api.post("/sessions",user)
      const userFound = response.data
      notifySucessLogin()
      localStorage.setItem("@TOKEN",JSON.stringify(userFound.token))
      localStorage.setItem("@USERID",JSON.stringify(userFound.user.id))
      navigate(`/dashboard/${userFound.user.id}`)
    }catch(err){
      notifyErrorLogin()
      setLoadind(false)
    }
  }