import download from "../assets/imges/download.jfif";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaChevronDown, FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { FaRegSquarePlus } from "react-icons/fa6";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setproductbycatag } from "../features/Product/Productslice";

const Navbar = () => {

  const {selectedbycatag} = useSelector(state=>state.products)
  console.log(selectedbycatag);
  

  const [dropdown, setdropdown] = useState(false);
  const dispatch = useDispatch()

  const dropdownhandler = () => {
    if (dropdown == false) {
      setdropdown(true);
    } else {
      setdropdown(false);
    }
  };

  return (
    <>
      <div className="offer_container  border-b-2 py-2 max-sm:hidden">
        <div className="offer flex justify-between  container max-lg:flex-col text-center">
          <p>get up to 50% off new sesson style limited time only</p>
          <div className="max-lg:text-center">
            <ul className="flex gap-3 max-lg:hidden">
              <li>help center </li>
              <li>order tracking</li>
              <li>language</li>
              <li>USD</li>
            </ul>
          </div>
        </div>
      </div>

    <div className="sticky top-0 z-10 bg-white">
    <div className="midnav_container mt-3 border-b-2 py-3 ">
        <div className="midnav flex justify-between  items-center container">
          <div className="logo w-[30%]">
            <img src={download} className="w-auto" alt="" />
          </div>
          <div className="search w-[40%] relative">
            <input
              type="text"
              className="border-2 border-red outline-none w-full h-[45px] rounded-lg"
              name=""
              id=""
            />
            <IoSearchSharp className="text-2xl absolute right-[10px] top-[50%] -translate-y-1/2"></IoSearchSharp>
          </div>
          <div className="acount_container w-[30%] flex justify-end gap-6 ">
            <div className="acount flex items-center">
              <div className=" flex gap-3">
                <div> <Link to={"/login"}>login</Link> </div>
                <div><Link to={"/reg"}>Regestration</Link></div>
              </div>
            </div>
            <div className="cart_container  flex  items-center gap-3 text-2xl">
              <div className="compaire relative bg-gray-100 rounded-full p-2">
                <IoGitCompareOutline></IoGitCompareOutline>
                <span className="absolute inline-block bg-red-400 rounded-full text-white pl-[6px] w-[20px] -right-[4px] -top-[4px] text-sm">
                  3
                </span>
              </div>

              <div className="wishlist relative bg-gray-100 rounded-full p-2">
                <FaRegHeart></FaRegHeart>
                <span className="absolute inline-block bg-red-400 rounded-full text-white pl-[6px] w-[20px] -right-[4px] -top-[4px] text-sm">
                  3
                </span>
              </div>

              <div className="cart relative bg-gray-100 rounded-full p-2">
                <IoCartOutline></IoCartOutline>
                <span className="absolute inline-block bg-red-400 rounded-full text-white pl-[6px] w-[20px] -right-[4px] -top-[4px] text-sm">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar_container container text-[18px] pb-2">
        <div className="navbar mt-3 flex justify-between items-center">
          <div className={`catagory mt-2 flex items-center basis-[250px] justify-between relative cursor-pointer`} >
            <div className="flex items-center  gap-6 justify-between" onClick={() => {dropdownhandler()}} >
              <div className="flex gap-3 ">
                <RiMenu3Fill className="text-2xl"></RiMenu3Fill> shop by catagory
              </div>
              <div>
                <FaChevronDown></FaChevronDown>
              </div>
            </div>
            <div
              className={`dropDownMenu h-max  absolute top-[30px] z-50 w-full bg-white p-3 rounded-3xl ${
                dropdown ? "visible" : "hidden"
              }`}
            >
              <div>
                <ul className="px-8 flex flex-col gap-3 mt-3">
                  <li className="flex items-center justify-between"> fasion <span className="text-xl"><FaRegSquarePlus></FaRegSquarePlus></span>
                   
                  </li>
                  <li className="flex items-center justify-between"> electronic <span className="text-xl"><FaRegSquarePlus></FaRegSquarePlus></span></li>
                  <li className="flex items-center justify-between"> bags <span className="text-xl"><FaRegSquarePlus></FaRegSquarePlus></span></li>
                  <li className="flex items-center justify-between"> footwear <span className="text-xl"><FaRegSquarePlus></FaRegSquarePlus></span></li>
                  <li className="flex items-center justify-between"> growsery <span className="text-xl"><FaRegSquarePlus></FaRegSquarePlus></span></li>
                  <li className="flex items-center justify-between"> beauty <span className="text-xl"><FaRegSquarePlus></FaRegSquarePlus></span></li>
                  <li className="flex items-center justify-between"> more <span className="text-xl"><FaRegSquarePlus></FaRegSquarePlus></span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu  basis-[650px]">
            <ul className="flex gap-3 justify-around items-center ">
              <li className={`cursor-pointer  hover:text-lime-700 ${selectedbycatag==="home" ? "border-b-2 border-red-700" : ""}`} onClick={()=>{dispatch(setproductbycatag("home"))}}>home</li>
              <li className={`cursor-pointer  hover:text-lime-700 ${selectedbycatag==="beauty" ? "border-b-2 border-red-700" : ""}`}  onClick={()=>{dispatch(setproductbycatag("beauty"))}}>beauty</li>
              <li className={`cursor-pointer  hover:text-lime-700 ${selectedbycatag==="fragrances" ? "border-b-2 border-red-700" : ""}`} onClick={()=>{dispatch(setproductbycatag("fragrances"))}}>fragrances</li>
              <li className={`cursor-pointer  hover:text-lime-700 ${selectedbycatag==="groceries" ? "border-b-2 border-red-700" : ""}`}  onClick={()=>{dispatch(setproductbycatag("groceries"))}}>groceries</li>
              <li className={`cursor-pointer  hover:text-lime-700 ${selectedbycatag==="shoes" ? "border-b-2" : ""}`}>shoes</li>
              <li className={`cursor-pointer  hover:text-lime-700 ${selectedbycatag==="mobile" ? "border-b-2" : ""}`}>mobile</li>
              <li className={`cursor-pointer  hover:text-lime-700 ${selectedbycatag==="bags" ? "border-b-2" : ""}`}>bags</li>
              <li className={`cursor-pointer  hover:text-lime-700 ${selectedbycatag==="more" ? "border-b-2" : ""}`}>more</li>
            </ul>
          </div>
          {/* <div className="delevery">free internatinal delevery</div> */}
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Navbar;
