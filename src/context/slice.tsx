import { createSlice } from "@reduxjs/toolkit";
import data from "../store.json";

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
  },
});
export default slice;

export const { addCartRedux, delToCartRedux } = slice.actions;
