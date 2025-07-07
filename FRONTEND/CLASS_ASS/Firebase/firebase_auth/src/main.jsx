import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Component/Login.jsx'
import Profil from './Component/Profil.jsx'
import Regestration from './Component/Regestration.jsx'

const router=createBrowserRouter([
  {path:"/",element:<Login></Login>},
  {path:"/reg",element:<Regestration></Regestration>},
  {path:"/profil",element:<Profil></Profil>}
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>

  </RouterProvider>

    
  
)
