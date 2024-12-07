import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductData } from "../../../shared/product.model";
import { getProducts } from "./products.thunks";

interface IProductState {
  products: IProductData[];
}

const initialState: IProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action: PayloadAction<any>) => {
        state.products = [];
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<any>) => {
        state.products = action.payload;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
