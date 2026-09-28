import {createSlice} from "@reduxjs/toolkit"  ;

const cartSlice= createSlice({
    name:cart,
    initialState:{
        items:[],
        loading:false,
        error:null },
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload);
        }
    }

})
export const{addTocart}=cartSlice.actions;
export default cartSlice.reducer;