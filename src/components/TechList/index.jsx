import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"



const TechList = () => {
    const { tech } = useContext(TechContext)

    return (
        <div>
            {tech ? tech.map((item)=> <div key={item.id}>{item.title}</div>): <></>}
        </div>
    )
}


export default TechList