import { RootState } from "../../store";

export const getProductsBySubcategory = (state: RootState) =>
  state.products.productsBySubCategory;

export const getProductsByCategory = (state: RootState) =>
  state.products.productsByCategory;
