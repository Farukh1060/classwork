import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-1.5 flex-shrink-0 text-xl font-bold text-orange-400">
            <img src={logo} alt="logo" className='w-auto h-10' />
            <p>Shopy</p>
          </div>

          {/* Center nav links (desktop only) */}
          {/* <div className="hidden md:flex space-x-7">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Shop</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
          </div> */}

          {/* Right side: Search + Login (desktop only) */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
              Login
            </button>
            <Link to={"/cart"} className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            cart
          </Link>
          </div>

          

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        

      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-3 space-y-3">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Shop</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Services</a>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            cart
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
