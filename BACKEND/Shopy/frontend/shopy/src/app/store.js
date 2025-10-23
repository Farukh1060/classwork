import { configureStore } from '@reduxjs/toolkit';

import ProductsReducer from "../features/product/ProductSlice"
import CartReducer from "../features/Cart/CartSlice"


export const store = configureStore({
  reducer: {
    product:ProductsReducer,
    cart:CartReducer,

  },
});
