import React from 'react'
import Navbar from './components/Navbar'
import MenuBar from './components/MenuBar'
import ImageSlider from './components/ImageSlider'
import Product from './components/Product'

const App = () => {
  
  return (
    <div className='relative overflow-hidden'>
    <Navbar></Navbar>
    <div className='flex flex-col sm:flex-row md:block'>
    <MenuBar></MenuBar>
    <ImageSlider></ImageSlider>

    </div>
    <Product></Product>
    
    </div>
  )
}

export default App