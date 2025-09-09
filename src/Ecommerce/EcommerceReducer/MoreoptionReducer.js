import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  anchorEl: null,
};
const MoreoptionReducer = createSlice({
  name: "moreOption",
  initialState,
  reducers: {
    openMenu: (state, action) => {
      state.anchorEl = action.payload;
    },
    closeMenu: (state) => {
      state.anchorEl = null;
    },
  },
});
export default MoreoptionReducer;
export const { openMenu, closeMenu } = MoreoptionReducer.actions;
