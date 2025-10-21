import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const MenuBar = () => {
//   const[datas,setdatas]=useState([])

//   useEffect(()=>{
//   fetch("http://127.0.0.1:8000/category/").then((result)=>{
//     return result.json()
//   }).then((resp)=>{
//     setdatas(resp.data)
    
//   })
// },[])



return (
    <div className="bg-white shadow px-4 py-4 sticky top-[60px] z-50">
      

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center md:space-x-7 space-y-3 md:space-y-0">
        
        <Link to={"/"} className="text-gray-700 hover:text-blue-600 font-medium"> Home</Link>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Mens Wear</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Electronic</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
        <Link to={"/contact"}  className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
      </div>
    </div>
  );
};

export default MenuBar;
