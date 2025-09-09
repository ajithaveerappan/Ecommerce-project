import MoreoptionReducer from "../EcommerceReducer/MoreoptionReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    moreOption: MoreoptionReducer.reducer,
  },
});

export default store;
