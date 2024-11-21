import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IUserLoginResponse,
  IUserRegisterResponse,
  authSliceName,
} from "./models/auth-slice.model";
import { userLogin, userRegister } from "./auth-thunks";

interface AuthState {
  logged: boolean;
  username: string;
  email: string;
  bookmarks: any[];
  error: any;
  loading: boolean;
  userId: string;
}

const initialState: AuthState = {
  logged: null,
  username: null,
  email: null,
  bookmarks: null,
  error: null,
  loading: false,
  userId: null,
};

export const authSlice = createSlice({
  name: authSliceName,
  initialState,
  reducers: {
    logout(state: AuthState) {
      state.logged = null;
      state.username = null;
      state.email = null;
      state.bookmarks = null;
      state.error = null;
      state.loading = false;
      state.userId = null;
    },
    clearError(state: AuthState) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userLogin.fulfilled,
        (state, action: PayloadAction<IUserLoginResponse>) => {
          state.logged = true;
          state.loading = false;
          state.email = action.payload.data?.email;
          state.username = action.payload.data?.username;
          state.userId = action.payload.data?.userId;
        }
      )
      .addCase(userLogin.rejected, (state, action: PayloadAction<any>) => {
        console.log(action);
        state.error = action.payload;
      })
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userRegister.fulfilled,
        (state, action: PayloadAction<IUserRegisterResponse>) => {
          state.logged = true;
          state.loading = false;
          state.email = action.payload.data.email;
          state.username = action.payload.data.username;
          state.userId = action.payload.data.userId;
        }
      )
      .addCase(userRegister.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;
