import {set,ref, getDatabase} from "firebase/database"
import {app} from "./firebase"

import React from 'react'
 
const db = getDatabase(app)
 
const App = () => {

  const adddata = ()=>{
   
    set(ref(db,"user/top"),{
    id:1,
    names:"farukg",
    email:"farukh@gmail.com",
    age:27
  })
  }

  


  return (
    <button onClick={adddata}> add data</button>
  )
}

export default App