import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  EAuthThunkNames,
  IUserLoginResponse,
  IUserRegisterResponse,
} from "./models/auth-slice.model";
import api from "../../../shared/axios-client/api";
import { IErrorResponse } from "../../../shared/api.model";
import { setLoading } from "../ui/ui-slice";

export const userLogin = createAsyncThunk(
  EAuthThunkNames.AUTH_LOGIN,
  async (
    userData: { email: string; password: string },
    { dispatch, rejectWithValue }
  ) => {
    dispatch(setLoading(true));
    try {
      const response = await api.post<IUserLoginResponse | IErrorResponse>(
        "user/auth/signin",
        userData
      );
      if ("data" in response.data) {
        localStorage.setItem("auth", response.data.data.token);
        dispatch(setLoading(false));
        return response.data;
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

export const userRegister = createAsyncThunk(
  EAuthThunkNames.AUTH_REGISTER,
  async (
    userRegisterData: {
      email: string;
      password: string;
      confirmPassword: string;
      username: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await api.post<IUserRegisterResponse | IErrorResponse>(
        "user/auth/signup",
        userRegisterData
      );
      if ("data" in response.data) {
        localStorage.setItem("auth", response.data.data.token);
        dispatch(setLoading(false));
        return response.data;
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

