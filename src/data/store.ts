import { configureStore } from "@reduxjs/toolkit";
import ramReducer from "./ramSlice";
import registerReducer from "./registerSlice";

export const store = configureStore({
  reducer: {
    ram: ramReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
