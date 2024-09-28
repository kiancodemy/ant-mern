import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { usertype } from "../../types/user";
const fetchauth = createAsyncThunk("users/fetchByIdStatus", async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASEURL}/users/checkauth`,
      { credentials: "include" }
    );
    return response.json();
  } catch (err) {
    return err;
  }
});
const initialState: usertype = {
  userinfo: {
    username: "",
    email: "",
    role: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userinfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchauth.rejected, (state) => {
      state.userinfo = { username: "", email: "", role: "" };
    });
  },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;
