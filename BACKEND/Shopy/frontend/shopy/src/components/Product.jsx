import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import women1 from '../assets/women1.png';
import women2 from '../assets/women2.jpg';
import women3 from '../assets/women3.jpg';
import { Link } from 'react-router-dom';
import { featchproduct } from '../features/product/ProductSlice';
import { featchPostCart } from '../features/Cart/CartSlice';


const Product = () => {
  

  // const[products,setproducts] = useState([])
  const dispatch = useDispatch()
  const {items,loading,error} = useSelector((state)=>{return state.product})

  
  

  useEffect(()=>{

    dispatch(featchproduct())


      // fetch("http://127.0.0.1:8000/product/").then((resp)=>{
      //   return resp.json()
      // }).then((result)=>{
      //   setproducts(result.data)
        
      // })
  },[])

  // console.log(products[0]);
  // our product slider
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Wireless Headphones',
  //     price: 99.99,
  //     description: 'High-quality wireless headphones with noise cancellation.',
  //     image: women1,
  //   },
  //   {
  //     id: 2,
  //     name: 'Smartwatch',
  //     price: 149.99,
  //     description: 'Smartwatch with fitness tracking and notifications.',
  //     image: women2,
  //   },
  //   {
  //     id: 3,
  //     name: 'Bluetooth Speaker',
  //     price: 59.99,
  //     description: 'Portable Bluetooth speaker with rich sound.',
  //     image: women3,
  //   },
  //   {
  //     id: 4,
  //     name: 'Smartwatch',
  //     price: 149.99,
  //     description: 'Smartwatch with fitness tracking and notifications.',
  //     image: women2,
  //   },
  //   {
  //     id: 5,
  //     name: 'Wireless Headphones',
  //     price: 99.99,
  //     description: 'High-quality wireless headphones with noise cancellation.',
  //     image: women1,
  //   },
  // ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
if(loading){
  return <h1>loading</h1>
}
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <Slider {...settings}>
        {items.data && items.data.map((product) => (
          <div key={product.id} className="px-3">
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={`http://127.0.0.1:8000${product.image}`} 
                alt={product.name}
                className="w-full h-48 object-cover "
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className=" text-gray-800 text-sm mt-1">catg :{product.catageory.name}</p>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-300 transition" onClick={()=>{dispatch( featchPostCart(product.id))}}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='flex justify-center mt-14'>
      <Link to={"/allproduct"} className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-300 transition"> View All Product </Link>

      </div>
    </div>
  );
};

export default Product;
