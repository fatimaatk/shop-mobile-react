import { configureStore } from "@reduxjs/toolkit";
import { cartDataSlice } from "./CartDataSlice";

import { cartSliceTotal } from "./CartTotalSlice";
import { categoriesSlice } from "./CategoriesSlice";
import { productsSlice } from "./ProductsSlice";

export const store = configureStore({
  reducer: {
    cartItem: cartSliceTotal.reducer,
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
    cartData: cartDataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
