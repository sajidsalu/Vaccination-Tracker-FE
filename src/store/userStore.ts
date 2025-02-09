import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { LoginResponse } from "@/services/auth/auth.types";

export type UserState = {
  userId: string;
  name: string;
  authToken: string;
  refreshToken: string;
};

const initialState: UserState = {
  userId: "",
  name: "",
  authToken: "",
  refreshToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLoginResponse: (
      state: UserState,
      action: PayloadAction<LoginResponse>
    ) => {
      state.authToken = action.payload.authToken;
      state.refreshToken = action.payload.refreshToken;
      state.userId = action.payload.userId;
    },
    clearStore: () => initialState,
  },
});

export const getUsername = (state: RootState) => state.user.name;

export const getLoggedInUserId = (state: RootState) => state.user.userId;

export const getAuthToken = (state: RootState) => state.user.authToken;

export const { setUser, setLoginResponse, clearStore } = userSlice.actions;
export default userSlice.reducer;
