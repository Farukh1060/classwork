import styles from "./Input.module.css";
import { LuSearch } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";

import React from "react";

const Input = ({open_model}) => {
  return (
    <div className="flex items-center gap-3 px-4">
      <div className="realtive flex items-center flex-grow">
        <LuSearch className=" absolute text-3xl ml-1 text-white" />
        <input
          type="text"
          placeholder="search contact"
          className={`flex  pl-9 text-white items-center h-[40px] flex-grow rounded-md border-2 border-white bg-transparent ${styles.placeholder}`}
        />
      </div>
      <CiCirclePlus className="text-5xl text-white" onClick={open_model}/>
    </div>
  );
};

export default Input;
