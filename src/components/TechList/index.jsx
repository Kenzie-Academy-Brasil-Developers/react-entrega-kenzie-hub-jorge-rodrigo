import { useContext, useState } from "react"
import { TechContext } from "../../contexts/TechContext"
import Modal from "../Modal"
import { TechListStyled } from "./style"
 
const TechList = () => {
    const { tech } = useContext(TechContext)
    const [ modalOn, setModalOn ] = useState(false)
    const [item, setItem ] = useState(null) 
    const openModal = (data) => {
        setItem(data)
        setModalOn(true)
    }

    return (
        <>
          {modalOn && <Modal setOn={ setModalOn } title={"Tecnologia Detalhes"} detail={item}/>}
          {tech ? <TechListStyled>
            {tech.map((item)=> <li onClick={()=> openModal(item)} key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.status}</p> 
            </li>)}
        </TechListStyled>: <></> }
        </>
    )
}


export default TechList