import { createSlice } from "@reduxjs/toolkit";
import { calculator } from "../calculator";
const initialState: {
  address: { City: ""; Street: ""; Adress: ""; Postalcode: "" };
  order: any;
} = {
  address: "",
  order: { totalQuantity: 0, totalTax: 0, totalprice: 0, AllOrders: [] },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },

    setOrder: (state, action) => {
      state.order.to;
      const find = state.order.AllOrders.find(
        (item: any) => item._id === action.payload._id
      );
      if (find) {
        const index = state.order.AllOrders.indexOf(find);
        state.order.AllOrders[index] = action.payload;

        calculator(state.order);
      } else {
        state.order.AllOrders.push(action.payload);
        calculator(state.order);
      }
    },
  },
});

export const { setAddress, setOrder } = orderSlice.actions;

export default orderSlice.reducer;
