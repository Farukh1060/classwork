// import { useState } from "react"
import { todoitem_context } from "../../Store/todoitem_store";
import "./Add_task.css";
import React, { useContext, useState } from "react";

let Add_task = () => {

  const {onaddclick}=useContext(todoitem_context)

  let [task, settask] = useState("");
  let [taskdate, settaskdate] = useState("");

  const ontextchangehandeler = (e) => {
    settask(e.target.value);
  
  };

  const ondatechangehandeler = (e) => {
    settaskdate(e.target.value);
  };

  const onaddbuttoncickhandler = () => {
    const newlist_data ={
        fullname:task,
        date:new Date(taskdate)
    }
    onaddclick(newlist_data);
  settask("")
  settaskdate("")
  };

  return (
    <div className="inp">
      <input
        type="text"
        placeholder="enter To-Do-List"
        autoFocus
        onChange={ontextchangehandeler}
        value={task}
      ></input>
      <input type="date" onChange={ondatechangehandeler}  value={taskdate}/>
      <button onClick={onaddbuttoncickhandler}> add </button>
    </div>
  );
};
export default Add_task;
