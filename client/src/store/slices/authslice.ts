import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface auth {
  value: number;
}

const initialState: auth = {
  value: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setuser: (state, action) => {},
  },
});

export const { setuser } = authSlice.actions;

export default authSlice.reducer;
