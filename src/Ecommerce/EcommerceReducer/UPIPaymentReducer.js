import { createSlice } from "@reduxjs/toolkit";

const UPIPaymentReducer = createSlice({
  name: "UPIPaymentReducer",
  initialState: {
    upi: "",
    errorMessage: "",
  },
  reducers: {
    updateUpi(state, action) {
      state.upi = action.payload;
    },
    updateErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});
export default UPIPaymentReducer;
export const UPIPaymentReducerActions = UPIPaymentReducer.actions;
