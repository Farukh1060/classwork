import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const featchproduct = createAsyncThunk("featchproduct",async (_,{rejectWithValue})=>{
    const BASE_URL = import.meta.env.VITE_API_URL;

    const response = await fetch(`${BASE_URL}/product/`)

    try{
        const result = await response.json()
        return result

    }catch(error){
        return rejectWithValue(error)
    }

})

const ProductsSlice = createSlice({
    name:"product",
    initialState:{
        items:[],
        loading:false,
        error :null
    },
    extraReducers: (builder)=>{
        builder
        .addCase(featchproduct.pending,(state,action)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(featchproduct.fulfilled,(state,action)=>{
            state.loading =false;
            state.items=action.payload

        })
        .addCase(featchproduct.rejected,(state,action)=>{
            state.loading=false
            state.error =action.payload;
            
        })
    }
})




export default ProductsSlice.reducer;