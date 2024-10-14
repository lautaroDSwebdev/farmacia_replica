import {  createSlice } from "@reduxjs/toolkit";
import data from "../store.json"

// interface ProductDetails {
//     id: string;
//     img: string;
//     title: string;
//     price: string; // "$2581,00" como string debido al símbolo
//     stock: number;
//     description: string;
//     add_kart: string; // Añadir al carrito
//   }
//   interface StateCart{
//     cart: string[]
//   }

const slice = createSlice({
    name: "cart",
    initialState: data.store.prods1,
    reducers: {
        addCart: (state, action) => {
            state.cart.push(action.payload)
        },
        delToCart: (state, action) => {
            state.cart = state.cart.filter( e => e.id !== action.payload.id)
        }
    },
}
)
export default slice

export const { addCart, delToCart} = slice.actions 

