import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './components/Product.jsx'
import Contact from './components/Contact.jsx'
import AllProducts from './components/AllProducts.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import CartPage from './components/CartPage.jsx'

import { Provider } from 'react-redux';
import { store } from './app/store.js'; 

 const router =  createBrowserRouter([
    {path:"/",element:<App></App>,children:[
      {path:"/",element:<Product></Product>},
      {path:"/contact",element:<Contact></Contact>},
      {path:"/allproduct",element:<AllProducts></AllProducts>},
      {path:"/productDetail/:id",element:<ProductDetail></ProductDetail>},
      {path:"/cart",element:<CartPage></CartPage>},

    ]}
  ])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>
  
)
