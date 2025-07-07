import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { showUser } from '../../../../../../CLASS_ASS/redux_thunk/react_thunk/src/feature/userDetailSlice';


//all product
export const showproduct = createAsyncThunk("showproduct",async()=>{
       const response = await fetch("https://dummyjson.com/products");
      //  console.log(response.json());
       
       return response.json()

})

//by id

export const showproductbyid = createAsyncThunk("showproductbyid",async(id,{ getState })=>{
  const existingProduct = getState().products.product_data.find(p => p.id === Number(id));
    if (existingProduct) return existingProduct;

    // console.log(id);
    
  const response = await fetch(`https://dummyjson.com/products/${Number(id)}`);
  // console.log(response.json());
  // 
  return response.json()

})
// console.log(showproductbyid);


const initialState = {
  product_data:[],   //allproduct
  selectedProduct:[], // product by id
  selectedbycatag :"home",
  loading:false,
  error:null
}


export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{
    setproductbycatag : (state,action) =>{
      state.selectedbycatag = action.payload
      // console.log(action.payload);
      
    }
  },
  extraReducers:(builder)=>{
      builder
      .addCase(showproduct.pending,(state)=>{
        state.loading=true
      })
      .addCase(showproduct.fulfilled,(state,action)=>{
        state.loading=false
        state.product_data=action.payload.products
       })
      .addCase(showproduct.rejected,(state, action)=>{
        console.log("error",action.payload)
        state.error=true
      })
      .addCase(showproductbyid.pending, (state) => {
        state.loading = true;
      })
      .addCase(showproductbyid.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
        // console.log(action.payload);
        
      })
      .addCase(showproductbyid.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
    

})

// Action creators are generated for each case reducer function
export const { setproductbycatag  } = ProductSlice.actions

export default ProductSlice.reducer