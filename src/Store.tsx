import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    auth: userReducer, 
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;