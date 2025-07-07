import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({dark_Md_on,drk_btn}) => {

  

  
  return (
  <>
  {/* upper_nav_bar */}
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="bg-primary/40 py-2">
          <div className="upper_nav_container flex justify-between items-center container">
            {/* logo */}
            <div className="logo">
              <div>
                <a href="#" className="font-bold text-2xl uppercase flex gap-3">
                  <img src={logo} className=" w-10" alt="" />
                  shopsy
                </a>
              </div>
            </div>
            {/* search and cart */}
            <div className="search_cart flex items-center gap-4">
              <div className="group relative">
                <input
                  type="text"
                  placeholder="search"
                  className="ps-3 py-1 border-2 rounded-full border-gray-200 w-[200px] group-hover:w-[300px] transition-all duration-500 focus:outline-none group-hover:border-primary"
                />
                <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 font-bold text-gray-500 group-hover:text-primary"></IoMdSearch>
              </div>
              <button className="group flex items-center text-xl w-max bg-primary rounded-full px-2 py-1 justify-center ">
                <span className="w-0 overflow-hidden group-hover:w-max transition-all duration-1000 text-white">order</span>
                <FaShoppingCart className="text-white m-1"/>
              </button>
              <div className="bg-primary rounded-full p-[2px] box-border">
                <div className=" w-[40px] h-[25px] flex items-center relative">
                    <span className={`absolute bg-white w-[20px] h-[20px] rounded-full ${drk_btn.includes("dark")?"right-0":" "}`} onClick={dark_Md_on}></span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    {/* lower nav */}
    <div className="dark:bg-zinc-800 dark:text-white shadow">
      <div className="lower_nav">
        <div className="lower_nav_item">
          <ul className=" flex justify-center gap-20 py-2 ">
            <li className="hover:text-primary"><a href="#">home</a></li>
            <li className="hover:text-primary"><a href="#">top rated</a></li>
            <li className="hover:text-primary"><a href="#">kid wear</a></li>
            <li className="hover:text-primary"><a href="#">mens wear</a></li>
            <li className="hover:text-primary"><a href="#">electronics</a></li>
            <li className="hover:text-primary"><a href="#">trending item</a></li>
          </ul>
        </div>
      </div>
    </div>
  </>
  );
};
export default Navbar;
