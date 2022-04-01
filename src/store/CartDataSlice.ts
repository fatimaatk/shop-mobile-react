import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductsType from "../model/productType";
import { RootState } from "./store";

export interface CartDataSlice {
  cartData: ProductsType[];
  loading: boolean;
}

const initialState: CartDataSlice = {
  cartData: [],
  loading: false,
};

//categories correspond au thème, et getCateg correspond à l'action
const getCart = createAsyncThunk("cart/getCart", async (thunkAPI) => {
  const response = await fetch(`http://localhost:3000/carts`).then((data) =>
    data.json()
  );
  return response;
});

export const cartDataSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      console.log("pending");
      state.loading = true;
    });
    builder.addCase(getCart.fulfilled, (state, { payload }) => {
      console.log("fulfilled");
      state.loading = false;
      state.cartData = payload;
    });
    builder.addCase(getCart.rejected, (state) => {
      console.log("rejected");
      state.loading = false;
    });
  },
});

export default getCart;
export const cart = (state: RootState) => state.cartData;
export const cartDataReducer = cartDataSlice.reducer;
