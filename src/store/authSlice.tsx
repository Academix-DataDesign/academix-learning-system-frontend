import { createSlice } from "@reduxjs/toolkit";

const storedAuthData = localStorage.getItem("token") as any;
const initialState = {
  isAuthenticated: !!storedAuthData,
  user: storedAuthData ? storedAuthData : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = JSON.stringify(action.payload.token);

      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;

      localStorage.removeItem("token");
    },
   
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
