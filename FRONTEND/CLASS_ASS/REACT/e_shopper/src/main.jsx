import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import './index.css'

import "./assets/css/style.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.min.css"

import App from './App'
import Shop from './Component/Shop'
import Products from './Component/Products'
import Contact from './Component/Contact'
import ShopeDetail from './Component/ShopeDetail'
import Login from './Component/Login'
import Regestration from './Component/Regestration'

const router = createBrowserRouter([

  {path:"/",element:<App/>,
    children:[
    {path:"/",element:<Products/>},
    {path:"/shop",element:<Shop/>},
    {path:"/contact",element:<Contact/>},
    {path:"/detail",element:<ShopeDetail/>}
    
  ]},
  {path:"/login",element:<Login/>},
  {path:"/reg",element:<Regestration/>}

]) 

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}>
      
    </RouterProvider>
  
)

