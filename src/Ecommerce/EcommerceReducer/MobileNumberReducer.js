import { createSlice } from "@reduxjs/toolkit";

const MobileNumberReducer = createSlice({
  name: "mobileNumberReducer",
  initialState: {
    mobileNumber: "",
    errorMessage: "",
  },
  reducers: {
    updateMobileNumber(state, action) {
      state.mobileNumber = action.payload;
    },
    updateErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});
export default MobileNumberReducer;
export const MobileNumberReducerActions = MobileNumberReducer.actions;
