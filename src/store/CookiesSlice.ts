import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface CookiesState {
  id?: number;
  viewed: [];
}

// Define the initial state using that type
const initialState: CookiesState = {
  viewed: [],
};

export const CookiesSlice = createSlice({
  name: "cookies",
  initialState,
  reducers: {
    add_to_cart: (state, action: PayloadAction) => {
      const viewed: [] = [];
    },
  },
});
