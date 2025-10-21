import React, { useEffect, useState } from 'react'
import shirt from '../assets/shirt.png'
import shirt2 from '../assets/shirt2.png'
import shirt3 from '../assets/shirt3.png'

const BestProduct = () => {

  
  

  const BestProduct = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    image: shirt,
  },
  {
    id: 2,
    name: 'Smartwatch',
    price: 149.99,
    description: 'Smartwatch with fitness tracking and notifications.',
    image: shirt2,
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 59.99,
    description: 'Portable Bluetooth speaker with rich sound.',
    image: shirt3,
  },

];


   return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Best Products</h1>
      <div className="grid grid-cols-1 mx-auto max-w-max  sm:grid-cols-2 md:grid-cols-3 gap-6">
        {BestProduct.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-56 mx-auto"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-800">${product.price}</span>
                <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default BestProduct