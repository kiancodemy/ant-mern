import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: {
  title: string;
  sort: String;
  category: string;
  brand: string;
} = {
  sort: "",
  category: "",
  brand: "",
  title: "",
};

export const productSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setsort: (state, action) => {
      state.sort = action.payload;
    },
    setcategory: (state, action) => {
      state.category = action.payload;
    },
    setbrandd: (state, action) => {
      state.brand = action.payload;
    },
    settitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setsort, setcategory, setbrandd, settitle } =
  productSlice.actions;

export default productSlice.reducer;
