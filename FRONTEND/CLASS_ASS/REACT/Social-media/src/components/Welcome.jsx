

import React, { useContext } from 'react'
import { Appcontext } from '../store/App_context'

const Welcome = () => {
  const {fetchdatahandler}= useContext(Appcontext)
  return (
    <center>
        <h1>No Post</h1>
        <button className='btn btn-success'onClick={fetchdatahandler}>Refers</button>
    
    </center>
  )
}

export default Welcome