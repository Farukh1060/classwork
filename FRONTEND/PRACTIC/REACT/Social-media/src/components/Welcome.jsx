

import React, { useContext } from 'react'
import { Appcontext } from '../store/App_context'

const Welcome = () => {
  // const {fetchdatahandler}= useContext(Appcontext)
  return (
    <center>
        <h1>No Post</h1>
        <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

    
    </center>
  )
}

export default Welcome