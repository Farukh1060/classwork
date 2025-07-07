import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import React from "react";

const Contact_card = ({ele,deletecontact,edithandler}) => {
  // console.log(ele);

  return (
    <div className="m-4 flex justify-between items-center bg-orange-300 p-2 rounded-xl">
      <div className="text-4xl text-orange-900">
        <FaRegCircleUser />
      </div>
      <div>
        <div className="text-2xl">{ele.name}</div>
        <div>{ele.email}</div>
      </div>
      <div className="flex text-4xl gap-1">
        <FaUserEdit className="text-green-800 cursor-pointer" onClick={()=>{edithandler(ele.id)}}></FaUserEdit>
        <MdDeleteForever className="text-red-500 cursor-pointer" onClick={()=>deletecontact(ele.id)}/>
      </div>
    </div>
  );
};

export default Contact_card;
