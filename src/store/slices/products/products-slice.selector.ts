import { RootState } from "../../store";

export const getProducts = (state: RootState) => state.products.products;
