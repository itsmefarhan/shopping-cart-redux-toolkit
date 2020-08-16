import { createSlice, configureStore } from "@reduxjs/toolkit";
import { initialState } from "./state";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // add item
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export const { addToCart } = cartSlice.actions;

export { cartSlice, store };
