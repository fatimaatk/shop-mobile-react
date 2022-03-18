import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface CartState {
  qty: number;
  totalAmount: number;
  totalqty: number;
  cartItem: [];
}

// Define the initial state using that type
const initialState: CartState = {
  qty: 0,
  totalAmount: 0,
  totalqty: 0,
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    decrement: (state) => {
      state.qty -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    increment: (state, action: PayloadAction<number>) => {
      state.qty += 1;
      (state.totalAmount += action.payload).toFixed(2);
    },
    incrementByQty: (state, action: PayloadAction<number>) => {
      state.qty += action.payload;
      state.totalAmount += action.payload;
    },
  },
});

export const { increment, decrement, incrementByQty } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const qtyCart = (state: RootState) => state.cart.qty;
export const amountCart = (state: RootState) => state.cart.totalAmount;

export default cartSlice.reducer;
