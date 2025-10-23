// src/pages/ProductDetail.jsx
import React, { useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

// import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation()

  const product = location.state.product
  const quantity = location.state.quantity
  // console.log(quantity);

   const productSectionRef = useRef(null);
    
      useEffect(() => {
        productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, []);
  
  
  // const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h2 ref={productSectionRef} className="text-2xl font-bold">Product not found</h2>
        <Link to="/" className="text-blue-500 underline">Go back</Link>
      </div>
    );
  }

  return (
    <div ref={productSectionRef} className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={`http://127.0.0.1:8000${product.image}`}  alt={product.name} className="w-[500px] h-[400px] object-cover rounded" />
        <div className=' flex flex-col justify-center '>
          <h1 className="text-3xl font-bold mb-4">{product.catageory.name}</h1>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">price :${product.price}</p>
          <div className="flex items-center space-x-4  mb-4">
            <button
              className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
              
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
             
            >
              +
            </button>
                    
          </div>
          {/* <p className="text-gray-600 mb-4">stock :{product.stock} pice</p> */}
          <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-300 transition" >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-6">
        <Link to="/allproduct" className="text-blue-600 underline">&larr; Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
