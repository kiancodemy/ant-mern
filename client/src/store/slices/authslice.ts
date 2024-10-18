import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { usertype } from "../../types/user";
////update user///
export const userupdate = createAsyncThunk(
  `/users/updateUser`,
  async ({ body, id }: { body: any; id: string }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/users/updateUser/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error("Update failed");
    }
  }
);
try {
  const response = await fetch(`${import.meta.env.VITE_BASEURL}/users/logout`, {
    credentials: "include",
  });
  console.log(response.json());
} catch (err) {
  throw new Error("no");
}
export const fetchauth = createAsyncThunk("users/fetchByIdStatus", async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASEURL}/users/logout`,
      { credentials: "include" }
    );
    return response.json();
  } catch (err) {
    return err;
  }
});
const initialState: usertype = {
  userinfo: {
    id: "",
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
    builder.addCase(fetchauth.fulfilled, (state: any) => {
      state.userinfo = { id: "", username: "", email: "", role: "" };
    });
    builder.addCase(userupdate.fulfilled, (state: any, action) => {
      state.userinfo = action.payload;
    });
  },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;
