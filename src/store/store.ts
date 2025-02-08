import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userStore";

const rootReducer = {
  user: userReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
