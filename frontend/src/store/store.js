import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/products/cartSlice";
export const store= configureStore({
reducer: {
  products: productReducer,
  cart: cartReducer,
}
});