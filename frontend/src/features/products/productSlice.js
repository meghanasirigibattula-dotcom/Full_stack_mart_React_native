import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct:(state,action)=>{
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  },
});
export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;