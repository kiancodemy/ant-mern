import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: { sort: String; category: string; brand: string } = {
  sort: "",
  category: "",
  brand: "",
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
  },
});

export const { setsort, setcategory, setbrandd } = productSlice.actions;

export default productSlice.reducer;
