import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductData } from "../../../shared/product.model";
import { getProducts, getProductsByCategory } from "./products.thunks";

interface IProductState {
  productsBySubCategory: IProductData[];
  productsByCategory: IProductData[];
}

const initialState: IProductState = {
  productsBySubCategory: [],
  productsByCategory: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsBySubCategory = [];
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<IProductData[]>) => {
          state.productsBySubCategory = action.payload;
        }
      )
      .addCase(getProductsByCategory.pending, (state) => {
        state.productsByCategory = [];
      })
      .addCase(
        getProductsByCategory.fulfilled,
        (state, action: PayloadAction<IProductData[]>) => {
          state.productsByCategory = action.payload;
        }
      );
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
