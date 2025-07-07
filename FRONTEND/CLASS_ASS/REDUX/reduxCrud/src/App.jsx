
import React, { useEffect } from 'react'

import Nav from './component/Nav'
import { Outlet } from 'react-router-dom'





const App = () => {
 
  return (<>
  <Nav></Nav>
  <Outlet></Outlet>
  </>
  )
}

export default App