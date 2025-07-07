import logo from "../assets/react.svg";
import React, { useState } from "react";

const Count = () => {

  let [count,setcount] = useState(0)

  const increasehandler = (count)=>{
    count++
    setcount(count)

  }
  const decreasehandler = (count)=>{
    count--
    setcount(count)

  }

  return (
    <>
      <div className="count">
        <h1>{count}</h1>
        <img src={logo} alt="" />
      </div>
      <div>
        <button className="increase" onClick={()=>increasehandler(count)}>Increase</button>
        <button className="decrease" onClick={()=>decreasehandler(count)}>Decrease</button>
      </div>
    </>
  );
};

export default Count;
