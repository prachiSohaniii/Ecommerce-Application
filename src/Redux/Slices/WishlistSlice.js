import {createSlice} from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    data: [],
  },
  reducers: {
    addWishlist(state, action) {
      let temp = state.data;
      temp.push(action.payload), (state.data = temp);
    },
    removeWishlist(state, action) {
      state.data = state.data.filter((item, index) => index !== action.payload);
    },
  },
});
export const {addWishlist, removeWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
