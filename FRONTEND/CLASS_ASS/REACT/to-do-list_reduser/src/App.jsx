import react, { useReducer, useState } from "react";
import "./App.css";
import Title from "./component/Title/Title";
import Add_task from "./component/Add_task/Add_task";
import Add_list from "./component/Add_list/Add_list";
import { todoitem_context } from "./Store/Todoitem_store";
import Todoitem_context_Provider from "./Store/Todoitem_store";
  


function App() {

  

  return (
    <Todoitem_context_Provider>
      <Title></Title>
      <Add_task ></Add_task>
      <Add_list ></Add_list>
    </Todoitem_context_Provider>
  );
}

export default App;
