import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  name: string;
};

const initialState: UserState = {
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    clearStore: () => initialState,
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
