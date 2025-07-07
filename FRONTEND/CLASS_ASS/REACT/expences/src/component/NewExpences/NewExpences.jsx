
import Expencesform from "./Expencesform"


const NewExpences = (probes) =>{

    const resiveNewExpences = (resiveaddexpences) =>{
        probes.resexp(resiveaddexpences)
        console.log(resiveaddexpences)
    }


    return(
        <Expencesform resiveNewExpencesdata = {resiveNewExpences}/>
    )
}

export default NewExpences;