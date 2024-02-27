import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartITem } from "../../components/Main";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state: any, action: any) => {
      state[action.payload.id] = action.payload;
    },
    removeFromCart: (state: any, action: any) => {
      delete state[action.payload.id];
    },
    addOne: (state: any, action: any) => {
      state[action.payload].quantity + 1;
    },
    removeOne: (state: any, action: any) => {
      state[action.payload].quantity - 1;
    },
  },
});

export const { addToCart, removeFromCart, addOne, removeOne } =
  cartSlice.actions;

export default cartSlice.reducer;
