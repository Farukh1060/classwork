// components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded overflow-hidden mx-auto p-4">
      <img src={product.image} alt={product.name} className=" w-[250px] h-auto object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <Link to={`/productDetail/${product.id}`} state={{product:product}}>view details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
