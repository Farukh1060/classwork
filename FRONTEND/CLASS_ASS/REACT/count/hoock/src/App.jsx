import { useState } from "react"

 

 const App = ()=>{
  let[num, setnum] = useState(0)
      return(
        <>
            <button onClick={()=>{setnum(num++)}}>click me {num++}</button>
        
        </>
      )
 }
  export default App