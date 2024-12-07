import { createAsyncThunk } from "@reduxjs/toolkit";
import { EProductsThunkNames } from "./models/products.model";
import api from "../../../shared/axios-client/api";
import { setLoading } from "../ui/ui-slice";

export const getProducts = createAsyncThunk(
  EProductsThunkNames.GET_PRODUCTS,
  async (
    filters: { category: string; subCategory: string },
    { rejectWithValue, dispatch }
  ) => {
    dispatch(setLoading(true));
    try {
      const response = await api.get(
        `products/${filters.category}/${filters.subCategory}`
      );
      if ("data" in response.data) {
        dispatch(setLoading(false));
        return response.data.data.products;
      }
      if ("response" in response.data) {
        dispatch(setLoading(false));
        return rejectWithValue(response.data.response.error);
      }
    } catch (error) {
      return rejectWithValue("Unexpected error login thunk");
    }
  }
);
