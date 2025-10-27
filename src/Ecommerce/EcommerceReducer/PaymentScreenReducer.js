import { createSlice } from "@reduxjs/toolkit";

const PaymentScreenReducer = createSlice({
  name: "PaymentscreenReducer",
  initialState: {
    currentPaymentMethod: null,
  },
  reducers: {
    updateCurrentPaymentMethod(state, action) {
      state.currentPaymentMethod = action.payload;
    },
  },
});
export default PaymentScreenReducer;
export const PaymentScreenReducerActions = PaymentScreenReducer.actions;
