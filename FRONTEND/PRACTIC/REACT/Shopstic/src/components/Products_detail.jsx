import { GoStar, GoStarFill } from 'react-icons/go'
import x from '../assets/imges/shirt.png'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { IoCartOutline } from 'react-icons/io5'
import { IoMdHeartEmpty } from "react-icons/io";
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showproductbyid } from '../features/Product/Productslice';
import Rating from './rating';

import Products from './Products';


 
const Products_detail = () => {

 const dispatch=  useDispatch()
  const location = useLocation()
  const id  = location.state
  // console.log(id);
  
  useEffect(()=>{
   dispatch(showproductbyid(id))

  },[])

const {selectedProduct} = useSelector((state)=>{
  // console.log(state.products);
  
  return state.products
})
    // console.log(selectedProduct);
    
  
  return (
    <div className="Products_detail_container mt-3">
      <div className="container">
        <div className="product_details border-2 rounded-3xl p-6">
          <div className="product_card rounded-3xl flex">
            <div className="product_card_img w-[50%]">
              <div className="img ">
                <img src={selectedProduct.images} className="w-full  m-auto " alt="" />
              </div>
            </div>
            <div className="product_card_text  flex flex-col gap-4 w-[40%] ">
              <div className="product_title text-3xl">
                <p>{selectedProduct.title}</p>
              </div>
              <div className="rating flex g-3 text-2xl text-orange-500">
                <Rating product={Math.round(selectedProduct.rating)}></Rating>
              </div>
              <div className="price text-3xl flex gap-3 items-center">
                <span className='text-teal-500'>Rs {selectedProduct.price}</span> <div className='text-xl flex flex-col'> <span className='text-orange-500'> 10 % off</span> <span className='line-through'> Rs 495</span></div>
              </div>
              <div className="describtion">
                {selectedProduct.description}
              </div>
              <div className="brand"> by {selectedProduct.brand}</div>
              
              <div className="size flex gap-3 items-center">

                Size : <div className='flex items-center gap-3'><span className="flex items-center border-2 border-zinc-600 px-3 py-1 rounded-md bg-teal-500 text-white" >S</span> <span className="flex items-center border-2 border-zinc-600 px-3 py-1 rounded-md bg-teal-500 text-white">M</span> <span className="flex items-center border-2 border-zinc-600 px-3 py-1 rounded-md bg-teal-500 text-white">L</span> <span className="flex items-center border-2 border-zinc-600 px-3 py-1 rounded-md bg-teal-500 text-white" >XL</span> <span className="flex items-center border-2 border-zinc-600 px-3 py-1 rounded-md bg-teal-500 text-white" >XXL</span></div>  
              </div>
              <div className="add_cart pl-11">
                <div className="btn flex gap-4">
                  <div className="count_cart flex items-center gap-3">
                    <div className="cart_btn flex items-center border-2 border-zinc-600 px-3 py-2 rounded-md bg-teal-500 text-white">
                      <FaPlus></FaPlus>
                    </div>
                    <p>count</p>
                    <div className="cart_btn flex items-center border-2 border-zinc-600 px-3 py-2 rounded-md  bg-teal-500 text-white">
                      <FaMinus></FaMinus>
                    </div>
                  </div>
                  <div className="cart_btn flex items-center border-2 border-zinc-600 px-3 py-2 rounded-md bg-teal-500 text-white">
                    add to <IoCartOutline className="text-2xl"></IoCartOutline>
                  </div>
                  <div className='flex items-center border-2 border-zinc-600 px-3 py-2 rounded-md bg-teal-500 text-white'> <IoMdHeartEmpty className='text-2xl'></IoMdHeartEmpty></div>
                </div>
              </div>
            </div>
          </div>
              <div className="img_container flex gap-3"> 
                <div className="img1 border-2 border-gray-500 p-1 rounded-xl"><img src={x} className='w-[70px]' alt="" /></div>
                <div className="img1 border-2 border-gray-500 p-1 rounded-xl"><img src={x} className='w-[70px]' alt="" /></div>
                <div className="img1 border-2 border-gray-500 p-1 rounded-xl"><img src={x} className='w-[70px]' alt="" /></div>
                <div className="img1 border-2 border-gray-500 p-1 rounded-xl"><img src={x} className='w-[70px]' alt="" /></div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Products_detail
