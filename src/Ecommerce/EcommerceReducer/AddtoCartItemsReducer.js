import { createSlice } from "@reduxjs/toolkit";

const addToCartReducer = createSlice({
  name: "addToCartReducer",
  initialState: {
    addToCartItems: [],
  },
  reducers: {
    updateAddToCartItems(state, action) {
      state.addToCartItems.push(action.payload);
    },
  },
});
export default addToCartReducer;
export const addToCartReducerActions = addToCartReducer.actions;
