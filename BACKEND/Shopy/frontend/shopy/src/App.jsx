import React from 'react'
import Navbar from './components/Navbar'
import MenuBar from './components/MenuBar'
import ImageSlider from './components/ImageSlider'
import Product from './components/Product'
import BestProduct from './components/BestProduct'
import TestimonialSlider from './components/TestimonialSlider'
import Footer from './components/Footer'
import Contact from './components/Contact'
import AllProducts from './components/AllProducts'
import { Outlet } from 'react-router-dom'
import Button from './components/Button'

const App = () => {
  
  return (
    <div className=''>

      <Navbar ></Navbar>
      <MenuBar></MenuBar>
      <ImageSlider></ImageSlider>
      
      
      <Outlet></Outlet>

      <BestProduct></BestProduct>
      <TestimonialSlider></TestimonialSlider>
      <Footer></Footer>
    </div>
  )
}

export default App