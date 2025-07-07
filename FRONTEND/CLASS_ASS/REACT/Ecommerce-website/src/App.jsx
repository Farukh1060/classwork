import { useState } from 'react'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/slider'
import sale from "./assets/sale.png"
import shopping from "./assets/shopping.png"
import women from "./assets/women.png"
import Top_sales from './Components/Top_sales/Top_sales'
import Top_product from './Components/Top_products/Top_products'

function App() {


  const [drk_btn ,setdrk_btn] = useState([])
  const dark_Md_on = ()=>{
    if(drk_btn.includes("dark")){
      setdrk_btn([])
    }
    else{

      setdrk_btn("dark")
    }
  }

// debugger
  let  slider_imgs = [sale,shopping,women]
  let [index ,setindex] = useState(0)
  let [img ,setimg] = useState(slider_imgs[index])
    
    

    
    
    const onrightclick = ()=>{
    
      if(index >=3){
        setindex(0)
      }else{
        setindex(1+index)
        setimg(slider_imgs[index])
        console.log(index)
      }
     
    }


    
    const onleftclick = ()=>{
      console.log(slider_imgs.length)
      if(index <0){
        setindex(3)
      }else{
        setindex(index-1)
        setimg(slider_imgs[index])
        console.log(index)
      }

    }


  return(
   
  <div className={`${drk_btn}`}>
    <Navbar drk_btn={drk_btn} dark_Md_on={dark_Md_on}></Navbar>
    <Slider img={img} onrightclick={onrightclick} onleftclick={onleftclick}></Slider>
    <Top_sales></Top_sales>
    <Top_product></Top_product>
  <div className='mt-[225px]'></div>
  </div>
  )
}

export default App
