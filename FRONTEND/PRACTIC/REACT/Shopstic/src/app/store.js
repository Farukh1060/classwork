import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "../features/Product/Productslice"



export const store = configureStore({
  reducer: {
    products:productsReducer,



  },
})
export default store