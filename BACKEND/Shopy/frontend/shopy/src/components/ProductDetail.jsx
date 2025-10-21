// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

// import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation()

  const product = location.state.product
  console.log(product);
  


  // const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/" className="text-blue-500 underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-[250px] h-auto rounded" />
        <div className=' flex flex-col justify-center '>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
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
