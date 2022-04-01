import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductsType from "../model/productType";
import { RootState } from "./store";

export interface CategoriesSlice {
  categories: ProductsType[] | any;
  loading: boolean;
}

const initialState: CategoriesSlice = {
  categories: [],
  loading: false,
};

//categories correspond au thème, et getCateg correspond à l'action
const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (thunkAPI) => {
    const response = await fetch(`http://localhost:3000/categories`).then(
      (data) => data.json()
    );
    return response;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      console.log("pending");
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      console.log("fulfilled");
      state.loading = false;
      state.categories = payload;
    });
    builder.addCase(getCategories.rejected, (state) => {
      console.log("rejected");
      state.loading = false;
    });
  },
});

export default getCategories;
export const categories = (state: RootState) => state.categories;
export const categoriesReducer = categoriesSlice.reducer;
