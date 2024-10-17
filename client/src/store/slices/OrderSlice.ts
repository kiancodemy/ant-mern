import { createSlice } from "@reduxjs/toolkit";
import { calculator } from "../calculator";
const initialState: {
  address: { City: string; Street: string; Adress: string; Postalcode: string };
  order: any;
} = {
  address: { City: "", Street: "", Adress: "", Postalcode: "" },
  order: { totalQuantity: 0, totalTax: 0, totalprice: 0, AllOrders: [] },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    deleteOrder: (state, action) => {
      state.order.AllOrders = state.order.AllOrders.filter(
        (item: any) => item._id !== action.payload
      );
      calculator(state.order);
    },

    setOrder: (state, action) => {
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
    clearOrder: (state) => {
      state.order = {
        totalQuantity: 0,
        totalTax: 0,
        totalprice: 0,
        AllOrders: [],
      };
    },
  },
});

export const { setAddress, setOrder, deleteOrder,clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
