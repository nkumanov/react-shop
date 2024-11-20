import { RootState } from "../../store";

export const isUserLoggedInSelector = (state: RootState) => state.auth.logged;

export const loggedUserUsername = (state: RootState) => state.auth.username;

export const loggedUserEmail = (state: RootState) => state.auth.email;

export const loggedUserUserId = (state: RootState) => state.auth.userId;
