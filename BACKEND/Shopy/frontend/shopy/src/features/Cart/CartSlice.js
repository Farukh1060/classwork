import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const featchCart = createAsyncThunk("fetchCart",async (_,{rejectWithValue})=>{
    const token = localStorage.getItem("access");
    const response = await fetch("https://classwork-p6za.onrender.com/cart/",{
        method:"get",
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })

    try{
        const result = await response.json()
        // console.log(result);
        
        return result
    }catch(error){ 
        return rejectWithValue(error.message)
    }

})

export const featchPostCart = createAsyncThunk("featchPostCart",async (id,{rejectWithValue})=>{
    // console.log("id",id);
    const token = localStorage.getItem("access");
    const response =await fetch(
        "https://classwork-p6za.onrender.com/cart/",
        {
            method:"post",
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body:JSON.stringify({
                product:id,
                quantity:1
            })
        }
    )
    // console.log(response);
    

    try{
        const result = await response.json()
        // console.log(result);
        
        return result
    }catch(error){ 
        return rejectWithValue(error.message)
    }

})

export const DeleteCart = createAsyncThunk("DeleteCart",async(id,{rejectWithValue})=>{
    // console.log("delete",id);
    const token = localStorage.getItem("access");
    
     const response = await fetch(`https://classwork-p6za.onrender.com/cart/${id}`,{
        method:"delete",
        headers:{
            Authorization: `Bearer ${token}`,
        },
        
    })

    try{
        const result = await response.json()
        // console.log(result);
        
        return id
    }catch(error){ 
        return rejectWithValue(error.message)
    }
})

export const UpdateQty = createAsyncThunk("UpdateQty",async ({pk,qty},{rejectWithValue})=>{
    // console.log("id",pk);
    const token = localStorage.getItem("access");
    const response =await fetch(
        `https://classwork-p6za.onrender.com/cart/quantity/${pk}`,
        {
            method:"put",
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body:JSON.stringify({
                quantity:qty
            })
        }
    )
    // console.log("resss",response);
    

    try{
        const result = await response.json()
        // console.log(result);
        
        return result
    }catch(error){ 
        return rejectWithValue(error.message)
    }

})



const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        updateqty:[],
        loading:false,
        error:null
    },
    extraReducers: (builder)=>{
        builder
        // get cart
        .addCase(featchCart.pending,(state,action)=>{
            state.loading=true;
            state.error = null;
        })
        .addCase(featchCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.items = action.payload
        })
        .addCase(featchCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            // console.log(action)
        })
        // DELETE

        .addCase(DeleteCart.pending,(state,action)=>{
            state.loading=true;
            state.error = null;
        })
        .addCase(DeleteCart.fulfilled, (state, action) => {
            state.loading =false
            state.items = state.items.data.filter((item) => {return item.id !== action.payload})
            // console.log(state.items);  
        })
        .addCase(DeleteCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            // console.log(action)
        })

        // update quantity

        // .addCase(UpdateQty.pending,(state,action)=>{
        //     state.loading=true;
        //     state.error = null;
        // })
        // .addCase(UpdateQty.fulfilled, (state, action) => {
        //     state.loading =false
        //     // state.items = state.items.filter((item) => {return item.id !== action.payload})
        //     console.log(action.payload);  
        // })
        // .addCase(UpdateQty.rejected,(state,action)=>{
        //     state.loading = false;
        //     state.error = action.payload;
        //     // console.log(action)
        // })


    }


})

export default CartSlice.reducer