import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCartRedux: (state, action) => {
      state.cart.push(action.payload);
    },
    delToCartRedux: (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload.id);
    },
    // sumarTotal: (state) => {
    //   state.cart.reduce((total, product) => total + product.price, 0);
    // }
  },
});
export default slice;

export const { addCartRedux, delToCartRedux } = slice.actions;
