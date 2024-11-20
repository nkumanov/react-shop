import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  EAuthThunkNames,
  IUserLoginResponse,
  IUserRegisterResponse,
} from "./models/auth-slice.model";
import api from "../../../shared/axios-client/api";

export const userLogin = createAsyncThunk(
  EAuthThunkNames.AUTH_LOGIN,
  async (userData: { email: string; password: string }) => {
    const response = await api.post<IUserLoginResponse>(
      "user/auth/signin",
      userData
    );
    return response.data;
  }
);

export const userRegister = createAsyncThunk(
  EAuthThunkNames.AUTH_REGISTER,
  async (userRegisterData: {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
  }) => {
    const response = await api.post<IUserRegisterResponse>(
      "user/auth/register",
      userRegisterData
    );
    return response.data;
  }
);
