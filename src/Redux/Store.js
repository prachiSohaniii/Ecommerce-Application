import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './Slices/ProductSlice'
import wishlistReducer from './Slices/WishlistSlice'
import cartReducer from './Slices/CartSlice'
import AddressReducer from './Slices/AddressSlice'
import OrderReducer from "./Slices/OrderSlice";
export const store = configureStore({
    reducer:{
        product:ProductReducer,
        wishlist:wishlistReducer,
        cart:cartReducer,
        address:AddressReducer,
        order:OrderReducer
    }
})