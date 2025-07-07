import React, { useState } from 'react'
import "./Box.css"



function Box({ele ,isactive,selectnum_handler}) {  

  
  return (
    <>
   
    <div className={`box ${isactive?"active":""}`} onClick={()=>selectnum_handler(ele)}>{ele}</div>
    </>
  )
}

export default Box