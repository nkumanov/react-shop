import { createAsyncThunk } from "@reduxjs/toolkit";
import { IErrorResponse } from "../../../shared/api.model";
import api from "../../../shared/axios-client/api";
import { setLoading } from "../ui/ui-slice";
import {
  EProductsThunkNames,
  IProductsDataResponse,
} from "./models/products.model";

export const getProducts = createAsyncThunk(
  EProductsThunkNames.GET_PRODUCTS,
  async (
    filters: { category: string; subCategory: string },
    { rejectWithValue, dispatch }
  ) => {
    dispatch(setLoading(true));
    try {
      let response = await api.get<
        never,
        IProductsDataResponse | IErrorResponse
      >(`products/${filters.category}/${filters.subCategory}`);
      if ("data" in response) {
        dispatch(setLoading(false));
        return response.data.products;
      }
      if ("response" in response) {
        dispatch(setLoading(false));
        return rejectWithValue(response.response.error);
      }
    } catch (error) {
      return rejectWithValue("Unexpected error");
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  EProductsThunkNames.GET_PRODUCTS_BY_CATEGORY,
  async (filters: { category: string }, { rejectWithValue, dispatch }) => {
    dispatch(setLoading(true));
    try {
      let response = await api.get<
        never,
        IProductsDataResponse | IErrorResponse
      >(`products/${filters.category}`);
      if ("data" in response) {
        dispatch(setLoading(false));
        return response.data.products;
      }
      if ("response" in response) {
        dispatch(setLoading(false));
        return rejectWithValue(response.response.error);
      }
    } catch (error) {
      return rejectWithValue("Unexpected error");
    }
  }
);


