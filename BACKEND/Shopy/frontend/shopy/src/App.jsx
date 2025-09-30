import React from 'react'
import Navbar from './components/Navbar'
import MenuBar from './components/MenuBar'
import ImageSlider from './components/ImageSlider'
import Product from './components/Product'
import BestProduct from './components/BestProduct'
import TestimonialSlider from './components/TestimonialSlider'
import Footer from './components/Footer'

const App = () => {
  
  return (
    <div className='relative overflow-hidden'>
    <Navbar></Navbar>
    <div className='flex flex-col sm:flex-row md:block'>
    <MenuBar></MenuBar>
    <ImageSlider></ImageSlider>

    </div>
    <Product></Product>
    <BestProduct></BestProduct>
    <TestimonialSlider></TestimonialSlider>
    <Footer></Footer>
    
    </div>
  )
}

export default App