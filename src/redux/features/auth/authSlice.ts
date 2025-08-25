import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "@/types";

interface IInitialState {
  user: IUser | null;
}
const initialState: IInitialState = {
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
