import { configureStore } from "@reduxjs/toolkit";
import * as AuthSlice from "./slices/auth/index";
import uiSlice from "./slices/ui/ui-slice";
import { useDispatch } from "react-redux";
import * as ProductsSlice from "./slices/products/index";

export const store = configureStore({
  reducer: {
    [AuthSlice.authSliceName]: AuthSlice.authReducer,
    ui: uiSlice,
    products: ProductsSlice.productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
