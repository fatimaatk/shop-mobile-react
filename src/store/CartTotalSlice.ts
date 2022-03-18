import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for item
export interface ItemType {
  id?: number;
  price: number;
  totalQty: number;
  totalPrice: number;
  qty: number;
  name: string;
  imageName: string;
  product?: any;
}

// Define a type for the slice state
export interface CartState {
  totalAmount: number;
  totalqty: number;
  items: ItemType[];
}

// Define the initial state using that type
const initialState: CartState = {
  totalAmount: 0,
  totalqty: 0,
  items: [],
};

//panier total
export const cartSliceTotal = createSlice({
  name: "totalCart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      let newItem = action.payload;

      state.totalqty++;
      state.items.push(newItem);
      state.totalAmount += newItem.product.price;
    },
    removeItemToCart(state, action) {
      const item = action.payload;
      const id = action.payload;
      state.totalqty--;
      state.items.filter((item) => item.id !== item.id);
      state.totalAmount -= item.product.price;
    },
  },
});

export const { addItemToCart, removeItemToCart } = cartSliceTotal.actions;

export const cartItems = (state: RootState) => state.cartItem;

export default cartSliceTotal.reducer;
