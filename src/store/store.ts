import { configureStore } from "@reduxjs/toolkit";
import * as AuthSlice from "./slices/auth/index";
import uiSlice from "./slices/ui/ui-slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    [AuthSlice.authSliceName]: AuthSlice.authReducer,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;