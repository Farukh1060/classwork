import { useEffect, useState } from 'react'
import women1 from '../../../assets/women1.png'
import women2 from '../../../assets/women2.jpg'
import women3 from '../../../assets/women3.jpg'
import { FaStar } from 'react-icons/fa'

const Card = () => {

  let card_data = [
    {
      images: women1,
      title: 'women ethnic',
      color: 'white',
      ratting: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
        
        </>
      ),
    },
    {
      images: women2,
      title: 'women western',
      color: 'red',
      ratting: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      ),
    },
    {
      images: women1,
      title: 'google',
      color: 'brown',
      ratting: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      ),
    },
    {
      images: women3,
      title: 'printed t-shirt',
      color: 'yellow',
      ratting: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      ),
    },
    {
      images: women2,
      title: 'fashion t-shirt',
      color: 'pink',
      ratting: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      ),
    },
  ]

  const [update, setupdate]= useState(card_data)

  
  useEffect(()=>{
    fetch("https://dummyjson.com/products").then(result=>{
      return result.json()
    }).then(data=>{
      initpost(data.products)
      // console.log(data.products);
      
    })
  },[])

  const initpost = (products)=>{
    
    
    setupdate([...card_data, ...products])
    
  }
  console.log(update);

  return (
    <div className="flex justify-between flex-wrap">

      {update.map((ele)=>(<div className="w-[150px]" key={Math.random()}>
        <img
          src={ele.images}
          alt=""
          className="h-[200px] object-cover rounded-xl hover:scale-105"
        />
        <p className="font-bold">{ele.title}</p>
        <p className="text-lg font-medium">{ele.color}</p>
        <p className="flex">{ele.ratting}</p>
      </div>)) }
 
    </div>
  )
}

export default Card
