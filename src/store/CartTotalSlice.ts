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
  exist: any;
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
      const exist = state.items.findIndex(
        (x) => x.product.id === newItem.product.id
      );

      if (exist >= 0) {
        state.items[exist] = {
          ...state.items[exist],
          qty: state.items[exist].qty + 1,
        };
        state.totalqty++;
        state.totalAmount += newItem.product.price;
      } else {
        state.items.push({ ...newItem, qty: 1 });
        state.totalqty++;
        state.totalAmount += newItem.product.price;
      }
    },
    removeItemToCart(state, action) {
      const exist = state.items.findIndex(
        (x) => x.product.id === action.payload.product.id
      );
      if (state.items[exist].qty === 1) {
        state.items.splice(exist, 1);
        state.totalqty--;
        state.totalAmount -= action.payload.product.price;
      } else {
        state.items[exist] = {
          ...state.items[exist],
          qty: state.items[exist].qty - 1,
        };
        state.totalqty--;
        state.totalAmount -= action.payload.product.price;
      }
    },
    removeItem(state, action) {
      const exist = state.items.findIndex(
        (x) => x.product.id === action.payload.product.id
      );

      const qty = state.items.map((x) => x.qty);

      if (exist >= 0) {
        state.items.splice(exist, 1);
        state.totalqty -= qty[exist];
        state.totalAmount -= action.payload.product.price * qty[exist];
      }
    },
  },
});

export const { addItemToCart, removeItemToCart, removeItem } =
  cartSliceTotal.actions;

export const cartItems = (state: RootState) => state.cartItem;

export default cartSliceTotal.reducer;
