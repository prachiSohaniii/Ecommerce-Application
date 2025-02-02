import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:'Products',
    initialState:{
        data:null,
        isLoader:false
    },
    reducers:{
       addProduct(state,action){
         state.data=action.payload
        }
    }
})
export const {addProduct}=ProductSlice.actions;
export default ProductSlice.reducer