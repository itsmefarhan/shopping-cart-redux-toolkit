import { createSlice, configureStore } from "@reduxjs/toolkit";
import { initialState } from "./state";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) return item;
        return {
          ...item,
          inCart: true,
        };
      });
    },
    removeFromCart: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) return item;
        return {
          ...item,
          inCart: false,
        };
      });
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export const { addToCart, removeFromCart } = cartSlice.actions;

export { cartSlice, store };
