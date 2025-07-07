import { useContext } from "react"
import { Appcontext } from "../Context/Appcontext"


const Contect = ()=>{
    const {phone,name} =useContext(Appcontext)


    return (
        <div>
            <h2>contect</h2>
            <h3>phone:{phone}</h3>
            <h3>name:{name}</h3>
        </div>
    )
}
export default Contect