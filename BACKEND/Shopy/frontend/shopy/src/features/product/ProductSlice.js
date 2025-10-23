import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const featchproduct = createAsyncThunk("featchproduct",async (_,{rejectWithValue})=>{

    const response = await fetch("http://127.0.0.1:8000/product/")

    try{
        const result = await response.json()
        // console.log(result);
        
        return result

    }catch{
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
            state.error =action.payload || console.log(state.error);
            
        })
    }
})




export default ProductsSlice.reducer;