export const authSliceName = "auth";

export enum EAuthThunkNames {
  AUTH_LOGIN = "auth/login",
  AUTH_REGISTER = "auth/register",
}

export interface IUserLoginResponse {
  data: {
    username: string;
    email: string;
    userId: string;
    token: string;
  };
}

export interface IUserRegisterResponse extends IUserLoginResponse {}
