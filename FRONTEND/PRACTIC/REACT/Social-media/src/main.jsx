import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListPost from './components/ListPost.jsx'
import CreatePost from './components/CreatePost.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App/>,children:[
    {path:"/", element :<ListPost/>},
    {path:"/Create_Post",element:<CreatePost/>}    
    
    ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
