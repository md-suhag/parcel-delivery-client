import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToAuth: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { saveToAuth } = authSlice.actions;

export default authSlice.reducer;
