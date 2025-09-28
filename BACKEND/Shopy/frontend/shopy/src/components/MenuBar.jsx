import React from 'react';

const MenuBar = () => {
  return (
    <div className="bg-white shadow px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center md:space-x-7 space-y-3 md:space-y-0">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Kids Wear</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Mens Wear</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Electronic</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
      </div>
    </div>
  );
};

export default MenuBar;
