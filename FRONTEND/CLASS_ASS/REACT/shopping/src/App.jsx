import React from "react"
import "./App.css"
import Navbar from "./component/Navbar/Navbar"
import Catagory_container from "./component/Catagory_container/Catagory_container"
  


const App =()=>{

  const menu = ["home","about","contact","help"]
  const catagory = ["men","women","kids"]

  const display_data = ()=>{
    console.log("ok")
}

  return(
    <div className="container">
     <Navbar menu={menu}></Navbar>
     <Catagory_container catagory={catagory} display_data={display_data}></Catagory_container>
    </div>
  )
}

export default App  