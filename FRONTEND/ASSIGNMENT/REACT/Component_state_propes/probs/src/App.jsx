import { useState } from 'react'
import User_card from './Component/User_card'

function App() {
  const user_name = "farukh shaikh";
  const age = "27";
  const location= "surat, gujrat"
  
  return(<div className='card'>
    <User_card user_name={user_name} age={age} location={location}></User_card>
  
  
  </div>)
}

export default App
