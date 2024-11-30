import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface CartType{
  cart:  { id: number }[]
}
interface PayloadType{
  payload: { id: number };
}
const slice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCartRedux: (state: any, action) => {
      state.cart.push(action.payload);
    },
    delToCartRedux: (state: CartType , action: PayloadAction<PayloadType['payload']>) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload.id);
    },
    // sumarTotal: (state) => {
    //   state.cart.reduce((total, product) => total + product.price, 0);
    // }
  },

  // type PayloadAction<{id: number}>,
});
export default slice;

export const { addCartRedux, delToCartRedux } = slice.actions;
