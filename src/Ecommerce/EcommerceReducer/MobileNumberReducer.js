import { createSlice } from "@reduxjs/toolkit";

const MobileNumberReducer = createSlice({
  name: "mobileNumberReducer",
  initialState: {
    mobileNumber: "",
    errorMessage: "",
    otp: "",
    currentScreen: "login",
  },
  reducers: {
    updateMobileNumber(state, action) {
      state.mobileNumber = action.payload;
    },
    updateErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    updateOTP(state, action) {
      state.otp = action.payload;
    },
    updateCurrentScreen(state, action) {
      state.currentScreen = action.payload;
    },
  },
});
export default MobileNumberReducer;
export const MobileNumberReducerActions = MobileNumberReducer.actions;
