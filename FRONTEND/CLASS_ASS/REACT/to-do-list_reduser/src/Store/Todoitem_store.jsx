import { createContext, useReducer } from "react";




export  const todoitem_context = createContext([])
const getdispatchdata = (list_data,action)=>{
    
    let newlist = list_data;
    if(action.type==="add_data"){
       newlist = [...list_data, {fullname:action.data.fullname,date:action.data.date}];
    }else if (action.type ==="remove_data"){
      console.log(ele)
    }

    return newlist;
  }

const Todoitem_context_Provider = (props)=>{

    const[list_data,dispactdata]=useReducer(getdispatchdata,[])

  const onaddclick = (newlist_data) => {
    const setlistdata = {
      type:"add_data",
      data : newlist_data

    }
    dispactdata(setlistdata)

   
  };

  const removehandler = (ele) => {
    const setlistdata = {
      type:"remove_handler",
      data:ele

    }
  
  };

    return(
        <todoitem_context.Provider value={{list_data,onaddclick,removehandler}}>
            {props.children}
        </todoitem_context.Provider>

    )
}
export default Todoitem_context_Provider