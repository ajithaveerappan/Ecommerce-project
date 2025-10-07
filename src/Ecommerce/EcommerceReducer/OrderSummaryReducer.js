import { createSlice } from "@reduxjs/toolkit";

const OrderSummaryReducer = createSlice({
  name: "OrderSummaryReducer",
  initialState: {
    currentLogin: false,
  },
  reducers: {
    updatecurrentLogin(state, action) {
      state.currentLogin = action.payload;
    },
  },
});
export default OrderSummaryReducer;
export const OrderSummaryReducerActions = OrderSummaryReducer.actions;
