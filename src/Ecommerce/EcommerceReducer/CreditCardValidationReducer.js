import { createSlice } from "@reduxjs/toolkit";

const CreditCardValidationReducer = createSlice({
  name: "CreditCardValidationReducer",
  initialState: {
    cardNumber: "",
    errorMessage: "",
  },
  reducers: {
    updateCardNumber(state, action) {
      state.cardNumber = action.payload;
    },
    updateErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});
export default CreditCardValidationReducer;
export const CreditCardValidationReducerActions =
  CreditCardValidationReducer.actions;
