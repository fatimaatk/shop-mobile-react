import { configureStore } from "@reduxjs/toolkit";

import { cartSliceTotal } from "./CartTotalSlice";

export const store = configureStore({
  reducer: {
    cartItem: cartSliceTotal.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
