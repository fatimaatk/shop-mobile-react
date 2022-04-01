import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductsType from "../model/productType";
import { RootState } from "./store";

export interface ProductsSlice {
  products: ProductsType[];
  loading: boolean;
}

const initialState: ProductsSlice = {
  products: [],
  loading: false,
};

//categories correspond au thème, et getCateg correspond à l'action
const getProducts = createAsyncThunk(
  "products/getProducts",
  async (thunkAPI) => {
    const response = await fetch(`http://localhost:3000/products`).then(
      (data) => data.json()
    );
    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default getProducts;
export const products = (state: RootState) => state.products;
export const productsReducer = productsSlice.reducer;
