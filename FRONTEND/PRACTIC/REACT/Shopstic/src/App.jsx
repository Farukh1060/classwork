
import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import {BrowserRouter ,Routes ,Route, Outlet} from "react-router-dom"
import Regestration from './components/Regestration'
import Slider from './components/Slider'
import Featured_catagory from './components/Featured_catagory'
import Products from './components/Products'
import Products_detail from './components/Products_detail'
import { useSelector } from 'react-redux'
import Payment from './components/payment'
import SlidingBox from './components/SlidingBox'


const App = () => {


  return (<>
  

  <BrowserRouter>

   
    <Routes>
      <Route path='/' element={<> <Navbar></Navbar> <Slider></Slider> <SlidingBox></SlidingBox><Featured_catagory></Featured_catagory> <Outlet></Outlet> </>}>
      
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/products_detail' element={<Products_detail></Products_detail>}></Route>
        <Route path='/payment' element={<Payment></Payment>}></Route>
        {/* <Route path='/slider' element={}></Route> */}

      </Route>

      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/reg' element={<Regestration></Regestration>} ></Route>
      
    </Routes>
  <div className='mt-16'></div>
  
  </BrowserRouter>
    
    </>
  )
}

export default App