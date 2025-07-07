

import { createSlice } from "@reduxjs/toolkit";
import {users} from "../../../db.json"
import { useState } from "react";

 const initialState = users

//  const edit_data = {}



    

     

// console.log(initialState);

export const crudSlice = createSlice({
    name: 'abc',
    initialState,
    reducers:{
        submit_data:(state,actions)=>{
            
            fetch("http://localhost:3000/users",{
                method:"post",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(actions.payload)
                
            })
            console.log(actions.payload);

        },
        delete_data:(state,action)=>{
            fetch(`http://localhost:3000/users/${action.payload}`,{
                method:"delete"
            })
        },
        update_data:(state,action)=>{
        
            console.log(action.payload);
           

            
            

            // fetch(`http://localhost:3000/users/${action.payload}`,{
            //     method:"put",
            //     headers:{"content-type":"application/json"},
            //     body:JSON.stringify({})
                
            // })

        }


    }

})
console.log(crudSlice.actions);

export const {submit_data,delete_data,update_data} = crudSlice.actions
export default crudSlice.reducer