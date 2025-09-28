import React from 'react'
import women1 from '../assets/women1.png'
import women2 from '../assets/women2.jpg'
import women3 from '../assets/women3.jpg'

const Product = () => {

  const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    image: women1,
  },
  {
    id: 2,
    name: 'Smartwatch',
    price: 149.99,
    description: 'Smartwatch with fitness tracking and notifications.',
    image: women2,
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 59.99,
    description: 'Portable Bluetooth speaker with rich sound.',
    image: women3,
  },
    {
    id: 4,
    name: 'Smartwatch',
    price: 149.99,
    description: 'Smartwatch with fitness tracking and notifications.',
    image: women2,
  },
  {
    id: 5,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    image: women1,
  },
];


   return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 max-w-max sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover object-top"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">${product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
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


export default Product