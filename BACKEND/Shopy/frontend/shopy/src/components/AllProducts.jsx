// pages/AllProducts.jsx
import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../components/ProductCard';
import shirt from "../assets/shirt.png"



// const products = [
  //   { id: 1, name: 'T-Shirt', price: 19.99, image: shirt,description:"silky and good for skin light weight"  },
  //   { id: 2, name: 'Sneakers', price: 49.99, image: shirt,description:"good to wear feel free and light weight" },
  //   { id: 3, name: 'Backpack', price: 29.99, image: shirt,description:"good to wear feel free and light weight" },
  //   { id: 4, name: 'Watch', price: 99.99, image: shirt,description:"good to wear feel free and light weight" },
  //   { id: 5, name: 'T-Shirt', price: 19.99, image: shirt,description:"good to wear feel free and light weight" },
  //   { id: 6, name: 'Sneakers', price: 49.99, image: shirt,description:"good to wear feel free and light weight" },
  //   { id: 7, name: 'Backpack', price: 29.99, image: shirt,description:"good to wear feel free and light weight" },
  //   { id: 8, name: 'Watch', price: 99.99, image: shirt,description:"good to wear feel free and light weight" },
  //   // add more as needed
  // ];
  
  const AllProducts = () => {
    
    const[products,setproducts] = useState([])
    const productSectionRef = useRef(null);
  
    useEffect(() => {
      productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      fetch("http://127.0.0.1:8000/product/").then((resp)=>{
        return resp.json()
      }).then((result)=>{
        setproducts(result.data)
        
      })
    }, []);


  return (
    <div ref={productSectionRef} className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
