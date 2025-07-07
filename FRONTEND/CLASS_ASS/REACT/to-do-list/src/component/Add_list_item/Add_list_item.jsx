import react, { useState } from "react";
import "./Add_list_item.css";

const Add_list_item = ({ ele, removehandler }) => {


  return (
    <center className="list_item">
      <div>
        <span>{ele.fullname}</span>
      </div>
      <div>
        <span>
          {ele.date.getDate()}\{ele.date.getMonth() + 1}\
          {ele.date.getFullYear()}
        </span>
      </div>
      <button onClick={()=>{removehandler(ele.fullname)}}>remove</button>
    </center>
  );
};
export default Add_list_item;
