import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const featchPostCart = createAsyncThunk("featchPostCart",async (id,{rejectWithValue})=>{
    // console.log(id);
    
    const response =await fetch(
        "http://127.0.0.1:8000/cart/",
        {
            method:"post",
            headers:{
                'Content-Type': 'application/json',
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
        console.log(result);
        
        return result
    }catch(error){ 
        return rejectWithValue(error.message)
    }

})



const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        loading:false,
        error:null
    },
    extraReducers: (builder)=>{
        builder
        .addCase(featchPostCart.pending,(state,action)=>{
            state.loading=true;
            state.error = null;
        })
        .addCase(featchPostCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.items = action.payload
        })
        .addCase(featchPostCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            console.log(action)
        })

    }


})

export default CartSlice.reducer