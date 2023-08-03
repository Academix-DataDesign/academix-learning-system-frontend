// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userDataFromLocalStorage = localStorage.getItem("user");
const initialUserState = userDataFromLocalStorage
  ? JSON.parse(userDataFromLocalStorage)
  : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: initialUserState,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
