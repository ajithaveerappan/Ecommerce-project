import addToCartReducer from "../EcommerceReducer/AddtoCartItemsReducer";
import MobileNumberReducer from "../EcommerceReducer/MobileNumberReducer";
import MoreoptionReducer from "../EcommerceReducer/MoreoptionReducer";
import { configureStore } from "@reduxjs/toolkit";
import OrderSummaryReducer from "../EcommerceReducer/OrderSummaryReducer";

const store = configureStore({
  reducer: {
    moreOption: MoreoptionReducer.reducer,
    mobileNumberReducer: MobileNumberReducer.reducer,
    addToCartReducer: addToCartReducer.reducer,
    orderSummaryReducer: OrderSummaryReducer.reducer,
  },
});

export default store;
