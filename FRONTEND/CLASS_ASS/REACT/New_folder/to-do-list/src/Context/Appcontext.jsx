import { createContext } from "react";


export const Appcontext = createContext()

const Contextprovider = (probes)=>{
    const phone = "+95864646666"
    const name = "cam"
    return(<>
        <Appcontext.Provider value={{phone,name}}>
            {probes.children}
        </Appcontext.Provider>
    
    </>)

}
export default Contextprovider