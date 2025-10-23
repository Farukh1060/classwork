// pages/AllProducts.jsx
import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../components/ProductCard';
import shirt from "../assets/shirt.png"
import { featchproduct } from '../features/product/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

  
const AllProducts = () => {
    
  const dispatch = useDispatch()
  const {items,loading,error} = useSelector((state)=>{return state.product})
  const productSectionRef = useRef(null);
  
  useEffect(() => {
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    dispatch(featchproduct())
  }, []);


  return (
    <div ref={productSectionRef} className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.data && items.data.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
