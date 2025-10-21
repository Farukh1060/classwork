// components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  // console.log(product);
  
  return (
    <div className="bg-white shadow rounded overflow-hidden mx-auto p-4">
      <img src={`http://127.0.0.1:8000${product.image}`}  alt={product.name} className=" w-[250px] h-[300px] object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <h3 className="text-gray-600">catg : {product.catageory.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <Link to={`/productDetail/${product.id}`} state={{product:product}} className="inline-block mt-3 bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition ">view details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
