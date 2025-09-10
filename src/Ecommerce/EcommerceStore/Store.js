import MobileNumberReducer from "../EcommerceReducer/MobileNumberReducer";
import MoreoptionReducer from "../EcommerceReducer/MoreoptionReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    moreOption: MoreoptionReducer.reducer,
    mobileNumberReducer: MobileNumberReducer.reducer,
  },
});

export default store;
